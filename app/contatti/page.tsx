import type { Metadata } from "next"
import { Suspense } from "react"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import CTAButton from "@/components/ui/CTAButton"
import ContactForm from "@/components/ui/ContactForm"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"
import { siteConfig } from "@/data/siteConfig"

export const metadata: Metadata = {
  title: "Contatti e Prenotazione | Dr. Alessandro Federico — Dermatologo Milano",
  description:
    "Contatta lo studio dermatologico del Dr. Alessandro Federico a Milano. Prenota una visita dermatologica o un trattamento estetico.",
  alternates: { canonical: "https://www.alessandrofederico.it/contatti" },
  openGraph: {
    title: "Contatti | Dr. Alessandro Federico — Dermatologo Milano",
    description:
      "Scrivi al Dr. Alessandro Federico per prenotare una visita dermatologica o estetica a Milano.",
    url: "https://www.alessandrofederico.it/contatti",
  },
}

export default function ContattiPage() {
  return (
    <PageTransition>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.alessandrofederico.it" },
        { name: "Contatti", url: "https://www.alessandrofederico.it/contatti" },
      ]} />
      <main>

        {/* ── Hero + Form in un'unica sezione ampia ── */}
        <section
          className="relative overflow-hidden pt-24 md:pt-32 pb-0"
          style={{ background: "linear-gradient(160deg, #EEF6FA 0%, #F8FBFD 55%, #ffffff 100%)" }}
          aria-label="Contatta il Dr. Federico"
        >
          {/* Watermark logo — in alto a destra, svanisce nel bianco */}
          <div
            className="absolute -right-20 -top-10 w-[320px] h-[320px] md:w-[460px] md:h-[460px] pointer-events-none select-none"
            aria-hidden="true"
          >
            <Image
              src="/images/logo-dryouth-symbol.png"
              alt=""
              width={460}
              height={460}
              className="object-contain opacity-[0.055]"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-10">

            {/* Intestazione */}
            <div className="mb-12 md:mb-16 flex items-start justify-between gap-6">
              <div className="max-w-xl">
                <SectionLabel text="Contatti" />
                <FadeIn delay={0.1}>
                  <h1 className="font-heading text-4xl md:text-5xl text-text leading-[1.05] mt-3">
                    <TextReveal delay={0.2}>Scrivimi, rispondo personalmente.</TextReveal>
                  </h1>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="font-sans text-base text-muted leading-[1.85] max-w-md mt-5">
                    Per informazioni su trattamenti, prenotazioni o qualsiasi
                    altra domanda. Rispondo direttamente, entro 24 ore.
                  </p>
                </FadeIn>
              </div>
              <FadeIn delay={0.4} className="shrink-0 hidden md:flex items-center gap-3 pt-1">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white"
                  style={{
                    background: "linear-gradient(135deg, #4E8DA3, #84B3C8)",
                    boxShadow: "0 8px 28px rgba(122,174,201,0.28)",
                  }}
                >
                  <Mail strokeWidth={1.2} className="w-6 h-6" />
                </div>
              </FadeIn>
            </div>

            {/* Grid form + sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 lg:gap-12 pb-20 md:pb-28">

              {/* ── Form ── */}
              <FadeIn delay={0.15}>
                <div
                  className="rounded-3xl overflow-hidden"
                  style={{
                    background: "#ffffff",
                    boxShadow: "0 2px 40px rgba(61,122,151,0.09), 0 1px 4px rgba(61,122,151,0.06)",
                    border: "1px solid rgba(122,174,201,0.14)",
                  }}
                >
                  {/* Striscia accent in cima */}
                  <div
                    className="h-1 w-full"
                    style={{ background: "linear-gradient(90deg, #3D7A97, #7AAEC9)" }}
                  />
                  <div className="p-8 md:p-10">
                    <p className="font-sans text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: "#7AAEC9" }}>
                      Modulo di contatto
                    </p>
                    <h2 className="font-heading text-2xl text-text mb-8">
                      Invia un messaggio
                    </h2>
                    <Suspense>
                      <ContactForm />
                    </Suspense>
                  </div>
                </div>
              </FadeIn>

              {/* ── Sidebar info ── */}
              <div className="flex flex-col gap-5">

                {/* Card info contatti */}
                <FadeIn delay={0.25}>
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                      background: "#ffffff",
                      boxShadow: "0 2px 24px rgba(61,122,151,0.08)",
                      border: "1px solid rgba(122,174,201,0.14)",
                    }}
                  >
                    <div
                      className="px-6 py-4"
                      style={{ background: "linear-gradient(135deg, #EEF6FA, #F4F9FB)" }}
                    >
                      <p className="font-sans text-[9px] uppercase tracking-[0.2em]" style={{ color: "#3A8A9E" }}>
                        Informazioni
                      </p>
                    </div>
                    <address className="not-italic p-6 flex flex-col gap-5">
                      {siteConfig.phonePlain && (
                        <div className="flex items-start gap-3.5">
                          <div
                            className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center mt-0.5"
                            style={{ background: "rgba(122,174,201,0.1)", color: "#3A8A9E" }}
                          >
                            <Phone strokeWidth={1.4} className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className="font-sans text-[9px] uppercase tracking-[0.15em] text-muted mb-0.5">Telefono</p>
                            <a href={`tel:${siteConfig.phonePlain}`} className="font-sans text-sm text-text hover:text-[#3A8A9E] transition-colors duration-200">
                              {siteConfig.phone}
                            </a>
                          </div>
                        </div>
                      )}
                      <div className="flex items-start gap-3.5">
                        <div
                          className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center mt-0.5"
                          style={{ background: "rgba(122,174,201,0.1)", color: "#3A8A9E" }}
                        >
                          <Mail strokeWidth={1.4} className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="font-sans text-[9px] uppercase tracking-[0.15em] text-muted mb-0.5">Email</p>
                          <a href={`mailto:${siteConfig.email}`} className="font-sans text-sm text-text hover:text-[#3A8A9E] transition-colors duration-200">
                            {siteConfig.email}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3.5">
                        <div
                          className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center mt-0.5"
                          style={{ background: "rgba(122,174,201,0.1)", color: "#3A8A9E" }}
                        >
                          <MapPin strokeWidth={1.4} className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="font-sans text-[9px] uppercase tracking-[0.15em] text-muted mb-0.5">Indirizzo</p>
                          <p className="font-sans text-sm text-text">{siteConfig.address}, {siteConfig.city}</p>
                        </div>
                      </div>
                    </address>
                  </div>
                </FadeIn>

                {/* Card orari */}
                <FadeIn delay={0.35}>
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                      background: "#ffffff",
                      boxShadow: "0 2px 24px rgba(61,122,151,0.08)",
                      border: "1px solid rgba(122,174,201,0.14)",
                    }}
                  >
                    <div
                      className="px-6 py-4 flex items-center gap-2"
                      style={{ background: "linear-gradient(135deg, #EEF6FA, #F4F9FB)" }}
                    >
                      <Clock strokeWidth={1.4} className="w-3.5 h-3.5" style={{ color: "#3A8A9E" }} />
                      <p className="font-sans text-[9px] uppercase tracking-[0.2em]" style={{ color: "#3A8A9E" }}>
                        Orari
                      </p>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-col gap-3">
                        {siteConfig.orari.map((o) => (
                          <div
                            key={o.giorno}
                            className="flex items-center justify-between"
                            style={{ paddingBottom: "10px", borderBottom: "1px solid rgba(17,24,39,0.05)" }}
                          >
                            <span className="font-sans text-xs text-muted">{o.giorno}</span>
                            <span
                              className="font-sans text-xs font-medium"
                              style={{ color: o.ore === "Chiuso" ? "rgba(17,24,39,0.25)" : "#3A8A9E" }}
                            >
                              {o.ore}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Prenotazione rapida */}
                <FadeIn delay={0.45}>
                  <div
                    className="rounded-2xl p-6 text-center"
                    style={{
                      background: "linear-gradient(135deg, #5A93A6, #6D9FB2)",
                      boxShadow: "0 8px 28px rgba(61,122,151,0.22)",
                    }}
                  >
                    <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/60 mb-2">
                      Preferisci prenotare?
                    </p>
                    <p className="font-heading text-base text-white mb-4 leading-snug">
                      Prenota online in pochi secondi
                    </p>
                    <CTAButton text="Prenota ora" href="/prenota" inverted />
                  </div>
                </FadeIn>

              </div>
            </div>
          </div>
        </section>

        {/* ── CTA finale ── */}
        <section
          className="relative py-20 md:py-24 text-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #4A7F93, #5A93A6)" }}
          aria-label="Prenota una visita"
        >
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] pointer-events-none select-none" aria-hidden="true">
            <Image src="/images/logo-dryouth-symbol.png" alt="" width={400} height={400} className="object-contain brightness-0 invert opacity-[0.05]" />
          </div>
          <div className="relative z-10 max-w-xl mx-auto px-5 md:px-10">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl text-white leading-[1.1] mb-4">
                Scopri i trattamenti disponibili
              </h2>
              <p className="font-sans text-base text-white/65 leading-[1.8] mb-10 max-w-md mx-auto">
                Dermatologia clinica e medicina estetica — ogni trattamento
                inizia con un ascolto attento.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton text="Le specialità" href="/specialita" inverted />
                <CTAButton text="Chi sono" href="/chi-sono" inverted />
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
    </PageTransition>
  )
}
