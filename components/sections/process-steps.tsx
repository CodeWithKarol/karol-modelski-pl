import { PROCESS_CONFIG } from "@/lib/process"
import { ArrowRight, Check } from "lucide-react"

export function ProcessSteps() {
  return (
    <section
      id="proces"
      aria-labelledby="process-heading"
      className="relative bg-background py-12 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted/30 px-3 py-1">
            <span className="font-mono text-xs font-semibold tracking-wide text-muted-foreground">
              {PROCESS_CONFIG.eyebrow}
            </span>
          </div>

          <h2
            id="process-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
          >
            {PROCESS_CONFIG.headline}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {PROCESS_CONFIG.description}
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 space-y-8">
          {PROCESS_CONFIG.steps.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 font-mono font-bold text-amber-600 dark:bg-amber-950/40 dark:text-amber-400">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href={PROCESS_CONFIG.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-all hover:bg-foreground/85 hover:shadow-lg"
          >
            {PROCESS_CONFIG.cta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
