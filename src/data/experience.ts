/**
 * Work history, newest first.
 * Source: ~/resume/sections/experiences.md
 *
 * `summary` is the one-paragraph version shown on the site card.
 *
 * `highlights` are the full resume bullets. NOTHING RENDERS THEM: the resume
 * modal embeds the PDF directly rather than re-rendering its contents. They are
 * kept as structured source material for a future HTML resume view or for
 * indexable detail. Delete them if that never materializes; don't assume
 * editing them changes anything on the page.
 */
export type Job = {
  role: string
  company: string
  period: string
  location: string
  summary: string
  highlights: string[]
  stack: string[]
  /**
   * Square company logo in public/images/. Optional on purpose: entries with no
   * logo (independent research, self-directed work) render without one and the
   * card reflows, so never add a placeholder just to fill the slot.
   */
  logo?: string
  /** Company LinkedIn page. Only used when `logo` is set: it is the link target. */
  linkedin?: string
}

export const jobs: Job[] = [
  {
    role: 'Software Development Intern',
    company: 'APS Data Technologies',
    logo: '/images/aps.png',
    linkedin: 'https://www.linkedin.com/company/aps-data-technologies/',
    period: 'Dec. 2025 – Present',
    location: 'Remote',
    summary:
      'Built Google and Microsoft Entra OAuth flows from scratch in a Django backend: no third-party auth libraries: plus a hackathon management API and an admin document dashboard, all shipped into a production Django and Next.js platform.',
    highlights: [
      'Implemented Google and Microsoft Entra OAuth authentication flows in a Django backend from scratch without third-party libraries, handling token verification, cross-window messaging, and role-based registration paths, enabling secure login across multiple user roles in production.',
      'Built a hackathon management backend with full CRUD, user registration, project submission, and deadline enforcement, validating every edge case with Postman.',
      'Developed an admin document dashboard with filtering, email-based access invitations, and secure document downloads, integrated into the existing Django and Next.js codebase.',
      'Diagnosed and resolved AWS deployment failures: ECR migration, corrupted storage, and K12 platform deployment issues across dev and production: restoring platform stability.',
      'Conducted multi-account user testing on a K12 ERP platform across time and attendance, onboarding, and OIDC login modules, directing an AI coding agent to implement and patch features and validating outputs through manual testing and branch review.',
    ],
    stack: ['Django', 'Next.js', 'Python', 'OAuth / OIDC', 'AWS', 'Postman'],
  },
  {
    role: 'Data Science Platform Engineering Intern',
    company: 'Auto-Owners Insurance',
    logo: '/images/Auto-Owners.png',
    linkedin: 'https://www.linkedin.com/company/auto-owners-insurance/',
    period: 'May 2026 – Aug. 2026',
    location: 'Lansing, MI',
    summary:
      'Prototyped a Terraform IaC stack for ML batch inference spanning AWS and OpenShift, then delivered the evaluation against the team’s existing AWS CDK setup that led them to adopt Terraform.',
    highlights: [
      'Prototyped a Terraform IaC stack for ML batch inference, provisioning 7 AWS resources (SageMaker, ECR, S3, IAM) alongside OpenShift via the Kubernetes provider to enable portability between platforms.',
      'Evaluated Terraform against the team’s existing AWS CDK setup, comparing provisioning speed and configuration complexity, and delivered a migration recommendation the team adopted for future ML batch inference deployments.',
      'Fine-tuned a pre-trained PyTorch CV classifier for house-exterior view classification, tuning augmentations, hyperparameters, and network size through a parameterized argparse workflow, and logged runs to MLflow as the baseline for the SageMaker batch transform POC.',
    ],
    stack: ['Terraform', 'AWS SageMaker', 'Kubernetes', 'PyTorch', 'MLflow', 'Python'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Alchemy Software LLC',
    logo: '/images/alchemy.png',
    linkedin: 'https://www.linkedin.com/company/alchemy-software-llc/',
    period: 'May 2025 – Dec. 2025',
    location: 'Remote',
    summary:
      'Added a time attribute to the product’s existing task objects and delivered it seven days ahead of schedule, alongside a testing library that cut the work of writing new test cases by 90%.',
    highlights: [
      'Developed a system introducing a time attribute to existing task objects, letting users add time to tasks precisely: delivered 7 days ahead of schedule.',
      'Wrote over 20 test cases, including a testing library that reduced the work required for new test cases by 90%.',
      'Actively managed code conflicts and design integration within a 6+ member team, collaborating in weekly meetings to combine new features and streamline development workflows.',
      'Debugged and resolved critical issues within new features, ensuring stability for monthly version launches.',
    ],
    stack: ['Testing', 'Git', 'Agile'],
  },
  {
    role: 'Independent Research: Proving in AI',
    company: 'Michigan State University',
    period: 'Jan. 2025 – May 2025',
    location: 'East Lansing, MI',
    summary:
      'Independent research into the foundations of computer science and modern developments in AI, synthesized into a six-page paper and presented to the course cohort.',
    highlights: [
      'Explored 6 sources via Google Scholar to study the foundations of computer science and developments in AI.',
      'Presented synthesized findings to other students in a 13+ minute virtual presentation covering up-to-date research results and original conclusions.',
      'Wrote a 6-page paper with modern formatting and referencing practices condensing recent research findings.',
    ],
    stack: ['Research', 'Technical Writing'],
  },
]
