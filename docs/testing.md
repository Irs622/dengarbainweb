# Testing Methodology: DengarBain

Aplikasi DengarBain diuji tidak hanya dari fungsionalitas fiturnya, tetapi juga diuji secara ketat berdasarkan metrik aksesibilitas (A11y), performa, dan kemampuannya bekerja di lingkungan *Offline-First*.

Dokumen ini menjelaskan strategi pengujian (*Testing Strategy*) yang diterapkan dalam pengembangan dan validasi rilis produksi.

## 1. Accessibility Testing (A11y)

Karena target utama kami adalah individu tunanetra dan santri berkebutuhan khusus, uji aksesibilitas adalah proses *quality assurance* terpenting di proyek ini.

### 1.1. Automated Auditing
Setiap rilis fitur diuji menggunakan **Lighthouse Accessibility Audit** (berjalan via Chrome DevTools). 
- **Target Skor**: 100/100
- **Fokus Metrik**: Kepatuhan atribut ARIA, kontras warna (*High Contrast Theme* hijau `#1A5C40` dan aksen `#C8F1DF`), ketiadaan tag berulang, dan struktur heading semantik (`<h1>` s.d. `<h3>`).

### 1.2. Manual Screen Reader Testing
Pengujian manual menggunakan pembaca layar dilakukan secara berkala pada berbagai platform:
- **Android**: *TalkBack* dengan gestur usap (*swipe gestures*).
- **iOS / macOS**: *VoiceOver* menggunakan navigasi gestur jari dan *rotor*.
- **Desktop (Windows)**: NVDA untuk memastikan kompatibilitas aplikasi web *desktop*.

**Kasus Uji (*Test Cases*):**
- Memastikan perpindahan aksen (dari Indonesia ke Arab) berjalan mulus di setiap matan hadis berkat atribut `lang="ar"` dan `dir="rtl"`.
- Memastikan notifikasi perubahan status audio (Putar, Jeda, Lompat Waktu, Kecepatan) terdengar melalui live region tanpa memindahkan kursor (menggunakan elemen `role="status"` dan `aria-live="polite"`).
- Memastikan navigasi kembali (*Back button*) terbaca jelas dengan label *"Kembali ke Halaman Sebelumnya"*.

### 1.3. Keyboard Navigation Testing
Setiap alur kritis harus dapat diselesaikan tanpa *mouse*:
1. Menekan `Tab` dan `Shift+Tab` untuk berpindah antarelemen interaktif.
2. Menggunakan `Space` / `Enter` untuk memicu tombol atau membuka hadis.
3. Menggunakan tombol panah untuk navigasi.

## 2. Offline & PWA Testing

Untuk memastikan santri tetap bisa mengakses 42 hadis saat aplikasi tidak terhubung internet:

1. **Simulasi Offline PWA**: Mematikan koneksi jaringan (mode *Offline* di Chrome DevTools atau Mode Pesawat di HP) dan me-*refresh* halaman untuk memverifikasi seluruh 57 halaman termuat dari *Service Worker* (`dengarbain-cache-v2`).
2. **Bulk Audio Caching Test**: Menjalankan fitur **"Unduh Semua 42 Audio (Mode Luring)"** di `/settings/storage`, lalu mematikan jaringan internet dan memverifikasi bahwa seluruh 42 audio hadis dapat diputar lancar dari *Cache Storage*.
3. **Dual Storage Persistence Test**: Mengubah status hafalan (*Belum* -> *Sedang* -> *Hafal*), me-*refresh* peramban, dan memverifikasi data tetap tersimpan di *IndexedDB* dan *LocalStorage*.

## 3. Production Build & Performance Testing

1. **Static Site Generation (SSG)**: Memastikan `npm run build` berhasil memproduksi 57/57 halaman statis dengan 0 error dan 0 warning.
2. **Speed & First Contentful Paint (FCP)**: Memonitor FCP di bawah 1.5 detik pada koneksi jaringan seluler standar.
3. **Live Production Deployment**: Memverifikasi ketersediaan aplikasi di domain produksi `https://production-eight-mu.vercel.app`.
