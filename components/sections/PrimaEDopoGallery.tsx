"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageOff } from "lucide-react"
import { casiPrimaEDopo, filtri, type Categoria } from "@/data/prima-e-dopo"
import FadeIn from "@/components/ui/FadeIn"

const etichette: Record<Categoria, string> = {
  dermatologia: "Dermatologia",
  "medicina-estetica": "Medicina Estetica",
  tricologia: "Tricologia",
}

function PlaceholderSlot({ label }: { label: string }) {
  return (
    <div className="w-full aspect-square flex flex-col items-center justify-center gap-3 bg-white">
      <div className="w-10 h-10 rounded-full bg-azzurro-chiaro flex items-center justify-center">
        <ImageOff className="w-5 h-5 text-blu-scuro" strokeWidth={1.4} />
      </div>
      <span className="eyebrow text-[10px] text-blu-scuro">{label}</span>
    </div>
  )
}

function Foto({ src, alt, label }: { src: string | null; alt: string; label: string }) {
  return (
    <div className="relative">
      <span className="absolute top-2 left-2 z-10 px-2.5 py-1 rounded-full eyebrow text-[9px] text-white bg-blu-notte/80">
        {label}
      </span>
      {src ? (
        <Image src={src} alt={alt} width={400} height={400} quality={95} className="w-full aspect-square object-cover" />
      ) : (
        <PlaceholderSlot label={`Foto ${label.toLowerCase()}`} />
      )}
    </div>
  )
}

export default function PrimaEDopoGallery() {
  const [filtroAttivo, setFiltroAttivo] = useState<Categoria | "tutti">("tutti")

  const casiFiltrati =
    filtroAttivo === "tutti" ? casiPrimaEDopo : casiPrimaEDopo.filter((c) => c.categoria === filtroAttivo)

  return (
    <div>
      <FadeIn>
        <div className="flex flex-wrap gap-2 justify-center mb-12" role="group" aria-label="Filtra per area">
          {filtri.map((f) => {
            const attivo = filtroAttivo === f.value
            return (
              <button
                key={f.value}
                onClick={() => setFiltroAttivo(f.value)}
                aria-pressed={attivo}
                className={`px-5 py-2.5 rounded-full border text-[14px] transition-all duration-300 ${
                  attivo
                    ? "bg-blu-scuro border-blu-scuro text-white"
                    : "bg-azzurro-chiaro border-transparent text-blu-notte hover:border-blu-scuro"
                }`}
              >
                {f.label}
              </button>
            )
          })}
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {casiFiltrati.map((caso, index) => (
          <FadeIn key={caso.id} delay={index * 0.06}>
            <article className="h-full rounded-[20px] overflow-hidden bg-azzurro-chiaro flex flex-col p-2.5">
              <div className="grid grid-cols-2 gap-1.5 rounded-[14px] overflow-hidden">
                <Foto src={caso.prima} alt={`Prima — ${caso.titolo}`} label="Prima" />
                <Foto src={caso.dopo} alt={`Dopo — ${caso.titolo}`} label="Dopo" />
              </div>
              <div className="px-3.5 pt-5 pb-4 flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-px bg-brand-blu" />
                  <span className="eyebrow text-[9.5px] text-blu-scuro">
                    {etichette[caso.categoria]} · {caso.trattamento}
                  </span>
                </div>
                <h3 className="font-heading text-xl">{caso.titolo}</h3>
                <p className="text-sm leading-[1.75]">{caso.descrizione}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <p className="text-center text-xs mt-10 max-w-md mx-auto leading-[1.8]">
          Le fotografie dei casi clinici saranno pubblicate con il consenso scritto dei pazienti.
          I contenuti sono in corso di raccolta.
        </p>
      </FadeIn>
    </div>
  )
}
