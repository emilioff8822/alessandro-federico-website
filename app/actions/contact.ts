"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactState = {
  status: "idle" | "success" | "error"
  message?: string
}

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const nome     = (formData.get("nome")      as string)?.trim()
  const email    = (formData.get("email")     as string)?.trim()
  const area     = (formData.get("area")      as string)?.trim()
  const messaggio = (formData.get("messaggio") as string)?.trim()

  if (!nome || !email || !messaggio) {
    return { status: "error", message: "Tutti i campi obbligatori devono essere compilati." }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Inserisci un indirizzo email valido." }
  }

  const areaLabel = area || "Non specificata"

  const { error } = await resend.emails.send({
    from: "Dr. Alessandro Federico <noreply@alessandrofederico.it>",
    to: "alfederico89@gmail.com",
    replyTo: email,
    subject: `Nuovo messaggio da ${nome} — ${areaLabel}`,
    html: `
      <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; color: #111827; background: #ffffff;">

        <div style="border-bottom: 2px solid #7AAEC9; padding-bottom: 20px; margin-bottom: 28px;">
          <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #7AAEC9; margin: 0 0 6px;">
            Dr. Alessandro Federico — Sito Web
          </p>
          <p style="font-size: 20px; font-weight: 600; margin: 0; color: #111827;">
            Nuovo messaggio ricevuto
          </p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 100px; vertical-align: top;">Nome</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 15px; color: #111827;">${nome}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 15px;">
              <a href="mailto:${email}" style="color: #3A8A9E;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Area</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 15px; color: #111827;">${areaLabel}</td>
          </tr>
        </table>

        <div style="background: #F4F9FB; border-left: 3px solid #7AAEC9; padding: 20px 24px; border-radius: 0 8px 8px 0;">
          <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #7AAEC9; margin: 0 0 10px;">Messaggio</p>
          <p style="font-size: 15px; line-height: 1.75; color: #374151; white-space: pre-wrap; margin: 0;">${messaggio}</p>
        </div>

        <p style="margin-top: 32px; font-size: 12px; color: #9ca3af; border-top: 1px solid #f3f4f6; padding-top: 20px;">
          Rispondi direttamente a questa email per contattare ${nome}.
          Messaggio inviato tramite il modulo di contatto su alessandrofederico.it
        </p>
      </div>
    `,
  })

  if (error) {
    return {
      status: "error",
      message: "Errore nell'invio. Riprova o contattami direttamente per email.",
    }
  }

  return { status: "success" }
}
