import { OfferPageTemplate } from "@/components/templates/offers/offer-page-template"
import { OFFERS } from "@/lib/offers"

export default function ObslugaKlientaPage() {
  return <OfferPageTemplate data={OFFERS["/automatyzacja-obslugi-klienta"]} />
}
