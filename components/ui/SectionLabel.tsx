import FadeIn from "./FadeIn"

export default function SectionLabel({ text, className }: { text: string; className?: string }) {
  return (
    <FadeIn>
      <div className={`flex items-center gap-3 mb-12 md:mb-16 ${className ?? ""}`}>
        <div className="w-3 h-px bg-accent" />
        <span className="text-xs uppercase tracking-[0.15em] text-accent font-medium">
          {text}
        </span>
      </div>
    </FadeIn>
  )
}
