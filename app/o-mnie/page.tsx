import { About } from "@/components/sections/about"
import { StandardLayout } from "@/components/standard-layout"
import { UserCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "O mnie | Karol Modelski - Architekt systemów & Automatyzacja",
  description: "Poznaj moje podejście do automatyzacji procesów biznesowych. Standardy bankowe (Citi, BNP Paribas) przeniesione do Twojej firmy. Warszawa stacjonarnie.",
}

export default function AboutPage() {
  return (
    <StandardLayout
      title="Architekt systemów, który pracuje dla Twojego zysku"
      description="Przenoszę najwyższe standardy projektowania systemów z sektora finansowego wprost do Twojego biznesu. Poznaj moją historię i zobacz, jak możemy zabezpieczyć Twój rozwój."
      breadcrumbs={[{ name: "O mnie" }]}
      badge={{ text: "O mnie", icon: UserCircle }}
    >
      <About />
    </StandardLayout>
  )
}
