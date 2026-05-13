import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Czym różni się n8n od platform Zapier lub Make?",
    answer:
      "n8n oferuje znacznie większą kontrolę nad danymi oraz elastyczność finansową. Pozwala na uruchomienie platformy na własnym serwerze (self-hosting), co eliminuje wysokie opłaty subskrypcyjne uzależnione od liczby wykonanych zadań i gwarantuje pełną prywatność.",
  },
  {
    question: "Ile kosztuje automatyzacja procesów biznesowych w małej firmie?",
    answer:
      "Koszt zależy od złożoności systemów, które łączymy. Skupiając się na małych integracjach (np. CRM + komunikator), inwestycja zwraca się zazwyczaj już w pierwszym miesiącu dzięki zaoszczędzonym godzinom pracy. Przed każdym projektem przeprowadzam bezpłatną, wstępną diagnozę.",
  },
  {
    question: "Co to jest automatyzacja wprowadzania danych?",
    answer:
      "To proces, w którym powtarzalne zadania polegające na przepisywaniu informacji z jednego narzędzia do drugiego (np. z e-maila do arkusza kalkulacyjnego czy bazy CRM) zostają w pełni przejęte przez aplikację integracyjną, co całkowicie eliminuje błędy ludzkie.",
  },
]

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-amber-400/5 blur-3xl" />
        {/* Hairline grid */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="faq-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faq-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16 lg:mb-20">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40">
              <HelpCircle className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
                FAQ
              </span>
            </div>

            <h2
              id="faq-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
            >
              Automatyzacja procesów biznesowych –{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">FAQ</span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-0 z-0 h-3 w-full -skew-x-2 bg-amber-400/25"
                />
              </span>
            </h2>
          </div>

          {/* FAQ items — native <details> for SEO + zero-JS interactivity */}
          <div className="divide-y divide-border/60">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-base font-semibold leading-relaxed text-foreground sm:text-lg">
                  <details>
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                      <span>{faq.question}</span>
                      {/* Chevron — CSS-only rotate on open */}
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border/60 bg-muted/60 transition-colors duration-200"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          className="transition-transform duration-200 [[open]_&]:rotate-180"
                        >
                          <path
                            d="M2 4l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </summary>
                    <p className="pb-7 pr-12 text-base font-normal leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </details>
                </h3>
              </div>
            ))}
          </div>

          {/* Schema.org FAQPage JSON-LD — inline for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
        </div>
      </div>
    </section>
  )
}
