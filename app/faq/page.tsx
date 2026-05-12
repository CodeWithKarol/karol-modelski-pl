import { FAQ, faqCategories } from "@/components/sections/faq"
import { StandardLayout } from "@/components/standard-layout"
import { HelpCircle, ArrowRight } from "lucide-react"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Często zadawane pytania (FAQ) | Automatyzacja procesów | Karol Modelski",
  description: "Masz pytania o automatyzację procesów biznesowych i systemy na własność bez abonamentu? Sprawdź odpowiedzi na kluczowe pytania i odzyskaj czas.",
}

export default function FAQPage() {
  // Generate JSON-LD Schema for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(cat => 
      cat.items.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    )
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <StandardLayout
        title="Wszystko, co musisz wiedzieć o automatyzacji procesów w Twojej firmie."
        description="Masz pytania dotyczące wdrożenia sztucznej inteligencji, bezpieczeństwa danych lub budowy systemów na własność? Poniżej znajdziesz przejrzyste odpowiedzi na kwestie techniczne i biznesowe."
        breadcrumbs={[{ name: "FAQ" }]}
        badge={{ text: "Pomoc i Odpowiedzi", icon: HelpCircle }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero CTA */}
          <div className="mt-8 flex justify-center mb-24">
            <Button size="lg" className="rounded-full px-8 h-12 text-base font-bold shadow-lg shadow-primary/20 w-full sm:w-auto" asChild>
              <a href="#kontakt">
                Nie ma tu Twojego pytania? Zapytaj mnie bezpośrednio <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <FAQ hideHeader />

          {/* Special spacing before footer contact */}
          <div className="py-24 border-t border-border mt-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Masz unikalne wyzwanie operacyjne, którego nie opisano powyżej?
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Każda firma ma swoją własną specyfikację. Porozmawiajmy bezpośrednio o procesach, które spowalniają Twój zespół. Przeanalizuję architekturę problemu i wrócę z bezpłatną propozycją rozwiązania.
              </p>
            </div>
          </div>
        </div>
      </StandardLayout>
    </>
  )
}
