import { ToolsHero } from "@/components/sections/tools/tools-hero"
import { ToolAgitation } from "@/components/sections/tools/tool-agitation"
import { TechnicalDetails } from "@/components/templates/technical-details"
import { ToolFaqSection } from "@/components/sections/tools/tool-faq"
import { ContactDual } from "@/components/sections/contact-dual"
import { Footer } from "@/components/sections/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"

export interface ToolPageProps {
  hero: any
  agitation: any
  technical: any
  faq: any
}

export function ToolPageTemplate({ hero, agitation, technical, faq }: ToolPageProps) {
  return (
    <>
      <Breadcrumbs items={[{ label: hero.title, href: "#" }]} />
      <ToolsHero {...hero} />
      <ToolAgitation {...agitation} />
      <TechnicalDetails {...technical} />
      <ToolFaqSection {...faq} />
      <ContactDual />
      <Footer />
    </>
  )
}
