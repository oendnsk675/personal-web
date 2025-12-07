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

Instalasi Farmasi Kalimantan Selatan adalah aplikasi manajemen obat dan alat kesehatan yang dikembangkan dengan fokus pada **sumber data terpadu** antar fasilitas kesehatan. Saya berkontribusi pada desain serta implementasi antarmuka menggunakan **Vue.js** dan **TailwindCSS**, dengan tujuan menciptakan pengalaman pengguna yang efisien dan mudah dipahami. Aplikasi ini membantu menyederhanakan proses pengelolaan persediaan obat dengan tampilan yang intuitif dan alur kerja yang terstruktur.

> ## Latar Belakang & Masalah

Pengelolaan obat dan alat kesehatan di fasilitas layanan sering kali menghadapi tantangan seperti:

- Data yang tersebar dan tidak terpusat.
- Ketidaksesuaian antara stok fisik dan pencatatan sistem.
- Proses input dan validasi yang lambat karena UI yang kurang optimal.
- Minimnya visibilitas terhadap pergerakan stok antarfaskes.

Kondisi tersebut dapat mengakibatkan kesalahan pencatatan, keterlambatan distribusi, hingga ketidakefisienan operasional. Dibutuhkan sebuah sistem yang mampu mengelola data secara terpusat serta menyediakan alur penggunaan yang mudah bagi petugas.

> ## Tujuan Proyek

- Menyediakan antarmuka yang **sederhana, responsif, dan mudah digunakan** oleh petugas farmasi.
- Mengintegrasikan seluruh aktivitas pengelolaan obat ke dalam satu sistem terpadu.
- Mengurangi risiko salah input melalui UI/UX yang lebih terarah.
- Mempercepat proses distribusi dan pengecekan stok antar fasilitas.
- Memberikan transparansi dan akurasi data dalam skala wilayah.

> ## Tech Stack

**Frontend:** Vue.js, TailwindCSS  
**Backend:** Express.js  
**Database:** MongoDB  
**Hosting / Deployment:** (mengikuti platform internal IFK)  
**Role:** Software Engineer

Saya berfokus pada pengembangan antarmuka pengguna, integrasi dengan API backend, dan peningkatan pengalaman pengguna selama proses interaksi dengan aplikasi.

> ## Fitur Utama

### 1. Manajemen Obat & Alkes

- Input data obat dan alat kesehatan.
- Pembaruan stok dan pelacakan ketersediaan.
- Validasi barang masuk dan keluar.

### 2. Permintaan Obat Antar Fasilitas

- Faskes dapat mengajukan permintaan obat ke Instalasi Farmasi.
- Sistem memfasilitasi verifikasi dan proses pemenuhan.

### 3. UI Cepat & Terstruktur

- Navigasi sederhana dengan komponen yang mudah dipahami.
- Tampilan responsif untuk penggunaan di berbagai perangkat.
- Form input dengan validasi real-time.

### 4. Dashboard Ringkas

- Ringkasan stok.
- Status permintaan.
- Notifikasi untuk tindakan yang membutuhkan perhatian.

> ## Tantangan & Solusi

### Tantangan

- Menyederhanakan alur input obat yang memiliki banyak parameter teknis.
- Menjaga UI tetap ringan meskipun menampilkan banyak data stok.
- Menghindari mis-click dan kesalahan input dari pengguna non-teknis.

### Solusi

- Mendesain ulang form menjadi beberapa tahap (stepper) agar lebih mudah diikuti.
- Mengoptimalkan rendering komponen menggunakan teknik reactivity dan lazy loading Vue.
- Menggunakan TailwindCSS untuk konsistensi UI dan efisiensi styling.

> ## Hasil & Dampak

- Antarmuka aplikasi kini lebih mudah digunakan oleh petugas lapangan.
- Proses input stok menjadi lebih cepat dan minim kesalahan.
- Pelaporan stok antar fasilitas menjadi lebih transparan.
- Data obat yang sebelumnya tersebar kini tersentralisasi dalam satu sistem.

Aplikasi dapat diakses melalui:  
**Live:** https://ifk-kalsel.bimajaya.co.id

> ## Refleksi & Pembelajaran

Proyek ini memperkuat pemahaman saya mengenai:

- Mendesain antarmuka untuk pengguna non-teknis.
- Kolaborasi antara tim front-end dan backend dalam lingkungan kesehatan.
- Pentingnya konsistensi komponen UI untuk meminimalkan kesalahan input.
- Membangun sistem yang membantu operasional nyata di lapangan, bukan sekadar memenuhi requirement teknis.

Saya melihat masih banyak potensi pengembangan, seperti peningkatan visual dashboard, optimasi performa pada data besar, dan integrasi laporan otomatis.
