"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Mail, Phone, X } from "lucide-react"
import { siteConfig } from "@/data/siteConfig"
import WhatsAppIcon from "@/components/ui/WhatsAppIcon"

const RADIUS = 92

const actions = [
  {
    id: "whatsapp",
    label: "WhatsApp – Dott. Alessandro Federico",
    href: siteConfig.whatsapp.href,
    external: true,
    angle: 270,
    className: "bg-whatsapp text-white border-whatsapp",
    icon: <WhatsAppIcon className="w-6 h-6" />,
  },
  {
    id: "telefono",
    label: "Telefono – Segreteria (Stefania)",
    href: siteConfig.segreteria.href,
    external: false,
    angle: 225,
    className: "bg-white text-blu-notte border-brand-blu",
    icon: <Phone strokeWidth={1.5} className="w-5 h-5" />,
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    external: false,
    angle: 180,
    className: "bg-white text-blu-notte border-brand-blu",
    icon: <Mail strokeWidth={1.5} className="w-5 h-5" />,
  },
]

export default function InfoFab() {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    const onPointer = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("pointerdown", onPointer)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("pointerdown", onPointer)
    }
  }, [open])

  return (
    <div
      ref={rootRef}
      className="fixed z-[60] right-4 md:right-7"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)" }}
    >
      <div className="relative w-16 h-16">
        <AnimatePresence>
          {open &&
            actions.map((a, i) => {
              const rad = (a.angle * Math.PI) / 180
              const x = Math.cos(rad) * RADIUS
              const y = Math.sin(rad) * RADIUS
              return (
                <motion.a
                  key={a.id}
                  href={a.href}
                  target={a.external ? "_blank" : undefined}
                  rel={a.external ? "noopener noreferrer" : undefined}
                  aria-label={a.label}
                  title={a.label}
                  onClick={() => setOpen(false)}
                  initial={{ x: 0, y: 0, scale: 0.3, opacity: 0 }}
                  animate={{ x, y, scale: 1, opacity: 1 }}
                  exit={{ x: 0, y: 0, scale: 0.3, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 420, damping: 28, delay: open ? i * 0.04 : 0 }}
                  className={`absolute left-1.5 top-1.5 w-[52px] h-[52px] rounded-full border-[1.5px] flex items-center justify-center shadow-[0_8px_24px_rgba(30,53,80,0.18)] ${a.className}`}
                >
                  {a.icon}
                </motion.a>
              )
            })}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Chiudi contatti" : "Apri contatti"}
          className="relative w-16 h-16 rounded-full bg-blu-notte text-white flex flex-col items-center justify-center shadow-[0_10px_30px_rgba(30,53,80,0.35)] ring-4 ring-white/70 transition-transform duration-300 active:scale-95"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X strokeWidth={1.5} className="w-7 h-7" />
              </motion.span>
            ) : (
              <motion.span
                key="info"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center gap-1.5"
              >
                <span className="text-[12px] font-medium tracking-[0.2em] pl-[0.2em] leading-none">INFO</span>
                <span className="flex gap-[4px]" aria-hidden="true">
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      className="w-[4px] h-[4px] rounded-full bg-brand-blu"
                      animate={{ opacity: [0.35, 1, 0.35] }}
                      transition={{ duration: 1.4, repeat: Infinity, delay: d * 0.2 }}
                    />
                  ))}
                </span>
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  )
}
