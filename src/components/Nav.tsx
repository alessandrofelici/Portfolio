import { profile } from '../data/profile'
import { PrimaryButton } from './ui'

/**
 * Fixed top bar: monogram wordmark on the left, Resume on the right.
 *
 * The wordmark echoes the hero's italic surname rather than repeating the full
 * name, which already sits a few hundred pixels below it in display type.
 */
export function Nav({ onOpenResume }: { onOpenResume: () => void }) {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-line bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <a
          href="#top"
          aria-label={`${profile.name}, back to top`}
          className="font-display text-2xl leading-none font-light italic tracking-display text-ink transition-opacity hover:opacity-60"
        >
          {profile.initials}
        </a>

        <PrimaryButton onClick={onOpenResume}>Resume</PrimaryButton>
      </div>
    </nav>
  )
}
