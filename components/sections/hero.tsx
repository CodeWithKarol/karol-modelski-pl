import { Button } from "@/components/ui/button"
import { LeadMagnetModal } from "@/components/lead-magnet-modal"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
          Karol Modelski – Automatyzacja procesów biznesowych, która pracuje na Twój zysk
        </h1>
        <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
          Pomagam przedsiębiorcom wyeliminować chaos operacyjny i odzyskać czas. Projektuję inteligentne systemy, które przejmują Twoje obowiązki – 24/7.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
          <Button size="lg" className="w-full rounded-full px-8 sm:w-auto" asChild>
            <a href="/uslugi">
              Sprawdź katalog rozwiązań
            </a>
          </Button>
          <Button variant="outline" size="lg" className="w-full rounded-full px-8 sm:w-auto" asChild>
            <a href="#kontakt">
              Porozmawiajmy o Twoim biznesie
            </a>
          </Button>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          <LeadMagnetModal>
            <button className="hover:text-primary transition-colors underline decoration-primary/30 cursor-pointer">
              Pobierz listę 5 procesów, które zautomatyzujesz w 48h
            </button>
          </LeadMagnetModal>
        </div>
      </div>
    </section>
  )
}
