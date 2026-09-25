export type Zona = "viso" | "capelli" | "corpo"

export interface FotoPrimaEDopo {
  id: string
  src: string
  width: number
  height: number
  zona: Zona
}

export const etichetteZona: Record<Zona, string> = {
  viso: "Viso",
  capelli: "Capelli e cuoio capelluto",
  corpo: "Corpo",
}

// Ogni immagine è già composta (prima a sinistra o in alto, dopo a destra o in basso)
// e contiene il logo: va mostrata intera, senza ritagli.
export const fotoPrimaEDopo: FotoPrimaEDopo[] = [
  { id: "viso-1", src: "/images/prima-e-dopo/viso-01.png", width: 576, height: 1024, zona: "viso" },
  { id: "viso-2", src: "/images/prima-e-dopo/viso-02.png", width: 772, height: 1024, zona: "viso" },
  { id: "viso-3", src: "/images/prima-e-dopo/viso-03.png", width: 839, height: 1024, zona: "viso" },
  { id: "viso-4", src: "/images/prima-e-dopo/viso-04.png", width: 1024, height: 1024, zona: "viso" },
  { id: "viso-5", src: "/images/prima-e-dopo/viso-05.png", width: 645, height: 1024, zona: "viso" },
  { id: "viso-6", src: "/images/prima-e-dopo/viso-06.png", width: 576, height: 1024, zona: "viso" },
  { id: "viso-7", src: "/images/prima-e-dopo/viso-07.png", width: 1024, height: 901, zona: "viso" },
  { id: "viso-8", src: "/images/prima-e-dopo/viso-08.png", width: 1024, height: 1024, zona: "viso" },
  { id: "viso-9", src: "/images/prima-e-dopo/viso-09.png", width: 950, height: 1024, zona: "viso" },
  { id: "viso-10", src: "/images/prima-e-dopo/viso-10.jpg", width: 1024, height: 1024, zona: "viso" },
  { id: "viso-11", src: "/images/prima-e-dopo/viso-11.jpg", width: 1024, height: 1024, zona: "viso" },
  { id: "viso-12", src: "/images/prima-e-dopo/viso-12.jpg", width: 1024, height: 1024, zona: "viso" },
  { id: "capelli-1", src: "/images/prima-e-dopo/capelli-01.png", width: 1024, height: 1024, zona: "capelli" },
  { id: "capelli-2", src: "/images/prima-e-dopo/capelli-02.png", width: 1024, height: 1024, zona: "capelli" },
  { id: "capelli-3", src: "/images/prima-e-dopo/capelli-03.jpg", width: 1024, height: 1024, zona: "capelli" },
  { id: "capelli-4", src: "/images/prima-e-dopo/capelli-04.png", width: 1020, height: 1020, zona: "capelli" },
  { id: "capelli-5", src: "/images/prima-e-dopo/capelli-05.png", width: 1024, height: 1024, zona: "capelli" },
  { id: "capelli-6", src: "/images/prima-e-dopo/capelli-06.png", width: 1024, height: 679, zona: "capelli" },
  { id: "capelli-7", src: "/images/prima-e-dopo/capelli-07.jpg", width: 1023, height: 1024, zona: "capelli" },
  { id: "capelli-8", src: "/images/prima-e-dopo/capelli-08.jpg", width: 768, height: 1024, zona: "capelli" },
  { id: "capelli-9", src: "/images/prima-e-dopo/capelli-09.png", width: 1024, height: 1024, zona: "capelli" },
  { id: "capelli-10", src: "/images/prima-e-dopo/capelli-10.jpg", width: 1024, height: 1024, zona: "capelli" },
  { id: "capelli-11", src: "/images/prima-e-dopo/capelli-11.jpg", width: 1014, height: 1024, zona: "capelli" },
  { id: "capelli-12", src: "/images/prima-e-dopo/capelli-12.jpg", width: 1024, height: 1024, zona: "capelli" },
  { id: "capelli-13", src: "/images/prima-e-dopo/capelli-13.png", width: 1024, height: 1024, zona: "capelli" },
  { id: "capelli-14", src: "/images/prima-e-dopo/capelli-14.jpg", width: 1024, height: 1024, zona: "capelli" },
  { id: "capelli-15", src: "/images/prima-e-dopo/capelli-15.jpg", width: 1024, height: 1024, zona: "capelli" },
  { id: "capelli-16", src: "/images/prima-e-dopo/capelli-16.jpg", width: 1024, height: 1024, zona: "capelli" },
  { id: "corpo-1", src: "/images/prima-e-dopo/corpo-01.png", width: 1024, height: 1024, zona: "corpo" },
]

export const filtriZona: { label: string; value: Zona | "tutti" }[] = [
  { label: "Tutti", value: "tutti" },
  { label: "Viso", value: "viso" },
  { label: "Capelli e cuoio capelluto", value: "capelli" },
  { label: "Corpo", value: "corpo" },
]
