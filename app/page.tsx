import type { Metadata } from "next"
import Hero from "@/components/sections/Hero"
import Servizi from "@/components/sections/Servizi"
import CTASection from "@/components/sections/CTASection"
import Divider from "@/components/ui/Divider"
import PageTransition from "@/components/providers/PageTransition"

export const metadata: Metadata = {
  title: "Dr. Alessandro Federico | Dermatologo Milano — Medicina Estetica",
  description:
    "Dermatologo e medico estetico a Milano. Visita dermatologica, dermatoscopia, tricologia, filler, botox e peeling. Prenota una visita con il Dr. Federico.",
  alternates: { canonical: "https://www.alessandrofederico.it" },
  openGraph: {
    title: "Dr. Alessandro Federico | Dermatologo e Medico Estetico Milano",
    description:
      "Specialista in dermatologia e medicina estetica a Milano. Prenota una visita.",
    url: "https://www.alessandrofederico.it",
  },
}

export default function Home() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <Divider />
        <Servizi />
        <CTASection />
      </main>
    </PageTransition>
  )
}
