import { Geist_Mono, Inter } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://karol-modelski.pl"),
  title: "Automatyzacja Procesów Biznesowych i AI | Karol Modelski",
  description: "Odzyskaj 15h tygodniowo dzięki inteligentnej automatyzacji procesów biznesowych i AI. Sprawdź systemy Karola Modelskiego o standardzie bankowym. Bez abonamentów.",
  verification: {
    google: "TfCJMM5KY6TTwBe-LufSiIOEBV827rpb1RDD59ghAE0",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
