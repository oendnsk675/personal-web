---
title: 'System Design 3: OSI Model'
description: ''
categories: ['System Design', 'Software Engineering']
date: 2026/09/13
---

# What is OSI Model?

OSI Model (Open Systems Interconnection Model) adalah kerangka kerja konseptual yang digunakan untuk memahami dan merancang sistem komunikasi jaringan. OSI Model membagi proses komunikasi jaringan menjadi tujuh lapisan, masing-masing dengan fungsi spesifik.

# Why does the OSI model matter?

OSI Model penting karena memberikan panduan untuk merancang dan memahami sistem komunikasi jaringan. Dengan memahami setiap lapisan dalam OSI Model, kita dapat mengidentifikasi masalah, mengoptimalkan kinerja, dan memastikan interoperabilitas antara berbagai perangkat dan protokol jaringan.

# Layers of the OSI Model

![7 layers](/images/contents/notes/osi-model.png)

OSI Model terdiri dari tujuh lapisan, yaitu:

1. Physical Layer: Lapisan ini bertanggung jawab untuk mengirimkan data dalam bentuk sinyal fisik melalui media transmisi, seperti kabel atau gelombang radio. Contoh perangkat di lapisan ini termasuk hub, repeater, dan kabel jaringan.
pada layer ini kita bisa identifikasi masalah seperti kabel yang rusak, interferensi sinyal, atau masalah pada perangkat keras jaringan. Dengan memahami Physical Layer, kita dapat memastikan bahwa data dapat dikirimkan dengan benar melalui media transmisi yang digunakan.
2. Data Link Layer: Lapisan ini bertanggung jawab untuk mengatur komunikasi antara perangkat di jaringan lokal. Data Link Layer menangani pengalamatan fisik (MAC address), deteksi kesalahan, dan pengendalian aliran data. Contoh perangkat di lapisan ini termasuk switch dan bridge.
3. Network Layer: Lapisan ini bertanggung jawab untuk mengatur pengiriman paket data dari satu perangkat ke perangkat lain di jaringan. Network Layer menangani pengalamatan logis (IP address) dan routing paket data. Contoh perangkat di lapisan ini termasuk router.
4. Transport Layer: Lapisan ini bertanggung jawab untuk memastikan pengiriman data yang andal antara aplikasi di perangkat yang berbeda. Transport Layer menangani segmentasi data, pengendalian aliran, dan deteksi kesalahan. Contoh protokol di lapisan ini termasuk TCP (Transmission Control Protocol) dan UDP (User Datagram Protocol).
5. Session Layer: Lapisan ini bertanggung jawab untuk mengatur sesi komunikasi antara aplikasi di perangkat yang berbeda. Session Layer menangani pembentukan, pemeliharaan, dan penghentian sesi komunikasi. Contoh protokol di lapisan ini termasuk NetBIOS dan RPC (Remote Procedure Call).
6. Presentation Layer: Lapisan ini bertanggung jawab untuk mengatur format data yang dikirim dan diterima oleh aplikasi. Presentation Layer menangani enkripsi, kompresi, dan konversi format data. Contoh protokol di lapisan ini termasuk SSL/TLS dan JPEG.
7. Application Layer: Lapisan ini bertanggung jawab untuk menyediakan layanan jaringan langsung kepada aplikasi pengguna. Application Layer menangani protokol yang digunakan oleh aplikasi untuk berkomunikasi melalui jaringan. Contoh protokol di lapisan ini termasuk HTTP, FTP, dan SMTP.