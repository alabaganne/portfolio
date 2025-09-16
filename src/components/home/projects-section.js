import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRightIcon } from "@/components/icons";

export function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="space-y-8">
      <SectionHeader
        eyebrow="PROJECTS"
        title="Selected work"
        description="A sample of initiatives where I took ideas from concept to shipped experiences."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name} className="border-white/10 bg-white/[0.04]">
            <CardHeader className="mb-4 gap-2">
              <Badge className="w-fit bg-white/10 text-[0.65rem] tracking-[0.3em]">
                {project.tagline}
              </Badge>
              <CardTitle className="text-2xl text-white">{project.name}</CardTitle>
            </CardHeader>
            <CardContent className="gap-4 text-sm text-slate-200">
              <p className="leading-relaxed text-slate-300">
                {project.description}
              </p>
              <p className="text-sm text-slate-400">{project.impact}</p>
            </CardContent>
            <CardFooter className="mt-6 flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="subtle">
                  {tech}
                </Badge>
              ))}
            </CardFooter>
            <div className="mt-6 flex items-center justify-between">
              <Button
                href={project.href}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                className="px-0 text-sky-300 hover:text-white"
              >
                {project.linkLabel}
                <ArrowUpRightIcon className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
