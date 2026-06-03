import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ_CONFIG } from "@/lib/faq-config"

export function FaqSection() {
  return (
    <section className="py-12 sm:py-24 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1">
            <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-500">
              {FAQ_CONFIG.hook}
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {FAQ_CONFIG.title}
          </h2>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_CONFIG.questions.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left hover:no-underline font-semibold text-lg py-6 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
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
