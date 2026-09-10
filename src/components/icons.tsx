/**
 * Inline icons, ported verbatim from the Figma Make source.
 * All use `currentColor` so they inherit text color from their container.
 */
import { useId } from 'react'

export const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M2 10L10 2M10 2H4M10 2V8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

export const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export const EmailIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

/**
 * The nav search affordance: "SEARCH SKILLS" set around a slowly turning ring.
 *
 * Geometry is from the Make source and is load-bearing: the path is one full
 * circle of radius 25 centered at (30,30), so its circumference is 157.08px.
 * `textLength` stretches the label to fill exactly that, and the trailing dots
 * pad whatever gap the words leave, which is what makes the ring read as
 * continuous rather than as text with a bald patch. Changing the label means
 * re-balancing the dots.
 *
 * The viewBox is inset by 4 units on every side, which the Make source's plain
 * `0 0 60 60` was not. Glyphs sit outside the path they follow, so at r=25 plus
 * a cap height the letters reach the 60-unit edge exactly and get shaved off at
 * the top of the ring. Padding the box rather than shrinking the radius keeps
 * the 157.08 circumference — and so the label's fit — correct.
 *
 * Decorative: the input beside it carries the accessible name.
 */
export const SearchRingIcon = ({ size = 34 }: { size?: number }) => {
  // The <defs> path is referenced by id, so two rings on one page would collide.
  const pathId = useId()

  return (
    <svg
      width={size}
      height={size}
      viewBox="-4 -4 68 68"
      fill="none"
      aria-hidden="true"
      className="motion-safe:animate-search-ring"
    >
      <defs>
        <path id={pathId} d="M30,30 m-25,0 a25,25 0 1,1 50,0 a25,25 0 1,1-50,0" />
      </defs>
      <text fontSize="7" fill="currentColor">
        <textPath href={`#${pathId}`} textLength="157.08" lengthAdjust="spacing">
          SEARCH SKILLS · · · · · · · · · ·
        </textPath>
      </text>
    </svg>
  )
}
