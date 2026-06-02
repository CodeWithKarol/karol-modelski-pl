import { ToolProblemSection, ToolSolutionSection, ToolBenefitsSection, ToolFaqSection } from "@/components/sections/tools/new-ui/tool-sections"
import { GenericHero } from "@/components/sections/generic-hero"
import { ContactDual } from "@/components/sections/contact-dual"
import { ToolPageData } from "@/lib/types"

export function ToolPageTemplate({ data }: { data: ToolPageData }) {
  return (
    <div className="min-h-screen bg-background">
      <GenericHero 
        title="Automatyzacje"
        subtitle={data.hero.h1}
        description={`Dowiedz się jak wykorzystać automatyzację do obsługi narzędzia ${data.tool_name}.`}
        ctaText={data.hero.cta_label}
        ctaHref={data.hero.cta_url}
        breadcrumbItems={[
          { label: "Automatyzacje", href: "/narzedzia" },
          { label: data.tool_name, href: "#" }
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 sm:py-12">
          <ToolProblemSection title={data.problem.title} description={data.problem.description} items={data.problem.items} />
          <ToolSolutionSection title={data.solution.title} description={data.solution.description} steps={data.solution.steps} />
          <ToolBenefitsSection title={data.benefits.title} description={data.benefits.description} items={data.benefits.items} />
          
          <ToolFaqSection title={data.faq.title} faqs={data.faq.faqs} />
          <ContactDual />
        </div>
      </div>
    </div>
  )
}
