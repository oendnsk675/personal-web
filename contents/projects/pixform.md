---
title: "Pixform"
description: "Open source web tool untuk konversi format gambar dan remove background otomatis, tanpa auth dan database, dengan history/settings berbasis browser serta perlindungan rate limiting berbasis IP dan cookie session."
thumbnail: "/images/thumbnail/pixform-thumbnail.png"
images:
  - "/images/thumbnail/pixform-1.webp"
stack: ["Next.js", "TypeScript", "TailwindCSS", "Sharp", "RMBG-1.4", "Zustand", "PM2", "Nginx"]
links:
  code: "https://github.com/oendnsk675/image-tool"
  live: "https://image.sayidinaahmadalqososyi.space"
  video: ""
role: "Software Engineer"
date: 2026/01/01
---

> ## Short Explanation

Pixform adalah **open source web tool** untuk konversi format gambar dan remove background otomatis. Aplikasi ini dibuat sebagai guest-first tool: user bisa langsung memakai fitur utama tanpa login, tanpa akun, dan tanpa database. Konversi gambar berjalan menggunakan **Sharp**, sedangkan remove background menggunakan model **RMBG-1.4** melalui `@imgly/background-removal-node`. Semua proses gambar dilakukan di server aplikasi sendiri, tanpa mengirim file ke layanan pemrosesan gambar eksternal.

Untuk menjaga resource server tetap aman, Pixform menggunakan rate limiting berbasis **cookie session ID** dan fallback IP address. History dan settings disimpan di browser menggunakan `localStorage`, sehingga aplikasi tetap sederhana, private, dan tidak membutuhkan sistem autentikasi.

---

> ## Latar Belakang & Masalah

Kebutuhan konversi format gambar dan remove background sering diselesaikan dengan tools online yang punya beberapa keterbatasan:

- Tools gratis sering membatasi jumlah file, ukuran file, resolusi, atau mewajibkan akun.
- Gambar yang diupload ke layanan pihak ketiga menimbulkan kekhawatiran privasi.
- Remove background berbasis cloud biasanya memiliki biaya berlangganan untuk penggunaan intensif.
- Banyak tools hanya fokus pada satu fungsi, sehingga workflow remove background lalu convert format terasa terpisah.
- Auth dan database sering membuat aplikasi utility kecil menjadi terlalu kompleks untuk kebutuhan guest usage.

---

> ## Tujuan Proyek

- Menyediakan tool konversi gambar dan remove background yang bisa langsung digunakan tanpa login.
- Menggabungkan konversi format, resize, dan remove background dalam workflow yang ringan.
- Menjaga aplikasi tetap sederhana dengan menghapus auth dan database dari core flow.
- Menyimpan history dan settings secara lokal di browser agar data tidak perlu disimpan di server.
- Melindungi endpoint berat dengan rate limiting berbasis cookie + IP.

---

> ## Tech Stack

**Framework:** Next.js 16 (App Router), TypeScript  
**Styling:** Tailwind CSS, shadcn/ui  
**Image Processing:** Sharp, @imgly/background-removal-node (RMBG-1.4)  
**State Management:** Zustand, localStorage, sessionStorage  
**Rate Limiting:** rate-limiter-flexible (in-memory)  
**Deployment:** PM2, Nginx reverse proxy, Certbot SSL  
**Role:** Software Engineer

Saya membangun seluruh aplikasi mulai dari UI drag & drop, integrasi Sharp dan model RMBG lokal, flow guest-only tanpa auth, local history/settings, rate limiting berbasis cookie + IP, hingga konfigurasi deployment menggunakan PM2 dan Nginx.

---

> ## Fitur Utama

### 1. Image Converter

- Drag & drop atau file picker upload hingga **20 file per batch**.
- Pilih format output per file.
- **Quality slider** untuk lossy formats seperti JPEG, WebP, dan AVIF dengan range 1-100.
- Resize by pixel dengan toggle **maintain aspect ratio**.
- Preview file input dan status konversi per file.
- Download single file atau semua file hasil konversi sekaligus sebagai **ZIP** menggunakan jszip.
- Progress indicator per file selama proses konversi berlangsung.

