/**
 * Identity and contact details.
 * Source: ~/resume/master_doc.tex header block.
 */
export const profile = {
  /** Rendered in the nav and the resume sheet. */
  name: 'Alessandro Felici',
  /** The hero splits the name across two lines; the surname is set in italic. */
  firstName: 'Alessandro',
  lastName: 'Felici.',
  initials: 'AF',

  title: 'Software Engineer',
  resumeTitle: 'Software Engineer · CS @ Michigan State',
  location: 'East Lansing, MI',

  email: 'felicial@msu.edu',
  phone: '(734) 787-3873',

  github: 'https://github.com/alessandrofelici',
  githubHandle: 'github.com/alessandrofelici',
  linkedin: 'https://www.linkedin.com/in/felici-alessandro/',
  linkedinHandle: 'linkedin.com/in/felici-alessandro',

  /** Hero paragraph. */
  intro:
    'I build backend systems, cloud infrastructure, and the interfaces that sit on top of them — OAuth flows written from scratch, Terraform stacks for ML inference, and full-stack tools that actually ship. Currently a software development intern at APS Data Technologies, most recently on the data science platform team at Auto-Owners Insurance.',

  /** Summary paragraph inside the resume modal. */
  summary:
    'Computer science student at Michigan State University with internship experience across full-stack product work, cloud infrastructure, and ML platform engineering. Comfortable owning a feature end to end — authentication, API, deployment, and the tests that keep it standing.',

  /** Served from public/. Swap for a PDF and update this one constant. */
  resumeFile: '/experience.md',
} as const
