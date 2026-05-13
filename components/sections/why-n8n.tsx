import { TrendingDown, Lock, Plug } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const advantages = [
  {
    number: "01",
    icon: TrendingDown,
    title: "Brak podatku od skali (Task Tax)",
    description:
      "Płacisz za działające rozwiązanie i stabilną strukturę, a nie za każdą pojedynczą operację czy przesłany wiersz danych. Narzędzia no-code potrafią generować ogromne rachunki wraz ze wzrostem liczby transakcji – n8n drastycznie zmienia te zasady.",
  },
  {
    number: "02",
    icon: Lock,
    title: "Bezpieczeństwo danych (Self-Hosting)",
    description:
      "Twoje poufne informacje biznesowe i dane klientów mogą pozostać w całości na Twojej własnej infrastrukturze. Pełna kontrola – żadne dane nie opuszczają Twojego środowiska bez Twojej zgody.",
  },
  {
    number: "03",
    icon: Plug,
    title: "Nieograniczone integracje",
    description:
      "Jeśli system posiada otwarte API, n8n bez problemu połączy go z resztą Twoich narzędzi. Setki gotowych węzłów i możliwość napisania własnego kodu tam, gdzie gotowe rozwiązanie nie wystarczy.",
  },
]

export function WhyN8n() {
  return (
    <section
      id="dlaczego-n8n"
      aria-labelledby="why-n8n-heading"
      className="relative overflow-hidden bg-muted/50 py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-48 -top-32 h-[500px] w-[500px] rounded-full bg-amber-400/5 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-emerald-400/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
              Dlaczego n8n?
            </span>
          </div>

          <h2
            id="why-n8n-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
          >
            Wybierz n8n –{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">elastyczność i pełna kontrola</span>
              <span
                aria-hidden="true"
                className="absolute bottom-1 left-0 z-0 h-3 w-full -skew-x-2 bg-amber-400/25"
              />
            </span>{" "}
            nad kosztami
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            Narzędzia no-code potrafią generować ogromne rachunki wraz ze wzrostem liczby
            transakcji w firmie. n8n drastycznie zmienia te zasady:
          </p>
        </div>

        {/* Advantages list */}
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24">
          <div className="divide-y divide-border/60">
            {advantages.map((item) => (
              <div
                key={item.number}
                className="group flex flex-col gap-6 py-10 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:gap-10"
              >
                {/* Number + icon */}
                <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-center sm:gap-3 sm:pt-1">
                  <span className="font-mono text-4xl font-bold leading-none text-amber-400/60 transition-colors duration-300 group-hover:text-amber-500 dark:text-amber-500/40 dark:group-hover:text-amber-400 sm:text-5xl">
                    {item.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 transition-colors duration-300 group-hover:bg-amber-200 dark:bg-amber-950/40 dark:group-hover:bg-amber-950/60 sm:h-11 sm:w-11">
                    <item.icon
                      className="h-5 w-5 text-amber-600 dark:text-amber-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold leading-snug text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison callout */}
        <div className="mx-auto mt-16 max-w-4xl">
          <Card className="border-amber-200/60 bg-amber-50/50 dark:border-amber-800/30 dark:bg-amber-950/20">
            <CardContent className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-950/40">
                <TrendingDown className="h-6 w-6 text-amber-600 dark:text-amber-400" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-foreground">
                  Zapier i Make rosną wraz z Twoim biznesem – ale nie na Twoją korzyść.
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Przy kilku tysiącach operacji miesięcznie abonament potrafi przekroczyć kilkaset
                  dolarów. n8n w modelu self-hosted kosztuje tyle, ile Twój serwer – niezależnie
                  od wolumenu.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
