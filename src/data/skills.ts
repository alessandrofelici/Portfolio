/**
 * Technical skills, grouped for display.
 * Source: ~/resume/sections/technical-skills.md
 */
export type SkillGroup = {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Java', 'C', 'C++', 'TypeScript', 'JavaScript', 'Python', 'R', 'Bash', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks & Libraries',
    items: [
      'React',
      'React Native',
      'Next.js',
      'PyTorch',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'SymPy',
      'Firebase',
    ],
  },
  {
    label: 'Cloud & Infrastructure',
    items: [
      'AWS',
      'SageMaker',
      'Lambda',
      'S3',
      'ECR',
      'Terraform',
      'Kubernetes',
      'MLflow',
    ],
  },
  {
    label: 'Tools',
    items: [
      'Git',
      'GitHub',
      'VS Code',
      'Ubuntu',
      'Atlassian Suite',
      'RStudio',
      'Ollama',
      'Claude',
      'Gemini',
      'Arduino IDE',
      'Fusion 360',
    ],
  },
]

/**
 * Skills paraded in the nav search placeholder, in cycle order.
 *
 * A curated subset rather than every item above: the placeholder is an
 * invitation, not an index, and cycling all 38 would take a minute and a half
 * to loop. Keep every entry present in `skillGroups`, so the hint never
 * advertises a search that comes back empty.
 */
export const searchHints: string[] = [
  'React',
  'TypeScript',
  'Terraform',
  'Python',
  'AWS',
  'PyTorch',
  'Kubernetes',
  'Firebase',
  'Next.js',
  'MLflow',
]
