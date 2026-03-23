import type { Metadata } from "next"
import { Suspense } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import Divider from "@/components/ui/Divider"
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

const infoContatti = [
  {
    icon: <Phone strokeWidth={1.4} className="w-4 h-4" />,
    label: "Telefono",
    valore: siteConfig.phone,
    href: `tel:${siteConfig.phonePlain}`,
  },
  {
    icon: <Mail strokeWidth={1.4} className="w-4 h-4" />,
    label: "Email",
    valore: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: <MapPin strokeWidth={1.4} className="w-4 h-4" />,
    label: "Indirizzo",
    valore: `${siteConfig.address}, ${siteConfig.city}`,
    href: undefined,
  },
]

export default function ContattiPage() {
  return (
    <PageTransition>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.alessandrofederico.it" },
        { name: "Contatti", url: "https://www.alessandrofederico.it/contatti" },
      ]} />
      <main>

        {/* ── Hero ── */}
        <section className="py-20 md:py-28 bg-white" aria-label="Contatta il Dr. Federico">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <div className="flex flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <SectionLabel text="Contatti" />
                <FadeIn delay={0.1}>
                  <h1 className="font-heading text-4xl md:text-5xl text-text leading-[1.05] max-w-xl">
                    <TextReveal delay={0.2}>Scrivimi, rispondo personalmente.</TextReveal>
                  </h1>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="font-sans text-base text-muted leading-[1.85] max-w-lg mt-6">
                    Per informazioni su trattamenti, prenotazioni o qualsiasi altra domanda.
                    Ogni messaggio riceve una risposta diretta dal Dr. Federico.
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
                  <Mail strokeWidth={1.2} className="w-6 h-6 md:w-7 md:h-7" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── Form + Info ── */}
        <section className="py-16 md:py-24 bg-white" aria-label="Modulo di contatto">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">

              {/* Form */}
              <FadeIn delay={0.1}>
                <div
                  className="rounded-2xl p-6 md:p-10 border"
                  style={{
                    background: "#F4F9FB",
                    borderColor: "rgba(122,174,201,0.15)",
                  }}
                >
                  <h2 className="font-heading text-2xl text-text mb-8">Invia un messaggio</h2>
                  <Suspense>
                    <ContactForm />
                  </Suspense>
                </div>
              </FadeIn>

              {/* Info laterale */}
              <div className="flex flex-col gap-8">

                {/* Contatti */}
                <FadeIn delay={0.2}>
                  <address className="not-italic">
                    <h3 className="font-heading text-xl text-text mb-5">Dove trovarmi</h3>
                    <div className="flex flex-col gap-4">
                      {infoContatti.map((item) => (
                        <div key={item.label} className="flex items-start gap-3">
                          <div
                            className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                            style={{ background: "rgba(122,174,201,0.15)", color: "#3A8A9E" }}
                          >
                            {item.icon}
                          </div>
                          <div>
                            <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-muted mb-0.5">
                              {item.label}
                            </p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="font-sans text-sm text-text hover:text-[#3A8A9E] transition-colors duration-200"
                              >
                                {item.valore}
                              </a>
                            ) : (
                              <p className="font-sans text-sm text-text">{item.valore}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </address>
                </FadeIn>

                {/* Orari */}
                <FadeIn delay={0.3}>
                  <div
                    className="rounded-2xl p-6 border"
                    style={{
                      background: "#F4F9FB",
                      borderColor: "rgba(122,174,201,0.15)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Clock strokeWidth={1.4} className="w-4 h-4" style={{ color: "#3A8A9E" }} />
                      <h3 className="font-heading text-lg text-text">Orari</h3>
                    </div>
                    <div className="flex flex-col gap-3">
                      {siteConfig.orari.map((o) => (
                        <div
                          key={o.giorno}
                          className="flex items-center justify-between"
                          style={{ borderBottom: "1px solid rgba(17,24,39,0.06)", paddingBottom: "10px" }}
                        >
                          <span className="font-sans text-xs text-muted">{o.giorno}</span>
                          <span
                            className="font-sans text-xs font-medium"
                            style={{ color: o.ore === "Chiuso" ? "rgba(17,24,39,0.3)" : "#3A8A9E" }}
                          >
                            {o.ore}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>

              </div>
            </div>
          </div>
        </section>

      </main>
    </PageTransition>
  )
}
