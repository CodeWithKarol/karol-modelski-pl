import { OfferPageTemplate } from "@/components/templates/offers/offer-page-template"
import { OFFERS } from "@/lib/offers"

export default function AutomatyzacjaAiPage() {
  return <OfferPageTemplate data={OFFERS["/automatyzacja-procesow-z-ai"]} />
}
