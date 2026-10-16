import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Download } from "@/components/Icons";
import { education, positions, researchInterests, service, site } from "@/lib/site";
import { delay } from "@/lib/motion";

export const metadata: Metadata = {
  title: "About",
  description: "Biography of Imam (Dr.) Idris A. Oni — education, academic career and religious leadership in Abeokuta, Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Biography"
        title="About Imam (Dr.) Idris A. Oni"
        intro="Educationist, Islamic scholar and Imām, specialising in Islamic Eschatology — a branch of Islamic Theology."
      />

      <section className="container grid gap-12 py-16 md:py-20 lg:grid-cols-[22rem_1fr] lg:gap-16">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="arch relative aspect-[4/5] animate-unveil overflow-hidden bg-green" style={delay(200)}>
            <Image
              src={site.images.portrait}
              alt="Imam Idris A. Oni"
              fill
              sizes="(min-width: 1024px) 22rem, 90vw"
              className="animate-settle object-cover"
              style={delay(200)}
            />
          </div>
          <a href={site.cv} download className="btn-primary mt-6 w-full">
            <Download width={16} height={16} /> Download full CV
          </a>
          <div className="mt-8">
            <p className="eyebrow">Research interests</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {researchInterests.map((r) => (
                <li key={r} className="rounded-full bg-green-light px-3 py-1 text-sm font-semibold text-green-deep">{r}</li>
              ))}
            </ul>
          </div>
        </aside>

        <div>
          <div className="reveal max-w-prose space-y-5 text-lg">
            <p>
              Imam Idris A. Oni was born in the 1980s to Alhaji and Alhaja Abdur-Rasaq Oni. His Arabic and Islamic
              training began early, at Markaz Da‘wah al-Islāmiyyah under the late Ustadh AbdulWaheed Jumu‘ah.
            </p>
            <p>
              He studied Islamic Studies at Tai Solarin University of Education, graduating in 2011 with First Class
              Honours as the best graduating student of the College of Humanities. He went on to a Master’s degree in
              Islamic Studies, focused on Muslim societies, and a Ph.D. in Islamic Studies at Olabisi Onabanjo University,
              Ago-Iwoye.
            </p>
            <p>
              Today he is a Senior Lecturer and Head of the Department of Islamic Studies at Crescent University,
              Abeokuta. Alongside his academic work he serves the community as Ratībi Imām of Ar-Rahīm Mosque, Laderin,
              and Acting Chief Imām of Taqwā Mosque, Lafenwa, Abeokuta. He is married and blessed with children.
            </p>
          </div>

          <h2 className="mt-14 text-3xl">Current positions</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {positions.map((p, i) => (
              <li key={p.role} className="reveal rounded-2xl border border-line bg-white p-5" style={delay(i * 110)}>
                <h3 className="text-lg">{p.role}</h3>
                <p className="mt-1 text-sm text-ink-soft">{p.place}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-14 text-3xl">Education</h2>
          <ol className="reveal-line relative mt-6">
            {education.map((e, i) => (
              <li key={e.title} className="reveal relative pb-8 pl-8 last:pb-0" style={delay(200 + i * 160)}>
                <span className="absolute -left-[5px] top-2 h-3 w-3 rotate-45 bg-gold" aria-hidden="true" />
                <p className="text-sm font-semibold uppercase tracking-wider text-gold-text">{e.period}</p>
                <h3 className="mt-1 text-xl">{e.title}</h3>
                <p className="text-ink-soft">{e.place}</p>
                {e.note && <p className="mt-1 text-ink-soft">{e.note}</p>}
              </li>
            ))}
          </ol>

          <h2 className="mt-14 text-3xl">{service.title}</h2>
          <p className="mt-4 max-w-prose text-lg">{service.body}</p>

          <div className="mt-14 flex flex-wrap gap-3">
            <Link href="/publications" className="btn-outline">View publications</Link>
            <Link href="/contact" className="btn-primary">Invite to speak</Link>
          </div>
        </div>
      </section>
    </>
  );
}
