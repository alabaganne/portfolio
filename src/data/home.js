import { MailIcon, LinkedinIcon } from "@/components/icons";

export const stats = [
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

export const experiences = [
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

export const projects = [
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

export const skills = [
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

export const education = [
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

export const contactLinks = [
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
