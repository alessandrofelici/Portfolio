import { profile } from '../data/profile'
import { EmailIcon, GithubIcon, LinkedinIcon } from './icons'
import { Container } from './ui'

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container>
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
