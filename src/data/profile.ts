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
    'I build robust backend systems, scalable cloud infrastructure, and the user-facing interfaces that bring them to life. Recently, I’ve focused on deploying Terraform pipelines for ML inference and shipping production-ready full-stack tools. While attending class at Michigan State University, I’m constantly searching for opportunities to experiment and learn new or familiar technology. Currently, I’m doing MLOps work at Auto-Owners Insurance and helping expand the tech student network on campus as a project director at Imagine Software Consultancy.',

  /** Summary paragraph inside the resume modal. */
  summary:
    'Computer science student at Michigan State University with internship experience across full-stack product work, cloud infrastructure, and ML platform engineering. Comfortable owning a feature end to end: authentication, API, deployment, and the tests that keep it standing.',

  /** Hero portrait. 600x760 (2x the 300x380 display box), served from public/. */
  portrait: '/images/SanMarinoHeadshotCropped.jpg',
  portraitAlt: 'Alessandro Felici',

  /** Served from public/documents/. The only reference to the resume file. */
  resumeFile: '/documents/Alessandro_Felici_Resume.pdf',
  /** Filename the browser saves it as via the Download button. */
  resumeFileName: 'Alessandro_Felici_Resume.pdf',
  /** Short label for the link beside the Work History heading. */
  resumeFileLabel: 'See my full resume',
} as const
