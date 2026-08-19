import { profile } from '../data/profile'
import { SearchBar } from './SearchBar'
import { PrimaryButton } from './ui'

/**
 * Fixed top bar: monogram wordmark and Resume on the left, search on the right.
 *
 * The wordmark echoes the hero's italic surname rather than repeating the full
 * name, which already sits a few hundred pixels below it in display type.
 */
export function Nav({
  onOpenResume,
  query,
  onQueryChange,
}: {
  onOpenResume: () => void
  query: string
  onQueryChange: (query: string) => void
}) {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-line bg-cream">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-5 sm:gap-4 sm:px-8">
        {/*
          Clears the search on the way up. An `#top` anchor alone would not do:
          the hero that carries that id is unmounted while a search is active,
          so the jump would land nowhere. Scrolled programmatically for the same
          reason the footer's "Back to top" is (see Footer.tsx).
        */}
        <a
          href="#top"
          onClick={(event) => {
            event.preventDefault()
            onQueryChange('')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          aria-label={`${profile.name}, back to top`}
          className="shrink-0 font-display text-2xl leading-none font-light italic tracking-display text-ink transition-opacity hover:opacity-60"
        >
          {profile.initials}
        </a>

        <PrimaryButton className="shrink-0" onClick={onOpenResume}>
          Resume
        </PrimaryButton>

        <SearchBar query={query} onQueryChange={onQueryChange} />
      </div>
    </nav>
  )
}
