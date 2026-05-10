import { Services } from "@/components/sections/services"
import { StandardLayout } from "@/components/standard-layout"
import { LayoutGrid } from "lucide-react"

export default function ServicesPage() {
  return (
    <StandardLayout
      title="Zainwestuj w święty spokój: Oferta i Cennik"
      description="Nie buduję „skryptów”. Buduję cyfrowe aktywa Twojej firmy. Łączę szybkość narzędzi no-code z „pancerną” architekturą bankową i gwarancją zwrotu z inwestycji."
      breadcrumbs={[{ name: "Oferta" }]}
      badge={{ text: "Katalog Rozwiązań", icon: LayoutGrid }}
    >
      <div id="katalog-uslug" className="scroll-mt-20">
        <Services compact={false} showTeaserButton={false} hideHeader={true} />
      </div>
    </StandardLayout>
  )
}
