---
title: "Next.js Rendering Philosophy"
date: 2026/06/05
thumbnail: '/images/thumbnail/nextjs-rendering-philosophy.webp'
description: 'Framework lain paksa kamu pilih: static atau dynamic. Next.js bilang: kenapa harus milih? Ini filosofi rendering yang mengubah cara kita berpikir soal web.'
categories: ['nextjs', 'web development', 'frontend', 'rendering']
---

# Kenapa Static vs Dynamic Bukan Lagi Pilihan Biner di Next.js

## Introduction

Kalau kamu pernah pakai Gatsby, Hugo, atau bahkan SvelteKit, pasti familiar sama pertanyaan klasik ini:

*"Halaman ini static atau dynamic?"*

Dan kamu terpaksa milih salah satu. Kalau static, konten personal harus di-fetch di client (loading spinner, layout shift). Kalau dynamic, semua orang nunggu server render dulu baru lihat apapun.

Next.js datang dengan perspektif yang berbeda:

> **Batas antara static dan dynamic bukan di level route, tapi di level component.**

Satu halaman bisa sekaligus punya static shell yang muat seketika, dan bagian dynamic yang menyusul via streaming. Tidak ada kompromi.

Ini bukan sekadar fitur baru — ini adalah **model berpikir yang berbeda total**.

---

## Dulu: Framework Paksa Kamu Pilih

Dua kubu utama di dunia rendering web:

### Build-time Prerendering

Semua halaman di-generate saat build. Output berupa file statis — upload ke CDN, selesai. Zero runtime infrastructure.

Kedengarannya ideal, tapi ada harga yang harus dibayar: **setiap perubahan konten butuh rebuild dan redeploy.** Dan kalau ada konten personal (greeting untuk user yang login, harga realtime), terpaksa di-fetch di client setelah halaman load. Loading spinner pun muncul.

### Route-level Dynamic

Tiap route milih: static atau dynamic. Mudah dimengerti, infrastruktur terpisah rapi.

Masalahnya? Pilihan ini **all-or-nothing**. Punya halaman produk yang mostly static tapi butuh satu komponen harga realtime? Seluruh halaman harus jadi dynamic. Semua user nunggu server render penuh, padahal 90% kontennya sama untuk semua orang.

---

## Next.js: Static dan Dynamic Itu Spektrum, Bukan Dua Kutub

Next.js mengambil jalan ketiga: **component-level boundaries**.

Static dan dynamic bisa coexist dalam satu halaman, satu HTTP response. Sebuah halaman bisa punya:

- Static shell yang muat seketika (dari CDN, milidetik)
- Cached function yang revalidate secara independen
- Dynamic section yang di-stream masuk belakangan
- Dan semua itu tanpa perlu split jadi route terpisah atau client-side fetch

Tiga fitur yang mewujudkan model ini:

- **Partial Prerendering (PPR)** — sajikan static shell, stream dynamic content, dalam satu response
- **Cache Components (`use cache`)** — caching granular di level function, bukan route
- **On-demand revalidation** — invalidasi cache tanpa redeploy

Ketiganya bukan fitur tambahan biasa. Mereka membentuk satu **rendering model** yang kohesif.

---

## Apa Konkretnya yang Berubah Buat Developer?

### 1. Caching Bisa Dilakukan Incremental

Dulu kamu harus putuskan di awal: route ini static atau dynamic? Kalau salah tebak, refactor besar-besaran.

Sekarang kamu bisa tambahkan caching kapan saja. Mulai dengan dynamic, cache fungsi-fungsi yang mahal belakangan. Halaman mana pun bisa di-revalidate on-demand dengan `revalidateTag()` atau `revalidatePath()`.

### 2. Cache di Level Fungsi, Bukan Route

Ini pergeseran besar. Misalnya punya query database yang mahal untuk daftar kategori — di-cache secara independen, bukan ikut-ikutan status route.

```tsx
import { unstable_cache } from 'next/cache'

const getCategories = unstable_cache(
  async () => db.categories.findMany(),
  ['categories'],
  { revalidate: 3600, tags: ['categories'] }
)
```

Saat ada kategori baru ditambahkan? Panggil `revalidateTag('categories')`, hanya fungsi itu yang di-regenerate.

### 3. Static Shell Tetap Cepat Meski Halaman Punya Konten Dynamic

Karena batasnya di level component, bagian yang tidak berubah tetap disajikan dari cache/CDN. User langsung lihat layout, header, navigasi — sementara data personalnya menyusul via streaming.

---

## Trade-off yang Perlu Dipahami

Model ini bukan gratis. Ada harga yang harus dibayar: **kompleksitas infrastruktur**.

Semakin granular batas rendering-mu, semakin banyak hal yang harus dipahami platform hosting-mu. Platform harus support:

| Kebutuhan | Kenapa Perlu |
|---|---|
| **Streaming** | Static dan dynamic disajikan dalam satu response |
| **Cache coordination** | Invalidasi via `revalidateTag` harus propagate ke semua server instances |
| **Cache consistency** | HTML response dan RSC payload harus selalu sinkron |

Kalau salah satunya tidak terpenuhi, bisa muncul bug subtle: user melihat data yang berbeda antara full reload vs navigasi antar halaman.

Makanya di Next.js 16.2 hadir **Adapter API** — kontrak resmi yang memastikan platform-platform lain (Netlify, Cloudflare, AWS) bisa support semua ini dengan benar.

---

## Functional Fidelity vs Performance Fidelity

Ada dua level dukungan platform yang perlu kamu pahami:

**Functional fidelity** — semua fitur Next.js *bekerja benar*. Ini binary: lulus adapter test suite atau tidak. Platform yang lulus artinya fully supported.

**Performance fidelity** — fitur mencapai performa *optimal*. Ini spektrum. Contohnya: PPR static shell disajikan dari CDN edge (beberapa milidetik) vs dari origin server (ratusan milidetik). Keduanya "benar", tapi performanya beda jauh.

Platform-platform berkompetisi di level performance fidelity. Functional fidelity adalah syarat minimum.

---

## Kesimpulan: Ini Bukan Hanya Soal Next.js

Pergeseran dari "pilih static atau dynamic per route" ke "static dan dynamic per component" mencerminkan sesuatu yang lebih besar: **framework web modern mulai memperlakukan rendering sebagai sistem yang bisa dikonfigurasi secara granular**, bukan sekedar pilihan binary di waktu build.

Buat kamu sebagai developer, artinya satu hal: kamu tidak perlu kompromi lagi antara performa dan kesegaran data. Yang berubah adalah cara kamu berpikir tentang *di mana* batas itu ditarik.

Dan itulah evolusi yang sebenarnya sedang terjadi.

---

*Sumber: [Next.js Rendering Philosophy](https://nextjs.org/docs/app/guides/rendering-philosophy)*