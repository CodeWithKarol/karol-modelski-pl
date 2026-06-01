import { HeroSection } from "@/components/sections/hero"
import { AgitationSection } from "@/components/sections/agitation"
import { WhyMeSection } from "@/components/sections/why-me"
import { Obszary } from "@/components/sections/Obszary"
import { ProcessSteps } from "@/components/sections/process-steps"
import { FaqSection } from "@/components/sections/faq-section"
import { ContactDual } from "@/components/sections/contact-dual"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Automatyzacja procesów biznesowych | Karol Modelski - Warszawa",
  description:
    "Odzyskaj czas dzięki inżynierskiej automatyzacji procesów biznesowych. Wdrażam systemy oparte na AI dla firm. Umów bezpłatną diagnozę – Karol Modelski Warszawa.",
  alternates: {
    canonical: "https://karol-modelski.pl",
  },
}

export default function Page() {
  return (
    <>
      <HeroSection />
      <AgitationSection />
      <Obszary />
      <WhyMeSection />
      <ProcessSteps />
      <FaqSection />
      <ContactDual />
    </>
  )
}
