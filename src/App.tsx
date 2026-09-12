import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { VideoBackground } from '@/components/video-background'

export default function App() {
  return (
    <ThemeProvider>
      <main className="relative min-h-screen w-full overflow-hidden">
        <VideoBackground />

        {/* Section annotation carried over from the reference comp. */}
        <span className="pointer-events-none absolute left-1 top-1 z-20 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/30">
          Hero &mdash; Full-screen blob video
        </span>

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <div className="mt-auto">
            <Hero />
          </div>
        </div>
      </main>
    </ThemeProvider>
  )
}
