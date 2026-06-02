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
import { NAV_LINKS, CTA_CONFIG } from "@/lib/nav-config"
import { useState } from "react"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Otwórz menu"
          className="flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-muted lg:hidden"
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
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/narzedzia"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-muted"
              >
                Automatyzacje
              </Link>
            </li>
          </ul>
        </nav>

        <div className="border-t border-border pt-6">
          <a
            href={CTA_CONFIG.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex w-full flex-col items-center justify-center rounded-xl bg-foreground px-4 py-4 text-base font-semibold text-background transition-colors hover:bg-foreground/90"
          >
            <span>{CTA_CONFIG.label}</span>
            <span className="text-[10px] opacity-80 font-normal">{CTA_CONFIG.sublabel}</span>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}
