import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

/**
 * Tracks the user's reduced-motion setting.
 *
 * CSS handles most of this via `motion-safe:` variants, but the search
 * placeholder also runs a JS interval: a paused animation that still ticks
 * would swap words instantly every 2.4s, which is exactly the distraction the
 * setting asks us to avoid. This lets the timer be switched off entirely.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => window.matchMedia(QUERY).matches)

  useEffect(() => {
    const media = window.matchMedia(QUERY)
    const onChange = () => setReduced(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return reduced
}
