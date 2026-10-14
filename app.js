const STORAGE_KEY = "thesisFlowData.v1";

const DEFAULT_DATA = {
  identitas: {
    judul: "Evaluasi Komparatif Large Language Models sebagai Reasoning Engine pada Agentic Conversational Sales Assistant: Analisis Kinerja Agen dan Purchase Funnel pada E-Commerce",
    nama: "Muhammad Syahid Kusasih",
    nim: "L200230272",
    programStudi: "PROGRAM STUDI TEKNIK INFORMATIKA",
    fakultas: "FAKULTAS KOMUNIKASI DAN INFORMATIKA",
    universitas: "UNIVERSITAS MUHAMMADIYAH SURAKARTA",
    tahun: "2026",
    pembimbing: "",
    nidn: ""
  },
  bab1: {
    latarBelakang: `Pemanfaatan kecerdasan buatan dalam sistem perdagangan elektronik terus berkembang dari fungsi yang sebelumnya terbatas pada penyediaan informasi menjadi sistem yang mampu berinteraksi secara aktif dengan pengguna. Dalam proses pembelian, pelanggan tidak selalu hanya membutuhkan daftar produk, tetapi juga membutuhkan bantuan untuk menjelaskan kebutuhan, mempertimbangkan berbagai pilihan, menyesuaikan produk dengan kriteria tertentu, serta menentukan produk yang paling sesuai.

Salah satu pendekatan yang dapat digunakan untuk kebutuhan tersebut adalah Agentic Conversational Sales Assistant. Sistem ini dirancang sebagai asisten penjualan berbasis percakapan yang dapat memahami kebutuhan pelanggan, menggali informasi yang belum lengkap, mencari produk dalam basis data, mempertimbangkan batasan dan preferensi pelanggan, serta menghasilkan rekomendasi produk yang relevan.

Kemampuan sebuah Agentic Conversational Sales Assistant sangat dipengaruhi oleh Large Language Model yang digunakan sebagai reasoning engine. Model tersebut tidak hanya menghasilkan respons dalam bentuk bahasa alami, tetapi juga menentukan bagaimana agen memahami kebutuhan pelanggan, menafsirkan batasan, memilih informasi yang relevan, memutuskan kapan sebuah tool perlu digunakan, serta menyusun rekomendasi berdasarkan data produk yang tersedia.

Penelitian ini membandingkan beberapa Large Language Models pada arsitektur agen yang sama dengan prompt, basis data produk, tools, aturan agen, harga, dan antarmuka yang dikendalikan secara seragam. Evaluasi dilakukan pada dua lapisan, yaitu kinerja teknis agen dan perilaku pengguna sepanjang purchase funnel. Dengan demikian, penelitian tidak hanya menilai kemampuan model dalam menghasilkan jawaban, tetapi juga mengamati keterkaitan kualitas operasional agen dengan tindakan pengguna selama proses pembelian.`,
    rumusanMasalah: [
      "Bagaimana perbedaan kinerja beberapa Large Language Models ketika digunakan sebagai reasoning engine pada arsitektur Agentic Conversational Sales Assistant yang sama?",
      "Apakah penggunaan Large Language Model yang berbeda sebagai reasoning engine menghasilkan perbedaan perilaku pengguna pada tahapan purchase funnel?",
      "Bagaimana keterkaitan antara kinerja teknis Agentic Conversational Sales Assistant dengan progresi perilaku pengguna sepanjang purchase funnel?"
    ],
    batasanMasalah: [
      "Penelitian berfokus pada perbandingan beberapa Large Language Models yang digunakan sebagai reasoning engine dalam satu arsitektur Agentic Conversational Sales Assistant.",
      "Seluruh model menggunakan prompt, basis data produk, tools, aturan agen, harga produk, dan antarmuka yang sama.",
      "Evaluasi kinerja agen dibatasi pada Task Success Rate, Constraint Satisfaction, Hallucination Rate, Tool Call Success Rate, Conversation Efficiency, dan Reliability.",
      "Evaluasi perilaku pengguna dibatasi pada Recommendation Click, Product Selection, Add-to-Cart Rate, Checkout Initiation Rate, dan Purchase Conversion.",
      "Pengujian perilaku pengguna dilakukan menggunakan randomized user experiment dan sticky assignment berbasis User ID."
    ],
    tujuanPenelitian: [
      "Membandingkan kinerja beberapa Large Language Models sebagai reasoning engine pada Agentic Conversational Sales Assistant.",
      "Menganalisis perbedaan perilaku pengguna pada tahapan purchase funnel untuk setiap kondisi model.",
      "Menganalisis keterkaitan antara kinerja teknis agen dan progresi pengguna sepanjang purchase funnel."
    ],
    manfaatPenelitian: `Secara akademis, penelitian ini diharapkan memberikan kontribusi terhadap kajian evaluasi Large Language Models dalam sistem berbasis agen, khususnya ketika model digunakan sebagai reasoning engine pada Agentic Conversational Sales Assistant.

Secara praktis, hasil penelitian diharapkan dapat menjadi bahan pertimbangan bagi pengembang sistem e-commerce dalam memilih Large Language Model berdasarkan kinerja teknis agen dan indikator perilaku pengguna yang terukur.`
  },
  bab2: {
    studiLiteratur: `Kelompok penelitian pertama membahas evaluasi agen berbasis Large Language Model melalui keberhasilan penyelesaian tugas, penggunaan tools, kepatuhan terhadap aturan, dan konsistensi hasil. Kelompok penelitian kedua membahas conversational recommender system dan interaksi pengguna. Kelompok penelitian ketiga membahas kemampuan reasoning dalam domain belanja serta perilaku konsumen pada sistem percakapan.`,
    researchGap: `Penelitian terdahulu cenderung mengevaluasi kemampuan model, performa agen, dan perilaku pengguna secara terpisah. Penelitian ini menempatkan beberapa Large Language Models pada arsitektur Agentic Conversational Sales Assistant yang sama, kemudian mengevaluasi kinerja teknis agen serta progresi pengguna pada purchase funnel dalam satu kerangka eksperimen.`,
    penelitianTerdahulu: [
      { peneliti: "Yao dkk. (contoh)", fokus: "Evaluasi agent benchmark", metode: "Benchmark tugas dan tool use", evaluasiAgen: "Task success, rule compliance", evaluasiPengguna: "Tidak", celah: "Belum menguji purchase funnel pengguna nyata" },
      { peneliti: "Jannach (contoh)", fokus: "Conversational recommender systems", metode: "User-oriented evaluation", evaluasiAgen: "Terbatas", evaluasiPengguna: "Ya", celah: "Tidak membandingkan reasoning engine secara terkontrol" }
    ],
    teori: [
      { judul: "Large Language Models", isi: "Jelaskan definisi LLM, kemampuan reasoning, konteks, dan keterbatasan model yang relevan dengan penelitian." },
      { judul: "Agentic Artificial Intelligence dan Reasoning Engine", isi: "Jelaskan konsep agent, planning, reasoning, tool use, serta posisi LLM sebagai reasoning engine." },
      { judul: "Agentic Conversational Sales Assistant", isi: "Jelaskan karakteristik sistem percakapan yang secara aktif membantu pengguna selama proses pencarian dan pemilihan produk." },
      { judul: "Evaluasi Kinerja Agen", isi: "Jelaskan dasar teoritis setiap metrik yang digunakan untuk mengukur performa agen." },
      { judul: "Purchase Funnel pada E-Commerce", isi: "Jelaskan progression pengguna dari recommendation click hingga purchase conversion." }
    ]
  },
  bab3: {
    desainPenelitian: "Penelitian menggunakan desain eksperimental komparatif yang terdiri atas Controlled Agent Benchmark dan Randomized User Experiment. Controlled Agent Benchmark digunakan untuk mengukur performa teknis model pada skenario yang sama, sedangkan Randomized User Experiment digunakan untuk mengamati perilaku pengguna pada kondisi model yang berbeda.",
    objekPenelitian: "Objek penelitian adalah Agentic Conversational Sales Assistant pada platform e-commerce eksperimental dengan satu kategori produk yang sama untuk seluruh model. Basis data produk digunakan sebagai sumber informasi faktual dan sebagai dasar penyusunan ground truth.",
    arsitektur: "Arsitektur sistem terdiri atas antarmuka percakapan, reasoning engine berbasis Large Language Model, basis data produk, tool pencarian produk, tool detail produk, event logger, serta modul pencatatan purchase funnel. Seluruh komponen selain reasoning engine dipertahankan sama.",
    models: [
      { label: "Model A", nama: "Model belum ditetapkan", versi: "-", temperature: "0.2", catatan: "Ganti dengan model final setelah dipilih." },
      { label: "Model B", nama: "Model belum ditetapkan", versi: "-", temperature: "0.2", catatan: "Konfigurasi dibuat semirip mungkin." },
      { label: "Model C", nama: "Model belum ditetapkan", versi: "-", temperature: "0.2", catatan: "Gunakan versi model yang dicatat secara eksplisit." }
    ],
    metrics: [
      { nama: "Task Success Rate", definisi: "Proporsi skenario yang berhasil diselesaikan sesuai ground truth.", rumus: "Jumlah skenario berhasil / total skenario", arah: "Lebih tinggi lebih baik" },
      { nama: "Constraint Satisfaction", definisi: "Tingkat pemenuhan hard constraints dan preferences pengguna.", rumus: "Constraint terpenuhi / total constraint", arah: "Lebih tinggi lebih baik" },
      { nama: "Hallucination Rate", definisi: "Proporsi klaim faktual yang tidak didukung oleh basis data produk.", rumus: "Klaim tidak didukung / total klaim faktual", arah: "Lebih rendah lebih baik" },
      { nama: "Tool Call Success Rate", definisi: "Proporsi pemanggilan tool yang valid dan berhasil.", rumus: "Tool call berhasil / total tool call", arah: "Lebih tinggi lebih baik" },
      { nama: "Conversation Efficiency", definisi: "Efisiensi untuk mencapai keberhasilan berdasarkan turns dan tokens.", rumus: "Turns-to-Success dan Tokens-to-Success", arah: "Lebih rendah lebih efisien" },
      { nama: "Reliability", definisi: "Konsistensi keberhasilan model pada pengulangan skenario.", rumus: "Keberhasilan pengulangan / total pengulangan", arah: "Lebih tinggi lebih baik" }
    ],
    groundTruth: "Ground truth disusun dari atribut faktual pada basis data produk dan kebutuhan yang didefinisikan pada setiap skenario. Setiap skenario memuat hard constraints, preferences, dan daftar produk yang dianggap memenuhi kriteria.",
    benchmark: "Setiap model dijalankan pada kumpulan skenario yang sama. Seluruh interaksi, tool call, token, jumlah turn, dan hasil akhir dicatat. Skenario diulang beberapa kali untuk mengukur konsistensi. Hasil kemudian dibandingkan dengan ground truth.",
    userExperiment: "Pengguna dialokasikan secara acak ke salah satu kondisi model. Sticky assignment berbasis User ID digunakan agar pengguna tetap berinteraksi dengan model yang sama selama periode eksperimen. Pengguna tidak diberi informasi mengenai model yang melayani mereka.",
    pengumpulanData: "Data penelitian dikumpulkan dari log percakapan, log tool call, hasil benchmark, event recommendation click, product selection, add-to-cart, checkout initiation, dan purchase conversion.",
    analisisData: "Analisis dilakukan menggunakan statistik deskriptif dan inferensial yang disesuaikan dengan tipe data dan distribusi hasil. Analisis lintas lapisan digunakan untuk mengevaluasi keterkaitan antara metrik kinerja agen dan progression pengguna pada purchase funnel.",
    etika: "Identitas pengguna tidak disimpan secara langsung. User ID digunakan dalam bentuk pseudonim. Data eksperimen dibatasi untuk kebutuhan penelitian dan akses terhadap data mentah dibatasi pada peneliti."
  },
  referensi: [
    "Yao, dkk. (2025). [Ganti dengan sitasi lengkap dari sumber asli].",
    "Jannach. (2023). [Ganti dengan sitasi lengkap dari sumber asli].",
    "Araujo. (2018). [Ganti dengan sitasi lengkap dari sumber asli].",
    "Luo, dkk. (2019). [Ganti dengan sitasi lengkap dari sumber asli]."
  ]
};

