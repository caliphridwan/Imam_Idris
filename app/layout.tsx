import type { Metadata, Viewport } from "next";
import { Amiri, Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site, socials, contact } from "@/lib/site";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap", axes: ["opsz"] });
const sans = Source_Sans_3({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const arabic = Amiri({ subsets: ["arabic"], weight: ["400", "700"], variable: "--font-arabic", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.shortTitle} — ${site.tagline}`, template: `%s · ${site.shortTitle}` },
  description: site.description,
  icons: { icon: site.images.logo },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.shortTitle,
    title: site.shortTitle,
    description: site.description,
    images: [{ url: site.images.hero }],
  },
  twitter: { card: "summary_large_image", site: "@IdrisAOni1", creator: "@IdrisAOni1" },
};

export const viewport: Viewport = { themeColor: "#1E4D3F" };

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  honorificPrefix: "Imam Dr.",
  jobTitle: "Senior Lecturer and Head, Department of Islamic Studies",
  worksFor: { "@type": "CollegeOrUniversity", name: "Crescent University, Abeokuta" },
  alumniOf: ["Tai Solarin University of Education", "Olabisi Onabanjo University"],
  email: `mailto:${contact.email}`,
  url: site.url,
  image: `${site.url}${site.images.portrait}`,
  sameAs: socials.map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${arabic.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks JS as available before paint so scroll-reveal content starts hidden only when it can be revealed. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-green focus:px-4 focus:py-2 focus:text-paper">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </body>
    </html>
  );
}
