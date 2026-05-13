"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react"

const schema = z.object({
  name: z.string().min(2, "Imię i nazwisko musi mieć co najmniej 2 znaki"),
  contact: z.string().min(3, "Podaj adres e-mail lub numer telefonu"),
  message: z.string().min(10, "Opisz proszę swój problem (min. 10 znaków)"),
})

type FormValues = z.infer<typeof schema>

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormValues) => {
    setIsError(false)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("server error")
      setIsSuccess(true)
      reset()
    } catch {
      setIsError(true)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/40">
          <CheckCircle2 className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div>
          <p className="text-lg font-bold text-foreground">Wiadomość wysłana!</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Przeanalizuję Twój przypadek i wrócę z gotowym pomysłem.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-name" className="text-sm font-medium text-foreground">
          Imię i nazwisko
        </label>
        <input
          id="cf-name"
          type="text"
          autoComplete="name"
          placeholder="Jan Kowalski"
          {...register("name")}
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-amber-400/60 focus:outline-none focus:ring-2 focus:ring-amber-400/20 dark:focus:border-amber-500/60 dark:focus:ring-amber-500/20"
        />
        {errors.name && (
          <p className="text-xs font-medium text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* Contact */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-contact" className="text-sm font-medium text-foreground">
          Adres e-mail / Telefon
        </label>
        <input
          id="cf-contact"
          type="text"
          autoComplete="email"
          placeholder="jan@firma.pl lub +48 500 000 000"
          {...register("contact")}
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-amber-400/60 focus:outline-none focus:ring-2 focus:ring-amber-400/20 dark:focus:border-amber-500/60 dark:focus:ring-amber-500/20"
        />
        {errors.contact && (
          <p className="text-xs font-medium text-destructive">{errors.contact.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="text-sm font-medium text-foreground">
          Twój problem
        </label>
        <textarea
          id="cf-message"
          rows={4}
          placeholder="Opisz krótko proces lub narzędzia, które najbardziej spowalniają Twoją firmę..."
          {...register("message")}
          className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-amber-400/60 focus:outline-none focus:ring-2 focus:ring-amber-400/20 dark:focus:border-amber-500/60 dark:focus:ring-amber-500/20"
        />
        {errors.message && (
          <p className="text-xs font-medium text-destructive">{errors.message.message}</p>
        )}
      </div>

      {isError && (
        <div className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
          <p className="text-sm text-destructive">
            Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz bezpośrednio na{" "}
            <a href="mailto:kontakt@karol-modelski.pl" className="font-semibold underline underline-offset-2">
              kontakt@karol-modelski.pl
            </a>
            .
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group mt-1 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-muted hover:shadow-sm disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Wysyłanie...
          </>
        ) : (
          <>
            <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            Wyślij zapytanie
          </>
        )}
      </button>
    </form>
  )
}
