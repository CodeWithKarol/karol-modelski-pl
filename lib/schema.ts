import { ToolPageData } from "@/lib/types";
import { Service, ProfessionalService, WithContext, Organization } from "schema-dts";

export function getToolProfessionalSchema(data: ToolPageData): [WithContext<Service>, WithContext<ProfessionalService>] {
  const provider: Organization = {
    "@type": "Organization",
    "name": "Karol Modelski",
    "url": "https://karol-modelski.pl"
  };

  const service: WithContext<Service> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.tool_name,
    "description": data.seo.description,
    "provider": provider,
    "serviceType": "IT Automation & Integration",
    "areaServed": {
      "@type": "Country",
      "name": "Poland"
    }
  };

  const profService: WithContext<ProfessionalService> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": data.tool_name,
    "description": data.seo.description,
    "url": "https://karol-modelski.pl",
  };

  return [service, profService];
}
