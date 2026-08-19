import { projects } from '../data/projects'
import { ExternalIcon, GithubIcon } from './icons'
import { Card, Container, SectionHeading, Tag } from './ui'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20">
      <Container>
        <SectionHeading title="Projects" note="Hackathon builds & personal work" />

        <div className="grid gap-4 sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-display-md font-semibold tracking-title text-ink">
                  {project.title}
                </h3>

                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex shrink-0 items-center gap-1.5 rounded-sharp bg-yellow px-2.5 py-1 text-xs font-medium whitespace-nowrap text-ink transition-opacity hover:opacity-70"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <GithubIcon size={14} />
                    <ExternalIcon />
                  </a>
                ) : (
                  <span className="shrink-0 text-xs font-medium whitespace-nowrap text-ink-muted">
                    {project.period}
                  </span>
                )}
              </div>

              <p className="flex-1 text-sm leading-relaxed font-light text-ink-soft">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
