import { SectionHeader } from "@/components/section-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "lucide-react";

const education = [
  {
    school: "Higher Institute of Applied Science and Technology of Sousse",
    degree: "Engineering Degree in Software Engineering",
    period: "June 2024",
    notes: ["Capstone focused on full-stack delivery and Agile leadership."],
  },
  {
    school: "Higher Institute of Applied Science and Technology of Sousse",
    degree: "Bachelor of Science in Computer Science",
    period: "June 2021",
    notes: ["Delivered internship management tools for local partners."],
  },
  {
    school: "High School of Jemmal",
    degree: "High School Diploma - Experimental Science",
    period: "June 2018",
    notes: ["Built a foundation in analytical thinking and collaboration."],
  },
  {
    school: "Microsoft Technology Associate",
    degree: "Introduction to Programming Using HTML and CSS",
    period: "2019",
    notes: [],
  },
  {
    school: "Microsoft Technology Associate",
    degree: "Introduction to Programming Using JavaScript",
    period: "2019",
    notes: [],
  },
  {
    school: "Microsoft Technology Associate",
    degree: "Introduction to Programming Using Python",
    period: "2021",
    notes: [],
  },
  {
    school: "Microsoft Technology Associate",
    degree: "Database Fundamentals",
    period: "2021",
    notes: [],
  },
  {
    school: "Cisco Certified Network Associate (CCNA)",
    degree: "Introduction to Networks",
    period: "2022",
    notes: [],
  },
];

export function EducationSection() {
  return (
    <section id="education" className="space-y-8">
      <SectionHeader
        eyebrow="EDUCATION"
        title="Education & certifications"
        description="Academic foundations and professional credentials that inform my engineering approach."
      />
      <div className="relative">
        <div
          className="absolute left-3 top-1 hidden h-full w-px bg-gradient-to-b from-sky-500/50 via-white/10 to-transparent md:block"
          aria-hidden
        />
        <ol className="space-y-6">
          {education.map((item) => (
            <li key={`${item.school}-${item.degree}-${item.period}`} className="group relative md:pl-12">
              <span
                className="absolute left-2 top-9 hidden h-3 w-3 rounded-full border-2 border-sky-400 bg-slate-950 transition group-hover:border-sky-300 group-hover:bg-sky-400/30 md:block"
                aria-hidden
              />
              <Card className="border-white/10 bg-white/[0.035] p-0 shadow-[0_0_0_1px_rgba(148,163,184,0.12)] transition hover:border-sky-400/40 hover:bg-white/[0.05]">
                <CardHeader className="mb-0 gap-3 p-6 pb-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <CardTitle className="text-lg font-semibold text-white">
                      {item.school}
                    </CardTitle>
                    <span className="flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-sky-100">
                      <Calendar className="h-3.5 w-3.5" aria-hidden />
                      {item.period}
                    </span>
                  </div>
                  <CardDescription className="text-sm text-slate-300">
                    {item.degree}
                  </CardDescription>
                </CardHeader>
                {item.notes && item.notes.length > 0 ? (
                  <CardContent className="gap-3 p-6 pt-0 text-sm text-slate-200">
                    <ul className="space-y-2">
                      {item.notes.map((note) => (
                        <li key={note} className="flex gap-3 leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-400/80" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                ) : null}
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
