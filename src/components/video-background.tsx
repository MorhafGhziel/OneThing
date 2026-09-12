import { useEffect, useRef } from 'react'

import { useTheme } from '@/lib/theme-context'
import { cn } from '@/lib/utils'

const DAY_VIDEO = '/kling_20260911_VIDEO_animate_th_6061_0.mp4'
const NIGHT_VIDEO = '/night.mp4'

/** Must match the opacity transition duration below. */
const CROSSFADE_MS = 900

export function VideoBackground() {
  const { theme } = useTheme()
  const dayRef = useRef<HTMLVideoElement>(null)
  const nightRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const incoming = theme === 'dark' ? nightRef.current : dayRef.current
    const outgoing = theme === 'dark' ? dayRef.current : nightRef.current

    // Start the incoming clip before it fades in so the crossfade never
    // reveals a frozen frame.
    void incoming?.play().catch(() => {})

    const timer = window.setTimeout(() => outgoing?.pause(), CROSSFADE_MS)
    return () => window.clearTimeout(timer)
  }, [theme])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        ref={dayRef}
        className={cn(
          'absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-in-out',
          theme === 'light' ? 'opacity-100' : 'opacity-0',
        )}
        src={DAY_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <video
        ref={nightRef}
        className={cn(
          'absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-in-out',
          theme === 'dark' ? 'opacity-100' : 'opacity-0',
        )}
        src={NIGHT_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
    </div>
  )
}
