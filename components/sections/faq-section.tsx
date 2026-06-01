import { FAQ_CONFIG } from "@/lib/faq"
import { FAQ } from "@/components/ui/faq"
import { HelpCircle } from "lucide-react"

export function FaqSection() {
  const faqs = FAQ_CONFIG.faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }))

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative bg-background py-12 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted/30 px-3 py-1">
            <HelpCircle className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
            <span className="font-mono text-xs font-semibold tracking-wide text-muted-foreground">
              {FAQ_CONFIG.eyebrow}
            </span>
          </div>

          <h2
            id="faq-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
          >
            {FAQ_CONFIG.headline}
          </h2>
        </div>

        <FAQ items={faqs} />
      </div>
    </section>
  )
}
