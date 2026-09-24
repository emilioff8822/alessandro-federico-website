import type { Metadata } from "next"
import Image from "next/image"
import Hero from "@/components/sections/Hero"
import InfoStrip from "@/components/sections/InfoStrip"
import MacroAreeCards from "@/components/sections/MacroAreeCards"
import RecensioniSlider from "@/components/sections/RecensioniSlider"
import MalattieTeaser from "@/components/sections/MalattieTeaser"
import CTASection from "@/components/sections/CTASection"
import CTAButton from "@/components/ui/CTAButton"
import FadeIn from "@/components/ui/FadeIn"
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

        <section className="bg-white pt-16 md:pt-24 pb-14 md:pb-16" aria-label="Benvenuto">
          <div className="container-site">
            <FadeIn>
              <div className="max-w-[640px] mx-auto text-center mb-14 md:mb-20">
                <Image
                  src="/images/brand/simbolo-blu.png"
                  alt=""
                  width={700}
                  height={907}
                  aria-hidden="true"
                  className="w-9 h-auto mx-auto mb-6"
                />
                <h2 className="font-heading titolo-sezione mb-6">
                  Un servizio completo di dermatologia
                </h2>
                <p className="text-base leading-[1.75] mb-4">
                  Dalla visita specialistica ai percorsi terapeutici personalizzati, con un
                  approccio medico rigoroso e basato sull&apos;evidenza scientifica.
                </p>
                <p className="text-base leading-[1.75] mb-9">
                  Il Dott. Federico riceve a <strong className="font-medium text-blu-notte">Milano</strong>, in Via Fratelli Bronzetti 18,
                  e a <strong className="font-medium text-blu-notte">Paola (CS)</strong>, in Corso Roma 39.
                </p>
                <CTAButton text="Conosci il Dott. Federico" href="/chi-sono" />
              </div>
            </FadeIn>
          </div>
          <FadeIn>
            <InfoStrip />
          </FadeIn>
        </section>

        <MacroAreeCards />

        <section className="bg-blu-notte section-y" aria-label="Recensioni">
          <div className="container-site">
            <FadeIn>
              <div className="text-center mb-10 md:mb-12">
                <h2 className="font-heading titolo-sezione text-white mb-3">Dicono di me</h2>
                <p className="text-base text-white/80">Il parere di chi si è affidato alle cure del Dott. Federico.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <RecensioniSlider />
            </FadeIn>
            <div className="mt-10 flex justify-center">
              <CTAButton text="Leggi tutte le recensioni" href="/recensioni" variant="inverted" />
            </div>
          </div>
        </section>

        <MalattieTeaser />

        <CTASection secondario={{ text: "Chi sono", href: "/chi-sono" }} />
      </main>
    </PageTransition>
  )
}
