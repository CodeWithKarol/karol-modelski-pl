import { Calendar, MessageSquare, ArrowRight, Video } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "./contact-form"

const CALENDLY_URL = "https://calendly.com/kontakt-karol-modelski/new-meeting"

export function ContactDual() {
  return (
    <section
      id="kontakt"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-muted/50 py-12 sm:py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-amber-400/5 blur-3xl" />
        <div className="absolute -right-48 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-400/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
              Kontakt
            </span>
          </div>

          <h2
            id="contact-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
          >
            Przestań marnować czas na{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">powtarzalne zadania</span>
              <span
                aria-hidden="true"
                className="absolute bottom-1 left-0 z-0 h-3 w-full -skew-x-2 bg-amber-400/25"
              />
            </span>
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Wybierz najwygodniejszą formę kontaktu. Rezerwacja rozmowy zajmie Ci mniej niż minutę.
          </p>
        </div>

        {/* Two-path grid */}
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            {/* PATH A — Calendar */}
            <Card className="relative overflow-hidden border-amber-200/60 bg-background dark:border-amber-800/30">
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-amber-400 to-amber-500" />

              <CardContent className="flex flex-col gap-4 p-4 sm:gap-6 sm:p-8">
                {/* Label */}
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-950/40">
                    <Calendar className="h-5 w-5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                    Ścieżka A · Szybka rozmowa
                  </span>
                </div>

                {/* Copy */}
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Chcę od razu ustalić szczegóły
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Wybierz dogodny termin na krótką, 15-minutową diagnozę Twoich procesów.
                    Rozmowa odbędzie się na Google Meet.
                  </p>
                </div>

                {/* Meeting details */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Video className="h-3.5 w-3.5 shrink-0 text-amber-500" aria-hidden="true" />
                    <span>Google Meet · 15 minut · bezpłatnie</span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-all duration-200 hover:bg-foreground/85 hover:shadow-lg hover:shadow-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Wybierz termin w kalendarzu
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </CardContent>
            </Card>

            {/* PATH B — Form */}
            <Card className="relative overflow-hidden border-border/60 bg-background">
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-border/40 to-border/20" />

              <CardContent className="flex flex-col gap-4 p-4 sm:gap-6 sm:p-8">
                {/* Label */}
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted dark:bg-muted/60">
                    <MessageSquare className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Ścieżka B · Wiadomość
                  </span>
                </div>

                {/* Copy */}
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Wolę najpierw opisać swój problem
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Nie masz teraz kalendarza pod ręką? Opisz krótko, co chcesz zautomatyzować,
                    a przeanalizuję Twój problem i wrócę z gotowym pomysłem.
                  </p>
                </div>

                {/* Form — client component */}
                <ContactForm />
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  )
}
