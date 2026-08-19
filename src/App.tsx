import type { ReactNode } from 'react'
import { Fragment, useMemo, useState } from 'react'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { ResumeModal } from './components/ResumeModal'
import { SearchSummary } from './components/SearchBar'
import { WorkHistory } from './components/WorkHistory'
import { Container, Divider } from './components/ui'
import { filterPortfolio, parseQuery } from './lib/search'

type Section = { key: string; node: ReactNode }

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false)
  const [query, setQuery] = useState('')

  const terms = useMemo(() => parseQuery(query), [query])
  const results = useMemo(() => filterPortfolio(terms), [terms])
  const searching = terms.length > 0

  // Sections are assembled rather than listed so that the 1px dividers land
  // between whatever survived the filter, instead of stacking up around the
  // gaps left by sections that matched nothing.
  const sections: Section[] = []

  if (results.projects.length > 0) {
    sections.push({ key: 'projects', node: <Projects projects={results.projects} /> })
  }

  if (results.jobs.length > 0) {
    sections.push({ key: 'experience', node: <WorkHistory jobs={results.jobs} /> })
  }

  if (
    results.education ||
    results.skillGroups.length > 0 ||
    results.organizations.length > 0 ||
    results.volunteering.length > 0
  ) {
    sections.push({
      key: 'about',
      node: (
        <About
          education={results.education}
          skillGroups={results.skillGroups}
          organizations={results.organizations}
          volunteering={results.volunteering}
        />
      ),
    })
  }

  return (
    <div className="min-h-screen bg-cream font-body">
      <Nav onOpenResume={() => setResumeOpen(true)} query={query} onQueryChange={setQuery} />

      <main>
        {/* Searching swaps the hero for the result count, so matches sit above
            the fold instead of behind a screenful of introduction. Both take
            the same trailing rule, so the page rhythm does not change under it. */}
        {searching ? (
          <SearchSummary query={query} total={results.total} onClear={() => setQuery('')} />
        ) : (
          <Hero />
        )}
        <Divider />

        {sections.map((section, index) => (
          <Fragment key={section.key}>
            {index > 0 && <Divider />}
            {section.node}
          </Fragment>
        ))}

        {searching && sections.length === 0 && (
          <Container className="py-20">
            <p className="text-sm leading-relaxed font-light text-ink-soft">
              Nothing matches that. Try a language, a framework, or a company name.
            </p>
          </Container>
        )}
      </main>

      <Footer />

      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </div>
  )
}
