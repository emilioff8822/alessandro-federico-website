"use client"

import { useActionState } from "react"
import { useSearchParams } from "next/navigation"
import { sendContactEmail, type ContactState } from "@/app/actions/contact"
import { CheckCircle } from "lucide-react"
import { macroAree } from "@/data/servizi"
import { siteConfig } from "@/data/siteConfig"

const initialState: ContactState = { status: "idle" }

const inputClasses =
  "w-full px-4 py-3.5 bg-white border border-blu-notte/15 rounded-xl text-base text-blu-notte placeholder:text-grigio-testo/50 transition-all duration-300 focus:border-blu-scuro focus:shadow-[0_0_0_4px_rgba(146,181,217,0.25)] focus:outline-none"

const labelClasses = "eyebrow text-[11px] text-blu-notte"

function Chevron() {
  return (
    <svg
      className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-blu-scuro"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, initialState)
  const searchParams = useSearchParams()
  const areaParam = searchParams.get("area")
  const defaultArea = macroAree.some((a) => a.id === areaParam) ? areaParam! : ""

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-5 py-14 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-blu flex items-center justify-center">
          <CheckCircle strokeWidth={1.4} className="w-8 h-8 text-blu-notte" />
        </div>
        <div>
          <p className="font-heading text-2xl md:text-3xl text-blu-notte mb-2">Richiesta ricevuta.</p>
          <p className="text-sm leading-[1.75] max-w-xs mx-auto">
            Verrai ricontattato al più presto per fissare l&apos;appuntamento.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form action={action} className="flex flex-col gap-5" noValidate>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className={labelClasses}>
            Nome <span className="text-blu-scuro">*</span>
          </label>
          <input id="nome" name="nome" type="text" required autoComplete="name" placeholder="Il tuo nome" className={inputClasses} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClasses}>
            Email <span className="text-blu-scuro">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="la-tua@email.com" className={inputClasses} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="telefono" className={labelClasses}>Telefono</label>
        <input id="telefono" name="telefono" type="tel" autoComplete="tel" placeholder="Per essere ricontattato più velocemente" className={inputClasses} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="area" className={labelClasses}>Area di interesse</label>
          <div className="relative">
            <select id="area" name="area" className={`${inputClasses} appearance-none pr-10 cursor-pointer`} defaultValue={defaultArea}>
              <option value="">Seleziona un&apos;area</option>
              {macroAree.map((a) => (
                <option key={a.id} value={a.id}>{a.titolo}</option>
              ))}
              <option value="altro">Altro</option>
            </select>
            <Chevron />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="sede" className={labelClasses}>Sede preferita</label>
          <div className="relative">
            <select id="sede" name="sede" className={`${inputClasses} appearance-none pr-10 cursor-pointer`} defaultValue="">
              <option value="">Indifferente</option>
              {siteConfig.sedi.map((s) => (
                <option key={s.id} value={s.citta}>{s.citta}</option>
              ))}
            </select>
            <Chevron />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="messaggio" className={labelClasses}>
          Messaggio <span className="text-blu-scuro">*</span>
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          required
          rows={5}
          placeholder="Descrivi brevemente il motivo della visita e la tua disponibilità…"
          className={`${inputClasses} resize-none`}
        />
      </div>

      <p className="text-xs leading-[1.7] text-grigio-testo/80">
        I dati inviati saranno utilizzati esclusivamente per rispondere alla tua richiesta,
        nel rispetto del Regolamento UE 2016/679 (GDPR).
      </p>

      {state.status === "error" && (
        <p className="text-sm text-blu-notte bg-azzurro-chiaro border border-brand-blu rounded-xl px-4 py-3" role="alert">
          {state.message}
        </p>
      )}

      <div className="pt-2 flex justify-center">
        <button type="submit" disabled={pending} className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
          {pending ? "Invio in corso…" : "Invia la richiesta"}
        </button>
      </div>

    </form>
  )
}
