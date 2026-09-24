export type Malattia = {
  nome: string
  slug: string
  lettera: string
  descrizione: string
  tricologia?: boolean
}

const elenco: string[] = [
  "Acne",
  "Afte",
  "Allergia al sole o fotoallergia",
  "Alopecia androgenetica",
  "Alopecia areata",
  "Angioma cutaneo",
  "Angioma rubino",
  "Borse sotto gli occhi",
  "Bromidrosi (sudorazione maleodorante)",
  "Candida",
  "Carcinoma a cellule di Merkel",
  "Carcinoma basocellulare",
  "Carcinoma squamocellulare",
  "Cellulite",
  "Cheratosi attinica",
  "Cheratosi seborroica",
  "Cicatrici da acne",
  "Cisti di Bartolini",
  "Cisti palpebrali",
  "Cisti sebacea",
  "Clamidia",
  "Dermatite",
  "Dermatite allergica da contatto",
  "Dermatite atopica",
  "Dermatite irritativa da contatto",
  "Dermatite palpebrale",
  "Dermatite seborroica",
  "Dermatomicosi (infezione cutanea da funghi)",
  "Dermatomiosite",
  "Disidrosi",
  "Eczema cronico delle mani",
  "Edema",
  "Emorroidi",
  "Eritema solare",
  "Eritrasma",
  "Fenomeno di Raynaud",
  "Follicolite",
  "Forfora",
  "Fotoinvecchiamento",
  "Fuoco di Sant'Antonio (Herpes Zoster)",
  "Gonorrea",
  "Herpes genitale",
  "Herpes labiale",
  "Impetigine",
  "Infezione da HPV (Papillomavirus)",
  "Infezioni del tratto urinario",
  "Infezioni vaginali",
  "Intertrigine",
  "Iperidrosi (sudorazione eccessiva)",
  "Irsutismo",
  "Linfoadenite",
  "Linfoma cutaneo",
  "Lipoma",
  "Lupus discoide (cutaneo)",
  "Lupus eritematoso sistemico (LES)",
  "Malattie sessualmente trasmissibili",
  "Melanoma e tumori cutanei",
  "Melasma",
  "Morbillo",
  "Onicomicosi",
  "Orticaria",
  "Pediculosi (pidocchi)",
  "Piaghe da decubito",
  "Pitiriasi rosea di Gibert",
  "Pitiriasi versicolor",
  "Psoriasi",
  "Ragade anale",
  "Rosacea o couperose",
  "Scabbia",
  "Sclerodermia",
  "Telogen effluvium",
  "Ulcera cutanea",
  "Vaiolo delle scimmie (Monkeypox)",
  "Varicella",
  "Verruche",
  "Vitiligine",
]

const TRICOLOGIA = new Set(["alopecia-androgenetica", "alopecia-areata", "telogen-effluvium"])

export function normalizza(testo: string) {
  return testo.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
}

function slugify(nome: string) {
  return normalizza(nome.replace(/\s*\(.*?\)\s*/g, " "))
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export const malattie: Malattia[] = elenco
  .map((nome) => {
    const slug = slugify(nome)
    return {
      nome,
      slug,
      lettera: normalizza(nome).charAt(0).toUpperCase(),
      descrizione: "",
      tricologia: TRICOLOGIA.has(slug),
    }
  })
  .sort((a, b) => a.nome.localeCompare(b.nome, "it"))

export const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

export function getMalattiaBySlug(slug: string) {
  return malattie.find((m) => m.slug === slug)
}
