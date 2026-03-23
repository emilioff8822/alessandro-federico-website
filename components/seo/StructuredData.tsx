import { JsonLd } from "./JsonLd"
import { siteConfig } from "@/data/siteConfig"

const BASE = siteConfig.url

const individualPhysician = {
  "@context": "https://schema.org",
  "@type": "IndividualPhysician",
  "@id": `${BASE}/#doctor`,
  name: "Dr. Alessandro Federico",
  givenName: "Alessandro",
  familyName: "Federico",
  honorificPrefix: "Dr.",
  jobTitle: "Medico Specialista in Dermatologia e Venereologia",
  description:
    "Dermatologo e medico estetico a Milano. Specializzato in dermatologia clinica, tricologia, dermatoscopia, medicina estetica e trattamenti anti-aging.",
  url: `${BASE}/chi-sono`,
  image: `${BASE}/images/dr-alessandro-federico-dermatologo-milano.png`,
  email: "alfederico89@gmail.com",
  medicalSpecialty: [
    { "@type": "MedicalSpecialty", name: "Dermatology" },
    { "@type": "MedicalSpecialty", name: "PlasticSurgery" },
  ],
  knowsAbout: [
    "Dermatologia Clinica",
    "Tricologia",
    "Dermatoscopia",
    "Malattie Sessualmente Trasmesse",
    "Terapia Fisica Dermatologica",
    "Medicina Estetica",
    "Filler Acido Ialuronico",
    "Tossina Botulinica",
    "Peeling Chimico",
    "Biolifting",
    "Mesoterapia Lipolitica",
    "Mesoterapia Tricologica",
  ],
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Dermatologia Clinica",
      description:
        "Diagnosi e trattamento delle patologie cutanee",
    },
    {
      "@type": "MedicalTherapy",
      name: "Medicina Estetica",
      description:
        "Trattamenti estetici non chirurgici per il ringiovanimento del viso e del corpo",
    },
    {
      "@type": "DiagnosticProcedure",
      name: "Dermatoscopia",
      description:
        "Esame non invasivo per la diagnosi precoce del melanoma e delle lesioni cutanee",
    },
    {
      "@type": "MedicalTherapy",
      name: "Tricologia",
      description:
        "Diagnosi e trattamento della caduta dei capelli e delle patologie del cuoio capelluto",
    },
    {
      "@type": "MedicalTherapy",
      name: "Filler Acido Ialuronico",
      description:
        "Trattamento iniettivo per il ripristino dei volumi del viso e la correzione delle rughe",
    },
    {
      "@type": "MedicalTherapy",
      name: "Tossina Botulinica",
      description:
        "Trattamento per le rughe dinamiche della fronte, glabella e contorno occhi",
    },
    {
      "@type": "MedicalTherapy",
      name: "Peeling Chimico",
      description:
        "Esfoliazione controllata per il ringiovanimento e la luminosità della pelle",
    },
  ],
  practicesAt: { "@id": `${BASE}/#office` },
  sameAs: [
    "https://www.idoctors.it/medico/16985/0",
    "https://www.santagostino.it/it/persone/alessandro-federico",
    "https://www.cupsolidale.it/medico/e53e02e3d33ac1ab1a73528e01addc47",
  ],
}

const physiciansOffice = {
  "@context": "https://schema.org",
  "@type": "PhysiciansOffice",
  "@id": `${BASE}/#office`,
  name: "Studio Dermatologico Dr. Alessandro Federico",
  description:
    "Studio di dermatologia e medicina estetica a Milano. Visite dermatologiche, dermatoscopia, tricologia, filler, botox e peeling.",
  url: BASE,
  telephone: siteConfig.phonePlain,
  email: "alfederico89@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressLocality: "Milano",
    addressRegion: "MI",
    postalCode: "20100",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.4642,
    longitude: 9.19,
  },
  areaServed: [
    { "@type": "City", name: "Milano" },
    { "@type": "AdministrativeArea", name: "Provincia di Milano" },
    { "@type": "AdministrativeArea", name: "Lombardia" },
  ],
  medicalSpecialty: ["Dermatology"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "EUR",
  paymentAccepted: "Contanti, Carta di Credito, Bonifico",
  image: `${BASE}/images/dr-alessandro-federico-dermatologo-milano.png`,
  member: { "@id": `${BASE}/#doctor` },
}

const webSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  name: "Dr. Alessandro Federico — Dermatologo Milano",
  url: BASE,
  description:
    "Sito ufficiale del Dr. Alessandro Federico, dermatologo e medico estetico a Milano.",
  inLanguage: "it-IT",
  publisher: { "@id": `${BASE}/#office` },
}

export default function StructuredData() {
  return (
    <>
      <JsonLd data={individualPhysician} />
      <JsonLd data={physiciansOffice} />
      <JsonLd data={webSite} />
    </>
  )
}
