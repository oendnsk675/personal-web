---
title: "Motionline Product Search"
description: "Platform internal berbasis web untuk mengotomasi produksi dan distribusi konten produk e-commerce, mulai dari generasi video AI, post-processing FFmpeg, caption generation, manajemen akun platform, hingga publishing ke Shopee, TikTok, dan Threads."
thumbnail: "/images/thumbnail/mps-thumbnail.webp"
images:
  - "/images/thumbnail/mps-0.webp"
stack: ["Next.js", "React", "TailwindCSS", "PostgreSQL", "Prisma", "Playwright", "FFmpeg"]
links:
  code: ""
  live: ""
  video: ""
role: "Software Engineer"
date: 2026/02/10
---

> ## Short Explanation

Motionline Product Search (MPS) adalah **platform internal berbasis web** untuk mengotomasi alur kerja produksi dan distribusi konten produk e-commerce. Sistem ini mengubah data produk menjadi video promosi siap publish melalui pipeline yang mencakup **AI prompt generation**, **AI video/image generation** via Leonardo AI, Dreamina, Sora, dan Grok, **post-processing FFmpeg**, **caption generation**, serta **publishing workflow** ke Shopee, TikTok, dan Threads.

Versi terbaru MPS berkembang dari product search automation menjadi **AI-powered product video generation and social media publishing platform**. Selain dashboard CMS, sistem kini mendukung multi-user RBAC, manajemen akun platform per user, OAuth Threads, job endpoint untuk worker eksternal, publish target matrix, serta mobile publish jobs untuk otomasi upload Shopee dan TikTok.

---

> ## Latar Belakang & Masalah

Produksi konten affiliate dan social commerce memiliki banyak bottleneck operasional:

- Pembuatan video produk membutuhkan banyak tahap manual: riset produk, prompt, generasi video, editing, caption, dan upload.
- Operator harus berpindah antar platform AI seperti Leonardo AI, Dreamina, Sora, dan Grok untuk menghasilkan aset video.
- Post-processing video seperti overlay teks, musik, dan encoding masih dilakukan dengan tool terpisah.
- Akun platform AI dan akun publishing memiliki credit, quota, session, dan status yang sulit dipantau manual.
- Upload ke Shopee, TikTok, dan Threads butuh alur berbeda, tetapi harus tetap terhubung dengan satu produk/video yang sama.
- Tidak ada audit trail yang rapi untuk tracking credit usage, publish attempts, permalink, error, dan quota.
- Worker eksternal dan mobile automation butuh API kontrak yang aman, idempotent, dan mudah dikonsumsi.

---

> ## Tujuan Proyek

- Mengotomasi pipeline konten produk dari data produk sampai video siap publish.
- Memusatkan AI generation, caption generation, post-processing, dan publishing dalam satu dashboard.
- Mendukung multi-platform AI dengan abstraction layer agar provider bisa diganti tanpa mengubah business logic.
- Menyediakan RBAC untuk admin, operator, dan viewer.
- Mengelola akun platform per user, termasuk credit, quota, OAuth token, dan riwayat penggunaan.
- Memisahkan konsep **affiliate publish** dan **social publish** agar Shopee, TikTok, dan Threads bisa berjalan dengan aturan masing-masing.
- Menyediakan public worker endpoints dan mobile job API untuk proses background tanpa memblokir UI.

---

> ## Tech Stack

**Framework:** Next.js 16 App Router, React 19, TypeScript 5  
**Runtime & Package Manager:** Bun  
**Styling:** Tailwind CSS v4, shadcn/ui, Radix UI, next-themes  
**Database:** PostgreSQL, Prisma ORM v7  
**Authentication:** NextAuth.js v5 Credentials Provider  
**Authorization:** RBAC middleware untuk admin, operator, viewer  
**State Management:** TanStack React Query, Zustand  
**Browser Automation:** Playwright  
**Video Processing:** FFmpeg via fluent-ffmpeg  
**AI Text Generation:** Google Gemini AI / OpenAI-compatible provider  
**AI Video & Image:** Leonardo AI, Dreamina, Sora, Grok  
**Publishing:** Meta Threads Graph API, mobile automation jobs untuk Shopee dan TikTok  
**Validation:** Zod  
**HTTP Client:** Axios  
**Realtime:** Bun WebSocket relay  
**Process Manager:** PM2  
**Role:** Software Engineer

