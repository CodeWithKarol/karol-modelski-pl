import Link from "next/link"
import { TOOLS } from "@/lib/tools"
import { OFFERS } from "@/lib/offers"
import { KNOWLEDGE_CONTENT } from "@/lib/knowledge"

export default function SitemapPage() {
  const articles = Object.values(KNOWLEDGE_CONTENT)
  const offers = Object.values(OFFERS)

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Mapa strony</h1>
      <p className="mt-4 text-lg text-muted-foreground">Znajdź interesujące Cię informacje o automatyzacji procesów biznesowych.</p>

      <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Strony główne</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li><Link href="/" className="hover:text-amber-600 transition-colors">Strona główna</Link></li>
            <li><Link href="/oferta" className="hover:text-amber-600 transition-colors">Oferta</Link></li>
            <li><Link href="/narzedzia" className="hover:text-amber-600 transition-colors">Automatyzacje</Link></li>
            <li><Link href="/baza-wiedzy" className="hover:text-amber-600 transition-colors">Baza wiedzy</Link></li>
            <li><Link href="/mapa-strony" className="hover:text-amber-600 transition-colors">Mapa strony</Link></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Oferta</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            {offers.map((offer) => (
              <li key={offer.offer_url}>
                <Link href={offer.offer_url} className="hover:text-amber-600 transition-colors">{offer.offer_name}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Narzędzia</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            {TOOLS.map((tool) => (
              <li key={tool.metadata.name}>
                <Link href={tool.metadata.href} className="hover:text-amber-600 transition-colors">{tool.metadata.name}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Baza wiedzy</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li><Link href="/baza-wiedzy" className="hover:text-amber-600 transition-colors">Przegląd bazy wiedzy</Link></li>
            {articles.map((article) => (
              <li key={article.article_url}>
                <Link href={article.article_url} className="hover:text-amber-600 transition-colors">{article.hero_section.h1}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
