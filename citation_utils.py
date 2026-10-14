import re
import json
from difflib import SequenceMatcher
from io import BytesIO
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urlencode
from urllib.request import Request, urlopen

from pypdf import PdfReader
from pypdf.errors import PdfReadError


DOI_PATTERN = re.compile(r"\b10\.\d{4,9}/[^\s<>\"{}|\\^`\[\]]+", re.IGNORECASE)
YEAR_PATTERN = re.compile(r"\b(?:19|20)\d{2}\b")
CITATION_PATTERN = re.compile(r"\[\[cite:([a-zA-Z0-9_-]+)\]\]")


def _clean(value):
    return re.sub(r"\s+", " ", str(value or "")).strip()


def _crossref_work(doi=None, title=None):
    if doi:
        url = f"https://api.crossref.org/works/{quote(doi, safe='/')}"
    elif title:
        query = urlencode({"query.title": title, "rows": 5, "select": "DOI,title,author,published,issued,container-title,volume,issue,page,type"})
        url = f"https://api.crossref.org/works?{query}"
    else:
        return None

    request = Request(url, headers={"User-Agent": "ThesisFlow/1.0 (local citation metadata lookup)"})
    try:
        with urlopen(request, timeout=4) as response:
            payload = json.load(response)
    except (HTTPError, URLError, TimeoutError, json.JSONDecodeError):
        return None

    if doi:
        return payload.get("message")

    items = payload.get("message", {}).get("items", [])
    if not items:
        return None
    normalize_title = lambda value: re.sub(r"[^a-z0-9]+", "", _clean(value).casefold())
    searched_title = normalize_title(title)
    work = max(
        items,
        key=lambda item: SequenceMatcher(
            None,
            normalize_title((item.get("title") or [""])[0]),
            searched_title,
        ).ratio(),
    )
    matched_title = normalize_title((work.get("title") or [""])[0])
    if not matched_title or SequenceMatcher(None, matched_title, searched_title).ratio() < 0.84:
        return None
    return work


def _is_title_candidate(line):
    normalized = _clean(line)
    if not 18 <= len(normalized) <= 240 or DOI_PATTERN.search(normalized):
        return False
    if re.fullmatch(r"[\W\d_]+", normalized):
        return False
    if re.match(r"^(abstract|keywords?|introduction|received|accepted|published|doi|copyright)\b", normalized, re.I):
        return False
    if re.search(r"\b(university|department|faculty|correspondence|email|issn|copyright)\b", normalized, re.I):
        return False
    return True


def _title_candidates(metadata_title, lines):
    candidates = []
    if _is_title_candidate(metadata_title):
        candidates.append(_clean(metadata_title))

    eligible = [line for line in lines[:35] if _is_title_candidate(line)]
    for index, line in enumerate(eligible[:8]):
        candidates.append(line)
        if index + 1 < len(eligible):
            combined = f"{line} {eligible[index + 1]}"
            if len(combined) <= 240:
                candidates.append(combined)

    unique = []
    seen = set()
    for candidate in candidates:
        key = candidate.casefold()
        if key not in seen:
            seen.add(key)
            unique.append(candidate)
    return unique


def _publication_year(work):
    for date_key in ("published-print", "published-online", "issued"):
        date_parts = work.get(date_key, {}).get("date-parts", [])
        if date_parts and date_parts[0]:
            return str(date_parts[0][0])
    return ""


def _crossref_metadata(work):
    if not work:
        return {}
    authors = []
    for author in work.get("author", []):
        family = _clean(author.get("family", ""))
        given = _clean(author.get("given", ""))
        name = f"{family}, {given}".strip(", ") if family else _clean(author.get("name", given))
        if name:
            authors.append(name)
    return {
        "title": _clean((work.get("title") or [""])[0]),
        "authors": "; ".join(authors),
        "year": _publication_year(work),
        "journal": _clean((work.get("container-title") or [""])[0]),
        "volume": _clean(work.get("volume", "")),
        "issue": _clean(work.get("issue", "")),
        "pages": _clean(work.get("page", "")),
        "doi": _clean(work.get("DOI", "")),
    }


def extract_pdf_metadata(pdf_bytes):
    try:
        reader = PdfReader(BytesIO(pdf_bytes))
    except (PdfReadError, ValueError) as error:
        raise ValueError("PDF tidak dapat dibaca. Pastikan file bukan PDF rusak atau terenkripsi.") from error

    if reader.is_encrypted:
        raise ValueError("PDF terenkripsi. Unggah PDF yang tidak diproteksi kata sandi.")

    metadata = reader.metadata
    extracted_text = "\n".join((page.extract_text() or "") for page in reader.pages[:5])
    lines = [_clean(line) for line in extracted_text.splitlines() if _clean(line)]

    metadata_title = _clean(metadata.title if metadata else "")
    title_candidates = _title_candidates(metadata_title, lines)
    title = title_candidates[0] if title_candidates else ""

    author = _clean(metadata.author if metadata else "")
    year_match = YEAR_PATTERN.search(extracted_text)
    creation_date = _clean(metadata.get("/CreationDate", "") if metadata else "")
    year = year_match.group(0) if year_match else ""
    if not year and creation_date:
        year_match = re.search(r"(?:19|20)\d{2}", creation_date)
        year = year_match.group(0) if year_match else ""

    doi_value = ""
    if metadata:
        doi_metadata = _clean(metadata.get("/doi", ""))
        if not doi_metadata:
            doi_metadata = next(
                (_clean(value) for key, value in metadata.items() if str(key).lower() == "/doi" and _clean(value)),
                "",
            )
        doi_value_match = DOI_PATTERN.search(doi_metadata)
        doi_value = doi_value_match.group(0).rstrip(".,;:)]") if doi_value_match else ""
    doi_match = DOI_PATTERN.search(extracted_text)
    doi = doi_value or (doi_match.group(0).rstrip(".,;:)]") if doi_match else "")

    source = {
        "title": title,
        "authors": author,
        "year": year,
        "journal": "",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": doi,
    }
    work = _crossref_work(doi=doi) if doi else None
    if work is None:
        for candidate in title_candidates[:3]:
            work = _crossref_work(title=candidate)
            if work:
                break
    if work:
        source.update({key: value for key, value in _crossref_metadata(work).items() if value})
        source["metadataSource"] = "Crossref"
    else:
        source["metadataSource"] = "PDF"
    return source


