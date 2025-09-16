import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alaba Ganne | Software Engineer & Product Builder",
  description:
    "Dark theme portfolio and resume for Alaba Ganne highlighting product engineering work, selected projects, and contact details.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[--background] text-[--foreground] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
