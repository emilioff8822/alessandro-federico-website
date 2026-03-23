import type { Metadata } from "next"
import { Activity, Stethoscope, Sparkles } from "lucide-react"
import { specialita } from "@/data/servizi"
import SectionLabel from "@/components/ui/SectionLabel"
import FadeIn from "@/components/ui/FadeIn"
import CTAButton from "@/components/ui/CTAButton"
import PageTransition from "@/components/providers/PageTransition"
import Divider from "@/components/ui/Divider"

export const metadata: Metadata = {
  title: "Specialità",
  description:
    "Dermatologia Clinica e Medicina Estetica: scopri tutti i trattamenti del Dr. Alessandro Federico. Filler, botox, peeling, tricologia, dermatoscopia e molto altro.",
  alternates: { canonical: "https://www.alessandrofederico.it/specialita" },
}

const macroIcons = {
  dermatologia: <Stethoscope strokeWidth={1.2} className="w-8 h-8 text-white" />,
  estetica: <Sparkles strokeWidth={1.2} className="w-8 h-8 text-white" />,
}

export default function SpecialitaPage() {
  return (
    <PageTransition>
      <main>

        {/* ── Hero ── */}
        <section className="py-20 md:py-28" aria-label="Specialità">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <div className="flex items-start justify-between">
              <div className="max-w-2xl">
                <SectionLabel text="Le specialità" />
                <h1 className="font-heading text-5xl md:text-6xl text-text leading-[1.05] mb-6">
                  Dermatologia e<br />Medicina Estetica
                </h1>
                <p className="font-sans text-base md:text-lg text-muted leading-[1.8] max-w-lg">
                  Due aree di eccellenza per la cura della pelle: dalla diagnosi clinica
                  ai trattamenti estetici più avanzati, con un approccio integrato
                  e personalizzato per ogni paziente.
                </p>
              </div>
              {/* Icona hero — solo desktop */}
              <div
                className="hidden md:flex w-20 h-20 rounded-xl items-center justify-center flex-shrink-0 mt-2"
                style={{
                  background: "linear-gradient(135deg, #3D7A97, #7AAEC9)",
                  boxShadow: "0 8px 32px rgba(122,174,201,0.35)",
                }}
                aria-hidden="true"
              >
                <Activity strokeWidth={1.2} className="w-9 h-9 text-white" />
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── Sezioni macro-area ── */}
        {specialita.map((area, areaIndex) => (
          <section
            key={area.id}
            id={area.id}
            className="py-20 md:py-28"
            style={{ background: areaIndex % 2 === 1 ? "var(--color-surface)" : undefined }}
            aria-label={area.titolo}
          >
            <div className="mx-auto max-w-6xl px-5 md:px-10">

              {/* Header macro-area */}
              <FadeIn>
                <div className="flex items-center gap-5 mb-16">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #3D7A97, #7AAEC9)",
                      boxShadow: "0 4px 18px rgba(122,174,201,0.3)",
                    }}
                  >
                    {macroIcons[area.icon as keyof typeof macroIcons]}
                  </div>
                  <div>
                    <h2 className="font-heading text-3xl md:text-4xl text-text">
                      {area.titolo}
                    </h2>
                    <p className="font-sans text-sm text-muted mt-1">{area.descrizione}</p>
                  </div>
                </div>
              </FadeIn>

              {/* Sotto-servizi */}
              <div className="space-y-16 md:space-y-20">
                {area.dettagli.map((servizio, index) => (
                  <FadeIn key={servizio.id} delay={index * 0.05}>
                    <div
                      id={servizio.id}
                      className={`flex flex-col ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      } gap-10 md:gap-16 items-start`}
                    >
                      {/* Testo */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                          <div className="w-3 h-px bg-accent" />
                          <span className="font-sans text-xs uppercase tracking-[0.15em] text-accent">
                            {area.titolo}
                          </span>
                        </div>
                        <h3 className="font-heading text-2xl md:text-3xl text-text mb-4">
                          {servizio.titolo}
                        </h3>
                        <p className="font-sans text-base text-muted leading-[1.8] mb-6 max-w-lg mx-auto md:mx-0">
                          {servizio.descrizione}
                        </p>
                        <div className="flex justify-center md:justify-start">
                          <CTAButton
                            text="Prenota una consulenza"
                            href={`/contatti?area=${area.id}`}
                          />
                        </div>
                      </div>

                      {/* Punti */}
                      <div className="flex-1 w-full">
                        <div className="rounded-2xl border border-border bg-white p-7 md:p-8">
                          <p className="font-sans text-xs uppercase tracking-[0.15em] text-faint mb-5">
                            In questo percorso
                          </p>
                          <ul className="space-y-3">
                            {servizio.punti.map((punto) => (
                              <li key={punto} className="flex items-start gap-3">
                                <span
                                  className="mt-[7px] w-2 h-2 rounded-full flex-shrink-0"
                                  style={{ background: "var(--color-accent)" }}
                                  aria-hidden="true"
                                />
                                <span className="font-sans text-sm text-text leading-[1.7]">
                                  {punto}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Separatore tra sotto-servizi */}
                    {index < area.dettagli.length - 1 && (
                      <div className="mt-16 md:mt-20">
                        <Divider />
                      </div>
                    )}
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ── CTA finale ── */}
        <section
          className="py-20 md:py-28 text-center"
          style={{ background: "linear-gradient(135deg, #2A5F7A, #3D7A97)" }}
          aria-label="Prenota una visita"
        >
          <div className="max-w-xl mx-auto px-5 md:px-10">
            <FadeIn>
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
                Hai trovato quello che cerchi?
              </h2>
              <p className="font-sans text-base text-white/65 leading-[1.8] mb-10">
                Contattaci per fissare una prima consulenza e scoprire
                il percorso più adatto a te.
              </p>
              <CTAButton text="Prenota ora" href="/prenota" inverted />
            </FadeIn>
          </div>
        </section>

      </main>
    </PageTransition>
  )
}
