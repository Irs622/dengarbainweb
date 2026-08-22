# Third-Party Notices, Sources & Open-Source Disclosures

This document contains licensing, copyright, authoritative sources, and attribution notices for third-party software, datasets, models, fonts, icons, and assets utilized in or associated with the **DengarBain** project.

---

## 1. DengarBain Original Source Code & Educational Adaptations
- **License**: MIT License
- **Copyright**: (c) 2026 Irsal Shydiq & Fardho Dzurrahman
- **Notice**: The MIT license applies to the application source code and original pedagogical adaptations (simplified translations, context, urgency, and vocabulary lists) authored for the DengarBain web application.

---

## 2. Hadith Sources, Translation & Editorial Provenance

### Rujukan Kitab Utama (Primary Classical Islamic References)
The compilation, Arabic matan, and classical explanations in DengarBain refer to authoritative classical Islamic literature:
1. **Al-Arba'in An-Nawawiyah** (Matan Hadis) — Al-Imam Abu Zakariya Yahya bin Syaraf An-Nawawi (631–676 H / 1233–1277 CE).
2. **Jami'ul 'Ulum wal Hikam** — Al-Hafizh Ibnu Rajab Al-Hambali.
3. **Syarah Al-Arba'in An-Nawawiyah** — Al-Imam Ibnu Daqiq Al-Id & Syaikh Muhammad bin Shalih Al-Utsaimin.
4. **Al-Wafi fi Syarh Al-Arba'in An-Nawawiyah** — Dr. Mushthafa Al-Bugha & Muhyiddin Mistu.

### Standar Bahasa & Metodologi Terjemahan (Translation & Language Standards)
1. **Pedoman Terjemahan Al-Qur'an dan Hadis**: Mengacu pada standar Kementerian Agama Republik Indonesia (Kemenag RI).
2. **Kamus Besar Bahasa Indonesia (KBBI)**: Digunakan untuk pembakuan kosakata bahasa Indonesia.

### Catatan Aksesibilitas & Simplifikasi Bahasa (Accessibility Adaptation Disclaimer)
Teks terjemahan, transliterasi Latin, dan penjelasan dalam aplikasi ini telah melalui proses penyederhanaan bahasa (*simplifikasi*) oleh tim pengembang DengarBain. Langkah ini dilakukan secara khusus untuk memudahkan pemahaman bagi penyandang disabilitas (Tunarungu dan Tunagrahita), serta dioptimalkan untuk perangkat pembaca layar (*Screen Reader* seperti TalkBack & VoiceOver) bagi penyandang Tunanetra, tanpa mengurangi atau mengubah esensi makna asli hadis.

---

## 3. AI Speech Synthesis & Audio Engine

### SILMA Arabic TTS v1
- **Project**: [SILMA Arabic TTS v1](https://github.com/SILMA-AI/silma-tts)
- **Developer / Organization**: [SILMA AI](https://silma.ai/)
- **Model Card & Weights**: [HuggingFace - silma-ai/silma-tts](https://huggingface.co/silma-ai/silma-tts)
- **Licensing**:
  - **Source Code**: MIT License (Copyright (c) 2026 SILMA AI)
  - **Pretrained Model Weights**: Apache License, Version 2.0 (Commercial use permitted under the terms of Apache-2.0, subject to upstream ethical and transparency guidelines).
- **Usage**: Used offline during asset preparation to synthesize Arabic text-to-speech audio for the 42 Hadith Arbain files.
- **Citation**:
  ```bibtex
  @article{silma-tts-v1,
    title  = {SILMA TTS: A Lightweight Open Bilingual Text to Speech Model},
    author = {SILMA AI},
    year   = {2026},
    url    = {https://github.com/SILMA-AI/silma-tts}
  }
  ```

### Upstream Technologies Acknowledged by SILMA TTS
*(Note: DengarBain does not directly bundle or redistribute these Python libraries/weights; they are upstream foundations of the SILMA TTS tool)*:
- **F5-TTS**: [SWivid/F5-TTS](https://github.com/SWivid/F5-TTS) — MIT License (Architecture base).
- **CATT (Contextual Arabic Text Tashkeel)**: [abjadai/catt](https://github.com/abjadai/catt) — Arabic diacritization tool.
- **NVIDIA NeMo Text Processing**: [NVIDIA/NeMo-text-processing](https://github.com/NVIDIA/NeMo-text-processing) — Apache License 2.0.

### Generated Audio Notice (`public/audio/hadis/*.wav`)
- **Classification**: **AI-generated speech produced using SILMA TTS v1**.
- **Notice**: The 42 Arabic audio files in `public/audio/hadis/` are synthetic speech outputs generated using the SILMA Arabic TTS v1 model.
- **Voice Clone / Reference Speaker**: In SILMA TTS inference, synthesis was conducted using the default Arabic reference sample (`ar.ref.24k.wav`) supplied in the SILMA open-source demonstration repository for non-profit educational and accessibility research.

---

## 4. Typography & Fonts

All web fonts used in DengarBain are loaded remotely via Google Fonts CDN under open licenses (no font binaries are bundled locally):

### Plus Jakarta Sans
- **Designer / Foundry**: Gumpita Rahayu, Tokotype (Bandung, Indonesia)
- **License**: [SIL Open Font License 1.1 (OFL)](https://openfontlicense.org/)
- **Repository**: [tokotype/PlusJakartaSans](https://github.com/tokotype/PlusJakartaSans)

### Amiri
- **Designer**: Khaled Hosny
- **License**: [SIL Open Font License 1.1 (OFL)](https://openfontlicense.org/)
- **Repository**: [aliftype/amiri](https://github.com/aliftype/amiri)

### Playfair Display
- **Designer**: Claus Eggers Sørensen
- **License**: [SIL Open Font License 1.1 (OFL)](https://openfontlicense.org/)
- **Source**: Google Fonts

---

## 5. Graphical Assets & UI Icons

### Graphical Assets & Logos
- `public/brand/dengarbain-primary.png` & `public/brand/dengarbain-secondary.png`: Project logo and branding for DengarBain (Copyright (c) 2026 Irsal Shydiq & Fardho Dzurrahman).
- `public/images/menguasai-dengarbain.png`: Project educational artwork.

### UI Icons
- All user interface icons are custom inline vector SVGs authored directly in TSX components.

---

## 6. Runtime & Build Dependencies (npm)

All direct runtime dependencies are distributed under permissive open-source licenses:

| Package | Version | Scope | License | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **next** | 15.3.9 | Runtime | MIT | React Web Framework |
| **react** | ^19.0.0 | Runtime | MIT | UI Component Library |
| **react-dom** | ^19.0.0 | Runtime | MIT | DOM Rendering Engine |
| **typescript** | ^5 | Dev | Apache-2.0 | Type Checking |
| **eslint** | ^9 | Dev | Apache-2.0 | Code Linter |
| **eslint-config-next** | 15.3.9 | Dev | MIT | Next.js Lint Config |
| **@types/node** | ^20 | Dev | MIT | TypeScript Definitions |
| **@types/react** | ^19 | Dev | MIT | TypeScript Definitions |
| **@types/react-dom** | ^19 | Dev | MIT | TypeScript Definitions |

Transitive build-time packages:
- `axe-core`: MPL-2.0 (Accessibility rules used exclusively by `eslint-plugin-jsx-a11y` during development/linting; verified 0% present in compiled production bundle).
- `@img/sharp-libvips-*`: LGPL-3.0-or-later (Optional native build tool).

No GPL / AGPL copyleft code is bundled into the client runtime application.
