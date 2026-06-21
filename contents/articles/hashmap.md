---
title: 'HashMap'
date: 2026/06/09
thumbnail: '/images/thumbnail/hashmap.webp'
description: 'Mengenal konsep HashMap, penggunaan dict di Python, serta penerapannya untuk menyelesaikan Two Sum dan Group Anagrams secara efisien dengan mudah.'
categories: ['Python', 'DSA', 'Two Sum', 'Group Anagrams']
---

# Quick Explanation
HashMap adalah sebuah struktur data yang berbasis Hash Table, yang menyimpan data dalam bentuk key-value. dalam pemrograman Java HashMap dan HashTable merupakan instance yang berbeda, jadi pastikan makek HashMap yang lebih modern. lalu implementasi di python HashMap, biasanya kita menggunakan Dictionary untuk membuat hashtable, dan nantinya kita bisa melakukan beberapa hal seperti berikut.

### 1. Two Sum
* **Konsep:** Daripada menggunakan *nested loop* untuk mencari pasangan angka yang jumlahnya sesuai `target`, kita bisa menyimpan angka yang sudah dilewati ke dalam HashMap (`Key: Angka, Value: Indeks`).
* **Logika:** Di setiap langkah, kita tinggal mengecek apakah `target - angka_sekarang` sudah ada di dalam HashMap dengan kecepatan $O(1)$.
```python
nums = [2, 11, 7, 15]
target = 9

def two_sum_hash_table(nums, target):
    mems = {}
    
    for i, x in enumerate(nums):
        finding = target - x

        if finding in mems:
            ix = mems[finding]
            return [ix, i]
        mems[x] = i


print("Hasil Indeks CP:", two_sum_hash_table(nums, target)) # Output: [0, 2]
```

### 2. Group Anagrams (Mengelompokkan Kata)
* **Konsep:** Mengelompokkan kata-kata yang huruf penyusunnya sama persis tetapi acak (misal: "eat", "tea", "ate").
* **Logika:** Kita mengurutkan huruf per kata (misal menjadi "aet"), lalu menjadikannya sebagai **Key** unik di HashMap. Teks aslinya kemudian dimasukkan sebagai list di bagian **Value**.
```python
from collections import defaultdict

def group_anagrams(strs):

    ht = defaultdict(list)

    for kata in strs:
        key = "".join(sorted(kata))

        ht[key].append(kata)
    
    return list(ht.values())


kata_kata = ["eat", "tea", "tan", "ate", "nat", "bat"]
hasil = group_anagrams(kata_kata)

print("Hasil Pengelompokkan Anagram:")
print(hasil)
```

---

# Istilah HashMap di Berbagai Bahasa Pemrograman

Meskipun konsepnya sama, setiap bahasa punya nama bawaan yang berbeda untuk HashMap:

* **Python:** Disebut **`dict` (Dictionary)**
* **JavaScript:** Disebut **`Object`** atau **`Map`**
* **C++:** Disebut **`unordered_map`**
* **Java / C#:** Disebut **`HashMap`**