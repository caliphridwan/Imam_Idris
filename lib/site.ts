// Single source of truth for all site content.
// Everything here was carried over from idrisaoni.netlify.app.

export const site = {
  name: "Imam Idris A. Oni",
  fullName: "Imam (Dr.) Idris Ajani Oni",
  shortTitle: "Imam Idris A. Oni (Ph.D.)",
  tagline: "An Educationist and an Islamic Scholar",
  description:
    "Official website of Imam Idris A. Oni (Ph.D.), Senior Lecturer and Head of the Department of Islamic Studies, Crescent University, Abeokuta — lectures, publications and writing.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://idrisaoni.netlify.app",
  locale: "en_NG",
  // Asset paths live under /public. Copy the files from the old site (see README).
  images: {
    logo: "/assets/images/Imam_logo.png",
    hero: "/assets/images/dr.idris_oni1.jpg",
    portrait: "/assets/images/imam_idris.jpg",
  },
  cv: "/documents/cv-imam-idris-a-oni-phd.docx",
};

export const verse = {
  arabic:
    "قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ",
  translation:
    "Surely my prayer and my sacrifice and my life and my death are (all) for Allah, the Lord of the worlds.",
  reference: "Qur’an 6:162",
};

export const contact = {
  email: "idris.oni@cuab.edu.ng",
  // The old site displayed +234 70 6520 0336 but its tel: link dialled
  // +234 903 854 3371. Confirm which is correct and edit both fields.
  phoneDisplay: "+234 70 6520 0336",
  phoneHref: "tel:+2347065200336",
  address: ["Department of Islamic Studies", "Crescent University", "Abeokuta, Ogun State, Nigeria"],
};

export type SocialKey = "x" | "facebook" | "instagram" | "linkedin";

export const socials: { key: SocialKey; label: string; href: string; handle: string }[] = [
  { key: "x", label: "X (Twitter)", href: "https://x.com/IdrisAOni1", handle: "@IdrisAOni1" },
  { key: "facebook", label: "Facebook", href: "https://facebook.com/welectronics.02", handle: "Facebook" },
  { key: "instagram", label: "Instagram", href: "https://instagram.com/idrisrasaqoni", handle: "@idrisrasaqoni" },
  { key: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/idris-ajani-oni-329b2654", handle: "Idris Ajani Oni" },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/publications", label: "Publications" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const positions = [
  {
    role: "Senior Lecturer & Head of Department",
    place: "Department of Islamic Studies, Crescent University, Abeokuta",
  },
  { role: "Ratībi Imām", place: "Ar-Rahīm Mosque, Laderin, Abeokuta" },
  { role: "Acting Chief Imām", place: "Taqwā Mosque, Lafenwa, Abeokuta" },
];

export const education = [
  {
    period: "1992 – 1998",
    title: "Arabic & Islamic training",
    place: "Markaz Da‘wah al-Islāmiyyah",
    note: "Under the late Ustadh AbdulWaheed Jumu‘ah.",
  },
  {
    period: "Until 2004",
    title: "Secondary education",
    place: "Stadium Grammar School, Ifako-Ijaiye; Sango Senior Secondary School, Agege",
    note: "Completed at Sango Senior Secondary School in 2004.",
  },
  {
    period: "2011",
    title: "B.A. Islamic Studies — First Class Honours",
    place: "Tai Solarin University of Education",
    note: "Best graduating student, College of Humanities (COHUM).",
  },
  {
    period: "2013 – 2015",
    title: "M.A. Islamic Studies (Muslim Societies)",
    place: "Olabisi Onabanjo University, Ago-Iwoye",
  },
  {
    period: "Ph.D.",
    title: "Ph.D. Islamic Studies (Islamic Eschatology)",
    place: "Olabisi Onabanjo University, Ago-Iwoye",
    note: "Specialisation in Islamic Eschatology, a branch of Islamic Theology.",
  },
];

export const service = {
  title: "National Youth Service",
  body: "Taught at Tahfīzul-Qur’ān, Kibiya, Kano State, and completed his service year at Mufu Lanihun High School, Oyo State.",
};

export const researchInterests = ["Islamic Eschatology", "Islamic Theology", "Muslim Societies", "Interfaith Understanding", "Peace & Coexistence"];

export type Program = {
  title: string;
  location?: string;
  year?: string;
  image?: string;
  alt?: string;
};

// The old site linked these cards to "#". Add a `href` here if you publish write-ups.
export const programs: Program[] = [
  {
    title: "League of Imams Seminar Presentation",
    image: "/assets/images/imam_blog1.jpeg",
    alt: "Imam Idris A. Oni presenting at the League of Imams seminar",
  },
  {
    title: "Annual Ramadan Lecture Seminar & Workshop",
    location: "Abeokuta, Nigeria",
    image: "/assets/images/imam_blog2.jpg",
    alt: "Imam Idris A. Oni delivering a lecture at the annual Ramadan seminar in Abeokuta",
  },
  {
    title: "With Baba Adinni of Shagamu, Alhaji Apelogun, at the Remo Rabitah Seminar",
    location: "Shagamu, Nigeria",
    year: "2023",
  },
  {
    title: "With Professor Dawud al-Hidabi, Rector, International Institute of Muslim Unity (IIUM)",
    location: "International presentation",
  },
];

export type Publication = {
  slug: string;
  title: string;
  category: string;
  file: string;
  summary: string;
};

// PDFs: rename the old files as shown in the README and place them in /public/documents.
export const publications: Publication[] = [
  {
    slug: "islam-violent-extremism-peaceful-coexistence",
    title: "Islam, Violent Extremism and Peaceful Coexistence in Nigeria",
    category: "Violence & Extremism",
    file: "/documents/islam-violent-extremism-peaceful-coexistence-nigeria.pdf",
    summary: "Examines violent extremism in Nigeria against Islamic teaching on peace and coexistence.",
  },
  {
    slug: "gadau-journal-arts-humanities",
    title: "Gadau Journal of Arts & Humanities",
    category: "Education",
    file: "/documents/gadau-journal-of-arts-and-humanities.pdf",
    summary: "Article published in the Gadau Journal of Arts & Humanities.",
  },
  {
    slug: "sectarianism-in-islam",
    title: "Sectarianism in Islam? Unity in Diversity",
    category: "Religion & Peace Studies",
    file: "/documents/sectarianism-in-islam-unity-in-diversity.pdf",
    summary: "Published in a journal of Religions & Peace Studies; on sectarian difference and the unity of the Ummah.",
  },
  {
    slug: "christianity-and-islam",
    title: "Analytical Discourse of Similarities between Christianity and Islam",
    category: "Understanding Semitism",
    file: "/documents/islam-and-christianity.pdf",
    summary: "An analytical discourse on the shared ground between the two Abrahamic faiths.",
  },
];
