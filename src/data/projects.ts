/**
 * Projects, newest first.
 * Source: ~/resume/sections/projects.md
 *
 * `repo` is optional. When set, the card header shows the yellow GitHub pill;
 * when omitted it falls back to the muted date range.
 */
export type Project = {
  title: string
  period: string
  description: string
  stack: string[]
  repo?: string
}

export const projects: Project[] = [
  {
    title: 'GapWrap',
    period: 'Jan. 2026 – Feb. 2026',
    description:
      'Crypto sandwich-attack detector built at SpartaHack 11. A Python listener and slippage engine flag bot-driven price manipulation on incoming transactions, while the frontend visualizes transaction risk and wraps trades in slippage protection: closing the price gap sandwich bots exploit.',
    stack: ['Python', 'Flask', 'TypeScript', 'React', 'Vite'],
  },
  {
    title: 'Easy Text Transfer',
    period: 'Oct. 2025 – Dec. 2025',
    description:
      'Cross-platform text and note sync across desktop and mobile clients. A polling-based architecture with last-write-wins conflict resolution settles concurrent edits: the most recently timestamped write takes precedence, removing conflict ambiguity without a distributed consensus protocol.',
    stack: ['Electron', 'React Native', 'Expo', 'TypeScript', 'Firebase'],
  },
  {
    title: 'Fluent',
    period: 'Jan. 2025 – Feb. 2025',
    description:
      'Interactive language-learning chatbot built at SpartaHack X. Flask and LangChain drive Groq’s Llama 3.3 70B with a five-interaction memory buffer for context-aware tutoring, and a React frontend tracks quiz state, scoring, and language selection.',
    stack: ['React', 'TypeScript', 'Flask', 'LangChain', 'Groq'],
  },
  {
    title: 'Ollama Client & Gemini Extension',
    period: 'Jan. 2025 – Sep. 2025',
    description:
      'A React frontend for interacting with local Ollama models, paired with a Chrome extension that communicates with Gemini and Mistral over REST: built to get hands-on with modern web tooling and AI integration.',
    stack: ['React', 'JavaScript', 'REST', 'Ollama'],
  },
]
