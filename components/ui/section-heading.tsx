type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-brand-ink sm:text-4xl lg:text-[3rem]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-brand-slate/80 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
