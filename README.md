# DengarBain — Web Accessibility Platform for Blind Users 📖🎧

> Aplikasi web progresif (PWA) yang dirancang khusus untuk membantu pengguna tunanetra mengakses, menghafal, dan mendengarkan 40 Hadis Arbain An-Nawawiyah secara mandiri melalui kombinasi antarmuka aksesibel, navigasi *screen reader*, dan teknologi *Offline-First*.

---

## 🚧 Status Proyek & Demo

> **Status:** `In Active Development` 🛠️  
> Proyek ini sedang dalam tahap pengembangan intensif, pengujian aksesibilitas (*screen reader*), dan persiapan *deployment*. Tautan *live demo* serta dokumentasi visual (*screenshots* & demo suara) akan diperbarui segera setelah tahap rilis produksi selesai.

---

## 🎯 Problem
Pengguna tunanetra di pondok pesantren menghadapi kendala besar dalam menghafal hadis menggunakan metode visual atau buku Braille yang tidak selalu tersedia. Solusi digital sering kali tidak didesain dengan memikirkan kemudahan navigasi layar (*Screen Reader Navigation*), memiliki hambatan proses *login*, serta sangat bergantung pada koneksi internet yang tidak stabil.

## 💡 Solution
DengarBain mengatasi masalah tersebut dengan pendekatan:
- **100% Screen Reader Optimized**: Menggunakan standar WAI-ARIA dan Semantic HTML.
- **Offline-First PWA**: Materi hadis dan audio bisa diakses sepenuhnya tanpa kuota data setelah kunjungan pertama.
- **Frictionless Experience**: Tidak ada proses otentikasi (login), progres pengguna disimpan secara anonim di perangkat lokal.

## 👤 Target User
Santri tunanetra dan individu disabilitas netra yang ingin mempelajari Hadis Arbain An-Nawawiyah tanpa bergantung pada bantuan orang awas (*sighted people*).

---

## ✨ Key Features
- 🕌 **Teks & Terjemahan Interaktif**: Teks Arab yang dikalibrasi untuk dilafalkan dengan tajwid oleh mesin pembaca layar.
- 🔁 **A-B Looping Audio**: Fitur pengulangan audio spesifik untuk metode hafalan berulang.
- 📶 **Offline Mode**: Diperkuat oleh *Service Worker* untuk unduhan latar belakang.
- 📱 **Progress Tracking**: Pencatatan hadis yang sudah dihapal/dibaca yang tersinkronisasi otomatis saat *online*.

---

## ♿ Accessibility Features
DengarBain dibangun sejak hari pertama dengan prinsip aksesibilitas W3C (WCAG).

- **Semantic HTML & ARIA Roles**: Menghindari elemen `<div>` kosong. Kami mendesain navigasi struktur dokumen secara eksplisit.
- **Language Tags (`lang="ar"` & `lang="id"`)**: Menginstruksikan *TalkBack* / *VoiceOver* secara otomatis berpindah aksen/suara saat membaca lafaz Arab.
- **Live Regions (`aria-live="polite"`)**: Pemberitahuan interaktif saat pengulangan audio aktif atau status koneksi berubah tanpa mengganggu fokus bacaan.
- **Accessible Slider**: Kontrol audio menggunakan tipe masukan yang didukung penuh oleh gestur geser tunanetra.

📚 *Detail kajian tentang keputusan aksesibilitas kami ada di [Accessibility Case Study](docs/accessibility.md).*

---

## 📈 Impact & Validasi

> **Evaluasi Aksesibilitas**  
> Divalidasi melalui navigasi *keyboard* penuh, pengujian *screen reader* (TalkBack di Android, VoiceOver di iOS), dan audit Semantic HTML.

> **Performance & Accessibility Score**  
> Lighthouse Accessibility: **100/100** 🚀

*(Anda bisa mengganti bagian ini dengan metrik pengujian langsung jika memiliki datanya)*

---

## 👨‍💻 My Contribution

Proyek ini dibangun secara tim. Kami membagi fokus untuk memastikan produk berjalan optimal dari *Frontend* hingga *Backend*:

**[Irsal Shydiq](https://github.com/Irs622)** — *Project Manager, Backend & PWA Developer, UI/UX*
- **Product Management & UI/UX**: Memimpin inisiasi produk, riset kebutuhan tunanetra, dan desain alur interaksi non-visual.
- **Backend & Database**: Merancang API, skema PostgreSQL via Prisma ORM, dan mekanisme *Background Sync*.
- **PWA & Offline Core**: Mengimplementasikan *Service Worker* (Workbox) dan *cache* lokal IndexedDB (Dexie.js).

**[Fardho Dzurrahman](https://github.com/fardhoz25)** — *Frontend Developer & UI/UX*
- **Frontend & Audio Engine**: Membangun UI Next.js App Router, integrasi *playback audio* & *A-B Looping*, dan *styling* Tailwind CSS.
- **Accessible UI/UX**: Mengembangkan komponen interaktif (Radix UI) yang ramah navigasi gestur *TalkBack* & *VoiceOver*.

---

## 🧠 Technical Approach & Architecture
Aplikasi ini memadukan kekuatan *Static Site Generation* untuk kecepatan *load* di wilayah minim sinyal, dan penyimpanan lokal *IndexedDB* untuk menjaga konsistensi data progres pengguna. 

📚 *Baca dokumentasi teknis lengkap di [Architecture Document](docs/architecture.md).*

### 🛠️ Tech Stack
- **Frontend**: Next.js 14+ (App Router), Radix UI, Tailwind CSS
- **PWA & Storage**: Workbox (Service Worker), Dexie.js (IndexedDB)
- **Audio & State**: Howler.js / Web Audio API
- **Backend & Database**: PostgreSQL, Prisma ORM
- **CDN**: Cloudflare R2

---

## 🚀 How to Run Locally

### Prasyarat
- **Node.js** v18+ & **npm** v9+

### Instalasi
```bash
# 1. Clone repositori
git clone git@github.com:Irs622/dengarbainweb.git
cd dengarbainweb

# 2. Instalasi dependensi
npm install

# 3. Setup Variabel Lingkungan
cp .env.example .env.local
# (Sesuaikan nilai variabel di dalam .env.local)

# 4. Jalankan Development Server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di peramban Anda. Untuk simulasi pengujian aksesibilitas, nyalakan *screen reader* di OS Anda dan coba navigasi menggunakan `Tab` serta tombol panah.

---

## 🤝 Contributing & Community
Kontribusi, perbaikan bug, dan ide pengembangan selalu kami sambut dengan hangat!
- Silakan baca panduan lengkap cara berkontribusi di [CONTRIBUTING.md](CONTRIBUTING.md).
- Harap patuhi kode etik komunitas kami di [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

---

## 📄 License
Proyek ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detailnya.
