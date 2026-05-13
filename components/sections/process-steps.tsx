import { MessageSquare, Wrench, CheckCircle2, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Bezpłatna Diagnoza",
    duration: "15 minut",
    description:
      "Rozmawiamy o jednym procesie, który najbardziej spowalnia Twoją firmę. Analizuję Twoje narzędzia i wskazuję rozwiązanie.",
    accent: {
      bg: "bg-violet-100 dark:bg-violet-950/40",
      icon: "text-violet-600 dark:text-violet-400",
      number: "text-violet-300/70 dark:text-violet-700/50",
      pill: "bg-violet-50 text-violet-600 border-violet-200 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-800/40",
    },
  },
  {
    number: "02",
    icon: Wrench,
    title: "Szybkie Wdrożenie",
    duration: "W tle",
    description:
      "Buduję stabilny workflow w n8n. Całość konfiguruję bezpiecznie w tle, bez zakłócania pracy Twojego zespołu.",
    accent: {
      bg: "bg-amber-100 dark:bg-amber-950/40",
      icon: "text-amber-600 dark:text-amber-400",
      number: "text-amber-300/70 dark:text-amber-700/50",
      pill: "bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/40",
    },
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Testy i Przekazanie",
    duration: "Gotowe",
    description:
      "Wspólnie sprawdzamy działanie integracji. Otrzymujesz gotowe narzędzie, które od pierwszego dnia oszczędza Twoje godziny.",
    accent: {
      bg: "bg-emerald-100 dark:bg-emerald-950/40",
      icon: "text-emerald-600 dark:text-emerald-400",
      number: "text-emerald-300/70 dark:text-emerald-700/50",
      pill: "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/40",
    },
  },
]

export function ProcessSteps() {
  return (
    <section
      id="proces"
      aria-labelledby="process-heading"
      className="relative overflow-hidden bg-muted/50 py-12 sm:py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-violet-400/5 blur-3xl" />
        <div className="absolute -left-48 bottom-1/4 h-[400px] w-[400px] rounded-full bg-emerald-400/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
              Proces współpracy
            </span>
          </div>

          <h2
            id="process-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
          >
            Jak zaczynamy?{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">Bez chaosu</span>
              <span
                aria-hidden="true"
                className="absolute bottom-1 left-0 z-0 h-3 w-full -skew-x-2 bg-amber-400/25"
              />
            </span>{" "}
            i zbędnych procedur
          </h2>
        </div>

        {/* Steps — horizontal timeline on lg, vertical on mobile */}
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24">
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">

            {/* Connecting line — visible on lg only */}
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-10 hidden h-px lg:block"
              style={{
                background:
                  "linear-gradient(to right, transparent 8%, var(--border) 25%, var(--border) 75%, transparent 92%)",
              }}
            />

            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col">
                {/* Vertical connector line — mobile only */}
                {index < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute left-5 top-[4.5rem] h-[calc(100%+2rem)] w-px bg-border/60 lg:hidden"
                  />
                )}

                <div className="flex flex-col gap-5 lg:items-center lg:text-center">
                  {/* Icon circle — sits on the timeline */}
                  <div className="relative z-10 flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-2xl border-2 border-background shadow-md ring-1 ring-border/40 lg:mx-auto">
                    <div className={`absolute inset-0 rounded-2xl ${step.accent.bg}`} />
                    <step.icon
                      className={`relative h-6 w-6 ${step.accent.icon}`}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex flex-col gap-3 pl-14 sm:pl-16 lg:pl-0">
                    {/* Number + duration pill */}
                    <div className="flex items-center gap-3 lg:justify-center">
                      <span
                        className={`font-mono text-4xl font-bold leading-none ${step.accent.number}`}
                      >
                        {step.number}
                      </span>
                      <span
                        className={`rounded-full border px-2.5 py-0.5 font-mono text-xs font-semibold ${step.accent.pill}`}
                      >
                        {step.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold leading-snug text-foreground">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center lg:mt-20">
          <a
            href="#kontakt"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-all duration-200 hover:bg-foreground/85 hover:shadow-lg hover:shadow-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Zacznij od bezpłatnej diagnozy
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
