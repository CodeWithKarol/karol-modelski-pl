import { StandardLayout } from "@/components/standard-layout"
import { LayoutGrid, ArrowRight, Zap, LayoutDashboard, Share2, ShieldCheck, Coins, Users, CheckCircle2 } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Contact } from "@/components/sections/contact"

export const metadata: Metadata = {
  title: "Katalog Usług i Rozwiązań | Automatyzacja Procesów Biznesowych",
  description: "Nie kupuj kolejnych abonamentów. Wybierz dedykowane rozwiązania w React i Angularze, zintegrowane z Gemini AI – stworzone na Twoją wyłączną własność.",
}

const pillars = [
  {
    title: "Automatyzacja Procesów Operacyjnych i Przepływu Danych",
    for: "Dla firm, w których zespół marnuje czas na powtarzalne, manualne zadania, chaos w tabelach i „przekładanie danych”.",
    gain: "Bezawaryjne algorytmy przejmują rutynową pracę. Dane między Twoimi systemami (CRM, ERP, magazyn, bazy) synchronizują się same, eliminując ludzkie błędy i drastycznie obniżając koszty operacyjne.",
    cta: "Sprawdź, jak optymalizuję przepływy pracy i automatyzuję procesy",
    href: "/oferta/automatyzacja-procesow-operacyjnych",
    icon: Zap
  },
  {
    title: "Dedykowane Systemy i Panele Menedżerskie (React / Angular)",
    for: "Dla menedżerów i właścicieli firm, którzy korzystają z wielu narzędzi, ale brakuje im jednego, czytelnego źródła prawdy o biznesie.",
    gain: "Szybki, skrojone pod Twoje procesy interfejs (pulpit), który agreguje rozproszone dane i wyświetla je w jednym, intuicyjnym widoku. Płacisz raz za wdrożenie – system i kod źródłowy stają się własnością Twojej firmy, bez żadnych opłat licencyjnych.",
    cta: "Poznaj możliwości dedykowanych aplikacji React i Angular na własność",
    href: "/oferta/dedykowane-aplikacje-react-angular",
    icon: LayoutDashboard
  },
  {
    title: "Integracje ze Sztuczną Inteligencją (Google Gemini AI)",
    for: "Dla organizacji, które chcą, aby technologia nie tylko bezmyślnie przesyłała dane, ale realnie wspierała zespół w analizie i decyzjach.",
    gain: "Wdrożenie zaawansowanych modeli Gemini AI bezpośrednio w Twoje struktury. AI, które samodzielnie analizuje skomplikowane dokumenty, kategoryzuje zapytania ofertowe, generuje raporty i automatyzuje obsługę, bez popełniania kosztownych błędów.",
    cta: "Dowiedz się więcej o integracji systemów z Google Gemini AI",
    href: "/oferta/automatyzacja-ai-dla-firm",
    icon: Share2
  }
]

const problemPaths = [
  {
    title: "Dział Sprzedaży i Obsługi Klienta",
    description: "Automatyczna kwalifikacja leadów z formularzy, natychmiastowe generowanie ofert w PDF i automatyczny przydział zadań dla handlowców."
  },
  {
    title: "Operacje, Finanse i Administracja",
    description: "Bezobsługowy obieg faktur, umów i dokumentacji firmowej, spięty bezpośrednio z systemami księgowymi."
  },
  {
    title: "Zarządzanie i Analityka (KPI)",
    description: "Wszystkie kluczowe wskaźniki efektywności Twojej firmy zwizualizowane na jednym, wspólnym ekranie w czasie rzeczywistym."
  }
]

