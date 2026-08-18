# Testing Methodology: DengarBain

Aplikasi DengarBain diuji tidak hanya dari fungsionalitas fiturnya, tetapi juga diuji secara ketat berdasarkan metrik aksesibilitas dan kemampuannya bekerja di lingkungan *Offline*.

Dokumen ini menjelaskan strategi pengujian (*Testing Strategy*) yang kami terapkan dalam pengembangan.

## 1. Accessibility Testing (A11y)

Karena target utama kami adalah individu tunanetra, uji aksesibilitas adalah proses *quality assurance* terpenting di proyek ini.

### 1.1. Automated Auditing
Setiap rilis fitur diuji menggunakan **Lighthouse Accessibility Audit** (berjalan via Chrome DevTools). 
- **Target Skor**: 100/100
- **Fokus Metrik**: Penggunaan *ARIA attributes*, *color contrast* (skema gelap yang ramah disabilitas penglihatan parsial), ketiadaan tag berulang yang membingungkan *screen reader*.

### 1.2. Manual Screen Reader Testing
Pengujian otomatis menggunakan bot tidak cukup untuk memastikan kelancaran navigasi suara. Kami rutin melakukan pengujian manual menggunakan:
- **Android**: *TalkBack* dengan gestur usap (*swipe gestures*).
- **iOS / macOS**: *VoiceOver* menggunakan navigasi *rotor* dan gestur jari.
- **Desktop (Windows)**: NVDA untuk memastikan kompatibilitas aplikasi web *desktop*.

**Kasus Uji (*Test Cases*):**
- Memastikan perpindahan aksen (dari Indonesia ke Arab) berjalan mulus di setiap kartu hadis.
- Memastikan notifikasi "A-B Loop diaktifkan" terdengar tanpa memindahkan kursor (menggunakan elemen `aria-live`).
- Memastikan pengguna dapat kembali ke halaman utama murni hanya menggunakan tombol *Back* dan gestur *Screen Reader*.

### 1.3. Keyboard Navigation Testing
Setiap alur kritis harus dapat diselesaikan tanpa *mouse*:
1. Menekan `Tab` untuk berpindah antarelemen interaktif.
2. Menggunakan `Space` / `Enter` untuk menekan tombol.
3. Menggunakan tombol panah `Arrow Up` / `Arrow Down` untuk mengontrol volume atau navigasi slider progress audio.

## 2. Offline & PWA Testing

Untuk memastikan santri tetap bisa mengakses hadis saat aplikasi tidak terhubung internet, kami menggunakan **Chrome DevTools (Application Tab & Network Tab)**:

1. **Simulasi Offline**: Mematikan centang jaringan (mode *Offline*) dan me-*refresh* halaman untuk memverifikasi halaman HTML utama tetap termuat dari *Service Worker*.
2. **Audio Caching**: Memutar audio saat *Online* sekali, lalu mematikan jaringan dan mencoba memutar audio kembali untuk memastikan ekstensi MP3 diambil secara aman dari *(disk cache)*.
3. **Background Sync**: Menyimpan data progres (hadis telah dihafal) pada mode *Offline*, lalu menyalakan jaringan untuk menguji apakah Dexie.js mengirim antrean data (*queue*) ke server.

## 3. Performance Testing

Tunanetra acap kali menggunakan perangkat seluler generasi lawas yang diberikan oleh donatur atau sekolah, sehingga optimalisasi performa *render* menjadi wajib.
- Kami memonitor **First Contentful Paint (FCP)** dan **Time to Interactive (TTI)**.
- Mengandalkan *Static Site Generation* (SSG) dari Next.js untuk menjaga nilai FCP di bawah 1.5 detik pada koneksi lambat (3G) di metrik tes lab (*Lighthouse Performance*).
