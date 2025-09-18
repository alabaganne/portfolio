import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";
import {
  Atom,
  Blocks,
  Braces,
  CircleDot,
  Cloud,
  Code,
  Database,
  FileCode2,
  FileType2,
  GitBranch,
  Kanban,
  Layers,
  Leaf,
  Network,
  Octagon,
  Palette,
  PenTool,
  Route,
  Server,
  ShieldCheck,
  Terminal,
  TestTube,
  Triangle,
  Wind,
} from "lucide-react";

const skills = [
  { name: "HTML5", icon: Code },
  { name: "CSS3", icon: Palette },
  { name: "JavaScript (ES6+)", icon: Braces },
  { name: "TypeScript", icon: FileType2 },
  { name: "React.js", icon: Atom },
  { name: "Next.js", icon: CircleDot },
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Route },
  { name: "PHP", icon: FileCode2 },
  { name: "Laravel", icon: Layers },
  { name: "WordPress", icon: PenTool },
  { name: "AWS", icon: Cloud },
  { name: "MySQL", icon: Database },
  { name: "MongoDB", icon: Leaf },
  { name: "Supabase", icon: ShieldCheck },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "Linux", icon: Terminal },
];

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-8">
      <SectionHeader
        eyebrow="SKILLS"
        title="Technical toolkit"
        description="Frameworks, databases, and practices I reach for in full-stack delivery."
      />
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
    </section>
  );
}
