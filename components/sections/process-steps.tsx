import { PROCESS_CONFIG } from "@/lib/process-config"

export function ProcessStepsSection() {
  return (
    <section className="py-12 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 mb-4">
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-500">
              {PROCESS_CONFIG.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground sm:text-4xl">
            {PROCESS_CONFIG.headline}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            {PROCESS_CONFIG.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_CONFIG.steps.map((step, index) => (
            <div key={index} className="relative p-8 rounded-xl border border-border bg-muted/20 flex flex-col">
              <div className="mb-6 text-4xl font-bold text-amber-600/30 font-mono">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-col gap-3 items-center w-full max-w-sm mx-auto px-4 sm:px-0">
            <a
              href={PROCESS_CONFIG.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-4 font-bold text-background transition-all hover:bg-foreground/90 w-full text-center text-sm sm:text-base"
            >
              {PROCESS_CONFIG.cta.label}
            </a>
            <p className="text-[12px] text-muted-foreground text-center leading-snug w-full px-2">
              {PROCESS_CONFIG.cta.subtext}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