Saya membangun sistem ini dari sisi arsitektur aplikasi, database schema, dashboard CMS, AI provider abstraction, browser automation, FFmpeg post-processing, platform account management, RBAC, hingga publishing integration dan worker-friendly APIs.

---

> ## Fitur Utama

### 1. AI Content Generation Pipeline

- Generate prompt video dan image berdasarkan format konten seperti try-on, footwear, beauty, dan ASMR.
- Mendukung provider teks Gemini atau OpenAI-compatible melalui `AIProvider` abstraction.
- Integrasi AI video/image dengan Leonardo AI, Dreamina, Sora, dan Grok.
- Dukungan metode input gambar seperti `first_last`, `collage`, dan `single image`.
- Prompt, prompt image, timeframe, format video, source provider, dan hasil video tersimpan di database.

### 2. Leonardo, Dreamina, Sora, dan Grok Automation

- Leonardo AI terintegrasi melalui automation dan API flow untuk generasi image/video, credit sync, dan auto-login.
- Dreamina, Sora, dan Grok dijalankan dengan Playwright browser automation untuk upload aset, input prompt, polling progress, dan pengambilan hasil.
- Setiap akun platform memiliki profil browser terpisah agar session tidak saling bentrok.
- Sistem memilih akun berdasarkan ownership user, status, credit, dan `lastUsedAt`.

### 3. Caption Generation

- **Social caption** untuk Threads, Instagram-style, dan TikTok-style content dengan tone casual tanpa hard-sell.
- **Affiliate caption** untuk Shopee dengan CTA, deskripsi produk, dan hashtag yang lebih sales-oriented.
- Caption bisa dibuat ulang dari UI dengan overwrite confirmation.
- Publish flow memakai prioritas caption: `socialCaption`, manual override, account template, lalu `productName` fallback.

### 4. FFmpeg Post-Processing

- Overlay teks dinamis untuk nama produk, harga, CTA, dan elemen format video lain.
- Timeframe-based rendering dengan filter `drawtext` yang dibangun secara programatik.
- Background music dengan pengaturan start/end time dan durasi.
- Output video di-encode dengan format siap streaming dan siap dikonsumsi platform publishing.
- Video preview mendukung HTTP range request agar kompatibel dengan browser preview dan Meta ingestion.

### 5. Platform Account Management

- Manajemen akun platform per user, termasuk Leonardo, Dreamina, Sora, Grok, dan Threads.
- Bulk upload akun platform via JSON dengan Zod validation, template download, dan row preview.
- Account rotation menggunakan pendekatan least-recently-used untuk memilih akun yang tersedia.
- Status akun meliputi `available`, `busy`, dan `logged_out`.
- Credit dan quota dapat disinkronkan dari dashboard maupun endpoint worker.
- Riwayat penggunaan tercatat di `HistoryPlatform` untuk audit credit, publish attempt, external ID, dan result URL.

### 6. Threads Publishing via Meta Graph API

- OAuth connect untuk akun Threads melalui Meta Developer API.
- Auto token refresh sebelum publish jika token mendekati expiry.
- One-click publish video ke Threads dari dashboard atau worker endpoint.
- Duplicate publish guard: video yang sudah sukses publish ke Threads akan ditolak dengan HTTP 409.
- Publish history menyimpan Threads media ID dan permalink.
- Endpoint publik `POST /api/publish/threads` dibuat untuk integrasi external BullMQ worker.

