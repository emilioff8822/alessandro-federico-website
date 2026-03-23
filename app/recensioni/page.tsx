import type { Metadata } from "next"
import { MessageSquareQuote } from "lucide-react"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import CTAButton from "@/components/ui/CTAButton"
import Divider from "@/components/ui/Divider"
import RecensioniCarousel from "@/components/sections/RecensioniCarousel"

export const metadata: Metadata = {
  title: "Recensioni",
  description:
    "Leggi le recensioni dei pazienti del Dr. Alessandro Federico, specialista in Dermatologia e Medicina Estetica. Testimonianze reali di chi si è affidato alle sue cure.",
  alternates: { canonical: "https://www.alessandrofederico.it/recensioni" },
  openGraph: {
    title: "Recensioni | Dr. Alessandro Federico",
    description:
      "Le esperienze dei miei pazienti, in dermatologia clinica e medicina estetica.",
    url: "https://www.alessandrofederico.it/recensioni",
  },
}

export default function RecensioniPage() {
  return (
    <PageTransition>
      <main>

        {/* ── Hero ── */}
        <section className="pt-20 pb-14 md:pt-28 md:pb-20 bg-white" aria-label="Recensioni pazienti">
          <div className="mx-auto max-w-3xl px-5 md:px-10 text-center">
            <FadeIn>
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-8"
                style={{
                  background: "linear-gradient(135deg, #3D7A97, #7AAEC9)",
                  boxShadow: "0 8px 28px rgba(122,174,201,0.3)",
                }}
              >
                <MessageSquareQuote strokeWidth={1.2} className="w-7 h-7" />
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <SectionLabel text="Testimonianze" className="justify-center" />
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="font-heading text-4xl md:text-5xl text-text leading-[1.05] mb-6">
                <TextReveal delay={0.2}>
                  Cosa dicono i miei pazienti
                </TextReveal>
              </h1>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="font-sans text-base text-muted leading-[1.85] max-w-xl mx-auto">
                Ogni paziente porta con sé una storia unica. Queste sono alcune delle
                esperienze di chi si è affidato alla mia cura — in dermatologia clinica
                e medicina estetica.
              </p>
            </FadeIn>
          </div>
        </section>

        <Divider />

        {/* ── Carousel ── */}
        <section className="py-16 md:py-24" style={{ background: "#F4F9FB" }} aria-label="Carousel testimonianze">
          <div className="mx-auto max-w-3xl px-5 md:px-16">
            <RecensioniCarousel />
          </div>
        </section>

        <Divider />

        {/* ── Nota trasparenza ── */}
        <section className="py-14 md:py-18 bg-white">
          <div className="mx-auto max-w-2xl px-5 md:px-10 text-center">
            <FadeIn>
              <p className="font-sans text-sm text-muted leading-[1.9]">
                Le testimonianze riportate sono di pazienti reali e sono state condivise
                con il loro consenso. Per tutela della privacy, i cognomi sono indicati
                solo con l&apos;iniziale.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── CTA finale ── */}
        <section
          className="py-20 md:py-24 text-center"
          style={{ background: "linear-gradient(135deg, #2A5F7A, #3D7A97)" }}
          aria-label="Prenota una visita"
        >
          <div className="max-w-xl mx-auto px-5 md:px-10">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl text-white leading-[1.1] mb-4">
                Pronto a iniziare il tuo percorso?
              </h2>
              <p className="font-sans text-base text-white/65 leading-[1.8] mb-10 max-w-md mx-auto">
                Prenota una prima consulenza. Ogni visita è un ascolto attento
                prima di qualsiasi trattamento.
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
