export function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center px-6 pb-10 text-center">
      <h1
        className="cinematic-text animate-fade-rise max-w-5xl text-4xl font-normal italic leading-[1.05] tracking-[-0.01em] sm:text-6xl md:text-7xl lg:text-[5rem]"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Focus in a Distracted World
      </h1>

      <p className="cinematic-text-sm animate-fade-rise-delay mt-5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-[11px]">
        One task. Zero noise. Then you&rsquo;re free.
      </p>

      <button
        type="button"
        className="animate-fade-rise-delay-2 mt-7 cursor-pointer rounded-full bg-cta px-8 py-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-cta-foreground transition-transform duration-200 ease-out hover:scale-[1.03]"
      >
        Begin your session
      </button>
    </section>
  )
}
