import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";

const stats = [
  {
    value: "7+",
    label: "Years shipping products",
    detail: "Led end-to-end delivery across SaaS, fintech, and growth teams.",
  },
  {
    value: "12",
    label: "Products launched",
    detail: "Shipped experiments and platform bets that improved activation and retention.",
  },
  {
    value: "3",
    label: "Teams coached",
    detail: "Mentored engineers and designers in cross-functional squads across three continents.",
  },
];

const experiences = [
  {
    company: "Nova Atlas",
    role: "Senior Frontend Engineer",
    period: "2022 — Present",
    location: "Remote",
    summary:
      "Leading the experience and design systems workstream for a B2B analytics platform used by global operations teams.",
    achievements: [
      "Architected a modular component system powered by shadcn patterns, improving delivery speed by 35% and standardizing accessibility across product surfaces.",
      "Rolled out an adaptive onboarding flow that boosted workspace activation by 28% within the first quarter of launch.",
      "Partnered with data science to ship forecasting tools processing 2M+ events daily with real-time collaboration support.",
    ],
    tech: ["Next.js", "TypeScript", "React Server Components", "Tailwind CSS", "GraphQL"],
  },
  {
    company: "FinEdge Payments",
    role: "Product Engineer",
    period: "2019 — 2022",
    location: "Lagos, Nigeria",
    summary:
      "Owned customer-facing payment reconciliation experiences for a fast-scaling fintech serving African SMBs.",
    achievements: [
      "Delivered a dispute resolution hub that reduced ticket volume by 42% through proactive insights and guided workflows.",
      "Introduced progressive rollout pipelines and automated testing, cutting regression issues in half during release cycles.",
      "Collaborated with compliance and partnerships to launch regional payout products in three new markets within nine months.",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Storybook", "Jest"],
  },
  {
    company: "CodeBridge Collective",
    role: "Full Stack Developer",
    period: "2016 — 2019",
    location: "Hybrid",
    summary:
      "Built bespoke digital experiences for startups and social impact organizations across healthcare, education, and logistics.",
    achievements: [
      "Designed and delivered a telehealth portal adopted by 40+ clinics with integrated appointment and records management.",
      "Led discovery workshops with founders, translating research into validated roadmaps and prioritized MVP scope.",
      "Established engineering rituals and documentation practices that scaled an agency team from 3 to 12 contributors.",
    ],
    tech: ["Next.js", "Express", "MongoDB", "Figma", "Docker"],
  },
];

const projects = [
  {
    name: "LaunchCTRL",
    tagline: "Automated release operations",
    description:
      "A developer tooling suite that sequences releases, monitors health metrics, and alerts teams in Slack when anomalies appear.",
    impact: "Cut deployment time by 40% across six squads while increasing confidence with live rollback playbooks.",
    href: "https://www.linkedin.com/in/alabaganne/",
    linkLabel: "Read the case study",
    tech: ["Next.js", "tRPC", "Tailwind CSS", "Supabase"],
  },
  {
    name: "PulseForms",
    tagline: "Research automation platform",
    description:
      "Unified customer feedback, journey analytics, and interview notes into a searchable repository with AI summaries.",
    impact:
      "Empowered product teams to move from insight to experiment briefs in under a day, accelerating discovery cycles.",
    href: "https://www.linkedin.com/in/alabaganne/",
    linkLabel: "Explore the product",
    tech: ["Next.js", "LangChain", "OpenAI", "PlanetScale"],
  },
  {
    name: "NeighborGood",
    tagline: "Community resource map",
    description:
      "An open directory for mutual-aid organizations with filters for locality, needs, and volunteering opportunities.",
    impact:
      "Connected 5k+ volunteers with non-profits during critical response windows across West African cities.",
    href: "https://www.linkedin.com/in/alabaganne/",
    linkLabel: "View live map",
    tech: ["Next.js", "Leaflet", "Cloudflare Workers", "Typesense"],
  },
];

const skills = [
  "JavaScript (ES2023)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "GraphQL",
  "REST APIs",
  "Tailwind CSS",
  "Design Systems",
  "Accessibility",
  "Product Discovery",
  "Experimentation",
  "CI/CD",
  "Storybook",
  "Playwright",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Team Coaching",
];

const education = [
  {
    school: "University of Lagos",
    degree: "B.Sc. Computer Science",
    period: "2012 — 2016",
    notes: [
      "Focused on software engineering and human-computer interaction projects.",
      "Led the developer student circle, hosting weekly build nights for 120+ members.",
    ],
  },
  {
    school: "Reforge | Product Strategy",
    degree: "Certificate",
    period: "2021",
    notes: [
      "Deepened expertise in retention, monetization, and experiment design for SaaS products.",
    ],
  },
];

const contactLinks = [
  {
    label: "Email",
    href: "mailto:hello@alabaganne.com",
    description: "hello@alabaganne.com",
    icon: MailIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alabaganne/",
    description: "linkedin.com/in/alabaganne",
    icon: LinkedinIcon,
  },
];

function MapPinIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ArrowUpRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7 17 17 7M7 7h10v10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4 6h16a1 1 0 0 1 1 1.06l-.64 9.02a2 2 0 0 1-1.99 1.84H5.63a2 2 0 0 1-1.99-1.84L3 7.06A1 1 0 0 1 4 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m4 8 7.12 4.75a1.5 1.5 0 0 0 1.76 0L20 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DownloadIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 4v12m0 0 4-4m-4 4-4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 20h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.94 9.75v8.21m5.3-8.21v4.12m0 0v4.09m0-4.09c0-2.3 2.75-2.53 3.88-1.23M8.03 6.04a1.2 1.2 0 1 1-2.39 0 1.2 1.2 0 0 1 2.39 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.12 9.36c2.12 0 3.03 1.31 3.03 3.84v4.76"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7 3v3m10-3v3M5.5 7h13A1.5 1.5 0 0 1 20 8.5v9A3.5 3.5 0 0 1 16.5 21h-9A3.5 3.5 0 0 1 4 17.5v-9A1.5 1.5 0 0 1 5.5 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12h3m4 0h1m-8 4h1m3 0h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_rgba(3,7,18,0.95))] pb-20 text-slate-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(37,99,235,0.18),transparent),radial-gradient(400px_circle_at_80%_10%,rgba(59,130,246,0.12),transparent)]"
      />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 pt-16 md:px-10 md:pt-24 lg:gap-20">
        <section className="space-y-10">
          <div className="flex flex-wrap items-center gap-4">
            <Badge className="rounded-full bg-white/10 text-xs uppercase tracking-[0.35em] text-slate-200">
              Software Engineer
            </Badge>
            <p className="flex items-center gap-2 text-sm text-slate-400">
              <MapPinIcon className="h-4 w-4" aria-hidden />
              Based in Remote · Working with global teams
            </p>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Alaba Ganne builds calm, resilient product experiences for teams shipping at scale.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
              Product-minded engineer with a love for design systems, impactful experimentation, and mentoring multi-disciplinary teams. I turn complex workflows into focused customer journeys and partner closely with product, design, and data to deliver measurable outcomes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="mailto:hello@alabaganne.com" className="shadow-[0_15px_30px_-20px_rgba(56,189,248,0.8)]">
              <MailIcon className="h-4 w-4" aria-hidden />
              Start a conversation
            </Button>
            <Button
              href="#experience"
              variant="outline"
              className="backdrop-blur"
            >
              <DownloadIcon className="h-4 w-4" aria-hidden />
              View résumé
            </Button>
            <Button
              href="#projects"
              variant="ghost"
              className="text-slate-300 hover:text-white"
            >
              View selected work
              <ArrowUpRightIcon className="h-4 w-4" aria-hidden />
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-white/10 bg-white/[0.04]">
                <CardHeader className="mb-3 gap-2">
                  <CardTitle className="text-3xl font-semibold text-white">
                    {stat.value}
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-slate-300">
                  {stat.detail}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

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

        <section id="experience" className="space-y-8">
          <SectionHeader
            eyebrow="EXPERIENCE"
            title="Recent roles"
            description="Highlights from the teams where I crafted resilient, customer-centered products."
          />
          <div className="space-y-6">
            {experiences.map((role) => (
              <Card
                key={`${role.company}-${role.period}`}
                className="border-white/10 bg-white/[0.035]"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="md:w-64">
                    <CardHeader className="mb-0 gap-3 p-0">
                      <CardTitle className="text-xl text-white">
                        {role.role}
                      </CardTitle>
                      <CardDescription className="text-sm text-slate-400">
                        {role.company} · {role.period}
                      </CardDescription>
                      <p className="flex items-center gap-2 text-sm text-slate-400">
                        <MapPinIcon className="h-4 w-4" aria-hidden />
                        {role.location}
                      </p>
                    </CardHeader>
                  </div>
                  <div className="flex-1">
                    <CardContent className="gap-4 p-0 text-sm text-slate-200">
                      <p className="text-slate-300">{role.summary}</p>
                      <ul className="space-y-3">
                        {role.achievements.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
                <CardFooter className="mt-8 border-t border-white/5 pt-4">
                  {role.tech.map((tech) => (
                    <Badge key={tech} variant="subtle" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-8">
          <SectionHeader
            eyebrow="PROJECTS"
            title="Selected work"
            description="A sample of initiatives where I took ideas from concept to shipped experiences."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.name} className="border-white/10 bg-white/[0.04]">
                <CardHeader className="mb-4 gap-2">
                  <Badge className="w-fit bg-white/10 text-[0.65rem] tracking-[0.3em]">
                    {project.tagline}
                  </Badge>
                  <CardTitle className="text-2xl text-white">
                    {project.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="gap-4 text-sm text-slate-200">
                  <p className="leading-relaxed text-slate-300">
                    {project.description}
                  </p>
                  <p className="text-sm text-slate-400">{project.impact}</p>
                </CardContent>
                <CardFooter className="mt-6 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="subtle">
                      {tech}
                    </Badge>
                  ))}
                </CardFooter>
                <div className="mt-6 flex items-center justify-between">
                  <Button
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    variant="ghost"
                    className="px-0 text-sky-300 hover:text-white"
                  >
                    {project.linkLabel}
                    <ArrowUpRightIcon className="h-4 w-4" aria-hidden />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

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

        <section id="contact" className="space-y-8">
          <SectionHeader
            eyebrow="CONNECT"
            title="Let’s build the next chapter"
            description="I’m open to senior product engineering roles, advisory engagements, and speaking about design systems and experimentation."
          />
          <Card className="border-white/10 bg-white/[0.05]">
            <CardContent className="gap-6 text-sm text-slate-200">
              <p>
                Drop a note and I’ll reply within two business days. I’m currently partnering with teams across North America, Europe, and Africa.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {contactLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-sky-400/50 hover:bg-white/[0.08]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-sky-200">
                      <link.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        {link.label}
                      </span>
                      <span className="text-sm font-medium text-white">
                        {link.description}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className="border-t border-white/5 py-10 text-sm text-slate-500">
          <p>
            Crafted with curiosity and care · © {new Date().getFullYear()} Alaba Ganne
          </p>
        </footer>
      </div>
    </main>
  );
}
