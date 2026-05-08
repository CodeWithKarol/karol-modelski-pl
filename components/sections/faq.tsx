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

export function FAQ() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Najczęściej zadawane pytania
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-balance">
            Masz wątpliwości? Tutaj znajdziesz odpowiedzi na kwestie, które najczęściej nurtują moich klientów przed rozpoczęciem współpracy.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
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
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Masz inne pytania?{" "}
              <a href="#kontakt" className="text-primary font-semibold hover:underline">
                Zapytaj mnie podczas bezpłatnej konsultacji
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
