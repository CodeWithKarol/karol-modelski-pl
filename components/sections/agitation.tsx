import { AGITATION_CONFIG } from "@/lib/agitation"
import { AlertTriangle } from "lucide-react"

export function AgitationSection() {
  return (
    <section
      id="agitacja"
      aria-labelledby="agitation-heading"
      className="relative bg-background py-12 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1">
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-500">
              {AGITATION_CONFIG.eyebrow}
            </span>
          </div>

          <h2
            id="agitation-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
          >
            {AGITATION_CONFIG.headline}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {AGITATION_CONFIG.intro}
          </p>
        </div>

        {/* Pain points */}
        <div className="mt-12 grid gap-6 px-4 sm:px-0">
          {AGITATION_CONFIG.painPoints.map((point) => (
            <div key={point.title} className="flex flex-col sm:flex-row gap-4 p-6 rounded-xl border border-border bg-muted/20">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400/10">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground leading-tight">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary & CTA */}
        <div className="mt-12 p-8 rounded-2xl bg-muted/30 border border-border">
          <p className="text-md leading-relaxed text-foreground">
            {AGITATION_CONFIG.summary}
          </p>
          
          <div className="mt-10 flex flex-col items-center gap-3 w-full max-w-sm mx-auto px-4 sm:px-0">
            <a
              href={AGITATION_CONFIG.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-4 font-bold text-background transition-all hover:bg-foreground/90 w-full text-center text-sm sm:text-base"
            >
              {AGITATION_CONFIG.cta.label}
            </a>
            <p className="text-[12px] text-muted-foreground text-center leading-snug w-full px-2">
              {AGITATION_CONFIG.cta.subtext}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
