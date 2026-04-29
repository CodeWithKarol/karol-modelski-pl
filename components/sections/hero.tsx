import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-6xl">
          Automatyzacja biznesu, która pracuje na Twój zysk 24/7
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Przestań marnować czas na powtarzalne zadania i błędy ludzkie. Tworzę inteligentną automatyzację procesów biznesowych, która przejmuje nudne obowiązki Twojego zespołu. Dzięki moim dedykowanym narzędziom zyskujesz pełną kontrolę i możliwość skalowania firmy bez zatrudniania kolejnych osób.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
          <Button variant="outline" size="lg" className="w-full rounded-full px-8 sm:w-auto" asChild>
            <a href="#problemy">
              Sprawdź, ile czasu odzyskasz
            </a>
          </Button>
          <Button size="lg" className="w-full rounded-full px-8 sm:w-auto" asChild>
            <a href="#kontakt">
              Zautomatyzuj swój proces
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
