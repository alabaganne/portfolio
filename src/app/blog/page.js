import Image from "next/image";
import Link from "next/link";

import { getAllPostsMetadata } from "@/lib/blog";

export const metadata = {
  title: "Blog | Ala Baganne — Full-Stack Web Developer",
  description:
    "Read product updates, industry insights, and hands-on lessons from Ala Baganne on building SEO-ready, high-performance web applications.",
  keywords: [
    "Ala Baganne blog",
    "Next.js articles",
    "restaurant technology insights",
    "hire web developer",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Ala Baganne Blog",
    description:
      "Explore Ala Baganne's writing on digital products, Next.js development, and technology strategies for growing businesses.",
    type: "website",
    url: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getAllPostsMetadata();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_rgba(3,7,18,0.96))] pb-20 text-slate-100">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(56,189,248,0.14),transparent)]" aria-hidden />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 pt-24 md:px-10">
        <header className="flex flex-col gap-6 text-center">
          <p className="mx-auto inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-sky-200/80">
            Insights & Updates
          </p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Ideas for teams who care about results</h1>
          <p className="mx-auto max-w-2xl text-base text-slate-300">
            Articles, experiments, and lessons learned while helping founders launch digital products, improve SEO, and deliver reliable user experiences.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2">
          {posts.length === 0 ? (
            <p className="col-span-full rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-sm text-slate-300">
              Fresh stories are on the way. Check back soon for articles on development, product strategy, and technical SEO.
            </p>
          ) : (
            posts.map((post) => (
              <article
                key={post.slug}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-slate-950/40 transition hover:border-sky-400/60 hover:bg-white/10"
              >
                {post.coverImage ? (
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-center transition duration-500 group-hover:scale-105"
                      priority={post.slug === posts[0]?.slug}
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-sky-200/80">
                    {post.category && <span>{post.category}</span>}
                    {post.date && (
                      <span className="text-slate-400">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold text-white transition group-hover:text-sky-200">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-300/90">{post.description}</p>
                  {post.tags.length > 0 ? (
                    <ul className="mt-auto flex flex-wrap gap-2 text-xs text-slate-400">
                      {post.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition group-hover:border-sky-400/40 group-hover:text-sky-200"
                        >
                          #{tag}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="mt-4 flex items-center justify-between text-sm text-sky-200/90">
                    <span>Read the story</span>
                    <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </article>
            ))
          )}
        </section>
      </div>
    </main>
  );
}
