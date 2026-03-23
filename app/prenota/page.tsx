import type { Metadata } from "next"
import { CalendarCheck, Phone, Clock, Mail, ExternalLink } from "lucide-react"
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
    "Prenota online una visita con il Dr. Alessandro Federico su iDoctors, Santagostino o Cup Solidale. Dermatologo a Milano.",
  alternates: { canonical: "https://www.alessandrofederico.it/prenota" },
  openGraph: {
    title: "Prenota una Visita | Dr. Alessandro Federico — Dermatologo Milano",
    description:
      "Prenota la tua visita dermatologica o estetica con il Dr. Alessandro Federico a Milano.",
    url: "https://www.alessandrofederico.it/prenota",
  },
}

const piattaforme = [
  {
    nome: "Santagostino",
    descrizione: "Il Dr. Federico visita nelle sedi milanesi del Centro Medico Santagostino. Prenota con disponibilità in tempo reale direttamente dal portale.",
    url: "https://www.santagostino.it/it/persone/alessandro-federico",
    badge: "4.7/5 · 581 recensioni",
    etichetta: "Prenota online",
    gradiente: "linear-gradient(135deg, #7EC4D4 0%, #93D0DE 100%)",
    accent: "#3A8A9E",
    accentTesto: "#2D6E7E",
    bg: "#F4F9FB",
    bgIcona: "rgba(58,138,158,0.10)",
    border: "rgba(58,138,158,0.14)",
    shadow: "rgba(58,138,158,0.12)",
  },
  {
    nome: "iDoctors",
    descrizione: "Visita il profilo del Dr. Federico su iDoctors, scegli la prestazione e prenota il tuo appuntamento in pochi secondi.",
    url: "https://www.idoctors.it/medico/16985/0",
    badge: "10/10 · 21 recensioni",
    etichetta: "Prenota online",
    gradiente: "linear-gradient(135deg, #82A8CC 0%, #97BBD8 100%)",
    accent: "#4A6FA5",
    accentTesto: "#3B5A8A",
    bg: "#F4F6FB",
    bgIcona: "rgba(74,111,165,0.10)",
    border: "rgba(74,111,165,0.14)",
    shadow: "rgba(74,111,165,0.12)",
  },
  {
    nome: "Cup Solidale",
    descrizione: "Confronta disponibilità e prezzi in tempo reale su Cup Solidale e prenota la visita più adatta alle tue esigenze.",
    url: "https://www.cupsolidale.it/medico/e53e02e3d33ac1ab1a73528e01addc47",
    badge: "Centro Medico Italiano · Milano",
    etichetta: "Prenota online",
    gradiente: "linear-gradient(135deg, #72B6C6 0%, #87C4D2 100%)",
    accent: "#2D7A8A",
    accentTesto: "#1E5F6E",
    bg: "#EBF4F8",
    bgIcona: "rgba(45,122,138,0.10)",
    border: "rgba(45,122,138,0.14)",
    shadow: "rgba(45,122,138,0.12)",
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
                    Scegli la piattaforma che preferisci e prenota online in pochi secondi.
                    Ogni visita inizia con un ascolto attento — la diagnosi precede sempre il trattamento.
                  </p>
                </FadeIn>
              </div>
              <FadeIn delay={0.4} className="shrink-0 hidden sm:block">
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white"
                  style={{
                    background: "linear-gradient(135deg, #3D7A97, #7AAEC9)",
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

        {/* ── Piattaforme di prenotazione ── */}
        <section className="py-16 md:py-24" style={{ background: "#F4F9FB" }} aria-label="Piattaforme di prenotazione">
          <div className="mx-auto max-w-6xl px-5 md:px-10">

            {/* 3 card piattaforme */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {piattaforme.map((p, i) => (
                <FadeIn key={p.nome} delay={i * 0.08}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col h-full rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(17,24,39,0.09)]"
                    style={{
                      background: "#FFFFFF",
                      borderColor: p.border,
                      boxShadow: "0 4px 20px rgba(17,24,39,0.05)",
                    }}
                  >
                    {/* Banner colorato — stesso sistema di Specialità */}
                    <div
                      className="w-full px-7 py-5 flex items-center justify-between"
                      style={{ background: p.gradiente }}
                    >
                      <div className="flex items-center gap-3">
                        <CalendarCheck strokeWidth={1.3} className="w-4 h-4 text-white/80" />
                        <span className="font-sans text-[9px] uppercase tracking-[0.18em] text-white/80">
                          {p.etichetta}
                        </span>
                      </div>
                      <ExternalLink
                        strokeWidth={1.4}
                        className="w-3.5 h-3.5 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      />
                    </div>

                    {/* Corpo card */}
                    <div className="p-7 flex flex-col flex-1">
                      <h2 className="font-heading text-2xl mb-3" style={{ color: p.accentTesto }}>{p.nome}</h2>
                      <p className="font-sans text-sm text-muted leading-[1.8] flex-1 mb-5">
                        {p.descrizione}
                      </p>

                      {/* Badge */}
                      <div
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full self-start"
                        style={{ background: p.bgIcona }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: p.accent }} />
                        <span className="font-sans text-[10px] font-medium" style={{ color: p.accent }}>
                          {p.badge}
                        </span>
                      </div>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>

            {/* Card contatti + orari */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Contattami */}
              <FadeIn delay={0.25}>
                <div
                  className="rounded-2xl overflow-hidden border flex flex-col h-full"
                  style={{
                    background: "#FFFFFF",
                    borderColor: "rgba(61,122,151,0.18)",
                    boxShadow: "0 4px 20px rgba(17,24,39,0.05)",
                  }}
                >
                  {/* Banner */}
                  <div
                    className="px-7 py-5 flex items-center gap-3"
                    style={{ background: "linear-gradient(135deg, #7AAFC4 0%, #8FBDD0 100%)" }}
                  >
                    <Mail strokeWidth={1.3} className="w-4 h-4 text-white/80" />
                    <span className="font-sans text-[9px] uppercase tracking-[0.18em] text-white/80">
                      Contattami
                    </span>
                  </div>
                  <div className="p-7 flex flex-col flex-1 gap-4">
                    <h3 className="font-heading text-2xl" style={{ color: "#2A5F7A" }}>Preferisci scrivere?</h3>
                    <p className="font-sans text-sm text-muted leading-[1.8] flex-1">
                      Compila il modulo di contatto indicando il tipo di visita e la tua
                      disponibilità. Rispondo personalmente entro 24 ore.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 pt-1">
                      <CTAButton text="Scrivimi" href="/contatti" />
                      <a
                        href={`tel:${siteConfig.phonePlain}`}
                        className="inline-flex items-center justify-center gap-2 font-sans text-[13px] uppercase tracking-[0.15em] font-medium px-6 py-3 border rounded-lg transition-all duration-300 hover:border-[#3A8A9E] hover:text-[#3A8A9E]"
                        style={{ borderColor: "rgba(17,24,39,0.15)", color: "rgba(17,24,39,0.5)" }}
                      >
                        <Phone strokeWidth={1.5} className="w-3.5 h-3.5" />
                        Chiama
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Orari */}
              <FadeIn delay={0.32}>
                <div
                  className="rounded-2xl overflow-hidden border flex flex-col h-full"
                  style={{
                    background: "#FFFFFF",
                    borderColor: "rgba(122,174,201,0.18)",
                    boxShadow: "0 4px 20px rgba(17,24,39,0.05)",
                  }}
                >
                  {/* Banner */}
                  <div
                    className="px-7 py-5 flex items-center gap-3"
                    style={{ background: "linear-gradient(135deg, #8ABFD0 0%, #9DCBDA 100%)" }}
                  >
                    <Clock strokeWidth={1.3} className="w-4 h-4 text-white/80" />
                    <span className="font-sans text-[9px] uppercase tracking-[0.18em] text-white/80">
                      Orari dello studio
                    </span>
                  </div>
                  <div className="p-7 flex-1">
                    <h3 className="font-heading text-xl text-text mb-4">Orari dello studio</h3>
                    <div className="flex flex-col gap-2.5">
                      {siteConfig.orari.map((o) => (
                        <div
                          key={o.giorno}
                          className="flex items-center justify-between pb-2.5 border-b last:border-b-0"
                          style={{ borderColor: "rgba(17,24,39,0.06)" }}
                        >
                          <span className="font-sans text-xs text-muted">{o.giorno}</span>
                          <span
                            className="font-sans text-xs font-medium"
                            style={{ color: o.ore === "Chiuso" ? "rgba(17,24,39,0.28)" : "#3D7A97" }}
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
          className="py-20 md:py-24 text-center"
          style={{ background: "linear-gradient(135deg, #2A5F7A, #3D7A97)" }}
          aria-label="Scopri le specialità"
        >
          <div className="max-w-xl mx-auto px-5 md:px-10">
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
