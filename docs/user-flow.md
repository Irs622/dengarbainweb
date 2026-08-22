# User Flow: DengarBain (Tunanetra & Non-Visual Focus)

Dokumen ini memetakan bagaimana pengguna (dengan fokus pada pengguna tunanetra yang mengandalkan *Screen Reader*) berinteraksi dengan PWA DengarBain dari awal hingga akhir, menggunakan navigasi *swipe* dan gestur kursor virtual.

## 1. Fase Onboarding (Kunjungan Pertama)

**Skenario**: Pengguna membuka aplikasi untuk pertama kali melalui URL produksi atau browser.

1. **Memuat Halaman Utama**: 
   - Aplikasi dimuat secara instan (*Static Site Generation*). *Service Worker* mulai menyimpan *cache* rute di latar belakang.
   - *TalkBack* (Android) atau *VoiceOver* (iOS) mengumumkan: *"DengarBain, Belajar Hadis Arbain Tunanetra. Header."*
2. **Kutipan Niat & Pengenalan**: Pengguna mendengarkan kutipan hadis tentang kewajiban menuntut ilmu.
3. **Mulai Belajar**:
   - Pengguna mengusap ke kanan (*swipe right*).
   - *Screen Reader* mengumumkan: *"Tombol, Mulai Sekarang. Ketuk dua kali untuk masuk ke daftar hadis."*
   - Pengguna menekan *double-tap* untuk masuk ke halaman `/hadis`.

## 2. Fase Pemilihan Hadis

**Skenario**: Pengguna mencari Hadis ke-1 tentang Niat atau menjelajahi 42 Hadis Arbain.

1. **Pencarian Cepat**:
   - Pengguna dapat mengetik nomor hadis (misal: "1" atau "42"), judul, perawi, atau kata kunci terjemahan pada kotak pencarian.
2. **Filter Status Tab**:
   - Tab filter (*Semua, Hafal, Sedang, Belum*) memungkinkan pengguna menyaring hadis berdasarkan status progres hafalannya.
3. **Navigasi Kartu Hadis**:
   - *TalkBack* membacakan ringkasan kartu: *"Hadis 1, Niat dan Ikhlas. HR. Bukhari dan Muslim. Status: Belum. Tombol, ketuk dua kali untuk rincian."*
   - Pengguna menekan *double-tap* untuk membuka halaman detail.

## 3. Fase Menghafal dan Pemutaran Audio (Halaman Detail)

**Skenario**: Pengguna mendengarkan dan menghafal hadis.

1. **Kontrol Pemutaran Audio**:
   - Pengguna mengusap ke tombol kontrol audio.
   - *TalkBack*: *"Tombol, Putar Audio. Ketuk dua kali untuk memutar."*
2. **Pengumuman Langsung (*Live Regions*)**:
   - Saat tombol ditekan, terdengar pengumuman: *"Audio diputar"*, *"Audio dijeda"*, *"Maju 10 detik"*, atau *"Mundur 10 detik"*.
3. **Pengatur Kecepatan Putar**:
   - Pengguna dapat menyesuaikan kecepatan (0.75x untuk pelafalan lambat saat menghafal tajwid, atau 1.25x/1.5x untuk muroja'ah cepat).
4. **Membaca Matan Arab & Terjemahan**:
   - Teks Arab dibacakan dengan *engine* bahasa Arab karena tag `lang="ar"` dan `dir="rtl"`.
   - Terjemahan, urgensi hadis, sebab turun hadis, dan kosakata pilihan dibacakan dengan *engine* bahasa Indonesia (`lang="id"`).
5. **Mengubah Status Hafalan**:
   - Pengguna memilih status (*Hafal / Sedang / Belum*) dengan satu ketukan tombol. Status otomatis tersimpan ke IndexedDB dan LocalStorage.

## 4. Fase Pengelolaan Memori Luring (Offline Audio Bundle)

**Skenario**: Pengguna ingin menyimpan seluruh audio ke HP agar bisa digunakan di daerah tanpa sinyal.

1. **Masuk ke Kelola Penyimpanan (`/settings/storage`)**:
   - Pengguna membuka menu *Settings* > *Kelola Penyimpanan*.
2. **Unduh 1-Klik**:
   - Pengguna menekan tombol: **`Unduh Semua 42 Audio (Mode Luring)`**.
   - *Live Progress Bar* berjalan dan mengumumkan: *"Mengunduh Hadis 1 dari 42... (2%)"*.
3. **Selesai & Siap Luring**:
   - Pengumuman: *"Semua 42 audio hadis berhasil tersimpan luring."*
   - Pengguna kini bisa mengaktifkan mode pesawat (*Airplane Mode*) dan mendengarkan seluruh hadis secara penuh kapan saja tanpa internet.
