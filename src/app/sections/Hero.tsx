import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

import { platformChips, site } from '../../data/site'
import { GithubMark } from '../components/icons'
import { Reveal } from '../components/motion'
import { cx } from '../lib/cx'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative">
      <div className="mx-auto w-full max-w-[1080px] px-5 pb-16 pt-10 sm:px-8 sm:pb-[92px] sm:pt-[86px]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_334px] lg:items-start lg:gap-[54px]">
          <div>
            {/* On small screens the reference leads with a compact portrait and
                identity line instead of the large portrait panel. */}
            <div className="mb-7 flex items-center gap-3 lg:hidden">
              <Portrait className="size-12 shrink-0 rounded-full" />
              <span className="min-w-0">
                <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-fg">{site.handle}</span>
                <span className="mt-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  <span aria-hidden className="size-[6px] shrink-0 rounded-full bg-accent" />
                  bug bounty researcher
                </span>
              </span>
            </div>

            <Reveal y={10}>
              <p className="mono-label flex items-start gap-3 text-accent">
                <span aria-hidden className="mt-[5px] size-[7px] shrink-0 bg-accent" />
                {site.eyebrow}
              </p>
            </Reveal>

            <h1 id="hero-title" className="font-display mt-5 text-[clamp(46px,8.6vw,74px)]">
              <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
                <motion.span
                  className="block"
                  initial={{ y: '108%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.05, ease }}
                >
                  {site.name}
                </motion.span>
              </span>
              <span className="sr-only"> — {site.headline}</span>
            </h1>

            <Reveal delay={0.15} y={12}>
              <a
                href="#rankings"
                className="mt-5 inline-block max-w-[26ch] font-display text-[clamp(21px,2.6vw,29px)] leading-[1.22] text-accent underline decoration-accent/40 decoration-[1.5px] underline-offset-[7px] transition-colors hover:decoration-accent"
              >
                {site.lead}
              </a>
            </Reveal>

            <Reveal delay={0.22} y={12}>
              <p className="mt-6 max-w-[54ch] text-pretty text-[15px] leading-[1.7] text-muted sm:text-[16px]">
                <strong className="font-semibold text-fg">{site.jobTitle} and ethical hacker.</strong> {site.intro}
              </p>
            </Reveal>

            <Reveal delay={0.3} y={12}>
              <div className="mt-8 flex flex-wrap items-center gap-2.5">
                <a
                  href="#rankings"
                  className="inline-flex h-[46px] items-center gap-2 rounded-[4px] bg-accent px-5 text-[13px] font-bold text-accent-ink transition-opacity hover:opacity-90"
                >
                  See rankings
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[46px] items-center gap-2 rounded-[4px] border border-line px-5 text-[13px] text-fg transition-colors hover:border-line-strong hover:bg-surface-2"
                >
                  LinkedIn
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile (opens in a new tab)"
                  title="GitHub"
                  className="grid h-[46px] w-[46px] place-items-center rounded-[4px] border border-line text-muted transition-colors hover:border-line-strong hover:bg-surface-2 hover:text-fg"
                >
                  <GithubMark className="size-[17px]" />
                </a>
                {platformChips.map((chip) => (
                  <a
                    key={chip.label}
                    href={chip.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${chip.label} profile (opens in a new tab)`}
                    title={chip.label}
                    className="grid h-[46px] min-w-[46px] place-items-center rounded-[4px] border border-line px-2.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted transition-colors hover:border-line-strong hover:bg-surface-2 hover:text-fg"
                  >
                    {chip.mark}
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.36} y={8}>
              <p className="mono-label mt-7 text-faint">45+ valid bugs reported · rankings self-reported</p>
            </Reveal>
          </div>

          <PortraitPanel />
        </div>
      </div>
    </section>
  )
}

/** The real photograph, with the monogram kept as a fallback if it is missing. */
function Portrait({ className }: { className?: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span
        aria-hidden
        className={cx('grid place-items-center border border-line bg-surface font-display text-[19px] leading-none text-fg', className)}
      >
        rs
      </span>
    )
  }

  return (
    <img
      src={site.photo}
      alt={site.photoAlt}
      width={668}
      height={668}
      loading="eager"
      fetchPriority="high"
      decoding="async"
      onError={() => setFailed(true)}
      className={cx('border border-line bg-surface object-cover object-center', className)}
    />
  )
}

function PortraitPanel() {
  return (
    <Reveal delay={0.2} className="hidden lg:block lg:pt-2">
      <figure className="mx-auto w-full max-w-[334px]">
        <div className="group relative aspect-square w-full overflow-hidden border border-line bg-surface">
          <Portrait className="size-full border-0" />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-accent/40"
          />
        </div>
        <figcaption className="mt-3.5 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
          <span className="flex items-center gap-2 text-muted">
            <span aria-hidden className="size-[6px] rounded-full bg-accent" />
            bug bounty researcher
          </span>
          <span>{site.handle}</span>
        </figcaption>
      </figure>
    </Reveal>
  )
}
