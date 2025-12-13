---

title: "E-Rentada"
description: 'A web-based room booking app built with Next.js, featuring real-time availability and an intuitive interface for easy reservation management.'
thumbnail: '/images/thumbnail/e-rentada-thumbnail.png'
images: [
    '/images/thumbnail/e-rentada-1.png',
    '/images/thumbnail/e-rentada-2.png',
    '/images/thumbnail/e-rentada-3.png',
    '/images/thumbnail/e-rentada-4.png',
]
stack: ['Next.js', 'TailwindCSS', 'ExpressJS', 'PostgreSQL']
links: {
code: '',
live: '',
video: ''
}
role: 'Software Engineer'
date: 2025/01/01

---

> ## Short Explanation

E-Rentada adalah platform pemesanan ruangan berbasis web yang saya rancang dan kembangkan menggunakan **Next.js** dan **Express.js**. Sistem ini menghadirkan **real-time room availability**, alur pemesanan yang ringkas, serta integrasi penuh dengan **e-STS NTB**, memastikan proses administrasi dan pembayaran berjalan otomatis dan terstandarisasi.

---

> ## Latar Belakang & Masalah

Sebelum E-Rentada dikembangkan, pengelolaan peminjaman ruangan di Dispora NTB menghadapi kendala seperti:

- Proses reservasi manual yang memakan waktu.
- Tumpang tindih jadwal karena tidak ada pengecekan ketersediaan secara real-time.
- Alur konfirmasi dan administrasi yang panjang.
- Minimnya integrasi dengan sistem pembayaran resmi daerah (e-STS).
- Ketidakefisienan dalam rekap data dan laporan peminjaman.

Kebutuhan utama adalah **platform terpusat** yang mampu menangani pemesanan dari awal hingga akhir dengan alur yang jelas, cepat, dan terintegrasi.

---

> ## Tujuan Proyek

- Menyediakan sistem pemesanan ruangan yang **mudah digunakan dan real-time**.
- Mengotomasi penjadwalan dan mencegah konflik reservasi.
- Mengintegrasikan proses administrasi dan pembayaran dengan **e-STS NTB**.
- Meningkatkan transparansi peminjaman ruangan bagi admin dan pengguna.
- Mempermudah monitoring dan pelaporan peminjaman.

---

> ## Tech Stack

**Frontend:** Next.js, TailwindCSS  
**Backend:** Express.js (API & scheduling logic)  
**Database:** PostgreSQL  
**Integration:** e-STS NTB (Electronic Sistem Tata Kelola Keuangan Daerah)  
**Role:** Full-Stack Software Engineer

Saya ikut membangun seluruh alur — mulai dari UI, API backend, validasi booking, hingga integrasi dengan sistem eksternal.

---

> ## Fitur Utama

### 1. Real-Time Room Availability
- Menampilkan status ketersediaan ruangan secara langsung.
- Mencegah double-booking dengan pengecekan waktu otomatis.
- Kalender interaktif dan timeline jadwal.

### 2. Pemesanan Ruangan yang Terstruktur
- Form pemesanan dengan validasi real-time.
- Alur persetujuan yang jelas untuk admin.
- Ringkasan peminjaman yang mudah dipahami.

### 3. Integrasi e-STS NTB
- Menghasilkan nomor STS secara otomatis.
- Proses administrasi dan pembayaran yang konsisten.
- Mengurangi kesalahan manual dalam pembuatan dokumen keuangan.

### 4. Dashboard Admin
- Monitoring peminjaman harian/mingguan/bulanan.
- Manajemen ruangan dan kapasitas.
- Laporan cepat untuk kebutuhan internal Dispora NTB.

### 5. UX Ringkas dan Intuitif
- Navigasi sederhana.
- Form dan tampilan teroptimasi untuk pengguna non-teknis.
- Tampilan responsif untuk berbagai perangkat.

---

> ## Tantangan & Solusi

### Tantangan Frontend
- Menampilkan jadwal dalam visual yang mudah dipahami.
- Menjamin update ketersediaan secara real-time.

**Solusi:**
- Menggunakan state management Next.js + server actions untuk update cepat.
- Mendesain komponen kalender dan timeline yang efisien.

### Tantangan Backend
- Menangani permintaan pemesanan secara serentak tanpa konflik.
- Integrasi dengan e-STS yang memiliki aturan dan format khusus.

**Solusi:**
- Implementasi **locking & time validation** pada API booking.
- Membangun modul integrasi e-STS yang menangani request, signature, dan validasi format dokumen.
- Desain database yang menjaga integritas jadwal dan riwayat pemesanan.

---

> ## Hasil & Dampak

- Proses pemesanan ruangan kini **lebih cepat, otomatis, dan bebas konflik jadwal**.
- Admin tidak lagi melakukan pengecekan manual—semua terhandle oleh sistem.
- Integrasi e-STS mempercepat proses pembayaran dan dokumentasi formal.
- Pengguna dapat melihat ketersediaan ruangan secara instan dan akurat.
- Peningkatan efisiensi operasional Dispora NTB secara signifikan.

---

> ## Refleksi & Pembelajaran

Proyek ini memperkuat pemahaman saya dalam:

- Membangun platform full-stack dengan alur pemesanan yang kompleks.
- Menangani integrasi dengan sistem pemerintah (e-STS) yang memiliki format dan prosedur ketat.
- Mendesain API yang konsisten dan aman untuk mencegah konflik penjadwalan.
- Membuat antarmuka intuitif untuk pengguna administrasi dan publik.
- Menyusun struktur database yang mendukung kebutuhan operasional nyata.

E-Rentada membuka peluang lebih jauh untuk pengembangan fitur seperti notifikasi otomatis, multi-ruangan, pembayaran digital, dan laporan dinamis.