def _authors(source):
    value = _clean(source.get("authors", ""))
    if not value:
        return []
    return [author.strip() for author in re.split(r"\s*;\s*|\s+\band\b\s+", value) if author.strip()]


def _surname(author):
    if "," in author:
        return author.split(",", 1)[0].strip()
    return author.split()[-1]


def _apa_author(author):
    if "," in author:
        surname, given_names = (part.strip() for part in author.split(",", 1))
        given = given_names
    else:
        name_parts = author.split()
        if len(name_parts) < 2:
            return author
        surname = name_parts[-1]
        given = " ".join(name_parts[:-1])
    initials = " ".join(f"{name[0].upper()}." for name in re.findall(r"[\wÀ-ÿ]+", given))
    return f"{surname}, {initials}" if initials else surname


def format_in_text_citation(source, style, number=None):
    if style == "ieee":
        return f"[{number}]"

    authors = _authors(source)
    author_text = "Penulis" if not authors else _surname(authors[0])
    if len(authors) == 2:
        author_text += f" & {_surname(authors[1])}"
    elif len(authors) > 2:
        author_text += " et al."
    year = _clean(source.get("year", "")) or "n.d."
    return f"({author_text}, {year})"


def format_reference(source, style, number=None):
    title = _clean(source.get("title", "")) or "Judul belum diisi"
    authors = _authors(source)
    year = _clean(source.get("year", "")) or "n.d."
    journal = _clean(source.get("journal", ""))
    volume = _clean(source.get("volume", ""))
    issue = _clean(source.get("issue", ""))
    pages = _clean(source.get("pages", ""))
    doi = _clean(source.get("doi", ""))

    if style == "ieee":
        author_text = ", ".join(authors) if authors else "Penulis tidak diketahui"
        details = []
        if journal:
            details.append(journal)
        if volume:
            details.append(f"vol. {volume}")
        if issue:
            details.append(f"no. {issue}")
        if pages:
            details.append(f"pp. {pages}")
        details.append(year)
        if doi:
            details.append(f"doi: {doi}")
        return f"[{number}] {author_text}, \"{title},\" {', '.join(details)}."

    apa_authors = [_apa_author(author) for author in authors]
    if not apa_authors:
        author_text = "Penulis tidak diketahui"
    elif len(apa_authors) == 1:
        author_text = apa_authors[0]
    elif len(apa_authors) == 2:
        author_text = f"{apa_authors[0]}, & {apa_authors[1]}"
    else:
        author_text = f"{', '.join(apa_authors[:-1])}, & {apa_authors[-1]}"

    reference = f"{author_text} ({year}). {title}."
    if journal:
        reference += f" {journal}"
        if volume:
            reference += f", {volume}"
            if issue:
                reference += f"({issue})"
        if pages:
            reference += f", {pages}"
        reference += "."
    if doi:
        doi_url = doi if doi.lower().startswith("https://doi.org/") else f"https://doi.org/{doi}"
        reference += f" {doi_url}"
    return reference


def cited_sources(chapters, sources):
    sources_by_id = {source.get("id"): source for source in sources if source.get("id")}
    ordered = []
    seen = set()
    for chapter in chapters:
        for section in chapter.get("sections", []):
            for block in section.get("blocks", []):
                if block.get("type") != "paragraph":
                    continue
                for source_id in CITATION_PATTERN.findall(block.get("text", "")):
                    if source_id in sources_by_id and source_id not in seen:
                        ordered.append(sources_by_id[source_id])
                        seen.add(source_id)
    return ordered


def reference_sources(chapters, sources):
    ordered = cited_sources(chapters, sources)
    seen = {source.get("id") for source in ordered}
    ordered.extend(
        source for source in sources
        if source.get("id") and source.get("id") not in seen
    )
    return ordered


def replace_citation_tokens(text, sources, style, citation_numbers):
    sources_by_id = {source.get("id"): source for source in sources if source.get("id")}

    def replace(match):
        source_id = match.group(1)
        source = sources_by_id.get(source_id)
        if source is None:
            return match.group(0)
        return format_in_text_citation(source, style, citation_numbers.get(source_id))

    return CITATION_PATTERN.sub(replace, text or "")
