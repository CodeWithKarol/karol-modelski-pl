import { CheckCircle2, MapPin, Landmark, ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const trustPoints = [
  {
    icon: Landmark,
    text: "Architekt systemów dla sektora bankowego i korporacji międzynarodowych",
  },
  {
    icon: ShieldCheck,
    text: "Pracuję pod własnym imieniem i nazwiskiem — osobista gwarancja odpowiedzialności",
  },
  {
    icon: MapPin,
    text: "Warszawa · współpraca hybrydowa i zdalna z firmami w całej Polsce",
  },
]

const metrics = [
  { value: "7+", label: "lat doświadczenia" },
  { value: "100%", label: "własna odpowiedzialność" },
  { value: "24h", label: "czas reakcji" },
]

export function AboutTrust() {
  return (
    <section
      id="o-mnie"
      aria-labelledby="about-trust-heading"
      className="relative overflow-hidden bg-background py-12 sm:py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-48 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-amber-400/5 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-400/5 blur-3xl" />
        {/* Hairline grid — matching hero */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left: copy */}
          <div className="flex flex-col gap-8">
            {/* Eyebrow */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-3 py-1 dark:bg-amber-950/40">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
              <span className="font-mono text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
                O mnie
              </span>
            </div>

            {/* H2 */}
            <h2
              id="about-trust-heading"
              className="text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl text-balance"
            >
              Bezpieczeństwo i precyzja{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">systemów bankowych</span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-0 z-0 h-3 w-full -skew-x-2 bg-amber-400/25"
                />
              </span>{" "}
              w Twojej firmie
            </h2>

            {/* Body copy */}
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Nazywam się <strong className="font-semibold text-foreground">Karol Modelski</strong>.
                Jako profesjonalny programista i architekt systemów, przez lata projektowałem
                zaawansowane rozwiązania dla międzynarodowych korporacji oraz sektora bankowego.
                Doskonale wiem, jak budować stabilną, bezpieczną i gotową na rozwój architekturę
                danych.
              </p>
              <p>
                W biznesie nie ma miejsca na improwizację. Pracuję pod własnym imieniem
                i nazwiskiem, co jest dla Ciebie osobistą gwarancją odpowiedzialności za
                bezbłędne działanie każdego wdrożonego procesu. Stacjonuję w Warszawie,
                współpracując z firmami w modelu hybrydowym oraz zdalnym.
              </p>
            </div>

            {/* Trust points */}
            <ul className="flex flex-col gap-4" role="list">
              {trustPoints.map((point) => (
                <li key={point.text} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/40">
                    <CheckCircle2
                      className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-sm leading-relaxed text-foreground">{point.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: expert card */}
          <div className="relative lg:pl-4">
            <Card className="overflow-hidden border-border/60 bg-card">
              {/* Card header bar — amber accent */}
              <div className="flex items-center gap-1.5 border-b border-border/60 bg-muted/60 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-amber-400/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                <span className="ml-3 font-mono text-xs text-muted-foreground/60">
                  karol-modelski.pl · architekt
                </span>
              </div>

              <CardContent className="flex flex-col gap-6 p-4 sm:gap-8 sm:p-8">
                {/* Avatar + identity */}
                <div className="flex items-center gap-5">
                  {/* Avatar placeholder */}
                  <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-950/60 dark:to-amber-900/40">
                    <span className="font-mono text-2xl font-bold text-amber-700 dark:text-amber-300 select-none">
                      KM
                    </span>
                    {/* Online dot */}
                    <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-background">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </span>
                  </div>

                  <div>
                    <p className="text-lg font-bold text-foreground">Karol Modelski</p>
                    <p className="text-sm text-muted-foreground">
                      Systems Architect & Developer
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />
                      <span>Warszawa, PL</span>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 divide-x divide-border/60 rounded-xl border border-border/60 bg-muted/30">
                  {metrics.map((m) => (
                    <div key={m.label} className="flex flex-col items-center gap-1 px-2 py-4 sm:px-4 sm:py-5">
                      <span className="font-mono text-2xl font-bold text-foreground">
                        {m.value}
                      </span>
                      <span className="text-center text-xs leading-tight text-muted-foreground">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Sector badge */}
                <div className="flex items-center gap-3 rounded-xl border border-amber-200/60 bg-amber-50/60 p-4 dark:border-amber-800/30 dark:bg-amber-950/20">
                  <Landmark
                    className="h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-snug text-foreground">
                    <strong className="font-semibold">Doświadczenie bankowe</strong> –
                    standardy bezpieczeństwa i niezawodności przeniesione na grunt
                    automatyzacji biznesowej.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
