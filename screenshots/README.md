# Screenshots Directory

Direktori ini digunakan untuk menyimpan gambar, *screenshot*, atau GIF/Video singkat yang akan ditampilkan di halaman depan repositori (`README.md`).

Menyertakan *screenshot* sangat krusial bagi sebuah portofolio *developer* karena perekrut cenderung ingin melihat hasil akhir aplikasi terlebih dahulu sebelum membaca kode.

## Panduan Pengisian

Berdasarkan struktur `README.md` utama, Anda perlu menyiapkan setidaknya tiga aset visual dengan nama berikut di dalam folder ini:

1. `landing-page.png`
   - *Screenshot* dari halaman depan aplikasi saat pertama kali diakses.
2. `mobile-view.png`
   - *Screenshot* aplikasi dalam rasio layar ponsel (karena PWA sangat bergantung pada interaksi seluler).
3. `voice-navigation.png` (atau `.gif`)
   - Tangkapan layar yang menunjukkan status kursor fokus (*focus state* kotak tebal) saat *screen reader* sedang menavigasi aplikasi, atau GIF singkat berdurasi 5-10 detik yang merekam layar ponsel saat *TalkBack* diaktifkan.

Anda bebas menambahkan gambar lainnya dan memanggilnya di `README.md` menggunakan tag HTML standar:
```html
<img src="./screenshots/nama-gambar.png" width="30%" alt="Deskripsi Aksesibel Gambar">
```
