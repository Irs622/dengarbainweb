# License & Third-Party Compliance Audit Report

**Target Repository**: `Irs622/dengarbainweb`  
**Project Name**: DengarBain (Web Accessibility Platform for Blind Users)  
**Auditor**: Open-Source Licensing & Compliance Auditor  
**Date of Audit**: 2026-08-23  

---

## Executive Summary

A comprehensive license, provenance, and third-party compliance audit was conducted on the entire `dengarbainweb` codebase, public assets, audio datasets, translations, fonts, and npm dependency graphs.

**Key Findings**:
1. **Core Source Code**: The original Next.js/TypeScript application source code is authored by Irsal Shydiq & Fardho Dzurrahman and is appropriately licensed under the **MIT License**.
2. **AI Speech Synthesis (SILMA TTS)**: The 42 Arabic Hadith audio files were synthesized offline using the open-source **SILMA Arabic TTS v1** model. Upstream licensing has been strictly delineated: SILMA TTS source code is under the **MIT License**, while pretrained model weights are under the **Apache-2.0 License**. The generated audio waveform files themselves are AI-generated synthetic outputs and must not be conflated as inheriting MIT/Apache-2.0 automatically.
3. **Audio Provenance & Reference Voice**: While the SILMA TTS model is permissively licensed, the provenance and explicit consent of the underlying voice reference sample used during TTS cloning is not documented in repository commits (*PROVENANCE UNKNOWN — HUMAN REVIEW REQUIRED*).
4. **Hadith Datasets**: The Arabic text of the 42 Hadith Arbain An-Nawawiyah is a 13th-century classical Islamic compilation in the **Public Domain**. Modern Indonesian translations and transliterations require formal source confirmation (*NEEDS HUMAN REVIEW*).
5. **Fonts, Icons, and Images**: All web typography (Plus Jakarta Sans, Amiri, Playfair Display) is governed by the **SIL Open Font License 1.1 (OFL)**. UI icons are custom inline SVGs.
6. **npm Dependencies**: No copyleft (GPL/AGPL) conflicts exist. All client runtime dependencies (`next`, `react`, `react-dom`) are under permissive licenses (**MIT**).

---

## Repository Inventory

| Category | Item / Directory Path | Total Count | Format / Ext | Description & Function |
| :--- | :--- | :--- | :--- | :--- |
| **Source Code (App)** | `app/` | 13 routes / 57 SSG | `.tsx`, `.ts`, `.css` | Next.js 15 App Router pages, layout, and global stylesheet |
| **Source Code (Components)** | `components/` | 13 files | `.tsx` | Reusable accessible UI components, player, legal layouts |
| **Source Code (Context & Lib)** | `context/`, `lib/` | 3 files | `.ts`, `.tsx` | PWA installation state, audio progress context, IndexedDB helper |
| **Datasets** | `data/hadis.ts`, `hadis_arbain_arab.csv` | 2 files | `.ts`, `.csv` | 42 Hadith texts, translations, metadata, keywords |
| **Audio Files** | `public/audio/hadis/` | 42 files | `.wav` | AI-generated audio recitations for Hadith 01 to 42 |
| **Brand & Images** | `public/brand/`, `public/images/` | 3 files | `.png` | Logos (`dengarbain-primary`, `dengarbain-secondary`) and tutorial artwork |
| **PWA & Offline** | `public/manifest.json`, `public/sw.js` | 2 files | `.json`, `.js` | Web App Manifest and Service Worker v2 |
| **Documentation** | Root & `docs/`, `screenshots/` | 8 files | `.md` | Architectural specs, a11y case studies, testing guides, contributing rules |
| **Package Metadata** | `package.json`, `package-lock.json` | 2 files | `.json` | Dependency declarations and lockfile |

---

## License Matrix

