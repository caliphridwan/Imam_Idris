import Link from "next/link";
import { contact, nav, site, socials } from "@/lib/site";
import { SocialIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-green-deep text-paper">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl">{site.shortTitle}</p>
          <p className="mt-3 max-w-sm text-paper/80">
            Available for lectures, seminars, conference presentations and academic collaboration.
          </p>
          <ul className="mt-6 flex gap-3" aria-label="Social media">
            {socials.map((s) => (
              <li key={s.key}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/30 transition-colors hover:border-gold hover:text-gold-light"
                >
                  <SocialIcon name={s.key} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">Explore</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-paper/85 hover:text-paper hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">Contact</p>
          <address className="mt-4 space-y-2 not-italic text-paper/85">
            {contact.address.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
            <a href={`mailto:${contact.email}`} className="block pt-2 hover:text-paper hover:underline">{contact.email}</a>
            <a href={contact.phoneHref} className="block hover:text-paper hover:underline">{contact.phoneDisplay}</a>
          </address>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <div className="container flex flex-col gap-3 py-5 text-sm text-paper/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.fullName}. All rights reserved.</p>
          <ul className="flex gap-5">
            <li><Link href="/terms" className="hover:text-paper">Terms &amp; Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-paper">Privacy Policy</Link></li>
            <li><a href="#main" className="hover:text-paper">Back to top ↑</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
