import type { ReactNode } from 'react'

import { Reveal } from './motion'

export function Section({
  id,
  index,
  label,
  title,
  intro,
  children,
}: {
  id: string
  index: string
  label: string
  title: string
  intro?: ReactNode
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-[80px]">
      <div className="mx-auto w-full max-w-[1080px] px-5 py-16 sm:px-8 sm:py-[92px]">
        <Reveal>
          <p className="mono-label flex items-center gap-3 text-accent">
            <span aria-hidden className="size-[7px] shrink-0 bg-accent" />
            {index} / {label}
          </p>
          <h2 id={`${id}-title`} className="font-display mt-5 max-w-[24ch] text-balance text-[clamp(26px,3.6vw,40px)]">
            {title}
          </h2>
          {intro ? <div className="mt-4 max-w-[64ch] text-pretty text-[15px] leading-[1.7] text-muted sm:text-[16px]">{intro}</div> : null}
        </Reveal>
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  )
}
