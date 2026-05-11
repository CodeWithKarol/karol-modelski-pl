"use client"

import { useState, useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  CheckCircle2, 
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Calendar,
  MessageSquare
} from "lucide-react"
import Script from "next/script"
import { LeadMagnetModal } from "@/components/lead-magnet-modal"
import { cn } from "@/lib/utils"

// Define interface for Calendly on window
interface CalendlyWindow extends Window {
  Calendly?: {
    initInlineWidget: (options: {
      url: string;
      parentElement: HTMLElement;
      prefill?: Record<string, string>;
      utm?: Record<string, string>;
    }) => void;
  };
}

declare const window: CalendlyWindow;

// Schema for Contact Form (Option B)
const contactSchema = z.object({
  name: z.string().min(2, "Imię i nazwisko są wymagane"),
  email: z.string().email("Proszę podać poprawny adres e-mail").min(1, "E-mail jest wymagany"),
  phone: z.string().optional(),
  challenge: z.string().min(10, "Opisz krótko problem, który chcesz rozwiązać").min(1, "Wiadomość jest wymagany"),
  b_name_42: z.string().optional(),
})

type ContactValues = z.infer<typeof contactSchema>

export function Contact() {
  const [activeTab, setActiveTab] = useState("calendly")
  const [step, setStep] = useState(1) // 1: Form/Widget, 2: Success
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCalendlyReady, setIsCalendlyReady] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const calendlyRef = useRef<HTMLDivElement>(null)

  const contactForm = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", challenge: "" },
  })

  useEffect(() => {
    if (activeTab === "calendly" && isCalendlyReady) {
      // Small timeout to ensure TabsContent has finished rendering the DOM node
      const timer = setTimeout(() => {
        if (calendlyRef.current && window.Calendly) {
          calendlyRef.current.innerHTML = '';
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/kontakt-karol-modelski/30min?hide_landing_page_details=1&hide_gdpr_banner=1',
            parentElement: calendlyRef.current,
            utm: {}
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [activeTab, isCalendlyReady]);


  const onContactSubmit = async (data: ContactValues) => {
    setIsSubmitting(true)
    setError(null)
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      setStep(2)
    } catch {
      setError("Coś poszło nie tak. Spróbuj ponownie.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setStep(1)
    contactForm.reset()
  }

  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-background scroll-mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Left Column: Content */}
          <div className="flex flex-col">
            <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-wider">
              Kontakt
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Zróbmy pierwszy krok do automatyzacji Twojej firmy
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Wybierz preferowaną formę kontaktu. Porozmawiajmy o tym, jak technologia może zacząć pracować na Twój zysk.
            </p>

            <div className="mt-12 space-y-8">
              <button 
                onClick={() => { setActiveTab("calendly"); setStep(1); }}
                className={cn(
                  "flex text-left gap-4 p-4 rounded-2xl border transition-all w-full group",
                  activeTab === "calendly" ? "bg-primary/5 border-primary/30 shadow-sm" : "border-transparent hover:bg-muted/50"
                )}
              >
                <div className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors",
                  activeTab === "calendly" ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                )}>
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Opcja A: Dla zdecydowanych</h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Zarezerwuj 15-minutową bezpłatną konsultację w moim kalendarzu.
                  </p>
                </div>
              </button>

              <button 
                onClick={() => { setActiveTab("form"); setStep(1); }}
                className={cn(
                  "flex text-left gap-4 p-4 rounded-2xl border transition-all w-full group",
                  activeTab === "form" ? "bg-primary/5 border-primary/30 shadow-sm" : "border-transparent hover:bg-muted/50"
                )}
              >
                <div className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors",
                  activeTab === "form" ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                )}>
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Opcja B: Masz konkretne wyzwanie?</h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Wolisz napisać? Opisz krótko wyzwanie operacyjne, z którym aktualnie się mierzysz.
                  </p>
                </div>
              </button>
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <h4 className="font-bold text-foreground flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" /> Moja obietnica:
              </h4>
              <p className="mt-2 text-sm text-muted-foreground italic leading-relaxed">
                Przeanalizuję Twoje zapytanie i wrócę do Ciebie z konkretną propozycją rozwiązania, nie tylko suchą ofertą.
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Interaction Area */}
          <div className="flex flex-col min-h-[500px]">
            <Card className="border-border shadow-xl overflow-hidden h-full flex flex-col">
              <Tabs value={activeTab} onValueChange={(v) => { setActiveTab(v); setStep(1); }} className="w-full flex flex-col h-full">
                <TabsList className="grid w-full grid-cols-2 rounded-none h-14 bg-muted/30">
                  <TabsTrigger value="calendly" className="data-[state=active]:bg-background data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none h-full text-xs sm:text-sm">
                    1. Kalendarz
                  </TabsTrigger>
                  <TabsTrigger value="form" className="data-[state=active]:bg-background data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none h-full text-xs sm:text-sm">
                    2. Formularz
                  </TabsTrigger>
                </TabsList>

                <CardContent className="p-0 flex-grow flex flex-col">
                  {step === 1 ? (
                    <div className="flex-grow flex flex-col h-full">
                      <TabsContent value="calendly" className="mt-0 flex-grow relative overflow-hidden min-h-[700px]">
                        <div ref={calendlyRef} className="w-full h-full" style={{ minWidth: '320px', height: '700px' }} />
                      </TabsContent>


                      <TabsContent value="form" className="mt-0 p-4 sm:p-8 space-y-6">
                        <div>
                          <h3 className="text-xl font-bold">Opisz swoje wyzwanie</h3>
                          <p className="text-sm text-muted-foreground mt-1">Przeanalizuję je i wrócę do Ciebie z konkretną propozycją.</p>
                        </div>
                        
                        <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="name" className={contactForm.formState.errors.name ? "text-destructive" : ""}>
                                Imię i Nazwisko
                              </Label>
                              <Input id="name" {...contactForm.register("name")} placeholder="Jan Kowalski" />
                              <div className="min-h-[1.25rem]">
                                {contactForm.formState.errors.name && <p className="text-xs text-destructive">{contactForm.formState.errors.name.message}</p>}
                              </div>
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="email" className={contactForm.formState.errors.email ? "text-destructive" : ""}>
                                E-mail służbowy
                              </Label>
                              <Input id="email" type="email" {...contactForm.register("email")} placeholder="jan@firma.pl" />
                              <div className="min-h-[1.25rem]">
                                {contactForm.formState.errors.email && <p className="text-xs text-destructive">{contactForm.formState.errors.email.message}</p>}
                              </div>
                            </div>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="phone">
                              Telefon (opcjonalnie)
                            </Label>
                            <Input id="phone" {...contactForm.register("phone")} placeholder="+48 123 456 789" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="challenge" className={contactForm.formState.errors.challenge ? "text-destructive" : ""}>
                              Opisz problem, który chcesz rozwiązać w swojej firmie...
                            </Label>
                            <Textarea id="challenge" {...contactForm.register("challenge")} placeholder="np. Nasz proces ofertowania zajmuje zbyt dużo czasu, bo dane są w 3 różnych systemach..." className="min-h-[120px] resize-none" />
                            <div className="min-h-[1.25rem]">
                              {contactForm.formState.errors.challenge && <p className="text-xs text-destructive">{contactForm.formState.errors.challenge.message}</p>}
                            </div>
                          </div>
                          <Button type="submit" size="lg" className="w-full rounded-full font-bold h-12 shadow-lg shadow-primary/20" disabled={isSubmitting}>
                            {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"} <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                          {error && <p className="text-sm text-destructive text-center mt-2">{error}</p>}
                        </form>
                      </TabsContent>
                    </div>
                  ) : (
                    <div className="p-8 text-center flex flex-col items-center justify-center h-full min-h-[500px] space-y-6">
                      <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-10 w-10 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Wiadomość wysłana!</h3>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                          Dziękuję za kontakt. Przeanalizuję Twoje wyzwanie i wrócę do Ciebie z konkretną propozycją rozwiązania w ciągu 24h.
                        </p>
                      </div>
                      <Button variant="outline" className="rounded-full" onClick={resetForm}>
                        Wyślij kolejną wiadomość
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Tabs>
            </Card>
          </div>

        </div>
      </div>
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="afterInteractive"
        onReady={() => setIsCalendlyReady(true)}
      />
    </section>
  )
}
