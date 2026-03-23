"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageOff } from "lucide-react"
import { casiPrimaEDopo, filtri, type Categoria } from "@/data/prima-e-dopo"
import FadeIn from "@/components/ui/FadeIn"

const temaCategoria: Record<string, { accent: string; bg: string; border: string; label: string }> = {
  dermatologia: {
    accent: "#3A8A9E",
    bg: "#F4F9FB",
    border: "rgba(58,138,158,0.18)",
    label: "DERMATOLOGIA",
  },
  "medicina-estetica": {
    accent: "#4A6FA5",
    bg: "#F4F6FB",
    border: "rgba(74,111,165,0.18)",
    label: "MEDICINA ESTETICA",
  },
}

// Slot placeholder quando la foto non è ancora disponibile
function PlaceholderSlot({ label, accent }: { label: string; accent: string }) {
  return (
    <div
      className="w-full h-full min-h-[220px] flex flex-col items-center justify-center gap-3"
      style={{ background: `${accent}10` }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{ background: `${accent}20` }}
      >
        <ImageOff className="w-5 h-5" style={{ color: accent }} strokeWidth={1.4} />
      </div>
      <span
        className="font-sans text-[10px] uppercase tracking-[0.18em]"
        style={{ color: accent }}
      >
        {label}
      </span>
    </div>
  )
}

export default function PrimaEDopoGallery() {
  const [filtroAttivo, setFiltroAttivo] = useState<Categoria | "tutti">("tutti")

  const casiFiltrati =
    filtroAttivo === "tutti"
      ? casiPrimaEDopo
      : casiPrimaEDopo.filter((c) => c.categoria === filtroAttivo)

  return (
    <div>
      {/* Barra filtri */}
      <FadeIn>
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {filtri.map((f) => {
            const attivo = filtroAttivo === f.value
            const accentColor =
              f.value === "dermatologia"
                ? "#3A8A9E"
                : f.value === "medicina-estetica"
                ? "#4A6FA5"
                : "#4A7D9A"
            return (
              <button
                key={f.value}
                onClick={() => setFiltroAttivo(f.value)}
                className="px-5 py-2 text-[11px] uppercase tracking-[0.16em] font-sans font-medium border rounded-full transition-all duration-300"
                style={{
                  background: attivo ? accentColor : "transparent",
                  color: attivo ? "#fff" : accentColor,
                  borderColor: attivo ? accentColor : `${accentColor}55`,
                  boxShadow: attivo ? `0 4px 16px ${accentColor}30` : "none",
                }}
              >
                {f.label}
              </button>
            )
          })}
        </div>
      </FadeIn>

      {/* Griglia casi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {casiFiltrati.map((caso, index) => {
          const tema = temaCategoria[caso.categoria]
          return (
            <FadeIn key={caso.id} delay={index * 0.06}>
              <article
                className="rounded-2xl overflow-hidden border flex flex-col"
                style={{
                  background: tema.bg,
                  borderColor: tema.border,
                  boxShadow: "0 4px 32px rgba(17,24,39,0.06)",
                }}
              >
                {/* Comparatore Prima / Dopo */}
                <div className="grid grid-cols-2">
                  {/* Prima */}
                  <div className="relative border-r" style={{ borderColor: tema.border }}>
                    <div
                      className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded font-sans text-[9px] uppercase tracking-[0.14em] text-white"
                      style={{ background: `${tema.accent}cc` }}
                    >
                      Prima
                    </div>
                    {caso.prima ? (
                      <Image
                        src={caso.prima}
                        alt={`Prima — ${caso.titolo}`}
                        width={400}
                        height={400}
                        quality={95}
                        className="w-full aspect-square object-cover object-center"
                      />
                    ) : (
                      <PlaceholderSlot label="Foto Prima" accent={tema.accent} />
                    )}
                  </div>

                  {/* Dopo */}
                  <div className="relative">
                    <div
                      className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded font-sans text-[9px] uppercase tracking-[0.14em] text-white"
                      style={{ background: `${tema.accent}cc` }}
                    >
                      Dopo
                    </div>
                    {caso.dopo ? (
                      <Image
                        src={caso.dopo}
                        alt={`Dopo — ${caso.titolo}`}
                        width={400}
                        height={400}
                        quality={95}
                        className="w-full aspect-square object-cover object-center"
                      />
                    ) : (
                      <PlaceholderSlot label="Foto Dopo" accent={tema.accent} />
                    )}
                  </div>
                </div>

                {/* Info caso */}
                <div className="px-5 py-5 flex-1 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-px" style={{ background: tema.accent }} />
                    <span
                      className="font-sans text-[9px] uppercase tracking-[0.18em]"
                      style={{ color: tema.accent }}
                    >
                      {tema.label} · {caso.trattamento}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl text-text">{caso.titolo}</h3>
                  <p className="font-sans text-sm text-muted leading-[1.75]">
                    {caso.descrizione}
                  </p>
                </div>
              </article>
            </FadeIn>
          )
        })}
      </div>

      {/* Avviso placeholder */}
      <FadeIn delay={0.3}>
        <p className="text-center font-sans text-xs text-muted mt-10 max-w-md mx-auto leading-[1.8]">
          Le fotografie dei casi clinici saranno pubblicate con il consenso scritto dei pazienti.
          I contenuti sono in corso di raccolta.
        </p>
      </FadeIn>
    </div>
  )
}
