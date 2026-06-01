import { AGITATION_CONFIG } from "@/lib/agitation"
import { Check } from "lucide-react"

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
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted/30 px-3 py-1">
            <span className="font-mono text-xs font-semibold tracking-wide text-muted-foreground">
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
        <ul className="mt-12 space-y-6">
          {AGITATION_CONFIG.painPoints.map((point) => (
            <li key={point.title} className="flex gap-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-950/40">
                <Check className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">{point.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Summary & CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg leading-relaxed text-foreground">
            {AGITATION_CONFIG.summary}
          </p>
          
          <div className="mt-10 flex flex-col items-center gap-2">
            <a
              href={AGITATION_CONFIG.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-all hover:bg-foreground/85 hover:shadow-lg"
            >
              {AGITATION_CONFIG.cta.label}
            </a>
            <p className="text-xs text-muted-foreground">
              {AGITATION_CONFIG.cta.subtext}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
