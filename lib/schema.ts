import { ToolPageData } from "@/lib/types";

export function getToolProfessionalSchema(data: ToolPageData) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": data.tool_name,
    "description": data.seo.description,
    "url": typeof window !== "undefined" ? window.location.href : "",
    "provider": {
      "@type": "Organization",
      "name": "Karol Modelski",
      "url": "https://karolmodelski.pl"
    }
  };
}
