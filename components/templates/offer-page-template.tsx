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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-4">
        <Breadcrumbs items={[
          { label: "Oferta", href: "/oferta" },
          { label: data.offer_name, href: "#" }
        ]} />
      </div>
      <div className="py-6 sm:py-12">
        <OfferHeroSection {...data.hero_section} />
        <OfferPainsSection {...data.business_pains} />
        <OfferModulesSection {...data.modules_section} />
        <OfferTechEcosystemSection {...data.tech_ecosystem} />
        <OfferFaqSection faqs={data.faq_section} />
        
        <ContactDual />
      </div>
    </div>
  );
}
