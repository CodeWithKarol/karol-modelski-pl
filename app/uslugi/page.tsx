import { Services } from "@/components/sections/services"
import { StandardLayout } from "@/components/standard-layout"
import { LayoutGrid } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Oferta i Cennik Automatyzacji | Karol Modelski",
  description: "Wybierz obszar, który wymaga usprawnienia. Systemy na wymiar, automatyzacja AI i integracje aplikacji. Sprawdź cennik i gwarancję ROI.",
}

export default function ServicesPage() {
  return (
    <StandardLayout
      title="Automatyzacja pracy i katalog rozwiązań"
      description="Wybierz obszar, który wymaga usprawnienia w Twojej firmie. Moje usługi podzieliłem na 3 główne ścieżki technologiczne, które pomogą Ci odzyskać czas."
      breadcrumbs={[{ name: "Oferta" }]}
      badge={{ text: "Katalog Rozwiązań", icon: LayoutGrid }}
    >
      <div id="katalog-uslug" className="scroll-mt-20">
        <Services compact={false} showTeaserButton={false} hideHeader={true} />
      </div>
    </StandardLayout>
  )
}
