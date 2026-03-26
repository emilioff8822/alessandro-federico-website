import type { Metadata } from "next"
import Image from "next/image"
import { SplitSquareHorizontal } from "lucide-react"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import CTAButton from "@/components/ui/CTAButton"
import Divider from "@/components/ui/Divider"
import PrimaEDopoGallery from "@/components/sections/PrimaEDopoGallery"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"

export const metadata: Metadata = {
  title: "Prima e Dopo | Risultati Trattamenti — Dr. Federico Milano",
  description:
    "Guarda i risultati reali dei trattamenti del Dr. Alessandro Federico in dermatologia e medicina estetica a Milano. Fotografie prima e dopo con il consenso dei pazienti.",
  alternates: { canonical: "https://www.alessandrofederico.it/prima-e-dopo" },
  openGraph: {
    title: "Prima e Dopo | Risultati Trattamenti — Dr. Federico Milano",
    description:
      "Risultati clinici ed estetici documentati. Dermatologia e Medicina Estetica a Milano.",
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

        {/* ── Hero ── */}
        <section className="pt-20 pb-14 md:pt-28 md:pb-20 bg-white" aria-label="Gallery Prima e Dopo">
          <div className="mx-auto max-w-3xl px-5 md:px-10 text-center">
            <FadeIn>
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-8"
                style={{
                  background: "linear-gradient(135deg, #4E8DA3, #84B3C8)",
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
          className="relative py-20 md:py-24 text-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #4A7F93, #5A93A6)" }}
          aria-label="Prenota una consulenza"
        >
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[420px] md:h-[420px] pointer-events-none select-none" aria-hidden="true">
            <Image src="/images/logo-dryouth-symbol.png" alt="" width={420} height={420} className="object-contain brightness-0 invert opacity-[0.05]" />
          </div>
          <div className="relative z-10 max-w-xl mx-auto px-5 md:px-10">
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
