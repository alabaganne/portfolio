import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection({ contactLinks }) {
  return (
    <section id="contact" className="space-y-8">
      <SectionHeader
        eyebrow="CONNECT"
        title="Let’s build the next chapter"
        description="I’m open to senior product engineering roles, advisory engagements, and speaking about design systems and experimentation."
      />
      <Card className="border-white/10 bg-white/[0.05]">
        <CardContent className="gap-6 text-sm text-slate-200">
          <p>
            Drop a note and I’ll reply within two business days. I’m currently partnering with teams across North America, Europe, and Africa.
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
                  <link.icon className="h-5 w-5" aria-hidden />
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
