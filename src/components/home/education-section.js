import { SectionHeader } from "@/components/section-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon } from "@/components/icons";

export function EducationSection({ education }) {
  return (
    <section id="education" className="space-y-8">
      <SectionHeader
        eyebrow="EDUCATION"
        title="Learning that shaped my practice"
        description="Formal education and continual learning programs that influence how I build."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <Card key={`${item.school}-${item.period}`} className="border-white/10 bg-white/[0.035]">
            <CardHeader className="mb-3 gap-2">
              <CardTitle className="text-lg text-white">{item.school}</CardTitle>
              <CardDescription className="text-sm text-slate-400">
                {item.degree}
              </CardDescription>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                <CalendarIcon className="h-4 w-4" aria-hidden />
                {item.period}
              </p>
            </CardHeader>
            <CardContent className="gap-3 text-sm text-slate-300">
              <ul className="space-y-2">
                {item.notes.map((note) => (
                  <li key={note} className="leading-relaxed">
                    {note}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
