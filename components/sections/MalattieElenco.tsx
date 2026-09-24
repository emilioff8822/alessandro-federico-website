"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Search, X, ArrowRight } from "lucide-react"
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
        className="sticky z-30 bg-white/95 backdrop-blur-sm border-b border-blu-notte/[0.08]"
        style={{ top: "var(--header-h)" }}
      >
        <div className="container-site py-4 flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-8">
          <label htmlFor="cerca-malattia" className="sr-only">Cerca una malattia</label>
          <div className="relative w-full lg:max-w-[420px] shrink-0">
            <Search strokeWidth={1.5} className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-blu-scuro pointer-events-none" />
            <input
              id="cerca-malattia"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cerca una malattia…"
              autoComplete="off"
              className="w-full h-12 rounded-full border border-blu-notte/25 bg-white pl-14 pr-12 text-[15px] text-blu-notte placeholder:text-grigio-testo/70 focus:outline-none focus:border-blu-scuro focus:shadow-[0_0_0_4px_rgba(146,181,217,0.25)] transition-all duration-300 [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Cancella ricerca"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-grigio-testo hover:text-blu-scuro hover:bg-azzurro-chiaro transition-colors"
              >
                <X strokeWidth={1.5} className="w-4 h-4" />
              </button>
            )}
          </div>

          <nav aria-label="Indice alfabetico" className="-mx-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <ul className="flex px-1" role="list">
              {alfabeto.map((l) => {
                const attiva = gruppi.has(l)
                return (
                  <li key={l}>
                    {attiva ? (
                      <a
                        href={`#lettera-${l}`}
                        className="w-[30px] h-8 rounded-full flex items-center justify-center text-[14px] text-blu-scuro hover:bg-azzurro-chiaro transition-colors"
                      >
                        {l}
                      </a>
                    ) : (
                      <span
                        aria-disabled="true"
                        className="w-[30px] h-8 rounded-full flex items-center justify-center text-[14px] text-brand-grigio/50 cursor-default"
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
      </div>

      <div className="container-site pb-4">
        <p className="text-[13px] mt-6" aria-live="polite">
          {query ? `${totale} ${totale === 1 ? "risultato" : "risultati"} per “${query.trim()}”` : `${totale} voci in ordine alfabetico`}
        </p>

        {totale === 0 ? (
          <div className="py-16 text-center">
            <p className="text-base mb-2">Nessuna malattia trovata.</p>
            <p className="text-sm">Prova con un altro termine, oppure contatta lo studio per un consulto.</p>
          </div>
        ) : (
          Array.from(gruppi.entries()).map(([lettera, voci]) => (
            <section
              key={lettera}
              id={`lettera-${lettera}`}
              aria-label={`Lettera ${lettera}`}
              style={{ scrollMarginTop: "calc(var(--header-h) + 150px)" }}
              className="pt-8 md:pt-10"
            >
              <div className="flex items-center gap-4 mb-4 md:mb-5">
                <h2 className="font-heading text-3xl md:text-4xl text-blu-scuro leading-none">{lettera}</h2>
                <span className="flex-1 h-px bg-blu-notte/15" aria-hidden="true" />
              </div>
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-3" role="list">
                {voci.map((m) => (
                  <li key={m.slug}>
                    <Link
                      href={`/malattie-dermatologiche/${m.slug}`}
                      className="group h-full min-h-[118px] md:min-h-[128px] flex flex-col justify-between rounded-[16px] bg-azzurro-chiaro p-4 md:p-5 border border-transparent hover:border-brand-blu hover:bg-white transition-colors duration-300"
                    >
                      <span className="text-[15px] md:text-[17px] leading-snug text-blu-notte">{m.nome}</span>
                      <span>
                        <span className="block w-14 h-px bg-blu-notte/30 mb-2.5 transition-all duration-300 group-hover:w-20 group-hover:bg-blu-scuro" aria-hidden="true" />
                        <span className="inline-flex items-center gap-1.5 text-[12.5px] text-blu-scuro">
                          Scopri
                          <ArrowRight strokeWidth={1.5} className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}
      </div>
    </div>
  )
}
