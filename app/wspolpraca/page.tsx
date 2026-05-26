import type { Metadata } from "next"
import { WspolpracaHero } from "@/components/wspolpraca/hero"
import { WspolpracaProblem } from "@/components/wspolpraca/problem"
import { WspolpracaOffer } from "@/components/wspolpraca/offer"
import { WspolpracaWhyN8n } from "@/components/wspolpraca/why-n8n-short"
import { WspolpracaCta } from "@/components/wspolpraca/cta"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Automatyczne przesyłanie leadów do Pipedrive CRM z n8n",
  description:
    "Skonfiguruję n8n, który w 1 sekundę prześle lead z Twojego formularza do Pipedrive i powiadomi handlowca na Slacku. Wdrożenie w 48h, brak opłat za liczbę operacji.",
  alternates: {
    canonical: "https://karol-modelski.pl/wspolpraca",
  },
  openGraph: {
    title: "Automatyczne przesyłanie leadów do Pipedrive CRM z n8n",
    description:
      "Skonfiguruję n8n, który w 1 sekundę prześle lead z Twojego formularza do Pipedrive i powiadomi handlowca na Slacku.",
    url: "https://karol-modelski-pl/wspolpraca",
    siteName: "Karol Modelski – Automatyzacja n8n",
    locale: "pl_PL",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Integracja Pipedrive z n8n – Karol Modelski" }],
  },
}

export default function WspolpracaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Współpraca", href: "/wspolpraca" }]} />
      <WspolpracaHero />
      <WspolpracaProblem />
      <WspolpracaOffer />
      <WspolpracaWhyN8n />
      <WspolpracaCta />
    </>
  )
}
