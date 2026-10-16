import { Star8 } from "./Icons";

/** Slow, endless strip of words. The duplicate copy is hidden from screen readers. */
export default function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t} className="flex items-center gap-8 pr-8 font-display text-2xl italic text-green md:text-3xl">
          {t}
          <Star8 className="h-6 w-6 text-gold" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee overflow-hidden border-y border-line bg-paper py-6">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
