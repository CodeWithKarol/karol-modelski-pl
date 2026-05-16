"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

import { TOOLS } from "@/lib/tools"

const navLinks = [
  { href: "/wspolpraca", label: "Współpraca" },
  { href: "/narzedzia", label: "Narzędzia" },
  { href: "#o-mnie", label: "O mnie" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-muted lg:hidden"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-border bg-background px-4 py-4 shadow-md lg:hidden">
          <nav aria-label="Nawigacja mobilna">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 border-t border-border pt-2">
                <span className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Automatyzacje</span>
                <ul className="flex flex-col gap-1 mt-1">
                  {TOOLS.map((tool) => (
                    <li key={tool.metadata.href}>
                      <Link
                        href={tool.metadata.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-6 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
                      >
                        {tool.metadata.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <div className="mt-4 border-t border-border pt-4">
              <a
                href="https://calendly.com/kontakt-karol-modelski/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Bezpłatna Diagnoza
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
