"use client";

import { SectionHeader } from "@/components/section-header";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "MenuMate",
    domain: "187.124.184.74:3003",
    href: "http://187.124.184.74:3003/",
    category: "SaaS",
    badge: "SaaS Founder",
    tag: "Live",
    description:
      "SaaS platform that lets restaurants create digital menus, generate QR codes, and accept real-time orders from a single dashboard. SEO-optimized and multilingual.",
    tech: ["Next.js", "React", "Tailwind", "Supabase", "PostgreSQL"],
    accent: "#1d4ed8",
    icon: "menu",
  },
  {
    name: "Global Deals",
    domain: "global-deals.vercel.app",
    href: "https://global-deals.vercel.app",
    category: "Web",
    badge: "Interactive",
    tag: "3D Globe",
    description:
      "Interactive 3D globe with event markers, clustering, event linking with curved Bezier visualizations, admin panel, and authentication.",
    tech: ["React 18", "Mapbox GL", "Supabase", "Tiptap", "Tailwind v4"],
    accent: "#1e40af",
    icon: "globe",
  },
  {
    name: "Martinez Auto Detail",
    domain: "Freelance · Upwork",
    href: null,
    category: "Freelance",
    badge: "Freelance",
    tag: "Booking system",
    description:
      "Custom booking system surpassing off-the-shelf solutions with service selection, date/time picking, secure card storage for no-show protection, and an owner dashboard.",
    tech: ["Next.js", "React", "Tailwind", "Square API"],
    accent: "#0f172a",
    icon: "calendar",
  },
  {
    name: "Socialura",
    domain: "socialura.com",
    href: "https://socialura.com",
    category: "Freelance",
    badge: "Freelance · Upwork",
    tag: "E-commerce",
    description:
      "Built for an Upwork client, a modern, performance-optimized platform for selling digital social services with clean responsive UI/UX and Stripe payment integration.",
    tech: ["WordPress", "Stripe", "Custom UI"],
    accent: "#0ea5e9",
    icon: "cart",
  },
  {
    name: "ATS Resume Builder",
    domain: "ats-react-resume-builder.vercel.app",
    href: "https://ats-react-resume-builder.vercel.app",
    category: "Web",
    badge: "Open",
    tag: "PDF export",
    description:
      "Builder that helps users create ATS-optimized resumes that pass automated tracking systems with real-time preview and one-click PDF export.",
    tech: ["Next.js", "React", "Tailwind", "jsPDF"],
    accent: "#2563eb",
    icon: "doc",
  },
  {
    name: "Meet — Video Conferencing",
    domain: "187.124.184.74:3004",
    href: "http://187.124.184.74:3004/",
    category: "Internship",
    badge: "Internship · satoripop",
    tag: "Built solo",
    description:
      "A Google Meet-style video meeting app built independently during my 2023 internship at satoripop with authentication, scheduling, protected pages, and Jitsi-powered calls.",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "MySQL", "Jitsi SDK"],
    accent: "#2563eb",
    icon: "video",
  },
  {
    name: "Satoripop RH",
    domain: "187.124.184.74:3001",
    href: "http://187.124.184.74:3001/",
    category: "Internship",
    badge: "Internship · satoripop",
    tag: "HR platform",
    description:
      "Human resources management platform with role-based dashboards for managers, HR, project managers, and employees, built during my 2020 internship.",
    tech: ["Vue.js", "Laravel", "MySQL", "Bootstrap", "Swagger"],
    accent: "#1d4ed8",
    icon: "users",
  },
  {
    name: "Eyedeal — E-commerce UI",
    domain: "187.124.184.74:3006",
    href: "http://187.124.184.74:3006/",
    category: "Internship",
    badge: "Internship · satoripop",
    tag: "PSD → responsive",
    description:
      "Client-side e-commerce landing page built from a PSD design with responsive layout, product sections, cart visuals, and interactive design elements.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    accent: "#0ea5e9",
    icon: "cart",
  },
  {
    name: "Internly",
    domain: "187.124.184.74:3002",
    href: "http://187.124.184.74:3002/",
    category: "Academic",
    badge: "Academic",
    tag: "End of studies project",
    description:
      "Internship platform where students discover and apply to internships and companies post opportunities, with real-time notifications, tracking, and dashboards.",
    tech: ["Laravel", "Vue.js", "Inertia.js", "MySQL", "Pusher"],
    accent: "#1d4ed8",
    icon: "students",
  },
];

