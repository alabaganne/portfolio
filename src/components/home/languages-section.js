import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Intermediate" },
];

export function LanguagesSection() {
  return (
    <section id="languages" className="space-y-8">
      <SectionHeader
        eyebrow="LANGUAGES"
        title="Spoken languages"
        description="Comfortable collaborating across English, Arabic, and French-speaking teams."
      />
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {languages.map((language) => (
          <Card
            key={language.name}
            className="border-white/10 bg-white/[0.04] p-4 text-center text-sm text-slate-200"
          >
            <div className="text-base font-semibold text-white">{language.name}</div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{language.level}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
