import Image from "next/image"
import TextReveal from "@/components/ui/TextReveal"
import FadeIn from "@/components/ui/FadeIn"
import CTAButton from "@/components/ui/CTAButton"
import { siteConfig } from "@/data/siteConfig"

export default function Hero() {
  return (
    <section className="pt-2 md:pt-3" aria-label="Presentazione Dott. Alessandro Federico">
      <div className="panel-inset relative overflow-hidden bg-azzurro-chiaro grid lg:grid-cols-[1.05fr_1fr] lg:min-h-[min(calc(100svh-var(--header-h)-24px),760px)]">
        <Image
          src="/images/brand/simbolo-blu.png"
          alt=""
          width={700}
          height={907}
          priority
          aria-hidden="true"
          className="absolute -left-16 -bottom-24 w-[260px] lg:w-[380px] h-auto opacity-[0.16] pointer-events-none select-none"
        />

        <div className="relative z-10 flex flex-col justify-center px-6 pt-14 pb-12 md:px-14 lg:pl-[max(3.5rem,calc((100vw-1440px)/2+42px))] lg:pr-10 lg:py-20 text-center lg:text-left">
          <FadeIn>
            <p className="eyebrow text-[10px] md:text-[11.5px] tracking-[0.1em] md:tracking-[0.18em] whitespace-nowrap text-blu-scuro mb-7">
              {siteConfig.sottotitolo}
            </p>
          </FadeIn>

          <h1 className="font-heading text-[clamp(2.6rem,4.4vw,4rem)] leading-[1.05] mb-7">
            <TextReveal delay={0.15}>Dott. Alessandro</TextReveal>
            <br />
            <TextReveal delay={0.3}>Federico</TextReveal>
            <span className="sr-only"> — Dermatologo a Milano e Paola (CS)</span>
          </h1>

          <FadeIn delay={0.45}>
            <p className="text-base md:text-lg leading-[1.75] max-w-[460px] mx-auto lg:mx-0 mb-10">
              Specialista in dermatologia clinica, tricologia e medicina estetica a Milano
              e Paola (CS). Un approccio integrato per la salute e il benessere della pelle.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <CTAButton text="Prenota una visita" href="/prenota" />
              <CTAButton text="Scopri le specialità" href="/specialita" variant="outline" arrow={false} />
            </div>
          </FadeIn>
        </div>

        <div className="relative aspect-[4/5] sm:aspect-[16/12] lg:aspect-auto">
          <Image
            src="/images/dr-alessandro-federico-dermatologo-milano.png"
            alt="Dott. Alessandro Federico, dermatologo"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[50%_20%]"
          />
          <div
            className="absolute inset-0 hidden lg:block pointer-events-none"
            style={{ background: "linear-gradient(to right, var(--azzurro-chiaro) 0%, transparent 18%)" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 lg:hidden pointer-events-none"
            style={{ background: "linear-gradient(to bottom, var(--azzurro-chiaro) 0%, transparent 16%)" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
