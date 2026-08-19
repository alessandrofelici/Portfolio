import { jobs } from '../data/experience'
import { profile } from '../data/profile'
import { ExternalIcon } from './icons'
import { Card, Container, SectionHeading, Tag } from './ui'

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
              experience.md <ExternalIcon />
            </a>
          }
        />

        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <Card key={`${job.company}-${job.period}`} className="grid gap-4 sm:grid-cols-[1fr_auto]">
              <div className="flex flex-col gap-2">
                <div>
                  <h3 className="font-display text-display-sm font-semibold tracking-title text-ink">
                    {job.role}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-ink-soft">
                    {job.company} · {job.location}
                  </p>
                </div>

                <p className="max-w-[58ch] text-sm leading-relaxed font-light text-ink-soft">
                  {job.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {job.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
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
