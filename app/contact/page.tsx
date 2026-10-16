import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone, SocialIcon } from "@/components/Icons";
import { contact, socials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book Imam (Dr.) Idris A. Oni for lectures, seminars and presentations, or send an academic enquiry.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Lecture bookings, presentations & more"
        intro="Send a message with the details of your event or enquiry. Include the date, venue and topic for lecture bookings."
      />
      <section className="container grid gap-12 py-16 md:py-20 lg:grid-cols-[1fr_22rem]">
        <div>
          <h2 className="mb-6 text-3xl">Send a message</h2>
          <ContactForm />
        </div>

        <aside className="space-y-8">
          <div>
            <h2 className="text-2xl">Direct contact</h2>
            <ul className="mt-5 space-y-5">
              <li className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-gold-text" />
                <address className="not-italic">
                  {contact.address.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </address>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 shrink-0 text-gold-text" />
                <a href={`mailto:${contact.email}`} className="link break-all">{contact.email}</a>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-gold-text" />
                <a href={contact.phoneHref} className="link">{contact.phoneDisplay}</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl">Follow</h2>
            <ul className="mt-5 space-y-3">
              {socials.map((s) => (
                <li key={s.key}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex min-h-[44px] items-center gap-3 rounded-xl border border-line bg-white px-4 hover:border-green">
                    <SocialIcon name={s.key} className="text-green" />
                    <span className="font-semibold">{s.label}</span>
                    <span className="ml-auto truncate text-sm text-ink-soft">{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
