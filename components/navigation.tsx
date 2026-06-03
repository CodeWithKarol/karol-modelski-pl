'use client'

import Link from "next/link"
import { MobileMenu } from "./mobile-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { NAV_LINKS, SOLUTIONS, KNOWLEDGE_AND_TOOLS, CTA_CONFIG } from "@/lib/nav-config"

export function Navigation() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logotyp */}
        <Link
          href="/"
          className="text-base font-bold tracking-tight text-foreground"
          aria-label="Karol Modelski – Automatyzacja procesów biznesowych"
        >
          Karol Modelski
        </Link>

        {/* Nawigacja desktop */}
        <nav aria-label="Nawigacja główna" className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Rozwiązania</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4">
                    {SOLUTIONS.map((solution) => (
                      <li key={solution.href}>
                        <Link href={solution.href} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{solution.label}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Wiedza i Narzędzia</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 p-4">
                    {KNOWLEDGE_AND_TOOLS.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{link.label}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link 
                    href={link.href}
                    onClick={(e) => {
                      if (link.href === "/#o-mnie" && typeof window !== 'undefined' && window.location.pathname === '/') {
                        e.preventDefault();
                        const element = document.getElementById('o-mnie');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={navigationMenuTriggerStyle()}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-2">
          <a
            href={CTA_CONFIG.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition-all hover:bg-foreground/90 md:flex"
          >
            {CTA_CONFIG.label}
          </a>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
