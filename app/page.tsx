import { Hero } from "@/components/sections/hero"
import { PainPoints } from "@/components/sections/pain-points"
import { About } from "@/components/sections/about"
import { ServiceTeaser } from "@/components/sections/service-teaser"
import { Process } from "@/components/sections/process"
import { FAQ } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { UseCases } from "@/components/sections/use-cases"
import { TrustLogos } from "@/components/sections/trust-logos"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Karol Modelski | Automatyzacja procesów biznesowych | Warszawa",
  description: "Automatyzacja procesów biznesowych Warszawa. Zyskaj jeden intuicyjny panel na wszystkie dane firmy, na własność i bez abonamentu. Odzyskaj swój czas!",
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. Hero - USP (Angular/React, brak abonamentu, własność) */}
      <Hero />

      {/* 2. Doświadczenie (Social Proof zaraz pod Hero) */}
      <TrustLogos />

      {/* 3. Eskalacja problemu (Zrozumienie + Ile kosztuje brak automatyzacji?) */}
      <div className="bg-muted/30 border-y border-border">
        <PainPoints />
      </div>

      {/* 4. Oferta (Usługi i konkretne obszary automatyzacji) */}
      <ServiceTeaser />
      <div className="bg-muted/30 border-y border-border">
        <UseCases />
      </div>

      {/* 5. Autorytet i "Dlaczego ja?" (Standardy bankowe + Osobista odpowiedzialność) */}
      <About compact />

      {/* 6. Proces (Jak działam: Faza 0 -> Wdrożenie -> Wsparcie) */}
      <div className="bg-muted/30 border-y border-border">
        <Process />
      </div>

      {/* 7. FAQ (Rozbijanie obiekcji: własność, koszty utrzymania) */}
      <FAQ compact />

      {/* 8. Kontakt (Hybryda: Calendly + Formularz) */}
      <Contact />
      
      <Footer />
    </main>
  )
}
