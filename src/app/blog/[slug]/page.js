import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

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
  const { slug } = await params;
  const post = await getPostBySlug(slug);

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
  const { slug } = await params;
  const post = await getPostBySlug(slug);

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
    <main className="min-h-screen bg-slate-50 text-slate-700">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3 font-display font-semibold tracking-[-0.01em] text-slate-950">
            <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-gradient-to-br from-blue-500 to-slate-800 text-sm font-bold text-white">
              AB
            </span>
            <span>Ala Baganne</span>
          </Link>
          <Link className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600" href="/blog">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Blog
          </Link>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-5 py-12 sm:px-8 md:py-16">
        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <header className="p-6 md:p-9">
            <span className="inline-flex max-w-fit items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-blue-600">
              {metadata.category && <span>{metadata.category}</span>}
              {publishedLabel && <time dateTime={metadata.date}>{publishedLabel}</time>}
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 md:text-5xl">
              {metadata.title}
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{metadata.description}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
              {metadata.author && <span>By {metadata.author}</span>}
              {metadata.tags.length > 0 && (
                <span className="text-blue-600">{metadata.tags.join(" · ")}</span>
              )}
            </div>
          </header>

          {metadata.coverImage ? (
            <div className="relative h-72 w-full overflow-hidden border-y border-slate-200 bg-slate-100 md:h-96">
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
            className="mdx-content px-6 py-8 text-base leading-relaxed md:px-9 md:py-10"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
          <h2 className="font-display text-xl font-semibold tracking-tight text-slate-950">Need a hand with your next project?</h2>
          <p className="mt-2 leading-7">
            I partner with founders and teams to build performant web applications and thoughtful product experiences.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="mailto:alabaganne9@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold !text-white transition hover:bg-blue-700"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
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
