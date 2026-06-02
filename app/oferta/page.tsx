import { OFFERS_HUB_CONFIG } from "@/lib/offers-hub"
import Link from "next/link"
import { FAQ } from "@/components/ui/faq"
import type { Metadata } from "next"
import { GenericHero } from "@/components/sections/generic-hero"
import { GenericCta } from "@/components/sections/generic-cta"

export const metadata: Metadata = {
  title: "Usługi automatyzacji procesów biznesowych",
  description:
    "Skaluj swój biznes bez wzrostu kosztów. Automatyzuję procesy sprzedaży i finansów, odciążając Twój zespół od nudnej pracy. Sprawdź, jak zyskać czas – bezpłatna diagnoza!",
  alternates: {
    canonical: "https://karol-modelski.pl/oferta",
  },
}

export default function OffersHubPage() {
  const faqs = OFFERS_HUB_CONFIG.faq.items.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }))

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <GenericHero 
        subtitle={OFFERS_HUB_CONFIG.hero.headline}
        description={OFFERS_HUB_CONFIG.hero.description}
        ctaText={OFFERS_HUB_CONFIG.hero.cta.label}
        ctaHref={OFFERS_HUB_CONFIG.hero.cta.href}
        breadcrumbItems={[{ label: "Oferta", href: "/oferta" }]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Intro SEO Section */}
        <div className="mb-20 bg-muted/30 p-8 rounded-2xl border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">{OFFERS_HUB_CONFIG.introduction.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{OFFERS_HUB_CONFIG.introduction.text}</p>
        </div>

        {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {OFFERS_HUB_CONFIG.serviceAreas.map((area) => (
              <Link
                key={area.title}
                href={area.href}
                className="flex flex-col gap-4 p-8 rounded-xl border border-border bg-background hover:border-primary/50 hover:bg-muted/30 hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer"
              >
                <h3 className="text-xl font-bold text-foreground">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{area.description}</p>
                <span className="inline-flex items-center text-sm font-semibold text-foreground hover:text-muted-foreground mt-2">
                  {area.cta} &rarr;
                </span>
              </Link>
            ))}
          </div>

        {/* FAQ Section */}
        <div className="mb-24">
          <FAQ 
            title={OFFERS_HUB_CONFIG.faq.title} 
            items={faqs} 
            className="max-w-3xl mx-auto"
          />
        </div>

        {/* Knowledge Base */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{OFFERS_HUB_CONFIG.knowledgeBase.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {OFFERS_HUB_CONFIG.knowledgeBase.articles.map((article) => (
              <Link key={article.href} href={article.href} className="p-6 rounded-xl border border-border hover:bg-muted/30 transition-colors text-center text-sm font-medium text-foreground">
                {article.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <GenericCta 
          headline={OFFERS_HUB_CONFIG.cta.headline}
          description={OFFERS_HUB_CONFIG.cta.description}
          ctaText={OFFERS_HUB_CONFIG.cta.label}
          ctaHref={OFFERS_HUB_CONFIG.cta.href}
        />

        {/* Local SEO */}
        <div className="text-center border-t border-border pt-12">
          <h3 className="text-xl font-bold text-foreground mb-4">{OFFERS_HUB_CONFIG.localSeo.title}</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">{OFFERS_HUB_CONFIG.localSeo.text}</p>
        </div>
      </div>
    </main>
  )
}
