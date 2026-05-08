import { 
  ShieldCheck, 
  BrainCircuit, 
  Lock, 
  Layout,
  CheckCircle2,
  Clock,
  Code
} from "lucide-react"

const expertise = [
  {
    title: "Bezpieczeństwo danych",
    context: "Standard Bankowy",
    description: "Gwarantuję ochronę tajemnic firmowych na poziomie rygorystycznych standardów bankowych (Citi, BNP Paribas).",
    icon: Lock
  },
  {
    title: "Systemy bezawaryjne",
    context: "Architektura IT",
    description: "Projektuję architekturę, która działa błyskawicznie i stabilnie, niezależnie od obciążenia.",
    icon: ShieldCheck
  },
  {
    title: "Sztuczna Inteligencja",
    context: "Automatyzacja AI",
    description: "Wdrażam automatyzację AI, która realnie „myśli” i analizuje dane, zamiast generować błędy.",
    icon: BrainCircuit
  },
  {
    title: "Brak Abonamentów",
    context: "Własność Cyfrowa",
    description: "Buduję narzędzia, które stają się Twoją wyłączną własnością cyfrową. Bez ukrytych kosztów.",
    icon: Layout
  }
]

const benefits = [
  {
    title: "System na własność",
    description: "Nie płacisz mi dożywotnich abonamentów. Buduję narzędzia, które należą tylko do Ciebie.",
    icon: CheckCircle2
  },
  {
    title: "Odzyskany czas",
    description: "Moim celem nie jest „napisanie kodu”, ale odzyskanie dla Ciebie nawet 10-15 godzin tygodniowo.",
    icon: Clock
  },
  {
    title: "Brak limitów",
    description: "Jeśli czegoś nie da się „wyklikać” w gotowych aplikacjach, ja po prostu siadam i to dla Ciebie dopisuję. Dla mnie nie ma rzeczy „niemożliwych technicznie”.",
    icon: Code
  }
]

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface AboutProps {
  compact?: boolean
}

export function About({ compact = false }: AboutProps) {
  return (
    <section id="o-mnie" className={cn("py-24 sm:py-32 bg-background overflow-hidden", compact && "bg-transparent py-16 sm:py-24")}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {compact && (
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">Ekspertyza</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Standard Bankowy w Twojej firmie
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Moje doświadczenie z systemami dla milionów użytkowników (Citi, BNP Paribas) przekładam na architekturę, która w Twojej firmie będzie po prostu „nie do zdarcia”.
            </p>
          </div>
        )}
        
        <div className={cn(
          "mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:items-center",
          compact ? "lg:grid-cols-1" : "lg:grid-cols-2"
        )}>
          
          {/* Left Column: Only for Full Page */}
          {!compact && (
            <div>
              <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">Moja Historia</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Ekspert od systemów „nie do zdarcia”
              </p>
              <div className="mt-8 text-lg leading-8 text-muted-foreground space-y-6">
                <p>
                  Nazywam się <strong className="text-foreground font-semibold">Karol Modelski</strong>. Budowałem systemy dla milionów użytkowników w instytucjach takich jak <strong className="text-foreground">Citi, BNP Paribas czy Silent Eight</strong>.
                </p>
                <p>
                  Dziś tę wiedzę i „pancerną” jakość przekazuję mniejszym firmom, wdrażając automatyzację, która jest solidna, bezpieczna i banalnie prosta w obsłudze.
                </p>
                <div className="mt-10">
                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                    <p className="text-base italic">
                      „Moim celem nie jest 'napisanie kodu', ale stworzenie cyfrowego aktywa, które odzyskuje dla Ciebie 15 godzin tygodniowo.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right Column: Key Pillars (Full on Home, Secondary on About) */}
          <div className={cn(
            "grid grid-cols-1 gap-6",
            compact ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2"
          )}>
            {expertise.map((item) => (
              <div 
                key={item.title} 
                className={cn(
                  "flex flex-col gap-4 p-6 rounded-2xl border transition-all hover:shadow-md",
                  compact 
                    ? "bg-background border-primary/5 hover:border-primary/20" 
                    : "bg-muted/30 border-border hover:bg-muted/50"
                )}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mt-1">{item.context}</p>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {compact && (
          <div className="mt-16 text-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/o-mnie">Poznaj moją historię i pełną filozofię pracy</Link>
            </Button>
          </div>
        )}

        {!compact && (
          <div className="mt-24">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
              <h2 className="text-3xl font-bold">Co zyskujesz, współpracując bezpośrednio ze mną?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
                  <benefit.icon className="h-8 w-8 text-primary mb-6" />
                  <h4 className="font-bold text-foreground text-xl">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm mt-4 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}


