"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { siteConfig } from "@/data/siteConfig"

const GRADIENT = "linear-gradient(135deg, #4A7D9A, #5E96B0)"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 50, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-12">

          {/* Logo + nome */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 group"
            aria-label="Homepage Dr. Alessandro Federico"
          >
            <div className="relative w-8 h-8 rounded-md overflow-hidden bg-white flex-shrink-0 shadow-sm">
              <Image
                src="/images/logo.png"
                alt="Logo Dr. Alessandro Federico"
                fill
                sizes="32px"
                quality={95}
                className="object-contain p-0.5"
                priority
              />
            </div>
            <span className="font-sans text-sm font-medium text-white/90 group-hover:text-white transition-colors duration-300 hidden sm:block">
              Dr. Alessandro Federico
            </span>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navigazione principale">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`link-hover font-sans text-sm transition-colors duration-300 ${
                  pathname === link.href ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Barra di progresso scroll */}
        <motion.div
          style={{ scaleX, transformOrigin: "left" }}
          className="h-px bg-white/30"
        />
      </header>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-panel"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
            style={{ background: GRADIENT }}
            aria-label="Menu mobile"
          >
            <ul className="flex flex-col px-5 divide-y divide-white/10" role="list">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block font-sans text-base py-4 transition-colors duration-150 ${
                      pathname === link.href
                        ? "text-white font-medium"
                        : "text-white/60"
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
