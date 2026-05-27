import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, ArrowRight, Zap, Target, BrainCircuit } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { OfferPageData } from "@/lib/types";

export function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">{title}</h2>
      <p className="text-lg text-muted-foreground">{description}</p>
    </div>
  );
}

export function OfferHeroSection({ h1, subtitle, cta_label, cta_url, cta_microcopy }: OfferPageData["hero_section"]) {
  return (
    <section className="py-12 sm:py-24 border-b border-border/50 text-center">
      <div className="mx-auto max-w-3xl flex flex-col items-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-8 leading-[1.2]">
          {h1}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
        <div className="flex flex-col items-center gap-4">
          <a
            href={cta_url}
            className="group flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-4 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30"
          >
            {cta_label}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm text-muted-foreground">{cta_microcopy}</p>
        </div>
      </div>
    </section>
  );
}

export function OfferPainsSection({ section_title, section_description, pains_list }: OfferPageData["business_pains"]) {
  return (
    <section className="py-12 border-t border-border/50">
      <SectionHeader title={section_title} description={section_description} />
      <div className="flex flex-col gap-4">
        {pains_list.map((pain, i) => (
          <div 
            key={i} 
            className="relative flex items-center gap-4 p-5 rounded-xl border border-red-200 bg-red-50/50 dark:bg-red-950/10 dark:border-red-900/30"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400">
              <AlertCircle className="w-5 h-5" />
            </div>
            <p className="text-base text-foreground leading-relaxed m-0">{pain}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function OfferModulesSection({ section_title, section_description, modules }: OfferPageData["modules_section"]) {
  return (
    <section className="py-16 border-t border-border/50">
      <SectionHeader title={section_title} description={section_description} />
      <div className="grid gap-6 md:grid-cols-3">
        {modules.map((m, i) => (
          <Card key={i} className="group border border-border/40 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200">
            <CardContent className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-bold text-foreground mb-6 pb-4 border-b border-border/40">
                {m.module_title}
              </h3>
              <div className="space-y-6 flex-grow">
                <div className="space-y-1.5">
                  <p className="text-[10px] font-bold text-muted-foreground/70 uppercase tracking-[0.2em]">Problem</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.problem}</p>
                </div>
                <div className="space-y-1.5">
                  <p className="text-[10px] font-bold text-muted-foreground/70 uppercase tracking-[0.2em]">Rozwiązanie</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.solution}</p>
                </div>
                <div className="pt-4 mt-2 border-t border-border/40">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1.5">Efekt</p>
                  <p className="text-foreground text-sm font-semibold leading-relaxed">{m.outcome}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function OfferTechEcosystemSection({ section_title, section_description, supported_tools }: OfferPageData["tech_ecosystem"]) {
  return (
    <section className="py-12 border-t border-border/50">
      <SectionHeader title={section_title} description={section_description} />
      <div className="flex flex-wrap gap-3">
        {supported_tools.map((tool) => (
          <span key={tool} className="px-5 py-2.5 bg-secondary/50 border border-border rounded-full font-medium text-foreground shadow-sm">
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}

export function OfferFaqSection({ faqs }: { faqs: OfferPageData["faq_section"] }) {
  return (
    <section className="py-12 border-t border-border/50">
      <SectionHeader title="Najczęściej zadawane pytania" description="Poznaj odpowiedzi na najczęstsze wątpliwości dotyczące wdrożeń." />
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
