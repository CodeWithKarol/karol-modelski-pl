import { Hero } from "@/components/sections/hero"
import { PainPoints } from "@/components/sections/pain-points"
import { About } from "@/components/sections/about"
import { ServiceTeaser } from "@/components/sections/service-teaser"
import { Trust } from "@/components/sections/trust"
import { Process } from "@/components/sections/process"
import { FAQ } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { UseCases } from "@/components/sections/use-cases"
import { TrustLogos } from "@/components/sections/trust-logos"
import { Stack } from "@/components/sections/stack"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. Hero - Unikalna wartość */}
      <Hero />

      {/* 2. Zaufanie (Logotypy marek od razu budują autorytet) */}
      <TrustLogos />

      {/* 3. Problemy klienta */}
      <div className="bg-muted/30 border-y border-border">
        <PainPoints />
      </div>

      {/* 4. Dystrybucja ruchu - Główne usługi */}
      <ServiceTeaser />

      {/* 5. Obszary zastosowań (Nowość - pomaga SEO i AI) */}
      <div className="bg-muted/30 border-y border-border">
        <UseCases />
      </div>

      {/* 6. Autorytet i "Dlaczego ja?" */}
      <About compact />

      {/* 7. Wartości i Przewagi */}
      <div className="bg-muted/30 border-y border-border">
        <Trust />
      </div>

      {/* 8. Narzędzia i Technologie */}
      <Stack />

      {/* 9. Przebieg współpracy (Proces) */}
      <div className="bg-muted/30 border-y border-border">
        <Process />
      </div>

      {/* 10. Rozbijanie obiekcji (FAQ) */}
      <FAQ compact />

      {/* 11. Zamknięcie (CTA) */}
      <Contact />
      
      <Footer />
    </main>
  )
}
