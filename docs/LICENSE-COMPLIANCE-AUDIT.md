# License & Third-Party Compliance Audit Report (Second-Pass Verification)

**Target Repository**: `Irs622/dengarbainweb`  
**Project Name**: DengarBain (Web Accessibility Platform for Blind Users)  
**Audit Type**: Open-Source Licensing, Provenance & Third-Party Compliance Audit  
**Date of Audit**: 2026-08-23  
**Audit Stage**: Second-Pass Verification & Evidence-Based Remediation  

---

## 1. Executive Summary

A second-pass verification audit was conducted on the entire `dengarbainweb` repository. This audit strictly separates confirmed legal provenance from unresolved items that require maintainer knowledge or confirmation.

**Summary of Conclusions**:
- **Application Source Code**: Confirmed compliant under the **MIT License**.
- **Dependencies (npm)**: Confirmed compliant. All client runtime packages are permissively licensed (**MIT**). No copyleft (GPL/AGPL/MPL) code is bundled into the client production application.
- **AI Speech Synthesis (SILMA TTS)**: Confirmed compliant with notice. Code is licensed under **MIT**, and pretrained weights are licensed under **Apache-2.0**. DengarBain does not redistribute upstream Python libraries or raw model checkpoints.
- **Generated Audio (42 WAV Files)**: Classified as **AI-generated speech produced using SILMA TTS v1**. The audio does not automatically inherit MIT or Apache-2.0 licensing. Consent and identity of the reference speaker used in upstream demo cloning are unverified (*UNKNOWN*).
- **Religious Texts & Translations**: The original classical Arabic Hadith is a historical work whose copyright term has long expired; however, the specific modern edition and transcription used are undocumented. The authorship/source of the Indonesian translations and transliterations is also undocumented (*NEEDS HUMAN REVIEW*).
- **Fonts & Visual Assets**: Web fonts (Plus Jakarta Sans, Amiri, Playfair Display) are loaded remotely via Google Fonts CDN under the **SIL Open Font License 1.1**.

**Overall Audit Verdict**: **`NEEDS HUMAN REVIEW`**  
*(The repository is technically sound and its source code is open source, but material provenance regarding translations, text editions, and voice reference consent must be formally confirmed by the maintainers).*

---

## 2. Scope of Audit

The audit inspected all files within the repository:
1. All application routes (`app/`), components (`components/`), contexts (`context/`), and database helpers (`lib/db.ts`).
2. Datasets: `data/hadis.ts` and `hadis_arbain_arab.csv`.
3. 42 Audio waveform files: `public/audio/hadis/hadis-01.wav` to `hadis-42.wav`.
4. Typography, logos, icons, and image assets in `public/` and `app/globals.css`.
5. Direct and transitive npm dependencies (`package.json`, `package-lock.json`).
6. Git commit history and branch logs.
7. Documentation and licensing declarations (`LICENSE`, `README.md`, `docs/`, `.github/`).

---

## 3. Evidence Sources

- **Git Commit History**: `git log --stat`, `git log --reverse`, and commit diff inspections (`HEAD^ HEAD`).
- **Dependency Graphs**: `npm ls axe-core`, `npm ls eslint-plugin-jsx-a11y`, and `license-checker`.
- **Production Build Bundles**: `next build` artifact analysis.
- **Upstream Repositories**:
  - SILMA TTS: `https://github.com/SILMA-AI/silma-tts`
  - SILMA Model Card: `https://huggingface.co/silma-ai/silma-tts`
  - F5-TTS Base: `https://github.com/SWivid/F5-TTS`
  - Google Fonts Repositories: Tokotype (Plus Jakarta Sans), Alif Type (Amiri).

---

## 4. License Matrix

