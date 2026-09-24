import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import FadeIn from "@/components/ui/FadeIn"
import CTAButton from "@/components/ui/CTAButton"
import { getMalattiaBySlug, malattie, type Malattia } from "@/data/malattie"

const piuCercate = [
  "acne",
  "psoriasi",
  "dermatite-atopica",
  "alopecia-androgenetica",
  "orticaria",
  "melanoma-e-tumori-cutanei",
  "rosacea-o-couperose",
  "dermatite-seborroica",
  "verruche",
  "vitiligine",
]
  .map(getMalattiaBySlug)
  .filter((m): m is Malattia => Boolean(m))

export default function MalattieTeaser() {
  return (
    <section className="bg-white pt-16 md:pt-24" aria-label="Malattie dermatologiche">
      <div className="container-site">
        <FadeIn>
          <div className="grid lg:grid-cols-2 overflow-hidden rounded-[20px] md:rounded-[24px]">
            <div className="relative bg-blu-notte px-7 py-14 md:px-14 md:py-16 flex flex-col justify-center text-center lg:text-left overflow-hidden">
              <Image
                src="/images/brand/simbolo-bianco.png"
                alt=""
                width={700}
                height={907}
                aria-hidden="true"
                className="absolute -right-10 -bottom-14 w-[180px] md:w-[240px] h-auto opacity-[0.07] pointer-events-none select-none"
              />
              <p className="relative eyebrow text-[11px] text-brand-blu mb-5">Malattie dermatologiche</p>
              <h2 className="relative font-heading titolo-sezione text-white mb-5">
                Le patologie della pelle dalla A alla Z
              </h2>
              <p className="relative text-base text-white/85 leading-[1.75] mb-9 max-w-md mx-auto lg:mx-0">
                {malattie.length} schede sulle principali malattie della pelle, dei capelli e delle
                mucose. Cerca la tua patologia e prenota un consulto.
              </p>
              <div className="relative">
                <CTAButton text="Consulta l'elenco" href="/malattie-dermatologiche" variant="light" />
              </div>
            </div>

            <div className="bg-azzurro-chiaro px-7 py-12 md:px-14 md:py-16 flex flex-col justify-center">
              <p className="eyebrow text-[11px] text-blu-scuro mb-6 text-center lg:text-left">Le più cercate</p>
              <ul className="flex flex-wrap justify-center lg:justify-start gap-2.5" role="list">
                {piuCercate.map((m) => (
                  <li key={m.slug}>
                    <Link
                      href={`/malattie-dermatologiche/${m.slug}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[14px] text-blu-notte border border-transparent hover:border-blu-scuro transition-colors duration-300"
                    >
                      {m.nome}
                      <ArrowRight strokeWidth={1.5} className="w-3.5 h-3.5 text-blu-scuro transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
