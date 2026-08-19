# Portfolio

Personal website for **Alessandro Felici** — software engineer, CS @ Michigan State.

Built from a [Figma Make design](https://www.figma.com/make/gesOYyUtfe2Yibc8g7fuR4/Personal-website-design)
with content sourced from `~/resume/sections/`.

## Stack

React 19 · TypeScript · Vite · Tailwind CSS v4

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).

```bash
npm run build      # typecheck + production build to dist/
npm run preview    # serve the production build
npm run typecheck  # tsc --noEmit
```

## Working on this

- **[DESIGN.md](./DESIGN.md)** — design tokens, component recipes, and the rules of the visual
  system. Read it before writing UI code.
- **[CLAUDE.md](./CLAUDE.md)** — orientation for AI agents working in the repo.

Content lives in `src/data/*.ts`, not in components. The downloadable resume is
`public/experience.md`.

## Before it goes live

- [ ] Swap the hero monogram for a real photo (see the note in `src/components/Hero.tsx`)
- [ ] Add `repo` URLs to entries in `src/data/projects.ts` to bring back the yellow GitHub pills
- [ ] Optionally replace `public/experience.md` with a PDF and update `profile.resumeFile`
