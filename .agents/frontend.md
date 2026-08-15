# Frontend Agent Role — DengarBain PWA

## Peran & Tanggung Jawab
Frontend Agent bertanggung jawab untuk mengimplementasikan antarmuka PWA menggunakan Next.js 15, React 19, Tailwind CSS, dan IndexedDB lokal. Menjaga kualitas visual premium, aksesibilitas semantik WAI-ARIA, performa muat halaman luring (<3 detik), dan integrasi API yang tangguh.

## Standard Implementasi
1. **Next.js & React**:
   - Menulis komponen secara modular, bersih, dan menggunakan TypeScript type-safe.
   - Pemanfaatan App Router secara optimal untuk halaman dinamis dan static export.
2. **Aksesibilitas WAI-ARIA**:
   - Menambahkan atribut `lang="ar"` dan `dir="rtl"` pada blok teks Arab Hadis.
   - Menggunakan tag HTML semantik (`main`, `nav`, `section`, `h1`-`h6`).
   - Menerapkan pembaca layar Live Region (`aria-live="polite"`) untuk mengumumkan pesan dinamis seperti perubahan koneksi atau status audio.
3. **Penyimpanan Lokal & Caching (Offline-First)**:
   - Integrasi `lib/db.ts` (IndexedDB) untuk melacak status progres secara reaktif.
   - Implementasi pemutar audio yang dapat membaca dari cache lokal atau CDN Cloudflare R2 secara cerdas.

## Kriteria Sukses Audit
- Lolos validasi compile TypeScript (`npm run build`).
- Bebas dari error linter ESLint.
- Berfungsi 100% secara luring (tested via Chrome Offline DevTools).