const serviceFaqs = [
  {
    question: "Ile kosztuje wdrożenie automatyzacji z katalogu?",
    answer: "Każdy biznes ma inną specyfikację, dlatego cenę zawsze poprzedza bezpłatna diagnostyka (Faza 0) realizowana stacjonarnie w Warszawie lub zdalnie. Inwestycja w dedykowany system na własność zwraca się zazwyczaj w kilka miesięcy, eliminując dziesiątki zmarnowanych roboczogodzin Twojego zespołu."
  },
  {
    question: "Kto ma dostęp do kodu źródłowego i danych po zakończeniu projektu?",
    answer: "Ty i wyłącznie Twój zespół. Po wdrożeniu przekazuję pełne prawa autorskie i czysty kod źródłowy. Dane nie krążą po serwerach zewnętrznych firm pośredniczących – wszystko działa w Twojej infrastrukturze."
  },
  {
    question: "Co jeśli moje systemy nie mają gotowych wtyczek do integracji?",
    answer: "Jako architekt systemów nie polegam na gotowych szablonach. Jeśli Twoje oprogramowanie nie posiada standardowych integracji, piszę dedykowane skrypty, które trwale i bezpiecznie połączą rozproszone bazy danych w jeden widok."
  }
]

export default function ServicesPage() {
  return (
    <StandardLayout
      title="Wybierz obszar, który paraliżuje rozwój Twojej firmy, i zamień go w zautomatyzowane aktywo."
      description="Nie kupuj kolejnych programów w abonamencie, do których musisz naginać swój biznes. Wybierz dedykowane rozwiązania w React i Angularze, zintegrowane z modelami Gemini AI – stworzone na Twoją wyłączną własność cyfrową."
      breadcrumbs={[{ name: "Oferta" }]}
      badge={{ text: "Katalog Rozwiązań", icon: LayoutGrid }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* 2. Podział Katalogu według Intencji */}
        <section className="py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <Link key={pillar.title} href={pillar.href} className="group">
                <Card className="h-full border-primary/10 transition-all hover:border-primary/40 hover:shadow-lg bg-muted/30 group-hover:bg-background">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary transition-colors">
                      <pillar.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                      {pillar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Dla kogo:</p>
                      <p className="text-sm text-muted-foreground">{pillar.for}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Co zyskujesz:</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{pillar.gain}</p>
                    </div>
                    <div className="pt-4 flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider group-hover:underline text-primary">
                      {pillar.cta} <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* 3. Filtrowanie Oferty według Problemów */}
        <section className="py-24 border-t border-border">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Wybierz dział, w którym chcesz odzyskać czas i podnieść zyski:
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problemPaths.map((path, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-muted/50 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">{path.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {path.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Dlaczego model na własność wygrywa z systemami SaaS? */}
        <section className="py-24 border-t border-border">
          <div className="rounded-3xl bg-primary/5 p-8 sm:p-12 border border-primary/10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Inwestycja w cyfrowe aktywo, które zarabia na siebie każdego dnia
              </h2>
              <div className="text-lg text-muted-foreground space-y-6">
                <p>
                  Standardowe programy na rynku kuszą niskim abonamentem na start, ale uzależniają Cię od rosnących opłat subskrypcyjnych, limitów użytkowników i sztywnych ram, do których musisz dopasować swoją firmę.
                </p>
                <p className="font-bold text-foreground">
                  W moim katalogu znajdziesz wyłącznie rozwiązania budowane na Twoją wyłączną własność cyfrową.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <p className="text-base"><span className="font-bold text-foreground">Płacisz raz za wdrożenie</span>, a system staje się trwałym majątkiem Twojej firmy.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <p className="text-base">Rozwijasz strukturę i <span className="font-bold text-foreground">dodajesz kolejnych pracowników</span> bez obaw o wyższe faktury abonamentowe.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <p className="text-base"><span className="font-bold text-foreground">Bezpieczeństwo i wydajność</span> kodu (React/Angular) stoją na poziomie standardów bankowych.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. FAQ Ofertowe */}
        <section className="py-24 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Najczęstsze pytania o wdrożenia</h2>
            <Accordion type="single" collapsible className="w-full">
              {serviceFaqs.map((faq, index) => (
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
