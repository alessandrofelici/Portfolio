import { useEffect } from 'react'
import { socials, socialsPage } from '../data/socials'
import { Card, GhostLink } from './ui'

/** Link page at /socials. Stands alone, without the portfolio's nav or footer. */
export function Socials() {
  useEffect(() => {
    document.title = socialsPage.documentTitle
  }, [])

  return (
    <div className="min-h-screen bg-cream font-body">
      {/* The cap is what gives desktop its wide side margins; below it the
          column fills the page apart from the gutter. */}
      <main className="mx-auto flex w-full max-w-xl flex-col items-center px-6 py-20">
        <img src={socialsPage.icon} alt="" width={96} height={96} className="rounded-sharp" />

        <h1 className="mt-6 mb-10 text-center font-libron text-display-lg font-normal text-ink">
          {socialsPage.title}
        </h1>

        <Card lift={false} className="w-full">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {socials.map(({ name, tag, href, icon: Icon }) => (
              <li key={name}>
                <GhostLink
                  lift
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name}: ${tag}`}
                >
                  <Icon size={24} />
                  <span className="min-w-0 truncate">{tag}</span>
                </GhostLink>
              </li>
            ))}
          </ul>
        </Card>
      </main>
    </div>
  )
}
