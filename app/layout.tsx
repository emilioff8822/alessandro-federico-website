import type { Metadata } from "next"
import { DM_Serif_Display, DM_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import SmoothScroll from "@/components/providers/SmoothScroll"
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
    default: siteConfig.seoTitle,
    template: `%s | Dr. Alessandro Federico`,
  },
  description: siteConfig.seoDescription,
  keywords: [
    "dermatologo",
    "medicina estetica",
    "dermatologia clinica",
    "filler",
    "botox",
    "peeling",
    "mesoterapia",
    "biolifting",
    "tricologia",
    "Dr. Alessandro Federico",
  ],
  authors: [{ name: "Dr. Alessandro Federico" }],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteConfig.url,
    siteName: siteConfig.studio,
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
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