| Component | Path | Apparent Origin / Author | Declared / Upstream License | Commercial Use | Attribution Req. | Redistribution | Compliance Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **DengarBain Source Code** | `app/`, `components/`, `lib/`, `context/` | Irsal Shydiq & Fardho Dzurrahman | MIT License | Permitted | Required (License Notice) | Permitted | **PASS** |
| **npm Runtime Dependencies** | `package.json` (`next`, `react`, `react-dom`) | Vercel Inc., Meta Platforms / React | MIT License | Permitted | Required (MIT Notice) | Permitted | **PASS** |
| **npm Dev Dependencies** | `package.json` (`typescript`, `eslint`, `@types/*`) | Microsoft, OpenJS Foundation | Apache-2.0 / MIT | Permitted | Standard Notices | Permitted (Dev only) | **PASS** |
| **SILMA TTS (Inference Code)** | External Tool (`SILMA-AI/silma-tts`) | SILMA AI / Karim Ouda | MIT License | Permitted | Required (Notice) | Permitted | **PASS WITH NOTICE** |
| **SILMA TTS (Model Weights)** | External Weights (`silma-ai/silma-tts`) | SILMA AI | Apache-2.0 License | Permitted under Apache-2.0 | Required (Notice) | Permitted | **PASS WITH NOTICE** |
| **Generated Hadith Audio (42 WAV)** | `public/audio/hadis/*.wav` | AI Speech Output (SILMA Arabic TTS v1) | Unlicensed / Synthetic Speech | Unverified | Disclaimer Recommended | Permitted with Disclaimer | **NEEDS HUMAN REVIEW** |
| **Reference Voice Consent** | Used in SILMA TTS synthesis | Upstream sample (`ar.ref.24k.wav`) | Undisclosed / Unknown | Unverified | Unknown | Unverified | **UNKNOWN** |
| **Classical Arabic Hadith Text** | `data/hadis.ts`, `hadis_arbain_arab.csv` | Imam An-Nawawi (d. 1277 CE) | Historical (Term Expired) | Permitted | None (Classical) | Permitted | **NEEDS HUMAN REVIEW** *(for specific modern edition)* |
| **Indonesian Translation** | `data/hadis.ts` (`terjemahan`) | Unverified / Adapted for project | Unverified modern text | Unverified | Depends on source | Review Required | **NEEDS HUMAN REVIEW** |
| **Transliteration (Latin)** | `data/hadis.ts` (`transliterasi`) | Unverified / Project phonetic text | Unverified phonetic guide | Unverified | Depends on source | Review Required | **NEEDS HUMAN REVIEW** |
| **Pedagogical Metadata** | `data/hadis.ts` (`urgensi`, `konteks`, `kataPilihan`) | DengarBain Authors | MIT License (Original) | Permitted | Required | Permitted | **PASS** |
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
  - Generated synthetic speech output does not automatically inherit the MIT License of the inference software or the Apache-2.0 License of the model weights.
  - The repository must not claim that the audio files themselves are "MIT licensed" or "Apache licensed" without explicit legal entitlement.
  - SILMA AI guidelines state: *"Be Transparent: Always clearly disclose that the audio is AI-generated when sharing it."*

---

## 7. Reference Voice Provenance

- **Inference Parameter**: In SILMA Arabic TTS v1, voice synthesis relies on reference audio prompting (e.g. `ar.ref.24k.wav` with corresponding Arabic reference text).
- **Upstream Origin**: The sample `ar.ref.24k.wav` is provided inside the SILMA repository (`src/silma_tts/infer/ref_audio_samples/ar.ref.24k.wav`) for demonstration.
- **Speaker Identity & Consent**:
  - Upstream documentation does not publish the name or identity of the speaker whose voice sample is in `ar.ref.24k.wav`.
  - Upstream documentation does not provide a public consent or release agreement from the speaker.
  - **Status**: **`PROVENANCE OF REFERENCE SPEAKER SAMPLE UNKNOWN — HUMAN REVIEW REQUIRED`**.

---

## 8. Hadith Text Provenance

- **Historical Foundation**: The underlying compilation *Al-Arba'in An-Nawawiyyah* was authored by Imam Abu Zakariya Yahya bin Sharaf An-Nawawi (631–676 H / 1233–1277 CE). The original classical Arabic work is historical and its original copyright term has long expired.
- **Modern Editorial Consideration**: Specific digital editions, transcriptions, typography, and vocalizations (*tashkeel/harakat*) may have separate provenance.
- **Repository Evidence**: `data/hadis.ts` and `hadis_arbain_arab.csv` contain full diacritics, but do not record the specific printed edition or digital database from which the text was extracted.
- **Status**: **`NEEDS HUMAN REVIEW`** *(Maintainers should record the specific edition/source)*.

---

## 9. Translation Provenance

