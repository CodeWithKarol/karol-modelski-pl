import { About } from "@/components/sections/about"
import { StandardLayout } from "@/components/standard-layout"
import { UserCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "O mnie - Karol Modelski | Ekspert Automatyzacji",
  description: "Dowiedz się więcej o mojej filozofii pracy. Standard bankowy (Citi, BNP Paribas) przeniesiony do świata automatyzacji dla małych i średnich firm.",
}

export default function AboutPage() {
  return (
    <StandardLayout
      title="Standard Bankowy w Twojej firmie"
      description="Budowałem systemy dla milionów użytkowników w Citi i BNP Paribas. Dziś tę 'pancerną' jakość przekazuję mniejszym firmom, wdrażając solidną automatyzację."
      breadcrumbs={[{ name: "O mnie" }]}
      badge={{ text: "Ekspert Automatyzacji", icon: UserCircle }}
    >
      <About />
    </StandardLayout>
  )
}
