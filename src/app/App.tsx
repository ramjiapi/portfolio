import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { Home } from './pages/Home'

export function App() {
  return (
    <>
      <div aria-hidden className="page-grid pointer-events-none fixed inset-0 -z-10" />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-[4px] focus:bg-accent focus:px-4 focus:py-2 focus:text-[13px] focus:font-bold focus:text-accent-ink"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Home />
      </main>
      <Footer />
    </>
  )
}
