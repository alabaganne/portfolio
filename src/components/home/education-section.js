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
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <Card key={`${item.school}-${item.degree}-${item.period}`} className="border-white/10 bg-white/[0.035]">
            <CardHeader className="mb-3 gap-2">
              <CardTitle className="text-lg text-white">{item.school}</CardTitle>
              <CardDescription className="text-sm text-slate-400">{item.degree}</CardDescription>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                <Calendar className="h-4 w-4" aria-hidden />
                {item.period}
              </p>
            </CardHeader>
            {item.notes && item.notes.length > 0 ? (
              <CardContent className="gap-3 text-sm text-slate-300">
                <ul className="space-y-2">
                  {item.notes.map((note) => (
                    <li key={note} className="leading-relaxed">
                      {note}
                    </li>
                  ))}
                </ul>
              </CardContent>
            ) : null}
          </Card>
        ))}
      </div>
    </section>
  );
}
