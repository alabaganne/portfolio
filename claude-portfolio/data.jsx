// ===========================================
// Data — Ala Baganne portfolio
// ===========================================

const PROFILE = {
  name: "Ala Baganne",
  firstName: "Ala",
  lastName: "Baganne",
  initials: "AB",
  title: "Full-Stack Software Engineer",
  headline: "Full-Stack Engineer building production web apps & AI document systems.",
  location: "Monastir, Tunisia",
  email: "alabaganne9@gmail.com",
  phone: "+216 50 101 959",
  website: "alabaganne.com",
  linkedin: "linkedin.com/in/alabaganne",
  github: "github.com/alabaganne",
  upwork: "https://www.upwork.com/freelancers/~018064bc5b1d8ca3ce",
  available: true,
};

const STATS = [
  { num: "5+", lbl: "Years of experience" },
  { num: "25K+", lbl: "Users impacted" },
  { num: "100%", lbl: "Upwork job success" },
  { num: "10+", lbl: "Production projects" },
];

const ABOUT_PARAS = [
  <>I'm a <strong>Full-Stack Software Engineer</strong> with 5+ years of professional experience building web applications across healthcare, legal tech, and SaaS. I care about clean architecture, good UX, and shipping things that hold up in production.</>,
  <>Currently I'm a core contributor to <strong>RetainYourBrain</strong> at Retain Health — a digital health platform with <strong>25,000+ users</strong> that helps reduce Alzheimer's risk. In parallel I work on <strong>NORA</strong> at Wequity, an AI-powered legal document automation platform built with FastAPI, Supabase, GCP, and Vertex AI.</>,
  <>On the side, I run my own products — <strong>MenuMate</strong> is a SaaS I designed, built and launched for restaurants to manage digital menus, QR codes, and real-time orders. I'm <strong>Top Rated on Upwork</strong> with a 100% Job Success Score.</>,
];

const SERVICES = [
  "Web Development",
  "Application Development",
  "AI Integration",
  "Database Development",
  "Mobile Apps",
  "Custom Software",
];

