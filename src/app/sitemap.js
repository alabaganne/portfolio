const siteUrl = "https://alabaganne.com";

export default function sitemap() {
  const lastModified = new Date().toISOString();

  return [
    {
      url: siteUrl,
      lastModified,
    },
  ];
}
