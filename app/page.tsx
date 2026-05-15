import { HeroSection } from "@/components/sections/hero"
import { Obszary } from "@/components/sections/Obszary"
import { NarzedziaGrid } from "@/components/sections/NarzedziaGrid"
import { AgitationSection } from "@/components/sections/agitation"
import { OfferClusters } from "@/components/sections/offer-clusters"
import { WhyN8n } from "@/components/sections/why-n8n"
import { AboutTrust } from "@/components/sections/about-trust"
import { ProcessSteps } from "@/components/sections/process-steps"
import { FaqSection } from "@/components/sections/faq-section"
import { ContactDual } from "@/components/sections/contact-dual"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Automatyzacja procesów biznesowych z n8n – Karol Modelski",
  description:
    "Wdrażam proste integracje n8n i Google Gemini, które eliminują ręczną pracę Twojego zespołu. Pierwsze wdrożenie w 48 godzin.",
  alternates: {
    canonical: "https://karol-modelski.pl",
  },
  openGraph: {
    title: "Automatyzacja procesów biznesowych z n8n – Karol Modelski",
    description:
      "Wdrażam proste integracje n8n i Google Gemini, które eliminują ręczną pracę Twojego zespołu. Pierwsze wdrożenie w 48 godzin.",
    url: "https://karol-modelski.pl",
    siteName: "Karol Modelski – Automatyzacja n8n",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Karol Modelski – Automatyzacja procesów biznesowych z n8n",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatyzacja procesów biznesowych z n8n – Karol Modelski",
    description: "Eliminuj ręczną pracę zespołu. Pierwsze wdrożenie w 48 godzin.",
    images: ["/og.png"],
  },
}

export default function Page() {
  return (
    <>
      <HeroSection />
      <AgitationSection />
      <OfferClusters />
      <WhyN8n />
      <AboutTrust />
      <Obszary />
      <ProcessSteps />
      <NarzedziaGrid />
      <FaqSection />
      <ContactDual />
    </>
  )
}
