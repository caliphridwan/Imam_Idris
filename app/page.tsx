import Image from "next/image";
import Link from "next/link";
import { ProgramCard, PostCard, PublicationItem } from "@/components/Cards";
import { SectionHeading } from "@/components/PageHeader";
import Marquee from "@/components/Marquee";
import { ArrowRight, Star8 } from "@/components/Icons";
import { positions, programs, publications, researchInterests, site, verse } from "@/lib/site";
import { sortedPosts } from "@/lib/posts";
import { delay, idx } from "@/lib/motion";

export default function Home() {
  const latest = sortedPosts()[0];
  const arabicWords = verse.arabic.split(" ");

  return (
    <>
      {/* Hero — staggered entrance on load */}
      <section className="relative overflow-hidden">
        <Star8 className="spin-slow pointer-events-none absolute -left-24 top-24 hidden h-80 w-80 text-gold/20 lg:block" />
        <div className="container grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div className="relative">
            <p className="eyebrow animate-rise" style={delay(100)}>Official website</p>
            <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl">
              <span className="block animate-rise" style={delay(200)}>Imam Idris A. Oni<span className="text-gold">,</span></span>
              <span className="block animate-rise" style={delay(320)}>Ph.D.</span>
            </h1>
            <p className="mt-5 animate-rise font-display text-2xl italic text-green md:text-3xl" style={delay(460)}>
              {site.tagline}
            </p>
            <p className="mt-6 max-w-xl animate-rise text-lg text-ink-soft" style={delay(580)}>
              Senior Lecturer and Head of the Department of Islamic Studies at Crescent University, Abeokuta — teaching,
              researching and speaking on Islamic theology, Muslim societies and peaceful coexistence.
            </p>
            <div className="mt-8 flex animate-rise flex-wrap gap-3" style={delay(700)}>
              <Link href="/contact" className="btn-primary group">
                Book a lecture <ArrowRight width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link href="/about" className="btn-outline">
                Read biography
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 animate-rise" style={delay(900)} aria-hidden="true">
              <div className="arch h-full w-full translate-x-4 translate-y-4 border-2 border-gold/60" />
            </div>
            <div className="arch relative aspect-[4/5] animate-unveil overflow-hidden bg-green" style={delay(250)}>
              <Image
                src={site.images.hero}
                alt="Portrait of Imam Idris A. Oni"
                fill
                priority
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="animate-settle object-cover"
                style={delay(250)}
              />
            </div>
            <div className="pointer-events-none absolute -bottom-10 -right-8 h-28 w-28 animate-rise" style={delay(1100)} aria-hidden="true">
              <Star8 className="spin-slow-reverse h-full w-full text-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* Verse — words appear one by one as it scrolls into view */}
      <section className="relative overflow-hidden bg-green-deep text-paper">
        <Star8 className="spin-slow pointer-events-none absolute -right-20 -top-20 h-72 w-72 text-gold-light/10" />
        <figure className="container relative py-16 text-center md:py-20">
          <p lang="ar" dir="rtl" className="reveal-words font-arabic text-3xl leading-loose text-gold-light md:text-4xl">
            {arabicWords.map((w, i) => (
              <span key={i} style={idx(i)}>
                {w}
                {i < arabicWords.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
          <blockquote className="reveal mx-auto mt-4 max-w-3xl font-display text-xl italic md:text-2xl" style={delay(900)}>
            “{verse.translation}”
          </blockquote>
          <figcaption className="reveal mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-paper/70" style={delay(1100)}>
            {verse.reference}
          </figcaption>
        </figure>
      </section>

      {/* Roles */}
      <section className="container py-16 md:py-20">
        <div className="reveal">
          <SectionHeading eyebrow="Current positions" title="Scholar, teacher and Imām" />
        </div>
        <ul className="grid gap-5 md:grid-cols-3">
          {positions.map((p, i) => (
            <li key={p.role} className="reveal" style={delay(i * 120)}>
              <div className="group h-full rounded-2xl border border-line bg-white p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_18px_40px_-24px_rgba(23,33,29,0.4)]">
                <Star8 className="h-9 w-9 text-gold transition-transform duration-700 group-hover:rotate-45" />
                <h3 className="mt-4 text-xl">{p.role}</h3>
                <p className="mt-2 text-ink-soft">{p.place}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Research interests — slow marquee */}
      <Marquee items={researchInterests} />

      {/* Programs */}
      <section className="bg-paper-deep">
        <div className="container py-16 md:py-20">
          <div className="reveal">
            <SectionHeading eyebrow="Recent programs" title="Lectures, seminars & presentations">
              <Link href="/contact" className="link">Invite Imam Idris to your event</Link>
            </SectionHeading>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p, i) => (
              <div key={p.title} className="reveal" style={delay(i * 110)}>
                <ProgramCard program={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="container py-16 md:py-20">
        <div className="reveal">
          <SectionHeading eyebrow="Journal articles" title="Selected publications">
            <Link href="/publications" className="link">All publications</Link>
          </SectionHeading>
        </div>
        <ol className="border-b border-line">
          {publications.slice(0, 3).map((pub, i) => (
            <PublicationItem key={pub.slug} pub={pub} index={i} />
          ))}
        </ol>
      </section>

      {/* Latest post */}
      {latest && (
        <section className="container pb-16 md:pb-20">
          <div className="reveal">
            <SectionHeading eyebrow="From the blog" title="Latest writing">
              <Link href="/blog" className="link">All articles</Link>
            </SectionHeading>
          </div>
          <div className="reveal" style={delay(120)}>
            <PostCard post={latest} />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="container pb-20">
        <div className="reveal relative overflow-hidden rounded-3xl bg-green px-6 py-12 text-paper md:px-14 md:py-16">
          <Star8 className="spin-slow pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-gold-light/20" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl text-paper md:text-4xl">Lecture bookings, presentations &amp; more</h2>
            <p className="mt-4 text-lg text-paper/85">
              For Ramadan lectures, seminars, conferences, khutbah invitations or academic collaboration, send a message
              with the details of your event.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-light group">
                Get in touch <ArrowRight width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a href={site.cv} download className="btn border border-paper/40 text-paper hover:bg-paper/10">Download CV</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