| Component | Path | Apparent Origin / Author | Declared / Upstream License | Commercial Use | Attribution Req. | Redistribution | Compliance Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **DengarBain Source Code** | `app/`, `components/`, `lib/`, `context/` | Irsal Shydiq & Fardho Dzurrahman | MIT License | Permitted | Required (License Notice) | Permitted | **PASS** |
| **SILMA TTS (Inference Code)** | External Tool (`SILMA-AI/silma-tts`) | SILMA AI / Karim Ouda | MIT License | Permitted | Required | Permitted | **PASS WITH NOTICE** |
| **SILMA TTS (Weights)** | External Weights (`silma-ai/silma-tts`) | SILMA AI | Apache-2.0 License | Permitted | Required (Notice) | Permitted | **PASS WITH NOTICE** |
| **Generated Hadith Audio** | `public/audio/hadis/*.wav` | AI Output (SILMA Arabic TTS v1) | AI-Generated Derivative | Unverified | Disclaimer Recommended | Permitted with Disclaimer | **NEEDS REVIEW** |
| **Matan Arab Hadis** | `data/hadis.ts`, `hadis_arbain_arab.csv` | Imam An-Nawawi (d. 1277 CE) | Public Domain | Permitted | None (Classical) | Permitted | **PASS** |
| **Indonesian Translation** | `data/hadis.ts` | Unknown / Adapted for project | Unverified modern text | Unverified | Depends on original source | Review Required | **NEEDS REVIEW** |
| **Transliteration (Latin)** | `data/hadis.ts` | Project Authors / External | Unverified phonetic guide | Unverified | Depends on source | Review Required | **NEEDS REVIEW** |
| **Pedagogical Metadata** | `data/hadis.ts` (`urgensi`, `konteks`, `kataPilihan`) | DengarBain Authors | MIT License (Original) | Permitted | Required | Permitted | **PASS** |
| **Plus Jakarta Sans Font** | Google Fonts CDN | Tokotype (Gumpita Rahayu) | SIL Open Font License 1.1 | Permitted | OFL Notice | Permitted | **PASS** |
| **Amiri Arabic Font** | Google Fonts CDN | Khaled Hosny | SIL Open Font License 1.1 | Permitted | OFL Notice | Permitted | **PASS** |
| **Playfair Display Font** | Google Fonts CDN | Claus Eggers Sørensen | SIL Open Font License 1.1 | Permitted | OFL Notice | Permitted | **PASS** |
| **DengarBain Logos** | `public/brand/*.png` | DengarBain Project | Copyright (c) 2026 Authors | Restricted / Project Brand | Required | Project Only | **PASS** |
| **Tutorial Artwork** | `public/images/menguasai-dengarbain.png` | DengarBain Project | Copyright (c) 2026 Authors | Permitted | Required | Permitted | **PASS** |
| **Direct npm Runtime** | `package.json` (`next`, `react`, `react-dom`) | Vercel, Meta / React Team | MIT License | Permitted | Standard MIT Notice | Permitted | **PASS** |
| **Dev npm Dependencies** | `package.json` (`typescript`, `eslint`, `@types/*`) | Microsoft, OpenJS Foundation | Apache-2.0 / MIT | Permitted | Standard Notice | Permitted | **PASS** |

---

## SILMA TTS Analysis

- **Official Repository**: `https://github.com/SILMA-AI/silma-tts`
- **HuggingFace Weights**: `https://huggingface.co/silma-ai/silma-tts`
- **License Segmentation**:
  - Code: **MIT License** (Copyright (c) 2026 SILMA AI)
  - Model Weights: **Apache License 2.0**
- **Upstream Foundations**:
  - *F5-TTS*: Non-autoregressive flow-matching speech synthesis base (MIT).
  - *CATT*: Arabic text diacritization tool.
  - *NVIDIA NeMo Text Processing*: Normalization pipeline (Apache 2.0).
- **Redistribution Assessment**: DengarBain does **not** bundle or redistribute the Python source code, CATT modules, or multi-gigabyte PyTorch weight checkpoints directly in this repository. DengarBain only packages the resulting synthetic waveform files (`.wav`).
- **Remediation**: Corrected documentation to strictly separate the code license (MIT) from the weight license (Apache-2.0) and avoided false combined claims like `"Apache-2.0 / MIT"`.

