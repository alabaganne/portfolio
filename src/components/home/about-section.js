import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";

const paragraph =
  "I specialise in building end-to-end applications with Vue, React, Next.js, Laravel, and Node.js, translating ideas into responsive interfaces and well-structured APIs. Within Agile teams I align closely with product, QA, and design, pairing rapid delivery with robust testing and documentation so launches stay calm and predictable.";

export function AboutSection() {
  return (
    <section id="about" className="space-y-6">
      <SectionHeader
        eyebrow="ABOUT"
        title="Full-stack developer focused on resilient web platforms"
        description="I connect product thinking with engineering execution to deliver performant, maintainable experiences."
      />
      <Card className="border-white/10 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent">
        <CardContent className="text-base leading-relaxed text-slate-200">
          <p>{paragraph}</p>
        </CardContent>
      </Card>
    </section>
  );
}
