"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Loader2 } from "lucide-react"

const schema = z.object({
  email: z.string().email("Proszę podać poprawny adres e-mail"),
})

type FormValues = z.infer<typeof schema>

export function LeadMagnetModal({ children }: { children: React.ReactNode }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [open, setOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen) {
      // Reset form and success state when closing
      setTimeout(() => {
        setIsSuccess(false)
        reset()
      }, 300) // Small delay to avoid flickering during animation
    }
  }

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      
      setIsSuccess(true)
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Odbierz bezpłatną listę</DialogTitle>
              <DialogDescription className="pt-2">
                Zostaw swój e-mail służbowy, a wyślę Ci <strong>Listę 5 procesów, które zautomatyzujesz w 48h</strong>.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="lead-email">E-mail służbowy</Label>
                <Input
                  id="lead-email"
                  type="email"
                  placeholder="twoj@email.pl"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-xs text-destructive font-medium">{errors.email.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Wysyłanie...
                  </>
                ) : (
                  "Wyślij mi listę (PDF)"
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-12 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Gotowe!</h3>
            <p className="mt-2 text-muted-foreground">
              Lista 5 procesów została wysłana na Twój adres e-mail.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Nie widzisz maila? Sprawdź folder Spam.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
