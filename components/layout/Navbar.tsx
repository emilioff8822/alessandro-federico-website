"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"
import { siteConfig } from "@/data/siteConfig"
import WhatsAppIcon from "@/components/ui/WhatsAppIcon"
import BrandLockup from "./BrandLockup"

const voci = siteConfig.navLinks.filter((l) => l.href !== "/prenota")

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 50, restDelta: 0.001 })

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1280) setMenuOpen(false) }
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("resize", onResize)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("resize", onResize)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled || menuOpen ? "shadow-[0_1px_0_rgba(30,53,80,0.08),0_8px_24px_rgba(30,53,80,0.05)]" : ""
        }`}
      >
        <div
          className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 md:px-10"
          style={{ height: "var(--header-h)" }}
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="py-2 shrink-0"
            aria-label="Homepage Dott. Alessandro Federico"
          >
            <BrandLockup priority />
          </Link>

          <div className="hidden xl:flex items-center gap-8">
            <nav className="flex items-center gap-[22px] 2xl:gap-7" aria-label="Navigazione principale">
              {voci.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`link-hover eyebrow text-[11.5px] tracking-[0.12em] whitespace-nowrap transition-colors duration-300 ${
                    isActive(link.href) ? "text-blu-scuro" : "text-grigio-testo hover:text-blu-scuro"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/prenota"
              aria-current={isActive("/prenota") ? "page" : undefined}
              className="btn btn-primary !py-2.5 !px-5"
            >
              Prenota
              <ArrowRight strokeWidth={1.5} className="btn-arrow w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden flex flex-col items-center justify-center w-11 h-11 gap-[6px] -mr-2"
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block h-px w-6 bg-blu-notte transition-all duration-300 origin-center ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-blu-notte transition-all duration-300 origin-center ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-blu-notte transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>

        <motion.div
          style={{ scaleX, transformOrigin: "left" }}
          className="h-[2px] bg-brand-blu/70"
        />
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-40 xl:hidden bg-white overflow-y-auto"
            style={{ top: "var(--header-h)" }}
            aria-label="Menu mobile"
          >
            <div className="mx-auto w-full max-w-md px-5 pt-4 pb-12">
              <ul className="flex flex-col w-full" role="list">
                {siteConfig.navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.04 * i }}
                    className="border-b border-blu-notte/[0.08]"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={`eyebrow text-[13px] tracking-[0.14em] min-h-[58px] flex items-center justify-between transition-colors duration-150 ${
                        isActive(link.href) ? "text-blu-scuro" : "text-grigio-testo"
                      }`}
                    >
                      {link.label}
                      <ArrowRight strokeWidth={1.3} className="w-4 h-4 text-brand-blu" aria-hidden="true" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="mt-8 flex flex-col gap-3"
              >
                <Link href="/prenota" onClick={() => setMenuOpen(false)} className="btn btn-primary w-full">
                  Prenota una visita
                  <ArrowRight strokeWidth={1.5} className="btn-arrow w-4 h-4" aria-hidden="true" />
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <a href={siteConfig.segreteria.href} className="btn btn-outline !px-3">
                    <Phone strokeWidth={1.5} className="w-4 h-4" aria-hidden="true" />
                    Chiama
                  </a>
                  <a href={siteConfig.whatsapp.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline !px-3">
                    <WhatsAppIcon className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
