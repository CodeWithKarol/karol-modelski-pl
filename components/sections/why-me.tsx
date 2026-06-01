import { WHY_ME_CONFIG } from "@/lib/why-me"
import { ShieldCheck, Layers, Bot, Target } from "lucide-react"

const icons = [ShieldCheck, Layers, Bot, Target]

export function WhyMeSection() {
  return (
    <section
      id="dlaczego-ja"
      aria-labelledby="why-me-heading"
      className="relative bg-background py-12 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted/30 px-3 py-1">
            <span className="font-mono text-xs font-semibold tracking-wide text-muted-foreground">
              {WHY_ME_CONFIG.eyebrow}
            </span>
          </div>

          <h2
            id="why-me-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
          >
            {WHY_ME_CONFIG.headline}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {WHY_ME_CONFIG.intro}
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {WHY_ME_CONFIG.reasons.map((reason, i) => {
            const Icon = icons[i]
            return (
              <div key={reason.title} className="flex flex-col gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 dark:bg-amber-950/40">
                  <Icon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
