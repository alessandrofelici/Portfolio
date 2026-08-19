import type { Project } from '../data/projects'
import { projects } from '../data/projects'
import { ExternalIcon, GithubIcon } from './icons'
import { Card, Container, SectionHeading, Tag } from './ui'

/** Yellow pill in the card header. Shared by both link kinds so they read as one control. */
const pillClasses =
  'flex shrink-0 items-center gap-1.5 rounded-sharp bg-yellow px-2.5 py-1 text-xs font-medium whitespace-nowrap text-ink transition-opacity hover:opacity-70'

/**
 * The project's single outbound link, if it has one.
 *
 * A repo shows the GitHub mark; a paper shows a "PDF" label rather than an
 * invented document glyph, since icons here come from the design, not from
 * hand-authored SVG. Both open in a new tab, and a project with neither
 * renders no pill at all.
 */
function ProjectLink({ project }: { project: Project }) {
  if (project.repo) {
    return (
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} on GitHub, opens in a new tab`}
        className={pillClasses}
      >
        <GithubIcon size={14} />
        <ExternalIcon />
      </a>
    )
  }

  if (project.paper) {
    return (
      <a
        href={project.paper}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} paper as PDF, opens in a new tab`}
        className={pillClasses}
      >
        PDF
        <ExternalIcon />
      </a>
    )
  }

  return null
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20">
      <Container>
        <SectionHeading title="Projects" note="Hackathon builds & personal work" />

        <div className="grid gap-4 sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-display text-display-md font-semibold tracking-title text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-ink-muted">{project.period}</p>
                </div>

                <ProjectLink project={project} />
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
