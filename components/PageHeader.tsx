import { Star8 } from "./Icons";

export default function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper-deep">
      <Star8 className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 text-gold/25" />
      <div className="container relative py-14 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-ink-soft">{intro}</p>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 text-3xl md:text-4xl">{title}</h2>
      </div>
      {children}
    </div>
  );
}
