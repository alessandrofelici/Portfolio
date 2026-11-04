import { useEffect } from 'react'
import { socials, socialsPage } from '../data/socials'
import { Card, GhostLink } from './ui'

const DROP_IN = 'motion-safe:animate-drop-in'

/** When the icon lands: the duration of `--animate-drop-in`. Everything else waits for it. */
const ICON_LANDS_MS = 300
const LETTER_MS = 35
const DROP_STAGGER_MS = 50

const delay = (ms: number) => ({ animationDelay: `${ms}ms` })

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
        <img
          src={socialsPage.icon}
          alt=""
          width={96}
          height={96}
          className={`rounded-sharp ${DROP_IN}`}
        />

        {/* Each letter is laid out from the start and only revealed in turn, so
            the centered name never shifts as it types. */}
        <h1
          aria-label={socialsPage.title}
          className="mt-6 mb-10 text-center font-libron text-display-lg font-normal text-ink"
        >
          <span aria-hidden="true">
            {Array.from(socialsPage.title).map((letter, index) => (
              <span
                key={index}
                className="motion-safe:animate-type-in"
                style={delay(ICON_LANDS_MS + index * LETTER_MS)}
              >
                {letter}
              </span>
            ))}
          </span>
        </h1>

        <div className={`w-full ${DROP_IN}`} style={delay(ICON_LANDS_MS)}>
          <Card lift={false}>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {socials.map(({ name, tag, href, icon: Icon }, index) => (
                <li
                  key={name}
                  className={DROP_IN}
                  style={delay(ICON_LANDS_MS + (index + 1) * DROP_STAGGER_MS)}
                >
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
        </div>
      </main>
    </div>
  )
}
