import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";

export function SkillsSection({ skills }) {
  return (
    <section id="skills" className="space-y-8">
      <SectionHeader
        eyebrow="SKILLS"
        title="Tools & practices I rely on"
        description="No buckets—each skill lives in its own card for quick scanning and editing."
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
