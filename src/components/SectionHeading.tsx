type Props = {
  id?: string;
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ id, label, title, description, align = "left" }: Props) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";
  const descClass = align === "center" ? "mx-auto" : "";

  return (
    <div className={`mb-12 max-w-2xl lg:mb-16 ${alignClass}`}>
      {label ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">{label}</p>
      ) : null}
      <h2 id={id} className="text-section font-semibold text-navy">
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed text-muted-foreground ${descClass} max-w-xl`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
