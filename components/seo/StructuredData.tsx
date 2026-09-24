import { JsonLd } from "./JsonLd"
import { siteConfig } from "@/data/siteConfig"
import { macroAree } from "@/data/servizi"

const BASE = siteConfig.url
const telefono = "+393938736690"

const individualPhysician = {
  "@context": "https://schema.org",
  "@type": "IndividualPhysician",
  "@id": `${BASE}/#doctor`,
  name: siteConfig.name,
  givenName: "Alessandro Paolo",
  familyName: "Federico",
  honorificPrefix: "Dott.",
  jobTitle: siteConfig.qualifica,
  description:
    "Dermatologo a Milano e Paola (CS). Specialista in Dermatologia e Venereologia, Tricologia e Medicina Estetica.",
  url: `${BASE}/chi-sono`,
  image: `${BASE}/images/dr-alessandro-federico-dermatologo-milano.png`,
  email: siteConfig.email,
  telephone: telefono,
  medicalSpecialty: [{ "@type": "MedicalSpecialty", name: "Dermatology" }],
  knowsAbout: macroAree.flatMap((a) => [
    a.titolo,
    ...a.voci.flatMap((v) => (v.elenco ? v.elenco.map((e) => e.label) : [v.titolo])),
  ]),
  availableService: macroAree.map((a) => ({
    "@type": "MedicalTherapy",
    name: a.titolo,
    description: a.descrizione,
  })),
  worksFor: siteConfig.sedi.map((s) => ({ "@id": `${BASE}/#sede-${s.id}` })),
}

const sedi = siteConfig.sedi.map((s) => ({
  "@context": "https://schema.org",
  "@type": "PhysiciansOffice",
  "@id": `${BASE}/#sede-${s.id}`,
  name: `${siteConfig.name} — Sede di ${s.citta}`,
  url: `${BASE}/prenota`,
  telephone: telefono,
  email: siteConfig.email,
  image: `${BASE}/opengraph-image.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: s.indirizzo,
    addressLocality: s.citta.replace(" (CS)", ""),
    addressRegion: s.provincia,
    postalCode: s.cap,
    addressCountry: "IT",
  },
  medicalSpecialty: ["Dermatology"],
  hasMap: `https://www.google.com/maps?q=${encodeURIComponent(s.mapsQuery)}`,
  employee: { "@id": `${BASE}/#doctor` },
}))

const webSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  name: `${siteConfig.name} — Dermatologo`,
  url: BASE,
  description: "Sito ufficiale del Dott. Alessandro Federico, dermatologo a Milano e Paola (CS).",
  inLanguage: "it-IT",
  publisher: { "@id": `${BASE}/#doctor` },
}

export default function StructuredData() {
  return (
    <>
      <JsonLd data={individualPhysician} />
      {sedi.map((s) => <JsonLd key={s["@id"]} data={s} />)}
      <JsonLd data={webSite} />
    </>
  )
}
