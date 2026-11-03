import { ArrowUpRight } from 'lucide-react'

import { platforms } from '../../data/site'
import { Reveal } from '../components/motion'
import { Section } from '../components/Section'

export function Platforms() {
  return (
    <Section
      id="platforms"
      index="02"
      label="Platforms"
      title="Where the reports live."
      intro="Every profile below is a live destination. Handles differ between platforms, so each card carries the one that belongs to that account."
    >
      <ul className="grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-3">
        {platforms.map((platform, i) => (
          <li key={platform.name} className="bg-surface">
            <Reveal delay={i * 0.06} className="h-full">
              <a
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${platform.name} profile — ${platform.handle} (opens in a new tab)`}
                className="group flex h-full flex-col p-[20px] transition-colors hover:bg-surface-2 sm:p-[22px]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mono-label text-fg">{platform.name}</p>
                    <p className="mt-1.5 font-mono text-[11px] tracking-[0.06em] text-faint">{platform.handle}</p>
                  </div>
                  <ArrowUpRight aria-hidden className="size-4 shrink-0 text-faint transition-colors group-hover:text-accent" />
                </div>

                <p className="mt-9 font-display text-[clamp(40px,4.6vw,54px)] leading-none text-fg">
                  {platform.value}
                  {platform.suffix ? (
                    <span className="ml-2.5 align-middle font-mono text-[10.5px] uppercase tracking-[0.16em] text-accent">
                      {platform.suffix}
                    </span>
                  ) : null}
                </p>
                <p className="mono-label mt-3 text-faint">{platform.rankLabel}</p>

                <p className="mt-5 max-w-[32ch] text-pretty text-[13.5px] leading-[1.65] text-muted">{platform.blurb}</p>

                <span className="mono-label mt-auto inline-flex items-center gap-2 pt-7 text-accent">
                  Open profile
                  <ArrowUpRight aria-hidden className="size-3.5" />
                </span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
