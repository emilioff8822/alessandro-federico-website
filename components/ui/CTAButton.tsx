import Link from "next/link"

type Variant = "primary" | "outline" | "inverted" | "light"

type Props = {
  text: string
  href: string
  variant?: Variant
  fullWidth?: boolean
  className?: string
}

export default function CTAButton({
  text,
  href,
  variant = "primary",
  fullWidth = false,
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      className={`btn btn-${variant} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {text}
    </Link>
  )
}
