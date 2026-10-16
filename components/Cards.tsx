import Image from "next/image";
import Link from "next/link";
import type { Program, Publication } from "@/lib/site";
import { formatDate, type Post } from "@/lib/posts";
import { delay } from "@/lib/motion";
import { ArrowRight, FileText, Star8 } from "./Icons";

export function ProgramCard({ program }: { program: Program }) {
  const meta = [program.location, program.year].filter(Boolean).join(" · ");
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_44px_-26px_rgba(23,33,29,0.45)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-green">
        {program.image ? (
          <Image
            src={program.image}
            alt={program.alt ?? program.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Star8 className="h-28 w-28 text-gold-light/60 transition-transform duration-1000 group-hover:rotate-90" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        {meta && <p className="text-xs font-semibold uppercase tracking-wider text-gold-text">{meta}</p>}
        <h3 className="mt-2 font-display text-lg leading-snug">{program.title}</h3>
      </div>
    </article>
  );
}

export function PublicationItem({ pub, index }: { pub: Publication; index: number }) {
  return (
    <li
      className="reveal group grid gap-4 border-t border-line py-7 md:grid-cols-[4rem_1fr_auto] md:items-start md:gap-8"
      style={delay(index * 100)}
    >
      <span className="font-display text-3xl text-gold transition-transform duration-500 group-hover:-translate-y-1" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gold-text">{pub.category}</p>
        <h3 className="mt-1 font-display text-xl md:text-2xl">{pub.title}</h3>
        <p className="mt-2 max-w-prose text-ink-soft">{pub.summary}</p>
      </div>
      <a href={pub.file} target="_blank" rel="noopener noreferrer" className="btn-outline self-start">
        <FileText width={16} height={16} /> Read PDF
        <span className="sr-only">: {pub.title}</span>
      </a>
    </li>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group relative grid overflow-hidden rounded-2xl border border-line bg-white md:grid-cols-[1fr_1.2fr]">
      <div className="relative aspect-[16/10] overflow-hidden bg-green md:aspect-auto md:min-h-[260px]">
        {post.cover && (
          <Image
            src={post.cover}
            alt={post.coverAlt ?? ""}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        )}
      </div>
      <div className="flex flex-col p-6 md:p-8">
        <p className="text-sm text-ink-soft">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
        <h3 className="mt-2 text-2xl md:text-3xl">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 hover:text-green">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 text-ink-soft">{post.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-green">
          Read the article <ArrowRight width={18} height={18} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
