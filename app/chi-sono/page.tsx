import type { Metadata } from "next"
import Image from "next/image"
import { UserRound, Download, Leaf, Lightbulb, Heart } from "lucide-react"
import PageTransition from "@/components/providers/PageTransition"
import FadeIn from "@/components/ui/FadeIn"
import TextReveal from "@/components/ui/TextReveal"
import SectionLabel from "@/components/ui/SectionLabel"
import CTAButton from "@/components/ui/CTAButton"
import Divider from "@/components/ui/Divider"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"

export const metadata: Metadata = {
  title: "Chi è il Dr. Alessandro Federico | Dermatologo Milano",
  description:
    "Scopri il percorso professionale del Dr. Alessandro Federico. Medico specialista in dermatologia e venereologia, esperto in medicina estetica a Milano.",
  alternates: { canonical: "https://www.alessandrofederico.it/chi-sono" },
  openGraph: {
    title: "Chi è il Dr. Alessandro Federico | Dermatologo Milano",
    description:
      "Dermatologo e medico estetico a Milano. Un approccio integrato per la salute e il benessere della pelle.",
    url: "https://www.alessandrofederico.it/chi-sono",
  },
}

// Sfondi alternati — stessa logica di Specialità ma palette unica Chi Sono
const sfondi = ["#FFFFFF", "#F4F9FB", "#EBF4F8"]

const concetti = [
  {
    icon: <Leaf strokeWidth={1.3} className="w-6 h-6 text-white" />,
    titolo: "L'approccio integrato",
    testo:
      "La cura della pelle non è solo estetica e non è solo clinica — è entrambe le cose insieme. Ogni trattamento parte da una diagnosi accurata e si sviluppa in un percorso personalizzato che tiene conto della salute globale del paziente, del suo stile di vita e dei suoi obiettivi.",
  },
  {
    icon: <Heart strokeWidth={1.3} className="w-6 h-6 text-white" />,
    titolo: "Stay Young",
    testo:
      "Il benessere cutaneo è un investimento a lungo termine. Il concetto Stay Young nasce dalla convinzione che prevenire, mantenere e trattare siano tre fasi di un unico percorso. Non si tratta di fermare il tempo, ma di vivere ogni stagione della vita con la pelle in salute.",
  },
  {
    icon: <Lightbulb strokeWidth={1.3} className="w-6 h-6 text-white" />,
    titolo: "Il mio concept",
    testo:
      "Ogni paziente è unico. La mia visione professionale si basa sul dialogo, sulla trasparenza e su una medicina che ascolta prima di agire. Il protocollo ideale non esiste in astratto: si costruisce insieme, caso per caso, con rigore scientifico e attenzione umana.",
  },
]

