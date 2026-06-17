export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <span className="text-sm font-semibold text-brand-600 tracking-wide uppercase">{eyebrow}</span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-900 max-w-2xl">{title}</h2>
      {description && <p className="text-ink-600 max-w-xl text-base sm:text-lg">{description}</p>}
    </div>
  );
}
