import type { Metadata } from "next"
import { DM_Serif_Display, DM_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import SmoothScroll from "@/components/providers/SmoothScroll"
import StructuredData from "@/components/seo/StructuredData"
import { siteConfig } from "@/data/siteConfig"

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Dr. Alessandro Federico | Dermatologo Milano — Medicina Estetica",
    template: "%s | Dr. Alessandro Federico",
  },
  description:
    "Dermatologo e medico estetico a Milano. Visita dermatologica, dermatoscopia, tricologia, filler, botox e peeling. Prenota una visita con il Dr. Federico.",
  keywords: [
    "dermatologo Milano",
    "medico estetico Milano",
    "dermatologia Milano",
    "filler Milano",
    "botox Milano",
    "dermatologo",
    "medicina estetica Milano",
    "tricologia Milano",
    "dermatoscopia Milano",
    "peeling Milano",
    "Dr. Alessandro Federico",
    "dermatologo Italia",
  ],
  authors: [{ name: "Dr. Alessandro Federico" }],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteConfig.url,
    siteName: "Dr. Alessandro Federico — Dermatologo Milano",
    title: "Dr. Alessandro Federico | Dermatologo e Medico Estetico Milano",
    description:
      "Specialista in dermatologia e medicina estetica a Milano. Prenota una visita.",
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
    <html lang="it" dir="ltr" className={`${dmSerif.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <StructuredData />
        <Navbar />
        <SmoothScroll>
          <div className="pt-[68px]">
            {children}
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  )
}
