import { OfferPageTemplate } from "@/components/templates/offers/offer-page-template"
import { OFFERS } from "@/lib/offers"

export default function MarketingAutomationPage() {
  return <OfferPageTemplate data={OFFERS["/automatyzacja-marketingu"]} />
}
