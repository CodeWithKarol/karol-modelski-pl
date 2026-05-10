import { FAQ } from "@/components/sections/faq"
import { StandardLayout } from "@/components/standard-layout"
import { HelpCircle } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - Pytania o automatyzację procesów i AI",
  description: "Odpowiedzi na najczęstsze pytania o koszty, bezpieczeństwo i model własności cyfrowej automatyzacji. Wszystko, co musisz wiedzieć przed startem.",
}

export default function FAQPage() {
  return (
    <StandardLayout
      title="Najczęściej zadawane pytania"
      description="Masz wątpliwości? Tutaj znajdziesz odpowiedzi na kwestie, które najczęściej nurtują moich klientów przed rozpoczęciem współpracy."
      breadcrumbs={[{ name: "FAQ" }]}
      badge={{ text: "Pomoc i Odpowiedzi", icon: HelpCircle }}
    >
      <FAQ />
    </StandardLayout>
  )
}
