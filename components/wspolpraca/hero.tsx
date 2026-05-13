import { ArrowRight, Zap } from "lucide-react"

const CALENDLY_URL = "https://calendly.com/kontakt-karol-modelski/new-meeting"

export function WspolpracaHero() {
  return (
    <section
      id="hero-wspolpraca"
      aria-labelledby="wspolpraca-hero-heading"
      className="relative overflow-hidden bg-background pb-16 pt-12 sm:pb-24 sm:pt-20 lg:pt-28"
    >
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-48 -top-24 h-[500px] w-[500px] rounded-full bg-amber-400/5 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-400/5 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wspolpraca-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wspolpraca-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40">
          <Zap className="h-3.5 w-3.5 shrink-0 text-amber-600 dark:text-amber-400" aria-hidden="true" />
          <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
            Productized Service · Pipedrive + n8n
          </span>
        </div>

        {/* H1 */}
        <h1
          id="wspolpraca-hero-heading"
          className="mt-6 text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance"
        >
          Automatyczne przesyłanie leadów ze strony do{" "}
          <span className="relative whitespace-nowrap">
            <span className="relative z-10">Pipedrive CRM</span>
            <span
              aria-hidden="true"
              className="absolute bottom-1 left-0 z-0 h-3 w-full -skew-x-2 bg-amber-400/25"
            />
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Przestań ręcznie przepisywać dane z maili. Skonfiguruję dla Ciebie{" "}
          <strong className="font-semibold text-foreground">n8n</strong>, który w 1 sekundę
          utworzy szansę sprzedaży w Pipedrive i powiadomi Twój zespół na Slacku.
        </p>

        {/* Flow diagram — visual shortcut */}
        <div className="mt-8 flex flex-wrap items-center gap-2 text-sm">
          {[
            { label: "Formularz WWW", color: "bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300" },
            { label: "n8n", color: "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300" },
            { label: "Pipedrive CRM", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300" },
            { label: "Slack / E-mail", color: "bg-pink-100 text-pink-700 dark:bg-pink-950/60 dark:text-pink-300" },
          ].map((item, i, arr) => (
            <span key={item.label} className="flex items-center gap-2">
              <span className={`rounded-full px-3 py-1 font-mono text-xs font-semibold ${item.color}`}>
                {item.label}
              </span>
              {i < arr.length - 1 && (
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50" aria-hidden="true" />
              )}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Zamów darmowy audyt formularza – otwiera Calendly"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-all duration-200 hover:bg-foreground/85 hover:shadow-lg hover:shadow-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Zamów darmowy audyt Twojego formularza
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          15-minutowa rozmowa · bez zobowiązań · bezpłatnie
        </p>
      </div>
    </section>
  )
}
