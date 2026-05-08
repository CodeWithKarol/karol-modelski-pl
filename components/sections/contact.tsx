"use client"

import { useState, useEffect } from "react"
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
  Download,
  Search
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

// Schema for Diagnosis (Flow A)
const diagnosisSchema = z.object({
  email: z.string().email("Proszę podać poprawny adres e-mail").min(1, "E-mail jest wymagany"),
  b_name_42: z.string().optional(),
})

// Schema for Audit (Flow B)
const auditSchema = z.object({
  email: z.string().email("Proszę podać poprawny adres e-mail").min(1, "E-mail jest wymagany"),
  company: z.string().min(2, "Nazwa firmy jest wymagana"),
  size: z.string().min(1, "Proszę wybrać wielkość firmy"),
  challenge: z.string().min(10, "Opisz krótko proces, który chcesz zautomatyzować").min(1, "Wiadomość jest wymagana"),
  b_name_42: z.string().optional(),
})

type DiagnosisValues = z.infer<typeof diagnosisSchema>
type AuditValues = z.infer<typeof auditSchema>

export function Contact() {
  const [activeTab, setActiveTab] = useState("diagnosis")
  const [step, setStep] = useState(1) // 1: Form, 2: Success/Calendly
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCalendlyReady, setIsCalendlyReady] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const diagnosisForm = useForm<DiagnosisValues>({
    resolver: zodResolver(diagnosisSchema),
    defaultValues: { email: "" },
  })

  const auditForm = useForm<AuditValues>({
    resolver: zodResolver(auditSchema),
    defaultValues: { email: "", company: "", size: "", challenge: "" },
  })

  useEffect(() => {
    if (step === 2 && activeTab === "diagnosis" && isCalendlyReady) {
      const node = document.getElementById('calendly-container-node');
      if (node && window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/kontakt-karol-modelski/30min?hide_landing_page_details=1&hide_gdpr_banner=1',
          parentElement: node,
          prefill: { email: diagnosisForm.getValues().email },
          utm: {}
        });
      }
    }
  }, [step, activeTab, isCalendlyReady, diagnosisForm]);

  const onDiagnosisSubmit = async (data: DiagnosisValues) => {
    setIsSubmitting(true)
    setError(null)
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "diagnosis" }),
      })
      setStep(2)
    } catch {
      setError("Coś poszło nie tak. Spróbuj ponownie.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const onAuditSubmit = async (data: AuditValues) => {
    setIsSubmitting(true)
    setError(null)
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "audit" }),
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
    diagnosisForm.reset()
    auditForm.reset()
  }

  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-background scroll-mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Left Column: Trust Ladder */}
          <div className="flex flex-col">
            <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-wider">
              Twoja droga do odzyskania czasu
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Przestań zgadywać. Zacznijmy od konkretów.
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Jako architekt systemów, nie sprzedaję obietnic – dostarczam mierzalny zysk. Wybierz ścieżkę, która najlepiej odpowiada Twoim obecnym potrzebom:
            </p>

            <div className="mt-12 space-y-8">
              <button 
                onClick={() => { setActiveTab("diagnosis"); setStep(1); }}
                className={cn(
                  "flex text-left gap-4 p-4 rounded-2xl border transition-all w-full group",
                  activeTab === "diagnosis" ? "bg-primary/5 border-primary/30 shadow-sm" : "border-transparent hover:bg-muted/50"
                )}
              >
                <div className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors",
                  activeTab === "diagnosis" ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                )}>
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Ścieżka A: Bezpłatna Diagnoza ROI (15 min)</h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Krótka rozmowa o „wyciekach” czasu w Twojej firmie. Pokażę Ci demo moich paneli, abyś zobaczył przyszłość swojego biznesu.
                  </p>
                </div>
              </button>

              <button 
                onClick={() => { setActiveTab("audit"); setStep(1); }}
                className={cn(
                  "flex text-left gap-4 p-4 rounded-2xl border transition-all w-full group",
                  activeTab === "audit" ? "bg-primary/5 border-primary/30 shadow-sm" : "border-transparent hover:bg-muted/50"
                )}
              >
                <div className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors",
                  activeTab === "audit" ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                )}>
                  <Search className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Ścieżka B: Strategiczny Audyt (Faza Zero)</h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Głęboka analiza procesów, wizualny projekt i precyzyjne ROI. Bilet wstępu do profesjonalnego wdrożenia.
                  </p>
                </div>
              </button>
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <h4 className="font-bold text-foreground flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" /> Gwarancja Architekta:
              </h4>
              <p className="mt-2 text-sm text-muted-foreground italic leading-relaxed">
                Jeśli podczas Audytu Strategicznego nie wskażę pól do realnych oszczędności – nie zapłacisz za niego ani złotówki.
              </p>
            </div>

            <div className="mt-8">
              <LeadMagnetModal>
                <button className="flex items-center gap-2 text-sm font-bold text-primary hover:underline group">
                  <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" /> 
                  Pobierz listę 5 procesów do automatyzacji
                </button>
              </LeadMagnetModal>
            </div>
          </div>

          {/* Right Column: Dynamic Interaction Area */}
          <div className="flex flex-col min-h-[500px]">
            <Card className="border-border shadow-xl overflow-hidden h-full flex flex-col">
              <Tabs value={activeTab} onValueChange={(v) => { setActiveTab(v); setStep(1); }} className="w-full flex flex-col h-full">
                <TabsList className="grid w-full grid-cols-2 rounded-none h-14 bg-muted/30">
                  <TabsTrigger value="diagnosis" className="data-[state=active]:bg-background data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none h-full text-xs sm:text-sm">
                    <span className="sm:hidden">1. Diagnoza</span>
                    <span className="hidden sm:inline">1. Diagnoza ROI</span>
                  </TabsTrigger>
                  <TabsTrigger value="audit" className="data-[state=active]:bg-background data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none h-full text-xs sm:text-sm">
                    <span className="sm:hidden">2. Audyt</span>
                    <span className="hidden sm:inline">2. Zamów Audyt</span>
                  </TabsTrigger>
                </TabsList>

                <CardContent className="p-0 flex-grow flex flex-col">
                  {step === 1 ? (
                    <div className="p-4 sm:p-8 space-y-6">
                      <TabsContent value="diagnosis" className="mt-0 space-y-6">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold">Umów bezpłatną Diagnozę</h3>
                          <p className="text-sm text-muted-foreground mt-1">Podaj e-mail, aby przejść bezpośrednio do wyboru terminu w moim kalendarzu i zobaczyć na żywo demo moich paneli w Angularze.</p>
                        </div>
                        
                        <form onSubmit={diagnosisForm.handleSubmit(onDiagnosisSubmit)} className="space-y-4">
                          <div className="grid gap-2">
                            <Label htmlFor="diag-email" className={diagnosisForm.formState.errors.email ? "text-destructive" : ""}>
                              E-mail służbowy
                            </Label>
                            <Input id="diag-email" type="email" {...diagnosisForm.register("email")} placeholder="twoj@email.pl" className="h-11" />
                            <div className="min-h-[1.25rem]">
                              {diagnosisForm.formState.errors.email && <p className="text-xs text-destructive">{diagnosisForm.formState.errors.email.message}</p>}
                            </div>
                          </div>
                          <Button type="submit" size="lg" className="w-full rounded-full font-bold h-11 sm:h-12 text-sm sm:text-base shadow-md shadow-primary/10" disabled={isSubmitting}>
                            {isSubmitting ? "Przetwarzanie..." : "Wybierz termin rozmowy"} <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                          </Button>
                          {error && <p className="text-sm text-destructive text-center mt-2">{error}</p>}
                        </form>
                      </TabsContent>

                      <TabsContent value="audit" className="mt-0 space-y-6">
                        <div>
                          <h3 className="text-xl font-bold">Zamów Strategiczny Audyt</h3>
                          <p className="text-sm text-muted-foreground mt-1">Odpowiedz na 3 krótkie pytania, abyśmy mogli zaplanować głęboką analizę ROI Twoich procesów.</p>
                        </div>

                        <form onSubmit={auditForm.handleSubmit(onAuditSubmit)} className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="audit-company" className={auditForm.formState.errors.company ? "text-destructive" : ""}>
                                Nazwa firmy
                              </Label>
                              <Input id="audit-company" {...auditForm.register("company")} placeholder="Firma Sp. z o.o." />
                              <div className="min-h-[1.25rem]">
                                {auditForm.formState.errors.company && <p className="text-xs text-destructive">{auditForm.formState.errors.company.message}</p>}
                              </div>
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="audit-size" className={auditForm.formState.errors.size ? "text-destructive" : ""}>
                                Liczba pracowników
                              </Label>
                              <select 
                                id="audit-size" 
                                {...auditForm.register("size")}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                <option value="">Wybierz...</option>
                                <option value="1-5">1-5 osób</option>
                                <option value="6-20">6-20 osób</option>
                                <option value="21-50">21-50 osób</option>
                                <option value="50+">50+ osób</option>
                              </select>
                              <div className="min-h-[1.25rem]">
                                {auditForm.formState.errors.size && <p className="text-xs text-destructive">{auditForm.formState.errors.size.message}</p>}
                              </div>
                            </div>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="audit-email" className={auditForm.formState.errors.email ? "text-destructive" : ""}>
                              E-mail służbowy
                            </Label>
                            <Input id="audit-email" type="email" {...auditForm.register("email")} placeholder="twoj@email.pl" />
                            <div className="min-h-[1.25rem]">
                              {auditForm.formState.errors.email && <p className="text-xs text-destructive">{auditForm.formState.errors.email.message}</p>}
                            </div>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="audit-challenge" className={auditForm.formState.errors.challenge ? "text-destructive" : ""}>
                              Największe wyzwanie (proces do automatyzacji)
                            </Label>
                            <Textarea id="audit-challenge" {...auditForm.register("challenge")} placeholder="np. Obsługa 200 faktur miesięcznie zajmuje nam 3 dni..." className="min-h-[100px] resize-none" />
                            <div className="min-h-[1.25rem]">
                              {auditForm.formState.errors.challenge && <p className="text-xs text-destructive">{auditForm.formState.errors.challenge.message}</p>}
                            </div>
                          </div>
                          <Button type="submit" size="lg" className="w-full rounded-full font-bold h-12 shadow-lg shadow-primary/20" disabled={isSubmitting}>
                            {isSubmitting ? "Wysyłanie..." : "Wyślij zgłoszenie do Audytu"} <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                          {error && <p className="text-sm text-destructive text-center mt-2">{error}</p>}
                        </form>
                      </TabsContent>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full">
                      {activeTab === "diagnosis" ? (
                        <>
                          <div className="p-4 sm:p-6 pb-4 border-b border-border bg-primary/5 flex justify-between items-center">
                            <div>
                              <h3 className="font-bold text-sm sm:text-base">Wybierz termin Diagnozy</h3>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">Rozmowa 15-minutowa</p>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 text-xs" onClick={resetForm}><ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" /> Wróć</Button>
                          </div>
                          <div className="flex-grow bg-background min-h-[500px] sm:min-h-[550px] relative overflow-hidden">
                            <div id="calendly-container-node" className="calendly-inline-widget w-full h-full" style={{ minWidth: '320px', height: '600px' }} />
                          </div>
                        </>
                      ) : (
                        <div className="p-8 text-center flex flex-col items-center justify-center h-full space-y-6">
                          <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                            <CheckCircle2 className="h-10 w-10 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">Brief przyjęty!</h3>
                            <p className="mt-4 text-muted-foreground leading-relaxed">
                              Dziękuję za zaufanie. Przeanalizuję Twoje wyzwanie i skontaktuję się w ciągu 24h, aby potwierdzić szczegóły Audytu Strategicznego i Fazy Zero.
                            </p>
                          </div>
                          <Button variant="outline" className="rounded-full" onClick={resetForm}>
                            Wróć do startu
                          </Button>
                        </div>
                      )}
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
