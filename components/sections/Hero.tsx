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

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -30])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100vh-68px)] flex flex-col md:flex-row overflow-hidden"
      aria-label="Presentazione Dr. Alessandro Federico"
    >

      {/* Contenuto testuale — centrato su mobile, a sinistra su desktop */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 flex flex-col justify-center w-full px-6 md:px-10 lg:px-16 py-16 md:py-28 text-center md:text-left"
      >
        {/* Tag */}
        <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 20 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-px bg-accent"
          />
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-sans text-[11px] uppercase tracking-[0.18em] text-accent"
          >
            Dermatologo · Medicina Estetica
          </motion.span>
        </div>

        {/* Nome */}
        <h1 className="font-heading text-[clamp(3rem,7vw,5.5rem)] text-text leading-[1.05] mb-6">
          <TextReveal delay={0.3}>Dr. Alessandro</TextReveal>
          <br />
          <TextReveal delay={0.5}>Federico</TextReveal>
          <span className="sr-only"> — Dermatologo e Medico Estetico a Milano</span>
        </h1>

        {/* Descrizione */}
        <FadeIn delay={0.6}>
          <p className="font-sans text-base md:text-lg text-muted leading-[1.8] max-w-sm mx-auto md:mx-0 mb-8">
            Specialista in dermatologia clinica e medicina estetica a Milano.
            Un approccio integrato per la salute e il benessere della pelle.
          </p>
        </FadeIn>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
        >
          <CTAButton text="Prenota una visita" href="/prenota" solid />
          <CTAButton text="Scopri le specialità" href="/specialita" />
        </motion.div>
      </motion.div>

      {/* Logo decorativo — grande, semitrasparente */}
      <div
        className="absolute -bottom-16 -right-16 w-[300px] h-[300px] md:w-[450px] md:h-[450px] pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/images/logo-federico-transparent.png"
          alt=""
          width={450}
          height={450}
          className="object-contain opacity-[0.06]"
        />
      </div>

      {/* Linea verticale decorativa — solo desktop */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 72, opacity: 0.15 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-accent hidden md:block"
        aria-hidden="true"
      />
    </section>
  )
}
