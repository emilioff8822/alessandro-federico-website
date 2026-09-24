import type { Metadata } from "next"
import Image from "next/image"
import PageTransition from "@/components/providers/PageTransition"
import SectionLabel from "@/components/ui/SectionLabel"
import MalattieElenco from "@/components/sections/MalattieElenco"
import CTASection from "@/components/sections/CTASection"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"

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
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.alessandrofederico.it" },
        { name: "Malattie dermatologiche", url: "https://www.alessandrofederico.it/malattie-dermatologiche" },
      ]} />
      <main>
        <section className="relative bg-azzurro-chiaro py-16 md:py-24 overflow-hidden" aria-label="Malattie dermatologiche">
          <Image
            src="/images/brand/simbolo-blu.png"
            alt=""
            width={700}
            height={907}
            aria-hidden="true"
            className="absolute -right-12 -bottom-16 w-[220px] md:w-[320px] h-auto opacity-25 pointer-events-none select-none"
          />
          <div className="relative mx-auto max-w-6xl px-5 md:px-10">
            <SectionLabel text="Enciclopedia dermatologica" />
            <h1 className="font-heading text-4xl md:text-6xl leading-[1.08] mb-6">
              Malattie dermatologiche
            </h1>
            <p className="text-base md:text-lg leading-[1.8] max-w-2xl">
              Le principali malattie della pelle, dei capelli e delle mucose in ordine alfabetico.
              Cerca una patologia o scorri l&apos;indice per trovare la scheda dedicata.
            </p>
          </div>
        </section>

        <section className="bg-white pb-20 md:pb-28" aria-label="Elenco delle malattie">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <MalattieElenco />
          </div>
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
