import { MailX, AlertCircle, BarChart2 } from "lucide-react"

const problems = [
  {
    icon: MailX,
    title: "Leady stygną zanim ktokolwiek zadzwoni",
    description:
      "Zapytania spływają na skrzynkę info@, ale nikt nie sprawdza jej regularnie. Klient wypełnia formularz, a Ty odpisujesz po kilku godzinach — kiedy on już rozmawia z konkurencją.",
  },
  {
    icon: AlertCircle,
    title: "Niekompletne dane w CRM przez ludzkie pomyłki",
    description:
      "Ręczne kopiowanie imienia, firmy i telefonu z maila do Pipedrive generuje literówki, brakujące pola i chaos w raportach sprzedażowych. Każdy błąd kosztuje.",
  },
  {
    icon: BarChart2,
    title: "Nie wiesz, które źródło przynosi leady",
    description:
      "Masz formularz na stronie, kampanię Google Ads i profil na LinkedIn — ale w Pipedrive wszystko wpada do jednego worka. Nie możesz optymalizować budżetu bez danych.",
  },
]

export function WspolpracaProblem() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="relative overflow-hidden bg-muted/50 py-12 sm:py-24 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-red-400/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
              Czy to Twój problem?
            </span>
          </div>

          <h2
            id="problem-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
          >
            Brzmi znajomo?
          </h2>
        </div>

        {/* Problem list */}
        <div className="divide-y divide-border/60">
          {problems.map((problem) => (
            <div key={problem.title} className="flex flex-col gap-4 py-8 first:pt-0 last:pb-0 sm:flex-row sm:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 dark:bg-red-950/40">
                <problem.icon className="h-6 w-6 text-red-600 dark:text-red-400" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground sm:text-lg">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
