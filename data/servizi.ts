export type VoceElenco = {
  id: string
  label: string
}

export type Voce = {
  id: string
  titolo: string
  descrizione?: string
  elenco?: VoceElenco[]
  punti: string[]
}

export type MacroArea = {
  id: string
  titolo: string
  descrizione: string
  cardDescrizione: string
  icon: "dermatologia" | "estetica" | "tricologia" | "dermochirurgia"
  immagine: string
  voci: Voce[]
}

export const macroAree: MacroArea[] = [
  {
    id: "dermatologia",
    titolo: "Dermatologia",
    descrizione:
      "Diagnosi e trattamento delle patologie della pelle, delle mucose e degli annessi cutanei, con un approccio clinico rigoroso.",
    cardDescrizione:
      "Diagnosi e cura delle patologie della pelle, con un approccio medico rigoroso e basato sull'evidenza scientifica.",
    icon: "dermatologia",
    immagine: "/images/macro-aree/dermatologia.webp",
    voci: [
      {
        id: "dermatologia-clinica",
        titolo: "Dermatologia Clinica",
        elenco: [
          { id: "visita-dermatologica", label: "Visita dermatologica" },
          { id: "venereologia", label: "Venereologia (malattie sessualmente trasmissibili)" },
          { id: "mappatura-nei", label: "Mappatura dei nei" },
          { id: "visita-unghie", label: "Visita dermatologica per le unghie" },
        ],
        punti: [
          "Diagnosi e trattamento delle dermatiti",
          "Psoriasi e malattie autoimmuni cutanee",
          "Eczema e dermatite atopica",
          "Acne e patologie sebacee",
          "Orticaria e allergie cutanee",
        ],
      },
    ],
  },
  {
    id: "medicina-estetica",
    titolo: "Medicina Estetica",
    descrizione:
      "Trattamenti medico-estetici personalizzati per il ringiovanimento e il benessere della pelle, nel rispetto della sua naturale unicità.",
    cardDescrizione:
      "Trattamenti personalizzati per una pelle più compatta e luminosa, nel rispetto della sua naturale unicità.",
    icon: "estetica",
    immagine: "/images/macro-aree/medicina-estetica.webp",
    voci: [
      {
        id: "filler",
        titolo: "Filler",
        descrizione:
          "I filler a base di acido ialuronico sono il trattamento d'elezione per il riempimento di rughe, il ringiovanimento dei volumi facciali e il miglioramento della qualità cutanea. Ogni trattamento è personalizzato in base all'anatomia del paziente.",
        punti: [
          "Correzione delle rughe nasolabiali e del codice a barre",
          "Aumento e ridefinizione delle labbra",
          "Rimodellamento dello zigomo e dell'ovale del viso",
        ],
      },
      {
        id: "biorivitalizzazione",
        titolo: "Biorivitalizzazione",
        descrizione:
          "La biorivitalizzazione è un trattamento rigenerativo che stimola i meccanismi naturali di produzione del collagene e dell'elastina, migliorando tono, compattezza e luminosità della pelle senza interventi chirurgici.",
        punti: [
          "Stimolazione endogena del collagene",
          "Miglioramento della lassità cutanea",
          "Trattamento del collo e del décolleté",
          "Effetto naturale e progressivo",
        ],
      },
      {
        id: "tossina-botulinica",
        titolo: "Tossina Botulinica",
        descrizione:
          "La tossina botulinica è il trattamento più efficace per le rughe dinamiche del viso. Agisce rilassando selettivamente i muscoli mimici, preservando la naturalezza dell'espressione.",
        punti: [
          "Rughe della fronte e glabella",
          "Zampe di gallina perioculari",
          "Lifting delle sopracciglia",
          "Iperidrosi (ascellare, palmo-plantare, volto e altre zone coinvolte)",
        ],
      },
      {
        id: "peeling",
        titolo: "Peeling",
        descrizione:
          "Il peeling chimico esegue un rinnovamento controllato della cute attraverso l'applicazione di agenti esfolianti. La scelta dell'acido e della concentrazione dipende dalla tipologia cutanea e dall'obiettivo terapeutico.",
        punti: [
          "Peeling superficiale con AHA e BHA",
          "Peeling medio con acido tricloroacetico",
          "Trattamento di macchie e discromie",
          "Miglioramento della texture cutanea",
          "Controllo dell'acne e dei pori dilatati",
        ],
      },
      {
        id: "mesoterapia-lipolitica",
        titolo: "Mesoterapia Lipolitica",
        descrizione:
          "La mesoterapia lipolitica consiste nell'iniezione intradermica o sottocutanea di principi attivi mirati, che agiscono sui depositi adiposi localizzati.",
        punti: [
          "Riduzione dei depositi adiposi localizzati",
          "Trattamento della cellulite",
          "Protocolli personalizzati per ogni paziente",
        ],
      },
    ],
  },
  {
    id: "tricologia",
    titolo: "Tricologia",
    descrizione:
      "Studio e cura delle patologie del capello e del cuoio capelluto, con analisi strumentale e trattamenti mirati.",
    cardDescrizione:
      "Diagnosi e cura delle patologie di capelli e cuoio capelluto, con analisi strumentale e trattamenti mirati.",
    icon: "tricologia",
    immagine: "/images/macro-aree/tricologia.webp",
    voci: [
      {
        id: "tricologia-clinica",
        titolo: "Tricologia",
        descrizione:
          "La tricologia moderna integra analisi strumentale e trattamenti mirati per contrastare la caduta, il diradamento e le alterazioni del capello.",
        elenco: [
          { id: "visita-tricologica", label: "Visita tricologica" },
          { id: "tricoscopia", label: "Tricoscopia" },
          { id: "mesoterapia-tricologica", label: "Mesoterapia tricologica" },
          { id: "prp", label: "PRP" },
        ],
        punti: [
          "Alopecia androgenetica maschile e femminile",
          "Alopecia areata",
          "Tricoscopia digitale",
          "Terapie mediche e infiltrative",
        ],
      },
    ],
  },
  {
    id: "dermochirurgia",
    titolo: "Dermochirurgia",
    descrizione:
      "Interventi ambulatoriali per la rimozione di lesioni cutanee, chirurgica o con elettrobisturi.",
    cardDescrizione:
      "Interventi ambulatoriali per la rimozione di lesioni cutanee, chirurgica o con elettrobisturi.",
    icon: "dermochirurgia",
    immagine: "/images/macro-aree/dermochirurgia.webp",
    voci: [
      {
        id: "rimozione-chirurgica",
        titolo: "Rimozione chirurgica",
        descrizione: "Asportazione chirurgica ambulatoriale di lesioni cutanee.",
        punti: ["Cisti", "Nevi", "Melanoma"],
      },
      {
        id: "rimozione-elettrobisturi",
        titolo: "Rimozione con elettrobisturi",
        descrizione: "Rimozione di lesioni cutanee superficiali mediante elettrobisturi.",
        punti: ["Condilomi", "Fibromi penduli", "Cheratosi"],
      },
    ],
  },
]

export function linkDellArea(area: MacroArea) {
  return area.voci.flatMap((voce) =>
    voce.elenco
      ? voce.elenco.map((e) => ({ label: e.label.replace(/ \(.*\)$/, ""), href: `/specialita#${e.id}` }))
      : [{ label: voce.titolo, href: `/specialita#${voce.id}` }]
  )
}
