import { HelpCircle } from "lucide-react"
import { FAQ } from "@/components/ui/faq"

export function ToolFaqSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
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

          <FAQ items={faqs} />
        </div>
      </div>
    </section>
  )
}
