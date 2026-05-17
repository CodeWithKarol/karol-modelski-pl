import Link from "next/link"
import { TOOLS } from "@/lib/tools"
import { OFFERS } from "@/lib/offers"
import { KNOWLEDGE_PAGES } from "@/lib/knowledge"

export default function SitemapPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Mapa strony</h1>
      <p className="mt-4 text-lg text-muted-foreground">Znajdź interesujące Cię informacje o automatyzacji procesów biznesowych.</p>

      <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Strony główne</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li><Link href="/" className="hover:text-amber-600 transition-colors">Strona główna</Link></li>
            <li><Link href="/wspolpraca" className="hover:text-amber-600 transition-colors">Współpraca</Link></li>
            <li><Link href="/mapa-strony" className="hover:text-amber-600 transition-colors">Mapa strony</Link></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Oferta</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            {Object.entries(OFFERS).map(([href, data]) => (
              <li key={href}>
                <Link href={href} className="hover:text-amber-600 transition-colors">{data.hero.title}</Link>
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
            {Object.entries(KNOWLEDGE_PAGES).map(([href, data]) => (
              <li key={href}>
                <Link href={href} className="hover:text-amber-600 transition-colors">{data.metadata.breadcrumbLabel}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