let state = loadData();
let saveTimer;
let chapterObserver;

function clone(obj) { return JSON.parse(JSON.stringify(obj)); }

function paragraphBlock(text) { return { type: "paragraph", text: text || "" }; }
function listBlock(items) { return { type: "list", items: items || [], ordered: true }; }
function tableBlock(headers, rows) {
  return { type: "table", tableText: [headers, ...rows].map(row => row.join(" | ")).join("\n") };
}
function createSourceId() {
  return window.crypto?.randomUUID?.() || `source-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
function legacySection(title, blocks) { return { title, blocks }; }

function migrateLegacyChapters(data) {
  const bab1 = data.bab1 || {};
  const bab2 = data.bab2 || {};
  const bab3 = data.bab3 || {};
  const researchRows = (bab2.penelitianTerdahulu || []).map(item => [
    item.peneliti, item.fokus, item.metode, item.evaluasiAgen, item.evaluasiPengguna, item.celah
  ]);
  const modelRows = (bab3.models || []).map(item => [item.label, item.nama, item.versi, item.temperature, item.catatan]);
  const metricRows = (bab3.metrics || []).map(item => [item.nama, item.definisi, item.rumus, item.arah]);
  return [
    {
      title: "Pendahuluan",
      sections: [
        legacySection("Latar Belakang Masalah", [paragraphBlock(bab1.latarBelakang)]),
        legacySection("Rumusan Masalah", [listBlock(bab1.rumusanMasalah)]),
        legacySection("Batasan Masalah", [listBlock(bab1.batasanMasalah)]),
        legacySection("Tujuan Penelitian", [listBlock(bab1.tujuanPenelitian)]),
        legacySection("Manfaat Penelitian", [paragraphBlock(bab1.manfaatPenelitian)])
      ]
    },
    {
      title: "Tinjauan Pustaka",
      sections: [
        legacySection("Studi Literatur dan Penelitian Terkait", [paragraphBlock(bab2.studiLiteratur)]),
        legacySection("Penelitian Terdahulu dan Celah Riset", [
          ...(researchRows.length ? [tableBlock(["Peneliti", "Fokus", "Metode", "Evaluasi Agen", "Evaluasi Pengguna", "Celah"], researchRows)] : []),
          paragraphBlock(bab2.researchGap)
        ]),
        ...(bab2.teori || []).map(theory => legacySection(theory.judul || "Landasan Teori", [paragraphBlock(theory.isi)]))
      ]
    },
    {
      title: "Metodologi Penelitian",
      sections: [
        legacySection("Desain Penelitian", [paragraphBlock(bab3.desainPenelitian)]),
        legacySection("Objek dan Lingkungan Penelitian", [paragraphBlock(bab3.objekPenelitian)]),
        legacySection("Arsitektur Agentic Conversational Sales Assistant", [paragraphBlock(bab3.arsitektur)]),
        ...(modelRows.length ? [legacySection("Large Language Models yang Dibandingkan", [tableBlock(["Kondisi", "Model", "Versi", "Temperature", "Catatan"], modelRows)])] : []),
        ...(metricRows.length ? [legacySection("Variabel dan Metrik Penelitian", [tableBlock(["Metrik", "Definisi Operasional", "Rumus", "Arah Kinerja"], metricRows)])] : []),
        legacySection("Penyusunan Ground Truth dan Skenario Uji", [paragraphBlock(bab3.groundTruth)]),
        legacySection("Prosedur Controlled Agent Benchmark", [paragraphBlock(bab3.benchmark)]),
        legacySection("Prosedur Randomized User Experiment", [paragraphBlock(bab3.userExperiment)]),
        legacySection("Teknik Pengumpulan Data", [paragraphBlock(bab3.pengumpulanData)]),
        legacySection("Teknik Analisis Data", [paragraphBlock(bab3.analisisData)]),
        legacySection("Etika, Privasi, dan Pengelolaan Data", [paragraphBlock(bab3.etika)])
      ]
    }
  ];
}

function normalizeData(data) {
  const normalized = {
    ...data,
    identitas: data.identitas || {},
    referensi: Array.isArray(data.referensi) ? data.referensi : [],
    sources: Array.isArray(data.sources) ? data.sources : [],
    citationStyle: data.citationStyle === "ieee" ? "ieee" : "apa"
  };
  normalized.sources = normalized.sources.map(source => ({
    id: source.id || createSourceId(),
    title: source.title || "",
    authors: source.authors || "",
    year: String(source.year || ""),
    journal: source.journal || "",
    volume: source.volume || "",
    issue: source.issue || "",
    pages: source.pages || "",
    doi: source.doi || ""
  }));
  if (!Array.isArray(normalized.chapters)) {
    normalized.chapters = migrateLegacyChapters(data);
    delete normalized.bab1;
    delete normalized.bab2;
    delete normalized.bab3;
  }
  normalized.chapters = normalized.chapters.map(chapter => ({
    title: chapter.title || "",
    sections: (Array.isArray(chapter.sections) ? chapter.sections : []).map(section => ({
      title: section.title || "",
      blocks: Array.isArray(section.blocks) ? section.blocks : []
    }))
  }));
  return normalized;
}

function loadData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const initial = normalizeData(clone(DEFAULT_DATA));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
  }
  try {
    const saved = normalizeData(JSON.parse(raw));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    return saved;
  } catch { return normalizeData(clone(DEFAULT_DATA)); }
}

function getPath(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}
function setPath(obj, path, value) {
  const keys = path.split(".");
  const last = keys.pop();
  const target = keys.reduce((acc, key) => acc[key], obj);
  target[last] = value;
}

function saveData() {
  const el = document.getElementById("saveState");
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    el.innerHTML = '<span class="dot"></span>Tersimpan lokal';
  } catch {
    el.innerHTML = '<span class="dot"></span>Penyimpanan penuh';
    toast("Penyimpanan browser penuh. Kurangi ukuran gambar atau export backup.");
  }
  updateProgress();
}
function queueSave() {
  const el = document.getElementById("saveState");
  el.innerHTML = '<span class="dot"></span>Menyimpan…';
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveData, 350);
}

function bindSimpleFields() {
  document.querySelectorAll("[data-key]").forEach(el => {
    const value = getPath(state, el.dataset.key);
    el.value = value ?? "";
    el.addEventListener("input", () => {
      setPath(state, el.dataset.key, el.value);
      updateCounter(el);
      queueSave();
    });
    updateCounter(el);
  });
}

function updateCounter(el) {
  const counter = document.querySelector(`[data-for="${el.id}"]`);
  if (!counter) return;
  const words = (el.value.trim().match(/\S+/g) || []).length;
  counter.textContent = `${words} kata`;
}

function renderDynamicList(path) {
  const host = document.querySelector(`[data-list="${path}"]`);
  if (!host) return;
  const items = getPath(state, path) || [];
  host.innerHTML = "";
  items.forEach((value, index) => {
    const row = document.createElement("div");
    row.className = "dynamic-row";
    row.innerHTML = `
      <div class="dynamic-index">${index + 1}</div>
      <textarea rows="${path === 'referensi' ? 2 : 3}" data-dyn-input>${escapeHtml(value)}</textarea>
      <button class="icon-btn" type="button" title="Hapus">×</button>`;
    row.querySelector("[data-dyn-input]").addEventListener("input", e => {
      items[index] = e.target.value; queueSave();
    });
    row.querySelector(".icon-btn").addEventListener("click", () => {
      items.splice(index, 1); renderDynamicList(path); queueSave();
    });
    host.appendChild(row);
  });
}

function renderSources() {
  const host = document.getElementById("sourceList");
  if (!host) return;
  host.innerHTML = state.sources.map((source, index) => `
    <article class="source-card" data-source-index="${index}">
      <div class="source-card-heading">
        <strong>${escapeHtml(source.title || `Jurnal ${index + 1}`)}</strong>
        <button class="icon-btn" type="button" data-delete-source="${index}" title="Hapus sumber">×</button>
      </div>
      <p class="source-citation-preview">${escapeHtml(formatSourceReference(source, referenceSourceEntries().findIndex(item => item.id === source.id) + 1))}</p>
      <details class="source-metadata" open>
        <summary>Lihat atau edit metadata</summary>
        <div class="source-fields">
        <label class="full">Judul<input data-source-field="title" value="${escapeAttr(source.title)}" placeholder="Judul artikel"></label>
        <label class="full">Penulis<input data-source-field="authors" value="${escapeAttr(source.authors)}" placeholder="Contoh: Sari, A.; Budi, B."></label>
        <label>Tahun<input data-source-field="year" inputmode="numeric" value="${escapeAttr(source.year)}" placeholder="2025"></label>
        <label>Jurnal<input data-source-field="journal" value="${escapeAttr(source.journal)}" placeholder="Nama jurnal"></label>
        <label>Volume<input data-source-field="volume" value="${escapeAttr(source.volume)}"></label>
        <label>Nomor<input data-source-field="issue" value="${escapeAttr(source.issue)}"></label>
        <label>Halaman<input data-source-field="pages" value="${escapeAttr(source.pages)}"></label>
        <label class="full">DOI<input data-source-field="doi" value="${escapeAttr(source.doi)}" placeholder="10.xxxx/xxxxx"></label>
        </div>
      </details>
    </article>`).join("");

  host.querySelectorAll("[data-source-field]").forEach(input => {
    input.addEventListener("input", () => {
      const source = state.sources[Number(input.closest("[data-source-index]").dataset.sourceIndex)];
      source[input.dataset.sourceField] = input.value;
      const card = input.closest("[data-source-index]");
      if (input.dataset.sourceField === "title") {
        card.querySelector(".source-card-heading strong").textContent = source.title || `Jurnal ${Number(card.dataset.sourceIndex) + 1}`;
        document.querySelectorAll("[data-cite-source]").forEach(select => {
          const option = select.querySelector(`option[value="${CSS.escape(source.id)}"]`);
          if (option) option.textContent = source.title || "Sumber tanpa judul";
        });
      }
      card.querySelector(".source-citation-preview").textContent = formatSourceReference(
        source,
        referenceSourceEntries().findIndex(item => item.id === source.id) + 1
      );
      queueSave();
    });
  });
  host.querySelectorAll("[data-delete-source]").forEach(button => {
    button.addEventListener("click", () => {
      state.sources.splice(Number(button.dataset.deleteSource), 1);
      renderSources();
      renderChapters();
      queueSave();
    });
  });
}

document.querySelectorAll("[data-add-list]").forEach(btn => {
  btn.addEventListener("click", () => {
    const path = btn.dataset.addList;
    const arr = getPath(state, path);
    arr.push("");
    renderDynamicList(path);
    queueSave();
  });
});

function fieldHTML(label, value, key, full = false, textarea = false) {
  return `<div class="${full ? 'full' : ''}">
    <label>${label}</label>
    ${textarea
      ? `<textarea rows="3" data-object-key="${key}">${escapeHtml(value || "")}</textarea>`
      : `<input type="text" data-object-key="${key}" value="${escapeAttr(value || "")}">`}
  </div>`;
}

function renderResearch() {
  const host = document.getElementById("researchList");
  host.innerHTML = "";
  state.bab2.penelitianTerdahulu.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "object-card";
    card.innerHTML = `
      <div class="object-card-head"><strong>Penelitian ${index + 1}</strong><button class="icon-btn" type="button">×</button></div>
      <div class="object-grid">
        ${fieldHTML("Peneliti / Tahun", item.peneliti, "peneliti")}
        ${fieldHTML("Fokus", item.fokus, "fokus")}
        ${fieldHTML("Model / Metode", item.metode, "metode")}
        ${fieldHTML("Evaluasi Agen", item.evaluasiAgen, "evaluasiAgen")}
        ${fieldHTML("Evaluasi Pengguna", item.evaluasiPengguna, "evaluasiPengguna")}
        ${fieldHTML("Celah", item.celah, "celah", true, true)}
      </div>`;
    bindObjectCard(card, item, () => { state.bab2.penelitianTerdahulu.splice(index, 1); renderResearch(); queueSave(); });
    host.appendChild(card);
  });
}

function renderTheory() {
  const host = document.getElementById("theoryList"); host.innerHTML = "";
  state.bab2.teori.forEach((item, index) => {
    const card = document.createElement("div"); card.className = "object-card";
    card.innerHTML = `
      <div class="object-card-head"><strong>Teori ${index + 1}</strong><button class="icon-btn" type="button">×</button></div>
      <div class="object-grid">
        ${fieldHTML("Judul subbab", item.judul, "judul", true)}
        ${fieldHTML("Isi / catatan", item.isi, "isi", true, true)}
      </div>`;
    bindObjectCard(card, item, () => { state.bab2.teori.splice(index, 1); renderTheory(); queueSave(); });
    host.appendChild(card);
  });
}

function renderModels() {
  const host = document.getElementById("modelList"); host.innerHTML = "";
  state.bab3.models.forEach((item, index) => {
    const card = document.createElement("div"); card.className = "object-card";
    card.innerHTML = `
      <div class="object-card-head"><strong>${escapeHtml(item.label || `Model ${index + 1}`)}</strong><button class="icon-btn" type="button">×</button></div>
      <div class="object-grid">
        ${fieldHTML("Label", item.label, "label")}
        ${fieldHTML("Nama model", item.nama, "nama")}
        ${fieldHTML("Versi", item.versi, "versi")}
        ${fieldHTML("Temperature", item.temperature, "temperature")}
        ${fieldHTML("Catatan", item.catatan, "catatan", true, true)}
      </div>`;
    bindObjectCard(card, item, () => { state.bab3.models.splice(index, 1); renderModels(); queueSave(); });
    host.appendChild(card);
  });
}

function renderMetrics() {
  const host = document.getElementById("metricList"); host.innerHTML = "";
  state.bab3.metrics.forEach((item, index) => {
    const card = document.createElement("div"); card.className = "object-card";
    card.innerHTML = `
      <div class="object-card-head"><strong>Metrik ${index + 1}</strong><button class="icon-btn" type="button">×</button></div>
      <div class="object-grid">
        ${fieldHTML("Nama metrik", item.nama, "nama")}
        ${fieldHTML("Arah kinerja", item.arah, "arah")}
        ${fieldHTML("Definisi operasional", item.definisi, "definisi", true, true)}
        ${fieldHTML("Rumus / cara hitung", item.rumus, "rumus", true, true)}
      </div>`;
    bindObjectCard(card, item, () => { state.bab3.metrics.splice(index, 1); renderMetrics(); queueSave(); });
    host.appendChild(card);
  });
}

function bindObjectCard(card, item, onDelete) {
  card.querySelectorAll("[data-object-key]").forEach(el => {
    el.addEventListener("input", () => { item[el.dataset.objectKey] = el.value; queueSave(); });
  });
  card.querySelector(".icon-btn").addEventListener("click", onDelete);
}

function renderContentBlock(block, chapterIndex, sectionIndex, blockIndex) {
  const blockData = `data-chapter-index="${chapterIndex}" data-section-index="${sectionIndex}" data-block-index="${blockIndex}"`;
  const labels = { paragraph: "Paragraf", list: "Daftar", image: "Gambar", table: "Tabel", chart: "Grafik" };
  let content = "";
  if (block.type === "paragraph") {
    const sourceOptions = state.sources.map(source =>
      `<option value="${escapeAttr(source.id)}">${escapeHtml(source.title || "Sumber tanpa judul")}</option>`
    ).join("");
    content = `<textarea rows="6" data-editor-field="paragraph" ${blockData} placeholder="Tulis paragraf di sini">${escapeHtml(block.text || "")}</textarea>
      <div class="cite-tools"><select data-cite-source aria-label="Pilih sumber sitasi"><option value="">Pilih sumber untuk disisipkan</option>${sourceOptions}</select><button class="mini-btn" type="button" data-action="insert-citation" ${blockData} ${state.sources.length ? "" : "disabled"}>Sisipkan sitasi</button></div>`;
  } else if (block.type === "list") {
    content = `<div class="object-grid"><label class="full">Jenis daftar<select data-editor-field="listStyle" ${blockData}><option value="numbered" ${block.ordered !== false ? "selected" : ""}>Bernomor</option><option value="bullet" ${block.ordered === false ? "selected" : ""}>Poin</option></select></label><label class="full">Isi daftar<textarea rows="5" data-editor-field="listItems" ${blockData} placeholder="Satu item per baris">${escapeHtml((block.items || []).join("\n"))}</textarea></label></div>`;
  } else if (block.type === "image") {
    const preview = block.dataUrl ? `<img src="${escapeAttr(block.dataUrl)}" alt="Pratinjau gambar">` : "";
    content = `<label class="image-picker">Pilih gambar<input type="file" accept="image/*" data-image-input ${blockData}></label><div class="image-preview">${preview}</div><label>Keterangan gambar<textarea rows="2" data-editor-field="caption" ${blockData} placeholder="Opsional">${escapeHtml(block.caption || "")}</textarea></label>`;
  } else if (block.type === "table") {
    const inputMode = block.tableInputMode || "grid";
    content = `<div class="data-input-tools"><label>Cara input<select data-editor-field="tableInputMode" ${blockData}><option value="grid" ${inputMode === "grid" ? "selected" : ""}>Kolom dan baris</option><option value="text" ${inputMode === "text" ? "selected" : ""}>Teks dengan |</option></select></label></div>
      <div data-grid-editor ${inputMode === "grid" ? "" : "hidden"}>${structuredGridHTML(block, blockData)}</div>
      <label data-text-editor ${inputMode === "text" ? "" : "hidden"}>Isi tabel<textarea rows="6" data-editor-field="tableText" ${blockData} placeholder="Kolom 1 | Kolom 2&#10;Isi 1 | Isi 2">${escapeHtml(block.tableText || "")}</textarea><small class="editor-hint">Baris pertama menjadi header. Pisahkan kolom dengan tanda |.</small></label>`;
  } else if (block.type === "chart") {
    const inputMode = block.chartInputMode || "grid";
    content = `<div class="chart-fields">
      <label>Judul grafik<input data-editor-field="chartTitle" ${blockData} value="${escapeAttr(block.chartTitle || "")}" placeholder="Contoh: Perbandingan hasil"></label>
      <label>Jenis grafik<select data-editor-field="chartType" ${blockData}>
        <option value="bar" ${block.chartType === "bar" ? "selected" : ""}>Batang</option>
        <option value="bar-comparison" ${block.chartType === "bar-comparison" ? "selected" : ""}>Batang perbandingan</option>
        <option value="line" ${block.chartType === "line" ? "selected" : ""}>Garis</option>
        <option value="line-comparison" ${block.chartType === "line-comparison" ? "selected" : ""}>Garis perbandingan</option>
        <option value="pie" ${block.chartType === "pie" ? "selected" : ""}>Lingkaran</option>
      </select></label>
      <div class="data-input-tools full"><label>Cara input<select data-editor-field="chartInputMode" ${blockData}><option value="grid" ${inputMode === "grid" ? "selected" : ""}>Kolom dan baris</option><option value="text" ${inputMode === "text" ? "selected" : ""}>Teks dengan |</option></select></label></div>
      <div class="full" data-grid-editor ${inputMode === "grid" ? "" : "hidden"}>${structuredGridHTML(block, blockData)}</div>
      <label class="full" data-text-editor ${inputMode === "text" ? "" : "hidden"}>Data grafik<textarea rows="5" data-editor-field="chartData" ${blockData} placeholder="${block.chartType?.endsWith("comparison") ? "Kategori | Seri 1 | Seri 2&#10;Kategori A | 10 | 15&#10;Kategori B | 20 | 18" : "Kategori A | 10&#10;Kategori B | 15"}">${escapeHtml(block.chartData || "")}</textarea><small class="editor-hint" data-chart-hint>${block.chartType?.endsWith("comparison") ? "Baris pertama berisi Kategori dan nama seri. Baris berikutnya berisi kategori | nilai seri 1 | nilai seri 2 (atau lebih)." : "Satu kategori per baris, pisahkan nama kategori dan angka dengan |."}</small></label>
      <label class="full">Keterangan gambar<input data-editor-field="caption" ${blockData} value="${escapeAttr(block.caption || "")}" placeholder="Opsional"></label>
      <div class="chart-editor-preview full" data-chart-preview>${chartPreviewSVG(block)}</div>
    </div>`;
  }
  return `<article class="content-block"><div class="block-heading"><strong>${labels[block.type] || "Konten"}</strong><button class="icon-btn" type="button" title="Hapus blok" data-action="delete-block" ${blockData}>×</button></div>${content}</article>`;
}

function renderChapters() {
  const host = document.getElementById("chaptersEditor");
  host.innerHTML = state.chapters.map((chapter, chapterIndex) => `
    <article class="chapter-card" id="chapter-${chapterIndex + 1}" data-chapter-index="${chapterIndex}">
      <div class="chapter-heading"><span class="section-number">BAB ${chapterIndex + 1}</span><button class="icon-btn" type="button" title="Hapus bab" data-action="delete-chapter" data-chapter-index="${chapterIndex}">×</button></div>
      <label>Judul Bab<input class="chapter-title" data-editor-field="chapterTitle" data-chapter-index="${chapterIndex}" value="${escapeAttr(chapter.title)}" placeholder="Contoh: Pendahuluan"></label>
      ${(chapter.sections || []).map((section, sectionIndex) => `
        <section class="subchapter-card" id="chapter-${chapterIndex + 1}-section-${sectionIndex + 1}" data-chapter-index="${chapterIndex}" data-section-index="${sectionIndex}">
          <div class="subchapter-heading"><span>${chapterIndex + 1}.${sectionIndex + 1}</span><button class="icon-btn" type="button" title="Hapus subbab" data-action="delete-section">×</button></div>
          <label>Judul Subbab<input data-editor-field="sectionTitle" data-chapter-index="${chapterIndex}" data-section-index="${sectionIndex}" value="${escapeAttr(section.title)}" placeholder="Contoh: Latar Belakang"></label>
          <div class="content-blocks">${(section.blocks || []).map((block, blockIndex) => renderContentBlock(block, chapterIndex, sectionIndex, blockIndex)).join("")}</div>
          <div class="block-adder"><select aria-label="Jenis konten"><option value="paragraph">Paragraf</option><option value="list">Daftar</option><option value="image">Gambar</option><option value="table">Tabel</option><option value="chart">Grafik</option></select><button class="mini-btn" type="button" data-action="add-block">+ Tambah Konten</button></div>
        </section>`).join("")}
      <button class="mini-btn add-subchapter" type="button" data-action="add-section" data-chapter-index="${chapterIndex}">+ Tambah Subbab</button>
    </article>`).join("");
  host.querySelectorAll('[data-editor-field="paragraph"]').forEach(resizeParagraphTextarea);
  host.querySelectorAll(".structured-grid").forEach(resizeStructuredGrid);
  renderChapterNav();
  updateProgress();
}

function renderChapterNav() {
  const host = document.getElementById("chapterNav");
  if (chapterObserver) chapterObserver.disconnect();
  const sectionCount = state.chapters.reduce((total, chapter) => total + (chapter.sections || []).length, 0);
  document.getElementById("chapterCount").textContent = `${state.chapters.length} bab, ${sectionCount} subbab`;
  const query = document.getElementById("chapterSearch").value.trim().toLocaleLowerCase();
  const groups = state.chapters.map((chapter, chapterIndex) => {
    const chapterTitle = chapter.title || `Bab ${chapterIndex + 1}`;
    const matchesChapter = chapterTitle.toLocaleLowerCase().includes(query);
    const matchingSections = (chapter.sections || []).map((section, sectionIndex) => ({ section, sectionIndex }))
      .filter(({ section }) => !query || matchesChapter || (section.title || "").toLocaleLowerCase().includes(query));
    if (query && !matchesChapter && matchingSections.length === 0) return "";
    const chapterId = `chapter-${chapterIndex + 1}`;
    const sectionLinks = matchingSections.map(({ section, sectionIndex }) => `
      <button class="chapter-nav-link chapter-subnav-link" type="button" data-scroll-target="${chapterId}-section-${sectionIndex + 1}" title="${escapeAttr(section.title || `Subbab ${sectionIndex + 1}`)}">
        <span class="chapter-nav-number">${chapterIndex + 1}.${sectionIndex + 1}</span>
        <span>${escapeHtml(section.title || `Subbab ${sectionIndex + 1}`)}</span>
      </button>`).join("");
    return `<div class="chapter-nav-group">
      <button class="chapter-nav-link chapter-nav-title" type="button" data-scroll-target="${chapterId}" title="${escapeAttr(chapterTitle)}">
        <span class="chapter-nav-number">BAB ${chapterIndex + 1}</span>
        <span>${escapeHtml(chapterTitle)}</span>
      </button>
      <div class="chapter-subnav">${sectionLinks}</div>
    </div>`;
  }).join("");
  host.innerHTML = groups || (query ? '<p class="chapter-nav-empty">Tidak ditemukan</p>' : "");

  chapterObserver = new IntersectionObserver(entries => {
    const current = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
    if (!current) return;
    host.querySelectorAll("[data-scroll-target]").forEach(link => {
      link.classList.toggle("active", link.dataset.scrollTarget === current.target.id);
    });
  }, { rootMargin: "-18% 0px -72% 0px", threshold: 0 });
  state.chapters.forEach((chapter, chapterIndex) => {
    const sections = chapter.sections || [];
    if (sections.length) {
      sections.forEach((_, sectionIndex) => chapterObserver.observe(document.getElementById(`chapter-${chapterIndex + 1}-section-${sectionIndex + 1}`)));
    } else {
      chapterObserver.observe(document.getElementById(`chapter-${chapterIndex + 1}`));
    }
  });
}

document.getElementById("chapterSearch").addEventListener("input", renderChapterNav);
document.getElementById("chapterNav").addEventListener("click", event => {
  const link = event.target.closest("[data-scroll-target]");
  if (!link) return;
  const target = document.getElementById(link.dataset.scrollTarget);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - 94;
  window.scrollTo({ top: Math.max(0, top), behavior: "instant" });
});

function newContentBlock(type) {
  if (type === "list") return { type, items: [], ordered: true };
  if (type === "image") return { type, dataUrl: "", caption: "" };
  if (type === "table") return { type, tableText: "Kolom 1 | Kolom 2\nIsi 1 | Isi 2" };
  if (type === "chart") return { type, chartType: "bar", chartTitle: "", chartData: "Kategori A | 10\nKategori B | 15", caption: "" };
  return { type: "paragraph", text: "" };
}

function delimitedRows(text) {
  return String(text || "").split(/\r?\n/).filter(line => line.trim())
    .map(line => line.split("|").map(cell => cell.trim()));
}

function normalizedGridRows(rows, minimumRows = 2, minimumColumns = 2) {
  const columnCount = Math.max(minimumColumns, ...rows.map(row => row.length));
  const normalized = rows.map(row => Array.from({ length: columnCount }, (_, index) => row[index] || ""));
  while (normalized.length < minimumRows) normalized.push(Array(columnCount).fill(""));
  return normalized;
}

function structuredRowsForBlock(block) {
  if (block.type === "table") {
    const text = block.tableText === undefined ? "Kolom 1 | Kolom 2\nIsi 1 | Isi 2" : block.tableText;
    return normalizedGridRows(delimitedRows(text));
  }
  if (isComparisonChart(block.chartType)) {
    const text = block.chartData === undefined ? "Kategori | Seri 1 | Seri 2\nKategori A | 10 | 10" : block.chartData;
    return normalizedGridRows(delimitedRows(text));
  }
  const text = block.chartData === undefined ? "Kategori A | 10\nKategori B | 15" : block.chartData;
  return normalizedGridRows([
    ["Kategori", "Nilai"],
    ...delimitedRows(text)
  ]);
}

function structuredGridHTML(block, blockData) {
  const comparison = isComparisonChart(block.chartType);
  const rows = structuredRowsForBlock(block);
  const minimumColumns = block.type === "table" ? 2 : comparison ? 3 : 2;
  const tableRows = rows.map((row, rowIndex) => `<tr>${row.map((cell, columnIndex) => {
    const tag = rowIndex === 0 ? "th" : "td";
    const isFixedChartHeader = block.type === "chart" && !comparison && rowIndex === 0;
    const cellContent = isFixedChartHeader
      ? escapeHtml(cell)
      : `<textarea rows="1" data-grid-cell data-grid-row="${rowIndex}" data-grid-column="${columnIndex}" ${blockData} aria-label="Baris ${rowIndex + 1}, kolom ${columnIndex + 1}">${escapeHtml(cell)}</textarea>`;
    const deleteButton = rowIndex === 0 && canDeleteColumn(block, rows[0].length)
      && (!comparison || columnIndex > 0)
      ? `<button class="grid-delete-column" type="button" data-action="grid-delete-column" data-column-index="${columnIndex}" ${blockData} title="Hapus kolom ${columnIndex + 1}" aria-label="Hapus kolom ${columnIndex + 1}">×</button>`
      : "";
    return `<${tag}>${rowIndex === 0 && !isFixedChartHeader ? `<div class="grid-header-cell">${cellContent}${deleteButton}</div>` : cellContent}</${tag}>`;
  }).join("")}</tr>`).join("");
  const canAddColumn = block.type === "table" || comparison;
  return `<div class="structured-grid-wrap"><table class="structured-grid"><tbody>${tableRows}</tbody></table>
    <div class="grid-actions"><button class="mini-btn" type="button" data-action="grid-add-row" ${blockData}>+ Tambah baris</button>${canAddColumn ? `<button class="mini-btn" type="button" data-action="grid-add-column" ${blockData} ${comparison && rows[0].length >= 7 ? "disabled" : ""}>+ Tambah kolom</button>` : ""}</div>
    <small class="editor-hint">${block.type === "table" ? "Baris pertama adalah header tabel." : comparison ? "Baris pertama berisi kategori dan nama seri; maksimal 6 seri." : "Isi kategori dan nilai, satu kategori per baris."} Data disimpan dalam format teks yang kompatibel.</small>
  </div>`;
}

function resizeGridCell(cell) {
  cell.style.height = "auto";
  cell.style.height = `${cell.scrollHeight}px`;
}

function resizeParagraphTextarea(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = `${Math.max(textarea.scrollHeight + 2, 190)}px`;
}

function resizeStructuredGrid(grid) {
  grid?.querySelectorAll("[data-grid-cell]").forEach(resizeGridCell);
}

function canDeleteColumn(block, columnCount) {
  const minimumColumns = block.type === "table" ? 2 : isComparisonChart(block.chartType) ? 3 : 2;
  return columnCount > minimumColumns;
}

function serializeGridElement(grid) {
  return [...grid.rows].map(row => [...row.querySelectorAll("[data-grid-cell]")].map(cell => cell.value).join(" | ")).join("\n");
}

function isComparisonChart(type) {
  return type === "bar-comparison" || type === "line-comparison";
}

function singleDataToComparison(data) {
  const rows = String(data || "").split(/\r?\n/).filter(line => line.trim());
  if (!rows.length) return "Kategori | Seri 1 | Seri 2\nKategori A | 10 | 10\nKategori B | 15 | 15";
  const duplicated = rows.map(line => {
    const [category, ...values] = line.split("|").map(value => value.trim());
    const value = values.join(" | ");
    return `${category} | ${value} | ${value}`;
  });
  return ["Kategori | Seri 1 | Seri 2", ...duplicated].join("\n");
}

function comparisonDataToSingle(data) {
  const lines = String(data || "").split(/\r?\n/).filter(line => line.trim());
  if (lines.length < 2) return "";
  return lines.slice(1).map(line => {
    const [category, firstValue] = line.split("|").map(value => value.trim());
    return `${category} | ${firstValue || ""}`;
  }).join("\n");
}

function bindChapterEditor() {
  const host = document.getElementById("chaptersEditor");
  host.addEventListener("input", event => {
    const field = event.target.dataset.editorField;
    if (!field && !event.target.matches("[data-grid-cell]")) return;
    const chapter = state.chapters[Number(event.target.dataset.chapterIndex)];
    const section = chapter?.sections[Number(event.target.dataset.sectionIndex)];
    const block = section?.blocks[Number(event.target.dataset.blockIndex)];
    if (field === "paragraph") resizeParagraphTextarea(event.target);
    if (field === "chapterTitle") chapter.title = event.target.value;
    if (field === "sectionTitle") section.title = event.target.value;
    if (field === "paragraph") block.text = event.target.value;
    if (field === "listItems") block.items = event.target.value.split("\n");
    if (field === "tableText") block.tableText = event.target.value;
    if (field === "chartTitle") block.chartTitle = event.target.value;
    if (field === "chartData") {
      block.chartData = event.target.value;
      if (isComparisonChart(block.chartType)) block.chartComparisonData = event.target.value;
      else block.chartSingleData = event.target.value;
    }
    if (event.target.matches("[data-grid-cell]")) {
      resizeGridCell(event.target);
      const value = serializeGridElement(event.target.closest(".structured-grid"));
      if (block.type === "table") block.tableText = value;
      else {
        block.chartData = isComparisonChart(block.chartType) ? value : value.split(/\r?\n/).slice(1).join("\n");
        if (isComparisonChart(block.chartType)) block.chartComparisonData = block.chartData;
        else block.chartSingleData = block.chartData;
      }
    }
    if (field === "caption") block.caption = event.target.value;
    if (field === "chapterTitle" || field === "sectionTitle") renderChapterNav();
    if (block?.type === "chart") {
      const preview = event.target.closest(".content-block").querySelector("[data-chart-preview]");
      preview.innerHTML = chartPreviewSVG(block);
    }
    queueSave();
  });
  host.addEventListener("change", async event => {
    const target = event.target;
    if (target.dataset.editorField === "listStyle") {
      const block = state.chapters[Number(target.dataset.chapterIndex)].sections[Number(target.dataset.sectionIndex)].blocks[Number(target.dataset.blockIndex)];
      block.ordered = target.value === "numbered";
      queueSave();
      return;
    }
    if (target.dataset.editorField === "tableInputMode" || target.dataset.editorField === "chartInputMode") {
      const block = state.chapters[Number(target.dataset.chapterIndex)].sections[Number(target.dataset.sectionIndex)].blocks[Number(target.dataset.blockIndex)];
      const isTable = target.dataset.editorField === "tableInputMode";
      block[isTable ? "tableInputMode" : "chartInputMode"] = target.value;
      const contentBlock = target.closest(".content-block");
      if (target.value === "grid") {
        const gridEditor = contentBlock.querySelector("[data-grid-editor]");
        gridEditor.innerHTML = structuredGridHTML(block, `data-chapter-index="${target.dataset.chapterIndex}" data-section-index="${target.dataset.sectionIndex}" data-block-index="${target.dataset.blockIndex}"`);
        resizeStructuredGrid(gridEditor.querySelector(".structured-grid"));
      }
      contentBlock.querySelector("[data-grid-editor]").hidden = target.value !== "grid";
      contentBlock.querySelector("[data-text-editor]").hidden = target.value !== "text";
      queueSave();
      return;
    }
    if (target.dataset.editorField === "chartType") {
      const block = state.chapters[Number(target.dataset.chapterIndex)].sections[Number(target.dataset.sectionIndex)].blocks[Number(target.dataset.blockIndex)];
      const wasComparison = isComparisonChart(block.chartType);
      const isComparison = isComparisonChart(target.value);
      if (!wasComparison && isComparison) {
        block.chartSingleData ??= block.chartData || "";
        block.chartData = block.chartComparisonData || singleDataToComparison(block.chartSingleData);
        block.chartComparisonData = block.chartData;
      } else if (wasComparison && !isComparison) {
        block.chartComparisonData = block.chartData || "";
        block.chartSingleData = comparisonDataToSingle(block.chartData);
        block.chartData = block.chartSingleData;
      }
      block.chartType = target.value;
      const contentBlock = target.closest(".content-block");
      contentBlock.querySelector('[data-editor-field="chartData"]').value = block.chartData;
      const comparison = target.value.endsWith("comparison");
      contentBlock.querySelector('[data-editor-field="chartData"]').placeholder = comparison
        ? "Kategori | Seri 1 | Seri 2\nKategori A | 10 | 15\nKategori B | 20 | 18"
        : "Kategori A | 10\nKategori B | 15";
      contentBlock.querySelector("[data-chart-hint]").textContent = comparison
        ? "Baris pertama: Kategori | nama seri 1 | nama seri 2. Baris selanjutnya berisi nilai angka untuk setiap seri (maksimal 6 seri)."
        : "Satu kategori per baris, pisahkan nama kategori dan angka dengan |.";
      contentBlock.querySelector("[data-chart-preview]").innerHTML = chartPreviewSVG(block);
      const gridEditor = contentBlock.querySelector("[data-grid-editor]");
      gridEditor.innerHTML = structuredGridHTML(block, `data-chapter-index="${target.dataset.chapterIndex}" data-section-index="${target.dataset.sectionIndex}" data-block-index="${target.dataset.blockIndex}"`);
      resizeStructuredGrid(gridEditor.querySelector(".structured-grid"));
      queueSave();
      return;
    }
    if (!target.matches("[data-image-input]") || !target.files[0]) return;
    const file = target.files[0];
    if (file.size > 12 * 1024 * 1024) { toast("Ukuran gambar maksimal 12 MB."); return; }
    try {
      const image = await createImageBitmap(file);
      const scale = Math.min(1, 1200 / Math.max(image.width, image.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(image.width * scale);
      canvas.height = Math.round(image.height * scale);
      const context = canvas.getContext("2d");
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      image.close();
      const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/jpeg", 0.72));
      if (!blob || blob.size > 700 * 1024) { toast("Gambar terlalu besar setelah dikompresi. Pilih gambar yang lebih kecil."); return; }
      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      const block = state.chapters[Number(target.dataset.chapterIndex)].sections[Number(target.dataset.sectionIndex)].blocks[Number(target.dataset.blockIndex)];
      block.dataUrl = dataUrl;
      block.caption = block.caption || file.name.replace(/\.[^.]+$/, "");
      renderChapters();
      queueSave();
    } catch {
      toast("Gambar tidak dapat dibaca.");
    }
  });
  host.addEventListener("click", event => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const sectionElement = button.closest(".subchapter-card");
    const chapterIndex = Number(button.dataset.chapterIndex ?? sectionElement?.dataset.chapterIndex);
    const sectionIndex = Number(button.dataset.sectionIndex ?? sectionElement?.dataset.sectionIndex);
    const chapter = state.chapters[chapterIndex];
    if (button.dataset.action === "insert-citation") {
      const citationSelect = button.closest(".content-block").querySelector("[data-cite-source]");
      const textarea = button.closest(".content-block").querySelector('[data-editor-field="paragraph"]');
      if (!citationSelect.value) {
        toast("Pilih sumber sitasi terlebih dahulu.");
        return;
      }
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const prefix = start > 0 && !/\s/.test(textarea.value[start - 1]) ? " " : "";
      const suffix = end < textarea.value.length && !/\s/.test(textarea.value[end]) ? " " : "";
      textarea.setRangeText(`${prefix}[[cite:${citationSelect.value}]]${suffix}`, start, end, "end");
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
      citationSelect.value = "";
      textarea.focus();
      return;
    }
    if (button.dataset.action === "add-section") chapter.sections.push({ title: "", blocks: [] });
    if (button.dataset.action === "delete-chapter") state.chapters.splice(chapterIndex, 1);
    if (button.dataset.action === "delete-section") chapter.sections.splice(sectionIndex, 1);
    if (button.dataset.action === "add-block") {
      const type = sectionElement.querySelector(".block-adder select").value;
      chapter.sections[sectionIndex].blocks.push(newContentBlock(type));
    }
    if (button.dataset.action === "delete-block") {
      const blockIndex = Number(button.dataset.blockIndex);
      chapter.sections[sectionIndex].blocks.splice(blockIndex, 1);
    }
    if (button.dataset.action === "grid-add-row" || button.dataset.action === "grid-add-column" || button.dataset.action === "grid-delete-column") {
      const blockIndex = Number(button.dataset.blockIndex);
      const block = chapter.sections[sectionIndex].blocks[blockIndex];
      const rows = structuredRowsForBlock(block);
      if (button.dataset.action === "grid-add-row") {
        rows.push(Array(rows[0].length).fill(""));
      } else if (rows[0].length < (block.type === "chart" ? 7 : Infinity)) {
        if (button.dataset.action === "grid-add-column") {
          rows.forEach((row, rowIndex) => row.push(rowIndex === 0 && block.type === "chart" ? `Seri ${row.length}` : ""));
        }
      }
      if (button.dataset.action === "grid-delete-column") {
        const columnIndex = Number(button.dataset.columnIndex);
        if (canDeleteColumn(block, rows[0].length) && (!isComparisonChart(block.chartType) || columnIndex > 0)) {
          rows.forEach(row => row.splice(columnIndex, 1));
        }
      }
      const serialized = rows.map(row => row.join(" | ")).join("\n");
      if (block.type === "table") block.tableText = serialized;
      else {
        block.chartData = isComparisonChart(block.chartType) ? serialized : rows.slice(1).map(row => row.join(" | ")).join("\n");
        if (isComparisonChart(block.chartType)) block.chartComparisonData = block.chartData;
        else block.chartSingleData = block.chartData;
      }
    }
    renderChapters();
    queueSave();
  });
  document.getElementById("addChapter").addEventListener("click", () => {
    state.chapters.push({ title: "", sections: [] });
    renderChapters();
    queueSave();
  });
}

function updateProgress() {
  const fields = [];
  document.querySelectorAll("[data-key]").forEach(el => fields.push(el.value.trim()));
  document.querySelectorAll("[data-dyn-input],[data-object-key],[data-editor-field],[data-grid-cell]").forEach(el => {
    if (!el.closest("[hidden]") && el.matches("input:not([type=file]),textarea")) fields.push(el.value.trim());
  });
  const filled = fields.filter(Boolean).length;
  const pct = fields.length ? Math.round(filled / fields.length * 100) : 0;
  document.getElementById("progressText").textContent = `${pct}%`;
  document.getElementById("heroPercent").textContent = `${pct}%`;
  document.getElementById("progressBar").style.width = `${pct}%`;
}

function exportJSON() {
  saveData();
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "skripsi_data.json"; a.click(); URL.revokeObjectURL(url);
  toast("Backup JSON dibuat.");
}

document.getElementById("exportBtn").onclick = exportJSON;
document.getElementById("importInput").addEventListener("change", async e => {
  const file = e.target.files[0]; if (!file) return;
  try {
    const parsed = JSON.parse(await file.text());
    state = normalizeData(parsed); saveData(); renderAll(); toast("Data berhasil di-import.");
  } catch { toast("File JSON tidak valid."); }
  e.target.value = "";
});

const modal = document.getElementById("modalBackdrop");
document.getElementById("resetBtn").onclick = () => modal.classList.add("show");
document.getElementById("cancelReset").onclick = () => modal.classList.remove("show");
document.getElementById("confirmReset").onclick = () => {
  state = normalizeData(clone(DEFAULT_DATA)); saveData(); renderAll(); modal.classList.remove("show"); toast("Data kembali ke contoh awal.");
};

const clearDataBackdrop = document.getElementById("clearDataBackdrop");
document.getElementById("clearDataBtn").onclick = () => clearDataBackdrop.classList.add("show");
document.getElementById("cancelClearData").onclick = () => clearDataBackdrop.classList.remove("show");
document.getElementById("confirmClearData").onclick = () => {
  state = normalizeData({
    identitas: {},
    chapters: [],
    referensi: [],
    sources: [],
    citationStyle: "apa"
  });
  saveData();
  renderAll();
  clearDataBackdrop.classList.remove("show");
  toast("Semua data berhasil dikosongkan.");
};

document.getElementById("citationStyle").value = state.citationStyle;
document.getElementById("citationStyle").addEventListener("change", event => {
  state.citationStyle = event.target.value;
  renderSources();
  queueSave();
});

document.getElementById("referenceUpload").addEventListener("change", async event => {
  const file = event.target.files[0];
  if (!file) return;
  const status = document.getElementById("citationStatus");
  status.textContent = "Membaca metadata PDF...";
  try {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("/api/references/import", { method: "POST", body: formData });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "PDF gagal diproses.");
    state.sources.push(result.source);
    renderSources();
    renderChapters();
    queueSave();
    status.textContent = result.message;
  } catch (error) {
    status.textContent = error.message || "PDF gagal diproses.";
  } finally {
    event.target.value = "";
  }
});

function escapeHtml(v) { return String(v ?? "").replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])); }
function escapeAttr(v) { return escapeHtml(v).replace(/`/g, "&#96;"); }

