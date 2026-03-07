interface SectionLabelProps {
  text: string;
  center?: boolean;
  className?: string;
}

export default function SectionLabel({ text, center = false, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-4 mb-5 ${center ? "justify-center" : ""} ${className}`}>
      <div className="w-12 h-px bg-hca-gold/50" />
      <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
        {text}
      </span>
      {center && <div className="w-12 h-px bg-hca-gold/50" />}
    </div>
  );
}
