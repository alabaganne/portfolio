import { getAllPostsMetadata } from "@/lib/blog";

const siteUrl = "https://alabaganne.com";

export default async function sitemap() {
  const lastModified = new Date().toISOString();
  const posts = await getAllPostsMetadata();

  const blogEntries = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date).toISOString() : lastModified,
  }));

  return [
    {
      url: siteUrl,
      lastModified,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified,
    },
    ...blogEntries,
  ];
}
