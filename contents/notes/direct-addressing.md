---
title: 'Direct Addressing'
description: 'notes ini merupakan catatan untuk memahami Direct Addressing'
categories: ['DSA']
date: 2026/06/21
---

# Apa itu Direct Addressing?

Direct Addressing merupakan suatu metode conventional yang digunakan untuk mengakses suatu nilai dalam suatu array. Metode ini digunakan ketika kita ingin mengakses nilai dengan index yang sudah diketahui.

Metode ini sangan powerfull ketika berhadapan dengan problem yang sudah kita ketahui panjangnya, seperti array yang sudah kita ketahui panjangnya. Contohnya:

```python
arr = [1, 2, 3, 4, 5]
print(arr[2])
```

# Example Problem at Leetcode

## Problem
[448. Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array?envType=problem-list-v2&envId=hash-table)

pada soal ini kita diminta untuk mencari semua angka yang hilang di dalam array.

Contoh:
```
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
```

## Solusi Pertama menggunakan HashSet

code:
```python
class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        seen = set(nums)
        return [i for i in range(1, len(nums) + 1) if i not in seen]
```

result:
![alt text](/images/find-all-numbers-disappeared-in-an-array-1.png)

## Solusi Kedua menggunakan List

code:
```python
class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        n = len(nums)
        present = [False] * (n + 1)

        for num in nums:
            present[num] = True

        return [i for i in range(1, n + 1) if not present[i]]
```

result:
![alt text](/images/find-all-numbers-disappeared-in-an-array-2.png)

# Kesimpulan

Kedua solusi tersebut sama-sama O(n) time dan O(n) space secara big-O, tapi solusi kedua (direct addressing) secara praktik lebih cepat. Ini sebenarnya bukan soal big-O, tapi soal **constant factor** — beberapa alasannya:

1. **Hashing overhead** — HashSet butuh hitung hash dulu, cari bucket, terus cek collision kalau ada beberapa value nyangkut di bucket yang sama. Direct addressing (list) cuma akses memori langsung pakai index, gak ada proses tambahan itu.

2. **Memory locality** — List nyimpen data berurutan (contiguous) di memori, jadi CPU bisa baca data yang berdekatan dengan efisien (cache-friendly). HashSet nyimpen data tersebar (gara-gara distribusi hash), jadi lebih sering cache miss.

3. **Struktur data lebih ringan** — HashSet punya overhead buat resize table dan handle collision. List cuma blok memori polos tanpa logika tambahan.

## Kapan bisa pakai Direct Addressing?

Trik ini cuma bisa dipakai kalau range nilai-nya **diketahui dan rapat (dense)** — di soal ini, nilai `nums[i]` selalu di range `[1, n]`, jadi index array bisa langsung dipakai sebagai "hash" tanpa perlu hash function beneran.

Kalau range nilainya gak diketahui atau terlalu besar/jarang (sparse), direct addressing jadi boros memori atau gak relevan lagi — di situasi itu, HashSet/HashMap lebih masuk akal karena cuma alokasi memori sesuai jumlah elemen yang benar-benar ada.