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
      <div className="space-y-6">
        {experiences.map((role) => (
          <Card key={`${role.company}-${role.period}`} className="border-white/10 bg-white/[0.035]">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="md:w-64">
                <CardHeader className="mb-0 gap-3 p-0">
                  <CardTitle className="text-xl text-white">{role.role}</CardTitle>
                  <CardDescription className="text-sm text-slate-400">
                    {role.company} · {role.period}
                  </CardDescription>
                  <p className="flex items-center gap-2 text-sm text-slate-400">
                    <MapPin className="h-4 w-4" aria-hidden />
                    {role.location}
                  </p>
                </CardHeader>
              </div>
              <div className="flex-1">
                <CardContent className="gap-4 p-0 text-sm text-slate-200">
                  <p className="text-slate-300">{role.summary}</p>
                  <ul className="space-y-3">
                    {role.achievements.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </div>
            <CardFooter className="mt-8 border-t border-white/5 pt-4">
              {role.tech.map((tech) => (
                <Badge key={tech} variant="subtle" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
