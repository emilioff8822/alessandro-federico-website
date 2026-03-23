export const specialita = [
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
  },
] as const
