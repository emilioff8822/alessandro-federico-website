import Image from "next/image"
import FadeIn from "@/components/ui/FadeIn"
import CTAButton from "@/components/ui/CTAButton"

type Link = { text: string; href: string }

type Props = {
  eyebrow?: string
  titolo?: string
  testo?: string
  primario?: Link
  secondario?: Link
}

export default function CTASection({
  eyebrow = "Inizia il tuo percorso",
  titolo = "Prenota la tua visita.",
  testo = "Ogni trattamento inizia con un'analisi accurata. Contatta lo studio per fissare una prima consulenza.",
  primario = { text: "Prenota una visita", href: "/prenota" },
  secondario,
}: Props) {
  return (
    <section className="relative bg-blu-scuro py-20 md:py-28 overflow-hidden" aria-label={titolo}>
      <Image
        src="/images/brand/simbolo-blu.png"
        alt=""
        width={700}
        height={907}
        aria-hidden="true"
        className="absolute -right-10 top-1/2 -translate-y-1/2 w-[240px] md:w-[360px] h-auto opacity-30 pointer-events-none select-none"
      />
      <Image
        src="/images/brand/logo-bianco.png"
        alt=""
        width={700}
        height={1005}
        aria-hidden="true"
        className="hidden md:block absolute left-10 bottom-8 w-[120px] h-auto opacity-[0.08] pointer-events-none select-none"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-5 md:px-10 text-center">
        <FadeIn>
          <p className="eyebrow text-[11px] text-white/85 mb-6">{eyebrow}</p>
          <h2 className="font-heading text-3xl md:text-5xl text-white leading-[1.12] mb-6">{titolo}</h2>
          <p className="text-base text-white/90 leading-[1.8] mb-10 max-w-md mx-auto">{testo}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton text={primario.text} href={primario.href} variant="light" />
            {secondario && <CTAButton text={secondario.text} href={secondario.href} variant="inverted" />}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
