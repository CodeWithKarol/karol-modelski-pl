import { ToolHeroSection, ToolProblemSection, ToolSolutionSection, ToolBenefitsSection, ToolFaqSection } from "@/components/sections/tools/new-ui/tool-sections"
import { ContactDual } from "@/components/sections/contact-dual"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ToolPageData } from "@/lib/types"
import { getToolProfessionalSchema } from "@/lib/schema"

export function ToolPageTemplate({ data }: { data: ToolPageData }) {
  const schema = getToolProfessionalSchema(data);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
      <div className="mb-8 hidden sm:block">
        <Breadcrumbs items={[{ label: data.tool_name, href: "#" }]} />
      </div>
      <ToolHeroSection h1={data.hero.h1} cta_label={data.hero.cta_label} cta_url={data.hero.cta_url} />
      
      <ToolProblemSection title={data.problem.title} description={data.problem.description} items={data.problem.items} />
      <ToolSolutionSection title={data.solution.title} description={data.solution.description} steps={data.solution.steps} />
      <ToolBenefitsSection title={data.benefits.title} description={data.benefits.description} items={data.benefits.items} />
      
      <ToolFaqSection title={data.faq.title} description={data.faq.description} faqs={data.faq.faqs} />
      <ContactDual />
    </div>
  )
}
