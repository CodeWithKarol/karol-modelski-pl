import { StandardLayout } from "@/components/standard-layout"
import { 
  Zap, 
  ArrowRight, 
  FileText, 
  Link as LinkIcon, 
  PieChart, 
  ShieldCheck, 
  Layout, 
  Key,
  CheckCircle2,
  XCircle,
  AlertCircle
} from "lucide-react"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Automatyzacja procesów operacyjnych w firmie | Karol Modelski",
  description: "Zapomnij o ręcznym przepisywaniu faktur i dokumentów. Automatyzacja procesów operacyjnych uwolni czas Twojego zespołu. Zyskaj system na własność!",
}

const solutions = [
  {
    title: "Bezobsługowy obieg dokumentów i faktur (AI + OCR)",
    description: "Koniec z ręcznym wklepywaniem danych. Tworzę systemy, które automatycznie pobierają dokumenty z Twoich skrzynek e-mail, a zaawansowane modele Google Gemini AI precyzyjnie odczytują z nich kluczowe informacje (NIP, kwoty, pozycje, terminy) i natychmiast wprowadzają je do Twojego programu księgowego lub CRM.",
    icon: FileText
  },
  {
    title: "Trwałe integracje rozproszonych systemów",
    description: "Jedno źródło prawdy zamiast pięciu otwartych okien. Łączę Twoje obecne narzędzia (magazyn, sklep internetowy, CRM, ERP, bazy SQL) w spójny organizm. Dane synchronizują się same w tle, zapewniając stały i bezbłędny przepływ informacji między działami w czasie rzeczywistym.",
    icon: LinkIcon
  },
  {
    title: "Automatyczne raportowanie i generowanie pism",
    description: "Raporty i umowy gotowe w kilka sekund. System samodzielnie agreguje dane z różnych działów i wizualizuje najważniejsze wskaźniki efektywności (KPI). Dodatkowo, generowanie powtarzalnych umów, ofert czy harmonogramów dla zespołu dzieje się automatycznie na bazie zdefiniowanych reguł.",
    icon: PieChart
  }
]

const faqs = [
  {
    question: "Czy automatyzacja procesów operacyjnych wymaga wymiany naszych obecnych programów?",
    answer: "Nie. Największą zaletą dedykowanego podejścia jest to, że dopasowuję się do Twojej obecnej infrastruktury. Piszę skrypty i integracje, które bezpiecznie łączą systemy już używane przez Twój zespół, bez wywoływania rewolucji w firmie."
  },
  {
    question: "Czym różni się wykorzystanie Google Gemini AI od tradycyjnego odczytywania dokumentów (OCR)?",
    answer: "Tradycyjny OCR „widzi” tylko tekst i często gubi się, gdy faktura od nowego kontrahenta ma inny układ graficzny. Integracja z modelami Gemini AI sprawia, że system rozumie kontekst dokumentu. Wie, czym jest kwota brutto, a czym termin płatności, niezależnie od tego, jak zaprojektowano tabelę na dokumencie."
  },
  {
    question: "Jak możemy zacząć optymalizację procesów w naszej firmie?",
    answer: "Zaczynamy od Fazy 0, czyli darmowej diagnostyki. Możemy spotkać się stacjonarnie w Warszawie lub przeprowadzić warsztaty online. Analizuję Twoje obecne przepływy pracy, wskazuję wąskie gardła i wyliczam realny zwrot z inwestycji (ROI), zanim podejmiesz jakąkolwiek decyzję."
  }
]

export default function AutomatyzacjaOperacyjnaPage() {
  return (
    <StandardLayout
      title="Automatyzacja procesów operacyjnych: Pozbądź się rutyny i zredukuj koszty w firmie."
      description="Zamiast marnować godziny na ręczne przepisywanie faktur, umów i danych między systemami, zyskaj bezbłędny system, który zrobi to za Twój zespół. Projektuję dedykowane mechanizmy automatyzacji i intuicyjne panele w React/Angular na Twoją wyłączną własność – bez opłat abonamentowych."
      breadcrumbs={[
        { name: "Oferta", href: "/oferta" },
        { name: "Automatyzacja operacyjna" }
      ]}
      badge={{ text: "Optymalizacja Procesów", icon: Zap }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Hero CTAs (Custom placement for deep page) */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 mb-24 justify-center items-center">
          <Button size="lg" className="rounded-full px-8 h-12 text-base font-bold shadow-lg shadow-primary/20 w-full sm:w-auto" asChild>
            <a href="#kontakt">
              Zarezerwuj bezpłatną diagnozę procesów
            </a>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base font-bold border-2 w-full sm:w-auto" asChild>
            <a href="#rozwiazania">
              Zobacz procesy ↓
            </a>
          </Button>
        </div>

        {/* 2. Eskalacja problemu */}
        <section className="py-24 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ukryty koszt ręcznej pracy i braku optymalizacji
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Każda minuta, którą Twój pracownik spędza na kopiowaniu danych z maila do Excela lub CRM, to minuta skradziona z rozwoju Twojego biznesu. Efekt?
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-destructive shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground">Zatory w obiegu dokumentów</h4>
                  <p className="text-sm text-muted-foreground mt-1">Faktury i umowy czekają dniami na ręczną weryfikację, co paraliżuje relacje z kontrahentami.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <XCircle className="h-6 w-6 text-destructive shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground">Kosztowne błędy ludzkie</h4>
                  <p className="text-sm text-muted-foreground mt-1">Przemęczenie powtarzalnymi zadaniami prowadzi do pomyłek w kwotach i gubienia załączników.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <ShieldCheck className="h-6 w-6 text-destructive shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground">Bariera wzrostu firmy</h4>
                  <p className="text-sm text-muted-foreground mt-1">Twój dział operacyjny już teraz nie nadąża, co uniemożliwia pozyskiwanie nowych klientów.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Prezentacja rozwiązań */}
        <section id="rozwiazania" className="py-24 border-t border-border scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Jak optymalizacja procesów w firmie odmieni Twoją codzienność?
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

        {/* 4. Technologia i Bezpieczeństwo */}
        <section className="py-24 border-t border-border">
          <div className="rounded-3xl bg-primary/5 p-8 sm:p-12 border border-primary/10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Architektura IT stworzona z myślą o stabilności biznesu
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Optymalizacja procesów w firmie musi opierać się na stabilnym fundamencie. Jako architekt systemów z doświadczeniem w bankowości, dostarczam rozwiązania pozbawione wad gotowych programów:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Standardy bankowe</h4>
                  <p className="text-xs text-muted-foreground">Bezpieczeństwo klasy Citi i BNP Paribas chroniące Twoje dane.</p>
                </div>
                <div className="text-center">
                  <Layout className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Panele React/Angular</h4>
                  <p className="text-xs text-muted-foreground">Błyskawiczny i intuicyjny interfejs dla całego Twojego zespołu.</p>
                </div>
                <div className="text-center">
                  <Key className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Pełna własność</h4>
                  <p className="text-xs text-muted-foreground">Otrzymujesz kod na własność bez comiesięcznych abonamentów.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. FAQ Ofertowe */}
        <section className="py-24 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Często zadawane pytania o automatyzację operacyjną</h2>
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
