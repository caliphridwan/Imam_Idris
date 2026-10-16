// Blog posts. Each block is either a paragraph or a sub-heading.
// To add a post, append an object to `posts` — the blog index, post page,
// sitemap and home page pick it up automatically.

export type Block = { type: "p"; text: string } | { type: "h2"; text: string } | { type: "quote"; text: string; cite?: string };

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  excerpt: string;
  cover?: string;
  coverAlt?: string;
  tags: string[];
  discussionUrl?: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "unity-in-diversity",
    title: "Unity in Diversity",
    date: "2023-10-22",
    excerpt:
      "Sunni and Shi‘a share the same Qur’an, the same Prophet ﷺ and the same Qiblah. A call to set aside political divisions that only our adversaries profit from.",
    cover: "/assets/images/port10_unity.webp",
    coverAlt: "Cover image for the article Unity in Diversity",
    tags: ["Ummah", "Sectarianism", "Dialogue"],
    discussionUrl: "https://x.com/IdrisAOni1/status/1716042570046791906",
    // IMPORTANT: paste the original article text from the old /blog_2 page
    // into the paragraphs below before going live. The headings follow the
    // structure of the original piece.
    body: [
      { type: "h2", text: "Division, and who profits from it" },
      { type: "p", text: "[Original paragraph 1 — on the deep differences between Sunni and Shi‘a, and how they are funded and widened by outsiders.]" },
      { type: "h2", text: "Weary of division" },
      { type: "p", text: "[Original paragraph 2 — why we do not show fellow Muslims the respect we show our non-Muslim neighbours.]" },
      { type: "h2", text: "Moving forward" },
      { type: "p", text: "[Original paragraph 3 — setting aside artificial divisions; the real threat of extremists within; a proposal for dialogue on shared challenges.]" },
      { type: "h2", text: "Is it sinful to respect a Shi‘a?" },
      { type: "p", text: "[Original paragraph 4.]" },
      { type: "h2", text: "Shared beliefs, and the path to unity" },
      { type: "p", text: "[Original paragraph 5 — the same Qur’an, Prophet and Qiblah; a division that began politically should be healed through faith.]" },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function sortedPosts() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
