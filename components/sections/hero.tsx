import { WorkflowDiagram } from "@/components/workflow-diagram"
import { HERO_CONFIG } from "@/lib/hero"

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Top-left glow */}
        <div className="absolute -left-64 -top-32 h-[600px] w-[600px] rounded-full bg-amber-400/5 blur-3xl" />
        {/* Bottom-right glow */}
        <div className="absolute -bottom-32 -right-48 h-[500px] w-[500px] rounded-full bg-indigo-400/5 blur-3xl" />
        {/* Hairline grid */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Left: copy */}
          <div className="flex flex-col gap-8 lg:col-span-6">
            {/* H1 */}
            <h1
              id="hero-heading"
              className="text-2xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl"
            >
              {HERO_CONFIG.headline.prefix}
              {" "}
              <span className="relative inline-block text-amber-600 dark:text-amber-400">
                {HERO_CONFIG.headline.highlight}
              </span>
              {" "}
              {HERO_CONFIG.headline.suffix}
            </h1>

            {/* Subheadline */}
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {HERO_CONFIG.subheadline}
            </p>

            {/* CTA block */}
            <div className="flex flex-col gap-2">
              <a
                href={HERO_CONFIG.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-foreground/85"
              >
                {HERO_CONFIG.cta.label}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <span className="text-[11px] text-muted-foreground">{HERO_CONFIG.cta.subtext}</span>
            </div>
          </div>

          {/* Right: workflow diagram */}
          <div className="relative lg:order-last lg:col-span-6">
            <WorkflowDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}
