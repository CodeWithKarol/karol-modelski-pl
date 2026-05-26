import { OfferPageData } from "@/lib/types";
import { 
  OfferHeroSection, 
  OfferPainsSection, 
  OfferModulesSection, 
  OfferTechEcosystemSection, 
  OfferFaqSection 
} from "@/components/sections/offers/offer-sections";
import { ContactDual } from "@/components/sections/contact-dual";
import { Breadcrumbs } from "@/components/breadcrumbs";

export function OfferPageTemplate({ data }: { data: OfferPageData }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
      <div className="mb-8 hidden sm:block">
        <Breadcrumbs items={[{ label: data.offer_name, href: "#" }]} />
      </div>
      
      <OfferHeroSection {...data.hero_section} />
      <OfferPainsSection {...data.business_pains} />
      <OfferModulesSection {...data.modules_section} />
      <OfferTechEcosystemSection {...data.tech_ecosystem} />
      <OfferFaqSection faqs={data.faq_section} />
      
      <ContactDual />
    </div>
  );
}
