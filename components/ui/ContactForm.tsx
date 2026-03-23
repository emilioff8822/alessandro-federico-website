"use client"

import { useActionState } from "react"
import { useSearchParams } from "next/navigation"
import { sendContactEmail, type ContactState } from "@/app/actions/contact"
import { CheckCircle } from "lucide-react"

const initialState: ContactState = { status: "idle" }

const areaValues = ["dermatologia", "medicina-estetica", "altro"] as const

const inputClasses =
  "w-full px-4 py-3 bg-white border border-[rgba(17,24,39,0.12)] rounded-lg text-base text-text placeholder:text-[rgba(17,24,39,0.3)] transition-all duration-300 focus:border-[#7AAEC9] focus:shadow-[0_0_0_3px_rgba(122,174,201,0.12)] focus:outline-none font-sans"

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, initialState)
  const searchParams = useSearchParams()
  const areaParam = searchParams.get("area")
  const defaultArea =
    areaParam && areaValues.includes(areaParam as typeof areaValues[number])
      ? areaParam
      : ""

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-5 py-14 text-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #3A8A9E22, #3A8A9E44)" }}
        >
          <CheckCircle strokeWidth={1.4} className="w-7 h-7" style={{ color: "#3A8A9E" }} />
        </div>
        <div>
          <p className="font-heading text-2xl md:text-3xl text-text mb-2">
            Messaggio ricevuto.
          </p>
          <p className="font-sans text-sm text-muted leading-[1.75] max-w-xs mx-auto">
            Ti rispondo entro 24 ore nei giorni lavorativi.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form action={action} className="flex flex-col gap-5" noValidate>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nome" className="font-sans text-xs uppercase tracking-[0.15em] text-muted font-medium">
            Nome <span className="text-[#3A8A9E]">*</span>
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            placeholder="Il tuo nome"
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="font-sans text-xs uppercase tracking-[0.15em] text-muted font-medium">
            Email <span className="text-[#3A8A9E]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="la-tua@email.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="area" className="font-sans text-xs uppercase tracking-[0.15em] text-muted font-medium">
          Area di interesse
        </label>
        <div className="relative">
          <select
            id="area"
            name="area"
            className={`${inputClasses} appearance-none pr-10 cursor-pointer`}
            defaultValue={defaultArea}
          >
            <option value="">Seleziona un&apos;area</option>
            <option value="dermatologia">Dermatologia</option>
            <option value="medicina-estetica">Medicina Estetica</option>
            <option value="altro">Altro</option>
          </select>
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
            style={{ color: "rgba(17,24,39,0.3)" }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="messaggio" className="font-sans text-xs uppercase tracking-[0.15em] text-muted font-medium">
          Messaggio <span className="text-[#3A8A9E]">*</span>
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          required
          rows={5}
          placeholder="Descrivi brevemente la tua richiesta o il motivo della visita…"
          className={`${inputClasses} resize-none`}
        />
      </div>

      <p className="font-sans text-xs text-[rgba(17,24,39,0.35)] leading-[1.7]">
        I dati inviati saranno utilizzati esclusivamente per rispondere alla tua richiesta,
        nel rispetto del Regolamento UE 2016/679 (GDPR).
      </p>

      {state.status === "error" && (
        <p className="font-sans text-sm text-red-500 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
          {state.message}
        </p>
      )}

      <div className="pt-2 flex justify-center">
        <button
          type="submit"
          disabled={pending}
          className="px-10 py-3.5 font-sans text-[13px] uppercase tracking-[0.15em] font-medium text-white rounded-lg transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(58,138,158,0.3)] active:translate-y-0 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
          style={{ background: "linear-gradient(135deg, #3A8A9E, #4D9DB2)" }}
        >
          {pending ? "Invio in corso…" : "Invia messaggio"}
        </button>
      </div>

    </form>
  )
}
