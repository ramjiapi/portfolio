import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import type { Certification } from '../../data/site'

/** Full-size certificate preview. Closes on Escape, backdrop click or the X. */
export function CertificateDialog({ cert, onClose }: { cert: Certification; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg/92 p-3 backdrop-blur-[2px] sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-title"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-full w-full max-w-[880px] flex-col border border-line-strong bg-surface"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-4 py-3 sm:px-5">
          <div>
            <p id="certificate-title" className="mono-label text-accent">
              {cert.name}
            </p>
            <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">Issued by {cert.issuer}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close certificate preview"
            className="grid size-8 shrink-0 place-items-center rounded-[4px] border border-line text-muted transition-colors hover:border-line-strong hover:bg-surface-2 hover:text-fg"
          >
            <X className="size-4" aria-hidden />
          </button>
        </div>
        <div className="overflow-auto p-3 sm:p-4">
          <img
            src={cert.image}
            alt={cert.alt}
            className="mx-auto block h-auto max-h-[72vh] w-auto max-w-full object-contain"
          />
        </div>
      </div>
    </div>,
    document.body,
  )
}
