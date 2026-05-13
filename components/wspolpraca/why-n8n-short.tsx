import { TrendingDown, Lock } from "lucide-react"

const reasons = [
  {
    icon: TrendingDown,
    title: "Brak opłat za każdy lead (Task Tax)",
    description:
      "Płacisz jednorazowo za wdrożenie, a nie za liczbę przesłanych leadów. Zapier i Make przy tysiącach operacji miesięcznie potrafią kosztować setki dolarów — n8n w modelu self-hosted nie nalicza opłat za wolumen.",
    accent: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-100 dark:bg-amber-950/40",
  },
  {
    icon: Lock,
    title: "Pełna kontrola — Twoje dane nie opuszczają firmy",
    description:
      "Twoje dane kontaktowe i dane klientów nie krążą po zewnętrznych serwerach SaaS. n8n może działać na Twojej własnej infrastrukturze — to standard bezpieczeństwa, który znają duże firmy, teraz dostępny dla każdego MŚP.",
    accent: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-100 dark:bg-indigo-950/40",
  },
]

export function WspolpracaWhyN8n() {
  return (
    <section
      id="dlaczego-n8n-wspolpraca"
      aria-labelledby="why-n8n-wspolpraca-heading"
      className="relative overflow-hidden bg-muted/50 py-12 sm:py-24 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-48 top-1/4 h-[400px] w-[400px] rounded-full bg-indigo-400/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
              Dlaczego n8n?
            </span>
          </div>

          <h2
            id="why-n8n-wspolpraca-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
          >
            Lepsza alternatywa dla Zapiera i Make
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-background p-6"
            >
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${r.bg}`}>
                <r.icon className={`h-5 w-5 ${r.accent}`} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
