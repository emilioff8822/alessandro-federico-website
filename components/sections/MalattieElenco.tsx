"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Search, X, ChevronRight } from "lucide-react"
import { malattie, alfabeto, normalizza } from "@/data/malattie"

export default function MalattieElenco() {
  const [query, setQuery] = useState("")

  const gruppi = useMemo(() => {
    const q = normalizza(query.trim())
    const filtrate = q ? malattie.filter((m) => normalizza(m.nome).includes(q)) : malattie
    const map = new Map<string, typeof malattie>()
    for (const m of filtrate) {
      const g = map.get(m.lettera) ?? []
      g.push(m)
      map.set(m.lettera, g)
    }
    return map
  }, [query])

  const totale = Array.from(gruppi.values()).reduce((n, g) => n + g.length, 0)

  return (
    <div>
      <div
        className="sticky z-30 bg-white/95 backdrop-blur-sm -mx-5 px-5 md:-mx-10 md:px-10 pt-4 pb-5 border-b border-blu-notte/[0.08]"
        style={{ top: "var(--header-h)" }}
      >
        <label htmlFor="cerca-malattia" className="sr-only">Cerca una malattia</label>
        <div className="relative max-w-2xl">
          <Search strokeWidth={1.5} className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-blu-scuro pointer-events-none" />
          <input
            id="cerca-malattia"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cerca una malattia (es. acne, psoriasi, alopecia…)"
            autoComplete="off"
            className="w-full rounded-full border border-brand-blu bg-white pl-14 pr-12 py-4 text-base text-blu-notte placeholder:text-grigio-testo/60 focus:outline-none focus:border-blu-scuro focus:shadow-[0_0_0_4px_rgba(146,181,217,0.25)] transition-all duration-300 [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Cancella ricerca"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-grigio-testo hover:text-blu-scuro hover:bg-azzurro-chiaro transition-colors"
            >
              <X strokeWidth={1.5} className="w-4 h-4" />
            </button>
          )}
        </div>

        <nav aria-label="Indice alfabetico" className="mt-4">
          <ul className="flex flex-wrap gap-1" role="list">
            {alfabeto.map((l) => {
              const attiva = gruppi.has(l)
              return (
                <li key={l}>
                  {attiva ? (
                    <a
                      href={`#lettera-${l}`}
                      className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-[14px] font-medium text-blu-scuro hover:bg-azzurro-chiaro transition-colors"
                    >
                      {l}
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-[14px] text-brand-grigio/60 cursor-default"
                    >
                      {l}
                    </span>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <p className="text-[13px] mt-6 mb-2" aria-live="polite">
        {query ? `${totale} ${totale === 1 ? "risultato" : "risultati"} per “${query.trim()}”` : `${totale} voci in ordine alfabetico`}
      </p>

      {totale === 0 ? (
        <div className="py-16 text-center">
          <p className="text-base mb-2">Nessuna malattia trovata.</p>
          <p className="text-sm">Prova con un altro termine, oppure contatta lo studio per un consulto.</p>
        </div>
      ) : (
        <div className="divide-y divide-blu-notte/[0.08]">
          {Array.from(gruppi.entries()).map(([lettera, voci]) => (
            <section key={lettera} id={`lettera-${lettera}`} aria-label={`Lettera ${lettera}`} style={{ scrollMarginTop: "calc(var(--header-h) + 170px)" }} className="py-8 md:py-10 grid md:grid-cols-[88px_1fr] gap-4 md:gap-8">
              <h2 className="font-heading text-4xl md:text-5xl text-brand-blu leading-none">{lettera}</h2>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8" role="list">
                {voci.map((m) => (
                  <li key={m.slug}>
                    <Link
                      href={`/malattie-dermatologiche/${m.slug}`}
                      className="group flex items-center justify-between gap-3 py-3 border-b border-blu-notte/[0.06] text-[15px] text-blu-notte hover:text-blu-scuro transition-colors duration-300"
                    >
                      <span>{m.nome}</span>
                      <ChevronRight strokeWidth={1.5} className="w-4 h-4 shrink-0 text-brand-blu transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
