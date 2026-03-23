"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type Props = {
  children: string
  className?: string
  delay?: number
}

export default function TextReveal({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  const words = children.split(" ")

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "55%", opacity: 0 }}
            animate={inView ? { y: "0%", opacity: 1 } : { y: "55%", opacity: 0 }}
            transition={{
              duration: 0.65,
              delay: delay + i * 0.025,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  )
}
