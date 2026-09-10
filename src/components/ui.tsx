import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

/**
 * Shared primitives. These are the canonical implementations of the recipes
 * documented in DESIGN.md: reuse them rather than re-deriving the classes.
 */

/** Page gutter + max width. Every top-level section is wrapped in one. */
export function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 ${className}`}>{children}</div>
}

/** The 1px rule used between major sections. */
export function Divider() {
  return (
    <Container>
      <div className="h-px bg-line" />
    </Container>
  )
}

/** Display heading + muted note, baseline-aligned. */
export function SectionHeading({ title, note }: { title: string; note?: ReactNode }) {
  return (
    <div className="mb-10 flex flex-wrap items-baseline gap-x-4 gap-y-1">
      <h2 className="font-display text-display-lg font-normal tracking-heading text-ink">
        {title}
      </h2>
      {note ? <span className="text-sm text-ink-muted">{note}</span> : null}
    </div>
  )
}

/** Inset chip used for tech stack, coursework, and the search placeholder. */
export function Tag({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={`rounded-sharp bg-cream-dark px-2 py-0.5 text-xs font-medium text-ink-soft ${className}`}
    >
      {children}
    </span>
  )
}

/** Raised paper surface with a hairline border and a subtle lift on hover. */
export function Card({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-sharp border border-line bg-paper p-6 transition-transform duration-200 hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </div>
  )
}

/** Solid yellow call to action. Used sparingly: at most one per view. */
export function PrimaryButton({
  children,
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`rounded-sharp bg-yellow px-4 py-2 text-sm font-semibold text-ink transition-all hover:opacity-90 active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

/** Outlined button on the cream page background. The `GhostLink` twin for real actions. */
export function GhostButton({
  children,
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-sharp border border-line px-4 py-2.5 text-sm font-medium text-ink transition-opacity hover:opacity-80 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

/** Outlined link/button on the cream page background. */
export function GhostLink({
  children,
  className = '',
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`flex items-center gap-2 rounded-sharp border border-line px-4 py-2.5 text-sm font-medium text-ink transition-opacity hover:opacity-80 ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
