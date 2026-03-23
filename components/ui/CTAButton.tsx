"use client"

import Link from "next/link"

type CustomColor = {
  default: string
  hover: string
  active: string
  shadowRgb: string
}

type Props = {
  text: string
  href: string
  fullWidth?: boolean
  inverted?: boolean
  solid?: boolean
  customColor?: CustomColor
}

export default function CTAButton({
  text,
  href,
  fullWidth = false,
  inverted = false,
  solid = false,
  customColor,
}: Props) {
  const base =
    "inline-flex items-center justify-center px-8 py-3.5 text-[13px] uppercase tracking-[0.15em] font-sans font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] select-none"

  // ── Variante con colore personalizzato (teal/slate in pagina Specialità) ──
  if (customColor) {
    return (
      <Link
        href={href}
        className={`${base} border-[1.5px] text-white ${fullWidth ? "w-full" : ""}`}
        style={{
          background: customColor.default,
          borderColor: customColor.default,
        }}
        onMouseEnter={e => {
          const el = e.currentTarget
          el.style.background = customColor.hover
          el.style.borderColor = customColor.hover
          el.style.transform = "translateY(-2px)"
          el.style.boxShadow = `0 8px 28px rgba(${customColor.shadowRgb}, 0.28)`
        }}
        onMouseLeave={e => {
          const el = e.currentTarget
          el.style.background = customColor.default
          el.style.borderColor = customColor.default
          el.style.transform = ""
          el.style.boxShadow = ""
        }}
        onMouseDown={e => {
          const el = e.currentTarget
          el.style.background = customColor.active
          el.style.borderColor = customColor.active
          el.style.transform = "scale(0.97)"
          el.style.boxShadow = ""
        }}
        onMouseUp={e => {
          const el = e.currentTarget
          el.style.background = customColor.hover
          el.style.borderColor = customColor.hover
          el.style.transform = "translateY(-2px)"
        }}
        onTouchStart={e => {
          const el = e.currentTarget
          el.style.background = customColor.active
          el.style.transform = "scale(0.97)"
        }}
        onTouchEnd={e => {
          const el = e.currentTarget
          el.style.background = customColor.default
          el.style.transform = ""
        }}
      >
        {text}
      </Link>
    )
  }

  // ── Variante normale (bordo sottile, diventa accent su hover) ──
  if (!solid && !inverted) {
    return (
      <Link
        href={href}
        className={`${base} border-[1.5px] border-[rgba(17,24,39,0.18)] text-text
          hover:bg-[#7AAEC9] hover:text-white hover:border-[#7AAEC9] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(122,174,201,0.28)]
          active:bg-[#6AACC4] active:border-[#6AACC4] active:translate-y-0 active:scale-[0.97] active:shadow-none
          ${fullWidth ? "w-full" : ""}`}
      >
        {text}
      </Link>
    )
  }

  // ── Variante solid (riempita col colore accent) ──
  if (solid) {
    return (
      <Link
        href={href}
        className={`${base} bg-[#7AAEC9] border-[1.5px] border-[#7AAEC9] text-white
          hover:bg-[#5E9AB5] hover:border-[#5E9AB5] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(122,174,201,0.32)]
          active:bg-[#6AACC4] active:border-[#6AACC4] active:translate-y-0 active:scale-[0.97] active:shadow-none
          ${fullWidth ? "w-full" : ""}`}
      >
        {text}
      </Link>
    )
  }

  // ── Variante inverted (su sfondo scuro, testo bianco → bianco pieno su hover) ──
  return (
    <Link
      href={href}
      className={`${base} border-[1.5px] border-white/35 text-white
        hover:bg-white hover:text-[#3D7A97] hover:border-white hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,255,255,0.18)]
        active:bg-white/85 active:text-[#3D7A97] active:translate-y-0 active:scale-[0.97] active:shadow-none
        ${fullWidth ? "w-full" : ""}`}
    >
      {text}
    </Link>
  )
}
