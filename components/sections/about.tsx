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

export function About() {
  return (
    <section id="o-mnie" className="py-24 sm:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          
          {/* Left Column: Bio & Core Message */}
          <div>
            <h2 className="text-base font-semibold leading-7 text-primary">O mnie</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Standard Bankowy w Twojej firmie
            </p>
            <div className="mt-8 text-lg leading-8 text-muted-foreground space-y-6">
              <p>
                Nazywam się <strong className="text-foreground font-semibold">Karol Modelski</strong>. Budowałem systemy dla milionów użytkowników w instytucjach takich jak <strong className="text-foreground">Citi, BNP Paribas czy Silent Eight</strong>.
              </p>
              <p>
                Dziś tę wiedzę i „pancerną” jakość przekazuję mniejszym firmom, wdrażając automatyzację, która jest solidna, bezpieczna i banalnie prosta w obsłudze.
              </p>
            </div>

            <div className="mt-12 bg-primary/5 rounded-3xl p-8 border border-primary/10">
              <h3 className="text-xl font-bold text-foreground mb-6">Co zyskujesz, współpracując bezpośrednio ze mną?</h3>
              <div className="space-y-8">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Experience Breakdown */}
          <div className="lg:mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-8">Dlaczego moje doświadczenie to Twój zysk?</h3>
            <p className="text-muted-foreground mb-12">
              Większość rozwiązań IT jest zbyt skomplikowana. Ja przenoszę standardy „pancernych” systemów bankowych do mniejszych firm, dbając o to, by technologia była niewidoczna, a efekty – namacalne.
            </p>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {expertise.map((item) => (
                <div key={item.title} className="flex flex-col gap-4 p-6 rounded-2xl border border-border bg-muted/30 transition-colors hover:bg-muted/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-1">{item.context}</p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl border border-dashed border-primary/30 text-center">
              <p className="text-lg font-medium text-foreground italic">
                „Profesjonalna automatyzacja procesów to nie wydatek – to inwestycja w Twój święty spokój i szybszy wzrost firmy.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
