---
title: 'System Design 2: Internet Protocol (IP)'
description: ''
categories: ['System Design', 'Software Engineering']
date: 2026/09/13
---

# What is Internet Protocol (IP)?

Internet Protocol (IP) adalah protokol komunikasi yang digunakan untuk mengirimkan data melalui jaringan komputer. IP bertanggung jawab untuk mengatur alamat dan pengiriman paket data dari satu perangkat ke perangkat lain di jaringan.

Kenapa topik IP penting untuk dipelajari dalam konteks system design? 
Karena IP adalah dasar dari komunikasi jaringan, dan pemahaman yang baik tentang IP akan membantu dalam merancang sistem yang efisien dan dapat diandalkan.

# How Does IP Work?

IP bekerja dengan membagi data menjadi paket-paket kecil yang disebut "packets". Setiap paket memiliki header yang berisi informasi penting seperti alamat IP sumber dan tujuan, serta nomor urut paket. Paket-paket ini kemudian dikirim melalui jaringan dan dirakit kembali di sisi penerima.

# Versions of IP

Ada dua versi utama dari Internet Protocol: IPv4 dan IPv6. IPv4 adalah versi lama yang menggunakan alamat 32-bit, sementara IPv6 adalah versi baru yang menggunakan alamat 128-bit. IPv6 diciptakan untuk mengatasi keterbatasan IPv4 dalam hal jumlah alamat yang tersedia.

# Types of IP Addresses

Ada beberapa jenis alamat IP, termasuk:
- Public IP Address: Alamat IP yang dapat diakses dari internet dan digunakan untuk mengidentifikasi perangkat di jaringan publik.
- Private IP Address: Alamat IP yang digunakan dalam jaringan lokal dan tidak dapat diakses dari internet. Private IP address biasanya digunakan untuk perangkat di rumah atau kantor.
- Static IP Address: Alamat IP yang tetap dan tidak berubah. Static IP address biasanya digunakan untuk server atau perangkat yang memerlukan alamat tetap.
- Dynamic IP Address: Alamat IP yang berubah secara dinamis setiap kali perangkat terhubung ke jaringan. Dynamic IP address biasanya diberikan oleh penyedia layanan internet (ISP) melalui DHCP (Dynamic Host Configuration Protocol).

# Conclusion

Pemahaman tentang Internet Protocol (IP) sangat penting dalam konteks system design karena IP adalah dasar dari komunikasi jaringan. Dengan memahami cara kerja IP, versi yang berbeda, dan jenis alamat IP, kita dapat merancang sistem yang efisien, dapat diandalkan, dan aman.