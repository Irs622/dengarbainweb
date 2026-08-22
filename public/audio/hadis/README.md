# Repositori Berkas Audio 42 Hadis Arbain An-Nawawiyah 🎙️

Folder ini menyimpan seluruh 42 berkas rekaman suara matan Hadis Arbain An-Nawawiyah berformat `.wav` berkualitas tinggi yang terintegrasi secara otomatis dengan pemutar audio HTML5 dan Service Worker luring (`dengarbain-cache-v2`).

---

## 📁 Struktur Penamaan Berkas
Setiap berkas dinamai dengan format dua digit: `hadis-XX.wav`:

- `hadis-01.wav` — Hadis 1: Niat dan Ikhlas
- `hadis-02.wav` — Hadis 2: Islam, Iman, dan Ihsan
- `hadis-03.wav` — Hadis 3: Rukun Islam
- `...`
- `hadis-42.wav` — Hadis 42: Luasnya Ampunan Allah

---

## 🤖 Atribusi & Keterbukaan Sintesis Suara AI (AI Voice Synthesis Disclosure)

Seluruh 42 berkas audio pelafalan teks Arab Hadis Arbain pada proyek ini disintesis menggunakan model AI Text-to-Speech:

- **Model / Generator**: [SILMA Arabic TTS v1](https://github.com/SILMA-AI/silma-tts) oleh **[SILMA AI](https://silma.ai/)**
- **Model Card & Weights**: [HuggingFace - silma-ai/silma-tts](https://huggingface.co/silma-ai/silma-tts)
- **Arsitektur Dasar**: F5-TTS Diffusion-based Speech Synthesis (150M Parameters)
- **Lisensi Terpisah**:
  - **SILMA TTS Source Code**: MIT License (Copyright (c) 2026 SILMA AI)
  - **SILMA Pretrained Model Weights**: Apache License, Version 2.0
- **Upstream Dependencies (Inference)**: F5-TTS (MIT), CATT (Tashkeel Tool), NVIDIA NeMo Text Processing (Apache 2.0).

### Status Hukum Berkas Audio yang Dihasilkan
1. **AI-Generated Speech**: Berkas audio `.wav` di folder ini adalah output sintesis suara berbasis AI. Berkas audio ini tidak secara otomatis berlisensi MIT atau Apache-2.0 hanya karena software atau bobot modelnya bersifat open-source.
2. **Sampel Suara Referensi (Voice Reference Sample)**: Suara disintesis menggunakan sampel referensi audio bahasa Arab. Identitas dan dokumentasi persetujuan penutur suara referensi belum terdokumentasi dalam repositori (*PROVENANCE UNKNOWN — HUMAN REVIEW REQUIRED*).

### Kutipan Sitasi (Citation):
```bibtex
@article{silma-tts-v1,
  title  = {SILMA TTS: A Lightweight Open Bilingual Text to Speech Model},
  author = {SILMA AI},
  year   = {2026},
  url    = {https://github.com/SILMA-AI/silma-tts}
}
```

---

## 🔒 Kebijakan & Tujuan Pemakaian
Berkas audio ini disediakan semata-mata untuk tujuan edukasi nirlaba, riset aksesibilitas, dan memfasilitasi santri/pengguna tunanetra dalam menghafal Hadis Arbain secara mandiri.
