# Panduan Kontribusi (Contributing Guidelines)

Terima kasih atas minat Anda untuk berkontribusi pada proyek **DengarBain**! Proyek ini didedikasikan untuk menyediakan akses pembelajaran hadis yang inklusif bagi santri tunanetra melalui antarmuka web yang ramah *screen reader* dan *offline-first*.

---

## 📜 Nilai & Prinsip Utama

Setiap kontribusi pada DengarBain harus selaras dengan prinsip inti kami:
1. **Accessibility First (A11y)**: Setiap elemen antarmuka yang ditambahkan atau diubah **wajib** dapat dinavigasikan menggunakan *screen reader* (TalkBack / VoiceOver) dan keyboard.
2. **Offline Resilience**: Fitur baru tidak boleh merusak kemampuan *offline-first* PWA.
3. **No-Friction**: Menjaga aplikasi tetap ringan, cepat dimuat, dan mudah diakses tanpa proses otentikasi rumit.

---

## 🛠️ Alur Kontribusi (Workflow)

### 1. Fork & Clone Repository
1. Lakukan *fork* pada repositori ini ke akun GitHub Anda.
2. *Clone* repositori lokal:
   ```bash
   git clone https://github.com/<username-anda>/dengarbainweb.git
   cd dengarbainweb
   ```
3. Tambahkan repositori *upstream*:
   ```bash
   git remote add upstream https://github.com/Irs622/dengarbainweb.git
   ```

### 2. Buat Branch Baru
Gunakan konvensi penamaan branch yang jelas:
- Fitur baru: `feat/nama-fitur` (contoh: `feat/voice-speed-control`)
- Perbaikan bug: `fix/nama-bug` (contoh: `fix/talkback-arabic-announcement`)
- Dokumentasi: `docs/penjelasan-fitur`
- Refactoring: `refactor/nama-komponen`

```bash
git checkout -b feat/nama-fitur
```

### 3. Setup Lingkungan Lokal
1. Pastikan Anda menggunakan **Node.js v18+** dan **npm v9+**.
2. Pasang dependensi:
   ```bash
   npm install
   ```
3. Buat file konfigurasi lokal dari template:
   ```bash
   cp .env.example .env.local
   ```
4. Jalankan *development server*:
   ```bash
   npm run dev
   ```

### 4. Standar Kode & Konvensi
- **TypeScript**: Gunakan tipe data eksplisit, hindari penggunaan `any`.
- **Semantic HTML**: Gunakan tag HTML standar (`<nav>`, `<main>`, `<article>`, `<button>`, `<header>`, `<footer>`). Hindari penggunaan `<div>` dengan `onClick`.
- **WAI-ARIA**: Sertakan `aria-label`, `role`, atau `aria-live` jika elemen kustom memerlukan penjelasan audio bagi *screen reader*.
- **Bahasa**: Gunakan `lang="ar"` dan `dir="rtl"` untuk teks berbahasa Arab, dan `lang="id"` untuk teks bahasa Indonesia.
- **Linting**: Jalankan linter sebelum membuat commit:
  ```bash
  npm run lint
  ```

### 5. Format Pesan Commit
Gunakan format *Conventional Commits*:
- `feat: tambah kontrol kecepatan pemutaran audio hadis`
- `fix: perbaiki fokus kursor saat kembali ke daftar hadis`
- `docs: perbarui panduan arsitektur sinkronisasi`
- `style: perbaiki kontras warna pada tema gelap`

### 6. Pengujian Sebelum Mengajukan PR
Pastikan Anda telah melakukan:
- [ ] Uji build lokal (`npm run build`).
- [ ] Uji navigasi keyboard murni (`Tab`, `Shift+Tab`, `Enter`, `Space`, tombol panah).
- [ ] (Sangat Disarankan) Uji menggunakan *screen reader* (TalkBack di Android, VoiceOver di macOS/iOS, atau NVDA di Windows).
- [ ] Uji fitur dalam kondisi jaringan mati (*offline mode* di Chrome DevTools).

### 7. Mengirimkan Pull Request (PR)
1. *Push* perubahan ke *fork* Anda:
   ```bash
   git push origin feat/nama-fitur
   ```
2. Buka GitHub dan buat **Pull Request** ke branch `main` repositori `Irs622/dengarbainweb`.
3. Isi deskripsi PR dengan jelas sesuai *template* PR yang disediakan.

---

## 👥 Tim & Pemelihara Proyek

Jika Anda memiliki pertanyaan seputar arsitektur atau ingin mendiskusikan ide fitur baru sebelum mulai menulis kode, silakan buka **Issue** di GitHub atau hubungi tim pemelihara:
- **Irsal Shydiq** ([@Irs622](https://github.com/Irs622))
- **Fardho Dzurrahman** ([@fardhoz25](https://github.com/fardhoz25))
