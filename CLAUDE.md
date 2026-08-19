# Portfolio

Personal website for Alessandro Felici. React 19 + Vite + TypeScript + Tailwind CSS v4.

## Before touching any UI

**Read [DESIGN.md](./DESIGN.md) first.** It holds the design tokens, component recipes, the
Figma source of truth, and the rules that keep the visual system coherent. The short version:

- Never write raw hex values — use the `@theme` tokens in `src/index.css`
  (`bg-cream`, `text-ink-soft`, `border-line`, `font-display`, `rounded-sharp`, …)
- One radius (`rounded-sharp`, 2px), one accent (yellow), 1px borders, no shadows
- Reuse the primitives in `src/components/ui.tsx` instead of re-deriving class strings
- Fraunces (`font-display`) for headings only; Work Sans (`font-body`) for everything else

## Content

All copy and resume data lives in `src/data/*.ts`, sourced from `~/resume/sections/*.md`.
Components render data — they never hardcode content. The downloadable resume is
`public/experience.md`, referenced through `profile.resumeFile`.

When the resume changes, update both `src/data/*.ts` and `public/experience.md`.

## Commands

```bash
npm install
npm run dev        # vite dev server
npm run build      # typecheck + production build
npm run typecheck  # tsc --noEmit
```

## Layout

```
src/
  index.css          design tokens (@theme) + base styles — start here
  App.tsx            section composition
  components/
    ui.tsx           Container, Divider, SectionHeading, Card, Tag, buttons
    icons.tsx        SVGs ported from Figma; currentColor, size prop
    Nav / Hero / Projects / WorkHistory / About / Footer / ResumeModal
  data/              profile, experience, projects, education, skills, leadership
public/experience.md downloadable resume
```
