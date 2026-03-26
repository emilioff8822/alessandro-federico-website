"use client"

import Link from "next/link"
import { Stethoscope, Sparkles } from "lucide-react"
import { specialita } from "@/data/servizi"
import SectionLabel from "@/components/ui/SectionLabel"
import FadeIn from "@/components/ui/FadeIn"
import SpotlightCard from "@/components/ui/SpotlightCard"

const icons = {
  dermatologia: <Stethoscope strokeWidth={1.3} className="w-7 h-7" />,
  estetica: <Sparkles strokeWidth={1.3} className="w-7 h-7" />,
}

export default function Servizi() {
  return (
    <section className="py-24 md:py-32 bg-surface" aria-label="Specialità" id="specialita">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <SectionLabel text="Le specialità" />

        <FadeIn>
          <h2 className="font-heading text-4xl md:text-5xl text-text leading-[1.1] mb-4 text-center md:text-left">
            Un approccio integrato
          </h2>
          <p className="font-sans text-base text-muted leading-[1.8] max-w-lg mb-16 text-center md:text-left mx-auto md:mx-0">
            Due aree di eccellenza per la salute e la bellezza della pelle,
            con protocolli diagnostici e terapeutici all&apos;avanguardia.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {specialita.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.12}>
              <Link href={item.href} className="block h-full group">
                <SpotlightCard className="h-full border border-border bg-white hover:border-accent/25 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(122,174,201,0.12)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <div className="p-8 md:p-10 flex flex-col items-center md:items-start text-center md:text-left">

                    {/* Icona */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #4E8DA3, #84B3C8)",
                        boxShadow: "0 4px 18px rgba(122,174,201,0.35), 0 1px 4px rgba(74,125,154,0.2)",
                      }}
                    >
                      {icons[item.icon as keyof typeof icons]}
                    </div>

                    {/* Titolo */}
                    <h3 className="font-heading text-2xl text-text mb-3 group-hover:text-accent transition-colors duration-300">
                      {item.titolo}
                    </h3>

                    {/* Descrizione */}
                    <p className="font-sans text-sm text-muted leading-[1.8] mb-6">
                      {item.descrizione}
                    </p>

                    {/* Sub-servizi */}
                    <ul className="space-y-2 w-full">
                      {item.sottoServizi.map((sub) => (
                        <li key={sub} className="flex items-center gap-2.5 justify-center md:justify-start">
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: "#7AAEC9" }}
                            aria-hidden="true"
                          />
                          <span className="font-sans text-sm text-muted">{sub}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <p className="font-sans text-xs uppercase tracking-[0.15em] text-accent mt-8 group-hover:translate-x-1 transition-transform duration-300">
                      Scopri di più →
                    </p>

                  </div>
                </SpotlightCard>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
