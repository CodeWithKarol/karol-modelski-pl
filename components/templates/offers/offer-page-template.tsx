import { OfferHero } from "@/components/sections/offers/offer-hero"
import { OfferScenarios } from "@/components/sections/offers/offer-scenarios"
import { OfferToolLinks } from "@/components/sections/offers/offer-tool-links"
import { OfferFaqSection } from "@/components/sections/offers/offer-faq"
import { TechnicalDetails } from "@/components/templates/technical-details"
import { WorkflowDetailSection } from "@/components/sections/tools/workflow-detail"
import { ContactDual } from "@/components/sections/contact-dual"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { OfferAgitation } from "@/components/sections/offers/offer-agitation"
import { OfferPageData } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function OfferPageTemplate({ data }: { data: OfferPageData }) {
  return (
    <>
      <Breadcrumbs items={[{ label: data.metadata.breadcrumbLabel, href: "#" }]} />
      <OfferHero {...data.hero} />
      <OfferAgitation title={data.agitation.title} painPoints={data.agitation.painPoints} />
      <OfferScenarios title={data.scenarios.title} scenarios={data.scenarios.scenarios} />
      <TechnicalDetails features={data.technical.features} />
      
      {data.steps && data.steps.length > 0 && (
         <WorkflowDetailSection 
            title={data.workflowTitle || ""} 
            subtitle={data.workflowSubtitle || ""} 
            steps={data.steps} 
         />
      )}

      <OfferToolLinks />
      <OfferFaqSection faqs={data.faq.faqs} />

      <section className="py-12 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <Card className="border-border/60 bg-background p-12 text-center">
             <CardContent className="p-0">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Gotowy na automatyzację?</h2>
                <p className="mt-4 text-lg text-muted-foreground">Sprawdź nasz model pracy lub od razu zarezerwuj termin rozmowy.</p>
                <div className="mt-8 flex justify-center gap-4">
                  <Link href="/wspolpraca" className="inline-flex items-center justify-center rounded-xl bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-all hover:bg-foreground/85">
                    Zobacz model współpracy
                  </Link>
                </div>
             </CardContent>
           </Card>
        </div>
      </section>

      <ContactDual />
    </>
  )
}
