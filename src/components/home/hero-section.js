import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/icons";

export function HeroSection({ stats }) {
  return (
    <section className="space-y-10">
      <div className="flex flex-wrap items-center gap-4">
        <Badge className="rounded-full bg-white/10 text-xs uppercase tracking-[0.35em] text-slate-200">
          Software Engineer
        </Badge>
        <p className="flex items-center gap-2 text-sm text-slate-400">
          <MapPinIcon className="h-4 w-4" aria-hidden />
          Based in Remote · Working with global teams
        </p>
      </div>
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Alaba Ganne builds calm, resilient product experiences for teams shipping at scale.
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
          Product-minded engineer with a love for design systems, impactful experimentation, and mentoring multi-disciplinary teams. I turn complex workflows into focused customer journeys and partner closely with product, design, and data to deliver measurable outcomes.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button href="mailto:hello@alabaganne.com" className="shadow-[0_15px_30px_-20px_rgba(56,189,248,0.8)]">
          <MailIcon className="h-4 w-4" aria-hidden />
          Start a conversation
        </Button>
        <Button href="#experience" variant="outline" className="backdrop-blur">
          <DownloadIcon className="h-4 w-4" aria-hidden />
          View résumé
        </Button>
        <Button href="#projects" variant="ghost" className="text-slate-300 hover:text-white">
          View selected work
          <ArrowUpRightIcon className="h-4 w-4" aria-hidden />
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-white/10 bg-white/[0.04]">
            <CardHeader className="mb-3 gap-2">
              <CardTitle className="text-3xl font-semibold text-white">
                {stat.value}
              </CardTitle>
              <CardDescription className="text-slate-300">
                {stat.label}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-slate-300">
              {stat.detail}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
