import { useEffect, useRef, useState } from 'react'
import { searchHints } from '../data/skills'
import { usePrefersReducedMotion } from '../lib/usePrefersReducedMotion'
import { SearchRingIcon } from './icons'
import { Container, Tag } from './ui'

/** How long each skill sits in the placeholder before flipping to the next. */
const CYCLE_MS = 2400

/**
 * The longest hint, used as an invisible sizer so the chip reserves one fixed
 * width instead of resizing on every flip and shoving the rest of the bar around.
 */
const WIDEST_HINT = searchHints.reduce((widest, hint) =>
  hint.length > widest.length ? hint : widest,
)

/** Chip geometry shared by the sizer and the two animated copies. */
const HINT_CELL = 'col-start-1 row-start-1 whitespace-nowrap'

/**
 * The cycling skill in the idle placeholder, flipping like a split-flap board.
 *
 * Both the outgoing and incoming word are rendered in the same grid cell: the
 * old one rotates away as the new one rotates in. `tick` only ever increases,
 * so the React keys change on every step and the CSS animations restart even
 * when the list wraps back to the first hint.
 */
function SkillHint() {
  const reducedMotion = usePrefersReducedMotion()
  const [tick, setTick] = useState(0)

  useEffect(() => {
    // Reduced motion gets one static skill rather than a silent instant swap.
    if (reducedMotion) return
    const id = setInterval(() => setTick((previous) => previous + 1), CYCLE_MS)
    return () => clearInterval(id)
  }, [reducedMotion])

  const current = searchHints[tick % searchHints.length]
  // Nothing flips out on first paint.
  const outgoing = tick === 0 ? null : searchHints[(tick - 1) % searchHints.length]

  return (
    <span className="grid shrink-0 place-items-center">
      <Tag className={`${HINT_CELL} invisible`}>{WIDEST_HINT}</Tag>

      {outgoing && (
        <Tag
          key={`out-${tick}`}
          className={`${HINT_CELL} motion-safe:animate-hint-out motion-reduce:hidden`}
        >
          {outgoing}
        </Tag>
      )}

      {/* Last in the cell so the arriving word paints over the departing one. */}
      <Tag key={`in-${tick}`} className={`${HINT_CELL} motion-safe:animate-hint-in`}>
        {current}
      </Tag>
    </span>
  )
}

/**
 * Nav search field. Filters the whole page as you type; there is nothing to submit.
 *
 * While it is empty and unfocused it shows the animated "Search for... React"
 * placeholder from the design, overlaid on the real input rather than set as a
 * `placeholder` attribute, which cannot hold an element. The overlay is inert
 * and hidden from assistive tech: the input's own label is the accessible name.
 */
export function SearchBar({
  query,
  onQueryChange,
}: {
  query: string
  onQueryChange: (query: string) => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [focused, setFocused] = useState(false)
  const showPlaceholder = query === '' && !focused

  return (
    <div
      // The pill is bigger than the input; clicking the padding or the ring
      // should still put the cursor in the field.
      onMouseDown={(event) => {
        if (event.target !== inputRef.current) {
          event.preventDefault()
          inputRef.current?.focus()
        }
      }}
      className="ml-auto flex min-w-0 flex-1 cursor-text items-center gap-2 rounded-pill border border-line bg-paper py-[5px] pr-[6px] pl-4 sm:max-w-[420px]"
    >
      <div className="relative min-w-0 flex-1">
        <label htmlFor="site-search" className="sr-only">
          Search projects, roles, and skills
        </label>
        <input
          id="site-search"
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') onQueryChange('')
          }}
          // The overlay is the placeholder; the native one would double it up.
          autoComplete="off"
          className="w-full bg-transparent text-sm text-ink outline-none [&::-webkit-search-cancel-button]:hidden"
        />

        {showPlaceholder && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center gap-2 overflow-hidden"
          >
            <span className="shrink-0 text-sm font-light text-ink-muted">Search for...</span>
            {/*
              The chip reserves the width of the longest hint, which a phone-width
              bar cannot spare: below `sm` it would be sheared in half by the
              ring. The words alone carry the invitation there.
            */}
            <span className="hidden sm:block">
              <SkillHint />
            </span>
          </div>
        )}
      </div>

      {query !== '' && (
        <button
          type="button"
          onClick={() => {
            onQueryChange('')
            inputRef.current?.focus()
          }}
          aria-label="Clear search"
          className="shrink-0 rounded-pill px-1.5 text-base leading-none text-ink-muted transition-opacity hover:opacity-60"
        >
          ×
        </button>
      )}

      <SearchRingIcon />
    </div>
  )
}

/**
 * Replaces the hero while a search is active: says what was found, and offers
 * the way back out. `aria-live` announces the new count as the user types,
 * since the results themselves are further down the page.
 */
export function SearchSummary({
  query,
  total,
  onClear,
}: {
  query: string
  total: number
  onClear: () => void
}) {
  return (
    // Matches the hero's padding exactly, so swapping it in for the hero keeps
    // the nav clearance and the rule below it in the same place.
    <div className="pt-32 pb-20">
      <Container>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <p aria-live="polite" className="text-sm font-light text-ink-soft">
            <span className="font-medium text-ink">{total}</span>{' '}
            {total === 1 ? 'match' : 'matches'} for{' '}
            <span className="font-medium text-ink">“{query}”</span>
          </p>
          <button
            type="button"
            onClick={onClear}
            className="text-sm font-medium text-ink-muted transition-opacity hover:opacity-60"
          >
            Clear search
          </button>
        </div>
      </Container>
    </div>
  )
}
