import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Tag } from "lucide-react"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import CTAButton from "@/components/ui/CTAButton"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"
import { JsonLd } from "@/components/seo/JsonLd"
import { articoli, getArticoloBySlug } from "@/data/blog"

const BASE = "https://www.alessandrofederico.it"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articoli.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const art = getArticoloBySlug(slug)
  if (!art) return {}
  return {
    title: art.titolo,
    description: art.abstract,
    alternates: { canonical: `${BASE}/skin/${art.slug}` },
    openGraph: {
      title: `${art.titolo} | Dr. Alessandro Federico`,
      description: art.abstract,
      type: "article",
      publishedTime: art.data,
      modifiedTime: art.data,
      authors: ["Dr. Alessandro Federico"],
      url: `${BASE}/skin/${art.slug}`,
    },
  }
}

function formatData(iso: string) {
  return new Date(iso).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export default async function ArticoloPage({ params }: Props) {
  const { slug } = await params
  const art = getArticoloBySlug(slug)
  if (!art) notFound()

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: art.titolo,
    description: art.abstract,
    datePublished: art.data,
    dateModified: art.data,
    author: {
      "@type": "Person",
      "@id": `${BASE}/#doctor`,
      name: "Dr. Alessandro Federico",
      jobTitle: "Medico Specialista in Dermatologia e Venereologia",
      url: `${BASE}/chi-sono`,
    },
    publisher: {
      "@id": `${BASE}/#office`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE}/skin/${art.slug}`,
    },
    inLanguage: "it-IT",
    keywords: art.tags.join(", "),
  }

  return (
    <PageTransition>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: BASE },
          { name: "Skin", url: `${BASE}/skin` },
          { name: art.titolo, url: `${BASE}/skin/${art.slug}` },
        ]}
      />
      <JsonLd data={blogPostingJsonLd} />

      <main>
        <article>
          {/* ── Header articolo ── */}
          <section className="py-16 md:py-24 bg-white" aria-label={art.titolo}>
            <div className="mx-auto max-w-3xl px-5 md:px-10">
              {/* Back */}
              <FadeIn>
                <Link
                  href="/skin"
                  className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.15em] text-muted hover:text-[#3A8A9E] transition-colors duration-200 mb-10"
                >
                  <ArrowLeft strokeWidth={1.5} className="w-3.5 h-3.5" />
                  Tutti gli articoli
                </Link>
              </FadeIn>

              {/* Meta */}
              <FadeIn delay={0.05}>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span
                    className="font-sans text-[9px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(58,138,158,0.10)",
                      color: "#3A8A9E",
                    }}
                  >
                    {art.categoria}
                  </span>
                  <div className="flex items-center gap-1.5 text-muted">
                    <Clock strokeWidth={1.4} className="w-3 h-3" />
                    <span className="font-sans text-xs">
                      {art.tempoLettura} di lettura
                    </span>
                  </div>
                  <time
                    dateTime={art.data}
                    className="font-sans text-xs text-muted"
                  >
                    {formatData(art.data)}
                  </time>
                </div>
              </FadeIn>

              {/* Titolo */}
              <FadeIn delay={0.1}>
                <h1 className="font-heading text-3xl md:text-5xl text-text leading-[1.1] mb-6">
                  {art.titolo}
                </h1>
              </FadeIn>

              {/* Data e revisione — segnale E-E-A-T */}
              <FadeIn delay={0.12}>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted mb-8">
                  <time dateTime={art.data}>
                    Pubblicato il {formatData(art.data)}
                  </time>
                  <span>·</span>
                  <span>Revisionato dal Dr. Alessandro Federico</span>
                </div>
              </FadeIn>

              {/* Abstract */}
              <FadeIn delay={0.15}>
                <p className="font-sans text-base md:text-lg text-muted leading-[1.85] mb-10 pb-10 border-b border-[rgba(17,24,39,0.08)]">
                  {art.abstract}
                </p>
              </FadeIn>

              {/* Corpo articolo */}
              <FadeIn delay={0.2}>
                <div
                  className="prose-skin font-sans text-base text-text leading-[1.9]"
                  dangerouslySetInnerHTML={{ __html: art.corpo }}
                />
              </FadeIn>

              {/* Tags */}
              <FadeIn delay={0.25}>
                <div className="flex flex-wrap items-center gap-3 mt-12 pt-8 border-t border-[rgba(17,24,39,0.08)]">
                  <Tag strokeWidth={1.4} className="w-3.5 h-3.5 text-muted" />
                  {art.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-[10px] uppercase tracking-[0.14em] px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(58,138,158,0.08)",
                        color: "#3A8A9E",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeIn>

              {/* ── Author Box — segnale E-E-A-T critico per YMYL ── */}
              <FadeIn delay={0.28}>
                <div
                  className="flex items-start gap-5 mt-12 p-6 rounded-2xl border"
                  style={{
                    background: "#F4F9FB",
                    borderColor: "rgba(58,138,158,0.12)",
                  }}
                >
                  <div className="shrink-0 w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src="/images/dr-alessandro-federico-dermatologo-milano.png"
                      alt="Dr. Alessandro Federico, dermatologo a Milano"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-muted mb-1">
                      Autore
                    </p>
                    <p className="font-heading text-lg text-text">
                      Dr. Alessandro Federico
                    </p>
                    <p className="font-sans text-sm text-muted">
                      Medico Chirurgo — Specialista in Dermatologia e
                      Venereologia
                    </p>
                    <p className="font-sans text-xs text-faint mt-1">
                      Iscritto all&apos;Ordine dei Medici di Milano
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Disclaimer medico */}
              <FadeIn delay={0.3}>
                <div
                  className="mt-8 p-5 rounded-xl border font-sans text-xs text-muted leading-[1.8]"
                  style={{
                    background: "#F4F9FB",
                    borderColor: "rgba(58,138,158,0.12)",
                  }}
                >
                  <strong className="text-text">Nota:</strong> Le informazioni
                  contenute in questo articolo hanno scopo puramente informativo
                  e non sostituiscono il parere medico professionale. Per una
                  valutazione personalizzata, prenota una visita con il Dr.
                  Federico.
                </div>
              </FadeIn>
            </div>
          </section>

          {/* ── CTA finale ── */}
          <section
            className="py-20 md:py-24 text-center"
            style={{
              background: "linear-gradient(135deg, #4A7F93, #5A93A6)",
            }}
          >
            <div className="max-w-xl mx-auto px-5 md:px-10">
              <FadeIn>
                <h2 className="font-heading text-3xl md:text-4xl text-white leading-[1.1] mb-4">
                  Hai bisogno di una consulenza?
                </h2>
                <p className="font-sans text-base text-white/65 leading-[1.8] mb-10 max-w-md mx-auto">
                  Ogni pelle è diversa. Prenota una visita per una valutazione
                  personalizzata con il Dr. Federico.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <CTAButton text="Prenota ora" href="/prenota" inverted />
                  <CTAButton text="Torna al blog" href="/skin" inverted />
                </div>
              </FadeIn>
            </div>
          </section>
        </article>
      </main>
    </PageTransition>
  )
}
