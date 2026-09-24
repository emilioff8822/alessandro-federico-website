import type { Metadata } from "next"
import { MessageSquareQuote } from "lucide-react"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import RecensioniCarousel from "@/components/sections/RecensioniCarousel"
import CTASection from "@/components/sections/CTASection"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"

export const metadata: Metadata = {
  title: "Recensioni dei pazienti",
  description:
    "Le recensioni dei pazienti del Dott. Alessandro Federico, dermatologo a Milano e Paola (CS): esperienze in dermatologia, tricologia e medicina estetica.",
  alternates: { canonical: "https://www.alessandrofederico.it/recensioni" },
  openGraph: {
    title: "Recensioni dei pazienti | Dott. Alessandro Federico",
    description: "Le esperienze dei pazienti del Dott. Federico.",
    url: "https://www.alessandrofederico.it/recensioni",
  },
}

export default function RecensioniPage() {
  return (
    <PageTransition>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.alessandrofederico.it" },
        { name: "Recensioni", url: "https://www.alessandrofederico.it/recensioni" },
      ]} />
      <main>

        <section className="pt-16 pb-14 md:pt-24 md:pb-20 bg-white" aria-label="Recensioni pazienti">
          <div className="mx-auto max-w-3xl px-5 md:px-10 text-center">
            <FadeIn>
              <div className="w-16 h-16 rounded-full bg-brand-blu text-blu-notte flex items-center justify-center mx-auto mb-8">
                <MessageSquareQuote strokeWidth={1.3} className="w-7 h-7" />
              </div>
            </FadeIn>
            <SectionLabel text="Testimonianze" className="justify-center" />
            <h1 className="font-heading text-4xl md:text-5xl leading-[1.08] mb-6">
              <TextReveal delay={0.2}>Cosa dicono i miei pazienti</TextReveal>
            </h1>
            <FadeIn delay={0.25}>
              <p className="text-base leading-[1.85] max-w-xl mx-auto">
                Ogni paziente porta con sé una storia unica. Queste sono alcune delle
                esperienze di chi si è affidato alla mia cura.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-azzurro-chiaro" aria-label="Carousel testimonianze">
          <div className="mx-auto max-w-3xl px-5 md:px-16">
            <RecensioniCarousel />
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-2xl px-5 md:px-10 text-center">
            <FadeIn>
              <p className="text-sm leading-[1.9]">
                Le testimonianze riportate sono di pazienti reali e sono state condivise
                con il loro consenso. Per tutela della privacy, i cognomi sono indicati
                solo con l&apos;iniziale.
              </p>
            </FadeIn>
          </div>
        </section>

        <CTASection
          eyebrow="Prenota"
          titolo="Pronto a iniziare il tuo percorso?"
          testo="Prenota una prima consulenza: ogni visita è un ascolto attento prima di qualsiasi trattamento."
          secondario={{ text: "Le specialità", href: "/specialita" }}
        />

      </main>
    </PageTransition>
  )
}
