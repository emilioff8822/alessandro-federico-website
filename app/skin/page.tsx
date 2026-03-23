import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Clock, ArrowRight } from "lucide-react"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import Divider from "@/components/ui/Divider"
import CTAButton from "@/components/ui/CTAButton"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"
import { articoli } from "@/data/blog"

export const metadata: Metadata = {
  title: "Skin — Blog di Dermatologia | Dr. Alessandro Federico",
  description:
    "Articoli e consigli di dermatologia dal Dr. Alessandro Federico. Protezione solare, acne, invecchiamento cutaneo, cura della pelle.",
  alternates: { canonical: "https://www.alessandrofederico.it/skin" },
  openGraph: {
    title: "Skin — Blog di Dermatologia | Dr. Alessandro Federico",
    description:
      "Blog di dermatologia e medicina estetica. Consigli pratici per la pelle a cura del Dr. Federico.",
    url: "https://www.alessandrofederico.it/skin",
  },
}

const cardBg = [
  { bg: "#F4F9FB", border: "rgba(58,138,158,0.15)", accent: "#3A8A9E", gradiente: "linear-gradient(135deg, #7EC4D4, #93D0DE)" },
  { bg: "#F4F6FB", border: "rgba(74,111,165,0.15)", accent: "#4A6FA5", gradiente: "linear-gradient(135deg, #82A8CC, #97BBD8)" },
]

function formatData(iso: string) {
  return new Date(iso).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })
}

export default function SkinPage() {
  return (
    <PageTransition>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.alessandrofederico.it" },
        { name: "Skin", url: "https://www.alessandrofederico.it/skin" },
      ]} />
      <main>

        {/* ── Hero ── */}
        <section className="py-20 md:py-28 bg-white" aria-label="Blog Skin">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <div className="flex flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <SectionLabel text="Blog" />
                <FadeIn delay={0.1}>
                  <h1 className="font-heading text-4xl md:text-5xl text-text leading-[1.05] max-w-xl">
                    <TextReveal delay={0.2}>Skin.</TextReveal>
                  </h1>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="font-sans text-base text-muted leading-[1.85] max-w-lg mt-6">
                    Articoli di dermatologia e medicina estetica. Consigli pratici,
                    approfondimenti scientifici e risposte alle domande più frequenti
                    sulla cura della pelle.
                  </p>
                </FadeIn>
              </div>
              <FadeIn delay={0.4} className="shrink-0 hidden sm:block">
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white"
                  style={{
                    background: "linear-gradient(135deg, #3D7A97, #7AAEC9)",
                    boxShadow: "0 8px 28px rgba(122,174,201,0.3)",
                  }}
                >
                  <BookOpen strokeWidth={1.2} className="w-6 h-6 md:w-7 md:h-7" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── Lista articoli ── */}
        <section className="py-16 md:py-24" style={{ background: "#F4F9FB" }} aria-label="Articoli">
          <div className="mx-auto max-w-4xl px-5 md:px-10">
            <div className="flex flex-col gap-6">
              {articoli.map((art, i) => {
                const tema = cardBg[i % cardBg.length]
                return (
                  <FadeIn key={art.slug} delay={i * 0.08}>
                    <Link
                      href={`/skin/${art.slug}`}
                      className="group block rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(17,24,39,0.09)]"
                      style={{
                        background: "#FFFFFF",
                        borderColor: tema.border,
                        boxShadow: "0 4px 20px rgba(17,24,39,0.05)",
                      }}
                    >
                      {/* Banner */}
                      <div
                        className="px-7 py-4 flex items-center justify-between"
                        style={{ background: tema.gradiente }}
                      >
                        <div className="flex items-center gap-3">
                          <BookOpen strokeWidth={1.4} className="w-4 h-4 text-white/80" />
                          <span className="font-sans text-[9px] uppercase tracking-[0.18em] text-white/80">
                            {art.categoria}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-white/60">
                          <Clock strokeWidth={1.4} className="w-3 h-3" />
                          <span className="font-sans text-[9px]">{art.tempoLettura}</span>
                        </div>
                      </div>

                      {/* Corpo */}
                      <div className="px-7 py-6 flex flex-col md:flex-row gap-5 items-start md:items-center">
                        <div className="flex-1">
                          <p className="font-sans text-[10px] uppercase tracking-[0.14em] mb-2" style={{ color: tema.accent }}>
                            {formatData(art.data)}
                          </p>
                          <h2 className="font-heading text-xl md:text-2xl text-text mb-3 leading-[1.2]">
                            {art.titolo}
                          </h2>
                          <p className="font-sans text-sm text-muted leading-[1.8] line-clamp-2">
                            {art.abstract}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {art.tags.map((tag) => (
                              <span
                                key={tag}
                                className="font-sans text-[10px] uppercase tracking-[0.12em] px-2.5 py-1 rounded-full"
                                style={{ background: `${tema.accent}12`, color: tema.accent }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div
                          className="shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:border-transparent group-hover:text-white"
                          style={{
                            borderColor: `${tema.accent}40`,
                            color: tema.accent,
                          }}
                        >
                          <ArrowRight strokeWidth={1.5} className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-20 md:py-24 text-center"
          style={{ background: "linear-gradient(135deg, #2A5F7A, #3D7A97)" }}
          aria-label="Vuoi saperne di più?"
        >
          <div className="max-w-xl mx-auto px-5 md:px-10">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl text-white leading-[1.1] mb-4">
                Hai una domanda sulla tua pelle?
              </h2>
              <p className="font-sans text-base text-white/65 leading-[1.8] mb-10 max-w-md mx-auto">
                Gli articoli danno informazioni generali. Per una valutazione
                personalizzata, prenota una consulenza.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton text="Prenota una visita" href="/prenota" inverted />
                <CTAButton text="Contattami" href="/contatti" inverted />
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
    </PageTransition>
  )
}
