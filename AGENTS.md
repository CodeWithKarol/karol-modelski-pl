# Agent Instructions - karol-modelski-pl

## Tech Stack
- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **shadcn/ui** (radix-nova style, Lucide icons)

## Essential Commands
- `npm run dev`: Start dev server with **Turbopack**.
- `npm run lint`: Run ESLint.
- `npm run typecheck`: Run TypeScript compiler check.
- `npm run format`: Run Prettier formatting.
- `npx shadcn@latest add [component]`: Add shadcn/ui components.

## Architecture & Conventions
- **Path Alias**: `@/` refers to the project root.
- **Components**: UI components are located in `components/ui/` and aliased as `@/components/ui`.
- **Global Styles**: Tailwind 4 is configured in `app/globals.css`.
- **Theme**: Uses `next-themes`. Press **'d'** globally to toggle dark mode (handled via `ThemeHotkey` in `components/theme-provider.tsx`).
- **Next.js 16 APIs**: Be aware of async APIs for `params` and `searchParams` in layouts/pages.

## Missing Infrastructure
- **Tests**: No test runner (Jest/Vitest/Playwright) is currently configured.
- **CI/CD**: No GitHub Actions or CI workflows exist yet.

## Tooling
- **MCPs**: Project is pre-configured for `next-devtools` and `shadcn` MCPs in `opencode.json`.
