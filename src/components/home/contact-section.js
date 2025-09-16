import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:alabaganne9@gmail.com",
    description: "alabaganne9@gmail.com",
    Icon: Mail,
  },
  {
    label: "Phone",
    href: "tel:+21650101959",
    description: "+216 50 101 959",
    Icon: Phone,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alabaganne/",
    description: "linkedin.com/in/alabaganne",
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/alabaganne",
    description: "github.com/alabaganne",
    Icon: Github,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="space-y-8">
      <SectionHeader
        eyebrow="CONNECT"
        title="Let’s collaborate"
        description="Open to full-stack roles, freelance engagements, and conversations about scalable web platforms."
      />
      <Card className="border-white/10 bg-white/[0.05]">
        <CardContent className="gap-6 text-sm text-slate-200">
          <p>
            Reach out by email, phone, or social links below. I reply within two business days and enjoy connecting with teams building impactful products.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {contactLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-sky-400/50 hover:bg-white/[0.08]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-sky-200">
                  <link.Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {link.label}
                  </span>
                  <span className="text-sm font-medium text-white">
                    {link.description}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
