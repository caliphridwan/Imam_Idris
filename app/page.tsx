import Image from "next/image";
import Link from "next/link";
import { ProgramCard, PostCard, PublicationItem } from "@/components/Cards";
import { SectionHeading } from "@/components/PageHeader";
import { ArrowRight, Star8 } from "@/components/Icons";
import { positions, programs, publications, site, verse } from "@/lib/site";
import { sortedPosts } from "@/lib/posts";

export default function Home() {
  const latest = sortedPosts()[0];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Star8 className="pointer-events-none absolute -left-24 top-24 hidden h-80 w-80 text-gold/20 lg:block" />
        <div className="container grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div className="relative">
            <p className="eyebrow">Official website</p>
            <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl">
              Imam Idris A. Oni<span className="text-gold">,</span> <span className="whitespace-nowrap">Ph.D.</span>
            </h1>
            <p className="mt-5 font-display text-2xl italic text-green md:text-3xl">{site.tagline}</p>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              Senior Lecturer and Head of the Department of Islamic Studies at Crescent University, Abeokuta — teaching,
              researching and speaking on Islamic theology, Muslim societies and peaceful coexistence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Book a lecture <ArrowRight width={18} height={18} />
              </Link>
              <Link href="/about" className="btn-outline">
                Read biography
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="arch absolute inset-0 translate-x-4 translate-y-4 border-2 border-gold/60" aria-hidden="true" />
            <div className="arch relative aspect-[4/5] overflow-hidden bg-green">
              <Image
                src={site.images.hero}
                alt="Portrait of Imam Idris A. Oni"
                fill
                priority
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Verse */}
      <section className="bg-green-deep text-paper">
        <figure className="container py-14 text-center md:py-16">
          <p lang="ar" dir="rtl" className="font-arabic text-3xl leading-loose text-gold-light md:text-4xl">
            {verse.arabic}
          </p>
          <blockquote className="mx-auto mt-4 max-w-3xl font-display text-xl italic md:text-2xl">“{verse.translation}”</blockquote>
          <figcaption className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-paper/70">{verse.reference}</figcaption>
        </figure>
      </section>

      {/* Roles */}
      <section className="container py-16 md:py-20">
        <SectionHeading eyebrow="Current positions" title="Scholar, teacher and Imām" />
        <ul className="grid gap-5 md:grid-cols-3">
          {positions.map((p) => (
            <li key={p.role} className="rounded-2xl border border-line bg-white p-6">
              <Star8 className="h-9 w-9 text-gold" />
              <h3 className="mt-4 text-xl">{p.role}</h3>
              <p className="mt-2 text-ink-soft">{p.place}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Programs */}
      <section className="border-y border-line bg-paper-deep">
        <div className="container py-16 md:py-20">
          <SectionHeading eyebrow="Recent programs" title="Lectures, seminars & presentations">
            <Link href="/contact" className="link">Invite Imam Idris to your event</Link>
          </SectionHeading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p) => (
              <ProgramCard key={p.title} program={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="container py-16 md:py-20">
        <SectionHeading eyebrow="Journal articles" title="Selected publications">
          <Link href="/publications" className="link">All publications</Link>
        </SectionHeading>
        <ol className="border-b border-line">
          {publications.slice(0, 3).map((pub, i) => (
            <PublicationItem key={pub.slug} pub={pub} index={i} />
          ))}
        </ol>
      </section>

      {/* Latest post */}
      {latest && (
        <section className="container pb-16 md:pb-20">
          <SectionHeading eyebrow="From the blog" title="Latest writing">
            <Link href="/blog" className="link">All articles</Link>
          </SectionHeading>
          <PostCard post={latest} />
        </section>
      )}

      {/* CTA */}
      <section className="container pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-green px-6 py-12 text-paper md:px-14 md:py-16">
          <Star8 className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-gold-light/20" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl text-paper md:text-4xl">Lecture bookings, presentations &amp; more</h2>
            <p className="mt-4 text-lg text-paper/85">
              For Ramadan lectures, seminars, conferences, khutbah invitations or academic collaboration, send a message
              with the details of your event.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-light">Get in touch <ArrowRight width={18} height={18} /></Link>
              <a href={site.cv} download className="btn border border-paper/40 text-paper hover:bg-paper/10">Download CV</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
