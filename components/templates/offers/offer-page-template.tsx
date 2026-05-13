import { OfferHero } from "@/components/sections/offers/offer-hero"
import { ToolAgitation } from "@/components/sections/tools/tool-agitation"
import { OfferScenarios } from "@/components/sections/offers/offer-scenarios"
import { AreaToolLinks } from "@/components/sections/areas/area-tool-links"
import { OfferFaqSection } from "@/components/sections/offers/offer-faq"
import { TechnicalDetails } from "@/components/templates/technical-details"
import { ContactDual } from "@/components/sections/contact-dual"
import { Footer } from "@/components/sections/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { OfferAgitation } from "@/components/sections/offers/offer-agitation"
import { OfferToolLinks } from "@/components/sections/offers/offer-tool-links"

interface OfferPageProps {
  hero: any
  agitation: any
  scenarios: any
  technical: any
  toolLinks: any
  faq: any
}

export function OfferPageTemplate({ hero, agitation, scenarios, technical, toolLinks, faq }: OfferPageProps) {
  return (
    <>
      <Breadcrumbs items={[{ label: hero.title, href: "#" }]} />
      <OfferHero {...hero} />
      <OfferAgitation {...agitation} />
      <OfferScenarios {...scenarios} />
      <TechnicalDetails {...technical} />
      <OfferToolLinks {...toolLinks} />
      <OfferFaqSection {...faq} />



      
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
      <Footer />
    </>
  )
}
