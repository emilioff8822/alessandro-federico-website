import type { Metadata } from "next"
import PageTransition from "@/components/providers/PageTransition"
import PageHero from "@/components/ui/PageHero"
import MalattieElenco from "@/components/sections/MalattieElenco"
import CTASection from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Malattie dermatologiche dalla A alla Z",
  description:
    "Elenco alfabetico delle malattie della pelle e dei capelli: acne, psoriasi, dermatite, alopecia, melanoma e molte altre. A cura del Dott. Alessandro Federico, dermatologo.",
  alternates: { canonical: "https://www.alessandrofederico.it/malattie-dermatologiche" },
  openGraph: {
    title: "Malattie dermatologiche dalla A alla Z | Dott. Alessandro Federico",
    description: "Elenco alfabetico delle malattie della pelle e dei capelli.",
    url: "https://www.alessandrofederico.it/malattie-dermatologiche",
  },
}

export default function MalattiePage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          titolo="Malattie dermatologiche"
          testo="Riconoscere le patologie cutanee è il primo passo per prendersi cura della propria pelle. Cerca una malattia o scorri l'indice per trovare la scheda dedicata."
          percorso={[{ label: "Malattie dermatologiche", href: "/malattie-dermatologiche" }]}
        />

        <section className="bg-white" aria-label="Elenco delle malattie">
          <MalattieElenco />
        </section>

        <CTASection
          eyebrow="Consulto dermatologico"
          titolo="Hai un dubbio sulla tua pelle?"
          testo="Le informazioni non sostituiscono una visita. Prenota un consulto per una valutazione personalizzata."
        />
      </main>
    </PageTransition>
  )
}
