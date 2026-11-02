---
title: 'Leetcode 219: Contains Duplicate II'
description: 'Memahami pencarian duplikat dalam jarak indeks tertentu menggunakan hash table di Python.'
categories: ['Python', 'DSA', 'Hash Table']
date: 2026/11/02
---

# Background

Leetcode 219, **Contains Duplicate II**, meminta kita menentukan apakah ada dua elemen dengan nilai yang sama dan jarak indeks paling banyak `k`.

Secara formal, kita mencari dua indeks berbeda `i` dan `j` yang memenuhi:

- `nums[i] == nums[j]`
- `|i - j| <= k`

Contoh:

- `nums = [1, 2, 3, 1]` dan `k = 3` menghasilkan `True`, karena angka `1` muncul di indeks `0` dan `3`, dengan jarak `3`.
- `nums = [1, 0, 1, 1]` dan `k = 1` menghasilkan `True`, karena angka `1` muncul di indeks `2` dan `3`, dengan jarak `1`.
- `nums = [1, 2, 3, 1, 2, 3]` dan `k = 2` menghasilkan `False`, karena tidak ada angka berulang yang jarak indeksnya paling banyak `2`.

# Idea

Kita memeriksa `nums` dari kiri ke kanan dan menggunakan dictionary sebagai hash table. Dictionary `seen` menyimpan indeks terakhir tempat setiap angka ditemukan.

Untuk setiap angka `n` pada indeks `i`:

1. Jika `n` sudah ada di `seen`, hitung jarak ke kemunculan terakhirnya, yaitu `i - seen[n]`. Karena kita berjalan dari kiri ke kanan, indeks saat ini selalu lebih besar.
2. Jika jarak tersebut paling banyak `k`, berarti ada duplikat yang memenuhi syarat. Kita bisa langsung mengembalikan `True`.
3. Jika belum pernah muncul atau jaraknya terlalu jauh, simpan `i` sebagai indeks terakhir `n`.
4. Jika seluruh elemen diperiksa tanpa menemukan pasangan yang memenuhi syarat, kembalikan `False`.

Kita hanya perlu menyimpan kemunculan terakhir. Jika angka yang sama muncul lagi, indeks terakhir selalu memberikan jarak terkecil terhadap indeks saat ini. Jadi, bila jarak ke kemunculan terakhir masih lebih besar dari `k`, kemunculan yang lebih lama juga pasti terlalu jauh.

# Example Code

```python
class Solution(object):
    def containsNearbyDuplicate(self, nums, k):
        seen = {}

        for i, n in enumerate(nums):
            if n in seen and i - seen[n] <= k:
                return True
            seen[n] = i

        return False
```

# Complexity

- Waktu: **O(n)**, karena setiap elemen diperiksa satu kali dan pencarian serta pembaruan dictionary rata-rata membutuhkan waktu **O(1)**.
- Ruang: **O(n)** pada kasus terburuk, jika semua angka berbeda dan semuanya disimpan di dictionary.
