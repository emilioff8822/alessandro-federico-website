import type { Metadata } from "next"
import { SplitSquareHorizontal } from "lucide-react"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import Divider from "@/components/ui/Divider"
import PrimaEDopoGallery from "@/components/sections/PrimaEDopoGallery"
import CTASection from "@/components/sections/CTASection"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"

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
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.alessandrofederico.it" },
        { name: "Prima e Dopo", url: "https://www.alessandrofederico.it/prima-e-dopo" },
      ]} />
      <main>

        <section className="pt-16 pb-14 md:pt-24 md:pb-20 bg-white" aria-label="Gallery Prima e Dopo">
          <div className="mx-auto max-w-3xl px-5 md:px-10 text-center">
            <FadeIn>
              <div className="w-16 h-16 rounded-full bg-brand-blu text-blu-notte flex items-center justify-center mx-auto mb-8">
                <SplitSquareHorizontal strokeWidth={1.3} className="w-7 h-7" />
              </div>
            </FadeIn>
            <SectionLabel text="Risultati" className="justify-center" />
            <h1 className="font-heading text-4xl md:text-5xl leading-[1.08] mb-6">
              <TextReveal delay={0.2}>Prima e Dopo</TextReveal>
            </h1>
            <FadeIn delay={0.25}>
              <p className="text-base leading-[1.85] max-w-xl mx-auto">
                Ogni risultato racconta un percorso. Le fotografie documentano i trattamenti
                effettuati in studio, con il consenso esplicito di ogni paziente.
              </p>
            </FadeIn>
          </div>
        </section>

        <Divider />

        <section className="py-16 md:py-24 bg-white" aria-label="Galleria casi trattati">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <PrimaEDopoGallery />
          </div>
        </section>

        <section className="py-14 md:py-16 bg-azzurro-chiaro">
          <div className="mx-auto max-w-2xl px-5 md:px-10">
            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
                <div className="shrink-0 w-11 h-11 rounded-full bg-brand-blu text-blu-notte flex items-center justify-center">
                  <SplitSquareHorizontal strokeWidth={1.4} className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-heading text-xl mb-2">Consenso e privacy</h2>
                  <p className="text-sm leading-[1.9]">
                    Tutte le fotografie presenti in questa sezione sono state realizzate in
                    studio e pubblicate con il consenso scritto dei pazienti. I volti possono
                    essere parzialmente oscurati su richiesta. I risultati individuali possono
                    variare in base alle caratteristiche della pelle, all&apos;età e alla
                    risposta al trattamento.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
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
