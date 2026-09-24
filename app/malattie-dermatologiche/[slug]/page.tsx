import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Phone } from "lucide-react"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import CTAButton from "@/components/ui/CTAButton"
import PageHero from "@/components/ui/PageHero"
import WhatsAppIcon from "@/components/ui/WhatsAppIcon"
import { malattie, getMalattiaBySlug } from "@/data/malattie"
import { siteConfig } from "@/data/siteConfig"

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

  const correlate = malattie.filter((x) => x.lettera === m.lettera && x.slug !== m.slug).slice(0, 6)

  return (
    <PageTransition>
      <main>
        <article>
          <PageHero
            eyebrow={`Malattie dermatologiche · ${m.lettera}`}
            titolo={m.nome}
            percorso={[
              { label: "Malattie dermatologiche", href: "/malattie-dermatologiche" },
              { label: m.nome, href: `/malattie-dermatologiche/${m.slug}` },
            ]}
          />

          <section className="bg-white section-y">
            <div className="container-site grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-start">
              <FadeIn>
                {m.descrizione ? (
                  <div className="text-base md:text-[17px] leading-[1.9] max-w-[720px]">{m.descrizione}</div>
                ) : (
                  <div className="rounded-[20px] border border-dashed border-brand-blu p-8 md:p-10 text-center max-w-[720px]">
                    <p className="text-[15px] leading-[1.8]">
                      La scheda informativa su questa patologia è in preparazione.
                    </p>
                  </div>
                )}

                {m.tricologia && (
                  <Link
                    href="/specialita#tricologia"
                    className="group mt-8 max-w-[720px] flex items-center justify-between gap-4 rounded-[20px] bg-azzurro-chiaro px-6 py-5 text-blu-notte hover:bg-brand-blu/30 transition-colors duration-300"
                  >
                    <span>
                      <span className="block eyebrow text-[10.5px] text-blu-scuro mb-1">Macro-area</span>
                      <span className="text-[17px]">Scopri la Tricologia</span>
                    </span>
                    <ArrowRight strokeWidth={1.5} className="w-5 h-5 text-blu-scuro transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                )}

                <p className="mt-10 max-w-[720px] text-[13px] leading-[1.8] text-grigio-testo/90">
                  Le informazioni hanno scopo divulgativo e non sostituiscono il parere del medico.
                  Per una diagnosi è necessaria una visita specialistica.
                </p>

                <Link
                  href="/malattie-dermatologiche"
                  className="link-hover mt-8 inline-flex items-center gap-2 text-[14px] text-blu-scuro"
                >
                  <ArrowLeft strokeWidth={1.5} className="w-4 h-4" />
                  Torna a tutte le malattie
                </Link>
              </FadeIn>

              <aside className="lg:sticky flex flex-col gap-4" style={{ top: "calc(var(--header-h) + 24px)" }}>
                <div className="rounded-[20px] bg-blu-notte p-7 text-center lg:text-left">
                  <p className="eyebrow text-[10.5px] text-brand-blu mb-3">Consulto dermatologico</p>
                  <p className="font-heading text-[22px] leading-snug text-white mb-6">
                    Hai bisogno di una valutazione?
                  </p>
                  <CTAButton text="Prenota una visita" href="/prenota" variant="light" fullWidth />
                  <div className="grid grid-cols-2 gap-2.5 mt-2.5">
                    <a href={siteConfig.segreteria.href} className="btn btn-inverted !px-3">
                      <Phone strokeWidth={1.5} className="w-4 h-4" aria-hidden="true" />
                      Chiama
                    </a>
                    <a href={siteConfig.whatsapp.href} target="_blank" rel="noopener noreferrer" className="btn btn-inverted !px-3">
                      <WhatsAppIcon className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>

                {correlate.length > 0 && (
                  <div className="rounded-[20px] bg-azzurro-chiaro p-7">
                    <p className="eyebrow text-[10.5px] text-blu-scuro mb-4">Altre malattie · {m.lettera}</p>
                    <ul role="list">
                      {correlate.map((c) => (
                        <li key={c.slug} className="border-b border-blu-notte/10 last:border-b-0">
                          <Link
                            href={`/malattie-dermatologiche/${c.slug}`}
                            className="group flex items-center justify-between gap-3 py-3 text-[15px] text-blu-notte hover:text-blu-scuro transition-colors"
                          >
                            {c.nome}
                            <ArrowRight strokeWidth={1.5} className="w-4 h-4 shrink-0 text-blu-scuro transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside>
            </div>
          </section>
        </article>
      </main>
    </PageTransition>
  )
}
