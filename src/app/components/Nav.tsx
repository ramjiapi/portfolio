import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

import { nav } from '../../data/site'
import { cx } from '../lib/cx'

const NAV_IDS = nav.map((item) => item.id)

function useActiveSection() {
  const [active, setActive] = useState<string>(NAV_IDS[0])

  useEffect(() => {
    const sections = NAV_IDS.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el))
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return active
}

type Theme = 'dark' | 'light'

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark',
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* private mode: the toggle still works for this session */
    }
  }, [theme])

  return { theme, toggle: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')) }
}

export function Nav() {
  const active = useActiveSection()
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-[10px]">
      <div className="mx-auto flex h-[59px] w-full max-w-[1080px] items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="shrink-0 font-mono text-[12.5px] tracking-[0.06em] text-fg">
          <span className="hidden min-[400px]:inline">ramji_singh</span>
          <span aria-hidden className="min-[400px]:hidden">rs</span>
          <span className="text-accent"> ::</span>
        </a>

        <nav aria-label="Primary" className="flex items-center gap-3.5 sm:gap-6">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? 'true' : undefined}
              className={cx(
                'text-[12.5px] lowercase transition-colors',
                active === item.id ? 'text-accent' : 'text-muted hover:text-fg',
                (item.id === 'platforms' || item.id === 'whoami') && 'hidden md:inline',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggle}
          aria-pressed={theme === 'light'}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          className="grid size-8 shrink-0 place-items-center rounded-[4px] border border-line text-muted transition-colors hover:border-line-strong hover:bg-surface-2 hover:text-fg"
        >
          {theme === 'dark' ? <Sun className="size-[14px]" aria-hidden /> : <Moon className="size-[14px]" aria-hidden />}
        </button>
      </div>
    </header>
  )
}
