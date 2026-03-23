import type { Metadata } from "next"
import Hero from "@/components/sections/Hero"
import Servizi from "@/components/sections/Servizi"
import CTASection from "@/components/sections/CTASection"
import Divider from "@/components/ui/Divider"
import PageTransition from "@/components/providers/PageTransition"
import { siteConfig } from "@/data/siteConfig"

export const metadata: Metadata = {
  title: siteConfig.seoTitle,
  description: siteConfig.seoDescription,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    url: siteConfig.url,
  },
}

export default function Home() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <Divider />
        <Servizi />
        <CTASection />
      </main>
    </PageTransition>
  )
}
