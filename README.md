# ThesisFlow — Local Thesis Form → DOCX

Sistem lokal sederhana:
- HTML/CSS/JS untuk mengisi proposal skripsi.
- Data disimpan otomatis di `localStorage`.
- Tombol **Generate DOCX** mengirim data localStorage ke Python lokal.
- Python membuat Word dengan A4, margin skripsi, Times New Roman 12, heading, cover UMS, nomor halaman, tabel, dan daftar isi.

## Struktur

```text
thesis_builder_genz/
├─ index.html
├─ style.css
├─ app.js
├─ app.py
├─ generator.py
├─ citation_utils.py
├─ requirements.txt
└─ assets/
   └─ logo_ums.png
```

## Cara menjalankan

### 1. Masuk ke folder
```bash
cd thesis_builder_genz
```

### 2. Buat virtual environment (opsional tapi disarankan)
Windows:
```bash
python -m venv .venv
.venv\Scripts\activate
```

macOS/Linux:
```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install dependency
```bash
pip install -r requirements.txt
```

### 4. Jalankan
```bash
python app.py
```

### 5. Buka browser
```text
http://127.0.0.1:5000
```

Jangan membuka `index.html` dengan double-click jika ingin tombol **Generate DOCX** berfungsi.
Form tetap menyimpan data ke localStorage browser.

## Penyimpanan data

Key localStorage:
```text
thesisFlowData.v1
```

Kamu dapat:
- Export JSON sebagai backup.
- Import JSON.
- Reset ke dummy data.
- Generate Word kapan saja.

File `template_ai.json` berisi kerangka JSON yang dapat diisi AI dan diimpor melalui **Import JSON**. Ganti semua teks dalam tanda kurung siku dengan data penelitian yang benar; hapus sumber contoh sebelum generate jika belum diganti dengan metadata sumber yang terverifikasi.

## Mengelola sitasi

- Buka bagian **Pustaka & Sitasi**, lalu klik **Import Jurnal** dan pilih PDF (maksimal 20 MB). PDF diproses lokal dan tidak disimpan.
- Penulis, tahun, jurnal, volume, nomor, halaman, dan DOI diisi otomatis dari Crossref menggunakan DOI/judul PDF jika tersedia. Jika tidak cocok atau PDF hasil scan tidak memiliki teks yang bisa dibaca, kolom yang belum ditemukan ditandai dan dapat dilengkapi melalui **Lihat atau edit metadata**.
- Pilih gaya **APA edisi ke-7** atau **IEEE**. Pada blok paragraf, pilih sumber lalu klik **Sisipkan sitasi** di posisi kursor.
- Jurnal yang diimpor langsung muncul di pustaka dan otomatis masuk ke daftar pustaka DOCX. Sitasi dalam teks tetap dapat disisipkan pada paragraf; referensi manual yang sudah ada tetap dipertahankan.
- Metadata sumber dan gaya sitasi ikut tersimpan di localStorage serta backup JSON.

## Menyusun bab dan konten

- Tambahkan atau hapus bab dan subbab dari bagian **Bab & Subbab**.
- Di setiap subbab, pilih **Paragraf**, **Daftar**, **Gambar**, **Tabel**, atau **Grafik** melalui kontrol Tambah Konten.
- Isi daftar dengan satu item per baris.
- Input tabel dan grafik menggunakan editor baris-kolom sebagai bawaan, dengan tombol untuk menambah baris dan kolom serta menghapus kolom dari header. Kolom kategori pada grafik perbandingan tidak dapat dihapus, dan jumlah kolom minimum tetap dijaga. Isi sel panjang membungkus dan memperbesar tinggi sel secara otomatis. Pilih **Teks dengan |** jika ingin tetap memasukkan data dalam format teks lama. Pada tabel, baris pertama menjadi header.
- Pilih **Grafik** pada Tambah Konten, lalu tentukan jenis grafik. Saat berpindah dari grafik tunggal ke perbandingan, nilai tiap kategori otomatis disalin ke dua seri awal sebagai titik mula. Data perbandingan disimpan terpisah: kembali ke mode tunggal hanya menampilkan seri pertama, dan mengganti lagi ke perbandingan memulihkan seri-seri sebelumnya. Untuk input teks grafik biasa gunakan `Kategori | Nilai`; untuk perbandingan gunakan header `Kategori | Model A | Model B`, lalu data seperti `Grup 1 | 10 | 15`. Seri ditampilkan dengan warna berbeda, hingga 6 seri. Pratinjau diperbarui saat data diubah dan grafik ikut dimasukkan ke DOCX.
- Gambar dikompresi sebelum disimpan di browser dan dimasukkan ke dokumen Word saat generate.

Setiap DOCX yang di-generate juga disimpan di folder `hasil generate/` dengan nama berurutan, misalnya `01_20261007_143015.docx`, sekaligus diunduh melalui browser.

## Catatan Word

Daftar isi ditandai untuk diperbarui otomatis saat dokumen dibuka di Microsoft Word. Jika nomor halaman masih belum sesuai, tekan:
```text
Ctrl + A
F9
```
Jika Word menanyakan jenis pembaruan daftar isi, pilih **Perbarui seluruh tabel** agar judul dan nomor halaman dihitung ulang.

## Mengganti struktur dokumen

- Tampilan/form: `index.html`
- Dummy data + penyimpanan: `app.js`
- Format Word: `generator.py`
- Endpoint generator: `app.py`