### 2. Remove Background

- Hapus background otomatis menggunakan model **RMBG-1.4** yang dijalankan oleh server aplikasi.
- Output berupa PNG dengan transparency penuh.
- Preview hasil dengan **checkered background** untuk melihat area transparan.
- Hasil remove background bisa langsung dikirim ke converter untuk mengganti format atau resize tanpa upload ulang manual.

### 3. Guest-Only Flow

- User bisa langsung memakai `/converter` dan `/remove-bg` tanpa login.
- Tidak ada auth, signup, signin, session user, atau database user.
- Middleware hanya digunakan untuk membuat cookie `_session_id` sebagai identifier rate limit.
- UI dashboard lama dihapus dan diganti dengan navbar sederhana seperti landing page.

### 4. Conversion History

- Setiap operasi convert dan remove background yang sukses dicatat di `localStorage` browser.
- Halaman `/history` menampilkan nama file, format asal, format output, ukuran sebelum/sesudah, operasi, dan timestamp.
- User bisa menghapus history per item atau menghapus semua history.
- Karena berbasis browser, history bersifat lokal per device dan tidak disinkronkan lintas perangkat.

### 5. Settings

- Halaman `/settings` menyimpan default output format dan default quality.
- Preferensi disimpan di `localStorage`, bukan database.
- Pendekatan ini menjaga aplikasi tetap ringan dan tidak membutuhkan backend state permanen.

### 6. Rate Limiting Berbasis Cookie + IP

- Setiap guest diidentifikasi via **cookie session ID** (`_session_id`) sebagai prioritas utama.
- Fallback identifier memakai `CF-Connecting-IP`, lalu `X-Forwarded-For`, lalu fallback `unknown`.
- Limit berbeda per endpoint sesuai beban proses:
- Convert: **30 request / 10 menit**.
- Remove background: **10 request / 10 menit**.
- Response HTTP 429 menyertakan `Retry-After` dan header `X-RateLimit-*`.

---

> ## Tantangan & Solusi

### Tantangan: Menyederhanakan Aplikasi Tanpa Mengorbankan Security

Versi awal Pixform memakai auth dan database. Untuk utility tool seperti image converter, flow tersebut terasa terlalu berat karena user sebenarnya hanya butuh upload, proses, dan download.

**Solusi:**

- Auth, signup, signin, user session, Prisma, dan SQLite dihapus dari core app.
- Semua fitur utama dibuka untuk guest.
- State yang tidak perlu disimpan di server dipindahkan ke `localStorage`.
- Security tetap dijaga melalui rate limiting per endpoint dan validasi ukuran file.

### Tantangan: Remove Background yang Resource-Intensive

Model RMBG-1.4 membutuhkan resource cukup besar saat inferensi. Endpoint ini lebih rentan terhadap abuse dibanding konversi format biasa.

**Solusi:**

- Rate limit paling ketat diterapkan di `/api/remove-bg`: **10 request per 10 menit** per identifier.
- Ukuran file maksimal dibatasi **10MB**.
- Proses hanya menerima tipe gambar yang didukung.
- Response error dibuat eksplisit supaya user tahu alasan request gagal.

### Tantangan: Identifikasi Guest di Balik Reverse Proxy

App berjalan di balik Nginx reverse proxy, sehingga mengandalkan IP langsung tidak selalu akurat. Beberapa user bisa terlihat dari IP yang sama, terutama jika berada di jaringan NAT atau shared network.

**Solusi:**

- Middleware membuat cookie `_session_id` berisi UUID saat user pertama kali membuka app.
- Cookie bersifat `httpOnly`, `sameSite=lax`, dan `secure` saat production.
- Rate limiter memakai cookie sebagai identifier utama, lalu fallback ke header proxy IP.
- Nginx meneruskan header `X-Forwarded-For` dan `X-Real-IP` ke Next.js.

### Tantangan: Rate Limiter Per Endpoint dengan Limit Berbeda

Endpoint convert dan remove background memiliki cost yang berbeda, sehingga limit global tidak ideal.

**Solusi:**

