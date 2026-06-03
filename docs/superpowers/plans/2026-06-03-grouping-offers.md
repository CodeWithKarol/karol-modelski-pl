# Grupowanie Ofert Implementation Plan

**Goal:** Zgrupowanie 7 ofert w 4 kategorie na stronie `/oferta` (Strategia i Audyt, Sprzedaż i Marketing, Operacje i Zarządzanie, Innowacje AI).

**Architecture:** Modyfikacja struktury `OFFERS_HUB_CONFIG.serviceAreas` w `lib/offers-hub.ts`, aby wspierała zagnieżdżoną strukturę kategorii. Zaktualizowanie komponentu w `app/oferta/page.tsx`, aby renderował listę pogrupowaną.

**Tech Stack:** Next.js, React, Tailwind CSS.

---

## Chunk 1: Aktualizacja lib/offers-hub.ts

- [ ] **Step 1: Zmień strukturę `serviceAreas` na tablicę grup z podgrupami (ofertami).**

```typescript
// Nowa struktura:
export const OFFERS_HUB_CONFIG = {
  // ...
  serviceAreas: [
    {
      groupTitle: "Strategia i Audyt",
      items: [
        { title: "Audyt i Strategia Automatyzacji", description: "...", cta: "...", href: "/oferta/audyt-i-strategia-automatyzacji" }
      ]
    },
    {
      groupTitle: "Sprzedaż i Marketing",
      items: [
        { title: "Automatyzacja Sprzedaży i CRM", ... },
        { title: "Automatyzacja Marketingu", ... }
      ]
    },
    {
      groupTitle: "Operacje i Zarządzanie",
      items: [
        { title: "Zarządzanie Projektami", ... },
        { title: "Automatyzacja Administracji i Finansów", ... },
        { title: "Automatyzacja Obsługi Klienta", ... }
      ]
    },
    {
      groupTitle: "Innowacje AI",
      items: [
        { title: "Inteligentna Automatyzacja z AI", ... }
      ]
    }
  ]
}
```

- [ ] **Step 2: Commit**

## Chunk 2: Aktualizacja komponentu app/oferta/page.tsx

- [ ] **Step 1: Zaktualizuj logikę renderowania w `OffersHubPage` dla nowej struktury `serviceAreas`.**

```tsx
{/* W miejsce starej pętli: */}
{OFFERS_HUB_CONFIG.serviceAreas.map((group) => (
  <section key={group.groupTitle} className="mb-12">
    <h2 className="text-2xl font-bold mb-6">{group.groupTitle}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {group.items.map((item) => (
        <Link key={item.title} href={item.href} className="...">
          {/* render card */}
        </Link>
      ))}
    </div>
  </section>
))}
```

- [ ] **Step 2: Weryfikacja: `npm run typecheck` oraz sprawdzenie strony w przeglądarce.**

- [ ] **Step 3: Commit**
