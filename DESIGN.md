# Design System: Portfolio

**Read this before writing any UI code in this repo.** It is the contract between the Figma
design and the code. Everything here is enforceable by reading `src/index.css` and
`src/components/ui.tsx`; this file explains the *why* so changes stay coherent.

---

## 1. Source of truth

| | |
|---|---|
| **Figma file** | Personal website design (Figma Make) |
| **URL** | https://www.figma.com/make/gesOYyUtfe2Yibc8g7fuR4/Personal-website-design |
| **File key** | `gesOYyUtfe2Yibc8g7fuR4` |
| **Type** | Figma **Make** file: the design *is* a React + Vite + Tailwind v4 app, not a canvas of frames |

Because it is a Make file, its source is read with the Figma MCP tools like this:

```
get_design_context(fileKey: "gesOYyUtfe2Yibc8g7fuR4", nodeId: "0:1")
# → returns resource links; then read each with ReadMcpResourceTool, e.g.
#   file://figma/make/source/gesOYyUtfe2Yibc8g7fuR4/src/App.tsx
#   file://figma/make/source/gesOYyUtfe2Yibc8g7fuR4/src/index.css
```

`get_metadata`, `get_screenshot`, and `get_variable_defs` do **not** work on `/make/` URLs.
There are no Figma variables or published component libraries backing this design: the tokens
below were lifted from the Make file's `@theme` block and its inline styles.

**Content source of truth is separate:** all resume material comes from `~/resume/sections/*.md`
(and `~/resume/master_doc.tex` for the contact header). When the resume changes, update
`src/data/*.ts` and re-export the PDF into `public/documents/`: never hardcode content into
components.

---

## 2. Stack

- **React 19** + **TypeScript** (strict)
- **Vite 7**
- **Tailwind CSS v4** via `@tailwindcss/vite`: no `tailwind.config.js`, no PostCSS config.
  All theming lives in the `@theme` block of `src/index.css`.
- `@/*` path alias → `./src/*`

Fonts are pulled from Google Fonts by `@import` at the top of `src/index.css`. Keep CSS
`@import` statements above `@import 'tailwindcss'` or the build breaks.

---

## 3. Tokens

Declared in `src/index.css` under `@theme`. Tailwind v4 turns each into utility classes
automatically. **Never write a raw hex value in a component.**

### Color

| Token | Utility | Hex | Use for |
|---|---|---|---|
| `--color-cream` | `bg-cream` | `#F9F6EE` | Page background, nav background |
| `--color-cream-dark` | `bg-cream-dark` | `#F0EBD8` | Tag/chip fills, inset surfaces |
| `--color-paper` | `bg-paper` | `#FFFFFF` | Cards, modal sheet: anything raised off the page |
| `--color-yellow` | `bg-yellow` | `#F5C400` | The accent. Primary button, portrait offset block, resume rule, selection |
| `--color-yellow-light` | `bg-yellow-light` | `#FFF3A3` | Reserved: softer accent, currently unused |
| `--color-ink` | `text-ink` | `#0C0C0C` | Headings, primary text, icons |
| `--color-ink-soft` | `text-ink-soft` | `#3A3A3A` | Body copy, card descriptions |
| `--color-ink-muted` | `text-ink-muted` | `#7A7A7A` | Dates, eyebrows, captions, section notes |
| `--color-line` | `border-line` | `#D8D0BC` | Every border and divider. 1px, always |

> **Naming note:** the Figma source called these `--color-white` and `--color-border`. Both are
> renamed here (`paper`, `line`) so they don't shadow Tailwind's built-in `white` or produce the
> confusing `border-border`. Same hex values, different token names.

The palette is a **single-accent system**: one warm neutral ramp (cream → paper), one ink ramp,
one yellow. Adding a second accent color breaks it. If something needs to stand out, reach for
weight, size, or the yellow: not a new hue.

There is **no dark mode**. The page is committed to light; `<meta name="color-scheme" content="light">`
is set in `index.html`.

### Type

| Token | Utility | Value |
|---|---|---|
| `--font-display` | `font-display` | `'Fraunces', Georgia, serif` |
| `--font-body` | `font-body` | `'Work Sans', system-ui, sans-serif` |

**Fraunces is for display only**: the hero name, section headings, card titles, the resume name.
Everything else is Work Sans. Fraunces is a variable serif; the italic cut is used deliberately
once, on the hero surname.

| Token | Utility | Size | Line height | Used by |
|---|---|---|---|---|
| `--text-display-xl` | `text-display-xl` | `clamp(3.5rem, 7vw, 6rem)` | `0.95` | Hero name |
| `--text-display-lg` | `text-display-lg` | `2.25rem` | `1.1` | Section headings |
| `--text-display-md` | `text-display-md` | `1.25rem` | `1.3` | Project card titles |
| `--text-display-sm` | `text-display-sm` | `1.15rem` | `1.3` | Job / org card titles |

