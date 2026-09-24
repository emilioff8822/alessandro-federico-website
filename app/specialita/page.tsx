import type { Metadata } from "next"
import Image from "next/image"
import { macroAree } from "@/data/servizi"
import SectionLabel from "@/components/ui/SectionLabel"
import FadeIn from "@/components/ui/FadeIn"
import CTAButton from "@/components/ui/CTAButton"
import AreaIcon from "@/components/ui/AreaIcon"
import CTASection from "@/components/sections/CTASection"
import PageTransition from "@/components/providers/PageTransition"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"

export const metadata: Metadata = {
  title: "Specialità | Dermatologia, Medicina Estetica, Tricologia e Dermochirurgia",
  description:
    "Visita dermatologica, venereologia, mappatura dei nei, filler, biorivitalizzazione, tossina botulinica, tricologia, PRP e dermochirurgia. Le specialità del Dott. Alessandro Federico a Milano e Paola (CS).",
  alternates: { canonical: "https://www.alessandrofederico.it/specialita" },
  openGraph: {
    title: "Specialità | Dott. Alessandro Federico",
    description:
      "Dermatologia, Medicina Estetica, Tricologia e Dermochirurgia a Milano e Paola (CS).",
    url: "https://www.alessandrofederico.it/specialita",
  },
}

export default function SpecialitaPage() {
  return (
    <PageTransition>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.alessandrofederico.it" },
        { name: "Specialità", url: "https://www.alessandrofederico.it/specialita" },
      ]} />
      <main>

        <section className="relative py-20 md:py-28 bg-white overflow-hidden" aria-label="Specialità">
          <Image
            src="/images/brand/simbolo-blu.png"
            alt=""
            width={700}
            height={907}
            aria-hidden="true"
            className="absolute -right-16 -top-10 w-[260px] md:w-[380px] h-auto opacity-[0.12] pointer-events-none select-none"
          />
          <div className="relative mx-auto max-w-6xl px-5 md:px-10">
            <SectionLabel text="Le specialità" />
            <h1 className="font-heading text-4xl md:text-6xl leading-[1.08] mb-6 max-w-3xl">
              Quattro aree per la salute della pelle e dei capelli
            </h1>
            <p className="text-base md:text-lg leading-[1.8] max-w-2xl mb-10">
              Dalla diagnosi clinica ai trattamenti estetici e dermochirurgici,
              con un approccio integrato e personalizzato per ogni paziente.
            </p>
            <nav aria-label="Vai alla macro-area" className="flex flex-wrap gap-3">
              {macroAree.map((area) => (
                <a
                  key={area.id}
                  href={`#${area.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-blu px-5 py-2.5 text-[12px] eyebrow tracking-[0.14em] text-blu-notte hover:bg-azzurro-chiaro transition-colors duration-300"
                >
                  <AreaIcon icon={area.icon} className="w-4 h-4 text-blu-scuro" />
                  {area.titolo}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {macroAree.map((area) => (
          <section key={area.id} id={area.id} aria-label={area.titolo}>

            <div className="relative bg-blu-scuro py-16 md:py-20 px-5 md:px-10 overflow-hidden">
              <Image
                src="/images/brand/simbolo-blu.png"
                alt=""
                width={700}
                height={907}
                aria-hidden="true"
                className="absolute -right-6 top-1/2 -translate-y-1/2 w-[170px] md:w-[240px] h-auto opacity-30 pointer-events-none select-none"
              />
              <div className="relative z-10 mx-auto max-w-6xl flex flex-col sm:flex-row items-center sm:items-center gap-5 text-center sm:text-left">
                <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 border border-white/30 bg-white/10">
                  <AreaIcon icon={area.icon} className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl text-white leading-tight">
                    {area.titolo}
                  </h2>
                  <p className="text-sm md:text-base text-white/85 mt-2 max-w-xl leading-relaxed">
                    {area.descrizione}
                  </p>
                </div>
              </div>
            </div>

            {area.voci.map((voce, index) => (
              <div
                key={voce.id}
                id={voce.id}
                className={index % 2 === 0 ? "bg-white" : "bg-azzurro-chiaro"}
              >
                <div className="mx-auto max-w-6xl px-5 md:px-10 py-14 md:py-20">
                  <FadeIn>
                    <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">

                      <div className="flex-1 w-full text-center md:text-left">
                        <p className="eyebrow text-[10.5px] text-blu-scuro mb-3">{area.titolo}</p>
                        <h3 className="font-heading text-2xl md:text-[30px] mb-5">{voce.titolo}</h3>
                        {voce.descrizione && (
                          <p className="text-[15px] leading-[1.85] mb-7 max-w-md mx-auto md:mx-0">
                            {voce.descrizione}
                          </p>
                        )}
                        {voce.elenco && (
                          <ul className="mb-8 max-w-md mx-auto md:mx-0 text-left" role="list">
                            {voce.elenco.map((e) => (
                              <li
                                key={e.id}
                                id={e.id}
                                className="flex items-center gap-4 py-3.5 border-b border-blu-notte/10 last:border-b-0"
                              >
                                <span className="w-5 h-px bg-brand-blu shrink-0" aria-hidden="true" />
                                <span className="text-[16px] text-blu-notte">{e.label}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        <div className="flex justify-center md:justify-start">
                          <CTAButton text="Prenota una consulenza" href="/prenota" />
                        </div>
                      </div>

                      <div className="flex-1 w-full">
                        <div className="rounded-2xl bg-white border border-brand-blu/40 p-7 md:p-8 shadow-[0_2px_20px_rgba(30,53,80,0.05)]">
                          <p className="eyebrow text-[10.5px] text-blu-scuro mb-5">In dettaglio</p>
                          <ul className="space-y-3.5" role="list">
                            {voce.punti.map((punto) => (
                              <li key={punto} className="flex items-start gap-3">
                                <span
                                  className="mt-[8px] w-2 h-2 rounded-full shrink-0 bg-brand-blu"
                                  aria-hidden="true"
                                />
                                <span className="text-[15px] leading-[1.7]">{punto}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                    </div>
                  </FadeIn>
                </div>
              </div>
            ))}
          </section>
        ))}

        <CTASection
          eyebrow="Inizia il tuo percorso"
          titolo="Hai trovato quello che cerchi?"
          testo="Contatta lo studio per fissare una prima consulenza e scoprire il percorso più adatto a te."
        />

      </main>
    </PageTransition>
  )
}
