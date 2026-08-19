import { profile } from '../data/profile'
import { EmailIcon, GithubIcon, LinkedinIcon } from './icons'
import { Container, GhostLink } from './ui'

export function Hero() {
  return (
    <section id="top" className="scroll-mt-24 pt-32 pb-20">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_340px]">
          <div className="flex flex-col justify-center gap-8">
            <div>
              <p className="mb-4 text-sm font-medium tracking-widest text-ink-muted uppercase">
                {profile.title}
              </p>
              <h1 className="font-display text-display-xl font-light tracking-display text-ink">
                {profile.firstName}
                <br />
                <span className="italic">{profile.lastName}</span>
              </h1>
            </div>

            <p className="max-w-xl text-lg leading-relaxed font-light text-ink-soft">
              {profile.intro}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <GhostLink href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon />
                LinkedIn
              </GhostLink>
              <GhostLink href={profile.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon />
                GitHub
              </GhostLink>
              <GhostLink href={`mailto:${profile.email}`}>
                <EmailIcon />
                Email
              </GhostLink>
            </div>
          </div>

          <Portrait />
        </div>
      </Container>
    </section>
  )
}

/**
 * Monogram tile sitting on the signature offset yellow block.
 *
 * The Figma source used a photograph here. To swap one in, drop the file in
 * public/ and replace the inner <div> with an <img> of the same fixed size:
 * keep `relative`, the 300x380 box, and the offset block behind it.
 */
function Portrait() {
  return (
    <div className="flex items-start justify-center lg:justify-end">
      <div className="relative">
        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-sharp bg-yellow" />
        <div className="relative flex h-[380px] w-[300px] items-center justify-center rounded-sharp border border-line bg-cream-dark">
          <span className="font-display text-[7rem] leading-none font-light tracking-display text-ink">
            {profile.initials}
          </span>
        </div>
      </div>
    </div>
  )
}
