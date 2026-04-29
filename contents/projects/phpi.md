---

title: "PHPI - Indonesian Tourist Guide"
description: "Platform web resmi Perkumpulan Himpunan Pramuwisata Indonesia (PHPI) yang menyediakan direktori pramuwisata berlisensi, fitur pencarian guide, manajemen keanggotaan, artikel pariwisata, dan katalog produk wisata untuk mendukung ekosistem pariwisata Indonesia."
thumbnail: "/images/thumbnail/phpi-thumbnail.webp"
images:
  - "/images/thumbnail/phpi-1.webp"
stack: ["EJS", "Bootstrap", "ExpressJS", "PostgreSQL"]
links:
  code: ""
  live: "https://indonesiantouristguide.com"
  video: ""
role: "Software Engineer"
date: 2025/01/01

---

> ## Short Explanation

PHPI Website adalah platform web resmi **Perkumpulan Himpunan Pramuwisata Indonesia (PHPI)** — organisasi profesi non-politik yang menaungi pramuwisata berlisensi di seluruh Indonesia. Platform ini berfungsi sebagai **pusat informasi, direktori anggota, dan marketplace produk wisata**, dilengkapi fitur unggulan **"Find Your Guide"** yang memungkinkan wisatawan menemukan pramuwisata resmi berdasarkan bahasa, kategori tur, dan minat khusus.

---

> ## Latar Belakang & Masalah

PHPI sebagai organisasi profesi pramuwisata terbesar di Indonesia membutuhkan platform digital yang:

- Menjadi wajah resmi organisasi secara online dan dapat diakses oleh publik luas.
- Memudahkan wisatawan menemukan pramuwisata berlisensi yang sesuai kebutuhan mereka.
- Menyediakan sistem manajemen keanggotaan yang terpusat dan terstruktur.
- Mendokumentasikan sejarah, visi-misi, dan struktur organisasi PHPI secara transparan.
- Menjadi kanal distribusi informasi kegiatan, artikel, dan produk wisata.

Sebelumnya, informasi organisasi tersebar di berbagai media dan tidak ada satu titik akses terpusat bagi anggota maupun masyarakat umum.

---

> ## Tujuan Proyek

- Membangun platform web profesional sebagai identitas digital resmi PHPI.
- Menyediakan fitur **Find Your Guide** untuk menghubungkan wisatawan dengan pramuwisata berlisensi.
- Memfasilitasi manajemen keanggotaan dan direktori anggota secara online.
- Mendukung publikasi artikel dan konten edukasi seputar pariwisata Indonesia.
- Menyediakan kanal penjualan produk dan paket wisata bagi anggota.

---

> ## Tech Stack

**Frontend:** EJS, Bootstrap  
**Backend:** Express.js  
**Database:** PostgreSQL  
**Role:** Software Engineer  

Saya berkontribusi pada pengembangan frontend, integrasi API backend, serta implementasi fitur **Find Your Guide** dan manajemen konten dinamis.

---

> ## Fitur Utama

### 1. Find Your Guide
- Pencarian pramuwisata berdasarkan **bahasa** (Indonesia, Inggris, China, Jepang, Korea, Arab).
- Filter berdasarkan **kategori tur** (Sejarah Budaya, Adventure, Shopping).
- Filter berdasarkan **minat khusus** (Alam, Budaya, Sejarah, dll.).
- Menampilkan profil dan ketersediaan guide secara real-time.

### 2. Direktori Anggota
- Daftar pramuwisata berlisensi resmi seluruh Indonesia.
- Informasi profil, spesialisasi, dan area operasional setiap anggota.
- Sistem pencarian dan filter anggota berdasarkan region dan keahlian.

### 3. Manajemen Keanggotaan
- Pendaftaran anggota baru secara online.
- Dashboard member untuk mengelola profil dan informasi profesional.
- Sistem autentikasi dan otorisasi berbasis peran (admin, anggota, publik).

### 4. Katalog Produk Wisata
- Listing paket dan produk wisata yang ditawarkan oleh anggota PHPI.
- Halaman detail produk dengan informasi harga dan deskripsi lengkap.
- Sistem manajemen produk bagi anggota terdaftar.

### 5. Blog & Artikel
- Publikasi artikel dan konten informatif seputar pariwisata Indonesia.
- Sistem manajemen konten untuk admin dan kontributor.
- Kategorisasi dan navigasi artikel yang mudah diakses.

### 6. Profil Organisasi
- Halaman sejarah PHPI sejak berdirinya HDWI pada 1983 hingga transformasi menjadi PHPI.
- Informasi visi, misi, dan kegiatan organisasi.
- Visualisasi **struktur organisasi** interaktif dari DPP hingga bidang-bidang fungsional.
- Informasi mitra kerja dan keanggotaan asosiasi internasional (PATA, ASEANTA, GIPI, dll.).

---

> ## Tantangan & Solusi

### Tantangan Frontend
- Menampilkan struktur organisasi hierarkis yang kompleks secara visual dan interaktif.
- Membangun filter pencarian multi-kriteria pada fitur Find Your Guide agar tetap responsif.

**Solusi:**
- Implementasi tree component interaktif dengan collapse/expand untuk struktur organisasi.
- Penggunaan reactive state management Vue.js untuk filter real-time tanpa reload halaman.
- Desain UI yang mobile-friendly dan mudah dinavigasi oleh pengguna non-teknis.

### Tantangan Backend
- Mengelola data anggota dalam jumlah besar dengan query pencarian yang efisien.
- Memastikan keamanan akses data anggota sesuai peran (admin vs member vs publik).

**Solusi:**
- Implementasi query indexing pada kolom yang sering digunakan untuk filter pencarian.
- Role-based access control (RBAC) untuk membatasi akses data sensitif anggota.
- Pemisahan endpoint publik dan privat pada API backend.

---

> ## Hasil & Dampak

- Platform berhasil menjadi **identitas digital resmi PHPI** yang dapat diakses publik secara nasional.
- Wisatawan dapat dengan mudah menemukan pramuwisata berlisensi melalui fitur **Find Your Guide**.
- Informasi organisasi, sejarah, dan struktur kepengurusan terdokumentasi secara digital dan transparan.
- Anggota PHPI memiliki kanal digital untuk mempromosikan layanan dan produk wisata mereka.
- Mendukung ekosistem pariwisata Indonesia dengan menghubungkan pemandu wisata profesional dan wisatawan.

---

> ## Refleksi & Pembelajaran

Proyek PHPI Website memberikan pembelajaran penting mengenai:

- Membangun platform organisasi profesi yang melayani kebutuhan beragam stakeholder (publik, anggota, admin).
- Mengimplementasikan sistem pencarian multi-filter yang intuitif untuk kebutuhan pengguna nyata.
- Mengelola konten dinamis (anggota, produk, artikel) dalam skala organisasi nasional.
- Pentingnya desain yang mencerminkan kredibilitas dan profesionalisme sebuah organisasi resmi.
- Menggabungkan aspek informasi publik, manajemen keanggotaan, dan marketplace dalam satu platform terintegrasi.

Platform ini membuka peluang pengembangan lanjutan seperti sistem verifikasi lisensi otomatis, integrasi booking guide secara langsung, sistem rating dan ulasan wisatawan, serta dashboard analitik untuk pengurus PHPI.