function toast(msg) {
  const el = document.getElementById("toast"); el.textContent = msg; el.classList.add("show");
  clearTimeout(window.__toast); window.__toast = setTimeout(() => el.classList.remove("show"), 2400);
}

async function pingServer() {
  const box = document.getElementById("statusBox");
  try {
    const res = await fetch("/api/health");
    if (!res.ok) throw new Error();
    const json = await res.json();
    box.className = "status-box ok";
    box.innerHTML = `<span class="status-icon">●</span><div><strong>Python generator siap</strong><p>${json.message}</p></div>`;
  } catch {
    box.className = "status-box error";
    box.innerHTML = `<span class="status-icon">●</span><div><strong>Python generator tidak terhubung</strong><p>Jalankan <code>python app.py</code> lalu buka <code>http://127.0.0.1:5000</code>.</p></div>`;
  }
}

function chartRows(block) {
  const lines = String(block.chartData || "").split(/\r?\n/).map(line => line.trim()).filter(Boolean);
  const comparison = block.chartType === "bar-comparison" || block.chartType === "line-comparison";
  if (comparison) {
    if (lines.length < 2) return { error: "Masukkan header dan minimal satu baris data. Format: Kategori | Seri 1 | Seri 2." };
    const headers = lines[0].split("|").map(value => value.trim());
    if (headers.length < 3 || !headers[0] || headers.slice(1).some(label => !label)) {
      return { error: "Baris pertama harus berisi Kategori | nama seri 1 | nama seri 2 (atau lebih)." };
    }
    if (headers.length > 7) return { error: "Grafik perbandingan maksimal memiliki 6 seri." };
    const rows = [];
    for (const line of lines.slice(1)) {
      const cells = line.split("|").map(value => value.trim());
      if (cells.length !== headers.length || !cells[0]) {
        return { error: "Setiap baris data harus memiliki kategori dan nilai untuk semua seri." };
      }
      const values = cells.slice(1).map(value => Number(value.replace(",", ".")));
      if (values.some(value => !Number.isFinite(value) || value < 0)) {
        return { error: "Semua nilai perbandingan harus berupa angka nol atau lebih." };
      }
      rows.push({ label: cells[0], values });
    }
    if (rows.length > 30) return { error: "Grafik maksimal memuat 30 kategori." };
    return { headers: headers.slice(1), rows };
  }

  const rows = [];
  for (const line of lines) {
    const cells = line.split("|").map(value => value.trim());
    const value = Number((cells[1] || "").replace(",", "."));
    if (cells.length !== 2 || !cells[0] || !Number.isFinite(value) || value < 0) {
      return { error: "Data harus berformat Kategori | Nilai, satu baris per kategori." };
    }
    rows.push({ label: cells[0], values: [value] });
  }
  if (rows.length > 30) return { error: "Grafik maksimal memuat 30 kategori." };
  return { headers: ["Nilai"], rows };
}

