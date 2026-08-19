/**
 * Portfolio-wide text search.
 *
 * There is one index and one matcher. Each searchable record is flattened to a
 * list of strings, and a record matches when EVERY term in the query appears
 * somewhere in that text: typing "react flask" narrows to things that use both,
 * which is what people expect from a search box.
 *
 * Matching is substring, not prefix or fuzzy. "sql" finds PostgreSQL, "type"
 * finds TypeScript. Fuzzy matching was left out on purpose: the corpus is a few
 * dozen records, so precision costs nothing and false hits are more annoying
 * than a missed typo.
 */
import { education } from '../data/education'
import type { Job } from '../data/experience'
import { jobs } from '../data/experience'
import type { Organization, Volunteering } from '../data/leadership'
import { organizations, volunteering } from '../data/leadership'
import type { Project } from '../data/projects'
import { projects } from '../data/projects'
import type { SkillGroup } from '../data/skills'
import { skillGroups } from '../data/skills'

/**
 * Lowercase and fold the typographic punctuation the resume copy uses, so a
 * plain keyboard apostrophe or hyphen still matches "Washington’s" and "May–Dec".
 */
function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[–—]/g, '-')
}

/** Split raw input into the terms a record must all contain. */
export function parseQuery(query: string): string[] {
  return normalize(query).split(/\s+/).filter(Boolean)
}

/** True when every term appears somewhere in `haystack`. Empty query matches everything. */
function matches(haystack: ReadonlyArray<string | undefined>, terms: string[]): boolean {
  if (terms.length === 0) return true
  const text = normalize(haystack.filter(Boolean).join(' '))
  return terms.every((term) => text.includes(term))
}

export type SearchResults = {
  projects: Project[]
  jobs: Job[]
  /** Groups keep only their matching items, so searching "aws" shows AWS, not all of Cloud. */
  skillGroups: SkillGroup[]
  education: typeof education | null
  organizations: Organization[]
  volunteering: Volunteering[]
  /** Every individual hit across the site: what the results banner counts. */
  total: number
}

/**
 * Run the query across every section at once.
 *
 * `highlights` are indexed even though nothing renders them (see experience.ts):
 * they are the most detailed prose on the site, so leaving them out would make
 * searches for real specifics like "OAuth" or "argparse" come back empty.
 */
export function filterPortfolio(terms: string[]): SearchResults {
  const matchedProjects = projects.filter((project) =>
    matches([project.title, project.period, project.description, ...project.stack], terms),
  )

  const matchedJobs = jobs.filter((job) =>
    matches(
      [job.role, job.company, job.location, job.period, job.summary, ...job.stack, ...job.highlights],
      terms,
    ),
  )

  const matchedSkillGroups = skillGroups
    .map((group) =>
      // A group label hit ("Languages") keeps the whole group; otherwise only
      // the items that matched survive.
      matches([group.label], terms)
        ? group
        : { ...group, items: group.items.filter((item) => matches([item], terms)) },
    )
    .filter((group) => group.items.length > 0)

  const matchedEducation = matches(
    [
      education.school,
      education.degree,
      education.location,
      education.period,
      ...education.minors,
      ...education.coursework,
    ],
    terms,
  )
    ? education
    : null

  const matchedOrganizations = organizations.filter((org) =>
    matches([org.name, org.role, org.period, org.summary, ...org.highlights], terms),
  )

  const matchedVolunteering = volunteering.filter((entry) =>
    matches([entry.organization, entry.role, entry.period, entry.summary], terms),
  )

  return {
    projects: matchedProjects,
    jobs: matchedJobs,
    skillGroups: matchedSkillGroups,
    education: matchedEducation,
    organizations: matchedOrganizations,
    volunteering: matchedVolunteering,
    total:
      matchedProjects.length +
      matchedJobs.length +
      matchedSkillGroups.reduce((sum, group) => sum + group.items.length, 0) +
      (matchedEducation ? 1 : 0) +
      matchedOrganizations.length +
      matchedVolunteering.length,
  }
}
