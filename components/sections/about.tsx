import { 
  ShieldCheck, 
  BrainCircuit, 
  Lock, 
  Layout
} from "lucide-react"

const expertise = [
  {
    title: "Bezpieczeństwo i wydajność klasy bankowej",
    context: "Niezawodna architektura IT",
    description: "Przenoszę standardy projektowania systemów dla milionów użytkowników (z instytucji takich jak Citi czy BNP Paribas) bezpośrednio do Twojego biznesu. Zyskujesz stabilne rozwiązanie zabezpieczone rygorystycznymi protokołami finansowymi.",
    icon: ShieldCheck
  },
  {
    title: "Dedykowany interfejs i własność na zawsze",
    context: "Pulpity w React / Angular bez abonamentów",
    description: "Tworzę intuicyjne widoki zbierające Twoje dane w jeden przejrzysty pulpit. Płacisz raz – aplikacja oraz kod źródłowy stają się Twoją własnością, bez żadnych opłat licencyjnych.",
    icon: Layout
  },
  {
    title: "Inteligentna automatyzacja z Google Gemini",
    context: "Sztuczna inteligencja, która realnie myśli",
    description: "Wykorzystuję unikalne doświadczenie z projektowania systemów AI dla globalnych liderów (Silent Eight). Wdrażam modele Gemini AI, które samodzielnie analizują dokumenty i wspierają Twój zespół.",
    icon: BrainCircuit
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
        <div className={cn(
          "mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:items-center",
          compact ? "lg:grid-cols-1" : "lg:grid-cols-2"
        )}>
          
          {/* Content Column */}
          <div className={cn(compact && "text-center max-w-3xl mx-auto mb-12")}>
            <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">
              {compact ? "Dlaczego ja?" : "Moja Historia"}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Karol Modelski – Architekt systemów, który pracuje dla Twojego zysku
            </p>
            <div className="mt-6 text-lg leading-8 text-muted-foreground space-y-4">
              <p>
                Nie jestem bezosobową agencją, która deleguje projekty stażystom. Pracuję stacjonarnie w Warszawie, co pozwala nam na bezpośredni kontakt, osobiste warsztaty i szybką diagnozę potrzeb Twojego biznesu. Biorę pełną odpowiedzialność za każde wdrożenie.
              </p>
              {!compact && (
                <p>
                  Moje doświadczenie z systemami dla milionów użytkowników w instytucjach takich jak <strong className="text-foreground">Citi, BNP Paribas czy Silent Eight</strong> przekładam na architekturę, która w Twojej firmie będzie po prostu „nie do zdarcia”.
                </p>
              )}
            </div>
            
            {compact && (
              <div className="mt-10 flex justify-center gap-4">
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/o-mnie">Poznaj pełną historię</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Grid Column */}
          <div className={cn(
            "grid grid-cols-1 gap-6",
            compact ? "md:grid-cols-3" : "sm:grid-cols-1"
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
                  <h4 className="font-bold text-foreground text-sm leading-snug">{item.title}</h4>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mt-1">{item.context}</p>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
