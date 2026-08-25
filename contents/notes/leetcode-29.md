---
title: 'Leetcode 29: Divide Two Integers'
date: 2026/06/14
description: 'Hari ini aku belajar mengenai bit manipulation menggunakan Python. soal yang aku selesaikan menggunakan bit manipulation adalah soal dengan ID 29 Divide two integers.'
categories: ['Python', 'DSA', 'Bit Manipulation']
---

## Background

Hari ini aku belajar mengenai bit manipulation menggunakan Python. soal yang aku selesaikan menggunakan bit manipulation adalah soal dengan ID 29 Divide two integers.

Soal ini mengharuskan kita untuk membagi dua bilangan bulat tanpa menggunakan operator pembagian, perkalian, dan modulus. Kita hanya diperbolehkan menggunakan operasi bitwise dan penjumlahan.

Oleh karena itu disini kita harus memanfaatkan operasi bitwise untuk menyelesaikan masalah ini. Kita akan menggunakan pendekatan shift dan subtract untuk mendapatkan hasil pembagian.

## Idea
untuk menyelesaikan masalah ini, kita akan melakukan pergeseran bit (bit shifting) untuk menemukan hasil pembagian.

Contoh membagi `10` dengan `3`:

Step 1: Ambil nilai awal.
  - `dividend = 10`
  - `divisor = 3`

Step 2: Geser `divisor` ke kiri sampai nilainya mendekati `dividend` tetapi tidak melebihi `dividend`.
  - Geser `divisor` ke kiri sampai nilainya mendekati `dividend` tetapi tidak melebihi `dividend`.
	  - `3 << 0 = 3`
	  - `3 << 1 = 6`
	  - `3 << 2 = 12` → terlalu besar karena melebihi 10.
  - Pakai nilai terbesar yang masih valid, yaitu `6`.
  - Kurangi `dividend` dengan nilai tersebut: `10 - 6 = 4`.
  - Tambahkan hasil pergeseran ke hasil akhir: `1 << 1 = 2`.
  - Ulangi proses yang sama untuk sisa `4`.
	  - `3 << 0 = 3`
	  - `3 << 1 = 6` → terlalu besar karena melebihi 4.
  - Pakai nilai `3`, lalu kurangi sisa: `4 - 3 = 1`.
  - Tambahkan lagi ke hasil akhir: `2 + (1 << 0) = 3`.
  - Karena sisa `1` lebih kecil dari `divisor`, proses berhenti.
  - Hasil akhirnya adalah `3`.

## Example Code

```python
class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        # handle overflow
        if dividend == -2**31 and divisor == -1:
            return 2**31 - 1

        # handle neg
        neg = (dividend < 0) != (divisor < 0)
        a, b = abs(dividend), abs(divisor)
        
        ans = 0
        while a >= b:
            curr = b
            count = 1

            while (curr << 1) <= a:
                curr = curr << 1
                count = count << 1

            a -= curr
            ans += count

        return -ans if neg else ans

```