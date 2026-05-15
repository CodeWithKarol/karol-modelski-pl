import { OfferPageTemplate } from "@/components/templates/offers/offer-page-template"
import { OFFERS } from "@/lib/offers"

export default function AdministracjaFinansePage() {
  return <OfferPageTemplate data={OFFERS["/automatyzacja-administracji-i-finansow"]} />
}
