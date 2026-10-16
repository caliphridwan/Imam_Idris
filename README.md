# Imam Idris A. Oni — official website (Next.js)

A rebuild of idrisaoni.netlify.app with **Next.js 14 (App Router)**, **TypeScript** and **Tailwind CSS**, ready for Netlify.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Before you deploy, do these 4 things

### 1. Copy the images from the old site into `public/assets/images/`

Keep the **same file names** as the old site uses:

| File | Used for |
|---|---|
| `Imam_logo.png` | Header logo + favicon |
| `dr.idris_oni1.jpg` | Home hero portrait, social share image |
| `imam_idris.jpg` | About page portrait |
| `imam_blog1.jpeg` | Program card: League of Imams Seminar |
| `imam_blog2.jpg` | Program card: Ramadan Lecture Seminar |
| `port10_unity.webp` | Blog cover: Unity in Diversity |

Program cards 3 and 4 show a pattern placeholder until you add images; set `image` in `lib/site.ts`.

### 2. Copy the documents into `public/documents/` and rename them (no spaces)

| Old file name | New file name |
|---|---|
| `CV Imam Idris A. Oni (PhD).docx` | `cv-imam-idris-a-oni-phd.docx` |
| `Islam, Violent Extemism and Peaceful Coexistence in Nigeria.pdf` | `islam-violent-extremism-peaceful-coexistence-nigeria.pdf` |
| `Gadau Journal of Arts & Humanities.pdf` | `gadau-journal-of-arts-and-humanities.pdf` |
| `Journals of Religions & Peace studies.pdf` | `sectarianism-in-islam-unity-in-diversity.pdf` |
| `Islam & Christianity.pdf` | `islam-and-christianity.pdf` |

A PDF version of the CV is recommended; if you add one, update `site.cv` in `lib/site.ts`.

### 3. Paste the original "Unity in Diversity" article text

Open `lib/posts.ts` and replace the bracketed placeholder paragraphs with the original text from the old `/blog_2` page.

### 4. Confirm contact details in `lib/site.ts`

- **Phone:** the old site showed `+234 70 6520 0336` but its call link dialled `+234 903 854 3371`. Both fields now use the displayed number. Set the correct one.
- **Facebook:** the link points to `facebook.com/welectronics.02`. Check that it is the right profile.
- The old email link was broken (it opened a page on the site instead of the mail app). That is now fixed.

## Where things live

```
app/
  layout.tsx            Fonts, metadata, header/footer, Person JSON-LD
  page.tsx              Home: hero, verse, positions, programs, publications, latest post, CTA
  about/                Biography, positions, education timeline
  publications/         Journal articles with PDF links
  blog/ + blog/[slug]/  Blog index and article pages (statically generated)
  contact/              Netlify contact form + direct details
  privacy/, terms/      Replace the old "#" placeholder links
  sitemap.ts, robots.ts SEO
components/             Header (mobile menu), Footer, Cards, ContactForm, Icons
lib/site.ts             ALL site content: bio, positions, programs, publications, contact, socials
lib/posts.ts            Blog posts
public/__forms.html     Lets Netlify detect the contact form
```

**To edit content, you only need `lib/site.ts` and `lib/posts.ts`.**

### Add a blog post
Append an object to `posts` in `lib/posts.ts` (slug, title, date, excerpt, cover, body). It appears on the blog, the home page (when it is the newest post) and in the sitemap.

## Deploy to Netlify

1. Push this folder to a GitHub repository.
2. In Netlify: **Add new site → Import from Git**, then pick the repo. Netlify detects Next.js automatically, and `netlify.toml` sets Node 20.
3. Optionally set `NEXT_PUBLIC_SITE_URL` (e.g. a custom domain) under Site settings → Environment variables.
4. After the first deploy, enable form notifications under **Forms → contact → Notifications** so messages reach `idris.oni@cuab.edu.ng`.

Old URLs are redirected: `/blog_2` goes to `/blog/unity-in-diversity`, and `*.html` paths go to their new routes (`next.config.mjs`).

## Design

- **Palette:** parchment `#F6F2E9`, ink `#17211D`, deep green `#1E4D3F`, gold `#B8893A`. Text colours meet WCAG AA.
- **Type:** Fraunces (display), Source Sans 3 (body), Amiri (Arabic verse), all loaded via `next/font`.
- **Motifs:** arch-topped (mihrab) portrait frames and a faint eight-point star.
- Change tokens in `tailwind.config.ts`.
