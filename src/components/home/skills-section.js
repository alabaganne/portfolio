import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Atom,
  Braces,
  CircleDot,
  Cloud,
  Code,
  Database,
  FileCode2,
  FileType2,
  GitBranch,
  Layers,
  Leaf,
  Palette,
  PenTool,
  Route,
  Server,
  ShieldCheck,
  Terminal,
  Wind,
} from "lucide-react";

const skillCategories = [
  {
    name: "Core Frontend",
    level: "Primary stack",
    description:
      "Day-to-day interface engineering toolkit for performant, accessible experiences.",
    skills: [
      { name: "HTML5", icon: Code },
      { name: "CSS3", icon: Palette },
      { name: "JavaScript (ES6+)", icon: Braces },
      { name: "TypeScript", icon: FileType2 },
      { name: "React.js", icon: Atom },
      { name: "Next.js", icon: CircleDot },
      { name: "Tailwind CSS", icon: Wind },
    ],
  },
  {
    name: "Backend & Data",
    level: "Advanced delivery",
    description:
      "APIs, business logic, and data layers I rely on to support full-stack builds.",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Route },
      { name: "PHP", icon: FileCode2 },
      { name: "Laravel", icon: Layers },
      { name: "MySQL", icon: Database },
      { name: "MongoDB", icon: Leaf },
      { name: "Supabase", icon: ShieldCheck },
    ],
  },
  {
    name: "Cloud, Platforms & Tooling",
    level: "Supporting",
    description:
      "Infrastructure and delivery ecosystem that keeps projects production-ready.",
    skills: [
      { name: "AWS", icon: Cloud },
      { name: "WordPress", icon: PenTool },
      { name: "Git & GitHub", icon: GitBranch },
      { name: "Linux", icon: Terminal },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-8">
      <SectionHeader
        eyebrow="SKILLS"
        title="Technical toolkit"
        description="Organized by focus area so you can quickly see where I deliver the most impact."
      />
      <div className="space-y-10">
        {skillCategories.map(({ name, level, description, skills }) => (
          <div key={name} className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-slate-100">{name}</h3>
                <p className="text-sm text-slate-400">{description}</p>
              </div>
              <Badge variant={level === "Primary stack" ? "default" : "subtle"}>{level}</Badge>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {skills.map(({ name, icon: Icon }) => (
                <Card
                  key={name}
                  className="flex flex-col items-center gap-3 border-white/10 bg-white/[0.04] p-4 text-center text-sm font-medium text-slate-200"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-400/10 text-sky-400">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span>{name}</span>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