export default function ChiSonoPage() {
  return (
    <PageTransition>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.alessandrofederico.it" },
        { name: "Chi Sono", url: "https://www.alessandrofederico.it/chi-sono" },
      ]} />
      <main>

        {/* ── Hero — Foto + Bio ── */}
        <section className="py-20 md:py-28 bg-white" aria-label="Chi è il Dr. Alessandro Federico">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">

              {/* Foto */}
              <FadeIn className="w-full md:w-[42%] shrink-0">
                <div className="relative">
                  <div className="absolute -top-3 -left-3 w-full h-full border border-accent/20 rounded-sm pointer-events-none" />
                  <div className="relative overflow-hidden rounded-sm">
                    <Image
                      src="/images/dr-alessandro-federico-dermatologo-milano.png"
                      alt="Dr. Alessandro Federico, dermatologo e medico estetico a Milano"
                      width={960}
                      height={1280}
                      quality={100}
                      priority
                      className="w-full aspect-[3/4] object-cover object-center"
                    />
                  </div>
                </div>
              </FadeIn>

              {/* Testo bio */}
              <div className="w-full md:w-[58%]">
                <div className="flex items-start justify-between mb-0">
                  <SectionLabel text="Chi Sono" />
                  <FadeIn delay={0.3} className="shrink-0">
                    <div
                      className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-white"
                      style={{
                        background: "linear-gradient(135deg, #3D7A97, #7AAEC9)",
                        boxShadow: "0 6px 24px rgba(122,174,201,0.3)",
                      }}
                    >
                      <UserRound strokeWidth={1.2} className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                  </FadeIn>
                </div>

                <FadeIn delay={0.1}>
                  <h1 className="font-heading text-4xl md:text-5xl text-text leading-[1.05] mb-8">
                    <TextReveal delay={0.2}>Dr. Alessandro Federico</TextReveal>
                  </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <p className="font-sans text-base text-muted leading-[1.85] mb-5">
                    Specialista in Dermatologia e Venereologia, il Dr. Alessandro Federico
                    ha sviluppato nel corso degli anni una competenza trasversale che abbraccia
                    sia la dermatologia clinica sia la medicina estetica. Un approccio raro,
                    che permette di guardare alla pelle nella sua interezza — non solo come
                    superficie, ma come specchio della salute generale dell&apos;organismo.
                  </p>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <p className="font-sans text-base text-muted leading-[1.85] mb-5">
                    La sua formazione si è costruita attraverso anni di studio e pratica clinica,
                    con un costante aggiornamento sulle più recenti evidenze scientifiche e sulle
                    tecniche estetiche più avanzate. Ogni trattamento è il risultato di un dialogo
                    attento con il paziente e di una valutazione diagnostica rigorosa.
                  </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <p className="font-sans text-base text-muted leading-[1.85] mb-10">
                    Riceve su appuntamento nel suo studio, dove ogni visita viene vissuta
                    come un momento di cura autentica — non solo della pelle, ma della persona.
                  </p>
                </FadeIn>

                {/* Bottoni — stesso peso visivo */}
                <FadeIn delay={0.5}>
                  <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 text-center md:text-left">
                    <CTAButton text="Prenota una visita" href="/prenota" solid />
                    <a
                      href="/documenti/cv-alessandro-federico.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[13px] uppercase tracking-[0.15em] font-sans font-medium border-[1.5px] border-[rgba(17,24,39,0.18)] text-text hover:border-accent hover:text-accent hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(122,174,201,0.18)] active:scale-[0.97] active:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    >
                      <Download strokeWidth={1.5} className="w-3.5 h-3.5" />
                      Scarica il CV
                    </a>
                  </div>
                </FadeIn>
              </div>

            </div>
          </div>
        </section>

        <Divider />

        {/* ── Tre sezioni con sfondi alternati ── */}
        <div aria-label="Filosofia e approccio">
          {concetti.map((item, index) => (
            <section
              key={item.titolo}
              style={{ background: sfondi[index] }}
              className="border-b border-[rgba(17,24,39,0.05)] last:border-b-0"
            >
              <div className="mx-auto max-w-6xl px-5 md:px-10 py-16 md:py-20">
                <FadeIn>
                  {/* Header sezione */}
                  {index === 0 && (
                    <div className="mb-12 md:mb-16">
                      <SectionLabel text="La filosofia" />
                      <h2 className="font-heading text-4xl md:text-5xl text-text leading-[1.05]">
                        <TextReveal>Cura, scienza e visione.</TextReveal>
                      </h2>
                    </div>
                  )}

                  <div
                    className={`flex flex-col ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-8 md:gap-16 items-center`}
                  >
                    {/* Icona + numero */}
                    <div className="flex flex-col items-center gap-4 md:w-52 shrink-0">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{
                          background: "linear-gradient(135deg, #3A8A9E, #4D9DB2)",
                          boxShadow: "0 8px 24px rgba(58,138,158,0.25)",
                        }}
                      >
                        {item.icon}
                      </div>
                    </div>

                    {/* Testo */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                        <div className="w-3 h-px bg-accent" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-accent">
                          Chi Sono
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl md:text-3xl text-text mb-4">
                        {item.titolo}
                      </h3>
                      <p className="font-sans text-base text-muted leading-[1.85] max-w-xl mx-auto md:mx-0">
                        {item.testo}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </section>
          ))}
        </div>

        {/* ── CTA finale ── */}
        <section
          className="py-20 md:py-24 text-center"
          style={{ background: "linear-gradient(135deg, #2A5F7A, #3D7A97)" }}
          aria-label="Contattami"
        >
          <div className="max-w-xl mx-auto px-5 md:px-10">
            <FadeIn>
              <h2 className="font-heading text-3xl md:text-4xl text-white leading-[1.1] mb-4">
                Vuoi conoscermi meglio?
              </h2>
              <p className="font-sans text-base text-white/65 leading-[1.8] mb-10 max-w-md mx-auto">
                Prenota una prima consulenza o scrivimi per qualsiasi domanda.
                Rispondo personalmente.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton text="Prenota ora" href="/prenota" inverted />
                <CTAButton text="Contattami" href="/contatti" inverted />
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
    </PageTransition>
  )
}
