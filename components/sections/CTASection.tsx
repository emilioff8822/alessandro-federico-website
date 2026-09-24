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
    <section className="bg-white py-14 md:py-20" aria-label={titolo}>
      <div className="container-site">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[20px] md:rounded-[24px] bg-blu-scuro px-6 py-14 md:px-16 md:py-20">
            <Image
              src="/images/brand/simbolo-blu.png"
              alt=""
              width={700}
              height={907}
              aria-hidden="true"
              className="absolute -right-8 md:right-[6%] top-1/2 -translate-y-1/2 w-[200px] md:w-[340px] h-auto opacity-30 pointer-events-none select-none"
            />
            <div className="relative z-10 max-w-xl text-center md:text-left mx-auto md:mx-0">
              <p className="eyebrow text-[11px] text-white/85 mb-5">{eyebrow}</p>
              <h2 className="font-heading titolo-sezione text-white mb-5">{titolo}</h2>
              <p className="text-base text-white/90 leading-[1.75] mb-9">{testo}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
                <CTAButton text={primario.text} href={primario.href} variant="light" />
                {secondario && <CTAButton text={secondario.text} href={secondario.href} variant="inverted" />}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
