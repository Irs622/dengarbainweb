# Third-Party Notices & Open-Source Disclosures

This document contains licensing, copyright, and attribution notices for third-party software, datasets, models, fonts, icons, and assets utilized in or associated with the **DengarBain** project.

---

## 1. DengarBain Original Source Code
- **License**: MIT License
- **Copyright**: (c) 2026 Irsal Shydiq & Fardho Dzurrahman
- **Notice**: The MIT license applies strictly to the original application source code authored for the DengarBain web application. It does not automatically extend to third-party dependencies, AI models, generated audio, fonts, or religious texts and translations.

---

## 2. AI Speech Synthesis & Audio Engine

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
- **Notice**: The 42 Arabic audio files in `public/audio/hadis/` are synthetic speech outputs generated using the SILMA Arabic TTS v1 model. These audio files are not automatically licensed under MIT or Apache-2.0.
- **Voice Clone / Reference Speaker**: In SILMA TTS inference, synthesis relies on reference audio prompting (e.g. `ar.ref.24k.wav`). The specific identity and consent documentation of the reference speaker are not published in upstream repositories (*PROVENANCE OF REFERENCE SPEAKER SAMPLE UNKNOWN — HUMAN REVIEW REQUIRED*).

---

## 3. Hadith Datasets & Textual Content

### Classical Arabic Hadith Text
- **Historical Source**: *Al-Arba'in An-Nawawiyyah* (الأربعون النووية) compiled by Imam Abu Zakariya Yahya bin Sharaf An-Nawawi (d. 676 H / 1277 CE).
- **Status**: The underlying classical Arabic work is historical and the original copyright term has long expired. However, the specific modern edition, tahqiq, and digital transcription used in this repository are undocumented (*NEEDS HUMAN REVIEW*).

### Indonesian Translation & Transliteration (`data/hadis.ts`, `hadis_arbain_arab.csv`)
- **Status**: *PROVENANCE UNKNOWN — HUMAN REVIEW REQUIRED*.
- **Notice**: While the underlying 13th-century Arabic Hadith is a historical text, modern Indonesian translations and transliterations may hold independent copyright. Maintainers must formally document whether these translations were written directly by the DengarBain authors or adapted from an existing published translation work.

### Pedagogical Explanations (`urgensi`, `konteks`, `kataPilihan`)
- **Status**: Original educational content created by the DengarBain project authors.

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
- `axe-core`: MPL-2.0 (Accessibility rules used exclusively by `eslint-plugin-jsx-a11y` during development/linting; not shipped in the client production bundle).
- `@img/sharp-libvips-*`: LGPL-3.0-or-later (Optional native build tool).

No GPL / AGPL copyleft code is bundled into the client runtime application.
