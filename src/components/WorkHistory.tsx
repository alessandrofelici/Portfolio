import type { Job } from '../data/experience'
import { jobs } from '../data/experience'
import { profile } from '../data/profile'
import { ExternalIcon } from './icons'
import { Card, Container, SectionHeading, Tag } from './ui'

/**
 * Company logo, rendered only when the job carries one.
 *
 * Returns null rather than a placeholder so logo-less entries (independent
 * research, self-directed work) keep a clean left edge instead of an empty box.
 * When `linkedin` is set the logo becomes the link to the company page and
 * grows slightly on hover; without it the logo is inert and non-interactive,
 * so it never looks clickable when it isn't.
 */
function CompanyLogo({ job }: { job: Job }) {
  if (!job.logo) return null

  const image = (
    <img
      src={job.logo}
      alt={`${job.company} logo`}
      width={48}
      height={48}
      className="h-12 w-12 rounded-sharp object-cover"
    />
  )

  if (!job.linkedin) return <div className="shrink-0">{image}</div>

  return (
    <a
      href={job.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${job.company} on LinkedIn`}
      className="shrink-0 transition-transform duration-200 hover:scale-110"
    >
      {image}
    </a>
  )
}

export function WorkHistory() {
  return (
    <section id="experience" className="scroll-mt-24 py-20">
      <Container>
        <SectionHeading
          title="Work History"
          note={
            <a
              href={profile.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium transition-opacity hover:opacity-60"
            >
              {profile.resumeFileLabel} <ExternalIcon />
            </a>
          }
        />

        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <Card key={`${job.company}-${job.period}`} className="grid gap-4 sm:grid-cols-[1fr_auto]">
              {/*
                Two stacked blocks, both flush to the card's left edge: an
                identity header (logo + role + company), then the body. The body
                is deliberately NOT nested beside the logo, so the description
                and tags start at the same left edge as the logo rather than
                indented behind it.
              */}
              <div className="flex min-w-0 flex-col gap-3">
                <div className="flex items-center gap-4">
                  {/* Absent for entries with no company logo; the title simply shifts left. */}
                  <CompanyLogo job={job} />

                  <div className="min-w-0">
                    <h3 className="font-display text-display-sm font-semibold tracking-title text-ink">
                      {job.role}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-ink-soft">
                      {job.company} · {job.location}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="max-w-[58ch] text-sm leading-relaxed font-light text-ink-soft">
                    {job.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {job.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </div>
              </div>

              <div className="sm:text-right">
                <span className="text-sm font-medium whitespace-nowrap text-ink-muted">
                  {job.period}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
