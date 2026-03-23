import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Alessandro Federico — Dermatologo Milano",
    short_name: "Dr. Federico",
    description: "Dermatologo e medico estetico a Milano",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#7AAEC9",
    icons: [
      { src: "/icon.png", sizes: "any", type: "image/png" },
    ],
  }
}
