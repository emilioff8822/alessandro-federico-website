import type { Metadata } from "next"
import Image from "next/image"
import { Activity, Stethoscope, Sparkles } from "lucide-react"
import { specialita } from "@/data/servizi"
import SectionLabel from "@/components/ui/SectionLabel"
import FadeIn from "@/components/ui/FadeIn"
import CTAButton from "@/components/ui/CTAButton"
import PageTransition from "@/components/providers/PageTransition"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"

export const metadata: Metadata = {
  title: "Specialità | Dermatologia e Medicina Estetica — Dr. Federico Milano",
  description:
    "Dermatologia clinica, tricologia, dermatoscopia, filler, botox, peeling e mesoterapia. Tutti i servizi del Dr. Alessandro Federico a Milano.",
  alternates: { canonical: "https://www.alessandrofederico.it/specialita" },
  openGraph: {
    title: "Specialità | Dermatologia e Medicina Estetica — Dr. Federico Milano",
    description:
      "Tutti i trattamenti dermatologici e di medicina estetica del Dr. Alessandro Federico a Milano.",
    url: "https://www.alessandrofederico.it/specialita",
  },
}

const areaThemes = {
  dermatologia: {
    bannerGradient: "linear-gradient(135deg, #4D9AAD, #62ADBE)",
    accent: "#4D9AAD",
    accentText: "#3D7E8E",
    bgLight: "#F5FAFB",
    bgMedium: "#EAF3F6",
    icon: <Stethoscope strokeWidth={1.2} className="w-7 h-7 text-white" />,
    label: "Dermatologia",
    buttonColor: {
      default: "#4D9AAD",
      hover: "#3D7E8E",
      active: "#62ADBE",
      shadowRgb: "77, 154, 173",
    },
  },
  "medicina-estetica": {
    bannerGradient: "linear-gradient(135deg, #5B7EAE, #6E91BF)",
    accent: "#5B7EAE",
    accentText: "#4A6893",
    bgLight: "#F5F7FB",
    bgMedium: "#ECF0F6",
    icon: <Sparkles strokeWidth={1.2} className="w-7 h-7 text-white" />,
    label: "Medicina Estetica",
    buttonColor: {
      default: "#5B7EAE",
      hover: "#4A6893",
      active: "#6E91BF",
      shadowRgb: "91, 126, 174",
    },
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

        {/* ── Hero ── */}
        <section className="py-20 md:py-28 bg-white" aria-label="Specialità">
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
              <div
                className="hidden md:flex w-20 h-20 rounded-xl items-center justify-center flex-shrink-0 mt-2"
                style={{
                  background: "linear-gradient(135deg, #4E8DA3, #84B3C8)",
                  boxShadow: "0 8px 32px rgba(122,174,201,0.35)",
                }}
                aria-hidden="true"
              >
                <Activity strokeWidth={1.2} className="w-9 h-9 text-white" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Macro-aree ── */}
        {specialita.map((area, areaIndex) => {
          const theme = areaThemes[area.id as keyof typeof areaThemes]

          return (
            <section key={area.id} id={area.id} aria-label={area.titolo}>

              {/* Separatore tra le due macro-aree */}
              {areaIndex > 0 && (
                <div className="py-12 md:py-16 bg-white flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-[#D1D5DB]" />
                    <span className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] font-medium font-sans">
                      {theme.label}
                    </span>
                    <div className="w-12 h-px bg-[#D1D5DB]" />
                  </div>
                </div>
              )}

              {/* Banner macro-area */}
              <div
                className="relative py-16 md:py-20 px-5 md:px-10 overflow-hidden"
                style={{ background: theme.bannerGradient }}
              >
                {/* Logo watermark — sfondo decorativo nel banner */}
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[280px] md:h-[280px] pointer-events-none select-none" aria-hidden="true">
                  <Image src="/images/logo-dryouth-symbol.png" alt="" width={280} height={280} className="object-contain brightness-0 invert opacity-[0.06]" />
                </div>
                <div className="relative z-10 mx-auto max-w-6xl flex items-center gap-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/15 backdrop-blur-sm">
                    {theme.icon}
                  </div>
                  <div>
                    <h2 className="font-heading text-3xl md:text-4xl text-white leading-tight">
                      {area.titolo}
                    </h2>
                    <p className="font-sans text-sm md:text-base text-white/75 mt-2 max-w-md leading-relaxed">
                      {area.descrizione}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sotto-servizi — scacchiera bgLight / bgMedium */}
              {area.dettagli.map((servizio, index) => (
                <div
                  key={servizio.id}
                  id={servizio.id}
                  className="border-b border-[rgba(17,24,39,0.05)] last:border-b-0"
                  style={{
                    backgroundColor: index % 2 === 0 ? theme.bgLight : theme.bgMedium,
                  }}
                >
                  <div className="mx-auto max-w-6xl px-5 md:px-10 py-14 md:py-20">
                    <FadeIn>
                      <div
                        className={`flex flex-col ${
                          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        } gap-8 md:gap-14 items-start`}
                      >
                        {/* Testo */}
                        <div className="flex-1 text-center md:text-left">
                          {/* Linea accent */}
                          <div
                            className="w-8 h-0.5 mb-4 mx-auto md:mx-0"
                            style={{ backgroundColor: theme.accent, opacity: 0.5 }}
                          />
                          {/* Label area — breadcrumb visivo */}
                          <span
                            className="font-sans text-[10px] uppercase tracking-[0.18em] font-medium"
                            style={{ color: theme.accentText }}
                          >
                            {theme.label}
                          </span>
                          <h3 className="font-heading text-2xl md:text-[28px] text-text mb-4 mt-2">
                            {servizio.titolo}
                          </h3>
                          <p className="font-sans text-[15px] text-muted leading-[1.85] mb-8 max-w-md mx-auto md:mx-0">
                            {servizio.descrizione}
                          </p>
                            <div className="flex justify-center md:justify-start">
                              <CTAButton
                                text="Prenota una consulenza"
                                href={`/contatti?area=${area.id}`}
                                customColor={theme.buttonColor}
                              />
                            </div>
                        </div>

                        {/* Card punti */}
                        <div className="flex-1 w-full">
                          <div className="rounded-xl bg-white border border-[rgba(17,24,39,0.06)] p-6 md:p-7 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                            <ul className="space-y-3.5">
                              {servizio.punti.map((punto) => (
                                <li key={punto} className="flex items-start gap-3">
                                  <span
                                    className="mt-[7px] w-2 h-2 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: theme.accent }}
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
                    </FadeIn>
                  </div>
                </div>
              ))}
            </section>
          )
        })}

        {/* ── CTA finale ── */}
        <section
          className="relative py-20 md:py-28 text-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #4A7F93, #5A93A6)" }}
          aria-label="Prenota una visita"
        >
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[420px] md:h-[420px] pointer-events-none select-none" aria-hidden="true">
            <Image src="/images/logo-dryouth-symbol.png" alt="" width={420} height={420} className="object-contain brightness-0 invert opacity-[0.05]" />
          </div>
          <div className="absolute -right-16 bottom-2 w-[180px] h-[180px] md:w-[260px] md:h-[260px] pointer-events-none select-none" aria-hidden="true">
            <Image src="/images/logo-dryouth-transparent.png" alt="" width={260} height={260} className="object-contain brightness-0 invert opacity-[0.04]" />
          </div>
          <div className="relative z-10 max-w-xl mx-auto px-5 md:px-10">
            <FadeIn>
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-white/50 mb-6">
                Inizia il tuo percorso
              </p>
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
                Hai trovato quello che cerchi?
              </h2>
              <p className="font-sans text-base text-white/65 leading-[1.8] mb-10 max-w-md mx-auto">
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
