import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dott. Alessandro Federico — Dermatologo",
    short_name: "Dott. Federico",
    description: "Dermatologia, Tricologia e Medicina Estetica a Milano e Paola (CS)",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#1E3550",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
  }
}
