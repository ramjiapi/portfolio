import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { site, socials } from '../../data/site'
import { GithubMark } from '../components/icons'
import { Reveal } from '../components/motion'
import { Section } from '../components/Section'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <Section
      id="contact"
      index="05"
      label="Establish connection"
      title="Let's talk security."
      intro="For research collaboration, disclosure follow-ups, bug bounty queries or a conversation about web application security, email or LinkedIn is the fastest route."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <div className="border border-line bg-surface p-[20px] sm:p-[22px]">
            <p className="mono-label text-accent">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block break-all font-display text-[clamp(19px,2.6vw,26px)] text-fg transition-colors hover:text-accent"
            >
              {site.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="mt-5 inline-flex h-9 items-center gap-2 rounded-[4px] border border-line px-3 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted transition-colors hover:border-line-strong hover:bg-surface-2 hover:text-fg"
            >
              {copied ? <Check className="size-3.5 text-accent" aria-hidden /> : <Copy className="size-3.5" aria-hidden />}
              {copied ? 'Copied' : 'Copy address'}
            </button>
            <p aria-live="polite" className="sr-only">
              {copied ? 'Email address copied to clipboard' : ''}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2.5">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[46px] items-center gap-2 rounded-[4px] bg-accent px-5 text-[13px] font-bold text-accent-ink transition-opacity hover:opacity-90"
            >
              Connect on LinkedIn
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[46px] items-center gap-2 rounded-[4px] border border-line px-5 text-[13px] text-fg transition-colors hover:border-line-strong hover:bg-surface-2"
            >
              <GithubMark className="size-4" />
              github.com/ramjiapi
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
            {socials.map((social) => (
              <li key={social.label} className="bg-surface">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 p-[18px] transition-colors hover:bg-surface-2"
                >
                  <span>
                    <span className="mono-label block text-fg">{social.label}</span>
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.14em] text-faint">{social.mark}</span>
                  </span>
                  <ArrowUpRight aria-hidden className="size-4 shrink-0 text-faint transition-colors group-hover:text-accent" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
