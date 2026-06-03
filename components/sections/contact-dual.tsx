import { Calendar, MessageSquare, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "./contact-form"
import { CONTACT_CONFIG } from "@/lib/contact"

export function ContactDual() {
  return (
    <section
      id="kontakt"
      aria-labelledby="contact-heading"
      className="relative bg-background py-12 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1">
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-500">
              {CONTACT_CONFIG.eyebrow}
            </span>
          </div>

          <h2
            id="contact-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
          >
            {CONTACT_CONFIG.headline}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            {CONTACT_CONFIG.description}
          </p>
        </div>

        {/* Two-path grid */}
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            {/* PATH A — Calendar */}
            <Card className="relative overflow-hidden border-border bg-muted/20">
              <CardContent className="flex flex-col gap-4 p-8 h-full">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-background border border-border">
                    <Calendar className="h-5 w-5 text-amber-600" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-500">
                    {CONTACT_CONFIG.paths.calendar.label}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {CONTACT_CONFIG.paths.calendar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {CONTACT_CONFIG.paths.calendar.description}
                  </p>
                </div>

                <a
                  href={CONTACT_CONFIG.paths.calendar.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-all hover:bg-foreground/85 hover:shadow-lg"
                >
                  {CONTACT_CONFIG.paths.calendar.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </CardContent>
            </Card>

            {/* PATH B — Form */}
            <Card className="relative overflow-hidden border-border bg-background">
              <CardContent className="flex flex-col gap-4 p-8 h-full">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted dark:bg-muted/60">
                    <MessageSquare className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {CONTACT_CONFIG.paths.form.label}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {CONTACT_CONFIG.paths.form.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {CONTACT_CONFIG.paths.form.description}
                  </p>
                </div>

                <ContactForm />
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  )
}
