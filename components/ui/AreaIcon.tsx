import { Microscope, Scissors, Sparkles, Stethoscope } from "lucide-react"
import type { MacroArea } from "@/data/servizi"

const icons = {
  dermatologia: Stethoscope,
  estetica: Sparkles,
  tricologia: Microscope,
  dermochirurgia: Scissors,
}

export default function AreaIcon({ icon, className }: { icon: MacroArea["icon"]; className?: string }) {
  const Icon = icons[icon]
  return <Icon strokeWidth={1.3} className={className} />
}
