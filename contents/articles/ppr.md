---
title: "Partial Prerendering: Cara Next.js Sajikan Halaman Cepat Sekaligus Fresh"
date: 2026/06/05
thumbnail: '/images/thumbnail/nextjs-ppr.webp'
description: 'Static itu cepat tapi kontennya stale. Dynamic itu fresh tapi lambat. PPR datang dan bilang: kamu bisa dapat keduanya — dalam satu HTTP response.'
categories: ['nextjs', 'web development', 'frontend', 'performance', 'rendering']
---

# Partial Prerendering: Static Shell + Dynamic Stream dalam Satu Request

---

## Introduction

Ada dilema klasik yang selalu muncul saat develop halaman web:

*"Halaman ini harus static supaya cepat, tapi ada bagian yang perlu data fresh per-user."*

Dulu pilihannya cuma dua. Pertama, jadikan seluruh halaman dynamic — server render penuh setiap request, semua orang nunggu, TTFB (Time to First Byte) jadi lambat. Kedua, jadikan static tapi fetch data personal di client — user lihat loading spinner, ada layout shift, UX kurang mulus.

**Partial Prerendering (PPR)** hadir untuk menghilangkan dilema itu.

Idenya sederhana:
> Sajikan static shell seketika. Stream dynamic content belakangan. Semua dalam satu HTTP response.

Tidak ada client-side fetch ekstra. Tidak ada layout shift. Satu request, satu response.

---

## Mental Model: Suspense Sebagai Pembatas

Cara termudah memahami PPR adalah lewat satu aturan sederhana:

```
Di luar <Suspense>  →  STATIC  (masuk ke HTML shell, tampil seketika)
Di dalam <Suspense> →  DYNAMIC (di-stream belakangan, saat data siap)
```

Developer tidak perlu konfigurasi khusus atau dekorator magic. Cukup identifikasi bagian mana yang dynamic, wrap dengan `<Suspense>`, dan Next.js mengurus sisanya.

---

## Apa yang Terjadi di Balik Layar?

### Saat Build Time

Untuk tiap PPR route, Next.js menghasilkan tiga hal sekaligus:

**Static HTML shell** — HTML dari semua konten yang bisa di-prerender, dengan Suspense fallbacks sebagai placeholder di tempat dynamic content akan muncul.

**`postponedState`** — Serialized string yang menyimpan "instruksi" untuk melanjutkan render bagian dynamic. Perlakukan ini sebagai nilai opaque — jangan diparse, jangan dimodifikasi. Kalau diubah, output dynamic-nya bakal salah.

**RSC payload** — Data React Server Components untuk bagian static halaman, dipakai saat client-side navigation (pindah halaman tanpa full reload).

### Saat Request Time

```
1. Server kirim static HTML shell ke client  →  tampil seketika
2. Server resume render dynamic portions pakai postponedState
3. Dynamic content di-stream ke client saat sudah resolve
4. React hydrate Suspense boundaries yang deferred
```

User melihat layout, header, konten utama — seketika. Lalu data personal atau realtime menyusul satu per satu via streaming.

---

## Implementasi di Next.js 16

Di Next.js 16, PPR aktif secara default begitu kamu enable `cacheComponents`:

```ts
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,
}

export default nextConfig
```

Lalu di halaman, cukup pakai `<Suspense>` untuk menandai batas dynamic:

```tsx
// app/product/[id]/page.tsx
import { Suspense } from "react"

// Static — di-cache, masuk ke HTML shell
async function ProductDetails({ id }: { id: string }) {
  const product = await getProduct(id)
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  )
}

// Dynamic — per-request, di-stream belakangan
async function RealtimePrice({ id }: { id: string }) {
  const price = await getLivePrice(id) // tidak di-cache
  return <p>Harga: Rp {price.toLocaleString()}</p>
}

// Dynamic — butuh cookies/session
async function UserRecommendations() {
  const user = await getCurrentUser()
  const recs = await getRecommendations(user.id)
  return (
    <ul>{recs.map(r => <li key={r.id}>{r.name}</li>)}</ul>
  )
}

export default function ProductPage({ params }) {
  return (
    <main>
      {/* Static: muat seketika */}
      <ProductDetails id={params.id} />

      {/* Dynamic: menyusul via stream */}
      <Suspense fallback={<div className="skeleton">Memuat harga...</div>}>
        <RealtimePrice id={params.id} />
      </Suspense>

      <Suspense fallback={<div className="skeleton">Memuat rekomendasi...</div>}>
        <UserRecommendations />
      </Suspense>
    </main>
  )
}
```

