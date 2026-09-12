import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Modes', href: '#modes' },
  { label: 'Method', href: '#method' },
  { label: 'Extension', href: '#extension' },
] as const

const MONO_LABEL =
  'cinematic-text-sm font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground'

export function Navbar() {
  return (
    <header className="relative z-10 grid w-full grid-cols-2 items-center gap-4 px-8 py-5 md:grid-cols-3">
      <a
        href="#"
        className={cn(MONO_LABEL, 'justify-self-start whitespace-nowrap text-foreground')}
      >
        <span aria-hidden="true">✳</span> One Thing &mdash; Focus App
      </a>

      <nav className="hidden items-center justify-center gap-7 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={cn(MONO_LABEL, 'transition-colors hover:text-foreground')}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center justify-end gap-4">
        <span className={cn(MONO_LABEL, 'hidden sm:inline')}>
          v1.0 &mdash; Free
        </span>
        <ThemeToggle />
      </div>
    </header>
  )
}
