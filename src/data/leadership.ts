/**
 * Organizations and volunteering.
 * Source: ~/resume/sections/organizations.md and volunteering.md
 */
export type Organization = {
  name: string
  role: string
  period: string
  summary: string
  highlights: string[]
}

export const organizations: Organization[] = [
  {
    name: 'Imagine Software Consultancy',
    role: 'Project Director',
    period: 'Aug. 2024 – Present',
    summary:
      'Run delivery across 7 concurrent client projects — weekly check-ins with project leads, specifications defined with clients each semester, and the client communication that keeps deadlines, payments, and expectations aligned. All 7 projects met MVP requirements and reached deployment.',
    highlights: [
      'Led weekly check-ins with project leads across 7 concurrent client projects, identifying blockers early to maintain progress before semester checkpoints — all 7 projects met MVP requirements and reached deployment.',
      'Defined project specifications and requirements with clients each semester, producing reference documentation that let development teams begin work immediately and stay aligned through delivery.',
      'Maintained ongoing client communication covering deadlines, payments, and expectations across 7 active engagements, retaining every client through semester delivery.',
      'Developed and delivered educational workshops on developer tools and Git for 10+ members, including slides, reference documents, and live demos.',
      'Helped manage the club’s educational platform, instructing new members in programming languages and frameworks to prepare them for advanced projects.',
    ],
  },
  {
    name: 'FRC Team 3604 Goon Squad',
    role: 'Mechanical Lead',
    period: 'Sep. 2021 – May 2024',
    summary:
      'Designed and manufactured the game piece launch system, iterating on the subsystem for a 20% gain in scoring accuracy, and coordinated 5 groups of 15+ mechanical team members through fast design cycles.',
    highlights: [
      'Designed and manufactured a game piece launch system, iterating on the subsystem to increase scoring accuracy by 20% through greater control over the piece.',
      'Managed 5 groups of 15+ mechanical team members, communicating design decisions and priorities to accelerate development cycles.',
      'Coordinated with the software team through functional prototype models and regular meetings, maximizing robot efficiency.',
      'Optimized solutions around design constraints by prioritizing efficiency and speed, contributing to a ranking of 141 out of 3,472 teams at the world championship.',
    ],
  },
]

export type Volunteering = {
  organization: string
  role: string
  period: string
  summary: string
}

export const volunteering: Volunteering[] = [
  {
    organization: 'MSU Science Festival',
    role: 'Quantum Computing in The Quantum Zone',
    period: 'Apr. 2025',
    summary: 'Taught nearly 250 visitors quantum algorithms using the IBM Quantum Composer.',
  },
  {
    organization: 'FIRST Robotics Competition',
    role: 'Referee, Official Scorer, Crowd Control',
    period: 'June 2024 – June 2025',
    summary: 'Helped run high school competitions over weekends, spanning 100+ matches.',
  },
]
