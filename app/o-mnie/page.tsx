import { About } from "@/components/sections/about"
import { StandardLayout } from "@/components/standard-layout"
import { UserCircle } from "lucide-react"

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
