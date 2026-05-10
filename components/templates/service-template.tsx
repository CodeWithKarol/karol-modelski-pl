import { ReactNode } from "react"
import { CheckCircle2, ShieldCheck, LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { StandardLayout } from "@/components/standard-layout"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface ServiceStep {
  title: string
  description: string
}

interface ServiceBenefit {
  title: string
  description: string
  icon: LucideIcon
}

interface FAQItem {
  question: string
  answer: string
}

interface ServiceTemplateProps {
  title: string
  description: string
  badge: { text: string; icon: LucideIcon }
  breadcrumbs: { name: string; href?: string }[]
  
  // Pain Points Section
  painPointsTitle: string
  painPointsDescription: string
  painPointsList: string[]
  benefitCards: ServiceBenefit[]
  
  // Process Section
  processTitle: string
  processDescription: string
  processSteps: ServiceStep[]
  
  // Authority Section
  authorityQuote: string
  
  // FAQ Section
  faqTitle: string
  faqItems: FAQItem[]
}

export function ServiceTemplate({
  title,
  description,
  badge,
  breadcrumbs,
  painPointsTitle,
  painPointsDescription,
  painPointsList,
  benefitCards,
  processTitle,
  processDescription,
  processSteps,
  authorityQuote,
  faqTitle,
  faqItems
}: ServiceTemplateProps) {
  return (
    <StandardLayout
      title={title}
      description={description}
      badge={badge}
      breadcrumbs={breadcrumbs}
    >
      {/* 1. Problemy i Szybkie Korzyści */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground">{painPointsTitle}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{painPointsDescription}</p>
              <ul className="mt-8 space-y-4">
                {painPointsList.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefitCards.map((benefit) => (
                <Card key={benefit.title} className="bg-background border-primary/10 p-6">
                  <benefit.icon className="h-10 w-10 text-primary mb-4" />
                  <h4 className="font-bold">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground mt-2">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Proces Realizacji */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold">{processTitle}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{processDescription}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="p-8 rounded-3xl bg-muted border border-border">
                <span className="text-primary font-bold text-sm uppercase tracking-widest">Krok {index + 1}</span>
                <h3 className="text-xl font-bold mt-4">{step.title}</h3>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Sekcja Autorytetu (Dedykowana dla usług) */}
      <section className="py-24 bg-primary/5 border-y border-primary/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <ShieldCheck className="h-16 w-16 text-primary mb-6" />
            <h2 className="text-3xl font-bold uppercase tracking-tight text-primary/80 text-sm mb-4">Gwarancja Jakości</h2>
            <p className="text-xl sm:text-2xl text-foreground font-medium italic leading-relaxed">
              „{authorityQuote}”
            </p>
            <p className="mt-6 font-bold text-foreground">– Karol Modelski, Architekt Systemów</p>
          </div>
        </div>
      </section>

      {/* 4. Dedykowane FAQ */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground">{faqTitle}</h3>
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq, index) => (
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
    </StandardLayout>
  )
}
