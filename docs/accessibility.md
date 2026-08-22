# Accessibility Case Study: DengarBain

Aplikasi DengarBain dirancang bukan sebagai aplikasi web biasa, melainkan secara spesifik menargetkan pengguna tunanetra yang bergantung pada *Screen Reader* (seperti TalkBack di Android, VoiceOver di iOS/macOS, dan NVDA di Windows) sebagai sumber informasi utama mereka.

Dokumen ini menjelaskan tantangan aksesibilitas yang dihadapi, keputusan desain yang diambil, implementasi teknis, dan hasil yang dicapai.

## 1. Accessibility Challenge

Pengguna tunanetra menghadapi beberapa tantangan unik saat menggunakan aplikasi web untuk belajar dan menghafal hadis:
1. **Ketergantungan Audio**: Mereka tidak dapat mengandalkan *interface* visual untuk navigasi atau mendapatkan umpan balik status aplikasi (misalnya indikator audio sedang diunduh atau diputar).
2. **Bahasa Campuran (Arab & Indonesia)**: Teks hadis menggabungkan bahasa Arab (untuk matan hadis) dan bahasa Indonesia (untuk transliterasi dan terjemahan). Mesin *Screen Reader* sering kali salah melafalkan bahasa Arab jika dipaksa dibaca menggunakan *engine* suara bahasa Indonesia, atau sebaliknya.
3. **Navigasi Audio**: Kontrol audio visual tradisional (seperti *scrubbing bar* visual) sangat sulit digunakan oleh tunanetra karena membutuhkan presisi sentuhan visual.

## 2. Design Decision

Untuk mengatasi tantangan di atas, kami mengambil pendekatan **A11y-First (Accessibility-First)**:
- **Semantic HTML**: Struktur *markup* standar (`<header>`, `<main>`, `<nav>`, `<button>`, `<article>`) yang mewakili fungsinya secara eksplisit.
- **Language Detection by Element**: Penandaan bahasa pada level elemen HTML (`lang="ar"` dan `lang="id"`).
- **Responsive Audio Controls**: Tombol navigasi audio yang jelas (Putar/Jeda, Maju 10 detik, Mundur 10 detik, Ulang dari Awal, dan Pengatur Kecepatan Putar).
- **Live Regions**: Mekanisme untuk "berbicara" langsung kepada pengguna saat terjadi perubahan *state* penting tanpa mengganggu fokus pembacaan mereka.

## 3. Implementation

### 3.1. Penandaan Bahasa Aksara Arab
Agar *Screen Reader* membaca teks Arab dengan lafaz dan tajwid yang benar serta tidak dieja huruf-per-huruf oleh mesin bahasa Indonesia, kami menerapkan atribut `lang="ar"` dan `dir="rtl"`:

```html
<!-- Implementasi Matan Arab -->
<p lang="ar" dir="rtl" class="arabic-text">
  عَنْ أَمِيرِ الْمُؤْمِنِينَ أَبِي حَفْصٍ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللهُ عَنْهُ قَالَ...
</p>
```

### 3.2. WAI-ARIA Live Regions
Saat pengguna menjeda, memutar, atau mengubah kecepatan audio, kami menggunakan elemen `role="status"` dengan `aria-live="polite"` yang tersembunyi secara visual (`sr-only`):

```html
<div className="sr-only" role="status" aria-live="polite">
  {announcement}
</div>
```

### 3.3. Kontrol Navigasi yang *Accessible*
Semua elemen interaktif dibungkus dengan `<button>` asli yang menyertakan atribut `aria-label` deskriptif.

Untuk slider kemajuan audio, kami menyertakan atribut peran slider:
```html
<div
  role="slider"
  aria-label="Kemajuan Audio Hadis"
  aria-valuemin={0}
  aria-valuemax={100}
  aria-valuenow={progressPercent}
>
  ...
</div>
```

## 4. Result & Impact

Dengan arsitektur aksesibilitas di atas:
- **Perpindahan Aksen Suara yang Mulus**: *Screen Reader* otomatis berpindah ke aksen Arab saat membaca hadis dan kembali ke aksen Indonesia saat membaca terjemahan.
- **Navigasi Gestur Penuh**: Pengguna dapat menjelajahi seluruh daftar 42 hadis murni dengan gestur usap (*swipe-right* / *swipe-left*) tanpa harus meraba seluruh layar.
- **Kemandirian Belajar**: Tombol kontrol audio dan status hafalan yang terbaca jelas memungkinkan santri tunanetra belajar dan menghafal hadis secara mandiri.

## 5. Audit & Validation
Situs ini diuji dan divalidasi secara manual menggunakan **VoiceOver** (iOS/macOS), **TalkBack** (Android), dan **NVDA** (Windows).
