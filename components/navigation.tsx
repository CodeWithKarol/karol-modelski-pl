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
import { NAV_LINKS, CTA_CONFIG } from "@/lib/nav-config"
import { TOOLS } from "@/lib/tools"

export function Navigation() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logotyp */}
        <Link
          href="/"
          onClick={() => {
            if (typeof window !== 'undefined' && window.location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="text-base font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
          aria-label="Strona główna – Karol Modelski"
        >
          Karol Modelski
        </Link>

        {/* Nawigacja desktop */}
        <nav aria-label="Nawigacja główna" className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} className={navigationMenuTriggerStyle()}>
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Automatyzacje</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {TOOLS.map((tool) => (
                      <li key={tool.metadata.href}>
                        <Link href={tool.metadata.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{tool.metadata.name}</div>
                          <p className="line-clamp-1 text-sm leading-snug text-muted-foreground">{tool.metadata.description}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-2">
          <a
            href={CTA_CONFIG.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden flex-col items-center rounded-md bg-foreground px-4 py-1.5 text-sm font-semibold text-background transition-colors hover:bg-foreground/90 md:flex leading-tight"
          >
            <span>{CTA_CONFIG.label}</span>
            <span className="text-[10px] opacity-80 font-normal">{CTA_CONFIG.sublabel}</span>
          </a>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
