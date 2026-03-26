"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { siteConfig } from "@/data/siteConfig"

const GRADIENT = "linear-gradient(135deg, #5A93A6 0%, #6D9FB2 100%)"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 50, restDelta: 0.001 })

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50"
        style={{ background: GRADIENT }}
      >
        <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 md:px-10">

          {/* Identità — logo + tipografia */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-3 py-2"
            aria-label="Homepage Dr. Alessandro Federico"
          >
            <div className="relative w-[28px] h-[28px] flex-shrink-0">
              <Image
                src="/images/logo-dryouth-symbol.png"
                alt="Logo Dr. Youth — Alessandro Federico"
                width={28}
                height={28}
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-[15px] text-white tracking-wide group-hover:text-white/90 transition-colors duration-300">
                Dr. Alessandro Federico
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-white/50 mt-0.5 hidden sm:block">
                Dermatologo · Medicina Estetica
              </span>
            </div>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigazione principale">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`link-hover font-sans text-[13px] tracking-wide transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-white"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px]"
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block h-px w-[22px] bg-white/80 transition-all duration-300 origin-center ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-px w-[22px] bg-white/80 transition-all duration-300 origin-center ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-[22px] bg-white/80 transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Barra progresso scroll */}
        <motion.div
          style={{ scaleX, transformOrigin: "left" }}
          className="h-px bg-white/20"
        />
      </header>

      {/* Menu mobile — slide down, voci centrate */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[68px] z-40 lg:hidden"
            style={{ background: GRADIENT }}
            aria-label="Menu mobile"
          >
            <ul className="flex flex-col items-center py-4 divide-y divide-white/10 w-full" role="list">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href} className="w-full text-center">
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block font-sans text-[15px] py-[14px] min-h-[48px] flex items-center justify-center transition-colors duration-150 ${
                      pathname === link.href
                        ? "text-white font-medium"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
