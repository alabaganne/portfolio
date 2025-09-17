import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

const siteUrl = "https://alabaganne.com";

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

function keywordsForMetadata(keywords) {
  if (!keywords || keywords.length === 0) return undefined;
  return keywords;
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog post not found | Ala Baganne",
    };
  }

  const { metadata } = post;
  const canonical = `/blog/${metadata.slug}`;

  return {
    title: `${metadata.title} | Ala Baganne Blog`,
    description: metadata.description,
    keywords: keywordsForMetadata(metadata.keywords),
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: metadata.title,
      description: metadata.description,
      publishedTime: metadata.date || undefined,
      authors: metadata.author ? [metadata.author] : undefined,
      tags: metadata.tags.length > 0 ? metadata.tags : undefined,
      images: metadata.coverImage ? [metadata.coverImage] : undefined,
    },
    twitter: {
      card: metadata.coverImage ? "summary_large_image" : "summary",
      title: metadata.title,
      description: metadata.description,
      images: metadata.coverImage ? [metadata.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { metadata, html } = post;
  const publishedLabel = metadata.date
    ? new Date(metadata.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  const canonicalUrl = `${siteUrl}/blog/${metadata.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metadata.title,
    description: metadata.description,
    datePublished: metadata.date || undefined,
    dateModified: metadata.date || undefined,
    author: metadata.author
      ? {
          "@type": "Person",
          name: metadata.author,
    }
      : undefined,
    url: canonicalUrl,
    image: metadata.coverImage ? `${siteUrl}${metadata.coverImage}` : undefined,
    keywords: metadata.keywords.length > 0 ? metadata.keywords.join(", ") : undefined,
    articleSection: metadata.category || undefined,
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.06),_rgba(3,7,18,0.96))] pb-20 text-slate-100">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(600px_circle_at_10%_20%,rgba(56,189,248,0.18),transparent)]" aria-hidden />
      <div className="relative mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 pt-20 md:px-8">
        <div className="flex items-center justify-between text-sm text-slate-400">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200/90 transition hover:border-sky-400/40 hover:text-sky-100"
          >
            <span aria-hidden>←</span> Back to blog
          </Link>
          {metadata.tags.length > 0 && (
            <div className="hidden flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-sky-200/70 sm:flex">
              {metadata.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <article className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-slate-950/40 backdrop-blur">
          <header className="flex flex-col gap-4">
            <span className="inline-flex max-w-fit items-center gap-3 text-xs uppercase tracking-[0.35em] text-sky-200/80">
              {metadata.category && <span>{metadata.category}</span>}
              {publishedLabel && <time dateTime={metadata.date}>{publishedLabel}</time>}
            </span>
            <h1 className="text-3xl font-semibold text-white md:text-4xl">{metadata.title}</h1>
            <p className="text-base leading-relaxed text-slate-300">{metadata.description}</p>
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-400">
              {metadata.author && <span>By {metadata.author}</span>}
              {metadata.tags.length > 0 && (
                <span className="text-sky-200/80">{metadata.tags.join(" · ")}</span>
              )}
            </div>
          </header>

          {metadata.coverImage ? (
            <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
              <Image
                src={metadata.coverImage}
                alt={metadata.title}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          ) : null}

          <div
            className="mdx-content text-base leading-relaxed text-slate-200"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300 shadow-lg shadow-slate-950/40">
          <h2 className="text-lg font-semibold text-white">Need a hand with your next project?</h2>
          <p className="mt-2 text-sm text-slate-300">
            I partner with founders and teams to build performant web applications and thoughtful product experiences.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="mailto:alabaganne9@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-sky-500/20 px-5 py-2 text-sm font-semibold text-sky-100 transition hover:border-sky-400/50 hover:bg-sky-500/30"
            >
              Start a conversation
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:border-sky-400/40 hover:text-sky-100"
            >
              Explore the portfolio
            </Link>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
