# Product Identity

- This is the active official ZhongMei Basketball Association website.
- It is not archive-first.
- ZMBA remains an active student-led basketball association within Jinling High School ZhongMei.
- Historical material supports the living organization rather than replacing it.

# Factual Integrity

- `src/content/zmba.ts` is the structured factual source of truth.
- Never invent scores, MVPs, teams, participants, locations, statistics, leadership facts, event titles, social URLs, or dates.
- Unknown information must remain unknown or be elegantly omitted from public UI.
- Never expose private information merely because it exists in source files.
- Birthdays are private.
- Internal evaluations, credentials, account information, and unpublished private material must not be surfaced.

# Source Assets

- Original ZMBA materials live outside the website repository at `/Users/wuyuxian/Desktop/Interests/Basketball/ZMBA`.
- Never modify, rename, relocate, delete, or overwrite those originals.
- Copy only selected assets needed by the website into the website repository.
- Real ZMBA assets should drive design decisions.
- Do not use generic basketball stock imagery.

# Design Workflow

- For substantial visual/frontend work, use `$design-taste-frontend` and `$ui-design`.
- Use actual rendered browser QA for meaningful UI changes.
- Avoid generic AI website aesthetics.
- Do not imitate the NBA or fabricate professional-league complexity.

# Engineering

- Keep the Next.js App Router architecture.
- Prefer Server Components unless client behavior is genuinely required.
- Avoid unnecessary dependencies.
- Do not introduce a database, CMS, authentication, analytics, Prisma, or UI framework without a real requirement.
- Run `npm run build` and `git diff --check` before completion.
- Preserve unrelated user work.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
