import FadeIn from "./FadeIn"

export default function SectionLabel({ text, className }: { text: string; className?: string }) {
  return (
    <FadeIn>
      <div className={`flex items-center gap-3 mb-8 md:mb-10 ${className ?? ""}`}>
        <div className="w-6 h-px bg-brand-blu" />
        <span className="eyebrow text-[11px] text-blu-scuro">
          {text}
        </span>
      </div>
    </FadeIn>
  )
}
