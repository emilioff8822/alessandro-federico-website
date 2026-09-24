"use server"

import { Resend } from "resend"
import { macroAree } from "@/data/servizi"

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactState = {
  status: "idle" | "success" | "error"
  message?: string
}

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

const riga = (label: string, valore: string) => `
  <tr>
    <td style="padding: 12px 0; border-bottom: 1px solid #EEF4FA; color: #414042; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 110px; vertical-align: top;">${label}</td>
    <td style="padding: 12px 0; border-bottom: 1px solid #EEF4FA; font-size: 15px; color: #1E3550;">${valore}</td>
  </tr>`

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const get = (k: string) => ((formData.get(k) as string) ?? "").trim()
  const nome = get("nome")
  const email = get("email")
  const telefono = get("telefono")
  const area = get("area")
  const sede = get("sede")
  const messaggio = get("messaggio")

  if (!nome || !email || !messaggio) {
    return { status: "error", message: "Compila nome, email e messaggio." }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Inserisci un indirizzo email valido." }
  }

  const areaLabel = macroAree.find((a) => a.id === area)?.titolo ?? (area === "altro" ? "Altro" : "Non specificata")
  const sedeLabel = sede || "Indifferente"

  const { error } = await resend.emails.send({
    from: "Dott. Alessandro Federico <noreply@alessandrofederico.it>",
    to: "alfederico89@gmail.com",
    replyTo: email,
    subject: `Richiesta appuntamento da ${nome} — ${areaLabel}`,
    html: `
      <div style="font-family: Montserrat, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; color: #414042; background: #FFFFFF;">
        <div style="border-bottom: 2px solid #92B5D9; padding-bottom: 20px; margin-bottom: 28px;">
          <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; color: #3F6C9A; margin: 0 0 6px;">
            Dott. Alessandro Federico — Sito web
          </p>
          <p style="font-size: 20px; margin: 0; color: #1E3550;">Nuova richiesta di appuntamento</p>
        </div>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
          ${riga("Nome", escape(nome))}
          ${riga("Email", `<a href="mailto:${escape(email)}" style="color: #3F6C9A;">${escape(email)}</a>`)}
          ${telefono ? riga("Telefono", `<a href="tel:${escape(telefono)}" style="color: #3F6C9A;">${escape(telefono)}</a>`) : ""}
          ${riga("Area", escape(areaLabel))}
          ${riga("Sede", escape(sedeLabel))}
        </table>
        <div style="background: #EEF4FA; border-left: 3px solid #92B5D9; padding: 20px 24px; border-radius: 0 8px 8px 0;">
          <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; color: #3F6C9A; margin: 0 0 10px;">Messaggio</p>
          <p style="font-size: 15px; line-height: 1.75; color: #414042; white-space: pre-wrap; margin: 0;">${escape(messaggio)}</p>
        </div>
        <p style="margin-top: 32px; font-size: 12px; color: #414042; border-top: 1px solid #EEF4FA; padding-top: 20px;">
          Rispondi direttamente a questa email per contattare ${escape(nome)}.
          Richiesta inviata dal modulo su alessandrofederico.it
        </p>
      </div>
    `,
  })

  if (error) {
    return {
      status: "error",
      message: "Errore nell'invio. Riprova oppure contatta lo studio per telefono o WhatsApp.",
    }
  }

  return { status: "success" }
}