function chartPreviewSVG(block) {
  const parsed = chartRows(block);
  if (parsed.error) return `<p class="chart-preview-empty">${escapeHtml(parsed.error)}</p>`;
  const { headers, rows } = parsed;
  if (!rows.length) return '<p class="chart-preview-empty">Isi data kategori dan nilai untuk melihat grafik.</p>';
  if (block.chartType === "pie" && rows.some(row => row.values[0] <= 0)) {
    return '<p class="chart-preview-empty">Nilai pada grafik lingkaran harus lebih besar dari nol.</p>';
  }

  const colors = ["#635bff", "#ec4899", "#18a976", "#f59e0b", "#38bdf8", "#a855f7", "#f43f5e", "#14b8a6"];
  const title = block.chartTitle ? `<text x="320" y="24" text-anchor="middle" class="chart-svg-title">${escapeHtml(block.chartTitle)}</text>` : "";
  let drawing = "";
  if (block.chartType === "pie") {
    const total = rows.reduce((sum, row) => sum + row.values[0], 0);
    let angle = -Math.PI / 2;
    drawing = rows.map((row, index) => {
      const value = row.values[0];
      const next = angle + value / total * Math.PI * 2;
      const x1 = 150 + 95 * Math.cos(angle);
      const y1 = 145 + 95 * Math.sin(angle);
      const x2 = 150 + 95 * Math.cos(next);
      const y2 = 145 + 95 * Math.sin(next);
      const largeArc = next - angle > Math.PI ? 1 : 0;
      const path = `<path d="M 150 145 L ${x1.toFixed(2)} ${y1.toFixed(2)} A 95 95 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z" fill="${colors[index % colors.length]}"/>`;
      const legend = `<rect x="300" y="${56 + index * 28}" width="12" height="12" rx="3" fill="${colors[index % colors.length]}"/><text x="320" y="${67 + index * 28}" class="chart-svg-label">${escapeHtml(row.label)} (${value})</text>`;
      angle = next;
      return path + legend;
    }).join("");
  } else {
    const comparison = headers.length > 1;
    const isLine = block.chartType === "line" || block.chartType === "line-comparison";
    const maxValue = Math.max(...rows.flatMap(row => row.values), 1);
    const plot = { left: 55, right: 620, top: 48, bottom: comparison ? 190 : 205 };
    const grid = [0, 1, 2, 3, 4].map(index => {
      const y = plot.bottom - (plot.bottom - plot.top) * index / 4;
      return `<line x1="${plot.left}" y1="${y}" x2="${plot.right}" y2="${y}" class="chart-svg-grid"/>`;
    }).join("");
    const categoryWidth = (plot.right - plot.left) / rows.length;
    let marks = "";
    if (isLine) {
      marks = headers.map((_, seriesIndex) => {
        const points = rows.map((row, rowIndex) => ({
          x: plot.left + (rowIndex + .5) * categoryWidth,
          y: plot.bottom - row.values[seriesIndex] / maxValue * (plot.bottom - plot.top)
        }));
        return `<polyline points="${points.map(point => `${point.x},${point.y}`).join(" ")}" fill="none" stroke="${colors[seriesIndex % colors.length]}" stroke-width="3"/>${points.map(point => `<circle cx="${point.x}" cy="${point.y}" r="4" fill="${colors[seriesIndex % colors.length]}"/>`).join("")}`;
      }).join("");
    } else {
      const groupWidth = Math.min(72, categoryWidth * .72);
      const barWidth = groupWidth / headers.length;
      marks = rows.map((row, rowIndex) => row.values.map((value, seriesIndex) => {
        const x = plot.left + rowIndex * categoryWidth + (categoryWidth - groupWidth) / 2 + seriesIndex * barWidth;
        const height = value / maxValue * (plot.bottom - plot.top);
        return `<rect x="${x}" y="${plot.bottom - height}" width="${Math.max(1, barWidth - 2)}" height="${height}" rx="3" fill="${colors[seriesIndex % colors.length]}"/>`;
      }).join("")).join("");
    }
    const labels = rows.map((row, index) => {
      const x = plot.left + (index + .5) * categoryWidth;
      return `<text x="${x}" y="${plot.bottom + 17}" text-anchor="middle" class="chart-svg-label">${escapeHtml(row.label.slice(0, 18))}</text>`;
    }).join("");
    const legend = comparison
      ? headers.map((label, index) => {
        const x = 70 + index % 3 * 190;
        const y = 232 + Math.floor(index / 3) * 20;
        return `<rect x="${x}" y="${y - 10}" width="12" height="12" rx="3" fill="${colors[index % colors.length]}"/><text x="${x + 18}" y="${y}" class="chart-svg-label">${escapeHtml(label.slice(0, 24))}</text>`;
      }).join("")
      : "";
    drawing = `${grid}<line x1="${plot.left}" y1="${plot.bottom}" x2="${plot.right}" y2="${plot.bottom}" class="chart-svg-axis"/>${marks}${labels}${legend}`;
  }
  return `<svg class="chart-svg" viewBox="0 0 640 280" role="img" aria-label="${escapeAttr(block.chartTitle || "Pratinjau grafik")}">${title}${drawing}</svg>`;
}

