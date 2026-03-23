"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import FadeIn from "@/components/ui/FadeIn"
import CTAButton from "@/components/ui/CTAButton"
import TextReveal from "@/components/ui/TextReveal"

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const logoY = useTransform(scrollYProgress, [0, 1], [20, -20])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #2A5F7A, #3D7A97)" }}
      aria-label="Prenota una visita"
    >
      {/* Logo watermark — grande, centrato verticalmente, tagliato a destra */}
      <motion.div
        style={{ y: logoY }}
        className="absolute -right-12 top-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/images/logo-federico-transparent.png"
          alt=""
          width={500}
          height={500}
          className="object-contain brightness-0 invert opacity-[0.07]"
        />
      </motion.div>

      {/* Punto luce centrale */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.06), transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-5 md:px-10 text-center">
        <FadeIn>
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-white/50 mb-6">
            Inizia il tuo percorso
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-white leading-[1.1] mb-6">
            <TextReveal>Prenota la tua visita.</TextReveal>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="font-sans text-base text-white/65 leading-[1.8] mb-10 max-w-md mx-auto">
            Ogni trattamento inizia con un&apos;analisi accurata.
            Contattaci per fissare una prima consulenza.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton text="Prenota ora" href="/prenota" inverted />
            <CTAButton text="Contattaci" href="/contatti" inverted />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
