import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { VideoBackground } from '@/components/video-background'

export default function App() {
  return (
    <ThemeProvider>
      <main className="relative min-h-screen w-full overflow-hidden">
        <VideoBackground />

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <div className="flex flex-1 items-center justify-center">
            <Hero />
          </div>
        </div>
      </main>
    </ThemeProvider>
  )
}
