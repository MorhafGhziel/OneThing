import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home', href: '#', active: true },
  { label: 'Studio', href: '#studio' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
  { label: 'Reach Us', href: '#reach-us' },
] as const

export function Navbar() {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-7xl flex-row items-center justify-between px-8 py-6">
      <a
        href="#"
        className="text-3xl tracking-tight text-foreground"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Velorah<sup className="text-xs">®</sup>
      </a>

      <nav className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-current={'active' in link && link.active ? 'page' : undefined}
            className={cn(
              'text-sm transition-colors hover:text-foreground',
              'active' in link && link.active
                ? 'text-foreground'
                : 'text-muted-foreground',
            )}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Button
          variant="glass"
          size="none"
          className="rounded-full px-6 py-2.5 text-sm text-foreground"
        >
          Begin Journey
        </Button>
      </div>
    </header>
  )
}
