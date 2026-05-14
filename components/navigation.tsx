import Link from "next/link"
import { MobileMenu } from "./mobile-menu"

const navLinks = [
  { href: "/#oferta-klastry", label: "Oferta" },
  { href: "/wspolpraca", label: "Współpraca" },
  { href: "/#o-mnie", label: "O mnie" },
  { href: "/#faq", label: "FAQ" },
]

export function Navigation() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logotyp */}
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
          aria-label="Strona główna – Karol Modelski"
        >
          Karol Modelski
        </Link>

        {/* Nawigacja desktop */}
        <nav aria-label="Nawigacja główna" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-2">
          <a
            href="https://calendly.com/kontakt-karol-modelski/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 md:flex"
          >
            Bezpłatna Diagnoza
          </a>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
