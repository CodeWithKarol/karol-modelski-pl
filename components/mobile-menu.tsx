"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet"
import { NAV_LINKS, SOLUTIONS, KNOWLEDGE_AND_TOOLS, CTA_CONFIG } from "@/lib/nav-config"
import { useState } from "react"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Otwórz menu"
          className="flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-muted md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="top" className="h-full w-full flex flex-col p-4">
        <SheetHeader className="hidden">
          <SheetTitle>Nawigacja mobilna</SheetTitle>
          <SheetDescription>Menu nawigacyjne serwisu</SheetDescription>
        </SheetHeader>
        
        <nav aria-label="Nawigacja mobilna" className="flex-1 overflow-y-auto py-4">
          <ul className="flex flex-col gap-2">
            <li>
              <div className="px-4 py-2 font-bold text-foreground">Rozwiązania</div>
              <ul className="ml-4 flex flex-col gap-1 border-l border-border pl-2">
                {SOLUTIONS.map((solution) => (
                  <li key={solution.href}>
                    <Link
                      href={solution.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-4 py-2 text-base text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {solution.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="px-4 py-2 font-bold text-foreground">Wiedza i Narzędzia</div>
              <ul className="ml-4 flex flex-col gap-1 border-l border-border pl-2">
                {KNOWLEDGE_AND_TOOLS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-4 py-2 text-base text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => {
                    setOpen(false)
                    if (link.href === "/#o-mnie" && typeof window !== 'undefined' && window.location.pathname === '/') {
                      e.preventDefault();
                      const element = document.getElementById('o-mnie');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block rounded-lg px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-border pt-6">
          <a
            href={CTA_CONFIG.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center rounded-full bg-foreground px-5 py-4 text-base font-bold text-background transition-all hover:bg-foreground/90"
          >
            {CTA_CONFIG.label}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}
