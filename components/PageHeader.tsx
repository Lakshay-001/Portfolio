type PageHeaderProps = {
  eyebrow: string;
  title: string;
  text: string;
  align?: "wide" | "center";
};

export function PageHeader({ eyebrow, title, text, align = "wide" }: PageHeaderProps) {
  return (
    <section className={`page-header ${align}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}
