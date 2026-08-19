import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { education } from '../data/education'
import { jobs } from '../data/experience'
import { organizations } from '../data/leadership'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'

/**
 * Full-screen resume sheet.
 *
 * Extends the Figma source with Escape-to-close, background scroll locking,
 * and dialog semantics. See DESIGN.md § Deviations.
 */
export function ResumeModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Resume: ${profile.name}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm sm:p-6"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="relative flex h-[88vh] w-full max-w-3xl flex-col rounded-sharp border border-line bg-paper">
        {/* Header */}
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-line px-6 py-4">
          <div>
            <span className="font-display text-base font-semibold tracking-title text-ink">
              Resume
            </span>
            <span className="ml-2 text-sm text-ink-muted">{profile.name}</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={profile.resumeFile}
              download
              className="rounded-sharp bg-yellow px-3 py-1.5 text-xs font-medium text-ink transition-opacity hover:opacity-80"
            >
              Download
            </a>
            <button
              onClick={onClose}
              className="rounded-sharp border border-line px-3 py-1.5 text-sm font-medium text-ink transition-opacity hover:opacity-60"
            >
              Close
            </button>
          </div>
        </div>

        {/* Sheet */}
        <div className="flex-1 overflow-y-auto bg-cream p-4 sm:p-8">
          <div className="mx-auto max-w-2xl rounded-sharp border border-line bg-paper p-6 sm:p-12">
            <header className="mb-8 border-b-2 border-yellow pb-6">
              <h1 className="mb-1 font-display text-[2.5rem] leading-tight font-light tracking-display text-ink">
                {profile.name}
              </h1>
              <p className="text-sm font-medium text-ink-soft">{profile.resumeTitle}</p>
              <div className="mt-3 flex flex-wrap gap-4 text-xs text-ink-muted">
                <span>{profile.email}</span>
                <span>{profile.phone}</span>
                <span>{profile.githubHandle}</span>
                <span>{profile.linkedinHandle}</span>
                <span>{profile.location}</span>
              </div>
            </header>

            <ResumeSection title="Summary">
              <p className="text-sm leading-relaxed font-light text-ink-soft">{profile.summary}</p>
            </ResumeSection>

            <ResumeSection title="Education">
              <div className="mb-1 flex items-baseline justify-between gap-4">
                <span className="text-sm font-semibold text-ink">{education.school}</span>
                <span className="shrink-0 text-xs text-ink-muted">{education.period}</span>
              </div>
              <p className="text-xs leading-relaxed font-light text-ink-soft">
                {education.degree} · Minors in {education.minors.join(' and ')} · GPA{' '}
                {education.gpa} · {education.location}
              </p>
            </ResumeSection>

            <ResumeSection title="Experience">
              <div className="flex flex-col gap-5">
                {jobs.map((job) => (
                  <div key={`${job.company}-${job.period}`}>
                    <div className="mb-1 flex items-baseline justify-between gap-4">
                      <span className="text-sm font-semibold text-ink">
                        {job.role}: {job.company}
                      </span>
                      <span className="shrink-0 text-xs text-ink-muted">{job.period}</span>
                    </div>
                    <ul className="ml-4 list-disc space-y-1">
                      {job.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-xs leading-relaxed font-light text-ink-soft"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {job.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-sharp bg-cream-dark px-1.5 py-0.5 text-xs text-ink-soft"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="Selected Projects">
              <div className="flex flex-col gap-3">
                {projects.map((project) => (
                  <div key={project.title}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm font-semibold text-ink">{project.title}</span>
                      <span className="shrink-0 text-xs text-ink-muted">{project.period}</span>
                    </div>
                    <p className="mt-0.5 text-xs leading-relaxed font-light text-ink-soft">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="Leadership">
              <div className="flex flex-col gap-3">
                {organizations.map((org) => (
                  <div key={org.name}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm font-semibold text-ink">
                        {org.role}: {org.name}
                      </span>
                      <span className="shrink-0 text-xs text-ink-muted">{org.period}</span>
                    </div>
                    <p className="mt-0.5 text-xs leading-relaxed font-light text-ink-soft">
                      {org.summary}
                    </p>
                  </div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="Technical Skills" last>
              <div className="flex flex-col gap-2">
                {skillGroups.map((group) => (
                  <p key={group.label} className="text-xs leading-relaxed text-ink-soft">
                    <span className="font-semibold text-ink">{group.label}: </span>
                    <span className="font-light">{group.items.join(', ')}</span>
                  </p>
                ))}
              </div>
            </ResumeSection>
          </div>
        </div>
      </div>
    </div>
  )
}

function ResumeSection({
  title,
  children,
  last = false,
}: {
  title: string
  children: ReactNode
  last?: boolean
}) {
  return (
    <section className={last ? '' : 'mb-6'}>
      <h2 className="mb-3 text-xs font-semibold tracking-widest text-ink-muted uppercase">
        {title}
      </h2>
      {children}
    </section>
  )
}
