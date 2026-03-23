import type { Metadata } from "next"
import { SplitSquareHorizontal } from "lucide-react"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import CTAButton from "@/components/ui/CTAButton"
import Divider from "@/components/ui/Divider"
import PrimaEDopoGallery from "@/components/sections/PrimaEDopoGallery"

export const metadata: Metadata = {
  title: "Prima e Dopo",
  description:
    "Guarda i risultati reali dei trattamenti del Dr. Alessandro Federico in Dermatologia e Medicina Estetica. Fotografie prima e dopo con il consenso dei pazienti.",
  alternates: { canonical: "https://www.alessandrofederico.it/prima-e-dopo" },
  openGraph: {
    title: "Prima e Dopo | Dr. Alessandro Federico",
    description:
      "Risultati clinici ed estetici documentati. Dermatologia e Medicina Estetica.",
    url: "https://www.alessandrofederico.it/prima-e-dopo",
  },
}

export default function PrimaEDopoPage() {
  return (
    <PageTransition>
      <main>

        {/* ── Hero ── */}
        <section className="pt-20 pb-14 md:pt-28 md:pb-20 bg-white" aria-label="Gallery Prima e Dopo">
          <div className="mx-auto max-w-3xl px-5 md:px-10 text-center">
            <FadeIn>
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-8"
                style={{
                  background: "linear-gradient(135deg, #3D7A97, #7AAEC9)",
                  boxShadow: "0 8px 28px rgba(122,174,201,0.3)",
                }}
              >
                <SplitSquareHorizontal strokeWidth={1.2} className="w-7 h-7" />
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <SectionLabel text="Risultati" className="justify-center" />
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="font-heading text-4xl md:text-5xl text-text leading-[1.05] mb-6">
                <TextReveal delay={0.2}>Prima e Dopo</TextReveal>
              </h1>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="font-sans text-base text-muted leading-[1.85] max-w-xl mx-auto">
                Ogni risultato racconta un percorso. Le fotografie documentano i trattamenti
                effettuati in studio — in dermatologia clinica e medicina estetica — con il
                consenso esplicito di ogni paziente.
              </p>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ── Gallery filtrabile ── */}
        <section className="py-16 md:py-24 bg-white" aria-label="Galleria casi trattati">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <PrimaEDopoGallery />
          </div>
        </section>

        <Divider />

        {/* ── Nota etica ── */}
        <section className="py-14 md:py-16" style={{ background: "#F4F9FB" }}>
          <div className="mx-auto max-w-2xl px-5 md:px-10">
            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div
                  className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
                  style={{ background: "linear-gradient(135deg, #3A8A9E22, #3A8A9E44)" }}
                >
                  <SplitSquareHorizontal strokeWidth={1.4} className="w-4 h-4" style={{ color: "#3A8A9E" }} />
                </div>
                <div>
                  <h2 className="font-heading text-xl text-text mb-2">Consenso e privacy</h2>
                  <p className="font-sans text-sm text-muted leading-[1.9]">
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

        {/* ── CTA finale ── */}
        <section
          className="py-20 md:py-24 text-center"
          style={{ background: "linear-gradient(135deg, #2A5F7A, #3D7A97)" }}
          aria-label="Prenota una consulenza"
        >
          <div className="max-w-xl mx-auto px-5 md:px-10">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl text-white leading-[1.1] mb-4">
                Vuoi un risultato come questi?
              </h2>
              <p className="font-sans text-base text-white/65 leading-[1.8] mb-10 max-w-md mx-auto">
                Prenota una consulenza. Valutiamo insieme il trattamento più
                adatto alla tua pelle e ai tuoi obiettivi.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton text="Prenota una visita" href="/prenota" inverted />
                <CTAButton text="Scopri le specialità" href="/specialita" inverted />
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
    </PageTransition>
  )
}
