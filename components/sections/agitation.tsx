import { Share2, XCircle, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const painPoints = [
  {
    icon: Share2,
    title: "Chaos informacyjny",
    description:
      "Dane rozproszone między pocztą, arkuszami a systemem CRM.",
  },
  {
    icon: XCircle,
    title: "Błędy i pomyłki",
    description:
      "Przeoczone zapytania od klientów, literówki w dokumentach, opóźnienia w obsłudze.",
  },
  {
    icon: Clock,
    title: "Stracone godziny",
    description:
      "Czas, który powinieneś poświęcić na domykanie sprzedaży, ucieka na rutynowe klikanie.",
  },
]

export function AgitationSection() {
  return (
    <section
      id="agitacja"
      aria-labelledby="agitation-heading"
      className="relative overflow-hidden bg-muted/50 py-12 sm:py-24 lg:py-32"
    >
      {/* Subtle background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-64 -top-24 h-[500px] w-[500px] rounded-full bg-amber-400/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-48 h-[400px] w-[400px] rounded-full bg-red-400/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
              Problem
            </span>
          </div>

          <h2
            id="agitation-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
          >
            Ręczne przepisywanie danych to{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">ukryty koszt</span>
              <span
                aria-hidden="true"
                className="absolute bottom-1 left-0 z-0 h-3 w-full -skew-x-2 bg-amber-400/25"
              />
            </span>{" "}
            Twojej firmy
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            Każdego dnia Ty i Twój zespół wykonujecie setki powtarzalnych czynności. Kopiowanie
            danych z wiadomości, ręczne zapisywanie załączników na dysku czy sprawdzanie płatności.
            To nie jest praca dla ludzi – to zadania dla algorytmów.
          </p>
        </div>

        {/* Pain point cards */}
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {painPoints.map((point) => (
              <Card
                key={point.title}
                className="group relative border-border/60 bg-background transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/5"
              >
                <CardContent className="flex flex-col gap-4 p-6">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 transition-colors duration-300 group-hover:bg-amber-100 dark:bg-amber-950/40 dark:group-hover:bg-amber-950/60">
                    <point.icon
                      className="h-6 w-6 text-amber-600 dark:text-amber-400"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-base font-bold text-foreground">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
