import Link from "next/link"
import { CalendarDays, MapPin, Phone } from "lucide-react"
import WhatsAppIcon from "@/components/ui/WhatsAppIcon"
import { siteConfig } from "@/data/siteConfig"

type Voce = {
  icona: React.ReactNode
  etichetta: string
  valore: string
  href: string
  esterno?: boolean
}

const voci: Voce[] = [
  {
    icona: <Phone strokeWidth={1.4} className="w-5 h-5" />,
    etichetta: `Per prenotare: ${siteConfig.segreteria.label}`,
    valore: siteConfig.segreteria.numero,
    href: siteConfig.segreteria.href,
  },
  {
    icona: <WhatsAppIcon className="w-5 h-5" />,
    etichetta: "Scrivi su WhatsApp",
    valore: siteConfig.whatsapp.numero,
    href: siteConfig.whatsapp.href,
    esterno: true,
  },
  {
    icona: <MapPin strokeWidth={1.4} className="w-5 h-5" />,
    etichetta: siteConfig.sedi.map((s) => s.citta).join(" · "),
    valore: "Come arrivare",
    href: "/prenota#sedi",
  },
  {
    icona: <CalendarDays strokeWidth={1.4} className="w-5 h-5" />,
    etichetta: "Hai bisogno di aiuto?",
    valore: "Prenota una visita",
    href: "/prenota",
  },
]

export default function InfoStrip() {
  return (
    <div className="container-site">
      <ul
        className="border-t border-blu-notte/25 pt-8 md:pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6"
        role="list"
      >
        {voci.map((v) => {
          const contenuto = (
            <>
              <span className="icon-circle w-12 h-12 transition-colors duration-300 group-hover:bg-blu-scuro group-hover:text-white">
                {v.icona}
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] leading-snug text-grigio-testo">{v.etichetta}</span>
                <span className="block text-[16px] text-blu-notte font-medium mt-0.5 group-hover:text-blu-scuro transition-colors duration-300">
                  {v.valore}
                </span>
              </span>
            </>
          )
          const cls = "group flex items-center gap-4"
          return (
            <li key={v.valore}>
              {v.esterno ? (
                <a href={v.href} target="_blank" rel="noopener noreferrer" className={cls}>{contenuto}</a>
              ) : v.href.startsWith("/") ? (
                <Link href={v.href} className={cls}>{contenuto}</Link>
              ) : (
                <a href={v.href} className={cls}>{contenuto}</a>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
