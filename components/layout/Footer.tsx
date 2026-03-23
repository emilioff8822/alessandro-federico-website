import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/data/siteConfig"

const GRADIENT = "linear-gradient(135deg, #3D7A97 0%, #4E8FAC 100%)"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-14 px-5 md:px-10"
      style={{ background: GRADIENT }}
      aria-label="Footer"
    >
      <div className="mx-auto max-w-6xl">

        {/* Logo + nome — sigillo di chiusura */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-8 h-8 mb-3">
            <Image
              src="/images/logo-federico-transparent.png"
              alt="Logo Dr. Alessandro Federico"
              width={32}
              height={32}
              className="object-contain brightness-0 invert opacity-60"
            />
          </div>
          <p className="font-heading text-lg text-white">{siteConfig.name}</p>
          <p className="text-xs text-white/50 tracking-wider uppercase mt-1">
            Dermatologo · Medicina Estetica · Milano
          </p>
        </div>

        <div className="w-16 h-px bg-white/15 mx-auto mb-10" />

        {/* Griglia 3 colonne — su mobile impilate e centrate */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-10 text-center md:text-left">

          {/* Colonna 1: identità */}
          <div>
            <p className="font-heading text-base text-white mb-1">
              {siteConfig.name}
            </p>
            <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/40 mb-4">
              {siteConfig.role}
            </p>
            {siteConfig.phonePlain && (
              <a
                href={`tel:${siteConfig.phonePlain}`}
                className="block font-sans text-sm text-white/60 py-0.5 hover:text-white transition-colors duration-300"
              >
                {siteConfig.phone}
              </a>
            )}
            <a
              href={`mailto:${siteConfig.email}`}
              className="block font-sans text-sm text-white/60 py-0.5 hover:text-white transition-colors duration-300"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Colonna 2: studio */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/40 mb-4">
              Studio
            </p>
            {siteConfig.address && siteConfig.address !== "—" ? (
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address + " " + siteConfig.city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-300 leading-relaxed"
              >
                {siteConfig.address}<br />
                {siteConfig.cap} {siteConfig.city}
              </a>
            ) : (
              <p className="font-sans text-sm text-white/30 italic">Da definire</p>
            )}
          </div>

          {/* Colonna 3: orari */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/40 mb-4">
              Orari
            </p>
            <div className="space-y-2">
              {siteConfig.orari.map((slot) => (
                <div
                  key={slot.giorno}
                  className="flex justify-center md:justify-between items-center gap-4 font-sans text-sm"
                >
                  <span className="text-white/45">{slot.giorno}</span>
                  <span className="text-white/70">{slot.ore}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Separatore */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/25">
            © {year} · {siteConfig.name}
            {siteConfig.piva && siteConfig.piva !== "—" && ` · P.IVA ${siteConfig.piva}`}
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="font-sans text-xs text-white/25 hover:text-white/55 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie"
              className="font-sans text-xs text-white/25 hover:text-white/55 transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
