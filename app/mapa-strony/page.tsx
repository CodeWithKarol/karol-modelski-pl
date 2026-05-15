import Link from "next/link"

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
          <h2 className="text-xl font-semibold text-foreground">Oferta i narzędzia</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li><Link href="/automatyzacja-sprzedazy" className="hover:text-amber-600 transition-colors">Automatyzacja Sprzedaży</Link></li>
            <li><Link href="/automatyzacja-marketingu" className="hover:text-amber-600 transition-colors">Automatyzacja Marketingu</Link></li>
            <li><Link href="/automatyzacja-zarzadzania-projektami" className="hover:text-amber-600 transition-colors">Automatyzacja Zarządzania Projektami</Link></li>
            <li><Link href="/automatyzacja-administracji-i-finansow" className="hover:text-amber-600 transition-colors">Automatyzacja Administracji i Finansów</Link></li>
            <li><Link href="/automatyzacja-procesow-z-ai" className="hover:text-amber-600 transition-colors">Automatyzacja Procesów z AI</Link></li>
            <li><Link href="/automatyzacja-obslugi-klienta" className="hover:text-amber-600 transition-colors">Automatyzacja Obsługi Klienta</Link></li>
            <li><Link href="/integracja-pipedrive" className="hover:text-amber-600 transition-colors">Integracja Pipedrive</Link></li>
            <li><Link href="/integracja-clickup" className="hover:text-amber-600 transition-colors">Integracja ClickUp</Link></li>
            <li><Link href="/automatyzacja-google-sheets" className="hover:text-amber-600 transition-colors">Automatyzacja Google Sheets</Link></li>
            <li><Link href="/integracja-hubspot" className="hover:text-amber-600 transition-colors">Integracja HubSpot</Link></li>
            <li><Link href="/integracja-slack" className="hover:text-amber-600 transition-colors">Integracja Slack</Link></li>
            <li><Link href="/automatyzacja-finansow" className="hover:text-amber-600 transition-colors">Automatyzacja Finansów (Stripe)</Link></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Baza wiedzy</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li><Link href="/baza-wiedzy/co-to-jest-n8n" className="hover:text-amber-600 transition-colors">Co to jest n8n?</Link></li>
            <li><Link href="/baza-wiedzy/co-to-jest-webhook" className="hover:text-amber-600 transition-colors">Co to jest Webhook?</Link></li>
            <li><Link href="/baza-wiedzy/api-w-biznesie" className="hover:text-amber-600 transition-colors">API w biznesie</Link></li>
            <li><Link href="/baza-wiedzy/automatyzacja-marketingu-n8n-vs-saas" className="hover:text-amber-600 transition-colors">n8n vs SaaS (Marketing)</Link></li>
          </ul>
        </section>
      </div>
    </main>
  )
}
