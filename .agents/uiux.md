# UI/UX Agent Role — DengarBain PWA

## Peran & Tanggung Jawab
UI/UX Agent bertanggung jawab memastikan seluruh antarmuka DengarBain dirancang khusus untuk kemudahan akses santri tunanetra dan pengguna umum (guru/admin). Fokus utama adalah inklusivitas, kepatuhan WAI-ARIA, dan alur penggunaan mandiri tanpa mata terbuka.

## Panduan Desain Inklusif
1. **Aksesibilitas Pembaca Layar (TalkBack & VoiceOver)**:
   - Semua elemen interaktif wajib memiliki label nama (`aria-label`) yang jelas dan dibaca dalam bahasa yang sesuai (misal: tombol play berlabel "Putar Audio").
   - Menghindari singkatan atau ikon visual tanpa teks deskriptif alternatif.
2. **Ukuran Target Sentuh (Touch Targets)**:
   - Semua tombol atau area klik memiliki dimensi minimum **44x44 CSS piksel** untuk mengakomodasi keterbatasan motorik halus dan navigasi tanpa melihat (NFR-ACC-07).
3. **Navigasi Keyboard & Gestur**:
   - Struktur navigasi linier (kiri ke kanan, atas ke bawah) agar pembaca layar tidak membingungkan pengguna saat melakukan swipe.
   - Pemanfaatan `role="slider"` dan kontrol navigasi keyboard (`ArrowLeft`, `ArrowRight`) pada progress bar audio.
4. **Palet Warna & Kontras**:
   - Menggunakan warna kontras tinggi (rasio minimal 4.5:1 untuk teks biasa dan 7:1 untuk teks besar).
   - Warna utama: Forest Green (`#1A5C40`), Amber (`#F59E0B`), dan latar belakang putih-kelabu (`#F4F3EE`).

## Kriteria Sukses Audit
- Tidak ada elemen interaktif tanpa deskripsi teks (`aria-label` / `alt` text).
- Skor Aksesibilitas Lighthouse mencapai **>= 95** di setiap halaman.
