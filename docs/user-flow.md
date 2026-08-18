# User Flow: DengarBain (Tunanetra Focus)

Dokumen ini memetakan bagaimana pengguna (dengan fokus pada pengguna tunanetra yang mengandalkan *Screen Reader*) berinteraksi dengan PWA DengarBain dari awal hingga akhir, menggunakan navigasi *swipe* dan gestur kursor virtual.

## 1. Fase Onboarding (Kunjungan Pertama)

**Skenario**: Pengguna membuka aplikasi untuk pertama kali.

1. **Memuat Halaman Utama**: 
   - Aplikasi dimuat. *Service Worker* mulai menyimpan *cache* di latar belakang.
   - *TalkBack* (Android) atau *VoiceOver* (iOS) mengumumkan: *"DengarBain, Aplikasi Hadis Arbain. Header."*
2. **Fokus Awal**: Fokus otomatis diarahkan ke teks perkenalan aplikasi (skip navigasi panjang jika tidak diperlukan).
3. **Instalasi PWA**:
   - Pengguna mengusap ke kanan (*swipe right*).
   - *Screen Reader* mengumumkan: *"Tombol, Instal Aplikasi. Tambahkan ke layar beranda untuk akses offline."*
   - Pengguna menekan *double-tap* untuk memicu *prompt* instalasi.

## 2. Fase Pemilihan Hadis

**Skenario**: Pengguna mencari Hadis ke-1 tentang Niat.

1. **Masuk ke Daftar Hadis**:
   - Pengguna melakukan usapan (*swipe*) untuk menjelajahi daftar.
   - Karena kami menggunakan `aria-label` deskriptif di komponen kartu, *TalkBack* tidak mengeja teks mentah, melainkan membacakan ringkasan: *"Hadis Pertama. Innamal A'malu Binniyat. Segala amal bergantung pada niat. Tombol, ketuk dua kali untuk masuk ke rincian."*
2. **Navigasi Presisi**: Pengguna menekan *double-tap* untuk masuk ke halaman detail.

## 3. Fase Menghafal dan Pemutaran Audio (Halaman Detail)

**Skenario**: Pengguna mendengarkan dan menghafal hadis.

1. **Auto-Fokus Pemutar Audio**:
   - Setelah halaman *detail* dimuat, fokus *Screen Reader* langsung diposisikan ke bagian kontrol audio untuk meminimalkan waktu *swipe* dari *header* atas.
2. **Kontrol Pemutaran**:
   - Pengguna mengusap ke kanan.
   - *TalkBack* membaca: *"Tombol Putar Audio Hadis Pertama."* -> Pengguna *double-tap* untuk mulai memutar.
3. **Mengaktifkan A-B Loop**:
   - Pengguna terus mengusap ke kanan hingga menemukan kontrol *looping*.
   - *TalkBack*: *"Tombol, Mode Hafalan (A-B Loop), Tidak Aktif."*
   - Pengguna *double tap*.
   - *Live Region Feedback* (*Polite*): *"Mode pengulangan audio diaktifkan."* (Notifikasi ini dibacakan tanpa memindahkan posisi kursor pengguna saat ini).
4. **Membaca Matan Arab**:
   - Saat audio berputar, pengguna usap ke bawah untuk membaca baris teks.
   - Teks Arab dibacakan dengan *engine* bahasa Arab karena tag `lang="ar"`, sehingga mesin mengucapkan tajwid dengan jelas.
   - Teks Terjemahan dibacakan dengan *engine* bahasa Indonesia karena tag `lang="id"`.

## 4. Fase Offline (Kunjungan Berikutnya)

**Skenario**: Pengguna tidak memiliki akses internet dan membuka aplikasi dari layar beranda (Home Screen).

1. **Memuat Aplikasi**: 
   - PWA terbuka seketika menggunakan berkas lokal (*Workbox Cache*).
2. **Membuka Hadis yang Pernah Didengar**:
   - Karena file MP3 sudah di-*cache* (Strategi *Cache-First*), saat pengguna menekan *Play*, audio segera diputar tanpa *delay* bufer.
3. **Penyimpanan Progres**:
   - Pengguna menandai hadis sebagai "Sudah Dihapal" (Double tap pada *Checkbox*).
   - Status tersimpan ke *IndexedDB*. Saat nanti ponsel tersambung ke WiFi, proses sinkronisasi akan berjalan mulus di balik layar menggunakan *Background Sync*.
