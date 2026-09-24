"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import TextReveal from "@/components/ui/TextReveal"
import FadeIn from "@/components/ui/FadeIn"
import CTAButton from "@/components/ui/CTAButton"
import { siteConfig } from "@/data/siteConfig"

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -30])
  const symbolY = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100svh-var(--header-h))] flex items-center overflow-hidden bg-white"
      aria-label="Presentazione Dott. Alessandro Federico"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 85% 40%, var(--azzurro-chiaro), transparent 60%)" }}
        aria-hidden="true"
      />

      <motion.div
        style={{ y: symbolY }}
        className="absolute -right-20 md:right-[4%] top-1/2 -translate-y-1/2 w-[300px] md:w-[440px] lg:w-[520px] pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/images/brand/simbolo-blu.png"
          alt=""
          width={700}
          height={907}
          priority
          className="w-full h-auto opacity-[0.10] md:opacity-[0.22]"
        />
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10 py-16 md:py-24 text-center md:text-left"
      >
        <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 24 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-px bg-brand-blu hidden sm:block"
          />
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="eyebrow text-[10px] md:text-[11.5px] tracking-[0.1em] md:tracking-[0.18em] whitespace-nowrap text-blu-scuro"
          >
            {siteConfig.sottotitolo}
          </motion.span>
        </div>

        <h1 className="font-heading text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.05] mb-7">
          <TextReveal delay={0.3}>Dott. Alessandro</TextReveal>
          <br />
          <TextReveal delay={0.45}>Federico</TextReveal>
          <span className="sr-only"> — Dermatologo a Milano e Paola (CS)</span>
        </h1>

        <FadeIn delay={0.6}>
          <p className="text-base md:text-lg leading-[1.8] max-w-md mx-auto md:mx-0 mb-10">
            Specialista in dermatologia clinica, tricologia e medicina estetica a Milano
            e Paola (CS). Un approccio integrato per la salute e il benessere della pelle.
          </p>
        </FadeIn>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
        >
          <CTAButton text="Prenota una visita" href="/prenota" />
          <CTAButton text="Scopri le specialità" href="/specialita" variant="outline" />
        </motion.div>
      </motion.div>
    </section>
  )
}
