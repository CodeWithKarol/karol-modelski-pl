import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/sections/footer"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://karol-modelski.pl"),
  title: {
    default: "Karol Modelski – Automatyzacja procesów biznesowych z n8n | Warszawa",
    template: "%s | Karol Modelski",
  },
  description:
    "Wdrażam proste integracje n8n i Google Gemini, które eliminują ręczną pracę Twojego zespołu. Pierwsze wdrożenie w 48 godzin.",
  alternates: {
    canonical: "https://karol-modelski.pl",
  },
}

const jsonLdProfessionalService = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  name: "Karol Modelski – Automatyzacja procesów biznesowych",
  description:
    "Wdrożenia automatyzacji procesów biznesowych z n8n i Google Gemini dla małych i średnich firm. Eliminuję rutynowe zadania, oszczędzam czas i redukuję koszty operacyjne.",
  url: "https://karol-modelski.pl",
  email: "kontakt@karol-modelski.pl",
  telephone: null,
  founder: {
    "@type": "Person",
    name: "Karol Modelski",
    jobTitle: "Systems Architect & Automation Engineer",
    url: "https://karol-modelski.pl",
    sameAs: ["https://www.linkedin.com/in/karol-modelski"],
  },
  areaServed: [
    { "@type": "City", name: "Warszawa" },
    { "@type": "Country", name: "Polska" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Warszawa",
    addressRegion: "Mazowieckie",
    addressCountry: "PL",
  },
  sameAs: ["https://www.linkedin.com/in/karol-modelski"],
  knowsAbout: ["n8n", "automatyzacja procesów biznesowych", "Google Gemini", "integracje API", "CRM automation"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pl"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={cn("antialiased", fontMono.variable, inter.variable)}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfessionalService) }}
        />
        <ThemeProvider>
          {/* Skip to content — accessibility + SEO */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Przejdź do treści
          </a>
          <Navigation />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
