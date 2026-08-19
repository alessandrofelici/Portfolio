import { profile } from '../data/profile'
import { EmailIcon, GithubIcon, LinkedinIcon } from './icons'
import { Container, GhostButton } from './ui'

/**
 * Scrolls to the absolute top from wherever the reader is.
 *
 * Done programmatically rather than with an `#top` anchor so it always lands at
 * 0 rather than at the anchor's scroll-margin offset, and so it leaves no hash
 * in the URL. Honors prefers-reduced-motion, since a full-page smooth scroll is
 * exactly the kind of motion that setting exists to suppress.
 */
function BackToTop() {
  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <GhostButton onClick={scrollToTop}>
      Back to top
      <span aria-hidden="true">&uarr;</span>
    </GhostButton>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container>
        <div className="mb-8 flex justify-center">
          <BackToTop />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-sm text-ink-muted">
            © {new Date().getFullYear()} {profile.name}
          </span>

          <div className="flex items-center gap-4 text-ink">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-opacity hover:opacity-50"
            >
              <LinkedinIcon />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-opacity hover:opacity-50"
            >
              <GithubIcon />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="transition-opacity hover:opacity-50"
            >
              <EmailIcon />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
