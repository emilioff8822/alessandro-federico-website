import type { Metadata } from "next"
import { Suspense } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import ContactForm from "@/components/ui/ContactForm"
import WhatsAppIcon from "@/components/ui/WhatsAppIcon"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"
import { siteConfig } from "@/data/siteConfig"

export const metadata: Metadata = {
  title: "Prenota una visita | Dermatologo a Milano e Paola (CS)",
  description:
    "Prenota una visita con il Dott. Alessandro Federico a Milano (Via Fratelli Bronzetti 18) o a Paola (Corso Roma 39). Segreteria 393 873 6690, WhatsApp 377 342 9123.",
  alternates: { canonical: "https://www.alessandrofederico.it/prenota" },
  openGraph: {
    title: "Prenota una visita | Dott. Alessandro Federico",
    description: "Contatti diretti e sedi di Milano e Paola (CS).",
    url: "https://www.alessandrofederico.it/prenota",
  },
}

const linkClass = "text-grigio-testo hover:text-blu-scuro transition-colors duration-300"

function Blocco({ icon, titolo, children }: { icon: React.ReactNode; titolo: string; children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col items-center text-center rounded-2xl bg-white border border-brand-blu/40 px-6 py-9 shadow-[0_2px_20px_rgba(30,53,80,0.05)]">
      <div className="w-16 h-16 rounded-full bg-brand-blu text-blu-notte flex items-center justify-center mb-5">
        {icon}
      </div>
      <h2 className="font-heading text-xl text-blu-notte mb-3">{titolo}</h2>
      <div className="text-[15px] leading-[1.75]">{children}</div>
    </div>
  )
}

export default function PrenotaPage() {
  const [milano, paola] = siteConfig.sedi

  return (
    <PageTransition>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.alessandrofederico.it" },
        { name: "Prenota", url: "https://www.alessandrofederico.it/prenota" },
      ]} />
      <main>

        <section className="relative bg-azzurro-chiaro py-16 md:py-24 overflow-hidden" aria-label="Prenota una visita">
          <Image
            src="/images/brand/simbolo-blu.png"
            alt=""
            width={700}
            height={907}
            aria-hidden="true"
            className="absolute -right-12 -bottom-16 w-[220px] md:w-[320px] h-auto opacity-25 pointer-events-none select-none"
          />
          <div className="relative mx-auto max-w-6xl px-5 md:px-10 text-center md:text-left">
            <SectionLabel text="Prenotazioni" className="justify-center md:justify-start" />
            <h1 className="font-heading text-4xl md:text-6xl leading-[1.08] mb-6">
              <TextReveal delay={0.15}>Prenota la tua visita.</TextReveal>
            </h1>
            <p className="text-base md:text-lg leading-[1.8] max-w-2xl mx-auto md:mx-0">
              La prenotazione avviene direttamente con lo studio del Dott. Federico:
              chiama la segreteria, scrivi su WhatsApp o invia un&apos;email.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20" aria-label="Contatti">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <address className="not-italic grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <FadeIn className="h-full">
                <Blocco icon={<MapPin strokeWidth={1.4} className="w-7 h-7" />} titolo="Indirizzo">
                  {[milano, paola].map((s) => (
                    <p key={s.id} className="mb-2 last:mb-0">
                      <span className="block text-blu-notte">{s.citta}</span>
                      <span className="whitespace-nowrap">{s.indirizzo}</span>
                    </p>
                  ))}
                </Blocco>
              </FadeIn>
              <FadeIn delay={0.08} className="h-full">
                <Blocco icon={<Phone strokeWidth={1.4} className="w-7 h-7" />} titolo={`Telefono – ${siteConfig.segreteria.label}`}>
                  <a href={siteConfig.segreteria.href} className={`${linkClass} text-[17px]`}>
                    {siteConfig.segreteria.numero}
                  </a>
                </Blocco>
              </FadeIn>
              <FadeIn delay={0.16} className="h-full">
                <Blocco icon={<WhatsAppIcon className="w-7 h-7" />} titolo="WhatsApp – Dott. Alessandro Federico">
                  <a href={siteConfig.whatsapp.href} target="_blank" rel="noopener noreferrer" className={`${linkClass} text-[17px]`}>
                    {siteConfig.whatsapp.numero}
                  </a>
                </Blocco>
              </FadeIn>
              <FadeIn delay={0.24} className="h-full">
                <Blocco icon={<Mail strokeWidth={1.4} className="w-7 h-7" />} titolo="Email">
                  <a href={`mailto:${siteConfig.email}`} className={`${linkClass} break-all`}>
                    {siteConfig.email}
                  </a>
                </Blocco>
              </FadeIn>
            </address>
          </div>
        </section>

        <section className="bg-azzurro-chiaro py-16 md:py-24" aria-label="Richiedi un appuntamento">
          <div className="mx-auto max-w-3xl px-5 md:px-10">
            <FadeIn>
              <div className="text-center mb-10">
                <p className="eyebrow text-[11px] text-blu-scuro mb-4">Modulo di richiesta</p>
                <h2 className="font-heading text-3xl md:text-4xl leading-[1.15] mb-4">Richiedi un appuntamento</h2>
                <p className="text-[15px] leading-[1.8] max-w-lg mx-auto">
                  Indica il tipo di visita e la sede che preferisci: verrai ricontattato per fissare l&apos;appuntamento.
                </p>
              </div>
              <div className="rounded-3xl bg-white border border-brand-blu/40 p-7 md:p-10 shadow-[0_2px_30px_rgba(30,53,80,0.06)]">
                <Suspense>
                  <ContactForm />
                </Suspense>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24" aria-label="Dove siamo">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl leading-[1.15] mb-10 text-center">Le sedi</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {siteConfig.sedi.map((sede, i) => (
                <FadeIn key={sede.id} delay={i * 0.1}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin strokeWidth={1.5} className="w-5 h-5 text-blu-scuro" />
                      <p className="text-blu-notte text-[17px]">
                        Sede di {sede.citta} <span className="text-grigio-testo">– {sede.indirizzo}</span>
                      </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-brand-blu/40 aspect-[4/3] bg-azzurro-chiaro">
                      <iframe
                        title={`Mappa sede di ${sede.citta}`}
                        src={`https://www.google.com/maps?q=${encodeURIComponent(sede.mapsQuery)}&output=embed`}
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

      </main>
    </PageTransition>
  )
}
