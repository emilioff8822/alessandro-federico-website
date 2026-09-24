import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import InfoFab from "@/components/layout/InfoFab"
import SmoothScroll from "@/components/providers/SmoothScroll"
import StructuredData from "@/components/seo/StructuredData"
import { siteConfig } from "@/data/siteConfig"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
})

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Dott. Alessandro Federico | Dermatologo a Milano e Paola — Tricologia e Medicina Estetica",
    template: "%s | Dott. Alessandro Federico",
  },
  description:
    "Dermatologo a Milano e Paola (CS). Visita dermatologica, mappatura dei nei, tricologia, dermochirurgia e medicina estetica. Prenota una visita con il Dott. Federico.",
  keywords: [
    "dermatologo Milano",
    "dermatologo Paola",
    "dermatologo Cosenza",
    "tricologo Milano",
    "medico estetico Milano",
    "mappatura nei Milano",
    "dermochirurgia Milano",
    "visita dermatologica Milano",
    "Dott. Alessandro Federico",
  ],
  authors: [{ name: "Dott. Alessandro Federico" }],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteConfig.url,
    siteName: "Dott. Alessandro Federico — Dermatologo",
    title: "Dott. Alessandro Federico | Dermatologia, Tricologia e Medicina Estetica",
    description:
      "Dermatologo a Milano e Paola (CS). Dermatologia clinica, tricologia, dermochirurgia e medicina estetica.",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" dir="ltr" className={montserrat.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <StructuredData />
        <Navbar />
        <SmoothScroll>
          <div style={{ paddingTop: "var(--header-h)" }}>
            {children}
            <Footer />
          </div>
        </SmoothScroll>
        <InfoFab />
      </body>
    </html>
  )
}
