import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { getAllPostsMetadata } from "@/lib/blog";

export const metadata = {
  title: "Blog | Ala Baganne — Full-Stack Software Engineer",
  description:
    "Read product updates, case studies, and engineering notes from Ala Baganne on building SEO-ready, high-performance web applications and SaaS products.",
  keywords: [
    "Ala Baganne blog",
    "Next.js articles",
    "full-stack engineering blog",
    "restaurant technology insights",
    "SaaS case studies",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Ala Baganne Blog",
    description:
      "Explore Ala Baganne's writing on digital products, Next.js development, SEO, and technology strategies for growing businesses.",
    type: "website",
    url: "/blog",
  },
};

function formatDate(date) {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getAllPostsMetadata();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-700">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3 font-display font-semibold tracking-[-0.01em] text-slate-950">
            <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-gradient-to-br from-blue-500 to-slate-800 text-sm font-bold text-white">
              AB
            </span>
            <span>Ala Baganne</span>
          </Link>
          <Link className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600" href="/">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Portfolio
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <header className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-blue-600 before:h-px before:w-7 before:bg-current after:h-px after:w-7 after:bg-current">
            Insights & Updates
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 md:text-6xl">
            Ideas for teams who care about results.
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-500 md:text-lg">
            Articles, experiments, and lessons learned while helping founders launch digital products, improve SEO, and deliver reliable user experiences.
          </p>
        </header>

        <section className="mt-14 grid gap-7 md:grid-cols-2">
          {posts.length === 0 ? (
            <p className="col-span-full rounded-3xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500">
              Fresh stories are on the way. Check back soon for articles on development, product strategy, and technical SEO.
            </p>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-blue-100"
                >
                  {post.coverImage ? (
                    <div className="relative h-52 w-full overflow-hidden border-b border-slate-200 bg-slate-100">
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
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-blue-600">
                      {post.category && <span>{post.category}</span>}
                      {post.date && (
                        <time className="text-slate-500" dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                      )}
                    </div>
                    <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-950 transition group-hover:text-blue-600">
                      {post.title}
                    </h2>
                    <p className="text-sm leading-7 text-slate-600">{post.description}</p>
                    {post.tags.length > 0 ? (
                      <ul className="mt-auto flex flex-wrap gap-2 text-xs text-slate-500">
                        {post.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 transition group-hover:border-blue-100 group-hover:text-blue-700"
                          >
                            #{tag}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <div className="mt-4 flex items-center justify-between border-t border-dashed border-slate-200 pt-4 text-sm font-semibold text-blue-600">
                      <span>Read the story</span>
                      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                    </div>
                  </div>
                </Link>
              </article>
            ))
          )}
        </section>
      </div>
    </main>
  );
}
