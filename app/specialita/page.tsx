import type { Metadata } from "next"
import Image from "next/image"
import { macroAree } from "@/data/servizi"
import FadeIn from "@/components/ui/FadeIn"
import CTAButton from "@/components/ui/CTAButton"
import AreaIcon from "@/components/ui/AreaIcon"
import PageHero from "@/components/ui/PageHero"
import CTASection from "@/components/sections/CTASection"
import PageTransition from "@/components/providers/PageTransition"

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
      <main>
        <PageHero
          titolo="Quattro aree per la salute della pelle e dei capelli"
          testo="Dalla diagnosi clinica ai trattamenti estetici e dermochirurgici, con un approccio integrato e personalizzato per ogni paziente."
          percorso={[{ label: "Specialità", href: "/specialita" }]}
        >
          <nav aria-label="Vai alla macro-area" className="flex flex-wrap gap-2.5">
            {macroAree.map((area) => (
              <a
                key={area.id}
                href={`#${area.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[14px] text-blu-notte border border-transparent hover:border-blu-scuro transition-colors duration-300"
              >
                <AreaIcon icon={area.icon} className="w-4 h-4 text-blu-scuro" />
                {area.titolo}
              </a>
            ))}
          </nav>
        </PageHero>

        {macroAree.map((area, a) => (
          <section
            key={area.id}
            id={area.id}
            aria-label={area.titolo}
            className={`bg-white pt-12 md:pt-20 ${a === macroAree.length - 1 ? "pb-4" : ""}`}
          >
            <div className="container-site">
              <FadeIn>
                <div className="relative overflow-hidden rounded-[20px] md:rounded-[24px] bg-blu-scuro px-6 py-10 md:px-12 md:py-14">
                  <Image
                    src="/images/brand/simbolo-blu.png"
                    alt=""
                    width={700}
                    height={907}
                    aria-hidden="true"
                    className="absolute -right-6 top-1/2 -translate-y-1/2 w-[150px] md:w-[220px] h-auto opacity-30 pointer-events-none select-none"
                  />
                  <div className="relative z-10 flex flex-col sm:flex-row items-center gap-5 md:gap-7 text-center sm:text-left">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 border border-white/30 bg-white/10">
                      <AreaIcon icon={area.icon} className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="eyebrow text-[10.5px] text-white/75 mb-2">
                        {String(a + 1).padStart(2, "0")} · Macro-area
                      </p>
                      <h2 className="font-heading titolo-sezione text-white">{area.titolo}</h2>
                      <p className="text-[15px] md:text-base text-white/85 mt-2 max-w-xl leading-relaxed">
                        {area.descrizione}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <div className="md:px-4 lg:px-12">
                {area.voci.map((voce) => (
                  <div
                    key={voce.id}
                    id={voce.id}
                    className="py-12 md:py-16 border-b border-blu-notte/10 last:border-b-0"
                  >
                    <FadeIn>
                      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

                        <div className="text-center md:text-left">
                          <p className="eyebrow text-[10.5px] text-blu-scuro mb-3">{area.titolo}</p>
                          <h3 className="font-heading text-[26px] md:text-[32px] leading-tight mb-5">{voce.titolo}</h3>
                          {voce.descrizione && (
                            <p className="text-[15px] md:text-base leading-[1.8] mb-7 max-w-[520px] mx-auto md:mx-0">
                              {voce.descrizione}
                            </p>
                          )}
                          {voce.elenco && (
                            <ul className="mb-8 max-w-[520px] mx-auto md:mx-0 text-left" role="list">
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
                            <CTAButton text="Prenota una consulenza" href={`/prenota?area=${area.id}`} />
                          </div>
                        </div>

                        <div className="rounded-[20px] bg-white border border-brand-blu/45 p-7 md:p-9">
                          <p className="eyebrow text-[10.5px] text-blu-scuro mb-5">In dettaglio</p>
                          <ul className="space-y-3.5" role="list">
                            {voce.punti.map((punto) => (
                              <li key={punto} className="flex items-start gap-3">
                                <span className="mt-[8px] w-2 h-2 rounded-full shrink-0 bg-brand-blu" aria-hidden="true" />
                                <span className="text-[15px] leading-[1.7]">{punto}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </FadeIn>
                  </div>
                ))}
              </div>
            </div>
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
