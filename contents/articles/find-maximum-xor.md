---
title: 'Find Maximum XOR of Two Numbers'
date: 2026/06/14
thumbnail: '/images/thumbnail/fmxw.webp'
description: 'Mencari nilai XOR maksimum dari dua angka menggunakan bit manipulation, prefix, dan HashMap untuk solusi Python yang lebih efisien praktis.'
categories: ['Python', 'DSA', 'Bit Manipulation', 'HashMap']
---

## Background

Hari ini aku belajar soal **Find Maximum XOR of Two Numbers** di LeetCode.

Pada soal ini, kita diberikan array `nums`, lalu diminta mencari nilai XOR terbesar dari dua angka yang ada di dalam array tersebut.

Contoh:

```python
nums = [3, 10, 5, 25, 2, 8]
```

Output:

```python
28
```

Karena pasangan terbaiknya adalah:

```txt
5 ^ 25 = 28
```

---

## Intuisi

Supaya lebih mudah memahami XOR, kita ubah dulu angka-angkanya ke bentuk binary.

Karena angka terbesar adalah `25`, dan `25` butuh 5 bit, maka semua angka kita tulis dalam bentuk 5 bit.

| Desimal | Binary |
| ------- | ------ |
| 3       | 00011  |
| 10      | 01010  |
| 5       | 00101  |
| 25      | 11001  |
| 2       | 00010  |
| 8       | 01000  |

Ingat sifat XOR:

```txt
0 ^ 0 = 0
1 ^ 1 = 0
0 ^ 1 = 1
1 ^ 0 = 1
```

Jadi, hasil XOR akan bernilai `1` kalau dua bit berbeda.

Contohnya:

```txt
 5 = 00101
25 = 11001
-----------
     11100 = 28
```

Hasilnya adalah `11100`, yaitu `28`.

Kenapa hasil ini besar?

Karena bit-bit sebelah kiri punya nilai yang lebih besar. Jadi, kalau dua angka punya banyak perbedaan di bit sebelah kiri, hasil XOR-nya juga akan semakin besar.

Dari sini, kita bisa ambil ide penting:

> Untuk mencari XOR maksimum, kita ingin membangun jawaban dari bit paling kiri ke kanan, dan sebisa mungkin membuat setiap bit menjadi `1`.

---

## Ide Utama

Daripada mengecek semua pasangan satu per satu dengan brute force `O(n²)`, kita bisa membangun jawaban secara greedy dari bit paling kiri ke kanan.

Di setiap posisi bit, kita bertanya:

> “Apakah bit ini bisa dibuat menjadi `1`?”

Kalau bisa, kita ambil.
Kalau tidak bisa, bit tersebut tetap `0`.

---

## Kenapa Pakai Prefix?

Kita tidak perlu langsung membandingkan angka penuh.

Di setiap langkah, kita cukup melihat **prefix**, yaitu bagian bit dari kiri sampai posisi bit yang sedang diproses.

Contoh binary 5-bit:

```txt
 3 = 00011
10 = 01010
 5 = 00101
25 = 11001
 2 = 00010
 8 = 01000
```

Misalnya kita sedang memproses 3 bit pertama, maka prefix-nya adalah:

```txt
3  -> 000
10 -> 010
5  -> 001
25 -> 110
2  -> 000
8  -> 010
```

Kenapa cukup prefix?

Karena kita sedang membangun jawaban dari kiri ke kanan.
Bit-bit di kanan belum penting untuk keputusan saat ini.

---

## Trik XOR

Misalnya kita ingin tahu apakah suatu `candidate` bisa dibentuk dari dua prefix.

Kalau:

```txt
a ^ b = candidate
```

Maka:

```txt
b = a ^ candidate
```

Artinya, untuk setiap prefix `a`, kita cukup mencari apakah prefix pasangannya, yaitu `a ^ candidate`, ada di kumpulan prefix.

Kalau ada, berarti `candidate` bisa dicapai.

---

## Pola Algoritma

Di setiap posisi bit:

1. Geser jawaban sementara ke kiri.
2. Coba isi bit baru dengan `1`.
3. Ambil semua prefix angka sampai posisi bit tersebut.
4. Cek apakah ada dua prefix yang XOR-nya sama dengan `candidate`.
5. Kalau ada, update jawaban menjadi `candidate`.

---

## Code

```python
class Solution:
    def findMaximumXOR(self, nums: list[int]) -> int:
        max_bit = max(nums).bit_length()
        ans = 0

        for i in range(max_bit - 1, -1, -1):
            # Geser jawaban untuk memberi ruang ke bit baru
            ans <<= 1

            # Coba isi bit baru dengan 1
            candidate = ans | 1

            # Ambil prefix dari setiap angka
            prefixes = {num >> i for num in nums}

            # Cek apakah ada dua prefix yang bisa membentuk candidate
            for prefix in prefixes:
                partner = prefix ^ candidate

                if partner in prefixes:
                    ans = candidate
                    break

        return ans
```

---

## Penjelasan Code

```python
max_bit = max(nums).bit_length()
```

Digunakan untuk mencari jumlah bit dari angka terbesar.

Contoh:

```txt
25 = 11001
```

Karena `25` butuh 5 bit, maka kita akan memproses dari bit ke-5 sampai bit ke-1.

---

```python
ans <<= 1
```

Geser jawaban sementara ke kiri untuk memberi ruang pada bit baru.

Contoh:

```txt
11 -> 110
```

---

```python
candidate = ans | 1
```

Kita mencoba membuat bit baru menjadi `1`.

Contoh:

```txt
110 | 1 = 111
```

---

```python
prefixes = {num >> i for num in nums}
```

Digunakan untuk mengambil prefix dari setiap angka.

Semakin kecil nilai `i`, semakin panjang prefix yang kita ambil.

---

```python
partner = prefix ^ candidate
```

Untuk setiap prefix, kita cari prefix pasangan yang dibutuhkan agar bisa membentuk `candidate`.

Kalau `partner` ada di dalam `prefixes`, berarti candidate tersebut valid.

---

## Contoh Hasil

Untuk:

```python
nums = [3, 10, 5, 25, 2, 8]
```

Pasangan terbaik adalah:

```txt
5 ^ 25 = 28
```

Karena:

```txt
 5 = 00101
25 = 11001
-----------
     11100 = 28
```

Jadi hasil akhirnya:

```python
28
```

---

## Complexity

Misalkan:

```txt
n = jumlah angka di nums
B = jumlah bit dari angka terbesar
```

Maka kompleksitasnya adalah:

```txt
Time  : O(B * n)
Space : O(n)
```

Untuk constraint LeetCode, jumlah bit biasanya maksimal sekitar 31, sehingga secara praktis bisa dianggap:

```txt
Time : O(n)
```

---

## Kesimpulan

Soal ini bisa diselesaikan tanpa mengecek semua pasangan.

Kuncinya adalah:

* membangun jawaban dari bit paling kiri,
* mencoba membuat setiap bit menjadi `1`,
* menggunakan prefix untuk mengecek kemungkinan XOR,
* dan memakai HashSet/HashMap agar pengecekan partner bisa dilakukan dengan cepat.

Dengan begitu, solusi yang awalnya bisa `O(n²)` dapat dioptimalkan menjadi `O(B * n)`.
