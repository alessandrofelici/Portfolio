import { useEffect } from 'react'
import { profile } from '../data/profile'

/**
 * Resume sheet: embeds the real PDF via the browser's native viewer.
 *
 * The PDF is the resume. Nothing here re-renders its contents from src/data,
 * so the modal can never drift from the file people download.
 *
 * `<object>` is used rather than `<iframe>` because its children act as
 * built-in fallback content for browsers that cannot display PDFs inline,
 * which is most mobile browsers.
 *
 * Extends the Figma source with Escape-to-close, background scroll locking,
 * and dialog semantics. See DESIGN.md § Deviations.
 */
/**
 * Whether the browser renders PDFs inline.
 *
 * `<object>` only swaps in its fallback children when the resource itself fails
 * to load; a browser with no PDF viewer often paints an empty box instead. Most
 * mobile browsers are in that category, so ask directly. Browsers that don't
 * implement the property are treated as capable, since the `<object>` children
 * still cover them.
 */
function inlinePdfSupported() {
  return typeof navigator === 'undefined' || navigator.pdfViewerEnabled !== false
}

/** Shown when the PDF can't be displayed in place. */
function PdfFallback() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
      <p className="text-sm leading-relaxed font-light text-ink-soft">
        This browser can&rsquo;t display PDFs in place.
      </p>
      <a
        href={profile.resumeFile}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-sharp bg-yellow px-4 py-2 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
      >
        Open the PDF
      </a>
    </div>
  )
}

export function ResumeModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Resume: ${profile.name}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm sm:p-6"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="relative flex h-[88vh] w-full max-w-3xl flex-col rounded-sharp border border-line bg-paper">
        {/* Header */}
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-line px-6 py-4">
          <div>
            <span className="font-display text-base font-semibold tracking-title text-ink">
              Resume
            </span>
            <span className="ml-2 text-sm text-ink-muted">{profile.name}</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={profile.resumeFile}
              download={profile.resumeFileName}
              className="rounded-sharp bg-yellow px-3 py-1.5 text-xs font-medium text-ink transition-opacity hover:opacity-80"
            >
              Download PDF
            </a>
            <button
              onClick={onClose}
              className="rounded-sharp border border-line px-3 py-1.5 text-sm font-medium text-ink transition-opacity hover:opacity-60"
            >
              Close
            </button>
          </div>
        </div>

        {/* The PDF itself. #view=FitH fits the page width on load. */}
        <div className="flex-1 overflow-hidden bg-cream">
          {inlinePdfSupported() ? (
            <object
              data={`${profile.resumeFile}#view=FitH`}
              type="application/pdf"
              aria-label={`Resume PDF: ${profile.name}`}
              className="h-full w-full"
            >
              <PdfFallback />
            </object>
          ) : (
            <PdfFallback />
          )}
        </div>
      </div>
    </div>
  )
}
