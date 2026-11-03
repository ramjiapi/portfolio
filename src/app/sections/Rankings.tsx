import { ArrowUpRight } from 'lucide-react'

import { stats } from '../../data/site'
import { Reveal } from '../components/motion'
import { Section } from '../components/Section'

export function Rankings() {
  return (
    <Section
      id="rankings"
      index="01"
      label="Reported rankings"
      title="Four numbers, reported."
      intro="Reported figures, kept exactly as supplied. All three platform rankings are current positions, and the 45+ count spans the supplied platforms rather than a single one."
    >
      <ul className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <li key={stat.label} className="bg-surface">
            <Reveal delay={i * 0.05} className="h-full">
              <a
                href={stat.href}
                {...(stat.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex h-full flex-col p-[20px] transition-colors hover:bg-surface-2 sm:p-[22px]"
              >
                <span className="flex items-start justify-between gap-3">
                  <span className="font-display text-[clamp(38px,4.6vw,52px)] leading-none text-fg">{stat.value}</span>
                  <ArrowUpRight
                    aria-hidden
                    className="mt-1 size-4 shrink-0 text-faint transition-colors group-hover:text-accent"
                  />
                </span>
                <span className="mono-label mt-6 text-fg">{stat.label}</span>
                <span className="mt-1.5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-faint">
                  {stat.sub}
                </span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>

      <p className="mt-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-faint">
        Standoff 365 reports a worldwide position; YesWeHack and Intigriti are reported platform rankings.
      </p>
    </Section>
  )
}
