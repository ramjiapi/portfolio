import { Maximize2 } from 'lucide-react'
import { useState } from 'react'

import { achievements, certifications, type Certification } from '../../data/site'
import { CertificateDialog } from '../components/CertificateDialog'
import { Reveal } from '../components/motion'
import { Section } from '../components/Section'

export function Credentials() {
  const [preview, setPreview] = useState<Certification | null>(null)

  return (
    <Section
      id="credentials"
      index="03"
      label="Credentials"
      title="The paper trail, briefly."
      intro={
        <>
          Two certifications and two competition results, kept short on purpose. Open either certificate to read the
          original document; the security work itself is documented on the{' '}
          <a href="#platforms" className="link-draw text-accent">
            platforms
          </a>{' '}
          above.
        </>
      }
    >
      <div className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
        {certifications.map((cert, i) => (
          <CertificateCard key={cert.code} cert={cert} index={i} onPreview={() => setPreview(cert)} />
        ))}

        {achievements.map((achievement, i) => (
          <Reveal key={achievement.title} delay={0.12 + i * 0.06} className="h-full bg-surface">
            <article className="flex h-full flex-col p-[20px] sm:p-[22px]">
              <p className="mono-label text-accent">{i === 0 ? 'Hackathons' : 'Capture the flag'}</p>
              <p className="font-display mt-8 text-[clamp(38px,4.4vw,50px)] leading-none text-fg">{achievement.code}</p>
              <p className="mt-2 text-[14px] leading-snug text-fg">{achievement.title}</p>
              <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-faint">{achievement.meta}</p>
              <p className="mt-auto pt-6 text-[13px] leading-[1.6] text-muted">{achievement.note}</p>
            </article>
          </Reveal>
        ))}
      </div>

      {preview ? <CertificateDialog cert={preview} onClose={() => setPreview(null)} /> : null}
    </Section>
  )
}

function CertificateCard({ cert, index, onPreview }: { cert: Certification; index: number; onPreview: () => void }) {
  const [failed, setFailed] = useState(false)

  return (
    <Reveal delay={index * 0.06} className="h-full bg-surface">
      <article className="flex h-full flex-col p-[20px] sm:p-[22px]">
        <div className="flex items-baseline justify-between gap-3">
          <p className="mono-label text-accent">Certification</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">{cert.code}</p>
        </div>

        <div className="mt-5 border border-line bg-bg">
          {failed ? (
            <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 px-4 text-center">
              <span className="font-display text-[40px] leading-none text-fg">{cert.code}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">Certificate image unavailable</span>
            </div>
          ) : (
            <button
              type="button"
              onClick={onPreview}
              aria-label={`Open ${cert.name} certificate preview`}
              className="group block w-full focus-visible:outline-offset-[-4px]"
            >
              <img
                src={cert.image}
                alt={cert.alt}
                loading="lazy"
                decoding="async"
                width={640}
                height={480}
                onError={() => setFailed(true)}
                className="aspect-[4/3] w-full bg-bg object-contain p-2 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01]"
              />
            </button>
          )}
        </div>

        <p className="mt-5 text-[15px] font-semibold leading-snug text-fg">{cert.name}</p>
        <dl className="mt-4 border-t border-line pt-3">
          <div className="flex items-baseline justify-between gap-4">
            <dt className="mono-label text-faint">Issuer</dt>
            <dd className="font-mono text-[11px] tracking-[0.06em] text-muted">{cert.issuer}</dd>
          </div>
        </dl>

        {failed ? (
          <p className="mt-auto pt-5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-faint">{cert.note}</p>
        ) : (
          <button
            type="button"
            onClick={onPreview}
            className="mono-label mt-auto inline-flex items-center gap-2 self-start pt-5 text-accent transition-opacity hover:opacity-80"
          >
            View certificate
            <Maximize2 className="size-3.5" aria-hidden />
          </button>
        )}
      </article>
    </Reveal>
  )
}