function ProjectThumb({ project }) {
  const accent = project.accent || "#2563eb";
  const id = project.name.replace(/\W/g, "");
  const renderShape = () => {
    switch (project.icon) {
      case "menu":
        return (
          <>
            <rect x="140" y="50" width="120" height="160" rx="14" fill="#fff" stroke={accent} strokeWidth="1.5" />
            <rect x="156" y="68" width="60" height="6" rx="3" fill={accent} fillOpacity=".7" />
            <rect x="156" y="80" width="36" height="4" rx="2" fill={accent} fillOpacity=".3" />
            <rect x="156" y="100" width="88" height="22" rx="4" fill={accent} fillOpacity=".08" />
            <rect x="156" y="130" width="88" height="22" rx="4" fill={accent} fillOpacity=".08" />
            <rect x="156" y="160" width="88" height="22" rx="4" fill={accent} fillOpacity=".18" />
            <rect x="280" y="120" width="40" height="40" rx="6" fill={accent} fillOpacity=".15" />
            <path d="M286 126 h6 v6 h-6 z M302 126 h6 v6 h-6 z M286 142 h6 v6 h-6 z M302 142 h6 v6 h-6 z" fill={accent} />
          </>
        );
      case "globe":
        return (
          <>
            <circle cx="200" cy="120" r="70" fill="none" stroke={accent} strokeWidth="1.5" strokeOpacity=".5" />
            <ellipse cx="200" cy="120" rx="70" ry="28" fill="none" stroke={accent} strokeWidth="1.5" strokeOpacity=".4" />
            <ellipse cx="200" cy="120" rx="28" ry="70" fill="none" stroke={accent} strokeWidth="1.5" strokeOpacity=".4" />
            <line x1="130" y1="120" x2="270" y2="120" stroke={accent} strokeWidth="1.5" strokeOpacity=".4" />
            <circle cx="160" cy="100" r="4" fill={accent} />
            <circle cx="230" cy="135" r="4" fill={accent} />
            <circle cx="200" cy="80" r="4" fill={accent} />
            <path d="M160 100 Q200 60 230 135" stroke={accent} strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
          </>
        );
      case "calendar":
        return (
          <>
            <rect x="130" y="60" width="140" height="120" rx="10" fill="#fff" stroke={accent} strokeWidth="1.5" />
            <rect x="130" y="60" width="140" height="24" rx="10" fill={accent} />
            <circle cx="160" cy="55" r="4" fill={accent} />
            <circle cx="240" cy="55" r="4" fill={accent} />
            {[0, 1, 2, 3].map((i) =>
              [0, 1, 2, 3, 4].map((j) => (
                <rect
                  key={`${i}-${j}`}
                  x={146 + j * 22}
                  y={94 + i * 20}
                  width="14"
                  height="14"
                  rx="2"
                  fill={accent}
                  fillOpacity={i * 5 + j === 7 ? 1 : 0.08}
                />
              )),
            )}
          </>
        );
      case "doc":
        return (
          <>
            <rect x="150" y="50" width="100" height="140" rx="6" fill="#fff" stroke={accent} strokeWidth="1.5" />
            <path d="M226 50 L250 74 L226 74 Z" fill={accent} fillOpacity=".25" />
            <rect x="162" y="84" width="50" height="4" rx="2" fill={accent} fillOpacity=".7" />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect key={i} x="162" y={100 + i * 12} width={i % 2 === 0 ? 76 : 60} height="4" rx="2" fill={accent} fillOpacity=".18" />
            ))}
            <rect x="260" y="140" width="50" height="50" rx="6" fill={accent} />
            <path d="M285 154 v18 M278 167 l7 7 7-7" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
          </>
        );
      case "students":
        return (
          <>
            <path d="M120 110 L200 80 L280 110 L200 140 Z" fill={accent} fillOpacity=".22" stroke={accent} strokeWidth="1.5" />
            <path d="M150 125 L150 160 Q200 180 250 160 L250 125" fill="none" stroke={accent} strokeWidth="1.5" />
            <circle cx="280" cy="125" r="3" fill={accent} />
            <path d="M280 125 L280 165" stroke={accent} strokeWidth="1.5" />
            <circle cx="280" cy="170" r="4" fill={accent} />
          </>
        );
      case "cart":
        return (
          <>
            <rect x="140" y="80" width="120" height="80" rx="6" fill={accent} fillOpacity=".15" stroke={accent} strokeWidth="1.5" />
            <path d="M140 80 L150 60 L250 60 L260 80" stroke={accent} strokeWidth="1.5" fill="none" />
            <line x1="170" y1="110" x2="230" y2="110" stroke={accent} strokeWidth="1.5" />
            <line x1="170" y1="130" x2="210" y2="130" stroke={accent} strokeWidth="1.5" />
            <circle cx="260" cy="175" r="8" fill={accent} />
            <text x="260" y="180" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="monospace">$</text>
          </>
        );
      case "video":
        return (
          <>
            <rect x="120" y="70" width="170" height="100" rx="10" fill="#fff" stroke={accent} strokeWidth="1.5" />
            <path d="M290 95 L325 75 L325 165 L290 145 Z" fill={accent} fillOpacity=".25" stroke={accent} strokeWidth="1.5" />
            <circle cx="160" cy="110" r="14" fill={accent} fillOpacity=".25" />
            <circle cx="160" cy="106" r="6" fill={accent} />
            <rect x="146" y="118" width="28" height="14" rx="6" fill={accent} fillOpacity=".7" />
            <circle cx="210" cy="110" r="14" fill={accent} fillOpacity=".15" />
            <circle cx="210" cy="106" r="6" fill={accent} fillOpacity=".7" />
            <rect x="196" y="118" width="28" height="14" rx="6" fill={accent} fillOpacity=".4" />
            <circle cx="260" cy="110" r="14" fill={accent} fillOpacity=".1" />
            <circle cx="260" cy="106" r="6" fill={accent} fillOpacity=".4" />
            <rect x="246" y="118" width="28" height="14" rx="6" fill={accent} fillOpacity=".25" />
            <rect x="180" y="180" width="50" height="14" rx="7" fill={accent} />
          </>
        );
      case "users":
        return (
          <>
            <circle cx="160" cy="100" r="22" fill={accent} fillOpacity=".2" stroke={accent} strokeWidth="1.5" />
            <path d="M125 165 q35 -28 70 0 Z" fill={accent} fillOpacity=".18" stroke={accent} strokeWidth="1.5" />
            <circle cx="240" cy="105" r="18" fill={accent} fillOpacity=".12" stroke={accent} strokeWidth="1.5" />
            <path d="M212 160 q28 -22 56 0 Z" fill={accent} fillOpacity=".1" stroke={accent} strokeWidth="1.5" />
            <rect x="280" y="80" width="40" height="80" rx="6" fill={accent} fillOpacity=".08" stroke={accent} strokeWidth="1.5" />
            <rect x="288" y="92" width="24" height="4" rx="2" fill={accent} fillOpacity=".5" />
            <rect x="288" y="102" width="18" height="4" rx="2" fill={accent} fillOpacity=".5" />
            <rect x="288" y="116" width="24" height="4" rx="2" fill={accent} fillOpacity=".3" />
            <rect x="288" y="126" width="18" height="4" rx="2" fill={accent} fillOpacity=".3" />
            <rect x="288" y="140" width="24" height="4" rx="2" fill={accent} fillOpacity=".3" />
          </>
        );
      default:
        return <rect x="100" y="40" width="200" height="160" rx="10" fill={accent} fillOpacity=".12" />;
    }
  };

  return (
    <div className="relative aspect-video overflow-hidden border-b border-slate-200 bg-slate-50">
      <svg className="block h-full w-full" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id={`grid-${id}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke={accent} strokeWidth="0.5" strokeOpacity="0.08" />
          </pattern>
          <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={accent} stopOpacity="0.04" />
            <stop offset="1" stopColor={accent} stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill={`url(#bg-${id})`} />
        <rect width="400" height="240" fill={`url(#grid-${id})`} />
        {renderShape()}
      </svg>
      <span
        className="absolute right-3 top-3 rounded-full px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.05em] text-white"
        style={{ background: accent }}
      >
        {project.badge}
      </span>
      <span className="absolute bottom-3 left-3 rounded-md border border-slate-200 bg-white/90 px-2.5 py-1 font-mono text-[0.68rem] text-slate-500">
        drop image →
      </span>
    </div>
  );
}

export function ProjectsSection() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((project) => project.category)))], []);
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="03 · Projects"
          title="Selected work, shipped."
          description="A mix of full-time, freelance, founder and academic work across SaaS, AI-adjacent systems, and production web platforms."
        />
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={
                "rounded-full border px-4 py-2 text-sm font-semibold transition " +
                (filter === category
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-blue-600 hover:text-blue-600")
              }
              type="button"
              onClick={() => setFilter(category)}
            >
              {category}
              {category !== "All" ? (
                <span className="ml-1.5 text-xs opacity-60">
                  {projects.filter((project) => project.category === category).length}
                </span>
              ) : null}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-7 lg:grid-cols-2">
          {visible.map((project) => (
            <article
              key={project.name}
              className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-blue-100"
            >
              <ProjectThumb project={project} />
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-950">
                    {project.href ? (
                      <a className="transition hover:text-blue-600" href={project.href} target="_blank" rel="noreferrer">
                        {project.name}
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-slate-500">{project.tag}</p>
                </div>
                <p className="text-sm leading-7 text-slate-600">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-dashed border-slate-200 pt-4 text-sm">
                  <span className="font-mono text-xs uppercase tracking-[0.08em] text-slate-500">{project.category}</span>
                  {project.href ? (
                    <a
                      className="inline-flex items-center gap-1.5 font-semibold !text-blue-600 hover:underline"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit live
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  ) : (
                    <span className="font-mono text-xs text-slate-500">private client work</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
