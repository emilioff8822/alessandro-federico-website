import type { Metadata } from "next"
import { Suspense } from "react"
import { MapPin, Phone, Mail } from "lucide-react"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
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
const numeroClass = "text-[17px] text-blu-notte hover:text-blu-scuro transition-colors duration-300"

function Blocco({ icon, titolo, children }: { icon: React.ReactNode; titolo: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="icon-circle w-14 h-14 mb-4">{icon}</span>
      <h2 className="font-heading text-[26px] md:text-[28px] leading-tight text-blu-notte mb-2">{titolo}</h2>
      <div className="text-[15px] leading-[1.6]">{children}</div>
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
      <main className="bg-white">

        <section className="container-site pt-12 md:pt-16 text-center" aria-label="Prenota una visita">
          <h1 className="font-heading titolo-pagina mb-5">
            <TextReveal delay={0.1}>Prenota la tua visita</TextReveal>
          </h1>
          <FadeIn delay={0.2}>
            <p className="text-base leading-[1.7] max-w-[620px] mx-auto">
              La cura della tua pelle comincia qui.
              <br className="hidden sm:block" />{" "}
              Prenota direttamente con lo studio del Dott. Federico: chiama la segreteria,
              scrivi su WhatsApp o invia un&apos;email.
            </p>
          </FadeIn>
        </section>

        <section className="container-site pt-12 md:pt-16" aria-label="Contatti">
          <address className="not-italic grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 pb-10 md:pb-12 border-b border-blu-notte/15">
            <FadeIn>
              <Blocco icon={<MapPin strokeWidth={1.4} className="w-6 h-6" />} titolo="Indirizzo">
                {[milano, paola].map((s) => (
                  <p key={s.id} className="mb-1.5 last:mb-0">
                    <span className="text-blu-notte">{s.citta}</span> – {s.indirizzo}
                  </p>
                ))}
              </Blocco>
            </FadeIn>
            <FadeIn delay={0.06}>
              <Blocco icon={<Phone strokeWidth={1.4} className="w-6 h-6" />} titolo="Telefono">
                <p>{siteConfig.segreteria.label}</p>
                <a href={siteConfig.segreteria.href} className={numeroClass}>
                  {siteConfig.segreteria.numero}
                </a>
              </Blocco>
            </FadeIn>
            <FadeIn delay={0.12}>
              <Blocco icon={<WhatsAppIcon className="w-6 h-6" />} titolo="WhatsApp">
                <p>{siteConfig.name}</p>
                <a href={siteConfig.whatsapp.href} target="_blank" rel="noopener noreferrer" className={numeroClass}>
                  {siteConfig.whatsapp.numero}
                </a>
              </Blocco>
            </FadeIn>
            <FadeIn delay={0.18}>
              <Blocco icon={<Mail strokeWidth={1.4} className="w-6 h-6" />} titolo="Email">
                <a href={`mailto:${siteConfig.email}`} className={`${linkClass} break-all`}>
                  {siteConfig.email}
                </a>
              </Blocco>
            </FadeIn>
          </address>
        </section>

        <section className="container-site pt-12 md:pt-16" aria-label="Richiedi un appuntamento">
          <FadeIn>
            <div className="mx-auto max-w-[880px] rounded-[20px] md:rounded-[24px] bg-blu-notte px-5 py-9 md:px-12 md:py-12">
              <div className="text-center mb-8">
                <h2 className="font-heading text-2xl md:text-[30px] text-white mb-3">Richiedi un appuntamento</h2>
                <p className="text-[15px] leading-[1.7] text-white/80 max-w-md mx-auto">
                  Indica il tipo di visita e la sede che preferisci: verrai ricontattato per fissare l&apos;appuntamento.
                </p>
              </div>
              <Suspense>
                <ContactForm />
              </Suspense>
            </div>
          </FadeIn>
        </section>

        <section id="sedi" className="container-site section-y" aria-label="Come raggiungerci">
          <FadeIn>
            <h2 className="font-heading titolo-sezione text-center mb-10 md:mb-12">Come raggiungerci</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {siteConfig.sedi.map((sede, i) => (
              <FadeIn key={sede.id} delay={i * 0.1}>
                <div className="rounded-[20px] overflow-hidden aspect-[4/3] bg-azzurro-chiaro">
                  <iframe
                    title={`Mappa sede di ${sede.citta}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(sede.mapsQuery)}&output=embed`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="flex items-start gap-3 mt-5">
                  <span className="icon-circle w-10 h-10">
                    <MapPin strokeWidth={1.5} className="w-[18px] h-[18px]" />
                  </span>
                  <div>
                    <p className="text-blu-notte text-[17px] leading-tight">Sede di {sede.citta}</p>
                    <p className="text-[14px]">{sede.indirizzo}, {sede.cap} {sede.citta.replace(/ \(.*\)/, "")} ({sede.provincia})</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

      </main>
    </PageTransition>
  )
}
