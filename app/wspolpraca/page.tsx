import type { Metadata } from "next"
import { WspolpracaHero } from "@/components/wspolpraca/hero"
import { WspolpracaProblem } from "@/components/wspolpraca/problem"
import { WspolpracaOffer } from "@/components/wspolpraca/offer"
import { WspolpracaWhyN8n } from "@/components/wspolpraca/why-n8n-short"
import { WspolpracaCta } from "@/components/wspolpraca/cta"
import { Footer } from "@/components/sections/footer"
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

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatyczne przesyłanie leadów do Pipedrive CRM z n8n",
  description:
    "Konfiguracja workflow n8n integrującego formularze WWW z Pipedrive CRM i systemem powiadomień Slack/e-mail.",
  provider: {
    "@type": "Person",
    name: "Karol Modelski",
    url: "https://karol-modelski.pl",
  },
  areaServed: { "@type": "Country", name: "Polska" },
  serviceType: "Automatyzacja procesów biznesowych",
  url: "https://karol-modelski.pl/wspolpraca",
}

export default function WspolpracaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <Breadcrumbs items={[{ label: "Współpraca", href: "/wspolpraca" }]} />
      <WspolpracaHero />
      <WspolpracaProblem />
      <WspolpracaOffer />
      <WspolpracaWhyN8n />
      <WspolpracaCta />
      <Footer />
    </>
  )
}
