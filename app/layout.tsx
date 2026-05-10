import { Geist_Mono, Inter } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://karol-modelski.pl"),
  title: "Karol Modelski – Automatyzacja Procesów Biznesowych & AI | Warszawa",
  description: "Odzyskaj do 15h tygodniowo dzięki automatyzacji procesów biznesowych. Wdrażam systemy AI na własność, bez abonamentów i w standardzie bankowym. Sprawdź!",
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
        <ThemeProvider>
          <Navbar />
          <div className="pt-20">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
