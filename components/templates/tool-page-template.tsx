import { ToolsHero } from "@/components/sections/tools/tools-hero"
import { ToolAgitation } from "@/components/sections/tools/tool-agitation"
import { TechnicalDetails } from "@/components/templates/technical-details"
import { ToolFaqSection } from "@/components/sections/tools/tool-faq"
import { ContactDual } from "@/components/sections/contact-dual"
import { Breadcrumbs } from "@/components/breadcrumbs"

import { LucideIcon } from "lucide-react"

interface ToolsHeroProps {
  title: string
  subtitle: string
  description: string
}

interface PainPoint {
  icon: LucideIcon
  title: string
  description: string
}

interface ToolAgitationProps {
  title: string
  painPoints: PainPoint[]
}

interface ToolFaqProps {
  faqs: { question: string; answer: string }[]
}

interface TechnicalFeature {
  icon: LucideIcon
  title: string
  description: string
  link?: { label: string; href: string }
}

interface TechnicalDetailsProps {
  features: TechnicalFeature[]
}

export interface ToolPageProps {
  hero: ToolsHeroProps
  agitation: ToolAgitationProps
  technical: TechnicalDetailsProps
  faq: ToolFaqProps
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
    </>
  )
}
