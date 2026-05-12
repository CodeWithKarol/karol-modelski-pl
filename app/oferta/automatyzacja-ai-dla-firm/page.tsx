import { StandardLayout } from "@/components/standard-layout"
import { 
  Sparkles, 
  ArrowRight, 
  BrainCircuit, 
  Layers, 
  Monitor, 
  ShieldCheck, 
  Lock, 
  CheckCircle2,
  AlertCircle,
  XCircle,
  Users,
  Zap
} from "lucide-react"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Automatyzacja AI dla firm | Wdrażanie Google Gemini AI",
  description: "Wdrażanie Google Gemini AI na własność. Poznaj automatyzację AI dla firm, która interpretuje dokumenty i segreguje dane bez abonamentu. Sprawdź!",
}

const solutions = [
  {
    title: "Semantyczna analiza i interpretacja dokumentacji",
    description: "System, który rozumie treść. Wdrażam modele Google Gemini AI, które automatycznie przetwarzają zapytania, reklamacje czy umowy. System analizuje kontekst, wykrywa intencje i przygotowuje gotowe szkice odpowiedzi dla pracowników.",
    icon: BrainCircuit
  },
  {
    title: "Automatyczna kategoryzacja i inteligentny routing danych",
    description: "Koniec z ręcznym sortowaniem baz danych i załączników. Zaawansowane algorytmy LLM weryfikują strumienie informacji, bezbłędnie kategoryzują je według Twoich procedur i przesyłają do odpowiednich systemów ERP/CRM.",
    icon: Layers
  },
  {
    title: "Dedykowane panele decyzyjne w React i Angular",
    description: "Sztuczna inteligencja pod Twoją kontrolą. Tworzę intuicyjne interfejsy, które wyświetlają rekomendacje AI, wykresy i kluczowe metryki na jednym, czytelnym pulpicie menedżerskim – bez żadnych opłat za licencje użytkowników.",
    icon: Monitor
  }
]

const faqs = [
  {
    question: "Czy automatyzacja AI dla firm generuje wysokie koszty stałe za zużycie serwerów?",
    answer: "Nie. Ponieważ system buduję na Twoją własność w architekturze React/Angular, eliminujesz marże pośredników i platform SaaS. Jedyne opłaty to faktyczne zużycie tokenów w oficjalnym API Google Gemini, co zazwyczaj wynosi ułamki centów za tysiące stron dokumentów."
  },
  {
    question: "Czym różni się dedykowane wdrażanie Google Gemini AI od korzystania z ChatGPT w przeglądarce?",
    answer: "Dedykowana automatyzacja zintegrowana przez API działa automatycznie w tle, posiada dostęp do pełnego kontekstu Twojego biznesu i realizuje sztywne instrukcje operacyjne bez ryzyka halucynacji czy upubliczniania danych firmowych."
  },
  {
    question: "Czy do wdrożenia AI musimy posiadać własny zespół programistów?",
    answer: "Nie. Cały proces – od analizy (Faza 0), przez kodowanie interfejsu, aż po integrację z modelami Gemini AI – realizuję osobiście. Po wdrożeniu otrzymujesz gotowy system i pełne wsparcie techniczne."
  }
]

export default function AutomatyzacjaAIPage() {
  return (
    <StandardLayout
      title="Automatyzacja AI dla firm: Wdróż sztuczną inteligencję, która myśli i analizuje dane."
      description="Projektuję i wdrażam systemy oparte o Google Gemini AI na Twoją wyłączną własność. Zyskaj przewagę dzięki semantycznej analizie dokumentów i automatycznej kategoryzacji danych, bez opłat abonamentowych."
      breadcrumbs={[
        { name: "Oferta", href: "/oferta" },
        { name: "Automatyzacja AI" }
      ]}
      badge={{ text: "Google Gemini AI", icon: Sparkles }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Hero CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 mb-24 justify-center items-center">
          <Button size="lg" className="rounded-full px-8 h-12 text-base font-bold shadow-lg shadow-primary/20 w-full sm:w-auto" asChild>
            <a href="#kontakt">
              Zarezerwuj bezpłatną diagnozę potencjału AI
            </a>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base font-bold border-2 w-full sm:w-auto" asChild>
            <a href="#rozwiazania">
              Odkryj możliwości Gemini ↓
            </a>
          </Button>
        </div>

        {/* 2. Eskalacja problemu */}
        <section className="py-24 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Dlaczego Twoja firma tonie w danych i jak bezmyślne narzędzia ją spowalniają?
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Gdy pojawia się tekst niesformatowany, e-mail pełen niuansów lub skomplikowana umowa – proste skrypty stają się bezużyteczne. To rodzi krytyczne problemy:
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground">Marnowanie intelektu zespołu</h4>
                  <p className="text-sm text-muted-foreground mt-1">Twój zespół godzinami czyta raporty tylko po to, by ręcznie przypisać je do odpowiednich kategorii.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Lock className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground">Ryzyko wycieku tajemnic</h4>
                  <p className="text-sm text-muted-foreground mt-1">Korzystanie z publicznych asystentów AI grozi tym, że Twoje know-how nakarmi modele konkurencji.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <XCircle className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground">Halucynacje masowych botów</h4>
                  <p className="text-sm text-muted-foreground mt-1">Gotowe wtyczki AI generują błędy, bo nie zostały usztywnione pod unikalne procesy w Twoim biznesie.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Prezentacja rozwiązań */}
        <section id="rozwiazania" className="py-24 border-t border-border scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Inteligentne rozwiązania Gemini AI dostosowane do Twoich procesów
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {solutions.map((item) => (
              <Card key={item.title} className="border-border bg-muted/30 transition-all hover:border-primary/20 hover:bg-background group">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary transition-colors">
                    <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 4. Architektura i Bezpieczeństwo AI */}
        <section className="py-24 border-t border-border">
          <div className="rounded-3xl bg-primary/5 p-8 sm:p-12 border border-primary/10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Wdrażanie Google Gemini AI w oparciu o standardy liderów rynku
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Jako niezależny architekt systemów gwarantuję, że technologia AI będzie tarczą, a nie zagrożeniem dla Twojej organizacji:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                    <h4 className="font-bold text-foreground">Know-how z Silent Eight</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Projektowałem rozwiązania dla światowego pioniera AI w sektorze finansowym. To doświadczenie pozwala mi na wdrażanie modeli Gemini w sposób stabilny i odporny na błędy.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-primary shrink-0" />
                    <h4 className="font-bold text-foreground">Standardy bankowe w Warszawie</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Cały proces integracji jest zamknięty i chroniony zabezpieczeniami klasy bankowej. Twoje dane nie są wykorzystywane do trenowania publicznych modeli.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. FAQ Ofertowe */}
        <section className="py-24 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Często zadawane pytania o wdrażanie AI</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-primary/10">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-7 pb-6">
                    {faq.answer}
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
