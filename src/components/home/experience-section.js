import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";

const experiences = [
  {
    company: "Retain Health",
    role: "Software Engineer",
    period: "July 2021 - Present",
    location: "Boston, MA (Remote)",
    summary:
      "Developing core healthcare platform features across AngularJS, Express.js, Bootstrap, and MySQL.",
    achievements: [
      "Introduced Jest and Cypress suites covering unit, integration, and end-to-end workflows.",
      "Partnered with QA and UX to release patient-facing experiences that align with clinical requirements.",
      "Optimised database queries and API responses to maintain snappy dashboards at scale.",
    ],
    tech: ["AngularJS", "Express.js", "Bootstrap", "MySQL", "Jest", "Cypress"],
  },
  {
    company: "Realinflo",
    role: "Full Stack Web Developer Intern",
    period: "February 2021 - May 2021",
    location: "Hong Kong (Remote)",
    summary:
      "Built a Vue.js (Quasar) admin dashboard backed by Feathers.js services for real-estate intelligence.",
    achievements: [
      "Implemented REST integrations and optimised data fetching for large listing datasets.",
      "Coordinated roadmap updates with leadership to prioritise weekly releases.",
      "Shipped reporting features that accelerated enterprise onboarding.",
    ],
    tech: ["Vue.js", "Quasar", "Feathers.js", "Node.js", "REST APIs", "MySQL"],
  },
  {
    company: "Satoripop",
    role: "Full Stack Web Developer Intern",
    period: "July 2020 - September 2020",
    location: "Sousse, Tunisia",
    summary:
      "Delivered an employee management platform with a Vue.js frontend and Laravel backend services.",
    achievements: [
      "Converted PSD designs into responsive layouts with Bootstrap components.",
      "Documented backend endpoints using Swagger for smoother team collaboration.",
      "Implemented authentication and role-based access to secure HR data.",
    ],
    tech: ["Vue.js", "Laravel", "Bootstrap", "Swagger", "MySQL"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-8">
      <SectionHeader
        eyebrow="EXPERIENCE"
        title="Professional experience"
        description="Shaping healthcare, real estate, and HR platforms with reliable frontend and backend delivery."
      />
      <div className="relative">
        <div
          className="absolute left-3 top-1 hidden h-full w-px bg-gradient-to-b from-sky-500/60 via-white/10 to-transparent md:block"
          aria-hidden
        />
        <ol className="space-y-8">
          {experiences.map((role) => (
            <li key={`${role.company}-${role.period}`} className="group relative md:pl-12">
              <span
                className="absolute left-2 top-12 hidden h-3 w-3 rounded-full border-2 border-sky-400 bg-slate-950 transition group-hover:border-sky-300 group-hover:bg-sky-400/30 md:block"
                aria-hidden
              />
              <Card className="border-white/10 bg-white/[0.035] p-0 shadow-[0_0_0_1px_rgba(148,163,184,0.12)] transition hover:border-sky-400/40 hover:bg-white/[0.05]">
                <CardHeader className="mb-0 gap-4 border-b border-white/5 p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl font-semibold text-white">
                        {role.role}
                      </CardTitle>
                      <CardDescription className="text-sm text-slate-300">
                        {role.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                      <span className="rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-sky-100">
                        {role.period}
                      </span>
                      <span className="flex items-center gap-2 text-xs font-medium text-slate-400">
                        <MapPin className="h-4 w-4" aria-hidden />
                        {role.location}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="gap-5 p-6 text-sm text-slate-200">
                  <p className="text-base leading-relaxed text-slate-300">{role.summary}</p>
                  <ul className="space-y-3">
                    {role.achievements.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-400/80" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-0 border-t border-white/5 bg-white/[0.02] p-6 pt-4">
                  {role.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="subtle"
                      className="border-white/10 bg-white/10 text-[0.7rem] text-slate-100"
                    >
                      {tech}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
