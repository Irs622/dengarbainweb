# Third-Party Notices & Open-Source Disclosures

This document contains licensing, copyright, and attribution notices for third-party software, datasets, models, fonts, icons, and assets utilized in or associated with the **DengarBain** project.

---

## 1. DengarBain Original Source Code
- **License**: MIT License
- **Copyright**: (c) 2026 Irsal Shydiq & Fardho Dzurrahman
- **Notice**: The MIT license applies strictly to the original source code authored for the DengarBain web application. It does not automatically extend to third-party dependencies, AI models, generated audio, fonts, or religious texts and translations.

---

## 2. AI Speech Synthesis & Audio Engine

### SILMA Arabic TTS v1
- **Project**: [SILMA Arabic TTS v1](https://github.com/SILMA-AI/silma-tts)
- **Developer / Organization**: [SILMA AI](https://silma.ai/)
- **Model Card & Weights**: [HuggingFace - silma-ai/silma-tts](https://huggingface.co/silma-ai/silma-tts)
- **Licensing**:
  - **Source Code**: MIT License (Copyright (c) 2026 SILMA AI)
  - **Pretrained Model Weights**: Apache License, Version 2.0
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

### Upstream Model Technologies Acknowledged by SILMA TTS
*(Note: DengarBain does not directly redistribute these Python libraries/weights; they are upstream dependencies of the SILMA TTS generation pipeline)*:
- **F5-TTS**: [SWivid/F5-TTS](https://github.com/SWivid/F5-TTS) — MIT License (Architecture base).
- **CATT (Contextual Arabic Text Tashkeel)**: [abjadai/catt](https://github.com/abjadai/catt) — Arabic diacritization tool.
- **NVIDIA NeMo Text Processing**: [NVIDIA/NeMo-text-processing](https://github.com/NVIDIA/NeMo-text-processing) — Apache License 2.0.

### Generated Audio Disclaimer & Provenance Notice (`public/audio/hadis/*.wav`)
- **Status**: AI-Generated Speech Derivative Output.
- **Notice**: The 42 Arabic audio files in `public/audio/hadis/` were generated using the SILMA Arabic TTS v1 model. These audio files represent synthetic speech output and are **not** automatically licensed under MIT or Apache-2.0.
- **Voice Clone / Reference Speaker**: Synthetic pronunciation generated via SILMA reference audio. Specific identity and explicit consent of the underlying reference voice speaker cannot be verified from repository evidence alone (*PROVENANCE UNKNOWN — HUMAN REVIEW REQUIRED*).

---

## 3. Hadith Datasets & Textual Content

### Matan Arab (Arabic Hadith Text)
- **Source**: *Al-Arba'in An-Nawawiyyah* (الأربعون النووية) compiled by Imam Abu Zakariya Yahya bin Sharaf An-Nawawi (d. 676 H / 1277 CE).
- **Status**: **Public Domain** (Classical 13th-century religious text).

### Indonesian Translation & Transliteration (`data/hadis.ts`, `hadis_arbain_arab.csv`)
- **Language**: Indonesian (`id`)
- **Status**: *PROVENANCE UNKNOWN — HUMAN REVIEW REQUIRED*.
- **Notice**: While the underlying 13th-century Arabic Hadith is public domain, modern Indonesian translations and transliterations may be subject to copyright depending on whether they are original translations created by the project authors or adapted from published translation works. Maintainers should review and formally document the authorship/source.

### Explanations, Urgency & Vocabulary (`urgensi`, `konteks`, `kataPilihan`)
- **Status**: Original pedagogical annotations created for the DengarBain educational project.

---

## 4. Typography & Fonts

All web fonts used in DengarBain are loaded via Google Fonts CDN under open licenses:

### Plus Jakarta Sans
- **Designer**: Gumpita Rahayu, Tokotype
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

## 5. Icons & Graphical Assets

### Graphical Assets & Logos
- `public/brand/dengarbain-primary.png` & `public/brand/dengarbain-secondary.png`: Project logo and branding for DengarBain (Copyright (c) 2026 Irsal Shydiq & Fardho Dzurrahman).
- `public/images/menguasai-dengarbain.png`: Project tutorial illustration.

### UI Icons
- Inline SVG icons: Standard accessible vector geometry created for DengarBain UI.

---

## 6. Runtime & Build Dependencies (npm)

All direct runtime dependencies are distributed under permissive open-source licenses:

| Package | Version | Direct/Transitive | License | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **next** | 15.3.9 | Direct | MIT | React Web Framework |
| **react** | ^19.0.0 | Direct | MIT | UI Library |
| **react-dom** | ^19.0.0 | Direct | MIT | DOM Renderer |
| **typescript** | ^5 | DevDependency | Apache-2.0 | Type Checking |
| **eslint** | ^9 | DevDependency | Apache-2.0 | Code Linter |
| **eslint-config-next** | 15.3.9 | DevDependency | MIT | Next.js Lint Config |
| **@types/node** | ^20 | DevDependency | MIT | TypeScript Definitions |
| **@types/react** | ^19 | DevDependency | MIT | TypeScript Definitions |
| **@types/react-dom** | ^19 | DevDependency | MIT | TypeScript Definitions |

Transitive build-time tool packages:
- `caniuse-lite`: CC-BY-4.0 (Browser data)
- `axe-core`: MPL-2.0 (Accessibility linting rule engine under `eslint-plugin-jsx-a11y`, build-time only)
- `@img/sharp-libvips-*`: LGPL-3.0-or-later (Optional native image build tool, build-time only)

No GPL / AGPL dependencies are linked or distributed in the production runtime client bundle.
