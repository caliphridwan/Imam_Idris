import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { PublicationItem } from "@/components/Cards";
import { publications, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Publications",
  description: "Journal articles by Imam (Dr.) Idris A. Oni on extremism and coexistence, sectarianism, education and Christian–Muslim relations.",
};

export default function PublicationsPage() {
  const categories = Array.from(new Set(publications.map((p) => p.category)));
  return (
    <>
      <PageHeader
        eyebrow="Journal articles"
        title="Publications"
        intro="Journal articles on violent extremism and peaceful coexistence, sectarianism, education and the shared ground between Christianity and Islam."
      />
      <section className="container py-16 md:py-20">
        <ul className="mb-10 flex flex-wrap gap-2" aria-label="Subjects">
          {categories.map((c) => (
            <li key={c} className="rounded-full border border-line bg-white px-3 py-1 text-sm font-semibold text-ink-soft">{c}</li>
          ))}
        </ul>
        <ol className="border-b border-line">
          {publications.map((pub, i) => (
            <PublicationItem key={pub.slug} pub={pub} index={i} />
          ))}
        </ol>
        <p className="mt-10 text-ink-soft">
          A complete list of publications is in the{" "}
          <a href={site.cv} download className="link">curriculum vitae</a>.
        </p>
      </section>
    </>
  );
}
