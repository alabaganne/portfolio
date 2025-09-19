import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
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
    period: "Feb 2021 - May 2021",
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
    period: "July 2020 - Sept 2020",
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
      <ol className="space-y-6">
        {experiences.map((role) => (
          <li key={`${role.company}-${role.period}`}>
            <Card className="relative overflow-hidden border-white/10 bg-white/[0.035] shadow-[0_0_0_1px_rgba(148,163,184,0.08)] transition hover:border-sky-400/40 hover:bg-white/[0.05]">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
                <CardHeader className="w-full space-y-4 border-b border-white/5 p-0 pb-4 md:w-64 md:border-b-0 md:border-r md:pb-0 md:pr-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl font-semibold leading-tight text-white">
                      {role.role}
                    </CardTitle>
                    <CardDescription className="text-sm text-slate-300">
                      {role.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-2 text-xs">
                    <Badge className="w-fit border-white/10 bg-white/10 text-slate-100">
                      {role.period}
                    </Badge>
                    <span className="flex items-center gap-2 text-[0.75rem] font-medium text-slate-400">
                      <MapPin className="h-3.5 w-3.5" aria-hidden />
                      {role.location}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-4 p-0 text-sm text-slate-200">
                  <p className="text-base leading-relaxed text-slate-300">{role.summary}</p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {role.achievements.map((item) => (
                      <li key={item} className="flex items-start gap-2 leading-relaxed">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-sky-400/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {role.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="subtle"
                        className="border-white/10 bg-white/10 text-[0.7rem] text-slate-100"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}
