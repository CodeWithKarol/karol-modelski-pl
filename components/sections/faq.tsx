import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const faqCategories = [
  {
    title: "Finanse i Własność Cyfrowa",
    id: "finanse",
    items: [
      {
        question: "Dlaczego dedykowana aplikacja w React/Angular jest lepsza niż gotowy system w abonamencie (SaaS)?",
        answer: "Gotowe platformy wydają się tanie na start, ale z czasem stają się ukrytym podatkiem od rozwoju Twojej firmy – płacisz więcej za każdego nowego pracownika, funkcję czy przestrzeń dyskową. Co gorsza, musisz naginać swoje procesy do sztywnych ram obcego programu. Tworząc dedykowane narzędzie, inwestujesz w trwały majątek cyfrowy swojej firmy. Płacisz raz, a system dopasowuje się w 100% do Twojego biznesu. Możesz dodawać nieskończoną liczbę użytkowników i przetwarzać dowolną ilość danych bez żadnych dodatkowych opłat licencyjnych."
      },
      {
        question: "Co dokładnie oznacza, że kod źródłowy otrzymuję „na wyłączną własność”?",
        answer: "Po zakończeniu wdrożenia przekazuję Ci pełne majątkowe prawa autorskie oraz czysty, udokumentowany kod źródłowy systemu. Stajesz się jedynym właścicielem tego rozwiązania. Oznacza to, że nie jesteś uwiązany do mnie jako do jedynego dostawcy – aplikację może w przyszłości rozwijać Twój wewnętrzny dział IT lub dowolny inny programista."
      },
      {
        question: "Jakie są stałe koszty utrzymania zautomatyzowanego systemu?",
        answer: "Ponieważ eliminujemy pośredników i platformy abonamentowe, jedynymi kosztami stałymi są minimalne opłaty za Twoją własną infrastrukturę serwerową (np. AWS, Google Cloud) oraz realne zużycie tokenów w oficjalnym API Google Gemini. Wszystkie te konta zakładamy na Twoją firmę i opłacasz je bezpośrednio u dostawców – bez moich narzutów."
      }
    ]
  },
  {
    title: "Bezpieczeństwo i Technologia",
    id: "bezpieczeństwo",
    items: [
      {
        question: "Jak dbasz o bezpieczeństwo naszych poufnych danych firmowych i tajemnic handlowych?",
        answer: "To obszar, w którym nie uznaję kompromisów. Doświadczenie w projektowaniu architektury IT dla milionów użytkowników w międzynarodowych bankach, takich jak Citi czy BNP Paribas, nauczyło mnie stosowania najbardziej rygorystycznych standardów cyberbezpieczeństwa. Cały przepływ informacji, bazy danych oraz integracje z modelami sztucznej inteligencji zabezpieczam za pomocą zaawansowanych protokołów szyfrowania. Twoje dane są w pełni odizolowane i bezpieczne."
      },
      {
        question: "Czy wdrażanie sztucznej inteligencji (Google Gemini AI) jest bezpieczne dla naszych danych?",
        answer: "Tak, ponieważ integruję systemy za pomocą oficjalnego, komercyjnego API Google Gemini dla biznesu. W przeciwieństwie do korzystania z publicznych, darmowych asystentów w przeglądarce, Twoje dokumenty, zapytania ofertowe i bazy danych nigdy nie są wykorzystywane do trenowania publicznych modeli AI. Wszystko, co przetwarza system, pozostaje wyłącznie do dyspozycji Twojego przedsiębiorstwa."
      },
      {
        question: "Czym różni się Twoje podejście do automatyzacji od masowych agencji no-code?",
        answer: "Masowe agencje często budują rozwiązania na bazie gotowych wtyczek i platform no-code, które zwalniają przy większej ilości danych lub blokują się przy nietypowych wymaganiach. Jako niezależny architekt systemów z doświadczeniem u globalnych liderów AI (Silent Eight), piszę dedykowany, czysty kod. Moje systemy są „nie do zdarcia” – działają błyskawicznie niezależnie od obciążenia i można je bez ograniczeń integrować z dowolnym oprogramowaniem w Twojej firmie."
      }
    ]
  },
  {
    title: "Logistyka i Współpraca",
    id: "wspolpraca",
    items: [
      {
        question: "Jak wygląda współpraca krok po kroku i czym jest „Faza 0”?",
        answer: "Cały proces opiera się na bezpiecznych etapach, bez kupowania kota w worku. Zaczynamy od Fazy 0, czyli darmowej diagnostyki i warsztatów operacyjnych, które możemy przeprowadzić stacjonarnie w Warszawie lub online. Analizuję Twoje obecne workflow, wskazuję miejsca wycieku roboczogodzin i wyliczam realny zwrot z inwestycji (ROI). Dopiero mając tę kompletną mapę drogową, podejmujesz decyzję o wdrożeniu."
      },
      {
        question: "Co dzieje się w sytuacji, gdy system po wdrożeniu będzie wymagał aktualizacji?",
        answer: "Nie zostawiam Cię samego z technologią. Po pomyślnym uruchomieniu automatyzacji przechodzimy do modelu stałego wsparcia i opieki technicznej (retainer). Dbam o bieżący monitoring stabilności systemu, szybką reakcję w razie jakichkolwiek zmian w zewnętrznych API oraz optymalizuję panele w miarę, jak rośnie skala Twojego biznesu."
      }
    ]
  }
]

interface FAQProps {
  compact?: boolean;
  hideHeader?: boolean;
}

export function FAQ({ compact = false, hideHeader = false }: FAQProps) {
  // Select key questions for home page (compact mode)
  const homeFaqs = [
    faqCategories[0].items[0], // why dedicted vs SaaS
    faqCategories[1].items[1], // AI security
    faqCategories[2].items[0]  // process/phase 0
  ]

  return (
    <section className={cn("py-24 sm:py-32 bg-muted/30", compact && "bg-transparent py-16 sm:py-24", hideHeader && "py-0 sm:py-0 bg-transparent")}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {!hideHeader && (
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">FAQ</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Wszystko, co musisz wiedzieć o automatyzacji
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Masz pytania dotyczące wdrożenia sztucznej inteligencji, bezpieczeństwa danych lub budowy systemów na własność? Poznaj odpowiedzi.
            </p>
          </div>
        )}

        <div className="mx-auto max-w-3xl space-y-16">
          {compact ? (
            <Accordion type="single" collapsible className="w-full">
              {homeFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`home-item-${index}`} className="border-b border-primary/10">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-7 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            faqCategories.map((category) => (
              <div key={category.id} className="space-y-6">
                <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 uppercase tracking-widest text-sm">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.items.map((faq, index) => (
                    <AccordionItem key={index} value={`${category.id}-item-${index}`} className="border-b border-primary/10">
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
            ))
          )}
          
          <div className="mt-12 flex justify-center">
            {compact && (
              <Button asChild variant="outline" className="rounded-full px-8 w-full sm:w-auto h-auto py-3 sm:py-2 whitespace-normal text-center max-w-xs sm:max-w-none">
                <Link href="/faq">Zobacz wszystkie pytania i odpowiedzi</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
