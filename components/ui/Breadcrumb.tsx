import Link from "next/link"
import { House } from "lucide-react"
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd"
import { siteConfig } from "@/data/siteConfig"

export type Tappa = { label: string; href: string }

export default function Breadcrumb({ percorso, className = "" }: { percorso: Tappa[]; className?: string }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          ...percorso.map((t) => ({ name: t.label, url: `${siteConfig.url}${t.href}` })),
        ]}
      />
      <nav aria-label="Percorso di navigazione" className={className}>
        <ol className="flex flex-wrap items-center gap-2 [.text-center_&]:justify-center" role="list">
          <li>
            <Link href="/" className="pill">
              <House strokeWidth={1.5} className="w-3.5 h-3.5" aria-hidden="true" />
              Home
            </Link>
          </li>
          {percorso.map((t, i) =>
            i === percorso.length - 1 ? (
              <li key={t.href}>
                <span aria-current="page" className="pill bg-white/70 border-blu-notte/15 text-grigio-testo">
                  {t.label}
                </span>
              </li>
            ) : (
              <li key={t.href}>
                <Link href={t.href} className="pill">{t.label}</Link>
              </li>
            )
          )}
        </ol>
      </nav>
    </>
  )
}
