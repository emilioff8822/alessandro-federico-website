"use client"

import { useActionState } from "react"
import { useSearchParams } from "next/navigation"
import { sendContactEmail, type ContactState } from "@/app/actions/contact"
import { ArrowRight, CheckCircle } from "lucide-react"
import { macroAree } from "@/data/servizi"
import { siteConfig } from "@/data/siteConfig"

const initialState: ContactState = { status: "idle" }

const campoClasses =
  "w-full px-5 bg-transparent border border-white/55 text-[15px] text-white placeholder:text-white/75 transition-all duration-300 hover:border-white/80 focus:border-brand-blu focus:shadow-[0_0_0_3px_rgba(146,181,217,0.35)] focus:outline-none"

const inputClasses = `${campoClasses} h-12 rounded-full`

const optionClasses = "text-blu-notte bg-white"

function Chevron() {
  return (
    <svg
      className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-white/80"
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
      <div className="flex flex-col items-center gap-5 py-10 text-center">
        <div className="icon-circle w-16 h-16">
          <CheckCircle strokeWidth={1.4} className="w-8 h-8" />
        </div>
        <div>
          <p className="font-heading text-2xl md:text-3xl text-white mb-2">Richiesta ricevuta.</p>
          <p className="text-sm leading-[1.75] text-white/80 max-w-xs mx-auto">
            Verrai ricontattato al più presto per fissare l&apos;appuntamento.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form action={action} className="flex flex-col gap-4" noValidate>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nome" className="sr-only">Nome e cognome (obbligatorio)</label>
          <input id="nome" name="nome" type="text" required autoComplete="name" placeholder="Nome e cognome*" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email (obbligatoria)</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="Email*" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="telefono" className="sr-only">Telefono</label>
          <input id="telefono" name="telefono" type="tel" autoComplete="tel" placeholder="Telefono" className={inputClasses} />
        </div>
        <div className="relative">
          <label htmlFor="area" className="sr-only">Area di interesse</label>
          <select id="area" name="area" className={`${inputClasses} appearance-none pr-12 cursor-pointer`} defaultValue={defaultArea}>
            <option value="" className={optionClasses}>Area di interesse</option>
            {macroAree.map((a) => (
              <option key={a.id} value={a.id} className={optionClasses}>{a.titolo}</option>
            ))}
            <option value="altro" className={optionClasses}>Altro</option>
          </select>
          <Chevron />
        </div>
      </div>

      <div className="relative">
        <label htmlFor="sede" className="sr-only">Sede preferita</label>
        <select id="sede" name="sede" className={`${inputClasses} appearance-none pr-12 cursor-pointer`} defaultValue="">
          <option value="" className={optionClasses}>Sede preferita: indifferente</option>
          {siteConfig.sedi.map((s) => (
            <option key={s.id} value={s.citta} className={optionClasses}>Sede di {s.citta}</option>
          ))}
        </select>
        <Chevron />
      </div>

      <div>
        <label htmlFor="messaggio" className="sr-only">Messaggio (obbligatorio)</label>
        <textarea
          id="messaggio"
          name="messaggio"
          required
          rows={5}
          placeholder="Scrivi un messaggio: motivo della visita e disponibilità*"
          className={`${campoClasses} rounded-[20px] py-4 resize-none`}
        />
      </div>

      <p className="text-[12.5px] leading-[1.7] text-white/75">
        * I campi contrassegnati con l&apos;asterisco sono obbligatori. I dati inviati saranno
        utilizzati esclusivamente per rispondere alla tua richiesta, nel rispetto del
        Regolamento UE 2016/679 (GDPR).
      </p>

      {state.status === "error" && (
        <p className="text-sm text-white bg-white/10 border border-brand-blu/60 rounded-2xl px-4 py-3" role="alert">
          {state.message}
        </p>
      )}

      <div className="pt-2 flex justify-center">
        <button type="submit" disabled={pending} className="btn btn-light disabled:opacity-50 disabled:cursor-not-allowed">
          {pending ? "Invio in corso…" : "Invia richiesta"}
          {!pending && <ArrowRight strokeWidth={1.5} className="btn-arrow w-4 h-4" aria-hidden="true" />}
        </button>
      </div>

    </form>
  )
}
