import { disclosure, socials } from '../../data/site'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-[1080px] px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
            © {new Date().getFullYear()} Ramji Singh · ramjiapi
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-fg"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 max-w-[74ch] border-t border-line pt-5 text-[11.5px] leading-relaxed text-faint">{disclosure}</p>
      </div>
    </footer>
  )
}
