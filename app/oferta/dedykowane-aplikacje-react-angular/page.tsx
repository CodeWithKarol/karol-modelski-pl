import { StandardLayout } from "@/components/standard-layout"
import { 
  LayoutDashboard, 
  ArrowRight, 
  Monitor, 
  Database, 
  ShieldCheck, 
  Layout, 
  Key,
  CheckCircle2,
  Lock,
  Search,
  Zap,
  Code2,
  Users
} from "lucide-react"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Dedykowane aplikacje React i Angular na własność | Karol Modelski",
  description: "Masz dość rozproszonych danych? Tworzę dedykowane aplikacje React i Angular na własność, bez abonamentów. Połącz wszystkie bazy w jeden intuicyjny widok!",
}

const solutions = [
  {
    title: "Agregacja danych w jeden pulpit menedżerski (Dashboard)",
    description: "Wszystkie informacje w zasięgu wzroku. Niezależnie od tego, czy Twoje dane znajdują się w bazach SQL, systemach CRM, ERP, czy zewnętrznych plikach – tworzę interfejs, który pobiera je w czasie rzeczywistym i wyświetla na jednym, wspólnym ekranie. Zyskujesz pełny obraz kondycji przedsiębiorstwa.",
    icon: Monitor
  },
  {
    title: "Szybkie i bezpieczne programowanie Angular & React",
    description: "Technologia, która wytrzyma każde obciążenie. Wykorzystuję zaawansowane frameworki Angular i React do budowy interfejsów użytkownika. Aplikacja działa płynnie, ładuje się natychmiastowo i chroni dane firmowe przed nieautoryzowanym dostępem.",
    icon: Code2
  },
  {
    title: "Systemy dedykowane na własność cyfrową",
    description: "Inwestycja w trwały majątek Twojej firmy. Tworzę alternatywę dla modeli subskrypcyjnych. Rozwiązanie finansujesz tylko raz. Po zakończeniu prac otrzymujesz kompletny kod źródłowy oraz pełne prawa autorskie – bez żadnych opłat licencyjnych.",
    icon: Key
  }
]

const faqs = [
  {
    question: "Czy dedykowane aplikacje React lub programowanie Angular sprawdzi się przy bardzo starych bazach danych?",
    answer: "Tak. Jedną z największych zalet budowania dedykowanego frontendu w React czy Angularze jest elastyczność integracji. Tworzę bezpieczną warstwę dostępu do danych (API), która potrafi skutecznie „rozmawiać” zarówno z nowoczesnymi systemami chmurowymi, jak i ze starszymi, lokalnymi bazami danych używanymi w Twojej firmie od lat."
  },
  {
    question: "Ile kosztuje utrzymanie systemu, skoro nie ma opłat abonamentowych?",
    answer: "Ponieważ systemy dedykowane przekazuję na własność, jedynym stałym kosztem są opłaty za Twoją własną infrastrukturze serwerową (np. AWS, Google Cloud lub dowolny inny hosting), płatne bezpośrednio u dostawców – bez żadnych moich narzutów. Są to koszty wielokrotnie niższe niż opłacanie licencji SaaS dla kilkunastu czy kilkudziesięciu pracowników."
  },
  {
    question: "Co się stanie, jeśli w przyszłości będę chciał rozbudować aplikację o nowe funkcje?",
    answer: "Otrzymujesz czysty, doskonale udokumentowany kod źródłowy zgodny z najwyższymi standardami inżynierii oprogramowania. Oznacza to, że aplikację może w przyszłości rozwijać Twój wewnętrzny zespół IT, inny programista, lub możesz powierzyć to zadanie ponownie mnie w ramach stałej opieki (model retainer). Nie jesteś uwiązany do jednego dostawcy."
  }
]

export default function SystemyNaWymiarPage() {
  return (
    <StandardLayout
      title="Dedykowane aplikacje React i Angular – Wszystkie bazy danych w jednym, intuicyjnym widoku."
      description="Projektuję i wdrażam dedykowane aplikacje webowe na Twoją wyłączną własność – bez opłat abonamentowych. Łączę rozproszone źródła danych w jeden, błyskawicznie działający pulpit menedżerski."
      breadcrumbs={[
        { name: "Oferta", href: "/oferta" },
        { name: "Dedykowane aplikacje" }
      ]}
      badge={{ text: "Custom Software", icon: LayoutDashboard }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Hero CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 mb-24 justify-center items-center">
          <Button size="lg" className="rounded-full px-8 h-12 text-base font-bold shadow-lg shadow-primary/20 w-full sm:w-auto" asChild>
            <a href="#kontakt">
              Zrezerwuj bezpłatną konsultację architektoniczną
            </a>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base font-bold border-2 w-full sm:w-auto" asChild>
            <a href="#rozwiazania">
              Sprawdź architekturę rozwiązań na własność ↓
            </a>
          </Button>
        </div>

        {/* 2. Eskalacja problemu */}
        <section className="py-24 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Pułapka rozproszonych systemów i rosnących abonamentów
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Korzystanie z gotowych programów pudełkowych na pewnym etapie rozwoju firmy staje się hamulcem. Twoje dane sprzedażowe, magazynowe i finansowe żyją w osobnych światach, a Ty płacisz za to potrójną cenę:
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <Search className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground">Paraliż decyzyjny (Chaos informacyjny)</h4>
                  <p className="text-sm text-muted-foreground mt-1">Aby wyciągnąć jeden kluczowy wskaźnik (KPI), Twój zespół musi ręcznie spinać raporty z wielu narzędzi w Excelu.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Zap className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground">Podatek od rozwoju (Koszt licencji SaaS)</h4>
                  <p className="text-sm text-muted-foreground mt-1">Każdy nowy pracownik to wyższy miesięczny rachunek za licencje. Płacisz za soft, który nigdy nie będzie Twój.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Lock className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground">Technologiczne ograniczenia</h4>
                  <p className="text-sm text-muted-foreground mt-1">Gotowe platformy zwalniają przy dużych bazach danych, a ich modyfikacja pod specyficzne potrzeby jest niemożliwa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Prezentacja rozwiązań */}
        <section id="rozwiazania" className="py-24 border-t border-border scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Skróć dystans do danych dzięki technologii szytej na miarę
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

        {/* 4. Architektura i Autorytet */}
        <section className="py-24 border-t border-border">
          <div className="rounded-3xl bg-primary/5 p-8 sm:p-12 border border-primary/10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Kodowanie oparte na standardach globalnych instytucji finansowych
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Dedykowana aplikacja to inwestycja strategiczna. Jako niezależny architekt systemów, gwarantuję jakość, której nie dostarczy żadna masowa agencja:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                    <h4 className="font-bold text-foreground">Doświadczenie korporacyjne i bankowe</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Projektowałem architekturę danych dla liderów takich jak <span className="font-bold text-foreground">Citi, BNP Paribas czy Silent Eight</span>. Te same, rygorystyczne standardy czystości kodu i cyberbezpieczeństwa implementuję w Twoim projekcie.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-primary shrink-0" />
                    <h4 className="font-bold text-foreground">Bezpośrednia współpraca w Warszawie</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Nie ma tu „głuchego telefonu” czy kierowników projektów pośredniczących w wymianie informacji. Pracuję stacjonarnie w Warszawie, gdzie wspólnie możemy przeprowadzić warsztaty diagnostyczne.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. FAQ Ofertowe */}
        <section className="py-24 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pytania i odpowiedzi: Dedykowane aplikacje webowe</h2>
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
