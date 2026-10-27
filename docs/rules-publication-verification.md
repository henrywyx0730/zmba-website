# Rules Publication Verification

This checklist records the source-to-publication review for the two documents explicitly approved for full public release. It is a maintenance record and is not rendered on the public website.

## ZMBA 25-26赛季规则手册

- Source document: `ZMBA 25-26赛季规则手册.docx`
- Public route: `/rules/2025-26`
- Source structure: title page content, eight titled sections, 86 non-empty body paragraphs, ordered rules, nested bullet clauses, no tables, no footnotes, and no endnotes.
- Publication representation: `src/content/rules.ts`, rendered by `src/components/rules-document.tsx`.

Verification performed:

- [x] Original title, title-page lines, and section order are represented.
- [x] All eight titled sections are included in source order.
- [x] All 86 non-empty Word body paragraphs have an exact string match in `src/content/rules.ts`.
- [x] Word numbered-rule groups are rendered as ordered lists; nested Word bullet clauses are rendered as nested unordered lists.
- [x] The contents navigation is an unnumbered list because every source chapter name already includes its own Chinese chapter number.
- [x] Each bilingual provision is represented by one list item containing its related Chinese and English paragraphs; the English translation does not create a second rule number.
- [x] In the fouls section, Word generates a separate marker for the first English explanation. The website intentionally groups that explanation with its corresponding Chinese provision as one logical bilingual item. The published page therefore shows four numbered foul provisions rather than Word's five generated markers; no wording was changed.
- [x] Numeric values and rule-specific figures, including 14, 24, 8, 5, 2, 3, and NBA 2024-25, were retained as source text.
- [x] No source tables, footnotes, or endnotes exist to reproduce.
- [x] The package contains one JPEG: it is a ZMBA logo on the title page, not a substantive diagram or rule illustration. It is not separately reproduced because the site already uses the official logo asset and no rule meaning depends on the image.
- [x] No source text has been translated, summarized, or substantively added.

## ZMBA群规行为准则(2025 Edition)

- Source document: `ZMBA群规行为准则(2025 Edition).docx`
- Public route: `/rules/code-of-conduct-2025`
- Source structure: preface, five titled sections, 23 non-empty body paragraphs, no Word list definitions, no tables, no footnotes, no endnotes, and no embedded media.
- Publication representation: `src/content/rules.ts`, rendered by `src/components/rules-document.tsx`.

Verification performed:

- [x] Preface, all five titled sections, and the closing paragraph are included in source order.
- [x] All 23 non-empty Word body paragraphs have an exact string match in `src/content/rules.ts`.
- [x] The document has no tables, footnotes, endnotes, diagrams, or images to reproduce.
- [x] Dates and the `1-3天` interval remain unchanged.
- [x] No source text has been translated, summarized, or substantively added.

## Privacy and release review

- [x] Reviewed package parts for comments, embedded objects, hyperlinks, tables, footnotes, and endnotes.
- [x] Neither approved document contains credentials, private contact details, or unpublished player evaluations in its substantive body.
- [x] DOCX core metadata includes author, last-modified-by, revision, and timestamp fields. These private file metadata fields are not copied to the public site.
- [x] The Commissioner Handbook, Birthdays workbook, and every other unapproved source are not used by the publication routes.

## Known presentation limits

- The Word rulebook uses automatic list numbering and bullet definitions. The website preserves the observed ordered and nested list hierarchy; no hidden Word style metadata is exposed.
- The code-of-conduct document has no in-body document title. Its reading-page title uses the approved original filename/title supplied for publication.
