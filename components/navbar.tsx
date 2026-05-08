"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight, ChevronDown, Sparkles, LayoutDashboard, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const services = [
  { 
    name: "Automatyzacja AI", 
    href: "/uslugi/automatyzacja-ai", 
    description: "Inteligentne moduły AI",
    icon: Sparkles 
  },
  { 
    name: "Systemy na wymiar", 
    href: "/uslugi/systemy-na-wymiar", 
    description: "Dedykowane oprogramowanie",
    icon: LayoutDashboard 
  },
  { 
    name: "Łączenie aplikacji", 
    href: "/uslugi/laczenie-aplikacji", 
    description: "Integracje i workflow",
    icon: Share2 
  },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [desktopMenuOpen, setDesktopMenuOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border h-20 flex items-center">
      <nav className="mx-auto flex max-w-7xl w-full items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">

            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-foreground">Karol Modelski</span>
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Otwórz menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8 items-center">
            {/* Rozwijana Oferta - Priorytety Biznesowe */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setDesktopMenuOpen(true)}
              onMouseLeave={() => setDesktopMenuOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-x-1 text-sm font-semibold leading-6 transition-colors hover:text-primary outline-none",
                  pathname.startsWith("/uslugi") ? "text-primary" : "text-foreground"
                )}
              >
                Oferta
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", desktopMenuOpen && "rotate-180")} />
              </button>

              {desktopMenuOpen && (
                <div className="absolute left-1/2 z-10 mt-0 w-screen max-w-md -translate-x-1/2 px-4 pt-4">
                  <div className="overflow-hidden rounded-3xl bg-background shadow-2xl ring-1 ring-border border border-border">
                    <div className="p-4">
                      {services.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-2xl p-4 text-sm leading-6 hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                            <item.icon className="h-6 w-6 text-foreground group-hover:text-primary" aria-hidden="true" />
                          </div>
                          <div className="flex-auto">
                            <Link href={item.href} className="block font-bold text-foreground">
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-muted/50 p-4 border-t border-border">
                      <Link href="/uslugi" className="flex items-center justify-center gap-x-2.5 text-sm font-bold leading-6 text-foreground hover:text-primary transition-colors">
                        Zobacz pełny katalog usług <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/o-mnie"
              className={cn(
                "text-sm font-semibold leading-6 transition-colors hover:text-primary",
                pathname === "/o-mnie" ? "text-primary" : "text-foreground"
              )}
            >
              O mnie
            </Link>
            <Link
              href="/faq"
              className={cn(
                "text-sm font-semibold leading-6 transition-colors hover:text-primary",
                pathname === "/faq" ? "text-primary" : "text-foreground"
              )}
            >
              FAQ
            </Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button asChild size="sm" className="rounded-full shadow-lg shadow-primary/20">
              <Link href="/#kontakt">
                Bezpłatna konsultacja <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </nav>
      </header>
      
      {/* Mobile menu - Shortcuts Only */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm border-l border-border shadow-xl">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-xl font-bold text-foreground">Karol Modelski</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Zamknij menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6 text-center sm:text-left">
                  <p className="px-3 text-xs font-bold text-primary uppercase tracking-widest mb-4">Usługi priorytetowe</p>
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-3 text-base font-bold leading-7 text-foreground hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="h-px bg-border my-4" />
                  <Link
                    href="/o-mnie"
                    className={cn(
                      "block rounded-lg px-3 py-3 text-base font-semibold leading-7 hover:bg-muted",
                      pathname === "/o-mnie" ? "text-primary bg-primary/5" : "text-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    O mnie
                  </Link>
                  <Link
                    href="/faq"
                    className={cn(
                      "block rounded-lg px-3 py-3 text-base font-semibold leading-7 hover:bg-muted",
                      pathname === "/faq" ? "text-primary bg-primary/5" : "text-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                </div>
                <div className="py-6">
                  <Button asChild className="w-full rounded-full shadow-lg shadow-primary/20 h-12">
                    <Link href="/#kontakt" onClick={() => setMobileMenuOpen(false)}>
                      Bezpłatna konsultacja
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
