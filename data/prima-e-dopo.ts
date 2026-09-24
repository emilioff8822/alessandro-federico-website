export type Categoria = "dermatologia" | "medicina-estetica" | "tricologia"

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
    trattamento: "PEELING",
    categoria: "dermatologia",
    descrizione: "Trattamento per ridurre le cicatrici post-acneiche e uniformare la texture cutanea.",
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
    id: "biorivitalizzazione",
    titolo: "Luminosità e compattezza",
    trattamento: "BIORIVITALIZZAZIONE",
    categoria: "medicina-estetica",
    descrizione: "Miglioramento di tono, compattezza e luminosità della pelle del viso.",
    prima: null,
    dopo: null,
  },
  {
    id: "alopecia",
    titolo: "Diradamento capelli",
    trattamento: "PROTOCOLLO TRICOLOGICO",
    categoria: "tricologia",
    descrizione: "Recupero della densità capillare con protocollo tricologico personalizzato.",
    prima: null,
    dopo: null,
  },
]

export const filtri: { label: string; value: Categoria | "tutti" }[] = [
  { label: "Tutti", value: "tutti" },
  { label: "Dermatologia", value: "dermatologia" },
  { label: "Medicina Estetica", value: "medicina-estetica" },
  { label: "Tricologia", value: "tricologia" },
]
