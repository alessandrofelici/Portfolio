/**
 * Projects, newest first.
 * Source: ~/resume/sections/projects.md and experiences.md
 *
 * Each project may carry one link, shown as the yellow pill in the card header:
 *
 * - `repo`  a GitHub repository, shown as the GitHub icon
 * - `paper` a PDF in public/documents/, shown as a "PDF" label
 *
 * Both open in a new tab. A project may have neither, in which case the header
 * shows only the title and dates.
 */
export type Project = {
  title: string
  period: string
  description: string
  stack: string[]
  repo?: string
  paper?: string
}

export const projects: Project[] = [
  {
    title: 'GapWrap',
    period: 'Jan. 2026 – Feb. 2026',
    description:
      'Crypto sandwich-attack detector built at SpartaHack 11. A Python listener and slippage engine flag bot-driven price manipulation on incoming transactions, while the frontend visualizes transaction risk and wraps trades in slippage protection: closing the price gap sandwich bots exploit.',
    stack: ['Python', 'Flask', 'TypeScript', 'React', 'Vite'],
    repo: 'https://github.com/alessandrofelici/GapWrap',
  },
  {
    title: 'Easy Text Transfer',
    period: 'Oct. 2025 – Dec. 2025',
    description:
      'Cross-platform text and note sync across desktop and mobile clients. A polling-based architecture with last-write-wins conflict resolution settles concurrent edits: the most recently timestamped write takes precedence, removing conflict ambiguity without a distributed consensus protocol.',
    stack: ['Electron', 'React Native', 'Expo', 'TypeScript', 'Firebase'],
    repo: 'https://github.com/alessandrofelici/easy-text-transfer',
  },
  {
    title: 'Syllabus to CSV',
    period: 'Jan. 2025 – Sep. 2025',
    description:
      'Chrome extension that reads a class syllabus and converts it into a CSV, turning a term of scattered due dates into a file that imports straight into a calendar or spreadsheet.',
    stack: ['JavaScript', 'Chrome Extension', 'REST'],
    repo: 'https://github.com/alessandrofelici/2WP-Syllabus-to-CSV',
  },
  {
    title: 'Proving in AI',
    period: 'Jan. 2025 – May 2025',
    description:
      'Independent honors research into the foundations of computer science and modern developments in AI. Six peer-reviewed sources synthesized into a six-page paper and a 13-minute presentation of the findings and original conclusions to the course cohort.',
    stack: ['Research', 'Technical Writing'],
    paper: '/documents/CSE-260-Honors-Project-Report.pdf',
  },
  {
    title: 'Fluent',
    period: 'Jan. 2025 – Feb. 2025',
    description:
      'Interactive language-learning chatbot built at SpartaHack X. Flask and LangChain drive Groq’s Llama 3.3 70B with a five-interaction memory buffer for context-aware tutoring, and a React frontend tracks quiz state, scoring, and language selection.',
    stack: ['React', 'TypeScript', 'Flask', 'LangChain', 'Groq'],
    repo: 'https://github.com/alessandrofelici/Fluent',
  },
]
