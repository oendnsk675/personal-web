---

title: "Motionline Product Search"
description: "Platform internal berbasis web untuk mengotomasi alur kerja pembuatan konten produk e-commerce — mulai dari scraping video Instagram, pencarian metadata produk via Google Lens, hingga generasi dan post-processing video promosi menggunakan platform AI seperti Dreamina, Leonardo AI, Sora, dan Grok."
thumbnail: "/images/thumbnail/mps-thumbnail.webp"
images:
  - "/images/thumbnail/mps-0.webp"
stack: ["Next.js", "TailwindCSS", "PostgreSQL", "Prisma", "FFmpeg"]
links:
  code: ""
  live: ""
  video: ""
role: "Software Engineer"
date: 2026/02/10

---

> ## Short Explanation

Motionline Product Search (MPS) adalah **platform internal berbasis web** yang dirancang untuk mengotomasi alur kerja pembuatan konten produk e-commerce secara end-to-end. Sistem ini mengintegrasikan tiga kapabilitas utama: **scraping video produk** dari profil Instagram seller via GraphQL API, **pencarian metadata produk** menggunakan Google Lens dengan Playwright browser automation, serta **generasi video AI** melalui platform seperti Dreamina (CapCut), Leonardo AI, Sora, dan Grok — dilengkapi post-processing FFmpeg untuk overlay teks dan background music.

---

> ## Latar Belakang & Masalah

Proses pembuatan konten video promosi produk e-commerce secara manual memiliki banyak bottleneck:

- Mencari dan mengunduh video referensi dari profil Instagram seller dilakukan satu per satu secara manual.
- Identifikasi nama, deskripsi, dan link produk dari sebuah thumbnail membutuhkan waktu riset tersendiri.
- Proses generasi video AI dari berbagai platform tidak terpusat, sehingga manajemen akun dan credit tidak efisien.
- Post-processing video (overlay teks, musik) dilakukan terpisah dengan tools berbeda.
- Tidak ada satu dashboard terpusat untuk memantau status seluruh pipeline dari scraping hingga video final.

---

> ## Tujuan Proyek

- Mengotomasi pipeline konten produk dari scraping hingga video final dalam satu platform.
- Menyederhanakan pencarian metadata produk dengan reverse image search via Google Lens.
- Memusatkan manajemen akun platform AI beserta credit dan riwayat penggunaannya.
- Mengurangi intervensi manual dalam proses generasi dan post-processing video.
- Menyediakan job queue untuk proses berat agar berjalan di background tanpa memblokir UI.

---

> ## Tech Stack

**Framework:** Next.js 16 (App Router), React 19, TypeScript  
**Styling:** Tailwind CSS v4, shadcn/ui, Radix UI  
**Database:** PostgreSQL, Prisma ORM  
**State Management:** TanStack React Query (server state), Zustand (client state)  
**Browser Automation:** Playwright  
**Video Processing:** FFmpeg (fluent-ffmpeg)  
**AI Text Generation:** Google Gemini AI / OpenAI  
**AI Video & Image:** Dreamina, Leonardo AI, Sora, Grok  
**Validation:** Zod  
**Package Manager:** Bun  
**Process Manager:** PM2  
**Role:** Software Engineer  

Saya membangun seluruh sistem — mulai dari arsitektur Next.js App Router, integrasi Playwright untuk browser automation, AI provider abstraction layer, hingga pipeline post-processing FFmpeg.

---

> ## Fitur Utama

### 1. Scraping Video Produk dari Instagram
- Input profil Instagram seller → scraping otomatis seluruh reel via **Instagram GraphQL API**.
- Ekstraksi deskripsi posting menggunakan Cheerio HTML parser.
- Pagination otomatis untuk mengambil semua reel yang tersedia.
- Data tersimpan ke database dengan status `draft` untuk diproses lebih lanjut.

### 2. Pencarian Metadata Produk via Google Lens
- Reverse image search otomatis menggunakan thumbnail video sebagai query.
- Playwright membuka browser, upload gambar ke Google Lens, refinement keyword "shopee", navigasi ke tab "Produk".
- Hasil scraping mencakup nama produk, link, thumbnail, dan deskripsi.
- Dukungan proxy untuk menghindari rate limiting dan deteksi bot.

### 3. Generasi Video AI Multi-Platform
- Mendukung empat platform AI: **Dreamina (CapCut)**, **Leonardo AI**, **Sora**, dan **Grok**.
- Input metode gambar: `first_last frame`, `collage`, atau `single image`.
- AI Provider (Gemini / OpenAI) membuat prompt video yang disesuaikan dengan format dan gaya yang dipilih.
- Dreamina dioperasikan via Playwright automation (upload frame, isi prompt, polling progress, download).
- Leonardo AI diintegrasikan via REST API dengan webhook/polling untuk hasil generasi.

### 4. Post-Processing Video dengan FFmpeg
- Overlay teks dinamis: nama produk, harga, CTA dengan timeframe yang dapat dikustomisasi.
- Mixing background music dengan efek fade in/out.
- Output encode: `libx264 + aac` dengan flag `faststart` untuk streaming optimal.
- Video final disimpan dan path-nya diperbarui di database secara otomatis.

