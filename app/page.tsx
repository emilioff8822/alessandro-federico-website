import type { Metadata } from "next"
import Hero from "@/components/sections/Hero"
import MacroAreeCards from "@/components/sections/MacroAreeCards"
import CTASection from "@/components/sections/CTASection"
import Divider from "@/components/ui/Divider"
import PageTransition from "@/components/providers/PageTransition"

export const metadata: Metadata = {
  title: { absolute: "Dott. Alessandro Federico | Dermatologo a Milano e Paola — Tricologia e Medicina Estetica" },
  description:
    "Dermatologo a Milano e Paola (CS). Visita dermatologica, mappatura dei nei, tricologia, dermochirurgia e medicina estetica. Prenota una visita con il Dott. Federico.",
  alternates: { canonical: "https://www.alessandrofederico.it" },
  openGraph: {
    title: "Dott. Alessandro Federico | Dermatologia, Tricologia e Medicina Estetica",
    description:
      "Dermatologo a Milano e Paola (CS). Dermatologia clinica, tricologia, dermochirurgia e medicina estetica.",
    url: "https://www.alessandrofederico.it",
  },
}

export default function Home() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <Divider />
        <MacroAreeCards />
        <CTASection
          secondario={{ text: "Chi sono", href: "/chi-sono" }}
        />
      </main>
    </PageTransition>
  )
}
