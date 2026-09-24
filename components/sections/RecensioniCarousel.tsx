"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Star, Quote } from "lucide-react"
import { testimonianze } from "@/data/testimonianze"
import FadeIn from "@/components/ui/FadeIn"

const cardBg = ["bg-white", "bg-white/70"]

const AUTO_INTERVAL = 5500

export default function RecensioniCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const touchStartX = useRef<number | null>(null)
  const total = testimonianze.length

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrent((index + total) % total)
      setTimeout(() => setIsAnimating(false), 400)
    },
    [isAnimating, total]
  )

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // Auto-scroll
  useEffect(() => {
    intervalRef.current = setInterval(next, AUTO_INTERVAL)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [next])

  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(next, AUTO_INTERVAL)
  }, [next])

  // Swipe touch
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) {
      delta > 0 ? next() : prev()
      resetInterval()
    }
    touchStartX.current = null
  }

  const t = testimonianze[current]
  const theme = cardBg[current % cardBg.length]

  return (
    <FadeIn>
      <div className="relative w-full max-w-3xl mx-auto select-none">
        {/* Card */}
        <div
          key={current}
          className={`rounded-2xl px-8 py-10 md:px-14 md:py-14 border border-brand-blu/40 shadow-[0_4px_40px_rgba(30,53,80,0.06)] ${theme}`}
          style={{ animation: "fadeSlide 0.4s ease both" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="shrink-0 w-10 h-10 rounded-full bg-brand-blu text-blu-notte flex items-center justify-center">
              <Quote strokeWidth={1.5} className="w-4 h-4" />
            </div>
            <span className="eyebrow text-[10px] text-blu-scuro">{t.trattamento}</span>
          </div>

          <div className="flex gap-1 mb-6" aria-label={`${t.stelle} stelle su 5`}>
            {Array.from({ length: t.stelle }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current text-brand-blu" strokeWidth={0} />
            ))}
          </div>

          <p className="text-base md:text-lg text-grigio-testo leading-[1.85] mb-8">
            &ldquo;{t.testo}&rdquo;
          </p>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blu-scuro text-white flex items-center justify-center text-sm shrink-0">
              {t.nome.charAt(0)}
            </div>
            <div>
              <p className="text-sm text-blu-notte">{t.nome}</p>
              <p className="text-xs text-grigio-testo">{t.citta}</p>
            </div>
          </div>
        </div>

        {/* Dots navigazione */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonianze.map((_, i) => (
            <button
              key={i}
              aria-label={`Vai alla recensione ${i + 1}`}
              onClick={() => {
                goTo(i)
                resetInterval()
              }}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-blu-scuro" : "w-2 bg-blu-notte/15"}`}
            />
          ))}
        </div>

        {/* Frecce — solo desktop */}
        <button
          aria-label="Recensione precedente"
          onClick={() => { prev(); resetInterval() }}
          className="hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-brand-blu bg-white items-center justify-center text-blu-notte hover:bg-blu-scuro hover:border-blu-scuro hover:text-white transition-all duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          aria-label="Prossima recensione"
          onClick={() => { next(); resetInterval() }}
          className="hidden md:flex absolute -right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-brand-blu bg-white items-center justify-center text-blu-notte hover:bg-blu-scuro hover:border-blu-scuro hover:text-white transition-all duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </FadeIn>
  )
}
