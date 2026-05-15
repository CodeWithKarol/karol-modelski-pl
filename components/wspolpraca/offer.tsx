import { Link2, Building2, Bell, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Połączenie formularza",
    description:
      "Zintegruję Twoją stronę (WordPress, Webflow, React, dowolny HTML) z n8n. Obsługuję webhooks, API REST oraz natywne integracje najpopularniejszych CMS-ów.",
    detail: "WordPress · Webflow · React · Dowolny HTML",
    color: {
      bg: "bg-violet-100 dark:bg-violet-950/40",
      icon: "text-violet-600 dark:text-violet-400",
      number: "text-violet-200 dark:text-violet-800",
      detail: "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/30 dark:text-violet-300 dark:border-violet-800/30",
    },
  },
  {
    number: "02",
    icon: Building2,
    title: "Inteligentny CRM",
    description:
      "Automatyczne tworzenie kontaktu, organizacji i szansy sprzedaży w Pipedrive z każdego przesłanego formularza. Dane trafiają tam, gdzie powinny — bez literówek.",
    detail: "Kontakt · Organizacja · Deal · Pipeline",
    color: {
      bg: "bg-emerald-100 dark:bg-emerald-950/40",
      icon: "text-emerald-600 dark:text-emerald-400",
      number: "text-emerald-200 dark:text-emerald-800",
      detail: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-800/30",
    },
  },
  {
    number: "03",
    icon: Bell,
    title: "System powiadomień",
    description:
      "Natychmiastowy alert na Slacku lub e-mailem dla handlowca — w ciągu sekundy od wypełnienia formularza. Żaden lead nie ostygnie bez kontaktu.",
    detail: "Slack · E-mail · Teams",
    color: {
      bg: "bg-amber-100 dark:bg-amber-950/40",
      icon: "text-amber-600 dark:text-amber-400",
      number: "text-amber-200 dark:text-amber-800",
      detail: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-800/30",
    },
  },
]

const included = [
  "Konfiguracja workflow n8n od zera",
  "Testy na danych testowych przed uruchomieniem",
  "7-dniowy support powdrożeniowy",
  "Dokumentacja działania integracji",
  "Kod źródłowy n8n — Twoja własność",
]

export function WspolpracaOffer() {
  return (
    <section
      id="oferta"
      aria-labelledby="oferta-heading"
      className="relative overflow-hidden bg-background py-12 sm:py-24 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-emerald-400/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
              Co otrzymasz
            </span>
          </div>

          <h2
            id="oferta-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
          >
            Trzy kroki do automatycznej sprzedaży
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Zamiast ogólnej &quot;automatyzacji&quot; — konkretna, opisana usługa z gwarantowanym zakresem.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-6">
          {steps.map((step) => (
            <Card key={step.number} className="border-border/60 bg-background">
              <CardContent className="flex flex-col gap-5 p-4 sm:flex-row sm:gap-6 sm:p-6">
                {/* Number + icon */}
                <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-center sm:gap-2">
                  <span className={`font-mono text-4xl font-bold leading-none sm:text-5xl ${step.color.number}`}>
                    {step.number}
                  </span>
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${step.color.bg}`}>
                    <step.icon className={`h-5 w-5 ${step.color.icon}`} aria-hidden="true" />
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  <span className={`mt-1 w-fit rounded-full border px-2.5 py-0.5 font-mono text-xs font-semibold ${step.color.detail}`}>
                    {step.detail}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Included checklist */}
        <div className="mt-10 rounded-2xl border border-border/60 bg-muted/30 p-6 sm:p-8">
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-foreground">
            W cenie każdego wdrożenia
          </p>
          <ul className="flex flex-col gap-3" role="list">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/40">
                  <CheckCircle2 className="h-3 w-3 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                </div>
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
