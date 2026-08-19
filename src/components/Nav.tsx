import { profile } from '../data/profile'
import { PrimaryButton } from './ui'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
]

export function Nav({ onOpenResume }: { onOpenResume: () => void }) {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-line bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-[1.1rem] font-semibold tracking-heading text-ink"
        >
          {profile.name}
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-sm font-medium text-ink transition-opacity hover:opacity-60 sm:inline"
            >
              {link.label}
            </a>
          ))}
          <PrimaryButton onClick={onOpenResume}>Resume</PrimaryButton>
        </div>
      </div>
    </nav>
  )
}
