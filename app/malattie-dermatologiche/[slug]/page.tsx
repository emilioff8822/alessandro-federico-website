import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import CTAButton from "@/components/ui/CTAButton"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"
import { malattie, getMalattiaBySlug } from "@/data/malattie"

const BASE = "https://www.alessandrofederico.it"

interface Props {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  return malattie.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const m = getMalattiaBySlug(slug)
  if (!m) return {}
  const url = `${BASE}/malattie-dermatologiche/${m.slug}`
  const description =
    m.descrizione ||
    `${m.nome}: informazioni, diagnosi e cura. Prenota una visita dermatologica con il Dott. Alessandro Federico a Milano e Paola (CS).`
  return {
    title: `${m.nome} — Diagnosi e cura`,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${m.nome} | Dott. Alessandro Federico`, description, url },
  }
}

export default async function MalattiaPage({ params }: Props) {
  const { slug } = await params
  const m = getMalattiaBySlug(slug)
  if (!m) notFound()

  return (
    <PageTransition>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: BASE },
        { name: "Malattie dermatologiche", url: `${BASE}/malattie-dermatologiche` },
        { name: m.nome, url: `${BASE}/malattie-dermatologiche/${m.slug}` },
      ]} />
      <main>
        <article>
          <header className="relative bg-azzurro-chiaro py-14 md:py-20 overflow-hidden">
            <Image
              src="/images/brand/simbolo-blu.png"
              alt=""
              width={700}
              height={907}
              aria-hidden="true"
              className="absolute -right-10 -bottom-12 w-[180px] md:w-[260px] h-auto opacity-25 pointer-events-none select-none"
            />
            <div className="relative mx-auto max-w-3xl px-5 md:px-10">
              <Link
                href="/malattie-dermatologiche"
                className="inline-flex items-center gap-2 eyebrow text-[11px] text-blu-scuro hover:text-blu-scuro-hover transition-colors mb-8"
              >
                <ArrowLeft strokeWidth={1.5} className="w-3.5 h-3.5" />
                Torna a tutte le malattie
              </Link>
              <p className="eyebrow text-[11px] text-blu-scuro mb-4">Malattie dermatologiche · {m.lettera}</p>
              <h1 className="font-heading text-4xl md:text-5xl leading-[1.1]">{m.nome}</h1>
            </div>
          </header>

          <section className="bg-white py-14 md:py-20">
            <div className="mx-auto max-w-3xl px-5 md:px-10">
              <FadeIn>
                {m.descrizione ? (
                  <div className="text-base md:text-[17px] leading-[1.9]">{m.descrizione}</div>
                ) : (
                  <div className="rounded-2xl border border-dashed border-brand-blu p-8 md:p-10 text-center">
                    <p className="text-[15px] leading-[1.8]">
                      La scheda informativa su questa patologia è in preparazione.
                    </p>
                  </div>
                )}

                {m.tricologia && (
                  <Link
                    href="/specialita#tricologia"
                    className="group mt-8 flex items-center justify-between gap-4 rounded-2xl bg-azzurro-chiaro px-6 py-5 text-blu-notte hover:bg-brand-blu/30 transition-colors duration-300"
                  >
                    <span>
                      <span className="block eyebrow text-[10.5px] text-blu-scuro mb-1">Macro-area</span>
                      <span className="text-[17px]">Scopri la Tricologia</span>
                    </span>
                    <ArrowRight strokeWidth={1.5} className="w-5 h-5 text-blu-scuro transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                )}

                <div className="mt-12 pt-10 border-t border-blu-notte/10 flex flex-col sm:flex-row items-center gap-5 justify-between">
                  <CTAButton text="Prenota una visita" href="/prenota" />
                  <Link
                    href="/malattie-dermatologiche"
                    className="link-hover inline-flex items-center gap-2 text-[14px] text-blu-scuro"
                  >
                    <ArrowLeft strokeWidth={1.5} className="w-4 h-4" />
                    Torna a tutte le malattie
                  </Link>
                </div>

                <p className="mt-10 text-[13px] leading-[1.8] text-grigio-testo/90">
                  Le informazioni hanno scopo divulgativo e non sostituiscono il parere del medico.
                  Per una diagnosi è necessaria una visita specialistica.
                </p>
              </FadeIn>
            </div>
          </section>
        </article>
      </main>
    </PageTransition>
  )
}
