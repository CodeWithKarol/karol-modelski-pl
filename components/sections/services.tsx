import { 
  LayoutDashboard, 
  Code2,
  CheckCircle2,
  ShieldCheck,
  Users,
  XCircle,
  TrendingDown,
  Coins,
  Search,
  ArrowRight,
  Share2,
  Sparkles
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const pillars = [
  {
    id: "filar-1",
    title: "Dedykowane Centrum Dowodzenia",
    subtitle: "Angular / React",
    description: "Twój autorski, bezpieczny panel sterowania zbierający dane z całej firmy w jeden widok.",
    benefits: "Koniec z dziesiątkami otwartych kart i Excelem. Otrzymujesz profesjonalne narzędzie na wyłączną własność, które jest banalnie proste w obsłudze. Bezawaryjność gwarantuje TypeScript.",
    investment: "Projektowana w Fazie Zero",
    icon: LayoutDashboard
  },
  {
    id: "filar-2",
    title: "Inteligentna Automatyzacja AI",
    subtitle: "Google Gemini",
    description: "Wdrożenie modułów AI, które „myślą” nad Twoimi dokumentami i zapytaniami.",
    benefits: "Automatyczne streszczenia raportów, inteligentne sortowanie zapytań i wyciąganie danych w sekundy. Bezpieczna automatyzacja ai – Twoje dane nie trenują publicznych modeli.",
    investment: "Projektowana indywidualnie",
    icon: Sparkles
  },
  {
    id: "filar-3",
    title: "Szybka Automatyzacja",
    subtitle: "n8n / Make",
    description: "Bezbłędny obieg danych i łączenie 2-3 używanych przez Ciebie aplikacji.",
    benefits: "Automatyczny obieg faktur, raportowanie czasu pracy i wymiana informacji między CRM, księgowością a komunikatorami zespołu (np. Slack).",
    investment: "3 500 – 5 500 PLN",
    icon: Share2
  }
]

export function Services() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Oferta i Cennik: Zainwestuj w święty spokój</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nie buduję „skryptów”. Buduję cyfrowe aktywa Twojej firmy.
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-balance">
            Łączę szybkość narzędzi no-code z „pancerną” architekturą bankową. Każda automatyzacja procesów w moim wykonaniu opiera się na przejrzystych warunkach finansowych i gwarancji zwrotu z inwestycji.
          </p>
        </div>

        {/* ETAP 1: Fundament */}
        <div className="mt-16 lg:mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-grow bg-primary/20" />
            <span className="text-sm font-bold text-primary uppercase tracking-widest px-4 py-1 rounded-full border border-primary/20 bg-primary/5">
              ETAP 1: Fundament (Faza Zero)
            </span>
            <div className="h-px flex-grow bg-primary/20" />
          </div>

          <Card className="border-primary/20 bg-primary/5 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-6 sm:p-8 md:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Search className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">Strategiczny Audyt ROI i Mapa Drogowa</h3>
                </div>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Przed rozpoczęciem prac musimy precyzyjnie zaprojektować system, aby uniknąć chaosu. Otrzymujesz pełną analizę procesów, wskazanie „wycieków” czasu i pieniędzy oraz wizualny projekt systemu przed napisaniem pierwszej linii kodu.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" /> Analiza procesów
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" /> Kalkulacja oszczędności (ROI)
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" /> Wizualny schemat systemu
                  </div>
                </div>
              </div>
              <div className="bg-primary/10 p-6 sm:p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-primary/20">
                <div className="text-center md:text-left mb-6">
                  <p className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest">Inwestycja:</p>
                  <p className="text-2xl sm:text-3xl font-bold text-foreground mt-1">1 900 – 2 900 PLN</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">netto (jednorazowo)</p>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground text-xs sm:text-sm">Gwarancja:</h4>
                    <p className="text-[10px] sm:text-xs text-muted-foreground italic leading-relaxed">
                      Jeśli audyt nie wykaże pól do oszczędności – zwracam 100% kwoty. Jeśli zdecydujesz się na wdrożenie, koszt audytu odliczamy od ceny końcowej!
                    </p>
                  </div>
                </div>
                <Button className="mt-8 rounded-full w-full font-bold h-11 sm:h-12 text-sm sm:text-base" asChild>
                  <a href="#kontakt">Zarezerwuj audyt <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* ETAP 2: Rozwiązania */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-grow bg-primary/20" />
            <span className="text-sm font-bold text-primary uppercase tracking-widest px-4 py-1 rounded-full border border-primary/20 bg-primary/5">
              ETAP 2: Rozwiązania (Wdrożenie)
            </span>
            <div className="h-px flex-grow bg-primary/20" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <Card 
                key={pillar.id} 
                className="flex flex-col border-primary/10 transition-all hover:border-primary/30 bg-background group"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary group-hover:scale-110 transition-transform">
                    <pillar.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{pillar.title}</CardTitle>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">{pillar.subtitle}</p>
                </CardHeader>
                <CardContent className="flex flex-grow flex-col gap-4 text-muted-foreground">
                  <p className="text-foreground/80 font-medium">{pillar.description}</p>
                  <p className="text-sm leading-relaxed">{pillar.benefits}</p>
                  <div className="mt-auto pt-4 border-t border-border flex justify-between items-center">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Inwestycja:</span>
                    <span className={cn(
                      "text-sm font-bold text-foreground",
                      pillar.investment.includes("Projektowana") && "italic font-semibold opacity-80"
                    )}>{pillar.investment}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ETAP 3: Wsparcie */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-grow bg-primary/20" />
            <span className="text-sm font-bold text-primary uppercase tracking-widest px-4 py-1 rounded-full border border-primary/20 bg-primary/5">
              ETAP 3: Stałe Wsparcie (Utrzymanie i Rozwój)
            </span>
            <div className="h-px flex-grow bg-primary/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-2 sm:px-0">
             <Card className="border-border bg-background p-6 sm:p-8 relative">
                <h4 className="text-lg sm:text-xl font-bold">Pakiet BASIC</h4>
                <p className="text-2xl sm:text-3xl font-bold text-primary mt-2">1 490 PLN <span className="text-sm font-normal text-muted-foreground">/ mies.</span></p>
                <ul className="mt-6 space-y-3 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Aktywne monitorowanie procesów</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Czas reakcji do 24 godzin</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> 2h na modyfikacje w cenie</li>
                </ul>
             </Card>

             <Card className="border-primary/30 bg-primary/5 p-6 sm:p-8 relative shadow-lg overflow-visible">
                <div className="absolute top-0 right-4 sm:right-8 -translate-y-1/2 bg-primary text-primary-foreground text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap z-10">
                  Rekomendowany (SLA)
                </div>
                <h4 className="text-lg sm:text-xl font-bold">Pakiet PREMIUM</h4>
                <p className="text-2xl sm:text-3xl font-bold text-primary mt-2">2 990 PLN <span className="text-sm font-normal text-muted-foreground">/ mies.</span></p>
                <ul className="mt-6 space-y-3 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Priorytetowa pomoc (do 4h)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Monitoring AI i bezpieczeństwa</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> 6h na rozwój i kodowanie</li>
                </ul>
             </Card>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Negative Hook */}
          <div className="rounded-3xl bg-muted p-8 sm:p-12 border border-border flex flex-col h-full">
            <h3 className="text-2xl font-bold text-foreground">Dla kogo NIE jest ta oferta?</h3>
            <p className="mt-4 text-lg text-muted-foreground text-balance">
              Moje rozwiązania są inwestycją w trwałą zmianę efektywności Twojej firmy. Nie współpracuję z firmami, które:
            </p>
            
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 flex-grow">
              <div className="flex gap-4 p-4 rounded-2xl bg-background border border-border">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                  <Coins className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">Najtańsze „na raz”</h4>
                  <p className="text-muted-foreground text-xs mt-1">Szukają doraźnych napraw zamiast systemowej zmiany.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-2xl bg-background border border-border">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                  <TrendingDown className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">Brak gotowości na zmiany</h4>
                  <p className="text-muted-foreground text-xs mt-1">Nie chcą modyfikować nieefektywnych, obecnych nawyków.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-background border border-border sm:col-span-2 lg:col-span-1 xl:col-span-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">Akceptacja chaosu</h4>
                  <p className="text-muted-foreground text-xs mt-1">Uważają błędy i bałagan za naturalny, nieunikniony koszt prowadzenia biznesu.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Reversal */}
          <div className="rounded-3xl bg-primary/5 p-8 sm:p-12 border border-primary/10 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-foreground">Zero ryzyka po wdrożeniu</h3>
            <p className="mt-4 text-lg text-muted-foreground text-balance">
              Nie zostawiam Cię z samym kodem. Kluczem do sukcesu jest pewność, że system będzie działał bez zarzutu przez lata.
            </p>
            
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 flex-grow">
              <div className="flex gap-4 p-4 rounded-2xl bg-background border border-primary/10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">30 dni opieki</h4>
                  <p className="text-muted-foreground text-xs mt-1">Monitoruję system i wprowadzam poprawki w cenie wdrożenia.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-2xl bg-background border border-primary/10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">Gwarancja Satysfakcji</h4>
                  <p className="text-muted-foreground text-xs mt-1">Jeśli system nie spełni założeń – poprawiam go do skutku.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-background border border-primary/10 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">Szkolenie zespołu</h4>
                  <p className="text-muted-foreground text-xs mt-1">Osobiście uczę Twoich pracowników obsługi nowych narzędzi, aby przejście było płynne.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 rounded-2xl bg-muted p-8 sm:p-12 lg:flex lg:items-center lg:gap-x-12">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 lg:h-24 lg:w-24">
            <Code2 className="h-8 w-8 text-primary lg:h-12 lg:w-12" />
          </div>
          <div className="mt-8 lg:mt-0">
            <h3 className="text-2xl font-bold text-foreground">Dlaczego to połączenie jest unikalne?</h3>
            <p className="mt-4 text-lg text-muted-foreground text-balance">
              Większość specjalistów od automatyzacji procesów kończy pracę na „połączeniu dwóch aplikacji”. Ja idę krok dalej. Jeśli Twój proces wymaga niestandardowego rozwiązania, po prostu je dla Ciebie koduję. Nie powiem Ci: „tego nie da się zrobić, bo program na to nie pozwala”. Ja stworzę program, który na to pozwoli.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
