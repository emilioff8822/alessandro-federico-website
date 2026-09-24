import Image from "next/image"
import { siteConfig } from "@/data/siteConfig"

type Props = {
  tone?: "colori" | "bianco"
  size?: "header" | "footer"
  priority?: boolean
}

const sizes = {
  header: { symbol: "h-10 lg:h-14", word: "w-[124px] lg:w-[168px]", sub: "text-[7.5px] lg:text-[8.5px] tracking-[0.14em]" },
  footer: { symbol: "h-16", word: "w-[190px]", sub: "text-[9px] tracking-[0.18em]" },
}

export default function BrandLockup({ tone = "colori", size = "header", priority = false }: Props) {
  const s = sizes[size]
  const symbolSrc = tone === "colori" ? "/images/brand/simbolo-blu.png" : "/images/brand/simbolo-bianco.png"
  const wordSrc = tone === "colori" ? "/images/brand/wordmark-colori.png" : "/images/brand/wordmark-bianco.png"

  return (
    <span className="flex items-center gap-3 lg:gap-4">
      <Image
        src={symbolSrc}
        alt=""
        width={700}
        height={907}
        priority={priority}
        className={`${s.symbol} w-auto shrink-0`}
      />
      <span className="flex flex-col gap-1.5">
        <Image
          src={wordSrc}
          alt="DR YOUTH — Alessandro Federico"
          width={900}
          height={236}
          priority={priority}
          className={`${s.word} h-auto`}
        />
        <span
          className={`eyebrow ${s.sub} whitespace-nowrap ${tone === "colori" ? "text-grigio-testo" : "text-white/80"}`}
        >
          {siteConfig.sottotitolo}
        </span>
      </span>
    </span>
  )
}
