import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const profile = {
  name: "Ala Baganne",
  role: "Full-Stack Developer",
  experience: "5+ Years Experience",
  location: "Jemmel, Monastir, Tunisia",
  headline: "Ala Baganne builds dependable full-stack web applications.",
  summary:
    "Hands-on with Vue, React, Laravel, and Node.js to ship responsive interfaces and reliable backends for healthcare, real estate, and education teams.",
  email: "alabaganne9@gmail.com",
  phone: "+21650101959",
  phoneDisplay: "+216 50 101 959",
};

const stats = [
  {
    value: "5+",
    label: "Years building full-stack apps",
    detail: "End-to-end ownership from architecture to rollout.",
  },
  {
    value: "10+",
    label: "Production launches",
    detail: "Healthcare, real estate, and internship platforms shipped.",
  },
  {
    value: "E2E",
    label: "Testing & performance",
    detail: "From automated coverage to database optimisation.",
  },
];

export function HeroSection() {
  return (
    <section className="space-y-10">
      <div className="flex flex-wrap items-center gap-4">
        <Badge className="rounded-full bg-white/10 text-xs uppercase tracking-[0.35em] text-slate-200">
          {profile.role} · {profile.experience}
        </Badge>
        <p className="flex items-center gap-2 text-sm text-slate-400">
          <MapPin className="h-4 w-4" aria-hidden />
          Based in {profile.location}
        </p>
      </div>
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {profile.headline}
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-300">{profile.summary}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button href={`mailto:${profile.email}`} className="shadow-[0_15px_30px_-20px_rgba(56,189,248,0.8)]">
          <Mail className="h-4 w-4" aria-hidden />
          Email Ala
        </Button>
        <Button href={`tel:${profile.phone}`} variant="outline" className="backdrop-blur">
          <Phone className="h-4 w-4" aria-hidden />
          Call {profile.phoneDisplay}
        </Button>
        <Button href="#projects" variant="ghost" className="text-slate-300 hover:text-white">
          See recent projects
          <ArrowUpRight className="h-4 w-4" aria-hidden />
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
