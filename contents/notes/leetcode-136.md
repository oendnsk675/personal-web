---
title: 'Leetcode 136: Single Number'
description: 'notes ini merupakan catatan untuk memahami bit manipulation'
categories: ['Python', 'DSA', 'Bit Manipulation']
date: 2026/08/29
---

# Background

Hari ini aku belajar mengenai bit manipulation menggunakan Python. soal yang aku selesaikan menggunakan bit manipulation adalah soal dengan ID 136 Single Number.

Soal ini mengharuskan kita untuk menemukan angka tunggal dalam array di mana setiap elemen muncul dua kali kecuali satu elemen.

Oleh karena itu disini kita harus memanfaatkan operasi bitwise untuk menyelesaikan masalah ini. Kita akan menggunakan pendekatan XOR untuk mendapatkan hasilnya.

# Idea
untuk menyelesaikan masalah ini, kita akan menggunakan operasi XOR (exclusive OR) pada semua elemen dalam array. Operasi XOR memiliki sifat bahwa `a ^ a = 0` dan `a ^ 0 = a`. Oleh karena itu, ketika kita melakukan XOR pada semua elemen, elemen-elemen yang muncul dua kali akan saling menghapus, dan hanya elemen tunggal yang akan tersisa.

Contoh:
Array: [2, 3, 2, 4, 4]
Proses:
- 2 ^ 3 = 1
- 1 ^ 2 = 3
- 3 ^ 4 = 7
- 7 ^ 4 = 3

atau kalau di python kita bisa melakukan `result ^= num` dimana ini setara dengan `result = result ^ num1 ^ num2 ^ ...`. 

Hasil akhir: 3 (elemen tunggal)

# Example Code

```python
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        result = 0
        for num in nums:
            result ^= num
        return result
```