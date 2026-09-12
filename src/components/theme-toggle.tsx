import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/lib/theme-context'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative grid h-6 w-6 cursor-pointer place-items-center text-muted-foreground transition-colors hover:text-foreground"
    >
      <Sun
        className={cn(
          'absolute size-[14px] transition-all duration-500 ease-out',
          isDark
            ? 'rotate-90 scale-50 opacity-0'
            : 'rotate-0 scale-100 opacity-100',
        )}
      />
      <Moon
        className={cn(
          'absolute size-[14px] transition-all duration-500 ease-out',
          isDark
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-90 scale-50 opacity-0',
        )}
      />
    </button>
  )
}