Body sizes use Tailwind's defaults: `text-lg` (hero paragraph), `text-sm` (body copy, most UI),
`text-xs` (metadata, tags, resume bullets).

**Weights:** `font-light` (300) for body prose and the hero name: the design leans on light
weights at large sizes. `font-medium` (500) for UI labels and metadata. `font-semibold` (600)
for card titles and the primary button. Section headings are `font-normal` (400).

| Token | Utility | Value | Applied at |
|---|---|---|---|
| `--tracking-display` | `tracking-display` | `-0.03em` | Hero name, resume name |
| `--tracking-heading` | `tracking-heading` | `-0.02em` | Section headings, nav wordmark |
| `--tracking-title` | `tracking-title` | `-0.01em` | Card titles |

Eyebrows and uppercase labels use `tracking-widest` + `uppercase` + `text-ink-muted`.

### Geometry

| Token | Utility | Value |
|---|---|---|
| `--radius-sharp` | `rounded-sharp` | `2px` |

**One radius, everywhere.** Cards, buttons, tags, the modal, the portrait block. The design is
deliberately near-square and editorial; `rounded-lg`, `rounded-full`, and pill shapes are off the
table. Borders are always exactly `1px` `border-line`; there are no shadows anywhere in the
system: depth comes from the paper-on-cream contrast and the hairline border.

### Layout

- Page container: `mx-auto w-full max-w-6xl px-6 sm:px-8`: use the `<Container>` primitive.
- Section rhythm: `py-20`, with a 1px `<Divider />` between major sections.
- Nav is fixed at `h-auto py-5`; the hero clears it with `pt-32`, and anchor targets use
  `scroll-mt-24` plus `scroll-padding-top: 6rem` on `html`.
- Card grid: `repeat(auto-fill, minmax(320px, 1fr))` with `gap-4`.

### Motion

Restrained and short. Only four moves exist:

- `transition-transform duration-200 hover:-translate-y-0.5`: card lift
- `transition-opacity hover:opacity-60` / `hover:opacity-80`: links and ghost buttons
- `active:scale-95`: primary button press
- `transition-transform duration-200 hover:scale-110`: company logo grow

Everything shares `duration-200` and a transform or opacity change: nothing animates color,
size, or layout. No entrance animations, no scroll-triggered reveals, no parallax.
Don't add them.

---

## 4. Component recipes

Canonical implementations live in `src/components/ui.tsx`. **Import them: don't re-derive the
class strings.** If you need a variant, extend the primitive rather than copying its classes.

```tsx
<Container>            // page gutter + max-width
<Divider />            // 1px section rule
<SectionHeading title="Projects" note="Hackathon builds & personal work" />
<Card>                 // paper surface, 1px line border, hover lift
<Tag>TypeScript</Tag>  // cream-dark chip
<PrimaryButton>        // solid yellow: at most one per view
<GhostLink>            // outlined link on cream
```

Raw equivalents, for reference:

| Recipe | Classes |
|---|---|
| Card | `rounded-sharp border border-line bg-paper p-6 transition-transform duration-200 hover:-translate-y-0.5` |
| Tag | `rounded-sharp bg-cream-dark px-2 py-0.5 text-xs font-medium text-ink-soft` |
| Primary button | `rounded-sharp bg-yellow px-4 py-2 text-sm font-semibold text-ink hover:opacity-90 active:scale-95` |
| Ghost link | `flex items-center gap-2 rounded-sharp border border-line px-4 py-2.5 text-sm font-medium text-ink hover:opacity-80` |
| Section heading | `font-display text-display-lg font-normal tracking-heading text-ink` |
| Eyebrow / label | `text-xs font-semibold tracking-widest text-ink-muted uppercase` |
| Metadata | `text-sm font-medium whitespace-nowrap text-ink-muted` |

### Icons

`src/components/icons.tsx` holds `ExternalIcon`, `GithubIcon`, `LinkedinIcon`, `EmailIcon`:
ported verbatim from the Figma source. They all paint with `currentColor` and accept a `size`
prop. **Do not hand-author new SVG paths.** If a new icon is needed, export it from Figma or
pull it from a licensed set, then add it to this file with the same `currentColor` convention.

---

## 5. Content architecture

Components render; they do not own content. All copy and data lives in `src/data/`:

| File | Holds | Resume source |
|---|---|---|
| `profile.ts` | Name, contact links, hero intro, resume summary | `master_doc.tex` header |
| `experience.ts` | Jobs: `summary` for cards; `highlights` currently unrendered | `sections/experiences.md` |
| `projects.ts` | Projects, newest first. Optional `repo` field | `sections/projects.md` |
| `education.ts` | Degree, GPA, coursework | `sections/education.md` |
| `skills.ts` | Skill groups | `sections/technical-skills.md` |
| `leadership.ts` | Organizations + volunteering | `sections/organizations.md`, `volunteering.md` |

