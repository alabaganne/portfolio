import Script from "next/script";
import { JetBrains_Mono, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://alabaganne.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ala Baganne | Full-Stack Software Engineer",
  description:
    "Ala Baganne is a full-stack software engineer building production web apps, AI document systems, and SaaS products with React, Next.js, Node.js, FastAPI, and Supabase.",
  keywords: [
    "Ala Baganne",
    "full-stack software engineer",
    "AI engineer",
    "Next.js developer",
    "React",
    "FastAPI",
    "Supabase",
    "Node.js",
    "SaaS developer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Ala Baganne | Full-Stack Software Engineer",
    description:
      "Explore Ala Baganne's portfolio of production web apps, AI document systems, SaaS products, and full-stack engineering work.",
    siteName: "Ala Baganne Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ala Baganne | Full-Stack Software Engineer",
    description:
      "Explore Ala Baganne's portfolio of production web apps, AI document systems, SaaS products, and full-stack engineering work.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} bg-[--background] text-[--foreground] antialiased`}
      >
        <Script id="ld-json" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ala Baganne",
              url: siteUrl,
              email: "alabaganne9@gmail.com",
              jobTitle: "Full-Stack Software Engineer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Monastir",
                addressCountry: "TN",
              },
              description:
                "Full-stack software engineer with 5+ years of experience building production web applications, AI document systems, and SaaS products.",
              sameAs: [
                "https://www.linkedin.com/in/alabaganne/",
                "https://github.com/alabaganne",
                "https://www.upwork.com/freelancers/~018064bc5b1d8ca3ce",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Ala Baganne Portfolio",
              url: siteUrl,
              inLanguage: "en",
            },
          ])}
        </Script>
        {children}
      </body>
    </html>
  );
}
