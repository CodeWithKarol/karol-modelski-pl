import { OfferPageData } from "@/lib/types";
import { 
  OfferPainsSection, 
  OfferModulesSection, 
  OfferTechEcosystemSection, 
  OfferFaqSection 
} from "@/components/sections/offers/offer-sections";
import { GenericHero } from "@/components/sections/generic-hero";
import { ContactDual } from "@/components/sections/contact-dual";

export function OfferPageTemplate({ data }: { data: OfferPageData }) {
  return (
    <div className="min-h-screen bg-background">
      <GenericHero 
        title="Oferta"
        subtitle={data.hero_section.h1}
        description={data.hero_section.subtitle}
        ctaText={data.hero_section.cta_label}
        ctaHref={data.hero_section.cta_url}
        breadcrumbItems={[
          { label: "Oferta", href: "/oferta" },
          { label: data.offer_name, href: "#" }
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 sm:py-12">
          <OfferPainsSection {...data.business_pains} />
          <OfferModulesSection {...data.modules_section} />
          <OfferTechEcosystemSection {...data.tech_ecosystem} />
          <OfferFaqSection faqs={data.faq_section} />
          
          <ContactDual />
        </div>
      </div>
    </div>
  );
}
