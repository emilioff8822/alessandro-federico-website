"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import TextReveal from "@/components/ui/TextReveal"
import FadeIn from "@/components/ui/FadeIn"
import CTAButton from "@/components/ui/CTAButton"

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100vh-68px)] flex flex-col md:flex-row overflow-hidden pt-[68px]"
      aria-label="Presentazione Dr. Alessandro Federico"
    >

      {/* ── Foto — mobile: sopra (40vh), desktop: metà destra ── */}
      <div className="relative w-full h-[45vw] min-h-[260px] md:absolute md:inset-y-0 md:right-0 md:w-[48%] md:h-auto overflow-hidden">
        <motion.div style={{ scale: imageScale }} className="absolute inset-0">
          <Image
            src="/images/foto-hero.png"
            alt="Dr. Alessandro Federico, Dermatologo e Medico Estetico"
            fill
            sizes="(max-width: 768px) 100vw, 48vw"
            quality={95}
            priority
            className="object-cover object-top"
          />
        </motion.div>
        {/* Gradiente sfumatura verso sinistra su desktop */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background: "linear-gradient(to right, #ffffff 0%, transparent 40%)",
          }}
          aria-hidden="true"
        />
        {/* Gradiente sfumatura verso il basso su mobile */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background: "linear-gradient(to bottom, transparent 60%, #ffffff 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── Contenuto testuale ── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex flex-col justify-center w-full md:w-[58%] px-5 md:px-10 lg:px-16 py-14 md:py-28 text-center md:text-left"
      >
        {/* Tag animato */}
        <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-accent"
          />
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-sans text-[11px] uppercase tracking-[0.18em] text-accent"
          >
            Dermatologo · Medicina Estetica
          </motion.span>
        </div>

        {/* Nome */}
        <h1 className="font-heading text-[clamp(3rem,6vw,5.5rem)] text-text leading-[1.05] mb-6">
          <TextReveal delay={0.7}>Dr. Alessandro</TextReveal>
          <br />
          <TextReveal delay={1.1}>Federico</TextReveal>
        </h1>

        {/* Descrizione */}
        <FadeIn delay={1.9}>
          <p className="font-sans text-base md:text-lg text-muted leading-[1.8] max-w-sm mx-auto md:mx-0 mb-8">
            Specialista in dermatologia clinica e medicina estetica.
            Un approccio integrato per la salute e il benessere della pelle.
          </p>
        </FadeIn>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center md:justify-start gap-4"
        >
          <CTAButton text="Prenota una visita" href="/prenota" solid />
          <CTAButton text="Scopri le specialità" href="/specialita" />
        </motion.div>
      </motion.div>

      {/* Linea verticale animata in basso */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 72, opacity: 0.15 }}
        transition={{ duration: 1, delay: 2.8 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-accent hidden md:block"
        aria-hidden="true"
      />
    </section>
  )
}