Two conventions worth knowing:

- **The resume modal shows the PDF, it does not re-render it.** `ResumeModal` embeds
  `profile.resumeFile` in an `<object>` and uses the browser's native PDF viewer, so what
  visitors read is byte-for-byte the file they download. Never rebuild the resume out of
  `src/data` in HTML: that reintroduces a second copy that silently drifts from the PDF.
  The `<object>` children are the fallback for browsers that can't render PDFs inline
  (most mobile ones) — keep that fallback working.
- **`summary` vs `highlights`.** Cards on the page show a single flowing `summary` paragraph.
  `highlights` is retained structured source material and is currently rendered nowhere;
  editing it changes nothing on the page.
- **`Project.repo` is optional.** When present, the card header renders the yellow GitHub pill
  from the original design. When absent, it falls back to a muted date range. Adding repo URLs
  restores the yellow accent across the project grid.

### Static assets in `public/`

Everything under `public/` is copied to the build root verbatim and ships to the browser, so
keep it small and keep full-resolution originals out of it.

| Path | Served at | Referenced by |
|---|---|---|
| `public/documents/Alessandro_Felici_Resume.pdf` | `/documents/…` | `profile.resumeFile` |
| `public/images/SanMarinoHeadshotCropped.jpg` | `/images/…` | `profile.portrait` |
| `public/images/Orange.png` | `/images/…` | `index.html` favicon + apple-touch-icon |
| `public/images/{aps,alchemy,Auto-Owners}.png` | `/images/…` | `Job.logo` in `experience.ts` |

Company logos are square (200x200), rendered at 48px in the Work History cards. `Job.logo` and
`Job.linkedin` are both optional: an entry without a logo renders none and the text reflows,
and a logo without a LinkedIn URL renders inert rather than as a link. Never add a placeholder
logo to fill the slot.

The favicon is an orange, 256x256. It is the one place an orange appears: it reads as a
personal mark rather than UI chrome, so it sits outside the single-accent palette rule in § 3.
Don't pull its orange into the interface.

The resume PDF is reached from exactly two places, both through `profile.resumeFile`: the
`resume.pdf` link beside the Work History heading, and the Download button in the resume modal.
`profile.resumeFileName` sets the saved filename, `profile.resumeFileLabel` the link text.
Swapping the resume means replacing the file and updating those constants: nothing else
references it.

**Portraits are pre-cropped, not art-directed in CSS.** The hero image is exported at exactly
2x the 300x380 display box (600x760) and cover-cropped to that aspect ratio before it lands in
`public/images/`, so the markup needs no `object-position` tuning. Resize replacements the same
way rather than shipping a multi-megabyte original and letting the browser scale it.

---

## 6. Deliberate deviations from the Figma source

The Make file is a design artifact, not production code. These changes were made on purpose;
don't "fix" them back.

| Figma source | Here | Why |
|---|---|---|
| Inline `style={{ color: "#0C0C0C" }}` on every element | Tailwind token utilities | Hex scattered across JSX can't be themed or audited |
| Fixed `gridTemplateColumns: "1fr 340px"` | `lg:grid-cols-[1fr_340px]`, stacks below `lg` | The original had no responsive behavior at all |
| Portrait from an Unsplash URL | Real headshot, pre-cropped to 600x760 and served from `public/images/` | Placeholder stock photo of a stranger; a remote URL is also a runtime dependency on a third party |
| `::-webkit-scrollbar { width: 0 }` | 8px thumb in `border-line` | Hiding the scrollbar broke the scrollable resume modal |
| Modal closes on backdrop click only | Also Escape, plus body scroll lock and `role="dialog"` | Basic modal accessibility |
| Sections: Projects + Work History | Adds Education, Skills, Leadership, Volunteering | The resume has more material than the mock covered: built from the same Card/Tag recipes |
| `--color-white`, `--color-border` | `--color-paper`, `--color-line` | Avoids shadowing Tailwind built-ins and `border-border` |
| Placeholder persona ("Alex Rivera") | Real content from `~/resume/sections/` |: |

---

## 7. Rules for future changes

1. **No raw hex, rgb, or arbitrary color values in components.** Add a token to `@theme` first.
2. **One radius.** `rounded-sharp` or nothing.
3. **One accent.** Yellow, used sparingly. No second accent hue, no gradients.
4. **Reuse `src/components/ui.tsx`.** New card-like surface? Compose `<Card>`.
5. **Fraunces for display only.** Body text is always Work Sans.
6. **Content goes in `src/data/`**, sourced from `~/resume/sections/`.
7. **No new motion** beyond the three moves in § 3.
8. **Borders are 1px `border-line`. Shadows do not exist** in this system.
9. When pulling from Figma again, re-read the Make source files (§ 1) rather than guessing:
   and update this document if the tokens moved.
