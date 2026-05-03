import { Hero } from "@/components/sections/hero"
import { PainPoints } from "@/components/sections/pain-points"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Trust } from "@/components/sections/trust"
import { Process } from "@/components/sections/process"
import { Stack } from "@/components/sections/stack"
import { FAQ } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <PainPoints />
      <About />
      <Services />
      <Trust />
      <Process />
      <Stack />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
