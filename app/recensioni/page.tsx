import type { Metadata } from "next"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import PageHero from "@/components/ui/PageHero"
import RecensioneCard from "@/components/ui/RecensioneCard"
import CTASection from "@/components/sections/CTASection"
import { testimonianze } from "@/data/testimonianze"

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
      <main>
        <PageHero
          titolo="Cosa dicono i miei pazienti"
          testo="Ogni paziente porta con sé una storia unica. Queste sono alcune delle esperienze di chi si è affidato alla mia cura."
          percorso={[{ label: "Recensioni", href: "/recensioni" }]}
        />

        <section className="bg-blu-notte section-y" aria-label="Recensioni">
          <div className="container-site">
            <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-4" role="list">
              {testimonianze.map((t, i) => (
                <li key={t.id}>
                  <FadeIn delay={(i % 3) * 0.08} className="h-full">
                    <RecensioneCard t={t} />
                  </FadeIn>
                </li>
              ))}
            </ul>
            <p className="text-[13px] leading-[1.8] text-white/70 text-center max-w-xl mx-auto mt-8">
              Le testimonianze riportate sono di pazienti reali e sono state condivise con il
              loro consenso. Per tutela della privacy, i cognomi sono indicati solo con
              l&apos;iniziale.
            </p>
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
