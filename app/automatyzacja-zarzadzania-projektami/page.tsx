import { OfferPageTemplate } from "@/components/templates/offers/offer-page-template"
import { OFFERS } from "@/lib/offers"

export default function ZarzadzanieProjektamiPage() {
  return <OfferPageTemplate data={OFFERS["/automatyzacja-zarzadzania-projektami"]} />
}
