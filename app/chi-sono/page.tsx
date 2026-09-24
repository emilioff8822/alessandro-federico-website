import type { Metadata } from "next"
import Image from "next/image"
import { Download } from "lucide-react"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import CTAButton from "@/components/ui/CTAButton"
import Breadcrumb from "@/components/ui/Breadcrumb"
import CTASection from "@/components/sections/CTASection"
import { siteConfig } from "@/data/siteConfig"

export const metadata: Metadata = {
  title: "Chi è il Dott. Alessandro Federico | Dermatologo a Milano",
  description:
    "Il Dott. Alessandro Federico, dermatologo a Milano in Via Fratelli Bronzetti 18: dalla visita specialistica ai percorsi terapeutici personalizzati, con un approccio medico rigoroso e basato sull'evidenza scientifica.",
  alternates: { canonical: "https://www.alessandrofederico.it/chi-sono" },
  openGraph: {
    title: "Chi è il Dott. Alessandro Federico | Dermatologo a Milano",
    description:
      "Specialista in Dermatologia e Venereologia, Tricologia e Medicina Estetica.",
    url: "https://www.alessandrofederico.it/chi-sono",
  },
}

function Citazione({ children }: { children: React.ReactNode }) {
  return (
    <section className="container-site" aria-label="Citazione">
      <FadeIn>
        <figure className="relative overflow-hidden rounded-[20px] md:rounded-[24px] bg-azzurro-chiaro px-6 py-12 md:px-16 md:py-16">
          <Image
            src="/images/brand/simbolo-blu.png"
            alt=""
            width={700}
            height={907}
            aria-hidden="true"
            className="absolute -right-8 -bottom-12 w-[160px] md:w-[220px] h-auto opacity-20 pointer-events-none select-none"
          />
          <blockquote className="citazione relative max-w-3xl mx-auto">
            <p className="font-heading text-[21px] md:text-[27px] leading-[1.5] text-blu-notte">
              &ldquo;{children}&rdquo;
            </p>
          </blockquote>
          <figcaption className="relative max-w-3xl mx-auto pl-[calc(1.75rem+3px)] mt-5 eyebrow text-[11px] text-blu-scuro">
            ~ {siteConfig.name}
          </figcaption>
        </figure>
      </FadeIn>
    </section>
  )
}

export default function ChiSonoPage() {
  return (
    <PageTransition>
      <main className="bg-white">

        <section className="container-site pt-8 md:pt-10 pb-16 md:pb-24" aria-label="Chi è il Dott. Alessandro Federico">
          <Breadcrumb percorso={[{ label: "Chi Sono", href: "/chi-sono" }]} className="mb-10 md:mb-14" />

          <div className="grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-20 items-center">
            <FadeIn>
              <div className="relative overflow-hidden rounded-[20px] md:rounded-[24px] max-w-[520px] mx-auto lg:mx-0">
                <Image
                  src="/images/dr-alessandro-federico-dermatologo-milano.png"
                  alt="Dott. Alessandro Federico, dermatologo a Milano"
                  width={960}
                  height={1280}
                  quality={100}
                  priority
                  className="w-full aspect-[4/5] object-cover object-[50%_20%]"
                />
              </div>
            </FadeIn>

            <div className="text-center lg:text-left">
              <FadeIn>
                <p className="eyebrow text-[11px] text-blu-scuro mb-4">Chi Sono</p>
              </FadeIn>
              <h1 className="font-heading titolo-pagina mb-8">
                <TextReveal delay={0.15}>Dott. Alessandro Federico</TextReveal>
              </h1>

              <FadeIn delay={0.2}>
                <p className="text-base md:text-[17px] leading-[1.85] mb-10 max-w-[620px] mx-auto lg:mx-0">
                  Cerchi un dermatologo a Milano qualificato per la diagnosi e la cura delle
                  patologie cutanee? Il Dott. Alessandro Federico, in Via Fratelli Bronzetti 18,
                  offre un servizio completo di dermatologia: dalla visita specialistica ai
                  percorsi terapeutici personalizzati, con un approccio medico rigoroso e basato
                  sull&apos;evidenza scientifica.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                  <CTAButton text="Prenota una visita" href="/prenota" />
                  <a
                    href="/cv-alessandro-federico.pdf"
                    download="CV-Dott-Alessandro-Federico.pdf"
                    className="btn btn-outline"
                  >
                    <Download strokeWidth={1.5} className="w-4 h-4" />
                    Scarica il CV
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <Citazione>
          Le malattie della pelle sono la spia sul cruscotto di problemi interni. Prendersi
          cura solo di ciò che vediamo in superficie è come voler risolvere il problema nel
          motore facendo sparire la spia.
        </Citazione>

        <section className="container-site section-y" aria-label="La pelle, organo sentinella">
          <FadeIn>
            <div className="grid lg:grid-cols-[5fr_7fr] gap-6 lg:gap-20 border-t border-blu-notte/25 pt-10 md:pt-14">
              <h2 className="font-heading titolo-sezione text-center lg:text-left">
                La pelle, un organo sentinella
              </h2>
              <div>
                <p className="text-base md:text-[17px] leading-[1.85] mb-6">
                  La pelle è molto più di un rivestimento del corpo: è un organo sentinella.
                  Attraverso discromie e altre anomalie, rileva squilibri e disturbi interni.
                </p>
                <p className="text-base md:text-[17px] leading-[1.85]">
                  La pelle è l&apos;organo più esteso del corpo umano: ne ricopre l&apos;intera
                  superficie, rappresenta circa il 16% del peso corporeo, riveste e protegge gli
                  altri organi, svolge una funzione termoregolatrice e di ricezione degli stimoli
                  esterni.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        <Citazione>
          Ritengo necessario un approccio olistico al paziente che comprenda, oltre alla cura
          specialistica dermatologica, accorgimenti di tipo dietetico, comportamentale e
          psicologico. Non dimentico mai che la dermatologia nasce come branca della medicina
          interna.
        </Citazione>

        <section className="container-site pt-16 md:pt-24 pb-4" aria-label="Qualifiche">
          <FadeIn>
            <div className="max-w-xl mx-auto text-center">
              <Image
                src="/images/brand/simbolo-blu.png"
                alt=""
                width={700}
                height={907}
                aria-hidden="true"
                className="w-10 h-auto mx-auto mb-6"
              />
              <p className="font-heading text-2xl md:text-3xl text-blu-notte mb-5">
                {siteConfig.fullName}
              </p>
              <div className="w-10 h-px bg-brand-blu mx-auto mb-5" />
              <ul className="space-y-2" role="list">
                <li className="eyebrow text-[12px] tracking-[0.16em] text-grigio-testo">Specialista in Dermatologia e Venereologia</li>
                <li className="eyebrow text-[12px] tracking-[0.16em] text-grigio-testo">Tricologia</li>
                <li className="eyebrow text-[12px] tracking-[0.16em] text-grigio-testo">Medicina Estetica</li>
              </ul>
            </div>
          </FadeIn>
        </section>

        <CTASection
          eyebrow="Prenota"
          titolo="Vuoi conoscermi meglio?"
          testo="Prenota una prima visita: ogni percorso inizia con un ascolto attento e una diagnosi accurata."
          secondario={{ text: "Le specialità", href: "/specialita" }}
        />

      </main>
    </PageTransition>
  )
}
