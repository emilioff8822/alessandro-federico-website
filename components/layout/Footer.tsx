import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/data/siteConfig"

const labelClass = "eyebrow text-[10.5px] text-brand-blu mb-5"
const valueLink = "text-white/90 hover:text-brand-blu transition-colors duration-300"

export default function Footer() {
  const year = new Date().getFullYear()
  const [milano, paola] = siteConfig.sedi

  return (
    <footer className="bg-blu-notte text-white" aria-label="Footer">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10 pt-16 md:pt-20 pb-24 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.3fr_1fr] gap-12 md:gap-10 text-center md:text-left">

          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/brand/logo-bianco.png"
              alt="DR YOUTH — Alessandro Federico"
              width={700}
              height={1005}
              className="w-[120px] h-auto mb-5"
            />
            <p className="eyebrow text-[9.5px] tracking-[0.18em] text-white/75 mb-8 leading-relaxed">
              {siteConfig.sottotitolo}
            </p>
            <Link href="/prenota" className="btn btn-light">
              Prenota un appuntamento
            </Link>
          </div>

          <div>
            <p className={labelClass}>Dettagli e contatti</p>
            <ul className="space-y-3.5 text-[14px] leading-relaxed" role="list">
              <li className="text-white">{siteConfig.name}</li>
              <li className="text-white/90">
                <span className="text-brand-blu">Sede di Milano</span> – {milano.indirizzo}
              </li>
              <li className="text-white/90">
                <span className="text-brand-blu">Sede di {paola.citta}</span> – {paola.indirizzo}
              </li>
              <li>
                <span className="text-brand-blu">{siteConfig.segreteria.label}:</span>{" "}
                <a href={siteConfig.segreteria.href} className={valueLink}>{siteConfig.segreteria.numero}</a>
              </li>
              <li>
                <span className="text-brand-blu">{siteConfig.whatsapp.label}:</span>{" "}
                <a href={siteConfig.whatsapp.href} target="_blank" rel="noopener noreferrer" className={valueLink}>
                  {siteConfig.whatsapp.numero}
                </a>
              </li>
              <li>
                <span className="text-brand-blu">Email:</span>{" "}
                <a href={`mailto:${siteConfig.email}`} className={`${valueLink} break-all`}>{siteConfig.email}</a>
              </li>
            </ul>
          </div>

          <nav aria-label="Link del footer">
            <p className={labelClass}>Il sito</p>
            <ul className="space-y-3" role="list">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link text-[14px] text-white/90 hover:text-brand-blu">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="h-px bg-white/10 mt-14 mb-6" />

        <p className="text-[12px] text-white/60 text-center md:text-left">
          © {year} · {siteConfig.name} · {siteConfig.qualifica}
        </p>
      </div>
    </footer>
  )
}
