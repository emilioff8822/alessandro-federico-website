export type Categoria = "tutti" | "dermatologia" | "medicina-estetica"

export interface CasoPrimaEDopo {
  id: string
  titolo: string
  trattamento: string
  categoria: Categoria
  descrizione: string
  // Quando le foto reali saranno disponibili, popolare questi campi:
  // prima: "/images/prima-e-dopo/caso-1-prima.jpg"
  // dopo:  "/images/prima-e-dopo/caso-1-dopo.jpg"
  prima: string | null
  dopo: string | null
}

export const casiPrimaEDopo: CasoPrimaEDopo[] = [
  {
    id: "acne-cicatrici",
    titolo: "Cicatrici da acne",
    trattamento: "PEELING + TERAPIA FISICA",
    categoria: "dermatologia",
    descrizione: "Trattamento combinato per ridurre le cicatrici post-acneiche e uniformare la texture cutanea.",
    prima: null,
    dopo: null,
  },
  {
    id: "filler-labbra",
    titolo: "Volumizzazione labbra",
    trattamento: "FILLER",
    categoria: "medicina-estetica",
    descrizione: "Aumento del volume e ridefinizione del contorno labiale con acido ialuronico.",
    prima: null,
    dopo: null,
  },
  {
    id: "rughe-fronte",
    titolo: "Rughe della fronte",
    trattamento: "TOSSINA BOTULINICA",
    categoria: "medicina-estetica",
    descrizione: "Distensione delle rughe d'espressione frontali con risultato naturale e non congelato.",
    prima: null,
    dopo: null,
  },
  {
    id: "iperpigmentazione",
    titolo: "Iperpigmentazione",
    trattamento: "PEELING CHIMICO",
    categoria: "dermatologia",
    descrizione: "Riduzione di macchie e discromie cutanee con ciclo di peeling superficiale progressivo.",
    prima: null,
    dopo: null,
  },
  {
    id: "biolifting",
    titolo: "Ricompattamento ovale",
    trattamento: "BIOLIFTING",
    categoria: "medicina-estetica",
    descrizione: "Trattamento per il rimodellamento e la ristrutturazione dei volumi facciali.",
    prima: null,
    dopo: null,
  },
  {
    id: "alopecia",
    titolo: "Diradamento capelli",
    trattamento: "MESOTERAPIA TRICOLOGICA",
    categoria: "dermatologia",
    descrizione: "Recupero della densità capillare con protocollo mesoterapico personalizzato.",
    prima: null,
    dopo: null,
  },
]

export const filtri: { label: string; value: Categoria | "tutti" }[] = [
  { label: "Tutti", value: "tutti" },
  { label: "Dermatologia", value: "dermatologia" },
  { label: "Medicina Estetica", value: "medicina-estetica" },
]
