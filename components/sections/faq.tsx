import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Czy muszę płacić miesięczny abonament za automatyzację?",
    answer: "Nie. W przeciwieństwie do wielu firm, ja buduję Twoją automatyzację na systemach, które stają się Twoją własnością cyfrową. Nie uzależniam Twojego biznesu od dożywotnich opłat za mój kod."
  },
  {
    question: "Mam stary program w firmie, czy da się go zintegrować?",
    answer: "Dzięki mojemu doświadczeniu w budowaniu architektury dla banków (Citi, BNP Paribas), specjalizuję się w łączeniu nowoczesnych narzędzi z istniejącymi systemami. Jeśli istnieje sposób na wymianę danych, ja go znajdę i bezpiecznie wdrożę."
  },
  {
    question: "Ile czasu zajmuje wdrożenie pierwszej automatyzacji?",
    answer: "Typowe wdrożenie trwa od 2 do 6 tygodni. Wszystko zależy od stopnia skomplikowania procesu, ale moim celem jest dostarczenie pierwszej realnej wartości tak szybko, jak to możliwe."
  },
  {
    question: "Jakie są koszty utrzymania gotowego systemu?",
    answer: "Koszty są minimalne. Wykorzystuję rozwiązania, które płacisz tylko za realne zużycie (serverless). W większości przypadków koszty infrastruktury dla małej i średniej firmy to zaledwie kilkanaście do kilkudziesięciu złotych miesięcznie."
  },
  {
    question: "Co jeśli będę potrzebował zmian w przyszłości?",
    answer: "Moje systemy są budowane modułowo i skalowalnie. Ponieważ kod jest Twoją własnością, w przyszłości może go rozwijać dowolny programista, choć oczywiście oferuję wsparcie powdrożeniowe i dalszy rozwój systemu."
  }
]

export function FAQ() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Najczęściej zadawane pytania
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
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
        </div>
      </div>
    </section>
  )
}
