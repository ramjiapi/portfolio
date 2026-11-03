import { about, site } from '../../data/site'
import { Reveal } from '../components/motion'
import { Section } from '../components/Section'

export function Whoami() {
  return (
    <Section id="whoami" index="04" label="Whoami" title="Curiosity, turned into disclosures.">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">
        <div>
          {about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p
                className={
                  i === 0
                    ? 'max-w-[62ch] text-pretty text-[16px] leading-[1.75] text-muted'
                    : 'mt-5 max-w-[62ch] text-pretty text-[16px] leading-[1.75] text-muted'
                }
              >
                {i === 0 ? (
                  <>
                    I&apos;m <strong className="font-semibold text-fg">Ramji Singh</strong>, also known as{' '}
                    <span className="font-mono text-[13px] text-fg">ramjiapi</span>
                    {paragraph.slice("I'm Ramji Singh, also known as ramjiapi".length)}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <aside className="border border-line p-[20px]">
            <p className="mono-label text-accent">Focus</p>
            <ul className="mt-5 space-y-2.5">
              {site.keywords.map((keyword) => (
                <li key={keyword} className="flex items-start gap-2.5 text-[13px] leading-snug text-muted">
                  <span aria-hidden className="mt-[7px] size-[5px] shrink-0 bg-accent" />
                  {keyword}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
    </Section>
  )
}
