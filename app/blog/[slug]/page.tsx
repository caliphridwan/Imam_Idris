import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPost, posts } from "@/lib/posts";
import { site } from "@/lib/site";
import { ArrowRight, Calendar } from "@/components/Icons";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", title: post.title, description: post.excerpt, publishedTime: post.date, images: post.cover ? [post.cover] : undefined },
  };
}

export default function PostPage({ params }: Params) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article>
      <header className="border-b border-line bg-paper-deep">
        <div className="container max-w-3xl py-14 md:py-20">
          <Link href="/blog" className="text-sm font-semibold text-green hover:underline">← All articles</Link>
          <ul className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <li key={t} className="eyebrow">{t}</li>
            ))}
          </ul>
          <h1 className="mt-3 text-4xl md:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg text-ink-soft">{post.excerpt}</p>
          <p className="mt-6 flex items-center gap-2 text-sm text-ink-soft">
            <Calendar width={16} height={16} />
            <span>
              {site.shortTitle} · <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
          </p>
        </div>
      </header>

      {post.cover && (
        <div className="container max-w-4xl -mb-4 pt-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-green">
            <Image src={post.cover} alt={post.coverAlt ?? ""} fill priority sizes="(min-width: 1024px) 56rem, 100vw" className="object-cover" />
          </div>
        </div>
      )}

      <div className="container max-w-3xl py-14">
        <div className="prose-body text-lg">
          {post.body.map((block, i) => {
            if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
            if (block.type === "quote")
              return (
                <blockquote key={i} className="my-8 border-y border-gold/50 py-6 text-center font-display text-xl italic">
                  {block.text}
                  {block.cite && <cite className="mt-2 block text-sm not-italic text-ink-soft">{block.cite}</cite>}
                </blockquote>
              );
            return <p key={i}>{block.text}</p>;
          })}
        </div>

        {post.discussionUrl && (
          <div className="mt-12 rounded-2xl border border-line bg-white p-6">
            <p className="font-display text-xl">Join the conversation</p>
            <p className="mt-1 text-ink-soft">This article was shared and discussed on X.</p>
            <a href={post.discussionUrl} target="_blank" rel="noopener noreferrer" className="link mt-3 inline-flex items-center gap-2">
              Read the discussion <ArrowRight width={16} height={16} />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
