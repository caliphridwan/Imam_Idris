import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { contact } from "@/lib/site";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" />
      <section className="container max-w-3xl py-14">
        <div className="prose-body text-lg">
          <h2>Use of content</h2>
          <p>
            Articles, publications and images on this site are the work of Imam (Dr.) Idris A. Oni unless stated
            otherwise. You are welcome to quote short passages with clear attribution and a link to the source. Please
            ask before republishing a full article or document.
          </p>
          <h2>Academic citation</h2>
          <p>When citing a journal article, cite the original journal publication rather than this website.</p>
          <h2>External links</h2>
          <p>Links to social media and other websites are provided for convenience; their content is the responsibility of their owners.</p>
          <h2>Contact</h2>
          <p>Questions about these terms: <a className="link" href={`mailto:${contact.email}`}>{contact.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
