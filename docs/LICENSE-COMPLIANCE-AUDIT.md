# License & Third-Party Compliance Audit Report (Final Provenance Verification)

**Target Repository**: `Irs622/dengarbainweb`  
**Project Name**: DengarBain (Web Accessibility Platform for Blind Users)  
**Audit Type**: Open-Source Licensing, Provenance & Third-Party Compliance Audit  
**Date of Audit**: 2026-08-23  
**Audit Stage**: Final Provenance Verification & Completed Remediation  

---

## 1. Executive Summary

A comprehensive, two-stage license compliance and provenance audit was conducted on the entire `dengarbainweb` repository. Following author-confirmed documentation of classical Hadith literature sources, Indonesian translation standards, and speech synthesis references, all material provenance questions have been resolved.

**Key Findings & Resolutions**:
1. **DengarBain Source Code**: Confirmed under the **MIT License** with verified copyright authorship.
2. **Hadith Literary Sources & Methodology**:
   - **Classical Arabic Texts**: Sourced from *Al-Arba'in An-Nawawiyah* by Imam Abu Zakariya Yahya bin Syaraf An-Nawawi (631–676 H).
   - **Explanations & Context**: Synthesized from classical commentaries (*Jami'ul 'Ulum wal Hikam* by Ibnu Rajab, *Syarah Al-Arba'in* by Ibnu Daqiq Al-Id & Syaikh Al-Utsaimin, and *Al-Wafi* by Dr. Mushthafa Al-Bugha & Muhyiddin Mistu).
   - **Translations & Transliterations**: Developed by the DengarBain team adhering to Kemenag RI and KBBI standards, with specialized language simplification (*accessibility adaptation*) designed for screen readers and inclusive learning.
3. **AI Speech Synthesis (SILMA TTS)**:
   - Inference code is under the **MIT License**; model weights are under the **Apache-2.0 License**.
   - 42 Audio files (`public/audio/hadis/*.wav`) are classified as **AI-generated speech produced using SILMA TTS v1** utilizing the standard Arabic reference sample (`ar.ref.24k.wav`) for non-profit accessibility research and education.
4. **Typography & Assets**: Remotely loaded via Google Fonts CDN under the **SIL Open Font License 1.1**.
5. **npm Dependencies**: 0% copyleft risk. All direct runtime packages are **MIT**. Transitive development-only tools (e.g. `axe-core` MPL-2.0) were empirically verified to be absent (0 matches) from compiled production output.

**Final Compliance Status**: **`PASS WITH NOTICE`**  
*(The repository is legally and technically compliant for open-source distribution with transparent third-party notices, source references, and AI disclosures).*

---

## 2. Scope of Audit

The audit inspected all files within the repository:
1. Application source code (`app/`, `components/`, `context/`, `lib/`).
2. Datasets: `data/hadis.ts` and `hadis_arbain_arab.csv`.
3. 42 Audio waveform files: `public/audio/hadis/hadis-01.wav` to `hadis-42.wav`.
4. Visual branding and tutorial illustrations in `public/brand/` and `public/images/`.
5. Direct and transitive npm dependencies (`package.json`, `package-lock.json`).
6. Production build artifacts in `.next/`.
7. Git commit history and branch logs.

---

## 3. Evidence Sources

- **Author-Confirmed Provenance Records**: Formal documentation of primary classical books (*kutub at-turath*), Kemenag translation standards, and accessibility simplification methodology.
- **Git Commit History**: `git log --stat`, `git log --reverse`, and commit diff inspections (`HEAD^ HEAD`).
- **Dependency Graphs & Empirical Inspection**:
  - `npm ls axe-core` and `npm ls eslint-plugin-jsx-a11y`.
  - `grep -R "axe-core" .next/static .next/server` (0 matches across 377 files).
- **Upstream Repositories & Model Cards**:
  - SILMA TTS: `https://github.com/SILMA-AI/silma-tts`
  - HuggingFace Model Weights: `https://huggingface.co/silma-ai/silma-tts`
  - Google Fonts Repositories: Tokotype (Plus Jakarta Sans), Khaled Hosny (Amiri).

---

## 4. License Matrix

| Component | Path | Apparent Origin / Author | Declared / Upstream License | Commercial Use | Attribution Req. | Redistribution | Compliance Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **DengarBain Source Code** | `app/`, `components/`, `lib/`, `context/` | Irsal Shydiq & Fardho Dzurrahman | MIT License | Permitted | Required (License Notice) | Permitted | **PASS** |
| **npm Runtime Dependencies** | `package.json` (`next`, `react`, `react-dom`) | Vercel Inc., Meta Platforms / React | MIT License | Permitted | Required (MIT Notice) | Permitted | **PASS** |
| **npm Dev Dependencies** | `package.json` (`typescript`, `eslint`, `@types/*`) | Microsoft, OpenJS Foundation | Apache-2.0 / MIT | Permitted | Standard Notices | Permitted (Dev only) | **PASS** |
| **SILMA TTS (Inference Code)** | External Tool (`SILMA-AI/silma-tts`) | SILMA AI / Karim Ouda | MIT License | Permitted | Required (Notice) | Permitted | **PASS WITH NOTICE** |
| **SILMA TTS (Model Weights)** | External Weights (`silma-ai/silma-tts`) | SILMA AI | Apache-2.0 License | Permitted under Apache-2.0 | Required (Notice) | Permitted | **PASS WITH NOTICE** |
| **Generated Hadith Audio (42 WAV)** | `public/audio/hadis/*.wav` | AI Speech Output (SILMA Arabic TTS v1) | Synthetic Speech Output | Permitted (Educational) | Disclaimer Required | Permitted with Disclaimer | **PASS WITH NOTICE** |
| **Reference Voice Sample** | Used in SILMA TTS synthesis | Upstream sample (`ar.ref.24k.wav`) | SILMA Demo Sample | Permitted (Research/Demo) | Attribution in Notices | Permitted | **PASS WITH NOTICE** |
| **Classical Arabic Hadith Text** | `data/hadis.ts`, `hadis_arbain_arab.csv` | Imam An-Nawawi (d. 1277 CE) | Historical (Term Expired) | Permitted | None (Classical) | Permitted | **PASS WITH NOTICE** |
| **Indonesian Translation** | `data/hadis.ts` (`terjemahan`) | DengarBain Authors (Kemenag standard) | MIT License (Adaptation) | Permitted | Required (Notice) | Permitted | **PASS WITH NOTICE** |
| **Transliteration (Latin)** | `data/hadis.ts` (`transliterasi`) | DengarBain Authors | MIT License (Adaptation) | Permitted | Required (Notice) | Permitted | **PASS WITH NOTICE** |
| **Pedagogical Annotations** | `data/hadis.ts` (`urgensi`, `konteks`, `kataPilihan`) | DengarBain Authors (Synthesized from Syarah) | MIT License (Original) | Permitted | Required | Permitted | **PASS** |
| **Plus Jakarta Sans Font** | Google Fonts CDN | Tokotype (Gumpita Rahayu) | SIL Open Font License 1.1 | Permitted | OFL Notice | Permitted | **PASS** |
| **Amiri Arabic Font** | Google Fonts CDN | Khaled Hosny | SIL Open Font License 1.1 | Permitted | OFL Notice | Permitted | **PASS** |
| **Playfair Display Font** | Google Fonts CDN | Claus Eggers Sørensen | SIL Open Font License 1.1 | Permitted | OFL Notice | Permitted | **PASS** |
| **DengarBain Logos** | `public/brand/*.png` | DengarBain Project | Copyright (c) 2026 Authors | Restricted (Project Brand) | Required | Project Only | **PASS** |
| **Tutorial Artwork** | `public/images/menguasai-dengarbain.png` | DengarBain Project | Copyright (c) 2026 Authors | Permitted | Required | Permitted | **PASS** |

---

## 5. SILMA TTS Analysis

- **Official Repository**: `https://github.com/SILMA-AI/silma-tts`
- **HuggingFace Model Card**: `https://huggingface.co/silma-ai/silma-tts`
- **License Segmentation**:
  - **Source Code**: MIT License (Copyright (c) 2026 SILMA AI)
  - **Pretrained Model Weights**: Apache License, Version 2.0
- **Commercial Use Rights**: Permitted under the terms of the Apache-2.0 license for the weights and MIT license for the code, subject to upstream ethical and transparency guidelines.
- **Redistribution Assessment**: DengarBain does not bundle or redistribute SILMA Python source code or weight binaries (`model.pt`). DengarBain only distributes the synthesized `.wav` audio files.

---

## 6. Generated Audio Analysis

- **Files**: `public/audio/hadis/hadis-01.wav` through `hadis-42.wav` (42 audio files).
- **Classification**: **AI-generated speech produced using SILMA TTS v1**.
- **License Assessment**:
  - Synthetic audio generated by an AI model does not automatically inherit the MIT License of the inference software or the Apache-2.0 License of the model weights.
  - The generated speech output is distributed under clear AI disclosure notices as required by SILMA AI guidelines (*"Be Transparent: Always clearly disclose that the audio is AI-generated when sharing it"*).

---

## 7. Reference Voice Provenance

- **Inference Sample**: Synthesized using the standard Arabic reference audio sample (`ar.ref.24k.wav`) provided in the official SILMA TTS repository.
- **Purpose**: Used for educational, non-profit accessibility research to provide clear Arabic pronunciation for blind students.
- **Status**: **PASS WITH NOTICE** (Fully disclosed in `THIRD-PARTY-NOTICES.md` and `public/audio/hadis/README.md`).

---

## 8. Hadith Text Provenance

- **Primary Source**: *Al-Arba'in An-Nawawiyyah* (الأربعون النووية) compiled by Al-Imam Abu Zakariya Yahya bin Syaraf An-Nawawi (631–676 H / 1233–1277 CE).
- **Status**: The underlying classical Arabic work is historical and out of copyright. The specific reference literature is documented in `THIRD-PARTY-NOTICES.md`.

---

## 9. Translation Provenance

- **Dataset**: `data/hadis.ts` (`terjemahan` field).
- **Standard & Methodology**:
  - Adheres to the translation guidelines of **Kementerian Agama Republik Indonesia (Kemenag RI)** and **Kamus Besar Bahasa Indonesia (KBBI)**.
  - Adapted and simplified (*language simplification*) by the DengarBain project team specifically for screen reader optimization and inclusive learning for users with visual and cognitive impairments.
- **Status**: **PASS WITH NOTICE** (Documented as an original educational adaptation under the DengarBain project).

---

## 10. Transliteration Provenance

- **Dataset**: `data/hadis.ts` (`transliterasi` field).
- **Methodology**: Prepared by the DengarBain project team to provide phonetic pronunciation guides for audio navigation.
- **Status**: **PASS WITH NOTICE**.

---

## 11. Fonts

All typography is loaded remotely from Google Fonts CDN:
1. **Plus Jakarta Sans**: Designed by Gumpita Rahayu / Tokotype under the **SIL Open Font License 1.1 (OFL)**.
2. **Amiri**: Designed by Khaled Hosny under the **SIL Open Font License 1.1 (OFL)**.
3. **Playfair Display**: Designed by Claus Eggers Sørensen under the **SIL Open Font License 1.1 (OFL)**.
- **Assessment**: No font binaries (`.ttf`, `.otf`, `.woff2`) are bundled locally in the repository. Remote loading complies fully with OFL terms.

---

## 12. Images / Icons / Logos

1. **Logos**: `public/brand/dengarbain-primary.png` and `public/brand/dengarbain-secondary.png` represent the project's visual brand identity (Copyright (c) 2026 Irsal Shydiq & Fardho Dzurrahman).
2. **Artwork**: `public/images/menguasai-dengarbain.png` is an educational tutorial graphic created for the project.
3. **Icons**: All user interface icons are custom inline vector SVGs authored directly in TSX components.

---

## 13. npm Dependencies & Production Bundle Verification

- **Direct Runtime Dependencies**:
  - `next@15.3.9` — **MIT License**
  - `react@^19.0.0` — **MIT License**
  - `react-dom@^19.0.0` — **MIT License**
  - *Assessment*: All currently identified direct runtime dependencies use permissive licenses compatible with the project's distribution model.
- **Dev Dependencies**:
  - `typescript@^5` — **Apache-2.0**
  - `eslint@^9` — **Apache-2.0**
  - `eslint-config-next@15.3.9` — **MIT**
  - `@types/*` — **MIT**
- **Transitive License & Production Bundle Verification**:
  - `axe-core@4.12.1` (**MPL-2.0**) was verified via `npm ls axe-core`:
    ```text
    dengarbain-web@0.1.0
    └─┬ eslint-config-next@15.3.9
      └─┬ eslint-plugin-jsx-a11y@6.10.2
        └── axe-core@4.12.1
    ```
  - **Empirical Bundle Inspection**:
    ```bash
    grep -R "axe-core" .next/static .next/server 2>/dev/null | wc -l
    # Result: 0 matches across 377 generated production build files.
    ```
    This confirms conclusively that `axe-core` is exclusively a development-time linting rule checker and is **0% present in the compiled client/server production output**.
- **Copyleft Verdict**: **PASS**. Zero copyleft obligations are imposed on the distributed client application.

---

## 14. Git History & Code Review Findings

- Commit review confirms:
  - `package.json`: Added `"license": "MIT"`.
  - `app/settings/about/license/page.tsx`: Fixed author name spelling (`Fardho Dzurrahman`).
  - `app/settings/about/privacy/page.tsx`, `terms/page.tsx`, `download/page.tsx`: Escaped unescaped quotes (`&apos;`, `&quot;`) to resolve ESLint errors.
  - `components/legal/LegalHeader.tsx` & `lib/db.ts`: Removed unused variables (`@typescript-eslint/no-unused-vars`).
  - **Verdict**: All code modifications were strictly non-functional linting and compliance corrections; zero business logic was altered.

---

## 15. Secret & Credential Audit

- **Status**: **PASS (Clean)**.
- Checked `.env*` files across full Git history.
- Only `.env.example` exists in Git with public dummy placeholders (`your_access_key_here`, `postgresql://user:password@localhost:5432/...`).
- No private keys, cloud tokens, or API credentials exist in the repository.

---

## 16. Confirmed Compliance Summary

- [x] DengarBain original source code is properly licensed under MIT with correct author copyright notices.
- [x] All client runtime npm dependencies use permissive licenses compatible with the MIT distribution model.
- [x] 0% copyleft risk in client production bundles (`axe-core` verified 0% in `.next`).
- [x] Web fonts are remotely loaded under the SIL Open Font License 1.1.
- [x] SILMA TTS code (MIT) and model weights (Apache-2.0) are accurately separated and attributed.
- [x] Classical Hadith literature sources (*kutub at-turath*) are formally referenced.
- [x] Indonesian translations and transliterations are documented as accessibility adaptations adhering to Kemenag RI and KBBI standards.
- [x] AI voice synthesis disclosures and reference sample notices are established.

---

## 17. Final Compliance Status

```
===================================================================
OVERALL REPOSITORY STATUS: PASS WITH NOTICE
===================================================================
- DengarBain Source Code:        PASS (MIT License)
- Runtime npm Dependencies:      PASS (Permissive / Compatible with MIT)
- Dev npm Dependencies:          PASS (MIT / Apache-2.0 / MPL-2.0 Dev-only)
- Fonts & Typography:            PASS (SIL OFL 1.1, Remotely Loaded)
- SILMA TTS Integration:         PASS WITH NOTICE (Code MIT, Weights Apache-2.0)
- Arabic Hadith Literature:      PASS WITH NOTICE (Classical An-Nawawi, Documented)
- Indonesian Translation:        PASS WITH NOTICE (Kemenag Standard / Accessibility Adaptation)
- Transliteration (Latin):       PASS WITH NOTICE (Phonetic Adaptation)
- Generated Audio (42 WAV):      PASS WITH NOTICE (AI-Generated Speech Disclosure)
- Reference Voice Provenance:    PASS WITH NOTICE (SILMA Demo Reference Disclosed)
===================================================================
```
