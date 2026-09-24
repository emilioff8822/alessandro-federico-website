export const siteConfig = {
  name: "Dott. Alessandro Federico",
  fullName: "Dott. Alessandro Paolo Federico",
  shortName: "Alessandro Federico",
  sottotitolo: "Dermatologia · Tricologia · Medicina Estetica",
  qualifica: "Specialista in Dermatologia e Venereologia",

  url: "https://www.alessandrofederico.it",

  email: "dr.federico.a@gmail.com",

  segreteria: {
    label: "Segreteria (Stefania)",
    numero: "393 873 6690",
    href: "tel:+393938736690",
  },

  whatsapp: {
    label: "WhatsApp Dott. Alessandro Federico",
    numero: "377 342 9123",
    href: "https://wa.me/393773429123",
  },

  sedi: [
    {
      id: "milano",
      citta: "Milano",
      indirizzo: "Via Fratelli Bronzetti 18",
      cap: "20129",
      provincia: "MI",
      mapsQuery: "Via Fratelli Bronzetti 18, 20129 Milano",
    },
    {
      id: "paola",
      citta: "Paola (CS)",
      indirizzo: "Corso Roma 39",
      cap: "87027",
      provincia: "CS",
      mapsQuery: "Corso Roma 39, 87027 Paola CS",
    },
  ],

  navLinks: [
    { label: "Chi Sono",                href: "/chi-sono" },
    { label: "Specialità",              href: "/specialita" },
    { label: "Prima e Dopo",            href: "/prima-e-dopo" },
    { label: "Recensioni",              href: "/recensioni" },
    { label: "Malattie dermatologiche", href: "/malattie-dermatologiche" },
    { label: "Prenota",                 href: "/prenota" },
  ],
} as const
