import { education } from '../data/education'
import { organizations, volunteering } from '../data/leadership'
import { skillGroups } from '../data/skills'
import { Card, Container, SectionHeading, Tag } from './ui'

/**
 * Education, skills, leadership, and volunteering.
 *
 * These sections are not in the Figma source: they extend the same card and
 * tag recipes to the remaining resume material. See DESIGN.md § Deviations.
 */
export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <Container>
        <SectionHeading title="Education" note={education.location} />
        <Card className="mb-16 grid gap-4 sm:grid-cols-[1fr_auto]">
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="font-display text-display-sm font-semibold tracking-title text-ink">
                {education.school}
              </h3>
              <p className="mt-0.5 text-sm font-medium text-ink-soft">
                {education.degree} · GPA {education.gpa}
              </p>
              <p className="mt-0.5 text-sm font-light text-ink-soft">
                Minors in {education.minors.join(' and ')}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold tracking-widest text-ink-muted uppercase">
                Coursework
              </p>
              <div className="flex flex-wrap gap-1.5">
                {education.coursework.map((course) => (
                  <Tag key={course}>{course}</Tag>
                ))}
              </div>
            </div>
          </div>

          <div className="sm:text-right">
            <span className="text-sm font-medium whitespace-nowrap text-ink-muted">
              {education.period}
            </span>
          </div>
        </Card>

        <SectionHeading title="Skills" note="Languages, frameworks, and tooling" />
        <div className="mb-16 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.label} className="flex flex-col gap-3">
              <p className="text-xs font-semibold tracking-widest text-ink-muted uppercase">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <SectionHeading title="Leadership" note="Organizations & community" />
        <div className="flex flex-col gap-4">
          {organizations.map((org) => (
            <Card key={org.name} className="grid gap-4 sm:grid-cols-[1fr_auto]">
              <div className="flex flex-col gap-2">
                <div>
                  <h3 className="font-display text-display-sm font-semibold tracking-title text-ink">
                    {org.role}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-ink-soft">{org.name}</p>
                </div>
                <p className="max-w-[58ch] text-sm leading-relaxed font-light text-ink-soft">
                  {org.summary}
                </p>
              </div>
              <div className="sm:text-right">
                <span className="text-sm font-medium whitespace-nowrap text-ink-muted">
                  {org.period}
                </span>
              </div>
            </Card>
          ))}

          <Card className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-widest text-ink-muted uppercase">
              Volunteering
            </p>
            <div className="flex flex-col gap-4">
              {volunteering.map((entry) => (
                <div
                  key={entry.organization}
                  className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-4"
                >
                  <div>
                    <p className="text-sm font-medium text-ink">{entry.organization}</p>
                    <p className="mt-0.5 text-sm leading-relaxed font-light text-ink-soft">
                      {entry.role}: {entry.summary}
                    </p>
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap text-ink-muted sm:text-right">
                    {entry.period}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
