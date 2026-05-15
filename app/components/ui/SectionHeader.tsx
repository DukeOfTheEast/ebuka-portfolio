interface SectionHeaderProps {
  num: string;
  title: string;
}

export default function SectionHeader({ num, title }: SectionHeaderProps) {
  return (
    <div className="flex items-baseline gap-4 mb-14">
      <span className="text-[11px] text-muted-2 tracking-widest">{num}</span>
      <h2
        className="font-display text-[28px] font-bold text-accent tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
