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
import { MapPinIcon } from "@/components/icons";

export function ExperienceSection({ experiences }) {
  return (
    <section id="experience" className="space-y-8">
      <SectionHeader
        eyebrow="EXPERIENCE"
        title="Recent roles"
        description="Highlights from the teams where I crafted resilient, customer-centered products."
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
                    <MapPinIcon className="h-4 w-4" aria-hidden />
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