- Rate limiter dibuat sebagai helper `checkRateLimit` yang dipanggil di route handler.
- Setiap endpoint punya instance `RateLimiterMemory` dengan konfigurasi sendiri.
- In-memory store dipilih sebagai tradeoff pragmatis: sederhana, cepat, dan cukup untuk personal/open source tool.
- Counter reset saat server restart dianggap acceptable karena aplikasi tidak membutuhkan distributed rate limiting.

### Tantangan: Pipeline Remove BG + Convert yang Seamless

User sering ingin remove background lalu langsung mengubah format output atau resize hasilnya.

**Solusi:**

- Setelah remove background sukses, output blob bisa diteruskan ke halaman converter.
- File sementara disimpan via `sessionStorage` sebagai payload sementara antar halaman.
- Converter membaca payload tersebut saat halaman dibuka dan menambahkannya ke daftar file.

### Tantangan: Build Stabil di Server

Build sempat bergantung pada `next/font/google`, yang membutuhkan koneksi ke Google Fonts saat build. Di environment server tertentu, fetch font eksternal bisa gagal.

**Solusi:**

- Dependency font eksternal dihapus.
- App memakai system font stack agar build lebih stabil di server dan CI.

---

> ## Deployment

Pixform dideploy sebagai aplikasi Next.js production menggunakan PM2 dan Nginx.

- PM2 menjalankan app dengan `npm start` pada port **3001**.
- Nginx bertindak sebagai reverse proxy dari domain publik ke `127.0.0.1:3001`.
- SSL diatur menggunakan Certbot.
- Domain production: `https://image.sayidinaahmadalqososyi.space`.

Contoh PM2 config:

```js
module.exports = {
  apps: [
    {
      name: 'image-tool',
      script: 'npm',
      args: 'start',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: '3001',
      },
    },
  ],
}
```

---

> ## Hasil & Dampak

- Aplikasi menjadi lebih ringan karena auth dan database dihapus dari core flow.
- User bisa langsung memakai tool sebagai guest tanpa friction.
- Workflow remove bg -> convert mempersingkat proses editing gambar yang biasanya membutuhkan dua tools terpisah.
- History dan settings tetap tersedia tanpa backend state permanen.
- Rate limiting berbasis cookie + IP memberikan proteksi dasar terhadap abuse pada endpoint berat.
- Deployment lebih sederhana dengan PM2 + Nginx tanpa kebutuhan database service.

---

> ## Tradeoff

- `localStorage` membuat history/settings hanya tersedia di device/browser yang sama.
- In-memory rate limiter reset saat server restart.
- Rate limiting berbasis cookie bisa di-reset user dengan menghapus cookie, sehingga fallback IP tetap dibutuhkan.
- Remove background tetap memakai resource server, sehingga limit request dan ukuran file harus dijaga ketat.

Tradeoff ini dipilih secara sadar karena target Pixform adalah utility tool yang sederhana, cepat, dan mudah digunakan tanpa akun.

---

> ## Refleksi & Pembelajaran

Proyek Pixform memberikan beberapa pembelajaran penting:

- Menjalankan image processing dan model remove background di Next.js API Route membutuhkan perhatian pada memory, ukuran file, dan rate limiting.
- Untuk aplikasi utility, menghapus auth dan database bisa meningkatkan UX secara signifikan jika data user tidak perlu disimpan di server.
- `localStorage` dan `sessionStorage` cukup efektif untuk menyimpan preference, history lokal, dan payload sementara antar halaman.
- Rate limiting di balik reverse proxy perlu memperhatikan header seperti `CF-Connecting-IP` dan `X-Forwarded-For`.
- Build production sebaiknya mengurangi dependency terhadap resource eksternal seperti Google Fonts agar lebih stabil di server.
- PM2 + Nginx tetap menjadi deployment stack yang sederhana dan reliable untuk aplikasi Next.js self-hosted.

Pixform masih bisa dikembangkan lebih lanjut dengan dukungan format HEIC/HEIF, preservasi GIF animasi multi-frame, queue untuk job gambar berukuran besar, Redis-backed rate limiting, dan opsi cloud sync untuk history lintas perangkat.
