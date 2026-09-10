import { education as allEducation } from '../data/education'
import type { Organization, Volunteering } from '../data/leadership'
import type { SkillGroup } from '../data/skills'
import { skillGroups as allSkillGroups } from '../data/skills'
import { Card, Container, SectionHeading, Tag } from './ui'

/** Total individual skills, for the "N of M" note when a search narrows them. */
const TOTAL_SKILLS = allSkillGroups.reduce((sum, group) => sum + group.items.length, 0)

/**
 * Education, skills, leadership, and volunteering.
 *
 * These sections are not in the Figma source: they extend the same card and
 * tag recipes to the remaining resume material. See DESIGN.md § Deviations.
 *
 * Every block takes its content as a prop so the nav search can narrow them
 * independently, and each one drops out entirely when its slice comes back
 * empty rather than rendering a heading over nothing. App does not render this
 * section at all when all four are empty.
 */
export function About({
  education,
  skillGroups,
  organizations,
  volunteering,
}: {
  education: typeof allEducation | null
  skillGroups: SkillGroup[]
  organizations: Organization[]
  volunteering: Volunteering[]
}) {
  const visibleSkills = skillGroups.reduce((sum, group) => sum + group.items.length, 0)
  const skillsFiltered = visibleSkills !== TOTAL_SKILLS
  const hasLeadership = organizations.length > 0 || volunteering.length > 0

  return (
    <section id="about" className="scroll-mt-24 py-20">
      {/* gap rather than trailing margins, so a block dropping out of the
          middle does not leave a double gap behind it. */}
      <Container className="flex flex-col gap-16">
        {education && (
          <div>
            <SectionHeading title="Education" note={education.location} />
            <Card className="grid gap-4 sm:grid-cols-[1fr_auto]">
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
          </div>
        )}

        {skillGroups.length > 0 && (
          <div>
            <SectionHeading
              title="Skills"
              note={
                skillsFiltered
                  ? `${visibleSkills} of ${TOTAL_SKILLS}`
                  : 'Languages, frameworks, and tooling'
              }
            />
            <div className="grid gap-4 sm:grid-cols-2">
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
          </div>
        )}

        {hasLeadership && (
          <div>
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

              {volunteering.length > 0 && (
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
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
