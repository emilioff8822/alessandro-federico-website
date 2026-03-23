export interface Testimonianza {
  id: number
  nome: string
  citta: string
  trattamento: string
  testo: string
  stelle: number
}

export const testimonianze: Testimonianza[] = [
  {
    id: 1,
    nome: "Martina R.",
    citta: "Milano",
    trattamento: "DERMATOLOGIA CLINICA",
    stelle: 5,
    testo:
      "Il Dr. Federico è stato in grado di risolvere un problema che avevo da anni e che altri specialisti non erano riusciti ad affrontare. Visita accurata, spiegazioni chiare, risultati concreti. La professionalità e l'attenzione umana fanno la differenza.",
  },
  {
    id: 2,
    nome: "Giovanni T.",
    citta: "Roma",
    trattamento: "MEDICINA ESTETICA · FILLER",
    stelle: 5,
    testo:
      "Ero scettico, ma il risultato è stato naturale e proporzionato — esattamente quello che speravo. Il dottore ha capito subito cosa cercavo e mi ha guidato con grande competenza. Non tornerei da nessun altro.",
  },
  {
    id: 3,
    nome: "Sara M.",
    citta: "Napoli",
    trattamento: "TRICOLOGIA",
    stelle: 5,
    testo:
      "Finalmente qualcuno che ha preso sul serio il problema della caduta dei capelli senza banalizzare. Piano di trattamento personalizzato, aggiornamenti costanti e un miglioramento visibile già dopo pochi mesi. Grazie di cuore.",
  },
  {
    id: 4,
    nome: "Luca B.",
    citta: "Torino",
    trattamento: "DERMATOSCOPIA",
    stelle: 5,
    testo:
      "Visita dermatoscopica meticolosa, ogni neo mappato e spiegato. Ho finalmente dormito sonni tranquilli sapendo di essere in buone mani. Lo studio è accogliente e l'attesa è minima. Consiglio vivamente.",
  },
  {
    id: 5,
    nome: "Alessia F.",
    citta: "Firenze",
    trattamento: "MEDICINA ESTETICA · TOSSINA BOTULINICA",
    stelle: 5,
    testo:
      "Risultato assolutamente naturale, nessun effetto \"mascherina\". Il dottore è stato chiaro sui limiti e sulle aspettative, e il risultato ha superato le mie aspettative. Ambiente elegante, personale gentilissimo.",
  },
  {
    id: 6,
    nome: "Claudia V.",
    citta: "Bologna",
    trattamento: "PEELING",
    stelle: 5,
    testo:
      "Ho fatto un ciclo di peeling per iperpigmentazione post-estiva. La pelle è tornata omogenea e luminosa. Il Dr. Federico mi ha seguito passo passo, con consigli post-trattamento dettagliati e sempre disponibile per qualsiasi dubbio.",
  },
  {
    id: 7,
    nome: "Marco D.",
    citta: "Bari",
    trattamento: "MALATTIE SESSUALMENTE TRASMESSE",
    stelle: 5,
    testo:
      "Professionale, riservato e diretto. In un ambito delicato come questo, trovare un medico che metta a proprio agio e che garantisca massima discrezione è fondamentale. Il Dr. Federico risponde a tutti questi requisiti.",
  },
  {
    id: 8,
    nome: "Elena C.",
    citta: "Genova",
    trattamento: "MESOTERAPIA TRICOLOGICA",
    stelle: 5,
    testo:
      "Dopo il terzo ciclo di mesoterapia i risultati sono evidenti: la densità è migliorata e il cuoio capelluto è più sano. Il protocollo è stato costruito su misura per me. Consigliatissimo a chi soffre di diradamento.",
  },
]