function previewBlockHTML(block) {
  if (block.type === "paragraph") {
    return (block.text || "").split(/\n\n+/).filter(text => text.trim()).map(text => `<p>${escapeHtml(resolveCitationTokens(text)).replace(/\n/g, "<br>")}</p>`).join("");
  }
  if (block.type === "list") {
    const tag = block.ordered === false ? "ul" : "ol";
    const items = (block.items || []).filter(item => String(item).trim()).map(item => `<li>${escapeHtml(item)}</li>`).join("");
    return items ? `<${tag}>${items}</${tag}>` : "";
  }
  if (block.type === "image") {
    if (!String(block.dataUrl || "").startsWith("data:image/")) return "";
    return `<figure><img src="${escapeAttr(block.dataUrl)}" alt="${escapeAttr(block.caption || "Gambar")}">${block.caption ? `<figcaption>${escapeHtml(block.caption)}</figcaption>` : ""}</figure>`;
  }
  if (block.type === "table") {
    const rows = (block.tableText || "").split(/\r?\n/).filter(row => row.trim()).map(row => row.split("|").map(cell => cell.trim()));
    if (!rows.length) return "";
    const header = rows[0].map(cell => `<th>${escapeHtml(cell)}</th>`).join("");
    const body = rows.slice(1).map(row => `<tr>${row.map(cell => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("");
    return `<table><thead><tr>${header}</tr></thead><tbody>${body}</tbody></table>`;
  }
  if (block.type === "chart") {
    const caption = block.caption || block.chartTitle || "";
    return `<figure class="preview-chart">${chartPreviewSVG(block)}${caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : ""}</figure>`;
  }
  return "";
}

function citedSourceEntries() {
  const sourceById = new Map(state.sources.map(source => [source.id, source]));
  const entries = [];
  const seen = new Set();
  for (const chapter of state.chapters) {
    for (const section of chapter.sections || []) {
      for (const block of section.blocks || []) {
        if (block.type !== "paragraph") continue;
        for (const match of (block.text || "").matchAll(/\[\[cite:([a-zA-Z0-9_-]+)\]\]/g)) {
          const source = sourceById.get(match[1]);
          if (source && !seen.has(source.id)) {
            seen.add(source.id);
            entries.push(source);
          }
        }
      }
    }
  }
  return entries;
}

function referenceSourceEntries() {
  const cited = citedSourceEntries();
  const seen = new Set(cited.map(source => source.id));
  return [...cited, ...state.sources.filter(source => !seen.has(source.id))];
}

function citationNumbers() {
  return new Map(referenceSourceEntries().map((source, index) => [source.id, index + 1]));
}

function formatInTextCitation(source, numbers) {
  if (state.citationStyle === "ieee") return `[${numbers.get(source.id)}]`;
  const authors = String(source.authors || "").split(/\s*;\s*|\s+\band\b\s+/i).filter(Boolean);
  const surname = author => author.includes(",") ? author.split(",", 1)[0].trim() : author.trim().split(/\s+/).pop();
  let names = authors.length ? surname(authors[0]) : "Penulis";
  if (authors.length === 2) names += ` & ${surname(authors[1])}`;
  if (authors.length > 2) names += " et al.";
  return `(${names}, ${source.year || "n.d."})`;
}

function resolveCitationTokens(text) {
  const sourceById = new Map(state.sources.map(source => [source.id, source]));
  const numbers = citationNumbers();
  return text.replace(/\[\[cite:([a-zA-Z0-9_-]+)\]\]/g, (token, id) => {
    const source = sourceById.get(id);
    return source ? formatInTextCitation(source, numbers) : token;
  });
}

function formatApaAuthor(author) {
  let surname;
  let given;
  if (author.includes(",")) {
    [surname, given] = author.split(",", 2).map(part => part.trim());
  } else {
    const parts = author.trim().split(/\s+/);
    if (parts.length < 2) return author;
    surname = parts.pop();
    given = parts.join(" ");
  }
  const initials = (given.match(/[\wÀ-ÿ]+/g) || []).map(name => `${name[0].toUpperCase()}.`).join(" ");
  return initials ? `${surname}, ${initials}` : surname;
}

function formatSourceReference(source, number) {
  const title = source.title || "Judul belum diisi";
  const authors = String(source.authors || "").split(/\s*;\s*|\s+\band\b\s+/i).filter(Boolean);
  const apaAuthors = authors.map(formatApaAuthor);
  const authorText = !authors.length
    ? "Penulis tidak diketahui"
    : state.citationStyle === "ieee"
      ? authors.join(", ")
      : apaAuthors.length === 1
        ? apaAuthors[0]
        : apaAuthors.length === 2
          ? `${apaAuthors[0]}, & ${apaAuthors[1]}`
          : `${apaAuthors.slice(0, -1).join(", ")}, & ${apaAuthors[apaAuthors.length - 1]}`;
  const year = source.year || "n.d.";
  const journal = source.journal || "";
  const details = [
    journal,
    source.volume ? `vol. ${source.volume}` : "",
    source.issue ? `no. ${source.issue}` : "",
    source.pages ? `pp. ${source.pages}` : "",
    year,
    source.doi ? `doi: ${source.doi}` : ""
  ].filter(Boolean);
  if (state.citationStyle === "ieee") return `[${number}] ${authorText}, "${title}," ${details.join(", ")}.`;
  let reference = `${authorText} (${year}). ${title}.`;
  if (journal) {
    reference += ` ${journal}${source.volume ? `, ${source.volume}${source.issue ? `(${source.issue})` : ""}` : ""}${source.pages ? `, ${source.pages}` : ""}.`;
  }
  if (source.doi) {
    const doi = source.doi.startsWith("https://doi.org/") ? source.doi : `https://doi.org/${source.doi}`;
    reference += ` ${doi}`;
  }
  return reference;
}

function renderDocumentPreview() {
  const identity = state.identitas || {};
  const title = identity.judul || "Proposal Skripsi";
  document.getElementById("previewTitle").textContent = title;
  const tocHTML = state.chapters.map((chapter, chapterIndex) => `
    <li class="preview-toc-chapter">BAB ${chapterIndex + 1} ${escapeHtml((chapter.title || `Bab ${chapterIndex + 1}`).toUpperCase())}</li>
    ${(chapter.sections || []).map((section, sectionIndex) => `
      <li class="preview-toc-section">${chapterIndex + 1}.${sectionIndex + 1} ${escapeHtml(section.title || `Subbab ${sectionIndex + 1}`)}</li>`).join("")}`).join("");
  const chaptersHTML = state.chapters.map((chapter, chapterIndex) => `
    <section class="preview-chapter">
      <h1>BAB ${chapterIndex + 1} ${(chapter.title || `Bab ${chapterIndex + 1}`).toUpperCase()}</h1>
      ${(chapter.sections || []).map((section, sectionIndex) => `
        <section class="preview-subchapter">
          <h2>${chapterIndex + 1}.${sectionIndex + 1} ${escapeHtml(section.title || `Subbab ${sectionIndex + 1}`)}</h2>
          ${(section.blocks || []).map(previewBlockHTML).join("")}
        </section>`).join("")}
    </section>`).join("");
  const citedSources = referenceSourceEntries();
  const numbers = citationNumbers();
  const sortedSources = state.citationStyle === "ieee"
    ? citedSources
    : [...citedSources].sort((a, b) => String(a.authors || "").localeCompare(String(b.authors || "")));
  const references = [
    ...(state.referensi || []).filter(reference => String(reference).trim()),
    ...sortedSources.map(source => formatSourceReference(source, numbers.get(source.id)))
  ];
  document.getElementById("docPreview").innerHTML = `
    <article class="preview-page preview-cover">
      <div><h1>${escapeHtml(title.toUpperCase())}</h1><img class="preview-logo" src="/assets/logo_ums.png" alt="Logo Universitas Muhammadiyah Surakarta"><p>PROPOSAL SKRIPSI</p><p class="cover-description">Disusun sebagai salah satu syarat penyusunan skripsi</p></div>
      <div class="cover-author"><strong>${escapeHtml(identity.nama || "Nama")}</strong><span>${escapeHtml(identity.nim || "NIM")}</span></div>
      <div class="cover-institution"><strong>${escapeHtml(identity.programStudi || "")}</strong><strong>${escapeHtml(identity.fakultas || "")}</strong><strong>${escapeHtml(identity.universitas || "")}</strong><strong>${escapeHtml(identity.tahun || "")}</strong></div>
    </article>
    <article class="preview-page preview-approval">
      <h1>HALAMAN PERSETUJUAN</h1>
      <h2>PROPOSAL SKRIPSI</h2>
      <h3>${escapeHtml(title.toUpperCase())}</h3>
      <p>Oleh:</p>
      <strong>${escapeHtml((identity.nama || "Nama").toUpperCase())}</strong>
      <strong>${escapeHtml(identity.nim || "NIM")}</strong>
      <p class="approval-statement">Telah diperiksa dan disetujui untuk diajukan pada tahapan akademik selanjutnya.</p>
      <div class="approval-signature"><p>Surakarta, __________________ ${escapeHtml(identity.tahun || "")}</p><p>Dosen Pembimbing</p><div class="signature-space"></div><strong>${escapeHtml(identity.pembimbing || "______________________________")}</strong><span>NIDN/NIK. ${escapeHtml(identity.nidn || "__________________")}</span></div>
    </article>
    <article class="preview-page preview-toc">
      <h1>DAFTAR ISI</h1>
      <ol class="preview-toc-list">${tocHTML}${references.length ? '<li class="preview-toc-chapter">DAFTAR PUSTAKA</li>' : ""}</ol>
    </article>
    <article class="preview-page preview-content">${chaptersHTML}${references.length ? `<section class="preview-chapter"><h1>DAFTAR PUSTAKA</h1><ol>${references.map(reference => `<li>${escapeHtml(reference)}</li>`).join("")}</ol></section>` : ""}</article>`;
}

const previewBackdrop = document.getElementById("previewBackdrop");
function openDocumentPreview() {
  saveData();
  renderDocumentPreview();
  previewBackdrop.classList.add("show");
  previewBackdrop.setAttribute("aria-hidden", "false");
  document.getElementById("closePreview").focus();
}
function closeDocumentPreview() {
  previewBackdrop.classList.remove("show");
  previewBackdrop.setAttribute("aria-hidden", "true");
}
document.getElementById("closePreview").onclick = closeDocumentPreview;
document.getElementById("closePreviewIcon").onclick = closeDocumentPreview;
previewBackdrop.addEventListener("click", event => {
  if (event.target === previewBackdrop) closeDocumentPreview();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && previewBackdrop.classList.contains("show")) closeDocumentPreview();
});

