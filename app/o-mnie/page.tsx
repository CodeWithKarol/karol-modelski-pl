import { StandardLayout } from "@/components/standard-layout"
import { 
  UserCircle, 
  ShieldCheck, 
  BrainCircuit, 
  Layout, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Lock,
  MessagesSquare
} from "lucide-react"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export const metadata: Metadata = {
  title: "O mnie | Karol Modelski – Architekt Systemów B2B | Warszawa",
  description: "Dowiedz się, jak doświadczenie w architekturze systemów dla Citi czy BNP Paribas przekładam na bezpieczną automatyzację procesów w Twojej firmie.",
}

const qaItems = [
  {
    question: "Czy po wdrożeniu systemu zostajesz ze mną, jeśli technologia będzie wymagała aktualizacji?",
    answer: "Tak. Moim celem jest długofalowa partnerska współpraca. Po pomyślnym zamknięciu projektu oferuję stałe wsparcie i opiekę techniczną w modelu stałej współpracy (retainer). Dbam o stabilność Twoich systemów, kiedy Ty skupiasz się na skalowaniu biznesu."
  }
]

export default function AboutPage() {
  return (
    <StandardLayout
      title="Karol Modelski. Projektuję cyfrowe fundamenty dla rozwijających się biznesów."
      description="Jako programista i architekt systemów pomagam firmom porządkować chaos operacyjny i uwalniać setki marnowanych roboczogodzin. Buduję dedykowane narzędzia i intuicyjne pulpity na Twoją wyłączną własność."
      breadcrumbs={[{ name: "O mnie" }]}
      badge={{ text: "O mnie", icon: UserCircle }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* 1. Hero CTA */}
        <div className="mt-8 flex justify-center mb-24">
          <Button size="lg" className="rounded-full px-8 h-12 text-base font-bold shadow-lg shadow-primary/20 w-full sm:w-auto" asChild>
            <a href="#kontakt">
              Zarezerwuj bezpłatną diagnozę procesów (Faza 0)
            </a>
          </Button>
        </div>

        {/* 2. Moja Filozofia */}
        <section className="py-24 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Osobista odpowiedzialność zamiast taśmy produkcyjnej
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Wybierając współpracę ze mną, nie trafiasz do machiny agencji marketingowej, gdzie Twój projekt zostaje przekazany anonimowym stażystom.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MessagesSquare className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground">Brak „głuchego telefonu”</h4>
                  <p className="text-sm text-muted-foreground mt-1">Rozmawiasz bezpośrednio z człowiekiem, który najpierw analizuje Twoje cele biznesowe, a potem osobiście pisze każdą linię kodu.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground">Pełna kontrola</h4>
                  <p className="text-sm text-muted-foreground mt-1">Pracuję stacjonarnie w Warszawie. Cenę i zakres prac zawsze poprzedzają warsztaty diagnostyczne, dzięki czemu znasz realne ROI.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Moje tło biznesowe */}
        <section className="py-24 border-t border-border">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ekspertyza przetestowana w najtrudniejszych warunkach bankowych
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Przez lata projektowałem i wdrażałem architekturę IT dla globalnych liderów rynkowych i instytucji finansowych.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-border bg-muted/30 p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Citi & BNP Paribas</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tam nauczyłem się bezkompromisowego podejścia do cyberbezpieczeństwa i rygorystycznej ochrony danych. Te same standardy bankowe wdrażam w systemie Twojej firmy.
              </p>
            </Card>
            <Card className="border-border bg-muted/30 p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Silent Eight</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Jako inżynier dla pioniera AI poznałem sztuczną inteligencję od podszewki. Wdrażając Google Gemini AI, tworzę algorytmy, które realnie interpretują dokumenty.
              </p>
            </Card>
            <Card className="border-border bg-muted/30 p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Amway</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Zdobyłem know-how z zakresu porządkowania gigantycznych, rozproszonych silosów informacyjnych. Wiem, jak połączyć Twoje bazy w jeden czytelny panel.
              </p>
            </Card>
          </div>
        </section>

        {/* 4. Narzędzia i technologia */}
        <section className="py-24 border-t border-border">
          <div className="rounded-3xl bg-primary/5 p-8 sm:p-12 border border-primary/10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Technologia, która działa na Twoją wyłączną własność
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Nie uzależniam Twojego biznesu od zewnętrznych platform, które blokują Cię sztywnymi ramami. Tworzę rozwiązania oparte o nowoczesne technologie:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Layout className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Angular & React</h4>
                  <p className="text-xs text-muted-foreground">Intuicyjne interfejsy bez konieczności szkoleń. Wszystkie dane firmy w jednym oknie.</p>
                </div>
                <div className="text-center">
                  <BrainCircuit className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Google Gemini AI</h4>
                  <p className="text-xs text-muted-foreground">Bezpieczna analiza dokumentów i automatyzacja maili wewnątrz Twojej infrastruktury.</p>
                </div>
                <div className="text-center">
                  <Lock className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Zero Abonamentów</h4>
                  <p className="text-xs text-muted-foreground">Otrzymujesz kod źródłowy i pełne prawa autorskie. System staje się trwałym aktywem firmy.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Krótkie Q&A */}
        <section className="py-24 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pytania i odpowiedzi</h2>
            <Accordion type="single" collapsible className="w-full">
              {qaItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-primary/10">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-7 pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </StandardLayout>
  )
}