const EXPERIENCE = [
  {
    role: "Full-Stack & AI Engineer",
    company: "Wequity",
    type: "Part-time",
    where: "Brussels, Belgium",
    mode: "Remote",
    when: "Jan 2025 — Present",
    current: true,
    summary: "Legal tech company building AI-powered tools for law firms and notaries across Belgium and the Netherlands.",
    bullets: [
      "Architected NORA, an AI-powered legal document processing platform handling EN/FR/NL documents on React, FastAPI and Supabase with 224+ DB tables.",
      "Built a Smart Processing module that learns document transformation patterns from example pairs using LLM APIs and DSPy — automated anonymization, reformatting, and extraction.",
      "Developed a RAG-based Knowledge Base where users query uploaded legal documents and get AI-generated answers with source citations and page references.",
      "Integrated DeepL API for legal document translation across English, French and Dutch, supporting notarial acts and filings.",
      "Designed background task architecture using Google Cloud Tasks and Pub/Sub for async document processing — keeping API responses under 200ms.",
    ],
    stack: ["React", "FastAPI", "Supabase", "GCP", "Vertex AI", "DSPy", "pgvector", "DeepL"],
    links: [
      { label: "NORA platform", href: "https://app.nora.legal", domain: "app.nora.legal" },
    ],
  },
  {
    role: "Software Engineer",
    company: "Retain Health, Inc.",
    type: "Part-time",
    where: "Boston, MA",
    mode: "Remote",
    when: "Aug 2021 — Present",
    current: true,
    summary: "Healthcare platform (25,000+ active users) focused on Alzheimer's prevention through personalized lifestyle interventions.",
    bullets: [
      "Core contributor to RetainYourBrain — achieving a 22% user retention rate over 4+ years of continuous shipping.",
      "Built core features full-stack on AngularJS, Express.js, Next.js, Node.js, TypeScript and MySQL — production-ready in Agile sprints from Figma designs.",
      "Designed a dynamic form system with complex conditional logic powering personalized routines and topic recommendations for clinical users.",
      "Created reusable AngularJS services with DI to centralize backend data — reducing redundant API calls and improving frontend performance by 50%+.",
      "Introduced automated testing (Jest, Cypress, Mocha, Supertest, Karma, Protractor) and GA4/GTM analytics.",
    ],
    stack: ["AngularJS", "Express.js", "Next.js", "TypeScript", "MySQL", "AWS", "React Native"],
    links: [
      { label: "RetainYourBrain", href: "https://retainyourbrain.com", domain: "retainyourbrain.com" },
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Upwork (Top Rated)",
    type: "Self-employed",
    where: "Worldwide",
    mode: "Remote",
    when: "Oct 2024 — Present",
    current: true,
    summary: "Top Rated freelancer with a 100% Job Success Score, building modern, scalable, and high-performance web applications.",
    bullets: [
      "Delivered 3+ full-stack projects with a 100% Job Success Score.",
      "Built the Martinez Auto Detail booking system (Next.js, Square API) with dynamic pricing and secure card storage — reducing scheduling overhead by 40%.",
      "Developed Socialura (socialura.com) for a client — an e-commerce platform with Stripe payment integration for digital service sales.",
    ],
    stack: ["Next.js", "React", "Node.js", "Tailwind", "Supabase", "Stripe", "Square"],
    links: [
      { label: "Upwork profile", href: "https://www.upwork.com/freelancers/~018064bc5b1d8ca3ce", domain: "Top Rated · 100% JSS" },
      { label: "Socialura", href: "https://socialura.com", domain: "socialura.com" },
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "satoripop",
    type: "Internship",
    where: "Sousse, Tunisia",
    mode: "Hybrid",
    when: "Jul 2023 — Aug 2023",
    summary: "Built a Google Meet–style video meeting platform independently during the internship.",
    bullets: [
      "Built video meeting platform with authentication, meeting creation/scheduling, protected pages, and Jitsi-powered calls.",
      "Delivered both frontend and backend independently with React, TypeScript, Express.js and MySQL.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Express.js", "MySQL", "Jitsi SDK"],
    links: [
      { label: "Meet platform", href: "http://187.124.184.74:3004/", domain: "187.124.184.74:3004" },
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Realinflo",
    type: "Internship",
    where: "Hong Kong SAR",
    mode: "Remote",
    when: "Feb 2021 — May 2021",
    summary: "Built an admin dashboard for a real estate intelligence platform — directly with the CTO via weekly milestones.",
    bullets: [
      "Built admin dashboard with Vue.js (Quasar) and Node.js (Feathers.js), improving data management efficiency by 35%.",
      "Delivered enhanced data visualization and reporting through weekly milestone reviews with the CTO.",
    ],
    stack: ["Vue.js", "Quasar", "Node.js", "Feathers.js", "MongoDB", "SCSS"],
  },
  {
    role: "Web Development Intern",
    company: "satoripop",
    type: "Internship",
    where: "Sousse, Tunisia",
    mode: "Hybrid",
    when: "Jul 2020 — Aug 2020",
    summary: "Designed and developed a web application to manage company employees and converted a PSD landing page design into a fully responsive site.",
    bullets: [
      "Built Satoripop RH — a Vue.js + Laravel HR platform with role-based dashboards for managers, HR, project managers and employees.",
      "Documented all backend API endpoints using Swagger/OpenAPI for clean handoff and future contributors.",
      "Converted a PSD landing-page design into a fully responsive e-commerce front-end (Eyedeal) with hand-written HTML/CSS/JS.",
    ],
    stack: ["Vue.js", "Laravel", "MySQL", "Bootstrap", "HTML", "CSS", "JavaScript"],
    links: [
      { label: "Satoripop RH", href: "http://187.124.184.74:3001/", domain: "187.124.184.74:3001" },
      { label: "Eyedeal landing page", href: "http://187.124.184.74:3006/", domain: "187.124.184.74:3006" },
    ],
  },
];

const PROJECTS = [
  {
    name: "MenuMate",
    domain: "menumate.net",
    href: "https://menumate.net",
    category: "SaaS",
    badge: "SaaS Founder",
    tag: "Live",
    desc: "SaaS platform that lets restaurants create digital menus, generate QR codes, and accept real-time orders from a single dashboard. SEO-optimized & multilingual.",
    stack: ["Next.js", "React", "Tailwind", "Supabase", "PostgreSQL"],
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
    desc: "Interactive 3D globe with event markers, clustering, event linking with curved Bezier visualizations, admin panel, and authentication.",
    stack: ["React 18", "Mapbox GL", "Supabase", "Tiptap", "Tailwind v4"],
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
    desc: "Custom booking system surpassing off-the-shelf solutions — service selection, date/time picking, secure card storage for no-show protection, and an owner dashboard.",
    stack: ["Next.js", "React", "Tailwind", "Square API"],
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
    desc: "Built for an Upwork client — a modern, performance-optimized platform for selling digital social services with clean responsive UI/UX and Stripe payment integration.",
    stack: ["WordPress", "Stripe", "Custom UI"],
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
    desc: "Builder that helps users create ATS-optimized resumes that pass automated tracking systems with real-time preview and one-click PDF export.",
    stack: ["Next.js", "React", "Tailwind", "jsPDF"],
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
    desc: "A Google Meet–style video meeting app built independently during my 2023 internship at satoripop — authentication, meeting creation, scheduling, protected pages, and Jitsi-powered calls.",
    stack: ["React", "TypeScript", "Node.js", "Express.js", "MySQL", "Jitsi SDK"],
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
    desc: "Human resources management platform with role-based dashboards for managers, HR, project managers, and employees — built during my 2020 internship.",
    stack: ["Vue.js", "Laravel", "MySQL", "Bootstrap", "Swagger"],
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
    desc: "Client-side e-commerce landing page built from a PSD design — responsive layout, product sections, cart visuals, and interactive design elements.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    accent: "#0ea5e9",
    icon: "cart",
  },
  {
    name: "GoStage / Internly",
    domain: "gostage.tn",
    href: "https://gostage.tn",
    category: "Academic",
    badge: "Academic",
    tag: "Final project",
    desc: "Internship platform where students discover and apply to internships and companies post opportunities. Real-time notifications via Pusher, application tracking, dashboards.",
    stack: ["Laravel", "Vue.js", "Inertia.js", "MySQL", "Pusher"],
    accent: "#1d4ed8",
    icon: "students",
  },
];

const SKILLS = [
  {
    title: "AI & Modern Stack",
    blurb: "LLM integration, RAG systems, vector databases, document processing pipelines.",
    icon: "ai",
    items: ["LLM Integration", "RAG Systems", "DSPy", "Vertex AI", "pgvector", "OCR", "Apache Tika", "AI Agents"],
  },
  {
    title: "Frontend",
    blurb: "Production React apps, design-system-driven UI, responsive & accessible.",
    icon: "fe",
    items: ["React.js", "Next.js", "TypeScript", "Vue.js", "AngularJS", "Tailwind CSS", "Shadcn UI", "React Native"],
  },
  {
    title: "Backend & Databases",
    blurb: "Scalable APIs, async pipelines, well-modeled relational + vector data.",
    icon: "be",
    items: ["Node.js", "NestJS", "Express.js", "FastAPI", "Laravel", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    blurb: "Production deployments, CI/CD, background processing, monitoring.",
    icon: "cloud",
    items: ["AWS", "GCP (Cloud Run)", "Pub/Sub", "Cloud Tasks", "Docker", "Linux", "Supabase", "Vercel"],
  },
  {
    title: "Testing & Practices",
    blurb: "Automated test suites, code review, API design, Agile delivery.",
    icon: "test",
    items: ["Jest", "Cypress", "Mocha", "Supertest", "Karma", "Protractor", "Agile/Scrum", "Git"],
  },
  {
    title: "Languages",
    blurb: "Strong typed and dynamic languages across full stack.",
    icon: "code",
    items: ["JavaScript", "TypeScript", "Python", "PHP", "SQL", "HTML5", "CSS3", "C"],
  },
];

const EDUCATION = [
  {
    when: "Sep 2021 — Jun 2024",
    title: "Engineer's Degree, Software Engineering",
    school: "ISSAT Sousse — Institut Supérieur des Sciences Appliquées et de Technologie",
    notes: "Selected as one of the top Computer Science students to join the competitive engineering program. Curriculum emphasized advanced software architecture, backend system design, and industry-standard practices.",
  },
  {
    when: "2018 — Jul 2021",
    title: "Bachelor's Degree, Computer Science",
    school: "ISSAT Sousse",
    notes: "Ranked among the top 5 students out of 90, earning direct admission to the Software Engineering degree program. End-of-studies project: Internly — a full-stack internship platform.",
  },
];

const CERTS = [
  { name: "CCNA: Introduction to Networks", iss: "Cisco · 2022" },
  { name: "MTA: Introduction to Programming Using Python", iss: "Microsoft · 2021" },
  { name: "MTA: Database Fundamentals", iss: "Microsoft · 2021" },
  { name: "MTA: Programming Using JavaScript", iss: "Microsoft · 2019" },
  { name: "MTA: Programming Using HTML and CSS", iss: "Microsoft · 2019" },
];

window.PROFILE = PROFILE;
window.STATS = STATS;
window.ABOUT_PARAS = ABOUT_PARAS;
window.SERVICES = SERVICES;
window.EXPERIENCE = EXPERIENCE;
window.PROJECTS = PROJECTS;
window.SKILLS = SKILLS;
window.EDUCATION = EDUCATION;
window.CERTS = CERTS;
