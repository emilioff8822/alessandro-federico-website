"use client"

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"
import { etichetteZona, filtriZona, fotoPrimaEDopo, type Zona } from "@/data/prima-e-dopo"
import FadeIn from "@/components/ui/FadeIn"

function conteggio(valore: Zona | "tutti") {
  return valore === "tutti" ? fotoPrimaEDopo.length : fotoPrimaEDopo.filter((f) => f.zona === valore).length
}

export default function PrimaEDopoGallery() {
  const [filtroAttivo, setFiltroAttivo] = useState<Zona | "tutti">("tutti")
  const [aperta, setAperta] = useState<number | null>(null)
  const montato = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  const foto = filtroAttivo === "tutti" ? fotoPrimaEDopo : fotoPrimaEDopo.filter((f) => f.zona === filtroAttivo)

  return (
    <div>
      <FadeIn>
        <div className="flex flex-wrap gap-2 justify-center mb-6" role="group" aria-label="Filtra per zona">
          {filtriZona.map((f) => {
            const attivo = filtroAttivo === f.value
            return (
              <button
                key={f.value}
                onClick={() => setFiltroAttivo(f.value)}
                aria-pressed={attivo}
                className={`inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full border text-[14px] transition-all duration-300 ${
                  attivo
                    ? "bg-blu-scuro border-blu-scuro text-white"
                    : "bg-azzurro-chiaro border-transparent text-blu-notte hover:border-blu-scuro"
                }`}
              >
                {f.label}
                <span
                  className={`min-w-7 h-7 px-2 rounded-full inline-flex items-center justify-center text-[12px] ${
                    attivo ? "bg-white/20 text-white" : "bg-white text-blu-scuro"
                  }`}
                >
                  {conteggio(f.value)}
                </span>
              </button>
            )
          })}
        </div>
        <p className="text-center text-[14px] mb-12">
          In ogni foto la situazione iniziale è a sinistra o in alto. Tocca un&apos;immagine per ingrandirla.
        </p>
      </FadeIn>

      <div key={filtroAttivo} className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5">
        {foto.map((f, index) => (
          <FadeIn key={f.id} delay={(index % 3) * 0.06} className="mb-4 md:mb-5 break-inside-avoid">
            <button
              type="button"
              onClick={() => setAperta(index)}
              aria-label={`Ingrandisci foto prima e dopo, ${etichetteZona[f.zona].toLowerCase()}, ${index + 1} di ${foto.length}`}
              className="group relative block w-full rounded-[20px] bg-azzurro-chiaro p-2 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blu-scuro"
            >
              <Image
                src={f.src}
                alt={`Prima e dopo, ${etichetteZona[f.zona].toLowerCase()}`}
                width={f.width}
                height={f.height}
                quality={90}
                sizes="(min-width: 1440px) 432px, (min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
                className="block w-full h-auto rounded-[14px]"
              />
              <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-blu-notte flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
                <Maximize2 className="w-4 h-4" strokeWidth={1.6} />
              </span>
            </button>
          </FadeIn>
        ))}
      </div>

      {montato &&
        createPortal(
          <AnimatePresence>
            {aperta !== null && (
              <Lightbox foto={foto} indice={aperta} onCambia={setAperta} onChiudi={() => setAperta(null)} />
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  )
}

function Lightbox({
  foto,
  indice,
  onCambia,
  onChiudi,
}: {
  foto: typeof fotoPrimaEDopo
  indice: number
  onCambia: (i: number) => void
  onChiudi: () => void
}) {
  const corrente = foto[indice]
  const chiudiRef = useRef<HTMLButtonElement>(null)
  const touchX = useRef<number | null>(null)

  const vai = useCallback(
    (passo: number) => onCambia((indice + passo + foto.length) % foto.length),
    [indice, foto.length, onCambia]
  )

  useEffect(() => {
    const precedente = document.activeElement as HTMLElement | null
    const overflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    chiudiRef.current?.focus()
    return () => {
      document.body.style.overflow = overflow
      precedente?.focus()
    }
  }, [])

  useEffect(() => {
    function tasto(e: KeyboardEvent) {
      if (e.key === "Escape") onChiudi()
      if (e.key === "ArrowRight") vai(1)
      if (e.key === "ArrowLeft") vai(-1)
    }
    window.addEventListener("keydown", tasto)
    return () => window.removeEventListener("keydown", tasto)
  }, [vai, onChiudi])

  const freccia =
    "w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center transition-colors duration-300 hover:bg-white/20"

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Foto prima e dopo ingrandita"
      data-lenis-prevent
      className="fixed inset-0 z-[100] bg-blu-notte/[0.97] flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onChiudi}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(dx) > 50) vai(dx < 0 ? 1 : -1)
        touchX.current = null
      }}
    >
      <div className="flex items-center justify-between px-5 md:px-8 h-[72px] shrink-0 text-white">
        <span className="text-[14px]">
          {etichetteZona[corrente.zona]} · {indice + 1} / {foto.length}
        </span>
        <button
          ref={chiudiRef}
          type="button"
          onClick={onChiudi}
          aria-label="Chiudi"
          className={freccia}
        >
          <X className="w-5 h-5" strokeWidth={1.6} />
        </button>
      </div>

      <div className="relative flex-1 min-h-0 flex items-center justify-center px-4 md:px-24 pb-6 md:pb-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={corrente.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={corrente.src}
              alt={`Prima e dopo, ${etichetteZona[corrente.zona].toLowerCase()}`}
              width={corrente.width}
              height={corrente.height}
              quality={90}
              sizes="100vw"
              priority
              className="block w-auto h-auto max-w-full max-h-full rounded-[14px] object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {foto.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                vai(-1)
              }}
              aria-label="Foto precedente"
              className={`${freccia} hidden md:flex absolute left-6 top-1/2 -translate-y-1/2`}
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.6} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                vai(1)
              }}
              aria-label="Foto successiva"
              className={`${freccia} hidden md:flex absolute right-6 top-1/2 -translate-y-1/2`}
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.6} />
            </button>
          </>
        )}
      </div>

      {foto.length > 1 && (
        <div className="md:hidden flex justify-center gap-4 pb-6 shrink-0">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              vai(-1)
            }}
            aria-label="Foto precedente"
            className={freccia}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.6} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              vai(1)
            }}
            aria-label="Foto successiva"
            className={freccia}
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.6} />
          </button>
        </div>
      )}
    </motion.div>
  )
}
