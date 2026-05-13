import { Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const CALENDLY_URL = "https://calendly.com/kontakt-karol-modelski/new-meeting"

const steps = [
  { number: "01", label: "15-minutowa rozmowa", desc: "Opowiedz mi o swoim formularzu i CRM." },
  { number: "02", label: "Szybka diagnoza", desc: "Oceniam co i jak połączyć — bezpłatnie." },
  { number: "03", label: "Wdrożenie", desc: "Konfiguruję workflow, testuję, przekazuję." },
]

export function WspolpracaCta() {
  return (
    <section
      id="kontakt-wspolpraca"
      aria-labelledby="cta-wspolpraca-heading"
      className="relative overflow-hidden bg-background py-12 sm:py-24 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full bg-amber-400/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2
            id="cta-wspolpraca-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
          >
            Jak wygląda nasza współpraca?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Trzy kroki od rozmowy do działającego systemu.
          </p>
        </div>

        {/* Process mini-steps */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.number} className="relative flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-muted/30 p-5 text-center">
              <span className="font-mono text-3xl font-bold text-amber-400/60 dark:text-amber-500/40">
                {s.number}
              </span>
              <h3 className="text-sm font-bold text-foreground">{s.label}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              {i < steps.length - 1 && (
                <ArrowRight
                  className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-muted-foreground/30 sm:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        {/* CTA card */}
        <Card className="border-amber-200/60 bg-amber-50/50 dark:border-amber-800/30 dark:bg-amber-950/20">
          <CardContent className="flex flex-col items-center gap-6 p-6 text-center sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 dark:bg-amber-950/60">
              <Calendar className="h-7 w-7 text-amber-600 dark:text-amber-400" aria-hidden="true" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                Zamów darmowy audyt Twojego formularza
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                15-minutowa rozmowa na Google Meet. Pokażę Ci konkretnie, co i jak można
                zautomatyzować — bez opłat i bez zobowiązań.
              </p>
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Wybierz termin w Calendly (otwiera nową kartę)"
              className="group inline-flex items-center gap-2 rounded-xl bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-all duration-200 hover:bg-foreground/85 hover:shadow-lg hover:shadow-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Wybierz termin w kalendarzu
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            <p className="text-xs text-muted-foreground">
              Google Meet · 15 minut · bezpłatnie · bez zobowiązań
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
