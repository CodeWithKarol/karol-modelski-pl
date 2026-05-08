import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Czy każda automatyzacja biznesu wiąże się z abonamentem?",
    answer: "Nie. W przeciwieństwie do wielu firm, buduję systemy w modelu własności cyfrowej, co oznacza, że nie płacisz mi dożywotnich opłat za korzystanie z narzędzi. Twoja automatyzacja procesów staje się Twoim aktywem."
  },
  {
    question: "Jak połączyć nowoczesną automatyzację ze starymi programami?",
    answer: "Dzięki mojemu doświadczeniu w budowaniu architektury dla banków (Citi, BNP Paribas), specjalizuję się w łączeniu nowoczesnych narzędzi ze starszym oprogramowaniem, które już masz w firmie (systemami legacy), tworząc stabilne mosty danych tam, gdzie inni widzą bariery."
  },
  {
    question: "Ile trwa wdrożenie pierwszej automatyzacji procesów biznesowych?",
    answer: "Standardowy czas realizacji, od audytu do gotowego systemu, wynosi zazwyczaj od 2 do 6 tygodni. Wszystko zależy od stopnia skomplikowania procesu, ale moim celem jest dostarczenie pierwszej realnej wartości tak szybko, jak to możliwe."
  },
  {
    question: "Od czego zacząć wdrażanie automatyzacji AI w małej firmie?",
    answer: "Najlepiej zacząć od bezpłatnej Diagnozy ROI, podczas której wskażę obszary o najwyższym potencjale zysku, gdzie automatyzacja AI przyniesie najszybsze efekty i odciąży Twój zespół od powtarzalnych zadań."
  },
  {
    question: "Ile kosztuje wdrożenie systemu?",
    answer: "Najprostsze automatyzacje i spięcie aplikacji zaczynają się od ok. 3 500 PLN netto. Kompleksowa automatyzacja procesów wymagająca dedykowanego panelu w Angularze i zaawansowanego AI jest zawsze poprzedzona płatną Fazą Zero (Audytem), dzięki czemu z góry znasz precyzyjne koszty i ROI."
  },
  {
    question: "Czy dane mojej firmy będą bezpieczne?",
    answer: "Tak. Jako ekspert z doświadczeniem bankowym, wdrażam systemy zgodnie z rygorystycznymi standardami bezpieczeństwa. Twoje wrażliwe dane są chronione i nigdy nie służą do trenowania publicznych modeli sztucznej inteligencji."
  },
  {
    question: "Jakie są koszty utrzymania automatyzacji procesów w firmie?",
    answer: "Koszty utrzymania automatyzacji procesów są minimalne, ponieważ wykorzystuję technologię, dzięki której płacisz tylko za faktyczne działanie systemu, a nie za jego samo istnienie (tzw. serverless). W większości przypadków to zaledwie kilkanaście do kilkudziesięciu złotych miesięcznie."
  },
  {
    question: "Czy automatyzacja pracy wymaga ode mnie wiedzy technicznej?",
    answer: "Absolutnie nie. Cały proces techniczny, od projektu po wdrożenie i testy, biorę na siebie. Twoim zadaniem jest jedynie pokazanie mi, jak obecnie wygląda dany proces, a ja dostarczę Ci gotowe, proste w obsłudze narzędzie, które będzie pracować za Ciebie."
  },
  {
    question: "Jak szybko zwraca się automatyzacja procesów w firmie?",
    answer: "W większości przypadków zwrot z inwestycji (ROI) jest widoczny już w pierwszym lub drugim miesiącu od wdrożenia. Oszczędność czasu Twojego i Twojego zespołu oraz eliminacja błędów ludzkich sprawiają, że automatyzacja spłaca się błyskawicznie."
  }
]

interface FAQProps {
  compact?: boolean
}

export function FAQ({ compact = false }: FAQProps) {
  // Select top 3 strategic questions for home page teaser
  const teaserFaqs = [
    faqs.find(f => f.question.includes("abonamentem")),
    faqs.find(f => f.question.includes("Ile kosztuje")),
    faqs.find(f => f.question.includes("dane mojej firmy"))
  ].filter(Boolean) as typeof faqs

  const displayedFaqs = compact ? teaserFaqs : faqs

  return (
    <section className={cn("py-24 sm:py-32 bg-muted/30", compact && "bg-transparent py-16 sm:py-24")}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {compact ? "Pytania, które słyszę najczęściej" : "Kompletna baza wiedzy"}
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {compact 
              ? "Masz wątpliwości przed startem? Oto odpowiedzi na 3 kluczowe kwestie." 
              : "Znajdź odpowiedzi na wszystkie pytania dotyczące procesu, kosztów i bezpieczeństwa wdrożeń automatyzacji."}
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {displayedFaqs.map((faq, index) => (
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
          
          <div className="mt-12 text-center">
            {compact ? (
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/faq">Zobacz wszystkie pytania i odpowiedzi</Link>
              </Button>
            ) : (
              <p className="text-muted-foreground">
                Masz inne pytania?{" "}
                <a href="#kontakt" className="text-primary font-semibold hover:underline">
                  Zapytaj mnie podczas bezpłatnej konsultacji
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
