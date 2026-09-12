import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useTheme } from '@/lib/theme-context'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <Button
      variant="glass"
      size="none"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative h-10 w-10 cursor-pointer rounded-full text-foreground [&_svg]:size-[18px]"
    >
      <Sun
        className={cn(
          'absolute transition-all duration-500 ease-out',
          isDark
            ? 'rotate-90 scale-50 opacity-0'
            : 'rotate-0 scale-100 opacity-100',
        )}
      />
      <Moon
        className={cn(
          'absolute transition-all duration-500 ease-out',
          isDark
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-90 scale-50 opacity-0',
        )}
      />
    </Button>
  )
}
