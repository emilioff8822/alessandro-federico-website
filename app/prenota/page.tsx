import type { Metadata } from "next"
import Image from "next/image"
import { CalendarCheck, Phone, Clock, Mail, MapPin } from "lucide-react"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import Divider from "@/components/ui/Divider"
import CTAButton from "@/components/ui/CTAButton"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"
import { siteConfig } from "@/data/siteConfig"

export const metadata: Metadata = {
  title: "Prenota una Visita | Dr. Alessandro Federico — Dermatologo Milano",
  description:
    "Prenota una visita con il Dr. Alessandro Federico. Dermatologo e medico estetico a Milano. Contattami direttamente per fissare un appuntamento.",
  alternates: { canonical: "https://www.alessandrofederico.it/prenota" },
  openGraph: {
    title: "Prenota una Visita | Dr. Alessandro Federico — Dermatologo Milano",
    description:
      "Prenota la tua visita dermatologica o estetica con il Dr. Alessandro Federico a Milano.",
    url: "https://www.alessandrofederico.it/prenota",
  },
}

const centri = [
  {
    nome: "Centro Medico Santagostino",
    descrizione: "Il Dr. Federico visita nelle sedi milanesi del Centro Medico Santagostino, con disponibilità in tempo reale.",
    badge: "4.7/5 · 581 recensioni",
    gradiente: "linear-gradient(135deg, #7EC4D4 0%, #93D0DE 100%)",
    accent: "#3A8A9E",
    accentTesto: "#2D6E7E",
    bgIcona: "rgba(58,138,158,0.10)",
    border: "rgba(58,138,158,0.14)",
  },
  {
    nome: "iDoctors",
    descrizione: "Profilo verificato su iDoctors. Consulta le prestazioni disponibili e le valutazioni dei pazienti.",
    badge: "10/10 · 21 recensioni",
    gradiente: "linear-gradient(135deg, #82A8CC 0%, #97BBD8 100%)",
    accent: "#4A6FA5",
    accentTesto: "#3B5A8A",
    bgIcona: "rgba(74,111,165,0.10)",
    border: "rgba(74,111,165,0.14)",
  },
  {
    nome: "Cup Solidale",
    descrizione: "Presente su Cup Solidale presso il Centro Medico Italiano di Milano.",
    badge: "Centro Medico Italiano · Milano",
    gradiente: "linear-gradient(135deg, #72B6C6 0%, #87C4D2 100%)",
    accent: "#2D7A8A",
    accentTesto: "#1E5F6E",
    bgIcona: "rgba(45,122,138,0.10)",
    border: "rgba(45,122,138,0.14)",
  },
]

