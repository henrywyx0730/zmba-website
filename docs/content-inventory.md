# ZMBA Content Inventory and Factual Audit

## Audit boundary

Sources were read in place under the parent ZMBA source-material directory. No original file was moved, renamed, edited, converted, or overwritten. The public implementation uses a small, curated set of working copies and non-destructive web derivatives inside `public/images`; the originals remain untouched. The data registry records source provenance and deliberately excludes private data.

## Brand asset

- `ZMBA.jpg`: likely primary brand asset. JPEG, 1472 × 1452 pixels, near-square. It depicts a blue-and-gold shield with a school-building motif, `ZMBA`, `Zhong Mei Basketball Association`, and `2023`. A resized working copy is used at `public/images/brand/zmba-mark.jpg`; the logo was not redesigned.

## Document classification

| Source | Findings | Publication classification |
| --- | --- | --- |
| `ZMBA 25-26赛季规则手册.docx` | Bilingual competition rules: fouls, violations, technical/unsportsmanlike/flagrant/disqualifying fouls, challenges, and officiating authority. | Candidate public competition rules, subject to confirmation that this edition is current and approved for web publication. |
| `ZMBA群规行为准则(2025 Edition).docx` | Community expectations: respect, civil discussion, anti-harassment/discrimination, consequences, and appeals. | Candidate public code of conduct. Administrative enforcement details should be reviewed before publication. |
| `Handbook for ZMBA Commissioner (2025 Edition).docx` | Succession, event operations, social-media workflow, photo watermarking, archival practice, and team-role recommendations. It also contains account identifiers and login/transfer instructions. | Governance/internal commissioner guidance. Never publish credentials, account-management details, phone-binding instructions, or other operational access information. |
| `ZMBA图鉴.docx` | Two leadership/player profiles: Henry Wu / 吴昱贤 and Lucian / 鲁东言. Fields include name, basketball position, active period, title, prose player bio, technical strengths/weaknesses, and honors/roles. | Supports a People section for confirmed leadership names, titles, and service periods. Player evaluations, positions, detailed bios, and other profile fields need explicit approval from the people concerned before publication. |
| `Birthdays.xlsx` | One sheet (`Sheet1`), 48 rows (47 data rows), with date/year/name columns. | Private personal-data roster. Birthday values and names are excluded from all website source files and public content. |

## Leadership facts supported by source review

- Henry Wu / 吴昱贤: Founder & 1st Commissioner. The profile records a May 2023–May 2025 active period.
- Lucian / 鲁东言: 2nd Commissioner. The profile records a May 2025–present active period; the product brief treats Lucian as incumbent based on confirmed project information.

## Evidence-based event and media mapping

The date labels below use folder/filename evidence. Where source material does not establish an event's name, format, result, or participants, those fields remain unknown.

| Source group | Website taxonomy | Evidence-backed event type | Available media | Known participants/result/honors | Still requires confirmation |
| --- | --- | --- | --- | --- | --- |
| 2023-05-25 | Founding Era / Inaugural Events | Unknown; dated photograph only | 1 JPG photo | None established | Event name/type, participants, location, result, honors, publication approval |
| 2023-06-01 | Founding Era / Inaugural Events | Unknown; a video filename references free throws, but does not establish a complete event | 1 JPG photo, 1 MP4 video | None established | Event name/type, participants, location, result, honors, publication approval |
| 2024-05-24 | 2023–24 | Unknown; dated folder only | 2 PNG files (their file signatures identify them as JPEG image data) | None established | Event name/type, participants, location, result, honors, publication approval |
| 2025-04-03 | 2024–25 | Unknown; dated folder only | 4 MP4 videos and 1 PNG named `Background.png` | None established | Event name/type, role of background image, participants, location, result, honors, publication approval |
| 2025-04-27 | 2024–25 | Unknown; dated folder only | 11 photos (10 JPG, 1 PNG) | None established | Event name/type, participants, location, result, honors, publication approval |
| 2025-05-29 All-Star | 2024–25 | 2025 ZMB All-Star Game, established by poster | 1 three-page PDF poster; 2 JPG photos; 1 HEIC photo | Poster identifies an All-Star roster, host/referee, and a postgame award ceremony. The roster and headshots are not imported pending publication clearance. No final result or honors are supplied. | Exact participant-publication approval, final result, awards/honors, photo publication approval |
| 2025-10-09 | 2025–26 | Unknown; dated folder only | 5 JPG photos | None established | Event name/type, participants, location, result, honors, publication approval |

### Additional All-Star poster evidence

The first poster page specifies 29 May at 5:00 PM CST, Northern Basketball Court, five 10-minute periods, boys' 5v5 in periods 1/2/4/5, girls' 3v3 in period 3, and a postgame award ceremony. Its explicit roster is source evidence, but individual roster names, photographs, and school-year information are deliberately not imported into the public data model pending consent and publication approval.

## Source inventory

- Documents inspected: four DOCX files listed in the classification table and `Birthdays.xlsx`.
- Brand asset inspected: `ZMBA.jpg`.
- Media inventoried: dated groups for 2023-05-25, 2023-06-01, 2024-05-24, 2025-04-03, 2025-04-27, 2025-05-29 All-Star, and 2025-10-09.
- The All-Star PDF was visually reviewed from temporary renderings only; its three source pages were not altered.

## Selected public working assets

The following assets are deliberately limited to material needed by the first public release. Each has an entry in `src/content/zmba.ts` with its date, source path, public path, dimensions, media kind, and neutral alternative text.

- Brand: one resized copy of `ZMBA.jpg`.
- 2023-05-25: one resized court photograph.
- 2023-06-01: one still extracted from the free-throw video.
- 2024-05-24: one resized court photograph.
- 2025-04-03: one still extracted from a dated video.
- 2025-04-27: one resized court photograph.
- 2025-05-29 All-Star: the verified first poster page only; roster pages were not copied.
- 2025-10-09: two resized court photographs.

No source video was transcoded for the site. No roster page, birthday record, profile headshot, or internal document was copied into the public asset tree.

## Explicitly excluded from repository content

- Birthday dates, years, and roster names from `Birthdays.xlsx`.
- Account identifiers, passwords, binding/transfer steps, and other access details from the commissioner handbook.
- Unapproved player evaluations, physical/skill assessments, headshots, class-year labels, and roster data from `ZMBA图鉴.docx` and the All-Star poster.
- Guessed scores, teams, MVPs, event descriptions, venues, or social URLs.
