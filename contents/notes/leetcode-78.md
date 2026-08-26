---
title: 'Leetcode 78: Subsets'
description: 'notes ini merupakan catatan untuk memahami bit manipulation'
categories: ['Python', 'DSA', 'Bit Manipulation']
date: 2026/08/26
---

# Background

Hari ini aku belajar mengenai bit manipulation menggunakan Python. soal yang aku selesaikan menggunakan bit manipulation adalah soal dengan ID 78 Subsets.

# Idea

Pada soal ini kita diminta untuk menghasilkan semua subset dari sebuah array. dan cara yang aku gunakan untuk menyelesaikan-nya seperti berikut:
1. Hitung jumlah total subset yang mungkin dari array, yaitu `2^n`, dimana `n` adalah panjang array.
2. Gunakan loop untuk menghasilkan semua subset dengan menggunakan bitmask
3. Untuk setiap bitmask, periksa setiap bit untuk menentukan elemen mana yang masuk ke subset.
    - Bitmask merepresentasikan satu subset. Misalnya untuk array dengan panjang `3`, bitmask `101` berarti elemen indeks `0` dan `2` dipilih, sedangkan elemen indeks `1` tidak dipilih.
    - Gunakan loop dari indeks `0` sampai `n - 1` untuk mengecek setiap posisi bit.
    - Untuk mengecek bit ke-`i`, gunakan operasi `mask & (1 << i)`.
    - `1 << i` membuat angka dengan hanya bit ke-`i` bernilai `1`. Contohnya `1 << 2` menghasilkan biner `100`.
    - Jika hasil `mask & (1 << i)` bukan `0`, berarti bit ke-`i` pada `mask` bernilai `1`, sehingga `nums[i]` dimasukkan ke dalam subset.
    - Jika hasilnya `0`, berarti bit ke-`i` bernilai `0`, sehingga `nums[i]` tidak dimasukkan ke dalam subset.
4. Tambahkan subset yang dihasilkan ke dalam daftar hasil.

# Example Code

```python
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        total = 1 << n
        result = []

        for mask in range(total):
            subset = []

            for i in range(n):
                if mask & (1 << i):
                    subset.append(nums[i])
            result.append(subset)
        return result
```