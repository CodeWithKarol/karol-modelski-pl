import { HelpCircle } from "lucide-react"

export function OfferFaqSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <section className="py-12 sm:py-24 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40">
            <HelpCircle className="h-3.5 w-3.5 text-amber-600" />
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700">FAQ</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Pytania o proces</h2>
        </div>

        <div className="mx-auto max-w-4xl divide-y divide-border/60">
          {faqs.map((faq, index) => (
            <div key={index} className="py-8">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-lg text-foreground">
                  {faq.question}
                  <span className="ml-6 flex items-center">
                    <svg className="h-6 w-6 rotate-0 transform transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
