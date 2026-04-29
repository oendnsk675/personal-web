---

title: "Pixform"
description: "Open source tool berbasis web untuk konversi format gambar dan remove background otomatis, diproses sepenuhnya di sisi server dengan perlindungan rate limiting berbasis IP dan cookie session."
thumbnail: "/images/thumbnail/pixform-thumbnail.png"
images:
  - "/images/thumbnail/pixform-1.webp"
stack: ["Next.js", "TypeScript", "TailwindCSS", "SQLite", "Prisma", "Sharp", "Docker"]
links:
  code: ""
  live: ""
  video: ""
role: "Software Engineer"
date: 2026/01/01

---

> ## Short Explanation

Pixform adalah **open source tool berbasis web** untuk konversi format gambar dan remove background secara otomatis. Mendukung konversi 8 format input ke 6 format output menggunakan **Sharp**, serta remove background dengan model **RMBG-1.4** yang berjalan sepenuhnya secara lokal — tidak ada data gambar yang dikirim ke server eksternal. Dilengkapi rate limiting berbasis IP dan cookie session untuk mencegah abuse pada endpoint yang berat.

---

> ## Latar Belakang & Masalah

Kebutuhan konversi format gambar dan remove background sering kali diselesaikan dengan tools online yang memiliki keterbatasan:

- Tools online gratis membatasi jumlah file, resolusi, atau mewajibkan akun.
- Gambar yang diupload ke server pihak ketiga menimbulkan kekhawatiran privasi.
- Remove background berbasis cloud memiliki biaya berlangganan untuk penggunaan intensif.
- Tidak ada satu tool terpadu yang menggabungkan konversi format, resize, dan remove background dalam satu alur kerja.

---

> ## Tujuan Proyek

- Menyediakan tool konversi gambar dan remove background yang memproses semua data secara lokal untuk menjaga privasi.
- Menggabungkan konversi format, resize, dan remove background dalam satu pipeline yang seamless.
- Melindungi resource server dengan rate limiting yang ketat, terutama untuk endpoint proses ML model.

---

> ## Tech Stack

**Framework:** Next.js 16 (App Router), TypeScript  
**Styling:** Tailwind CSS, shadcn/ui  
**Database:** SQLite via Prisma ORM  
**Image Processing:** Sharp (konversi & resize), @imgly/background-removal-node (RMBG-1.4)  
**State Management:** Zustand  
**Rate Limiting:** rate-limiter-flexible (in-memory)  
**Infrastructure:** Docker Compose  
**Role:** Software Engineer  

Saya membangun seluruh aplikasi — mulai dari UI drag & drop, integrasi Sharp dan model RMBG lokal, sistem rate limiting berbasis cookie + IP, hingga konfigurasi Docker.

---

> ## Fitur Utama

### 1. Image Converter
- Drag & drop atau file picker upload hingga **20 file per batch**.
- Pilih format output per file atau bulk select semua sekaligus.
- **Quality slider** untuk lossy formats (JPEG, WebP, AVIF) — range 1–100, default 85.
- Resize by pixel atau percentage dengan toggle **maintain aspect ratio**.
- Preview before & after dengan estimasi file size output sebelum diproses.
- Download single file atau semua sekaligus sebagai **ZIP** (jszip).
- Progress indicator per file selama konversi berlangsung.

### 2. Remove Background
- Hapus background otomatis menggunakan model **RMBG-1.4 yang berjalan lokal** — tidak ada data dikirim ke server eksternal.
- Output PNG dengan transparency penuh.
- Preview hasil dengan **checkered background** untuk visualisasi area transparan.
- Pipeline lanjutan: hasil remove bg dapat langsung diteruskan ke converter untuk ganti format atau resize.

### 3. Conversion History
- Setiap operasi konversi dan remove background dicatat ke **SQLite** via Prisma.
- Halaman `/history` menampilkan riwayat: nama file, format asal, format output, ukuran sebelum/sesudah, timestamp.
- Dukungan delete history per item.

### 4. Settings
- Halaman `/settings` untuk mengatur default format output dan default quality.
- Preferensi disimpan ke database dan diterapkan sebagai nilai awal saat upload file baru.