- **Dataset**: `data/hadis.ts` (`terjemahan` field).
- **Analysis**: Modern translations of historical texts constitute independent copyrightable works.
- **Repository Evidence**: The Indonesian translations use simplified sentences formatted for accessibility and screen reader listening. However, the Git history does not document whether the translations were:
  - Translated directly from Arabic by the DengarBain team; or
  - Adapted from a specific published book (e.g., *Terjemah Hadits Arbain* Kementerian Agama RI, Pustaka Imam Asy-Syafi'i, Darul Haq, etc.).
- **Status**: **`NEEDS HUMAN REVIEW`**. Maintainers must formally document the translation authorship or source.

---

## 10. Transliteration Provenance

- **Dataset**: `data/hadis.ts` (`transliterasi` field).
- **Analysis**: Romanized phonetic transcriptions.
- **Status**: **`NEEDS HUMAN REVIEW`**. Specific source/authorship must be recorded by maintainers.

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

- Commit `HEAD` review (`git diff HEAD^ HEAD`):
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

## 16. Confirmed Compliance

- [x] DengarBain original source code is properly licensed under MIT with correct author copyright notices.
- [x] All client runtime npm dependencies are MIT licensed.
- [x] No copyleft licenses affect the client production distribution.
- [x] Web fonts are remotely loaded under the SIL Open Font License 1.1.
- [x] SILMA TTS code (MIT) and model weights (Apache-2.0) are accurately separated and attributed.
- [x] Pedagogical metadata (`urgensi`, `konteks`, `kataPilihan`) is original project work.

---

## 17. Unresolved Issues

- [ ] Modern editorial edition and transcription source of Arabic Hadith texts in `data/hadis.ts` and `hadis_arbain_arab.csv` are unrecorded.
- [ ] Authorship and source of Indonesian translations in `data/hadis.ts` are unrecorded.
- [ ] Source of transliteration strings in `data/hadis.ts` is unrecorded.
- [ ] Speaker identity and consent for the voice reference sample used during SILMA TTS synthesis are unverified.

---

## 18. Remediation Performed

1. **Created `THIRD-PARTY-NOTICES.md`**: Transparently documented all third-party models, licenses, fonts, dependencies, and disclaimers.
2. **Updated `README.md`**: Clarified licensing boundaries between DengarBain source code (MIT) and external assets.
3. **Updated `public/audio/hadis/README.md`**: Separated SILMA code (MIT) vs weights (Apache-2.0), described audio as AI-generated speech, and flagged reference voice provenance for review.
4. **Added `"license": "MIT"` to `package.json`**: Fixed package manager metadata.
5. **Corrected In-App License Page**: Fixed author name spelling and clarified source code scope.
6. **Configured ESLint & Build Validation**: Verified `npm run lint` (0 errors) and `npm run build` (57/57 static pages compiled successfully).

---

## 19. Final Compliance Status

```
===================================================================
OVERALL REPOSITORY STATUS: NEEDS HUMAN REVIEW
===================================================================
- DengarBain Source Code:       PASS (MIT License)
- Runtime npm Dependencies:     PASS (MIT License)
- Dev npm Dependencies:         PASS (MIT / Apache-2.0 / MPL-2.0 Dev-only)
- Fonts & Typography:           PASS (SIL OFL 1.1, Remotely Loaded)
- SILMA TTS Integration:        PASS WITH NOTICE (Code MIT, Weights Apache-2.0)
- Arabic Hadith Text Edition:   NEEDS HUMAN REVIEW (Classical, edition unrecorded)
- Indonesian Translation:       NEEDS HUMAN REVIEW (Provenance unrecorded)
- Transliteration (Latin):      NEEDS HUMAN REVIEW (Provenance unrecorded)
- Generated Audio (42 WAV):     NEEDS HUMAN REVIEW (AI-Generated Speech)
- Reference Voice Consent:      UNKNOWN (Upstream speaker undisclosed)
===================================================================
```

---

## 20. Human Review Required

The following items cannot be established from repository records alone and require confirmation by the project maintainers:

1. **Indonesian Translation Authorship (`data/hadis.ts`)**:
   - *Question for Maintainers*: Were the 42 Indonesian Hadith translations translated directly from Arabic by the DengarBain authors, or were they adapted/copied from a specific published book or website?
   - *Required Action*: Record the author or specific book title, publisher, and year in `THIRD-PARTY-NOTICES.md`.

2. **Arabic Hadith Edition & Transcription (`hadis_arbain_arab.csv`, `data/hadis.ts`)**:
   - *Question for Maintainers*: Which printed edition, tahqiq, or digital dataset was used as the source for the Arabic matan and diacritics (*harakat*)?
   - *Required Action*: Record the specific edition/database in `THIRD-PARTY-NOTICES.md`.

3. **Transliteration Source (`data/hadis.ts`)**:
   - *Question for Maintainers*: Was the Latin transliteration written manually by the team or sourced from an external publication?
   - *Required Action*: Document the transliteration system or source.

4. **Reference Voice Sample Consent for Audio Generation (`public/audio/hadis/*.wav`)**:
   - *Question for Maintainers*: Was the audio synthesized using the default SILMA demo reference sample (`ar.ref.24k.wav`) or a custom recorded voice?
   - *Required Action*: Confirm whether the reference speaker has provided permission for voice cloning in this non-profit educational application.
