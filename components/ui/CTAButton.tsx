import Link from "next/link"
import { ArrowRight } from "lucide-react"

type Variant = "primary" | "outline" | "inverted" | "light"

type Props = {
  text: string
  href: string
  variant?: Variant
  fullWidth?: boolean
  arrow?: boolean
  className?: string
}

export default function CTAButton({
  text,
  href,
  variant = "primary",
  fullWidth = false,
  arrow = true,
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      className={`btn btn-${variant} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {text}
      {arrow && <ArrowRight strokeWidth={1.5} className="btn-arrow w-4 h-4" aria-hidden="true" />}
    </Link>
  )
}