### 7. Publish Target Matrix

- Sistem memisahkan **affiliate publish** dan **social publish** lewat model `VideoPublishTarget`.
- Shopee adalah target `AFFILIATE / SHOPEE / MOBILE` dan menjadi syarat utama status video `PUBLISHED`.
- TikTok adalah target `SOCIAL / TIKTOK / MOBILE`, bersifat opsional dan tidak memblokir status `PUBLISHED`.
- Threads adalah target `SOCIAL / THREADS / BACKEND_API`, berjalan setelah affiliate link Shopee tersedia.
- Setiap target punya status sendiri: `PENDING`, `IN_PROGRESS`, `SUCCESS`, `FAILED`, atau `SKIPPED`.
- Target menyimpan priority, dependency, claim metadata, attempts, result URL, external ID, dan error detail.

### 8. Mobile Publish Jobs

- Mobile automation app dapat mengambil job upload melalui `POST /api/mobile/publish-jobs/claim`.
- Job Shopee memakai `affiliateCaption` dan wajib mengembalikan Shopee affiliate/result link.
- Job TikTok memakai `socialCaption` dan diperlakukan sebagai social post biasa, bukan TikTok affiliate.
- Completion dikirim melalui `POST /api/mobile/publish-jobs/{jobId}/complete`.
- Claim punya expiry agar job yang macet bisa diambil ulang.
- Failure tersimpan di level target tanpa otomatis menggagalkan video global.

### 9. Multi-User RBAC

- Authentication memakai NextAuth.js v5 dengan Credentials Provider.
- Role `admin`, `operator`, dan `viewer` diterapkan di middleware dan API layer.
- Admin memiliki akses penuh ke semua data.
- Operator dapat membuat, mengubah, dan menjalankan generation/publishing untuk data yang relevan.
- Viewer hanya dapat melihat dashboard dan data tanpa aksi mutasi.
- Video generations dan platform accounts di-scope dengan `userId` untuk isolasi data per user.

### 10. Dashboard, UX, dan Observability

- Dashboard CMS mencakup video generation, platform accounts, prompts, music, logs, users, dan profile.
- Data table reusable memakai TanStack Table, loading skeleton konsisten, dialog form, preview video, dan bulk upload flow.
- Public landing page memakai desain **Glassmorphism Aurora** dengan hero, features grid, timeline, stats, dan CTA.
- System session logs mencatat credit sync, login automation, video download, post-processing, upload session, dan sync jobs.
- Optional Bun WebSocket relay mendukung realtime progress event.

---

> ## Tantangan & Solusi

### Tantangan: Konkurensi Browser Automation

Playwright dipakai untuk beberapa platform sekaligus, seperti Leonardo login, Dreamina generation, Sora, Grok, dan Google Lens-related automation. Jika banyak job berjalan bersamaan, browser session bisa bentrok.

**Solusi:**

- Memisahkan profil browser per platform account melalui `dirProfile`.
- Menggunakan status akun (`available`, `busy`, `logged_out`) untuk mencegah satu akun dipakai dua job bersamaan.
- Menjaga operasi Playwright berjalan di service layer khusus agar dashboard tetap responsif.

### Tantangan: Account Rotation dan Credit Consistency

Multi-user dan multi-account membuat pemilihan akun harus konsisten. Sistem harus menghindari akun yang sedang sibuk, credit habis, atau bukan milik user terkait.

**Solusi:**

- Platform account di-scope dengan `userId`.
- Pemilihan akun memakai strategi least-recently-used berdasarkan `lastUsedAt`.
- Credit usage dicatat di `HistoryPlatform`.
- Credit dan limit sync dapat dijalankan dari dashboard maupun worker endpoint.

### Tantangan: Memisahkan Affiliate dan Social Publishing

Sebelumnya publishing cenderung affiliate-centric. Sistem terbaru membutuhkan Shopee sebagai affiliate flow, sementara TikTok dan Threads adalah social distribution flow.