export default function PrenotaPage() {
  return (
    <PageTransition>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.alessandrofederico.it" },
        { name: "Prenota", url: "https://www.alessandrofederico.it/prenota" },
      ]} />
      <main>

        {/* ── Hero ── */}
        <section className="py-20 md:py-28 bg-white" aria-label="Prenota una visita">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <div className="flex flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <SectionLabel text="Prenotazioni" />
                <FadeIn delay={0.1}>
                  <h1 className="font-heading text-4xl md:text-5xl text-text leading-[1.05] max-w-xl">
                    <TextReveal delay={0.2}>Prenota la tua visita.</TextReveal>
                  </h1>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="font-sans text-base text-muted leading-[1.85] max-w-lg mt-6">
                    Per prenotare una visita, contattami direttamente tramite il modulo di contatto
                    o telefonicamente. Ogni visita inizia con un ascolto attento — la diagnosi precede
                    sempre il trattamento.
                  </p>
                </FadeIn>
              </div>
              <FadeIn delay={0.4} className="shrink-0 hidden sm:block">
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white"
                  style={{
                    background: "linear-gradient(135deg, #4E8DA3, #84B3C8)",
                    boxShadow: "0 8px 28px rgba(122,174,201,0.3)",
                  }}
                >
                  <CalendarCheck strokeWidth={1.2} className="w-6 h-6 md:w-7 md:h-7" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── Centri dove visita — card grandi ── */}
        <section className="py-16 md:py-24" style={{ background: "#F4F9FB" }} aria-label="Dove visita il dottore">
          <div className="mx-auto max-w-6xl px-5 md:px-10">

            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl text-text leading-[1.1] mb-3 text-center">
                Dove visito
              </h2>
              <p className="font-sans text-sm text-muted text-center mb-12 max-w-md mx-auto leading-[1.8]">
                Sono presente in diversi centri medici a Milano.
                Per prenotare, contattami direttamente.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {centri.map((c, i) => (
                <FadeIn key={c.nome} delay={i * 0.08}>
                  <div
                    className="flex flex-col h-full rounded-2xl border overflow-hidden"
                    style={{
                      background: "#FFFFFF",
                      borderColor: c.border,
                      boxShadow: "0 4px 20px rgba(17,24,39,0.05)",
                    }}
                  >
                    <div
                      className="w-full px-6 py-4 flex items-center gap-3"
                      style={{ background: c.gradiente }}
                    >
                      <MapPin strokeWidth={1.3} className="w-4 h-4 text-white/80" />
                      <span className="font-sans text-[9px] uppercase tracking-[0.18em] text-white/80">
                        Centro convenzionato
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-heading text-xl mb-3" style={{ color: c.accentTesto }}>{c.nome}</h3>
                      <p className="font-sans text-sm text-muted leading-[1.75] flex-1 mb-4">
                        {c.descrizione}
                      </p>
                      <div
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full self-start"
                        style={{ background: c.bgIcona }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: c.accent }} />
                        <span className="font-sans text-[10px] font-medium" style={{ color: c.accent }}>
                          {c.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Contattami + Orari — layout bilanciato ── */}
        <section className="py-16 md:py-20 bg-white" aria-label="Contatta e prenota">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

              {/* CTA grande — 3 colonne */}
              <FadeIn className="md:col-span-3">
                <div
                  className="rounded-2xl overflow-hidden h-full"
                  style={{
                    background: "linear-gradient(135deg, #5A93A6 0%, #6D9FB2 100%)",
                    boxShadow: "0 8px 40px rgba(90,147,166,0.2)",
                  }}
                >
                  <div className="p-8 md:p-10 flex flex-col justify-center h-full">
                    <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/50 mb-4">
                      Prenota direttamente
                    </p>
                    <h2 className="font-heading text-2xl md:text-3xl text-white mb-4 leading-[1.15]">
                      Contattami per<br className="hidden md:block" /> prenotare la tua visita
                    </h2>
                    <p className="font-sans text-sm text-white/65 leading-[1.85] mb-8 max-w-md">
                      Compila il modulo di contatto indicando il tipo di visita e la tua
                      disponibilità. Rispondo personalmente entro 24 ore.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <CTAButton text="Scrivimi" href="/contatti" inverted />
                      {siteConfig.phonePlain && (
                        <a
                          href={`tel:${siteConfig.phonePlain}`}
                          className="inline-flex items-center justify-center gap-2 font-sans text-[13px] uppercase tracking-[0.15em] font-medium px-7 py-3.5 border-[1.5px] border-white/30 text-white/80 transition-all duration-300 hover:bg-white hover:text-[#5A93A6] hover:border-white"
                        >
                          <Phone strokeWidth={1.5} className="w-3.5 h-3.5" />
                          Chiama
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Orari — 2 colonne */}
              <FadeIn delay={0.15} className="md:col-span-2">
                <div
                  className="rounded-2xl border h-full flex flex-col"
                  style={{
                    background: "#FFFFFF",
                    borderColor: "rgba(122,174,201,0.18)",
                    boxShadow: "0 4px 24px rgba(17,24,39,0.05)",
                  }}
                >
                  <div className="px-6 py-4 flex items-center gap-3 border-b" style={{ borderColor: "rgba(17,24,39,0.06)" }}>
                    <Clock strokeWidth={1.3} className="w-4 h-4 text-accent" />
                    <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-muted/60">
                      Orari dello studio
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-center">
                    <div className="flex flex-col gap-3">
                      {siteConfig.orari.map((o) => (
                        <div
                          key={o.giorno}
                          className="flex items-center justify-between"
                        >
                          <span className="font-sans text-sm text-muted">{o.giorno}</span>
                          <span
                            className="font-sans text-sm font-medium"
                            style={{ color: o.ore === "Chiuso" ? "rgba(17,24,39,0.25)" : "#5A93A6" }}
                          >
                            {o.ore}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* ── CTA finale ── */}
        <section
          className="relative py-20 md:py-24 text-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #4A7F93, #5A93A6)" }}
          aria-label="Scopri le specialità"
        >
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] pointer-events-none select-none" aria-hidden="true">
            <Image src="/images/logo-dryouth-symbol.png" alt="" width={400} height={400} className="object-contain brightness-0 invert opacity-[0.05]" />
          </div>
          <div className="relative z-10 max-w-xl mx-auto px-5 md:px-10">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl text-white leading-[1.1] mb-4">
                Prima visita?
              </h2>
              <p className="font-sans text-base text-white/65 leading-[1.8] mb-10 max-w-md mx-auto">
                La prima consulenza è un momento di ascolto e valutazione.
                Porta con te eventuali esami o documentazione medica precedente.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton text="Scopri le specialità" href="/specialita" inverted />
                <CTAButton text="Chi sono" href="/chi-sono" inverted />
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
    </PageTransition>
  )
}
