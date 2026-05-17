import { ToolsHero } from "@/components/sections/tools/tools-hero"
import { ToolAgitation } from "@/components/sections/tools/tool-agitation"
import { TechnicalDetails } from "@/components/templates/technical-details"
import { WorkflowDetailSection } from "@/components/sections/tools/workflow-detail"
import { ToolFaqSection } from "@/components/sections/tools/tool-faq"
import { OfferToolLinks } from "@/components/sections/offers/offer-tool-links"
import { ContactDual } from "@/components/sections/contact-dual"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ToolPageData } from "@/lib/types"

export function ToolPageTemplate({ data }: { data: ToolPageData }) {
  return (
    <>
      <Breadcrumbs items={[{ label: data.hero.title, href: "#" }]} />
      <ToolsHero {...data.hero} />
      <ToolAgitation title={data.agitationTitle} painPoints={data.painPoints} />
      <TechnicalDetails features={data.technical.features} />
      <WorkflowDetailSection title={data.workflowTitle} subtitle={data.workflowSubtitle} steps={data.steps.map(s => ({ step: s.step, title: s.title, description: s.description }))} />
      <OfferToolLinks />
      <ToolFaqSection faqs={data.faqs} />
      <ContactDual />
    </>
  )
}
