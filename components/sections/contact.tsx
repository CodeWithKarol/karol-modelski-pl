"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Sparkles,
  ArrowLeft
} from "lucide-react"
import Script from "next/script"

const contactFormSchema = z.object({
  email: z.string().email("Proszę podać poprawny adres e-mail").min(1, "E-mail jest wymagany"),
  message: z.string().min(10, "Opis musi mieć co najmniej 10 znaków").min(1, "Wiadomość jest wymagana"),
  b_name_42: z.string().optional(), // Updated Honeypot field name to avoid autofill
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function Contact() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  })

  // Elegant initialization using a callback ref
  const calendlyContainerRef = useCallback((node: HTMLDivElement | null) => {
    if (node !== null && (window as any).Calendly) {
      (window as any).Calendly.initInlineWidget({
        url: 'https://calendly.com/kontakt-karol-modelski/30min?hide_landing_page_details=1&hide_gdpr_banner=1',
        parentElement: node,
        prefill: {},
        utm: {}
      });
    }
  }, []);

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    setError(null)
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Wystąpił błąd podczas wysyłania wiadomości.")
      }

      reset()
      setStep(2)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Coś poszło nie tak. Spróbuj ponownie.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Left Column: Context & Benefits */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Odzyskaj swój czas. Zacznijmy od 15-minutowej rozmowy.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Jako jedyny właściciel i ekspert w swojej firmie, biorę osobistą odpowiedzialność za każdy projekt, którego celem jest Twoja nowa automatyzacja biznesu. Nie musisz dopasowywać się do gotowych szablonów – po prostu opisz swoje wyzwanie własnymi słowami, a ja znajdę rozwiązanie.
            </p>

            <div className="mt-10 rounded-3xl bg-primary/5 p-8 border border-primary/10">
              <h3 className="flex items-center gap-3 text-xl font-bold text-foreground">
                <Sparkles className="h-6 w-6 text-primary" /> Co zyskasz podczas bezpłatnej konsultacji?
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Wskażę konkretny obszar, w którym automatyzacja przyniesie Ci najszybszy zwrot z inwestycji.",
                  "Podpowiem, jak inteligentna automatyzacja AI (oparta na modelu Gemini 3 Flash) może przejąć najbardziej nużące zadania w Twojej firmie.",
                  "Pokażę Ci, jak profesjonalna automatyzacja procesów biznesowych pozwoli Ci skalować firmę bez konieczności natychmiastowego zwiększania zatrudnienia."
                ].map((item, i) => (
                  <li key={i} className="flex gap-x-3 text-muted-foreground">
                    <CheckCircle2 className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <Clock className="h-5 w-5" />
              </div>
              <span>Odpowiadam zazwyczaj w ciągu 24h</span>
            </div>
          </div>

          {/* Right Column: Hybrid Form/Calendar */}
          <div className="flex flex-col">
            <Card className="border-border shadow-sm overflow-hidden h-full">
              <CardContent className="p-0 h-full flex flex-col">
                {step === 1 ? (
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-2">Krok 1: Krótka analiza Twoich potrzeb</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Wypełnij poniższe pola. Twoja wiadomość trafi bezpośrednio do mnie, co pozwoli mi przygotować wstępną analizę jeszcze przed naszą rozmową.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      {/* Honeypot field - hidden from users, randomized name to avoid browser autofill */}
                      <div className="sr-only" aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                        <input 
                          id="b_name_42" 
                          type="text"
                          tabIndex={-1} 
                          {...register("b_name_42")} 
                          autoComplete="new-password" 
                        />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="email" className={errors.email ? "text-destructive" : ""}>
                          Twój e-mail służbowy
                        </Label>
                        <Input 
                          id="email" 
                          type="email" 
                          {...register("email")}
                          aria-invalid={errors.email ? "true" : "false"}
                          placeholder="Twój e-mail" 
                        />
                        {errors.email && (
                          <p className="text-xs font-medium text-destructive">{errors.email.message}</p>
                        )}
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="message" className={errors.message ? "text-destructive" : ""}>
                          Opis wyzwania, z którym się mierzysz
                        </Label>
                        <Textarea 
                          id="message" 
                          {...register("message")}
                          aria-invalid={errors.message ? "true" : "false"}
                          placeholder="np. „Mój zespół spędza 3 godziny dziennie na kopiowaniu danych” lub „Chcę wdrożyć inteligentną obsługę klienta”"
                          className="min-h-[120px]"
                        />
                        {errors.message && (
                          <p className="text-xs font-medium text-destructive">{errors.message.message}</p>
                        )}
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full rounded-full py-4 sm:py-6 text-sm sm:text-lg font-bold mt-4 whitespace-normal text-balance h-auto min-h-[3.5rem]"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "WYSYŁANIE..." : "WYŚLIJ I WYBIERZ TERMIN"} 
                        {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5 shrink-0" />}
                      </Button>
                      {error && (
                        <p className="text-sm font-medium text-destructive text-center mt-2">{error}</p>
                      )}
                    </form>
                  </div>
                ) : (
                  <div className="flex flex-col h-full">
                    <div className="p-8 pb-4 border-b border-border">
                      <div className="flex items-center gap-2 text-primary mb-4">
                        <CheckCircle2 className="h-5 w-5" />
                        <span className="font-bold">Wiadomość wysłana!</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Krok 2: Rezerwacja terminu</h3>
                      <p className="text-muted-foreground text-sm">
                        Wybierz dogodny termin na bezpłatny audyt w moim kalendarzu:
                      </p>
                    </div>
                    {/* Calendly Widget */}
                    <div className="flex-grow bg-muted/5 min-h-[600px] relative overflow-hidden">
                      <div 
                        id="calendly-container-node"
                        ref={calendlyContainerRef}
                        className="calendly-inline-widget w-full h-full" 
                        style={{ minWidth: '320px', height: '650px' }} 
                      />
                      <Script 
                        src="https://assets.calendly.com/assets/external/widget.js" 
                        strategy="afterInteractive"
                        onReady={() => {
                          // Handle case where script loads after the component is already on step 2
                          const node = document.getElementById('calendly-container-node');
                          if (node && (window as any).Calendly) {
                            (window as any).Calendly.initInlineWidget({
                              url: 'https://calendly.com/kontakt-karol-modelski/30min?hide_landing_page_details=1&hide_gdpr_banner=1',
                              parentElement: node,
                            });
                          }
                        }}
                      />
                    </div>
                    <div className="p-4 bg-muted/10 border-t border-border flex justify-center">
                      <Button 
                        variant="link" 
                        size="sm" 
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setStep(1)}
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Wyślij kolejną wiadomość
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="mt-8 rounded-2xl border border-primary/10 bg-primary/5 p-6">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Dlaczego warto napisać właśnie teraz?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Firmy, które wdrożą automatyzację procesów dziś, zyskają przewagę, której konkurencja nie będzie w stanie nadrobić ręczną pracą. Wykorzystuję najpotężniejsze narzędzia, w tym Gemini 3 Flash, aby dostarczać Ci rozwiązania o najwyższej wydajności.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
