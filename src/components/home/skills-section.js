import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js",
  "Vue.js",
  "AngularJS",
  "Node.js",
  "Express.js",
  "PHP",
  "Laravel",
  "WordPress",
  "AWS",
  "RESTful APIs",
  "MySQL",
  "MongoDB",
  "Supabase",
  "Tailwind CSS",
  "Bootstrap",
  "Git & GitHub",
  "Linux",
  "Unit & Integration Testing",
  "Agile & Scrum",
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
        {skills.map((skill) => (
          <Card
            key={skill}
            className="border-white/10 bg-white/[0.04] p-4 text-center text-sm font-medium text-slate-200"
          >
            {skill}
          </Card>
        ))}
      </div>
    </section>
  );
}
