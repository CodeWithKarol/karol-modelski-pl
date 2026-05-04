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
    question: "Jak połączyć nowoczesną automatyzację procesów ze starymi programami?",
    answer: "Dzięki mojemu doświadczeniu w budowaniu architektury dla banków (Citi, BNP Paribas), specjalizuję się w łączeniu nowoczesnych narzędzi z systemami legacy, tworząc stabilne mosty danych tam, gdzie inni widzą bariery."
  },
  {
    question: "Ile trwa wdrożenie pierwszej automatyzacji procesów biznesowych?",
    answer: "Standardowy czas realizacji, od audytu do gotowego systemu, wynosi zazwyczaj od 2 do 6 tygodni. Wszystko zależy od stopnia skomplikowania procesu, ale moim celem jest dostarczenie pierwszej realnej wartości tak szybko, jak to możliwe."
  },
  {
    question: "Od czego zacząć wdrażanie automatyzacji AI w małej firmie?",
    answer: "Najlepiej zacząć od bezpłatnego audytu, podczas którego wskażę obszary o najwyższym ROI, gdzie automatyzacja AI (np. Google Gemini) przyniesie najszybsze zyski i odciąży Twój zespół od powtarzalnych zadań."
  },
  {
    question: "Jakie są koszty utrzymania profesjonalnej automatyzacji procesów?",
    answer: "Koszty utrzymania automatyzacji procesów są minimalne, ponieważ wykorzystuję architekturę serverless, gdzie płacisz tylko za realne zużycie. W większości przypadków to zaledwie kilkanaście do kilkudziesięciu złotych miesięcznie."
  },
  {
    question: "Czy automatyzacja procesów biznesowych jest bezpieczna dla moich danych?",
    answer: "Tak. Jako ekspert z doświadczeniem bankowym, wdrażam automatyzację procesów biznesowych z zachowaniem rygorystycznych standardów bezpieczeństwa. Twoje dane są chronione i nie służą do trenowania publicznych modeli AI."
  },
  {
    question: "Jak automatyzacja procesów biznesowych wpływa na skalowanie firmy?",
    answer: "Moja automatyzacja biznesu jest modułowa, co pozwala na łatwe dopisywanie nowych funkcji i obsługę znacznie większej liczby zleceń przy tym samym zespole, eliminując bariery wzrostu Twojej firmy."
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
