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
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "MenuMate",
    tagline: "Digital menus for restaurants",
    description:
      "Platform for restaurants to create and manage QR-powered menus with live updates and Supabase auth.",
    impact:
      "Gives diners QR access to menus and lets restaurants capture online orders without extra hardware.",
    tech: ["Next.js", "React", "Supabase", "Tailwind CSS", "React PDF"],
    links: {
      project: "https://www.menumate.net",
      // source: "https://github.com/alabaganne/MenuMate",
    },
  },
  {
    name: "ATS Resume Builder",
    tagline: "Automated resume generation",
    description:
      "ATS-friendly resume builder with live previews, PDF export, and reusable templates.",
    impact: "Helps candidates create polished resumes in minutes.",
    tech: ["Next.js", "React", "React PDF", "TypeScript"],
    links: {
      project: "https://ats-react-resume-builder.vercel.app/",
      source: "https://github.com/alabaganne/react-resume-builder",
    },
  },
  {
    name: "GoStage",
    tagline: "Internship platform for students",
    description:
      "Matchmaking portal connecting students, university staff, and company recruiters with workflows and messaging.",
    impact:
      "Streamlined internship applications with tracking dashboards and document sharing.",
    tech: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
    links: {
      project: null,
      source: "https://github.com/alabaganne/GoStage.tn",
    },
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-8">
      <SectionHeader
        eyebrow="PROJECTS"
        title="Selected work"
        description="Platforms spanning restaurant tech, resume automation, and student internships."
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
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links?.project ? (
                <Button
                  href={project.links.project}
                  target="_blank"
                  rel="noreferrer"
                  variant="ghost"
                  className="px-0 text-sky-300 hover:text-white"
                >
                  View project
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Button>
              ) : null}
              {project.links?.source ? (
                <Button
                  href={project.links.source}
                  target="_blank"
                  rel="noreferrer"
                  variant="ghost"
                  className="px-0 text-sky-300 hover:text-white"
                >
                  View source code
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Button>
              ) : null}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
