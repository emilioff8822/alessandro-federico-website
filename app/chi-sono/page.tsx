import type { Metadata } from "next"
import Image from "next/image"
import { Download } from "lucide-react"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import CTAButton from "@/components/ui/CTAButton"
import CTASection from "@/components/sections/CTASection"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"
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
    <FadeIn>
      <figure className="max-w-3xl mx-auto">
        <blockquote className="citazione">
          <p className="font-heading text-[22px] md:text-[28px] leading-[1.5] text-blu-notte">
            &ldquo;{children}&rdquo;
          </p>
        </blockquote>
        <figcaption className="pl-[calc(1.75rem+3px)] mt-5 eyebrow text-[11px] text-blu-scuro">
          ~ {siteConfig.name}
        </figcaption>
      </figure>
    </FadeIn>
  )
}

export default function ChiSonoPage() {
  return (
    <PageTransition>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.alessandrofederico.it" },
        { name: "Chi Sono", url: "https://www.alessandrofederico.it/chi-sono" },
      ]} />
      <main>

        <section className="py-16 md:py-24 bg-white" aria-label="Chi è il Dott. Alessandro Federico">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">

              <FadeIn className="w-full md:w-[42%] shrink-0">
                <div className="relative">
                  <div className="absolute -top-3 -left-3 w-full h-full border border-brand-blu/60 rounded-2xl pointer-events-none" />
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src="/images/dr-alessandro-federico-dermatologo-milano.png"
                      alt="Dott. Alessandro Federico, dermatologo a Milano"
                      width={960}
                      height={1280}
                      quality={100}
                      priority
                      className="w-full aspect-[3/4] object-cover object-center"
                    />
                  </div>
                </div>
              </FadeIn>

              <div className="w-full md:w-[58%] text-center md:text-left">
                <SectionLabel text="Chi Sono" className="justify-center md:justify-start" />

                <h1 className="font-heading text-4xl md:text-5xl leading-[1.08] mb-8">
                  <TextReveal delay={0.2}>Dott. Alessandro Federico</TextReveal>
                </h1>

                <FadeIn delay={0.2}>
                  <p className="text-base md:text-[17px] leading-[1.9] mb-10">
                    Cerchi un dermatologo a Milano qualificato per la diagnosi e la cura delle
                    patologie cutanee? Il Dott. Alessandro Federico, in Via Fratelli Bronzetti 18,
                    offre un servizio completo di dermatologia: dalla visita specialistica ai
                    percorsi terapeutici personalizzati, con un approccio medico rigoroso e basato
                    sull&apos;evidenza scientifica.
                  </p>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
                    <CTAButton text="Prenota una visita" href="/prenota" />
                    <a
                      href="/cv-alessandro-federico.pdf"
                      download="CV-Dott-Alessandro-Federico.pdf"
                      className="btn btn-outline"
                    >
                      <Download strokeWidth={1.5} className="w-3.5 h-3.5" />
                      Scarica il CV
                    </a>
                  </div>
                </FadeIn>
              </div>

            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-azzurro-chiaro px-5 md:px-10" aria-label="La pelle, spia della salute">
          <Citazione>
            Le malattie della pelle sono la spia sul cruscotto di problemi interni. Prendersi
            cura solo di ciò che vediamo in superficie è come voler risolvere il problema nel
            motore facendo sparire la spia.
          </Citazione>
        </section>

        <section className="py-16 md:py-24 bg-white px-5 md:px-10" aria-label="La pelle, organo sentinella">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl leading-[1.15] mb-8 text-center md:text-left">
                La pelle, un organo sentinella
              </h2>
              <p className="text-base md:text-[17px] leading-[1.9] mb-6">
                La pelle è molto più di un rivestimento del corpo: è un organo sentinella.
                Attraverso discromie e altre anomalie, rileva squilibri e disturbi interni.
              </p>
              <p className="text-base md:text-[17px] leading-[1.9]">
                La pelle è l&apos;organo più esteso del corpo umano: ne ricopre l&apos;intera
                superficie, rappresenta circa il 16% del peso corporeo, riveste e protegge gli
                altri organi, svolge una funzione termoregolatrice e di ricezione degli stimoli
                esterni.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-azzurro-chiaro px-5 md:px-10" aria-label="Un approccio olistico">
          <Citazione>
            Ritengo necessario un approccio olistico al paziente che comprenda, oltre alla cura
            specialistica dermatologica, accorgimenti di tipo dietetico, comportamentale e
            psicologico. Non dimentico mai che la dermatologia nasce come branca della medicina
            interna.
          </Citazione>
        </section>

        <section className="py-16 md:py-20 bg-white px-5 md:px-10" aria-label="Qualifiche">
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
