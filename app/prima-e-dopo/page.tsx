import type { Metadata } from "next"
import { ShieldCheck } from "lucide-react"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import PageHero from "@/components/ui/PageHero"
import PrimaEDopoGallery from "@/components/sections/PrimaEDopoGallery"
import CTASection from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Prima e Dopo | Risultati dei trattamenti",
  description:
    "I risultati dei trattamenti del Dott. Alessandro Federico in dermatologia, tricologia e medicina estetica. Fotografie prima e dopo pubblicate con il consenso dei pazienti.",
  alternates: { canonical: "https://www.alessandrofederico.it/prima-e-dopo" },
  openGraph: {
    title: "Prima e Dopo | Dott. Alessandro Federico",
    description: "Risultati clinici ed estetici documentati.",
    url: "https://www.alessandrofederico.it/prima-e-dopo",
  },
}

export default function PrimaEDopoPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          titolo="Prima e Dopo"
          testo="Ogni risultato racconta un percorso. Le fotografie documentano i trattamenti effettuati in studio, con il consenso esplicito di ogni paziente."
          percorso={[{ label: "Prima e Dopo", href: "/prima-e-dopo" }]}
        />

        <section className="bg-white section-y" aria-label="Galleria casi trattati">
          <div className="container-site">
            <PrimaEDopoGallery />
          </div>
        </section>

        <section className="container-site" aria-label="Consenso e privacy">
          <FadeIn>
            <div className="rounded-[20px] md:rounded-[24px] bg-azzurro-chiaro px-6 py-10 md:px-14 md:py-12 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <span className="icon-circle w-14 h-14">
                <ShieldCheck strokeWidth={1.4} className="w-6 h-6" />
              </span>
              <div className="max-w-3xl">
                <h2 className="font-heading text-2xl mb-3">Consenso e privacy</h2>
                <p className="text-[15px] leading-[1.8]">
                  Tutte le fotografie presenti in questa sezione sono state realizzate in
                  studio e pubblicate con il consenso scritto dei pazienti. I volti possono
                  essere parzialmente oscurati su richiesta. I risultati individuali possono
                  variare in base alle caratteristiche della pelle, all&apos;età e alla
                  risposta al trattamento.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        <CTASection
          eyebrow="Prenota"
          titolo="Vuoi un risultato come questi?"
          testo="Prenota una consulenza: valutiamo insieme il trattamento più adatto alla tua pelle e ai tuoi obiettivi."
          secondario={{ text: "Le specialità", href: "/specialita" }}
        />
      </main>
    </PageTransition>
  )
}
