"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { macroAree, linkDellArea } from "@/data/servizi"
import FadeIn from "@/components/ui/FadeIn"

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]"

export default function MacroAreeCards() {
  const [active, setActive] = useState<string | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!active) return
    const onPointer = (e: PointerEvent) => {
      if (gridRef.current && !gridRef.current.contains(e.target as Node)) setActive(null)
    }
    document.addEventListener("pointerdown", onPointer)
    return () => document.removeEventListener("pointerdown", onPointer)
  }, [active])

  const onCardTap = (id: string) => {
    if (window.matchMedia("(hover: none)").matches) setActive(id)
  }

  return (
    <section
      className="section-y"
      style={{ background: "linear-gradient(to bottom, var(--azzurro-chiaro) 0%, var(--bianco) 100%)" }}
      aria-label="Le specialità"
      id="specialita"
    >
      <div className="container-site">
        <FadeIn>
          <div className="text-center max-w-2xl mb-10 md:mb-14 mx-auto">
            <p className="eyebrow text-[11px] text-blu-scuro mb-4">Le specialità</p>
            <h2 className="font-heading titolo-sezione mb-4">
              Un approccio integrato per la salute della pelle
            </h2>
            <p className="text-base leading-[1.75]">
              Quattro aree di competenza, dalla diagnosi clinica ai trattamenti estetici e
              dermochirurgici. Scegli un&apos;area per scoprire le prestazioni.
            </p>
          </div>
        </FadeIn>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2.5 md:gap-3">
          {macroAree.map((area, i) => {
            const on = active === area.id
            const show = on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0"
            const hide = on ? "opacity-0 -translate-y-6" : "opacity-100 group-hover:opacity-0 group-hover:-translate-y-6 group-focus-within:opacity-0 group-focus-within:-translate-y-6"

            return (
              <FadeIn key={area.id} delay={i * 0.08}>
                <div
                  onClick={() => onCardTap(area.id)}
                  className="group relative h-[440px] sm:h-[480px] xl:h-[520px] rounded-[16px] md:rounded-[20px] overflow-hidden cursor-pointer isolate"
                >
                  <Image
                    src={area.immagine}
                    alt={area.titolo}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className={`object-cover transition-transform duration-[900ms] ${EASE} ${on ? "scale-105" : "group-hover:scale-105"}`}
                  />

                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(30,53,80,0.78) 0%, rgba(30,53,80,0.25) 38%, transparent 62%)" }}
                    aria-hidden="true"
                  />

                  <div
                    className={`absolute inset-0 bg-blu-notte/85 transition-opacity duration-500 ${on ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"}`}
                    aria-hidden="true"
                  />

                  <h3
                    className={`absolute inset-x-6 bottom-9 text-center eyebrow text-[15px] tracking-[0.2em] text-white transition-all duration-500 ${EASE} ${hide}`}
                  >
                    {area.titolo}
                  </h3>

                  <div
                    className={`absolute inset-0 flex flex-col items-center text-center px-7 pt-10 pb-8 transition-all duration-500 ${EASE} ${show} ${on ? "pointer-events-auto" : "pointer-events-none group-hover:pointer-events-auto"}`}
                  >
                    <p className="eyebrow text-[15px] tracking-[0.2em] text-white mb-5">{area.titolo}</p>
                    <p className="text-[14px] leading-[1.7] text-white/85">{area.cardDescrizione}</p>
                    <hr className="w-full border-0 h-px bg-brand-blu my-6" />
                    <ul className="space-y-2.5 mb-auto" role="list">
                      {linkDellArea(area).map((l) => (
                        <li key={l.href}>
                          <Link href={l.href} className="link-hover text-[14px] text-white hover:text-brand-blu transition-colors duration-300">
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/specialita#${area.id}`}
                      className="mt-6 inline-flex items-center justify-center rounded-full border border-white px-7 py-3 eyebrow text-[11px] tracking-[0.18em] text-white hover:bg-white hover:text-blu-notte transition-colors duration-300"
                    >
                      Vedi tutto
                    </Link>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