---

## Generated Audio Analysis

- **Files**: `public/audio/hadis/hadis-01.wav` through `hadis-42.wav` (Total: 42 files).
- **Generation Method**: Synthesized using SILMA Arabic TTS v1 diffusion inference.
- **Legal Status of AI Output**:
  - Synthetic audio generated by an AI model is **not** automatically licensed under MIT or Apache-2.0 simply because the generator software or weights are open source.
  - SILMA AI guidelines require: *"Be Transparent: Always clearly disclose that the audio is AI-generated when sharing it."*
- **Voice Clone / Speaker Consent**:
  - The TTS generation relies on reference audio prompting (e.g. `ref_audio_samples/ar.ref.24k.wav`).
  - The repository does not contain documentation or consent forms regarding the real-world identity of the reference speaker.
  - **Verdict**: Marked as `PROVENANCE UNKNOWN — HUMAN REVIEW REQUIRED`.

---

## Hadith Data Provenance

1. **Arabic Matan (`arab`)**:
   - The collection of 42 Hadith Arbain compiled by Imam Yahya bin Sharaf An-Nawawi (1233–1277 CE) is historically in the **Public Domain**.
2. **Hadith Explanations (`urgensi`, `konteks`, `kataPilihan`)**:
   - Pedagogical explanations designed specifically for blind students in simplified Indonesian. These represent original work created for DengarBain and are licensed under the project's MIT License.

---

## Translation Analysis