### 5. Rate Limiting Berbasis Cookie + IP
- Setiap user diidentifikasi via **cookie session ID** (`_session_id`) sebagai prioritas utama, dengan fallback ke IP address dari header `X-Forwarded-For`.
- Limit berbeda per endpoint sesuai beban prosesnya: 10 req/10 menit untuk remove-bg, 30 req/10 menit untuk convert.
- Response HTTP 429 dengan header `X-RateLimit-*` dan `Retry-After` yang informatif.

---

> ## Tantangan & Solusi

### Tantangan: Remove Background yang Sangat Resource-Intensive
Model RMBG-1.4 membutuhkan ~500MB–1GB RAM saat inferensi, sehingga endpoint ini sangat rentan terhadap abuse jika dibuka publik.

**Solusi:**
- Rate limit paling ketat diterapkan di `/api/remove-bg`: hanya **10 request per 10 menit** per identifier.
- Pembatasan ukuran file maksimal **10MB** untuk mencegah OOM saat inferensi.
- Model di-cache setelah download pertama (~150MB) sehingga tidak perlu re-download di setiap request.

### Tantangan: Identifikasi User yang Akurat di Balik Reverse Proxy
Karena app berjalan di balik reverse proxy, `req.ip` tidak bisa diandalkan — semua traffic bisa tampak berasal dari satu IP. User di belakang NAT yang sama pun akan teridentifikasi sebagai satu entitas jika hanya mengandalkan IP.

**Solusi:**
- Prioritas identifikasi menggunakan **cookie session ID** (`_session_id`) berisi UUID yang di-set saat pertama kali user membuka app via Next.js middleware.
- Fallback ke header `X-Forwarded-For` untuk mendapatkan IP asli user.
- Cookie bersifat `httpOnly` dengan `maxAge` 1 tahun, sehingga tracking per browser lebih akurat daripada IP.

### Tantangan: Rate Limiter Per Endpoint dengan Limit Berbeda
Next.js middleware global tidak memungkinkan konfigurasi limit yang berbeda per route.

**Solusi:**
- Rate limiter diimplementasikan sebagai **helper function** (`checkRateLimit`) yang dipanggil di awal setiap API route handler secara eksplisit.
- Setiap endpoint memiliki instance `RateLimiterMemory` tersendiri dengan konfigurasi `points` dan `duration` yang berbeda.
- In-memory store dipilih secara sadar — counter reset saat server restart adalah tradeoff yang acceptable untuk personal/open source tool tanpa kebutuhan Redis.

### Tantangan: Pipeline Remove BG + Convert yang Seamless
User seringkali ingin remove background lalu langsung mengubah format output, namun kedua fitur ini berada di halaman terpisah.

**Solusi:**
- Hasil remove bg disimpan sementara di client state (Zustand) dan dapat langsung di-forward ke converter.
- State management yang terpusat memungkinkan file "berpindah" antar halaman tanpa re-upload.

---

> ## Hasil & Dampak

- Tool konversi gambar dan remove background yang memproses semua data **secara lokal** — privasi terjaga tanpa mengirim gambar ke server eksternal.
- Pipeline remove bg → convert mempersingkat alur kerja editing gambar yang sebelumnya membutuhkan dua tools terpisah.
- Rate limiting berbasis cookie memberikan perlindungan yang lebih akurat dibanding IP-only, bahkan untuk user di balik NAT atau shared network.

---

> ## Refleksi & Pembelajaran

Proyek Pixform memberikan pembelajaran penting mengenai:

- Menjalankan **ML model secara lokal** di Next.js API Routes dan mengelola tradeoff memory vs performa untuk proses inferensi yang berat.
- Merancang sistem **rate limiting yang akurat** di balik reverse proxy — di mana `req.ip` tidak dapat diandalkan dan identifikasi berbasis cookie lebih tepat daripada IP.
- Pentingnya desain **pipeline yang seamless** antar fitur (remove bg → convert) untuk meningkatkan UX tanpa memaksa user re-upload file.
- Memilih **in-memory rate limiter** secara sadar sebagai solusi pragmatis untuk use case personal — tanpa over-engineering dengan Redis.

Pixform membuka peluang pengembangan lanjutan seperti dukungan format HEIC/HEIF, preservasi GIF animasi multi-frame, antrian job untuk batch processing gambar berukuran besar, serta opsi penyimpanan history ke cloud untuk sinkronisasi lintas perangkat.