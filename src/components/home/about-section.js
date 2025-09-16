import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="space-y-6">
      <SectionHeader
        eyebrow="ABOUT"
        title="Product-focused engineer blending craft and impact"
        description="I bridge engineering, design, and strategy to ship experiences that customers love and businesses can scale."
      />
      <Card className="border-white/10 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent">
        <CardContent className="text-base leading-relaxed text-slate-200">
          <p>
            Over the past several years, I have shaped end-to-end product development for startups and scale-ups alike—from discovery and roadmap definition to architecture, delivery, and iteration. I obsess over clarity, accessibility, and measurable value.
          </p>
          <p>
            Outside of shipping features, I invest in teams: facilitating rituals, documenting shared knowledge, and mentoring engineers to own outcomes. The result is calmer execution, faster learning loops, and products that earn trust.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
