# DengarBain – PWA Hadis Arbain Tunanetra 📖🎧

**DengarBain** adalah Progressive Web App (PWA) yang dirancang khusus sebagai media pembelajaran inklusif luring (*Offline-First*) bagi santri tunanetra dalam menghafal dan mendengarkan 40 Hadis Arbain An-Nawawiyah. 

Aplikasi ini berfokus penuh pada **aksesibilitas pembaca layar** (*TalkBack* di Android & *VoiceOver* di iOS) tanpa hambatan autentikasi (*No-Login / Frictionless*) dan dapat diakses 100% tanpa jaringan internet.

---

## 🛠️ Tech Stack & Justifikasi Teknikal

| Lapisan | Teknologi | Justifikasi Teknikal |
| :--- | :--- | :--- |
| **Frontend Framework** | **Next.js 14+ (App Router)** | SSG (*Static Site Generation / Export*) untuk performa *load* tercepat dan ramah PWA luring. |
| **UI & Accessible Primitives** | **Radix UI** | Merender elemen dengan atribut WAI-ARIA murni yang 100% didukung TalkBack & VoiceOver. |
| **Styling Engine** | **Tailwind CSS** | Menyediakan *styling* responsif, utilitas *screen reader* (`sr-only`), dan skema *high-contrast*. |
| **PWA & Offline Core** | **Workbox** | Abstraksi Service Worker tangguh untuk *Precaching*, strategi *Cache-First* audio, dan *Background Sync*. |
| **Client-side DB (Primary)** | **Dexie.js (IndexedDB)** | *Database* lokal utama untuk menyimpan status hafalan 40 Hadis, rentang A-B Loop, dan Device UUID tanpa internet. |
| **Audio Engine** | **Howler.js / Web Audio API** | Mengelola *playback* audio presisi tinggi, kelancaran fitur *A-B Looping* (FR-AUD-02), dan update status persentase audio. |
| **Database Server & Sync** | **PostgreSQL + Prisma ORM** | Menampung sinkronisasi anonim data progres latar belakang (*Background Sync*) berbasis Device UUID. |
| **Audio Storage & CDN** | **Cloudflare R2 + Cloudflare CDN** | Storage audio Hadis dengan biaya *bandwidth* $0 (tanpa *egress*) dan pengiriman unduhan audio berkecepatan tinggi. |
| **Hosting & Deployment** | **Hostinger (VPS / Web Hosting)** | Server penyedia hosting aplikasi PWA dan API *service* dengan enkripsi penuh SSL/TLS 1.3. |

---

## ♿ Fitur Aksesibilitas Utama (TalkBack / VoiceOver Focused)

1. **Aksen & Aksara Arab (`lang="ar"`)**: Seluruh teks Arab Hadis dilengkapi atribut `lang="ar"` dan `dir="rtl"` agar mesin sintetis suara TalkBack/VoiceOver otomatis melafalkan tajwid dan aksen bahasa Arab secara presisi.
2. **Bahasa Indonesia (`lang="id"`)**: Diterapkan pada transliterasi dan terjemahan agar pembaca layar tidak salah melafalkan bahasa.
3. **Screen Reader Live Region (`aria-live="polite"`)**: Pengumuman otomatis melalui audio saat status koneksi berubah atau saat fitur A-B Loop diaktifkan.
4. **WAI-ARIA Slider Pemutar Audio**: Kontrol progress audio menyertakan `role="slider"`, `aria-valuenow`, `aria-valuemin`, dan `aria-valuemax` sehingga pengguna dapat mendengar persentase pemutaran audio.
5. **Kemudahan Navigasi Swipe**: Setiap kartu hadis dan navigasi utama dilengkapi `aria-label` deskriptif untuk pengalaman gestur swipe tanpa mata terbuka.

---

## 🚀 Panduan Pengembangan Lokal (Local Development)

### Prasyarat
- **Node.js**: v18.0.0 atau lebih baru
- **npm**: v9.0.0 atau lebih baru
- **Git**

### Langkah-Langkah Instalasi:

1. **Clone Repository**:
   ```bash
   git clone git@github.com:Irs622/dengarbainweb.git
   cd dengarbainweb
   ```

2. **Install Dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

4. **Build untuk Produksi**:
   ```bash
   npm run build
   ```

---

## 🌐 Panduan Deployment ke Hostinger

1. **Build Projek Statis**:
   Jalankan perintah build untuk mengompresi bundel PWA:
   ```bash
   npm run build
   ```
2. **Upload ke Hostinger File Manager / VPS**:
   - Jika menggunakan **Web Hosting / cPanel**: Upload seluruh isi folder hasil build (`out` atau `.next`) ke folder `public_html`.
   - Jika menggunakan **Hostinger VPS**: Hubungkan repositori Git ini ke VPS dan jalankan `npm run build && npm run start` menggunakan Process Manager seperti PM2 (`pm2 start npm --name "dengarbain" -- run start`).
3. **Konfigurasi SSL**:
   Pastikan enkripsi HTTPS / SSL TLS 1.3 aktif di Hostinger agar Service Worker PWA dapat berjalan dengan lancar.
4. **Penyimpanan Audio (Cloudflare R2)**:
   Unggah 40 file MP3 Hadis ke Cloudflare R2 bucket dan hubungkan domain CDN Cloudflare ke aplikasi untuk pengiriman audio secepat kilat.

---

## 📄 Lisensi
Internal — Pondok pesantren tunantera sam'an. All rights reserved.