**Solusi:**

- Membuat model general `VideoPublishTarget`.
- Menambahkan `type`, `platform`, `executor`, `requiredForPublished`, `dependsOnTargetId`, dan status per target.
- Menetapkan aturan bahwa `VideoGeneration.status = PUBLISHED` berarti Shopee affiliate publish selesai.
- TikTok dan Threads menyimpan hasil di target/history tanpa memaksa perubahan status global.

### Tantangan: Threads API dan Idempotency

Publish ke Threads perlu token valid, video URL publik, quota yang cukup, dan guard agar worker tidak publish video yang sama berulang.

**Solusi:**

- OAuth connect dan token refresh dibuat di service layer `services/threads`.
- Endpoint publish menolak duplicate success dengan HTTP 409.
- Publish attempt dicatat di `HistoryPlatform` dengan status, external ID, dan permalink.
- Axios dipakai untuk menghindari masalah timeout IPv6 dual-stack pada sebagian jaringan.

### Tantangan: AI Provider Abstraction

Prompt generation harus bisa berpindah dari Gemini ke OpenAI-compatible provider tanpa mengubah business logic.

**Solusi:**

- Membuat `AIProvider` interface.
- Factory memilih provider berdasarkan environment variable `AI_PROVIDER`.
- Business logic hanya memanggil kontrak provider, bukan SDK spesifik.

### Tantangan: Post-Processing Video yang Fleksibel

Setiap format konten membutuhkan overlay teks, timing, musik, dan style berbeda.

**Solusi:**

- Membuat builder filter FFmpeg berbasis konfigurasi timeframe.
- Menyimpan prompt dan format style sebagai template yang bisa diperluas.
- Memisahkan proses video di `services/video/processVideo.ts` agar bisa dipanggil dari pipeline mana pun.

---

> ## Hasil & Dampak

- Pipeline konten berubah dari proses manual multi-tool menjadi workflow terpusat dalam satu platform.
- Operator dapat membuat prompt, menghasilkan video AI, menambahkan caption, memproses video, dan mengirim publish job dari CMS.
- Akun AI dan akun social platform lebih mudah dikelola karena credit, quota, status, dan history tersedia di dashboard.
- Shopee, TikTok, dan Threads bisa berjalan dengan aturan publish berbeda tanpa mencampur konsep affiliate dan social.
- Worker eksternal dan mobile app dapat mengambil job melalui API kontrak yang jelas.
- Sistem lebih siap diskalakan ke banyak operator karena RBAC dan user-level data isolation sudah tersedia.
- Audit trail menjadi lebih kuat melalui `HistoryPlatform`, upload logs, target status, result URL, external ID, dan error message.

---

> ## Refleksi & Pembelajaran

Proyek MPS memberikan pembelajaran penting dalam membangun automation platform yang menggabungkan AI, browser automation, media processing, dan publishing integration:

- Arsitektur pipeline harus memisahkan status global video dari status tiap channel distribusi.
- Browser automation perlu isolasi session, status akun, dan retry strategy karena platform eksternal tidak selalu stabil.
- Account rotation harus mempertimbangkan user ownership, credit, quota, status, dan audit trail.
- Publishing flow perlu idempotency sejak awal agar worker retry tidak membuat duplicate post.
- AI provider abstraction membuat sistem lebih tahan terhadap perubahan model, pricing, dan rate limit.
- FFmpeg lebih aman dikelola lewat konfigurasi dan builder programatik dibanding filter string manual per format.
- RBAC dan data isolation perlu masuk lebih awal ketika platform mulai dipakai banyak operator.

Ke depan, MPS masih bisa dikembangkan dengan sistem queue prioritas yang lebih matang, monitoring dashboard untuk worker dan quota platform, shared-secret untuk public worker endpoints, dukungan upload langsung ke lebih banyak social commerce platform, serta workflow approval sebelum publish massal.
