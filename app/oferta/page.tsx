import { OFFERS_HUB_CONFIG } from "@/lib/offers-hub"
import Link from "next/link"
import { FAQ } from "@/components/ui/faq"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

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
      <section className="relative border-b border-border py-16 sm:py-24">
        {/* Subtle background glow */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-amber-400/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Oferta", href: "/oferta" }]} />
          <div className="text-center mt-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              {OFFERS_HUB_CONFIG.hero.headline}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              {OFFERS_HUB_CONFIG.hero.description}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Intro SEO Section */}
        <div className="mb-20 bg-muted/30 p-8 rounded-2xl border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">{OFFERS_HUB_CONFIG.introduction.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{OFFERS_HUB_CONFIG.introduction.text}</p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {OFFERS_HUB_CONFIG.serviceAreas.map((area) => (
            <div key={area.title} className="flex flex-col gap-4 p-8 rounded-xl border border-border bg-background hover:border-border/80 transition-colors">
              <h3 className="text-xl font-bold text-foreground">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{area.description}</p>
              <Link href={area.href} className="inline-flex items-center text-sm font-semibold text-foreground hover:text-muted-foreground mt-2">
                {area.cta} &rarr;
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{OFFERS_HUB_CONFIG.faq.title}</h2>
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqs} />
          </div>
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
        <div className="mb-24 text-center bg-background p-12 rounded-2xl border border-amber-400/20 shadow-xl shadow-amber-500/5">
          <h2 className="text-2xl font-bold text-foreground mb-4">{OFFERS_HUB_CONFIG.cta.headline}</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{OFFERS_HUB_CONFIG.cta.description}</p>
          <a href={OFFERS_HUB_CONFIG.cta.href} className="inline-flex items-center justify-center rounded-xl bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all hover:bg-foreground/85 hover:shadow-lg">
            {OFFERS_HUB_CONFIG.cta.label}
          </a>
        </div>

        {/* Local SEO */}
        <div className="text-center border-t border-border pt-12">
          <h3 className="text-xl font-bold text-foreground mb-4">{OFFERS_HUB_CONFIG.localSeo.title}</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">{OFFERS_HUB_CONFIG.localSeo.text}</p>
        </div>
      </div>
    </main>
  )
}
