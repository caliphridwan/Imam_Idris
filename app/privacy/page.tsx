import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { contact } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <section className="container max-w-3xl py-14">
        <div className="prose-body text-lg">
          <p>This website does not use advertising or tracking cookies.</p>
          <h2>Messages you send</h2>
          <p>
            When you use the contact form, the details you enter (name, email, optional phone number and message) are
            delivered by email so that your enquiry can be answered. They are not sold or shared with third parties and
            are used only to respond to you.
          </p>
          <h2>Hosting</h2>
          <p>The site is hosted on Netlify, which may keep standard server logs (such as IP address and browser type) for security and reliability.</p>
          <h2>Your requests</h2>
          <p>To ask for a message you sent to be deleted, email <a className="link" href={`mailto:${contact.email}`}>{contact.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
