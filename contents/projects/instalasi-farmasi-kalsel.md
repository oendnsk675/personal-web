---

title: "Instalasi Farmasi Kalimantan Selatan"
description: 'A medication and healthcare tools management application, developed with a focus on a unified data source. I contributed to the design and implementation of the user interface using VueJS technology, ensuring an efficient user experience. The goal is to streamline the medication management process with a simple interface.'
thumbnail: '/images/thumbnail/if-thumbnail.png'
images: [
    '/images/thumbnail/if-1.png',
    '/images/thumbnail/if-2.png',
]
stack: ['Vue.js', 'TailwindCSS', 'ExpressJS', 'MongoDB']
links: {
code: '',
live: 'https://ifk-kalsel.bimajaya.co.id',
video: ''
}
role: 'Software Engineer'
date: 2024/09/01

---

> ## Short Explanation

Instalasi Farmasi Kalimantan Selatan adalah aplikasi manajemen obat dan alat kesehatan yang dibangun dengan fokus pada **sumber data terpadu**, **integrasi antarfaskes**, dan **proses pemrosesan data yang efisien**. 

Sebagai **Full-Stack Developer**, saya berkontribusi pada seluruh bagian sistem mulai dari antarmuka pengguna menggunakan **Vue.js + TailwindCSS**, pengembangan API dan logika backend menggunakan **Express.js**, hingga implementasi antrian (queue system) untuk mengeksekusi proses berat seperti ekspor laporan agar aplikasi tetap stabil dan tidak menghambat aktivitas pengguna.

---

> ## Latar Belakang & Masalah

Pengelolaan stok obat dan pergerakan antar fasilitas sering menghadapi beberapa tantangan:

- Data sering tersebar di banyak aplikasi dan tidak tersentralisasi.
- Ketidaksesuaian stok fisik vs. stok sistem.
- Proses validasi dan distribusi memerlukan banyak langkah manual.
- Proses ekspor laporan cukup berat dan sering menghambat performa aplikasi.
- UI/UX sebelumnya tidak ramah bagi petugas lapangan.

Diperlukan solusi yang tidak hanya memperbaiki UI, tetapi juga memperkuat arsitektur backend agar alur kerja menjadi lebih cepat, aman, dan terkontrol.

---

> ## Tujuan Proyek

- Menghadirkan antarmuka yang **sederhana, responsif, dan jelas**.
- Mengintegrasikan seluruh aktivitas pengelolaan obat dalam satu sistem terpusat.
- Mengurangi kesalahan input melalui UI yang terstruktur.
- **Mengoptimalkan proses berat** seperti ekspor laporan menggunakan **sistem antrian** agar tidak membebani server.
- Menyediakan visibilitas penuh terhadap stok dan pergerakannya di seluruh faskes.

---

> ## Tech Stack

**Frontend:** Vue.js, TailwindCSS  
**Backend:** Express.js (REST API)  
**Queue System:** BullMQ (Redis) untuk background job & heavy process handling  
**Database:** MongoDB  
**Deployment:** Server IFK Kalsel (internal)  
**Role:** Full-Stack Software Engineer

Kontribusi saya mencakup pengembangan UI, desain sistem backend, integrasi API, serta implementasi job queue untuk kebutuhan laporan.

---

> ## Fitur Utama

### 1. Manajemen Obat & Alkes
- Pencatatan obat dan alkes.
- Pembaruan stok real-time.
- Validasi barang masuk & keluar.

### 2. Permintaan Obat Antar Fasilitas
- Faskes dapat mengirim permintaan langsung ke Instalasi Farmasi.
- Sistem mendukung proses verifikasi dan pemenuhan.

### 3. Sistem Antrian untuk Laporan Berat
- Proses ekspor laporan besar dipindahkan ke **background job**.
- Aplikasi tetap responsif meskipun laporan berukuran besar.
- Petugas mendapat notifikasi saat laporan siap diunduh.

### 4. UI Cepat & Terstruktur
- Komponen yang ringan dan mudah dibaca.
- Form dengan validasi real-time.
- Navigasi responsif untuk desktop maupun tablet.

### 5. Dashboard Operasional
- Ringkasan stok wilayah.
- Status permintaan antar faskes.
- Grafik tren dan notifikasi penting.

---

> ## Tantangan & Solusi

### Tantangan Frontend
- Menyederhanakan form input dengan banyak parameter farmasi.
- Menghindari lag saat menampilkan data stok yang besar.

**Solusi:**
- Menggunakan stepper dan input terstruktur untuk meminimalkan kesalahan.
- Optimasi rendering menggunakan reactivity Vue + pagination & lazy loading.

### Tantangan Backend
- Proses ekspor laporan sering memakan waktu lama dan memberatkan server.
- Pengelolaan request faskes membutuhkan workflow yang konsisten.

**Solusi:**
- Mengimplementasikan **BullMQ queue** untuk memindahkan pekerjaan berat ke background.
- Mendesain ulang API workflow agar lebih terstruktur dan mudah dipantau.
- Memperkuat validasi dan integritas data menggunakan schema.

---

> ## Hasil & Dampak

- Aplikasi jauh lebih **stabil, responsif, dan mudah digunakan**.
- Proses input dan distribusi obat menjadi lebih cepat.
- Ekspor laporan besar tidak lagi membebani server.
- Data obat yang sebelumnya tersebar kini **tersentralisasi dan konsisten**.
- Petugas dapat memantau status stok dan permintaan dengan lebih akurat.

**Live App:** https://ifk-kalsel.bimajaya.co.id

---

> ## Refleksi & Pembelajaran

Proyek ini memperkuat pemahaman saya mengenai:

- Pengembangan full-stack untuk aplikasi operasional skala dinas.
- Membangun sistem antrian (queue) untuk meningkatkan performa dan skalabilitas.
- Mendesain UI yang ramah bagi pengguna non-teknis.
- Kolaborasi lintas tim dalam domain kesehatan.
- Pentingnya konsistensi data dalam lingkungan multi-fasilitas.

Masih ada ruang pengembangan seperti peningkatan otomasi laporan, visualisasi dashboard yang lebih dinamis, dan optimasi performa untuk data bertambah besar.