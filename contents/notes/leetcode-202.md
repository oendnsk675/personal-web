---
title: 'Leetcode 202: Happy Number'
description: 'Memahami proses happy number dan mendeteksi siklus menggunakan hash set di Python.'
categories: ['Python', 'DSA', 'Hash Table']
date: 2026/11/01
---

# Background

Leetcode 202, **Happy Number**, meminta kita menentukan apakah sebuah bilangan positif pada akhirnya mencapai `1` melalui proses menjumlahkan kuadrat digit-digitnya.

Contoh `19`:

```text
19 → 1² + 9² = 82
82 → 8² + 2² = 68
68 → 6² + 8² = 100
100 → 1² + 0² + 0² = 1
```

Karena prosesnya mencapai `1`, maka `19` adalah *happy number*. Jika proses tidak mencapai `1`, suatu nilai akan berulang dan urutannya masuk ke dalam siklus.

# Idea

Kita memakai `set` bernama `seen` untuk mencatat bilangan yang sudah diproses. Pada setiap putaran, periksa apakah nilai saat ini sudah pernah muncul. Jika sudah, berarti urutannya mengulang dan kita mengembalikan `False`. Jika belum, simpan nilainya lalu hitung jumlah kuadrat digit-digitnya.

Pengecekan dilakukan sebelum `seen.add(n)`. Saat pertama kali melihat suatu nilai, nilai itu belum ada sehingga bisa dicatat. Jika urutan kembali ke nilai yang sama, pengecekan pada putaran berikutnya menemukannya di `seen` dan mendeteksi siklus.

Digit diproses dari kanan ke kiri menggunakan modulo dan pembagian bulat:

- `n % 10` mengambil digit paling kanan.
- `n //= 10` membuang digit paling kanan dari `n`.
- `while n > 0` mengulanginya sampai semua digit selesai diproses.

Contoh, jika `n = 582`, digit yang diambil berturut-turut adalah `2`, `8`, lalu `5`.

Langkah algoritmanya:

1. Buat `seen` sebagai set kosong.
2. Selama `n` belum sama dengan `1`:
   - Jika `n` sudah ada di `seen`, kembalikan `False` karena terjadi siklus.
   - Tambahkan `n` ke `seen`.
   - Hitung jumlah kuadrat digit-digit `n`.
   - Ganti `n` dengan hasil penjumlahan.
3. Jika proses mencapai `1`, kembalikan `True`.

# Example Code

```python
class Solution:
    def isHappy(self, n: int) -> bool:
        seen = set()

        while n != 1:
            if n in seen:
                return False

            seen.add(n)

            total = 0
            while n > 0:
                digit = n % 10
                total += digit * digit
                n //= 10

            n = total

        return True
```

# Complexity

Misalkan `k` adalah jumlah transformasi yang dilakukan sebelum mencapai `1` atau mendeteksi siklus, dan `d` adalah jumlah digit terbesar yang diproses dalam satu transformasi.

- Waktu: **O(k · d)**. Setiap transformasi memeriksa digit-digit bilangan, sedangkan pencarian dan penambahan ke set rata-rata **O(1)**.
- Ruang: **O(k)** untuk menyimpan nilai-nilai yang sudah muncul.