Contoh di atas adalah halaman produk e-commerce. Deskripsi produk tampil seketika dari cache, sementara harga realtime dan rekomendasi personal menyusul via streaming. User tidak pernah melihat halaman kosong.

---

## Dua Mode Infrastruktur

### Mode 1: Origin-Only (Default)

Paling simpel. Semua request ke Next.js server, server baca shell dari local cache, kirim, lalu stream dynamic content.

```
Client ──► Next.js Server
            ├─ kirim HTML shell (dari cache lokal)
            └─ stream dynamic content
```

Ini yang `next start` lakukan secara default. Tidak butuh setup tambahan, dan bekerja di mana saja yang support streaming HTTP response.

### Mode 2: CDN Shell + Origin Compute

Untuk latency optimal, static shell bisa di-cache di CDN edge. Dynamic content tetap dari origin.

```
Client ──► CDN Edge (~10ms)
            ├─ sajikan cached HTML shell
            └──► Origin Server
                  └─ render + stream dynamic content saja
            ◄── CDN gabungkan jadi satu response
```

TTFB untuk shell turun drastis ke edge latency. Dynamic content tetap segar dari origin. Tapi ini butuh platform yang support **resume protocol** — mekanisme CDN untuk minta origin "skip shell, render dynamic saja."

Caranya: CDN kirim POST request ke origin dengan header `next-resume: 1` dan `postponedState` sebagai request body.

---

## Satu Aturan yang Tidak Boleh Dilanggar

> **Shell dan `postponedState` harus selalu disimpan dan diupdate secara atomik.**

Saat PPR route di-revalidate, Next.js me-regenerate keduanya sekaligus. Menyajikan shell baru dengan `postponedState` lama, atau sebaliknya, akan menghasilkan dynamic content yang salah.

Ini relevan terutama kalau kamu implement custom caching layer atau CDN integration.

---

## Kapan Pakai PPR, Kapan Tidak

### ✅ Cocok untuk PPR

| Halaman | Kenapa Cocok |
|---|---|
| Product page e-commerce | Deskripsi static, harga/stok dynamic |
| Artikel berita | Konten static, komentar/reaction dynamic |
| Dashboard | Layout + struktur static, data widget dynamic |
| Halaman beranda dengan personalisasi | Hero static, rekomendasi user dynamic |

### ❌ Kurang Cocok untuk PPR

| Halaman | Kenapa Tidak Cocok |
|---|---|
| Login / auth flow | Semua konten bergantung session |
| Admin panel | Hampir semua data dynamic dan real-time |
| Financial dashboard | Stale shell bisa menyesatkan pengambilan keputusan |
| Platform tidak support streaming | PPR butuh streaming HTTP untuk berjalan |

---

## PPR vs Strategi Rendering Lainnya

| Strategi | TTFB | Konten Personal | Butuh Client Fetch? |
|---|---|---|---|
| SSG (fully static) | ⚡ Sangat cepat | ❌ | ✅ Perlu |
| SSR (fully dynamic) | 🐢 Lambat | ✅ | ❌ |
| SSG + client fetch | ⚡ Shell cepat | ✅ | ✅ Perlu |
| **PPR** | **⚡ Shell cepat** | **✅** | **❌ Tidak perlu** |

PPR memberikan kombinasi terbaik dari sudut pandang user. Trade-off-nya cuma satu: kompleksitas infrastruktur — tapi itu urusan platform, bukan kamu sebagai developer.

---

## Kesimpulan

PPR bukan sekadar fitur baru yang perlu dicoba-coba. Ini adalah jawaban atas dilema lama yang sudah lama menghantui developer web.

Dengan `<Suspense>` sebagai pembatas yang intuitif, kamu bisa identify secara eksplisit mana bagian halaman yang static dan mana yang dynamic — tanpa harus split ke route berbeda, tanpa loading spinner dari client-side fetch, tanpa kompromi performa.

Static shell tampil seketika. Dynamic content menyusul saat siap. Satu request. Satu response.

Itulah PPR.

---

*Sumber: [PPR Platform Guide](https://nextjs.org/docs/app/guides/ppr-platform-guide) — Next.js Docs*