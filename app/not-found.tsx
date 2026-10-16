import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl md:text-5xl">This page could not be found</h1>
      <p className="mx-auto mt-4 max-w-md text-ink-soft">The page may have moved when the site was rebuilt.</p>
      <Link href="/" className="btn-primary mt-8">Return home</Link>
    </section>
  );
}
