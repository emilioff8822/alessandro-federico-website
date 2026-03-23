export type SottoServizio = {
  id: string
  titolo: string
  descrizione: string
  punti: string[]
}

export type Specialita = {
  id: string
  titolo: string
  descrizione: string
  icon: string
  href: string
  sottoServizi: readonly string[]
  dettagli: SottoServizio[]
}

export const specialita: Specialita[] = [
  {
    id: "dermatologia",
    titolo: "Dermatologia",
    descrizione:
      "Diagnosi e trattamento delle patologie cutanee con approccio clinico integrato e strumentazione diagnostica avanzata.",
    icon: "dermatologia",
    href: "/specialita#dermatologia",
    sottoServizi: [
      "Dermatologia Clinica",
      "Malattie Sessualmente Trasmesse",
      "Tricologia",
      "Dermatoscopia",
      "Terapia Fisica",
    ],
    dettagli: [
      {
        id: "dermatologia-clinica",
        titolo: "Dermatologia Clinica",
        descrizione:
          "La dermatologia clinica si occupa della diagnosi e del trattamento di tutte le patologie della pelle, delle mucose e degli annessi cutanei. Un'anamnesi accurata e un esame obiettivo approfondito sono alla base di ogni percorso terapeutico personalizzato.",
        punti: [
          "Diagnosi e trattamento delle dermatiti",
          "Psoriasi e malattie autoimmuni cutanee",
          "Eczema e dermatite atopica",
          "Acne e patologie sebacee",
          "Orticaria e allergie cutanee",
        ],
      },
      {
        id: "mst",
        titolo: "Malattie Sessualmente Trasmesse",
        descrizione:
          "Diagnosi precoce, trattamento e follow-up delle principali infezioni a trasmissione sessuale. Massima riservatezza e approccio clinico aggiornato secondo le linee guida internazionali.",
        punti: [
          "Diagnosi sierologica e microbiologica",
          "Trattamento delle infezioni batteriche e virali",
          "Counseling e prevenzione",
          "Follow-up e monitoraggio terapeutico",
          "Vaccinazioni preventive",
        ],
      },
      {
        id: "tricologia",
        titolo: "Tricologia",
        descrizione:
          "Studio e cura delle patologie del capello e del cuoio capelluto. La tricologia moderna integra analisi strumentale e trattamenti mirati per contrastare la caduta, diradamento e le alterazioni del capello.",
        punti: [
          "Alopecia androgenetica maschile e femminile",
          "Alopecia areata",
          "Tricoscopia digitale",
          "Terapie mediche e infiltrative",
          "Mesoterapia tricologica",
        ],
      },
      {
        id: "dermatoscopia",
        titolo: "Dermatoscopia",
        descrizione:
          "La dermatoscopia è una tecnica di imaging non invasiva che permette l'analisi in vivo delle strutture cutanee superficiali. Fondamentale per la diagnosi precoce del melanoma e delle lesioni pigmentate.",
        punti: [
          "Mappatura dei nei con dermoscopio digitale",
          "Diagnosi differenziale delle lesioni pigmentate",
          "Screening del melanoma",
          "Follow-up periodico dei nei atipici",
          "Documentazione fotografica ad alta risoluzione",
        ],
      },
      {
        id: "terapia-fisica",
        titolo: "Terapia Fisica",
        descrizione:
          "Utilizzo di tecnologie fisiche avanzate per il trattamento di patologie cutanee resistenti ai farmaci tradizionali. Protocolli validati dalla letteratura scientifica internazionale.",
        punti: [
          "Fototerapia UVB a banda stretta",
          "Laserterapia per patologie cutanee",
          "Trattamento della vitiligine",
          "Psoriasi e dermatite atopica refrattaria",
          "Crioterapia per lesioni benigne",
        ],
      },
    ],
  },
  {
    id: "medicina-estetica",
    titolo: "Medicina Estetica",
    descrizione:
      "Trattamenti estetici avanzati per il ringiovanimento, il rimodellamento e il benessere della pelle.",
    icon: "estetica",
    href: "/specialita#medicina-estetica",
    sottoServizi: [
      "Filler",
      "Biolifting",
      "Tossina Botulinica",
      "Peeling",
      "Mesoterapia Lipolitica e Tricologica",
    ],
    dettagli: [
      {
        id: "filler",
        titolo: "Filler",
        descrizione:
          "I filler a base di acido ialuronico sono il trattamento d'elezione per il riempimento di rughe, il ringiovanimento dei volumi facciali e il miglioramento della qualità cutanea. Ogni trattamento è personalizzato in base all'anatomia del paziente.",
        punti: [
          "Correzione delle rughe nasolabiali e del codice a barre",
          "Aumento e ridefinizione delle labbra",
          "Rimodellamento dello zigomo e dell'ovale del viso",
          "Rinofiller non chirurgico",
          "Biorivitalizzazione cutanea",
        ],
      },
      {
        id: "biolifting",
        titolo: "Biolifting",
        descrizione:
          "Il biolifting è un trattamento rigenerativo che stimola i meccanismi naturali di produzione del collagene e dell'elastina, migliorando tono, compattezza e luminosità della pelle senza interventi chirurgici.",
        punti: [
          "Stimolazione endogena del collagene",
          "Miglioramento della lassità cutanea",
          "Trattamento del collo e del décolleté",
          "Effetto lifting naturale e progressivo",
          "Nessun tempo di recupero",
        ],
      },
      {
        id: "tossina-botulinica",
        titolo: "Tossina Botulinica",
        descrizione:
          "La tossina botulinica è il trattamento più efficace per le rughe dinamiche del viso. Agisce rilassando selettivamente i muscoli mimici, preservando la naturalezza dell'espressione. Risultati visibili in 5-7 giorni.",
        punti: [
          "Rughe della fronte e glabella",
          "Zampe di gallina perioculari",
          "Lifting delle sopracciglia",
          "Trattamento del sorriso gengivale",
          "Ipoidrosi ascellare e palmare",
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
        id: "mesoterapia",
        titolo: "Mesoterapia Lipolitica e Tricologica",
        descrizione:
          "La mesoterapia consiste nell'iniezione intradermica o sottocutanea di principi attivi mirati. La variante lipolitica agisce sui depositi adiposi localizzati; quella tricologica nutre il bulbo pilifero e contrasta la caduta dei capelli.",
        punti: [
          "Riduzione dei depositi adiposi localizzati",
          "Trattamento della cellulite",
          "Rivitalizzazione del cuoio capelluto",
          "Contrasto della caduta dei capelli",
          "Protocolli personalizzati per ogni paziente",
        ],
      },
    ],
  },
]