### 5. Manajemen Akun Platform AI
- Setiap platform AI memiliki multiple akun dengan profil browser Playwright terpisah.
- Sistem pemilihan akun otomatis berdasarkan status `available` dan prioritas `lastUsedAt`.
- Pengurangan credit otomatis per generasi (configurable: image vs video credit).
- Riwayat penggunaan akun tercatat di tabel `history_platform` untuk audit.

### 6. Dashboard & Job Queue
- Sidebar navigation dengan tiga modul utama: Products, Product Resources, Video Generation.
- Background job untuk scraping dan metadata search — tidak memblokir UI selama proses berjalan.
- Status monitoring per job: `draft`, `processing`, `verified`, `done`, `fail`.
- Reusable `DataTable` component dengan dialog form, thumbnail preview (Zustand), dan drag & drop (dnd-kit).

---

> ## Tantangan & Solusi

### Tantangan: Konkurensi Browser Automation
Playwright membuka browser untuk dua keperluan sekaligus (Google Lens + Dreamina), sehingga berpotensi terjadi race condition antar job.

**Solusi:**
- Implementasi `browserLock.ts` dengan **mutex lock** agar hanya satu sesi browser automation berjalan dalam satu waktu.
- Setiap akun Dreamina menggunakan subdirektori profil browser yang terpisah untuk menghindari konflik session.

### Tantangan: Manajemen Akun & Credit yang Konsisten
Beberapa job bisa berjalan bersamaan dan memilih akun yang sama, menyebabkan over-usage credit atau akun yang digunakan saat masih `busy`.

**Solusi:**
- Pemilihan akun menggunakan `prisma.$transaction` dengan `SELECT ... FOR UPDATE SKIP LOCKED` untuk memastikan atomisitas.
- Status akun (`available` / `busy`) diperbarui di dalam transaksi yang sama sebelum proses dimulai.
- Penguatan: transaksi di-commit dan DB client dirilis segera setelah row diambil, **sebelum** memanggil operasi Playwright yang berjalan lama — menghindari row lock yang tertahan selama durasi penuh proses AI.

### Tantangan: AI Provider Abstraction
Kebutuhan untuk bisa bertukar antara Gemini dan OpenAI tanpa mengubah business logic.

**Solusi:**
- Implementasi `AIProvider` interface dengan dua implementasi: `gemini.provider.ts` dan `openai.provider.ts`.
- Factory function di `lib/ai/index.ts` memilih provider berdasarkan environment variable `AI_PROVIDER`.
- Gemini provider dilengkapi **model pool fallback** untuk menangani rate limit secara transparan.

### Tantangan: Post-Processing Video yang Fleksibel
Kebutuhan overlay teks dengan posisi, ukuran, dan timeframe yang berbeda-beda per format video.

**Solusi:**
- Abstraksi `drawtext` filter builder di `shared/utils/video/` yang menghasilkan FFmpeg filter string secara programatik.
- Konfigurasi format video (`TRY_ON_UGC`, `FOOTWEAR`, dll.) disimpan sebagai konstanta di `shared/constants/videoFormatStyles.ts`.
- Template dapat dikembangkan tanpa mengubah core `processVideo.ts`.

---

> ## Hasil & Dampak

- Pipeline pembuatan konten yang sebelumnya membutuhkan intervensi manual di setiap tahap kini berjalan **otomatis end-to-end**.
- Waktu produksi satu video promosi produk berkurang signifikan karena scraping, metadata search, generasi AI, dan post-processing berjalan dalam satu sistem.
- Manajemen multi-akun platform AI menjadi terpusat, credit terpakai lebih efisien, dan riwayat penggunaan terdokumentasi.
- Sistem dapat menangani berbagai platform AI sekaligus tanpa perubahan arsitektur berkat abstraction layer.

---

> ## Refleksi & Pembelajaran

Proyek MPS memberikan pembelajaran penting mengenai:

- Merancang arsitektur **multi-step automation pipeline** yang robust dengan penanganan error di setiap stage.
- Mengelola **konkurensi browser automation** dengan mutex lock dan profil browser yang terisolasi.
- Pentingnya melepas **database lock sesegera mungkin** sebelum operasi I/O yang berjalan lama — pelajaran langsung dari debugging bug race condition di BullMQ worker yang menahan row lock selama durasi proses Playwright.
- Membangun **AI provider abstraction layer** yang memudahkan pergantian dan penambahan provider tanpa menyentuh business logic.
- Memanfaatkan **FFmpeg secara programatik** untuk post-processing video dengan filter yang dikonfigurasi secara dinamis.

Platform ini membuka peluang pengembangan lanjutan seperti otomasi upload langsung ke platform e-commerce (Shopee, TikTok Shop), sistem antrian job yang lebih canggih dengan prioritas, serta monitoring dashboard untuk credit usage dan performa tiap platform AI.