async function generateDocx() {
  const buttons = [document.getElementById("generateBtn"), document.getElementById("generateBtnBottom")];
  if (buttons.some(button => button.disabled)) return;
  buttons.forEach(button => { button.disabled = true; });
  saveData();
  toast("Sedang membuat DOCX…");
  try {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state)
    });
    if (!res.ok) {
      let err = "Gagal generate DOCX.";
      try { const j = await res.json(); err = j.error || err; } catch { }
      throw new Error(err);
    }
    const blob = await res.blob();
    const disposition = res.headers.get("Content-Disposition") || "";
    const match = disposition.match(/filename="?([^"]+)"?/);
    const filename = match ? match[1] : "Proposal_Skripsi.docx";
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url);
    toast(`DOCX ${filename} tersimpan di folder hasil generate.`);
  } catch (err) {
    toast(err.message || "Python generator belum berjalan.");
  } finally {
    buttons.forEach(button => { button.disabled = false; });
  }
}
document.getElementById("generateBtn").onclick = openDocumentPreview;
document.getElementById("generateBtnBottom").onclick = openDocumentPreview;
document.getElementById("previewGenerateBtn").onclick = () => {
  closeDocumentPreview();
  generateDocx();
};

document.getElementById("themeToggle").onclick = () => {
  const next = document.documentElement.dataset.theme === "dark" ? "" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("thesisFlowTheme", next);
};
document.documentElement.dataset.theme = localStorage.getItem("thesisFlowTheme") || "";

document.querySelectorAll(".nav-item").forEach(btn => {
  btn.onclick = () => document.getElementById(btn.dataset.target).scrollIntoView({ behavior: "smooth" });
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.target === entry.target.id));
    }
  });
}, { rootMargin: "-25% 0px -65% 0px", threshold: 0 });
document.querySelectorAll(".form-section").forEach(s => observer.observe(s));

function renderAll() {
  bindSimpleFields();
  renderDynamicList("referensi");
  renderSources();
  renderChapters();
  updateProgress();
}
bindChapterEditor();
renderAll();
pingServer();
