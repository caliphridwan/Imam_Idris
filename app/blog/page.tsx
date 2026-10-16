import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { PostCard } from "@/components/Cards";
import { sortedPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and reflections by Imam (Dr.) Idris A. Oni on the Ummah, unity and contemporary Muslim life.",
};

export default function BlogPage() {
  const posts = sortedPosts();
  return (
    <>
      <PageHeader eyebrow="Blog" title="Articles & reflections" intro="Writing on the Ummah, unity, dialogue and contemporary Muslim life." />
      <section className="container grid gap-8 py-16 md:py-20">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </>
  );
}
