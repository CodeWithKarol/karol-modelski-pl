import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
      {title}
    </h2>
  );
}

export function ToolHeroSection({ h1, cta_label, cta_url }: { h1: string; cta_label: string; cta_url: string }) {
  return (
    <section className="py-12 sm:py-24 border-b border-border/50">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-8 leading-[1.2]">
          {h1}
        </h1>
        <div className="flex justify-start">
          <a
            href={cta_url === "/kontakt" ? "#kontakt" : cta_url}
            className="group flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-4 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30"
          >
            {cta_label}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function ToolProblemSection({ title, description, items }: { title: string; description: string; items: string[] }) {
  return (
    <section className="py-12 border-t border-border/50">
      <SectionHeader title={title} />
      <p className="text-lg text-muted-foreground mb-8">{description}</p>
      <div className="flex flex-col gap-4">
        {items.map((item, i) => (
          <div 
            key={i} 
            className="relative flex items-center gap-4 p-5 rounded-xl border border-red-200 bg-red-50/50 dark:bg-red-950/10 dark:border-red-900/30"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400">
              <AlertCircle className="w-5 h-5" />
            </div>
            <p className="text-base text-foreground leading-relaxed m-0">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ToolSolutionSection({ title, description, steps }: { title: string; description: string; steps: string[] }) {
  return (
    <section className="py-12 border-t border-border/50">
      <SectionHeader title={title} />
      <p className="text-lg text-muted-foreground mb-8">{description}</p>
      <div className="flex flex-col gap-4">
        {steps.map((step, i) => (
          <div 
            key={i} 
            className="relative flex items-center gap-6 p-5 rounded-xl border border-border bg-secondary/30 dark:bg-secondary/10"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shadow-sm">
              {i + 1}
            </div>
            <p className="text-base text-foreground font-medium leading-relaxed m-0">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ToolBenefitsSection({ title, description, items }: { title: string; description: string; items: string[] }) {
  return (
    <section className="py-12 border-t border-border/50">
      <SectionHeader title={title} />
      <p className="text-lg text-muted-foreground mb-8">{description}</p>
      <div className="flex flex-col gap-4">
        {items.map((item, i) => (
          <div 
            key={i} 
            className="relative flex items-center gap-4 p-5 rounded-xl border border-green-200 bg-green-50/50 dark:bg-green-950/10 dark:border-green-900/30"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <p className="text-base text-foreground leading-relaxed m-0">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ToolFaqSection({ title, description, faqs }: { title: string; description: string; faqs: { question: string; answer: string }[] }) {
  return (
    <section className="py-12 border-t border-border/50">
      <SectionHeader title={title} />
      <p className="text-lg text-muted-foreground mb-8">{description}</p>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
