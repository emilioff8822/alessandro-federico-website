import { Star } from "lucide-react"
import type { Testimonianza } from "@/data/testimonianze"

export default function RecensioneCard({ t, compatta = false }: { t: Testimonianza; compatta?: boolean }) {
  return (
    <article className="h-full flex flex-col rounded-[16px] bg-white p-6 md:p-7">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-10 h-10 rounded-full bg-blu-scuro text-white flex items-center justify-center text-sm shrink-0" aria-hidden="true">
          {t.nome.charAt(0)}
        </span>
        <div className="min-w-0">
          <p className="text-[15px] text-blu-notte leading-tight">{t.nome}</p>
          <p className="text-[12px] text-grigio-testo">{t.citta}</p>
        </div>
      </div>
      <div className="flex gap-0.5 mb-4" role="img" aria-label={`${t.stelle} stelle su 5`}>
        {Array.from({ length: t.stelle }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current text-blu-scuro" strokeWidth={0} />
        ))}
      </div>
      <p className={`text-[14.5px] leading-[1.7] text-grigio-testo flex-1 ${compatta ? "line-clamp-5" : ""}`}>
        &ldquo;{t.testo}&rdquo;
      </p>
      <p className="eyebrow text-[10px] tracking-[0.14em] text-blu-scuro mt-5 pt-4 border-t border-blu-notte/10">
        {t.trattamento}
      </p>
    </article>
  )
}
