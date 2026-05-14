import { WorkflowDiagram } from "@/components/workflow-diagram"

const tools = [
  { label: "CRM", color: "bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300" },
  { label: "Gmail", color: "bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-300" },
  { label: "Google Sheets", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300" },
  { label: "Slack", color: "bg-pink-100 text-pink-700 dark:bg-pink-950/60 dark:text-pink-300" },
  { label: "n8n", color: "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300" },
  { label: "Gemini AI", color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300" },
]

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
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left: copy */}
          <div className="flex flex-col gap-8">
            {/* Eyebrow badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
                Wdrożenie w 48 godzin · Wolne terminy w tym tygodniu
              </span>
            </div>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Automatyzacja procesów biznesowych z{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">n8n</span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-0 z-0 h-3 w-full -skew-x-2 bg-amber-400/25"
                />
              </span>
              {" "}–{" "}
              <br className="hidden sm:block" />
              Odzyskaj czas w{" "}
              <span className="text-amber-600 dark:text-amber-400">48 godzin</span>
            </h1>

            {/* Subheadline */}
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Zamiast wielomiesięcznych, drogich projektów IT – wdrażam proste, punktowe
              integracje, które od jutra robią powtarzalną robotę za Twój zespół. Łączę Twoje
              codzienne narzędzia za pomocą platformy{" "}
              <strong className="font-semibold text-foreground">n8n</strong> i wspieram je
              inteligentnymi modelami{" "}
              <strong className="font-semibold text-foreground">Google Gemini</strong>.
              Przestań ręcznie przepisywać dane i eliminuj błędy ludzkie od zaraz.
            </p>

            {/* Tool pills */}
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t.label}
                  className={`rounded-full px-3 py-1 font-mono text-xs font-medium ${t.color}`}
                >
                  {t.label}
                </span>
              ))}
            </div>

            {/* CTA block */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://calendly.com/kontakt-karol-modelski/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Umów bezpłatną diagnozę i zautomatyzuj pierwszy proces (otwiera Calendly)"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-all duration-200 hover:bg-foreground/85 hover:shadow-lg hover:shadow-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Zautomatyzuj pierwszy proces
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="https://calendly.com/kontakt-karol-modelski/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Bezpłatna Diagnoza
              </a>
            </div>

            {/* Microcopy */}
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <svg
                aria-hidden="true"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 text-amber-500"
              >
                <path
                  d="M8 1l1.854 3.756L14 5.528l-3 2.921.708 4.129L8 10.5l-3.708 2.078L5 8.449 2 5.528l4.146-.772L8 1z"
                  fill="currentColor"
                />
              </svg>
              Projektowane z precyzją byłego architekta systemów bankowych.
            </p>
          </div>

          {/* Right: workflow diagram */}
          <div className="relative overflow-hidden lg:overflow-visible lg:pl-4">
            <WorkflowDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}
