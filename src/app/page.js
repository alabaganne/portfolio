import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  LanguagesSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/home";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#languages", label: "Languages" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_rgba(3,7,18,0.95))] pb-20 text-slate-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(37,99,235,0.18),transparent),radial-gradient(400px_circle_at_80%_10%,rgba(59,130,246,0.12),transparent)]"
      />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 pt-16 md:px-10 md:pt-24 lg:gap-20">
        <nav
          aria-label="Primary"
          className="sticky top-4 z-10 mb-4 overflow-x-auto rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
        >
          <ul className="flex items-center justify-center gap-4 text-sm text-slate-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="rounded-full px-3 py-1 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <LanguagesSection />
        <EducationSection />
        <ContactSection />
        <footer className="border-t border-white/5 py-10 text-sm text-slate-500">
          <p>
            Crafted with curiosity and care · © {new Date().getFullYear()} Alaba Ganne
          </p>
        </footer>
      </div>
    </main>
  );
}
