import { HelpCircle } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

export function ToolFaqSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 lg:mb-20">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40">
              <HelpCircle className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
              <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
                FAQ
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Najczęściej zadawane pytania
            </h2>
          </div>

          <div className="divide-y divide-border/60">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-base font-semibold leading-relaxed text-foreground sm:text-lg">
                  <details>
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                      <span>{faq.question}</span>
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border/60 bg-muted/60 transition-colors duration-200">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 [[open]_&]:rotate-180">
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </summary>
                    <p className="pb-7 pr-6 text-base font-normal leading-relaxed text-muted-foreground sm:pr-12">
                      {faq.answer}
                    </p>
                  </details>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