- **Dataset**: `data/hadis.ts` (`terjemahan` field for all 42 Hadiths).
- **Legal Consideration**: In copyright law, modern translations of historical public-domain texts are treated as derivative works that hold independent copyright.
- **Repository Evidence**: The Indonesian translations in `data/hadis.ts` feature simplified, non-visual sentence phrasing. However, the repository lacks explicit provenance records proving whether these translations were written entirely from scratch by the authors or adapted from a specific published book (e.g. *Terjemah Hadits Arbain Depag RI* or *Pustaka Imam Syafi'i*).
- **Verdict**: Marked as `NEEDS HUMAN REVIEW`. Maintainers must record the exact source or assert original authorship.

---

## Transliteration Analysis

- **Dataset**: `data/hadis.ts` (`transliterasi` field).
- **Analysis**: The romanized phonetic transliterations follow standard Indonesian-Arabic transliteration guidelines.
- **Verdict**: Marked as `NEEDS HUMAN REVIEW` for source attribution consistency.

---

## Fonts / Icons / Images

1. **Fonts**:
   - **Plus Jakarta Sans**: SIL Open Font License 1.1.
   - **Amiri**: SIL Open Font License 1.1.
   - **Playfair Display**: SIL Open Font License 1.1.
   - Loaded externally via Google Fonts CDN; no proprietary font binaries are bundled illegally.
2. **Icons**:
   - All UI icons are inline vector SVGs authored directly in TSX components.
3. **Images & Logos**:
   - `public/brand/*.png`: Original project branding for DengarBain.
   - `public/images/menguasai-dengarbain.png`: Original educational artwork.

---

## NPM Dependency License Analysis

Automated license scanner (`license-checker`) was executed across all direct and transitive dependencies:

- **Total Analyzed Packages**: ~304
- **Distribution**:
  - MIT: 256 packages
  - Apache-2.0: 22 packages
  - ISC: 11 packages
  - BSD-2-Clause: 7 packages
  - BSD-3-Clause: 2 packages
  - 0BSD / CC0 / BlueOak: 3 packages
  - CC-BY-4.0: 1 package (`caniuse-lite`)
  - MPL-2.0: 1 package (`axe-core`, transitive devDependency only under ESLint)
  - LGPL-3.0-or-later: 1 package (`@img/sharp-libvips-*`, optional build-time tool)
- **Copyleft Risk**: **0% (Zero)**. No GPL or AGPL copyleft packages are present. No copyleft obligations are imposed on the distributed client web bundle.

---

## Git History Findings

- **First Commit**: Commit `731812d` initialized the repository under the MIT License.
- **Audio Commit**: Commit `cefb8d7` (`feat: tambahkan 42 berkas audio hadis WAV dan dataset CSV teks Arab`) added all 42 `.wav` files.
- **Secret Leaks**: Comprehensive git history log scan for `.env*` revealed only `.env.example` with dummy placeholders (`your_access_key_here`, `postgresql://user:password@localhost:5432/...`). No real credentials, private keys, or API tokens were ever committed to Git history.

---

## Credential Findings

- **Status**: **PASS (Clean)**.
- `.env.local` is listed in `.gitignore`.
- Production credentials are injected via Vercel Environment Variables and are not stored in the repository.

---

## Confirmed Compliance Issues

1. **`package.json` Missing License Field**: `package.json` was missing `"license": "MIT"`, causing package managers to flag the repository root as `"UNLICENSED"`. *(Remediated)*
2. **Ambiguous License Claims in Documentation**: Earlier documentation stated "everything is MIT" or combined SILMA TTS licenses as "Apache-2.0 / MIT". *(Remediated)*
3. **Typo in In-App License Page**: `app/settings/about/license/page.tsx` contained a minor typo in co-author's name ("Fardho Zurrahman" instead of "Fardho Dzurrahman"). *(Remediated)*

---

## Unknown / Human Review Required

1. **Reference Speaker Consent for AI Audio**: The explicit identity, source, and consent documentation for the voice reference sample used to synthesize the 42 `.wav` files via SILMA TTS cannot be determined from Git records.
2. **Hadith Translation & Transliteration Source**: Whether the Indonesian translation strings in `data/hadis.ts` are 100% original translations authored by the team or adapted from an existing published book must be verified by the maintainers.

---

## Remediation Performed

1. **Created `THIRD-PARTY-NOTICES.md`**: Exhaustively documented all third-party models, licenses, fonts, dependencies, and disclaimers without making false legal claims.
2. **Added `"license": "MIT"` to `package.json`**: Explicitly set package license field.
3. **Updated `README.md`**: Replaced broad "all MIT" statements with precise language distinguishing the original source code (MIT) from third-party assets, datasets, fonts, and generated audio.
4. **Updated `public/audio/hadis/README.md`**: Delineated SILMA TTS code (MIT) vs weights (Apache-2.0), added AI-generated speech disclaimers, and noted reference speaker review status.
5. **Updated `app/settings/about/license/page.tsx`**: Corrected author name spelling and clarified that the MIT license covers the DengarBain source code.
6. **Produced `docs/LICENSE-COMPLIANCE-AUDIT.md`**: Complete auditing deliverable.

---

## Remaining Actions

1. [ ] **Maintainer Review**: Verify whether `data/hadis.ts` Indonesian translations are original or adapted from a specific publisher, and update `THIRD-PARTY-NOTICES.md` with source details if applicable.
2. [ ] **Audio Voice Reference Confirmation**: Review the origin of the reference audio sample used during SILMA TTS synthesis to confirm that it complies with voice cloning ethics guidelines.

---

## Final Compliance Status

### **PASS WITH NOTICE (NEEDS HUMAN REVIEW ON SPECIFIC PROVENANCE)**

The repository's source code, build dependencies, fonts, and PWA assets are fully compliant with open-source distribution standards. Transparent notices and disclaimers have been established for the AI-generated audio and religious datasets.

---

## Human Review Required

The following items cannot be fully verified from Git history alone and require human maintainer confirmation:
1. **Source of Indonesian Translations (`data/hadis.ts`)**: Specify if original or adapted from a specific publisher.
2. **Reference Audio Consent for AI Speech (`public/audio/hadis/*.wav`)**: Confirm the origin and permission of the voice reference sample used in SILMA TTS.
