# Accessibility Case Study: DengarBain

Aplikasi DengarBain dirancang bukan sebagai aplikasi web biasa, melainkan secara spesifik menargetkan pengguna tunanetra yang bergantung pada *Screen Reader* (seperti TalkBack di Android dan VoiceOver di iOS) sebagai sumber informasi utama mereka.

Dokumen ini menjelaskan tantangan aksesibilitas yang kami hadapi, keputusan desain yang kami ambil, implementasi teknis, dan hasil yang dicapai.

## 1. Accessibility Challenge

Pengguna tunanetra menghadapi beberapa tantangan unik saat menggunakan aplikasi web untuk belajar dan menghafal hadis:
1. **Ketergantungan Audio**: Mereka tidak dapat mengandalkan *interface* visual untuk navigasi atau mendapatkan umpan balik status aplikasi (misalnya indikator bahwa audio sedang diunduh).
2. **Bahasa Campuran (Arab & Indonesia)**: Teks hadis menggabungkan bahasa Arab (untuk matan hadis) dan bahasa Indonesia (untuk transliterasi dan terjemahan). Mesin *Screen Reader* sering kali salah melafalkan bahasa Arab jika dipaksa dibaca menggunakan *engine* suara bahasa Indonesia, atau sebaliknya.
3. **Navigasi Audio**: Kontrol audio tradisional (seperti *scrubbing bar* visual) sangat sulit digunakan oleh tunanetra karena membutuhkan presisi visual.

## 2. Design Decision

Untuk mengatasi tantangan di atas, kami mengambil pendekatan **A11y-First (Accessibility-First)**:
- **Semantic HTML**: Struktur *markup* yang benar-benar mewakili fungsinya.
- **Language Detection by Element**: Penandaan bahasa pada level elemen HTML, bukan hanya di level *document root*.
- **A-B Looping**: Metode menghafal berulang yang diaktifkan dengan tombol sederhana tanpa harus menggeser progres audio.
- **Live Regions**: Mekanisme untuk "berbicara" langsung kepada pengguna saat terjadi perubahan *state* penting tanpa mengganggu fokus pembacaan mereka.

## 3. Implementation

### 3.1. Penandaan Bahasa Aksara Arab
Agar *Screen Reader* membaca teks Arab dengan lafaz yang benar dan tidak dieja huruf-per-huruf oleh mesin bahasa Indonesia, kami menerapkan atribut `lang="ar"` dan `dir="rtl"`.

```html
<!-- Contoh Implementasi -->
<p lang="ar" dir="rtl" class="text-2xl font-arabic">
  عَنْ أَمِيرِ الْمُؤْمِنِينَ أَبِي حَفْصٍ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللهُ عَنْهُ قَالَ...
</p>
```

### 3.2. WAI-ARIA Live Regions
Saat pengguna mengaktifkan mode A-B Loop, kami menggunakan elemen aria-live untuk memberikan *feedback* verbal.

```html
<div aria-live="polite" class="sr-only">
  {isLooping ? 'Mode pengulangan audio diaktifkan' : 'Mode pengulangan dinonaktifkan'}
</div>
```

### 3.3. Kontrol Navigasi yang *Accessible*
Semua elemen interaktif dibungkus dengan `<button>` alih-alih `<div>` dengan event `onClick`. Jika harus menggunakan elemen kustom, kami menyertakan atribut `role` dan `tabIndex="0"`.

Untuk slider audio (meskipun ada, namun jarang digunakan langsung berkat A-B Loop), kami menggunakan peran *slider*:
```html
<input 
  type="range"
  role="slider"
  aria-label="Progress Audio"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow={progress}
/>
```

## 4. Result & Impact

Dengan arsitektur aksesibilitas di atas, hasil yang dicapai adalah:
- **Perpindahan Aksen Suara yang Mulus**: Pengguna melaporkan bahwa *Screen Reader* otomatis berpindah ke aksen Arab saat membaca hadis dan kembali ke aksen Indonesia saat membaca terjemahan.
- **Navigasi Gestur Penuh**: Pengguna dapat menjelajahi seluruh daftar 40 hadis murni dengan gestur *swipe-right* / *swipe-left* (di iOS/Android) tanpa harus meraba seluruh layar.
- **Kemandirian Menghafal**: Adanya tombol A-B Loop yang terbaca jelas oleh *Screen Reader* memungkinkan santri tunanetra untuk memutar ulang segmen hadis berkali-kali tanpa harus mencari secara visual bar kemajuan (*progress bar*) audio.

## 5. Audit & Validation
Situs ini secara konsisten lulus *Lighthouse Accessibility Audit* dengan skor **100/100**, dan divalidasi secara manual menggunakan **VoiceOver** (iOS) dan **TalkBack** (Android).
