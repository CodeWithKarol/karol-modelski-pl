import { ToolPageData, OfferPageData, ArticlePageData } from "@/lib/types";
import { Service, ProfessionalService, WithContext, Organization, Article, Person } from "schema-dts";

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

export function getOfferProfessionalSchema(data: OfferPageData): [WithContext<Service>, WithContext<ProfessionalService>] {
  const provider: Organization = {
    "@type": "Organization",
    "name": "Karol Modelski",
    "url": "https://karol-modelski.pl"
  };

  const service: WithContext<Service> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.offer_name,
    "description": data.seo_metadata.meta_description,
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
    "name": data.offer_name,
    "description": data.seo_metadata.meta_description,
    "url": `https://karol-modelski.pl${data.offer_url}`,
  };

  return [service, profService];
}

export function getArticleSchema(data: ArticlePageData): WithContext<Article> {
  const author: Person = {
    "@type": "Person",
    "name": data.metadata.author_name,
    "jobTitle": data.metadata.author_role
  };

  const publisher: Organization = {
    "@type": "Organization",
    "name": "Karol Modelski",
    "url": "https://karol-modelski.pl"
  };

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.hero_section.h1,
    "author": author,
    "publisher": publisher,
    "datePublished": data.metadata.publication_date,
    "dateModified": data.metadata.last_modified_date,
    "description": data.seo_metadata.meta_description
  };
}

