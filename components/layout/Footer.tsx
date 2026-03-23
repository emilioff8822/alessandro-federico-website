import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/data/siteConfig"

const GRADIENT = "linear-gradient(135deg, #4A7D9A, #5E96B0)"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-12 px-5 md:px-12"
      style={{ background: GRADIENT }}
      aria-label="Footer"
    >
      <div className="mx-auto max-w-6xl">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">

          {/* Colonna 1: logo + contatti */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <div className="relative w-8 h-8 rounded-md overflow-hidden bg-white flex-shrink-0 shadow-sm">
                <Image
                  src="/images/logo.png"
                  alt="Logo Dr. Alessandro Federico"
                  fill
                  sizes="32px"
                  quality={95}
                  className="object-contain p-0.5"
                />
              </div>
              <p className="font-sans text-sm font-medium text-white">
                {siteConfig.name}
              </p>
            </div>
            <p className="text-xs text-white/50 mb-3 font-sans">
              {siteConfig.role}
            </p>
            {siteConfig.phone !== "[DA DEFINIRE]" && (
              <a
                href={`tel:${siteConfig.phonePlain}`}
                className="block text-sm text-white/60 py-0.5 hover:text-white transition-colors duration-300 footer-link"
              >
                {siteConfig.phone}
              </a>
            )}
            {siteConfig.email !== "[DA DEFINIRE]" && (
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-sm text-white/60 py-0.5 hover:text-white transition-colors duration-300 footer-link"
              >
                {siteConfig.email}
              </a>
            )}
          </div>

          {/* Colonna 2: studio */}
          <div className="text-center md:text-left">
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-white/40 mb-3">
              Studio
            </p>
            {siteConfig.address !== "[DA DEFINIRE]" ? (
              <a
                href={`https://maps.google.com/?q=${siteConfig.address}+${siteConfig.city}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                {siteConfig.address}<br />
                {siteConfig.cap} {siteConfig.city}
              </a>
            ) : (
              <p className="text-sm text-white/40 italic">Da definire</p>
            )}
          </div>

          {/* Colonna 3: orari */}
          <div className="text-center md:text-left">
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-white/40 mb-3">
              Orari
            </p>
            <div className="space-y-1.5">
              {siteConfig.orari.map((slot) => (
                <div key={slot.giorno} className="flex justify-center md:justify-between text-sm gap-4">
                  <span className="text-white/50">{slot.giorno}</span>
                  <span className="text-white/70">{slot.ore}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Separatore */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-sans text-xs text-white/25">
            © {year} · {siteConfig.name}
            {siteConfig.piva !== "[DA DEFINIRE]" && ` · P.IVA ${siteConfig.piva}`}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="font-sans text-xs text-white/25 hover:text-white/60 transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              href="/cookie"
              className="font-sans text-xs text-white/25 hover:text-white/60 transition-colors duration-300"
            >
              Cookie
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
