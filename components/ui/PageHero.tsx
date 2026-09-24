import Image from "next/image"
import TextReveal from "@/components/ui/TextReveal"
import FadeIn from "@/components/ui/FadeIn"
import Breadcrumb, { type Tappa } from "@/components/ui/Breadcrumb"

type Props = {
  titolo: string
  testo?: React.ReactNode
  eyebrow?: string
  percorso: Tappa[]
  align?: "left" | "center"
  children?: React.ReactNode
}

export default function PageHero({ titolo, testo, eyebrow, percorso, align = "left", children }: Props) {
  const centrato = align === "center"

  return (
    <section className="relative bg-azzurro-chiaro overflow-hidden" aria-label={titolo}>
      <Image
        src="/images/brand/simbolo-blu.png"
        alt=""
        width={700}
        height={907}
        aria-hidden="true"
        className="absolute -right-10 -bottom-20 w-[200px] md:w-[300px] h-auto opacity-20 pointer-events-none select-none"
      />
      <div className={`relative container-site pt-8 pb-14 md:pt-10 md:pb-20 ${centrato ? "text-center" : ""}`}>
        <Breadcrumb percorso={percorso} className="mb-8 md:mb-10" />

        {eyebrow && (
          <FadeIn>
            <p className="eyebrow text-[11px] text-blu-scuro mb-4">{eyebrow}</p>
          </FadeIn>
        )}
        <h1 className={`font-heading titolo-pagina mb-6 max-w-3xl ${centrato ? "mx-auto" : ""}`}>
          <TextReveal delay={0.1}>{titolo}</TextReveal>
        </h1>
        {testo && (
          <FadeIn delay={0.2}>
            <div className={`text-base md:text-[17px] leading-[1.75] max-w-[560px] ${centrato ? "mx-auto" : ""}`}>
              {testo}
            </div>
          </FadeIn>
        )}
        {children && <FadeIn delay={0.3}><div className="mt-8">{children}</div></FadeIn>}
      </div>
    </section>
  )
}
