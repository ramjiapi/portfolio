import { motion, useInView } from 'motion/react'
import { useEffect, useRef, useState, type ReactNode, type RefObject } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

/**
 * IntersectionObserver can miss a block that is jumped past — a draggy
 * scrollbar or a restored scroll position can move further than the observer's
 * margin between samples, which would leave the block invisible for good.
 * Anything that has ended up above the viewport counts as revealed.
 */
function usePastViewport(ref: RefObject<HTMLElement | null>) {
  const [past, setPast] = useState(false)

  useEffect(() => {
    if (past) return
    let last = 0
    const check = () => {
      const element = ref.current
      if (element && element.getBoundingClientRect().top < 0) setPast(true)
    }
    const onScroll = () => {
      const now = performance.now()
      if (now - last < 120) return
      last = now
      check()
    }
    check()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [past, ref])

  return past
}

/** A block that rises into place the first time it is scrolled into view. */
export function Reveal({ children, delay = 0, className, y = 18 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '160px 0px -40px 0px' })
  const past = usePastViewport(ref)
  const shown = inView || past

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  )
}
