"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { testimonianze } from "@/data/testimonianze"
import RecensioneCard from "@/components/ui/RecensioneCard"

export default function RecensioniSlider() {
  const trackRef = useRef<HTMLUListElement>(null)
  const [bordi, setBordi] = useState({ inizio: true, fine: false })

  const aggiorna = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setBordi({
      inizio: el.scrollLeft <= 4,
      fine: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    })
  }, [])

  useEffect(() => {
    aggiorna()
    window.addEventListener("resize", aggiorna)
    return () => window.removeEventListener("resize", aggiorna)
  }, [aggiorna])

  const scorri = (verso: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector("li")
    const passo = card ? card.getBoundingClientRect().width + 16 : el.clientWidth
    el.scrollBy({ left: verso * passo, behavior: "smooth" })
  }

  const freccia =
    "hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white text-blu-notte items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.18)] transition-opacity duration-300 hover:bg-azzurro-chiaro disabled:opacity-0 disabled:pointer-events-none"

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        onScroll={aggiorna}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="list"
        aria-label="Recensioni dei pazienti"
      >
        {testimonianze.map((t) => (
          <li key={t.id} className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]">
            <RecensioneCard t={t} compatta />
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => scorri(-1)} disabled={bordi.inizio} aria-label="Recensioni precedenti" className={`${freccia} -left-5`}>
        <ChevronLeft strokeWidth={1.5} className="w-5 h-5" />
      </button>
      <button type="button" onClick={() => scorri(1)} disabled={bordi.fine} aria-label="Recensioni successive" className={`${freccia} -right-5`}>
        <ChevronRight strokeWidth={1.5} className="w-5 h-5" />
      </button>
    </div>
  )
}
