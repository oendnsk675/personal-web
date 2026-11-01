---
title: 'Leetcode 205: Isomorphic Strings'
description: 'Memahami pola isomorphic strings dan solusi menggunakan hash table di Python.'
categories: ['Python', 'DSA', 'Hash Table']
date: 2026/08/25
---

# Background

Leetcode 205, **Isomorphic Strings**, meminta kita menentukan apakah dua string memiliki pola kemunculan karakter yang sama.

Dua string disebut *isomorphic* jika setiap karakter pada string pertama selalu dipasangkan dengan karakter yang sama pada string kedua, dan pemetaan tersebut berlaku satu-lawan-satu. Artinya, satu karakter tidak boleh memiliki pasangan yang berubah-ubah, dan dua karakter berbeda tidak boleh dipasangkan dengan karakter yang sama.

Contoh:

- `egg` dan `add` adalah isomorphic: `e → a` dan `g → d`.
- `paper` dan `title` adalah isomorphic: `p → t`, `a → i`, `e → l`, dan `r → e`.
- `ab` dan `cc` bukan isomorphic: `a` dan `b` sama-sama dipasangkan dengan `c`.

# Idea

Kita memeriksa kedua string secara bersamaan, karakter demi karakter. Di Python, `dict` berfungsi sebagai hash table untuk menyimpan pasangan karakter yang sudah ditemukan.

Kita menggunakan dua dictionary:

- `s_to_t` menyimpan pemetaan dari karakter `s` ke karakter `t`.
- `t_to_s` menyimpan pemetaan balik dari karakter `t` ke karakter `s`.

Pemetaan balik diperlukan agar satu karakter di `t` tidak menjadi pasangan bagi dua karakter berbeda di `s`. Misalnya, pada `ab` dan `cc`, pemeriksaan `s_to_t` saja tidak menemukan masalah karena `a` dan `b` masing-masing baru muncul sekali. Pemeriksaan `t_to_s` mendeteksi bahwa `c` sudah dipasangkan dengan `a` ketika pasangan `b → c` ditemukan.

Untuk setiap pasangan karakter `a` dari `s` dan `b` dari `t`, langkahnya adalah:

1. Jika `a` sudah ada di `s_to_t`, pastikan pasangannya tetap `b`. Jika berbeda, kembalikan `False`.
2. Jika `b` sudah ada di `t_to_s`, pastikan pasangannya tetap `a`. Jika berbeda, kembalikan `False`.
3. Jika kedua pemeriksaan lolos, simpan `a → b` dan `b → a` di dictionary masing-masing.
4. Jika semua posisi selesai diperiksa tanpa konflik, kembalikan `True`.

# Example Code

```python
class Solution(object):
    def isIsomorphic(self, s, t):
        s_to_t = {}
        t_to_s = {}

        for a, b in zip(s, t):
            if a in s_to_t and s_to_t[a] != b:
                return False
            if b in t_to_s and t_to_s[b] != a:
                return False

            s_to_t[a] = b
            t_to_s[b] = a

        return True
```

# Complexity

- Waktu: **O(n)**, karena setiap karakter diperiksa satu kali.
- Ruang: **O(k)**, untuk menyimpan pemetaan karakter yang ditemukan; `k` adalah jumlah karakter berbeda.
