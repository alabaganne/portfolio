// ============================================
// App — Ala Baganne Portfolio
// ============================================
const { useState: useStateApp, useEffect: useEffectApp, useMemo: useMemoApp, useRef: useRefApp } = React;

function Nav() {
  const [scrolled, setScrolled] = useStateApp(false);
  useEffectApp(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <div className="brand-mark">AB</div>
          <span>Ala Baganne</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
        </div>
        <a className="nav-cta" href="#contact">
          Get in touch <Icon name="arrow" size={14} />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-grid" />
      <div className="hero-orb a" />
      <div className="hero-orb b" />
      <div className="container hero-inner">
        <div className="hero-eyebrow">
          <span className="dot"></span>
          Available for new opportunities · Remote-first
        </div>
        <h1>
          Full-Stack engineer building<br />
          <span className="accent">production web apps</span> &amp; AI systems.
        </h1>
        <p className="hero-sub">
          5+ years shipping React, Next.js, Node and Python in healthcare, legal tech and SaaS — from
          25K-user health platforms to RAG-powered legal document automation.
        </p>
        <div className="hero-meta">
          <span><Icon name="pin" size={14} /> {PROFILE.location}</span>
          <span><Icon name="mail" size={14} /> {PROFILE.email}</span>
          <span><Icon name="world" size={14} /> {PROFILE.website}</span>
        </div>
        <div className="hero-cta-row">
          <a className="btn btn-primary" href="#projects">
            See my work <Icon name="arrow" size={16} />
          </a>
          <a className="btn btn-ghost" href="#contact">
            <Icon name="mail" size={16} /> Contact me
          </a>
        </div>
        <div className="hero-stats">
          {STATS.map((s, i) => (
            <div className="hero-stat" key={i}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-scroll">
        scroll
        <span className="line" />
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="section-pad" id="about">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">01 · About me</span>
          <h2>I build software that <em style={{ fontStyle: "normal", color: "var(--primary)" }}>holds up</em> in production.</h2>
          <p>From a 25,000-user health platform to AI-powered legal document automation — I care about clean architecture, good UX, and shipping real things.</p>
        </div>
        <div className="about-grid">
          <div className="about-copy reveal">
            {ABOUT_PARAS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="about-services">
              {SERVICES.map((s) => <span className="chip" key={s}>{s}</span>)}
            </div>
          </div>
          <aside className="about-card reveal">
            <div className="about-row">
              <span className="k">Based in</span>
              <span className="v">Monastir, Tunisia</span>
            </div>
            <div className="about-row">
              <span className="k">Experience</span>
              <span className="v">5+ years</span>
            </div>
            <div className="about-row">
              <span className="k">Work mode</span>
              <span className="v">Remote · Worldwide</span>
            </div>
            <div className="about-row">
              <span className="k">Status</span>
              <span className="v" style={{ color: "#16a34a" }}>● Available</span>
            </div>
            <div className="about-row">
              <span className="k">Languages</span>
              <span className="v">EN · FR · AR</span>
            </div>
            <div className="about-row">
              <span className="k">Upwork</span>
              <a className="v" href={PROFILE.upwork} target="_blank" rel="noreferrer" style={{ color: "var(--primary)" }}>Top Rated · 100% JSS ↗</a>
            </div>
            <a className="btn btn-dark" href={`mailto:${PROFILE.email}`} style={{ width: "100%", justifyContent: "center", marginTop: 18 }}>
              <Icon name="mail" size={16} /> {PROFILE.email}
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section-pad section-dark" id="experience">
      <div className="container" style={{ position: "relative" }}>
        <div className="section-head reveal">
          <span className="section-tag">02 · Experience</span>
          <h2>A working track record across <span style={{ color: "#60a5fa" }}>health, legal & SaaS.</span></h2>
          <p>Five years of continuous shipping — long-term contracts, freelance wins, and product-led work for distributed teams.</p>
        </div>
        <div className="timeline">
          {EXPERIENCE.map((x, i) => (
            <article className={`tl-item reveal ${x.current ? "current" : ""}`} key={i}>
              <span className="tl-dot" />
              <div className="tl-card">
                <div className="tl-head">
                  <h3 className="tl-role">{x.role}</h3>
                  <span className="tl-when">{x.when}</span>
                </div>
                <div className="tl-where">
                  <span>{x.company}</span>
                  <span className="sep">·</span>
                  <span>{x.type}</span>
                  <span className="sep">·</span>
                  <span>{x.where}</span>
                  <span className="sep">·</span>
                  <span>{x.mode}</span>
                </div>
                <p className="tl-body">{x.summary}</p>
                <ul className="tl-bullets">
                  {x.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                {x.links && x.links.length > 0 && (
                  <div className="tl-links">
                    {x.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="tl-link">
                        <Icon name="ext" size={13} />
                        <span className="tl-link-label">{l.label}</span>
                        <span className="tl-link-domain">{l.domain}</span>
                      </a>
                    ))}
                  </div>
                )}
                <div className="tl-stack">
                  {x.stack.map((s) => <span className="pill" key={s}>{s}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const cats = useMemoApp(() => ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))], []);
  const [filter, setFilter] = useStateApp("All");
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  return (
    <section className="section-pad" id="projects" style={{ background: "var(--surface)" }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">03 · Projects</span>
          <h2>Selected work — shipped.</h2>
          <p>A mix of full-time, freelance, founder and academic work. Drop your own product screenshots into the placeholders.</p>
        </div>
        <div className="project-filters reveal">
          {cats.map((c) => (
            <button key={c}
              className={`filter-btn ${filter === c ? "active" : ""}`}
              onClick={() => setFilter(c)}>
              {c}
              {c !== "All" && <span style={{ marginLeft: 6, opacity: .6, fontSize: 11 }}>
                {PROJECTS.filter(p => p.category === c).length}
              </span>}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {visible.map((p) => (
            <article className="project reveal" key={p.name}>
              <ProjectThumb project={p} />
              <div className="project-body">
                <div className="project-head">
                  <h3 className="project-title">
                    {p.href ? <a href={p.href} target="_blank" rel="noreferrer">{p.name}</a> : p.name}
                  </h3>
                </div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map((s) => <span className="tag" key={s}>{s}</span>)}
                </div>
                <div className="project-foot">
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11.5, color: "var(--muted)", letterSpacing: ".05em", textTransform: "uppercase" }}>
                    {p.tag}
                  </span>
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noreferrer">
                      Visit live <Icon name="ext" size={13} />
                    </a>
                  ) : (
                    <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11.5, color: "var(--muted)" }}>private client work</span>
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

function Skills() {
  const iconForCard = {
    "AI & Modern Stack": "ai",
    "Frontend": "layers",
    "Backend & Databases": "server",
    "Cloud & DevOps": "cloud",
    "Testing & Practices": "test",
    "Languages": "code",
  };
  return (
    <section className="section-pad" id="skills">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">04 · Skills</span>
          <h2>Full-stack, end to end.</h2>
          <p>Hands-on across the modern web stack — from typed frontends to async pipelines on managed cloud.</p>
        </div>
        <div className="skills-grid">
          {SKILLS.map((s) => (
            <div className="skill-card reveal" key={s.title}>
              <h3>
                <span className="skill-icon"><Icon name={iconForCard[s.title]} size={18} /></span>
                {s.title}
              </h3>
              <p>{s.blurb}</p>
              <div className="skill-list">
                {s.items.map((x) => <span className="pill" key={x}>{x}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section-pad" id="education" style={{ background: "var(--surface)" }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">05 · Education & Certifications</span>
          <h2>Formal training in software engineering.</h2>
          <p>Top-of-class admission to the competitive Software Engineering track at ISSAT Sousse, with a foundation in fundamentals and modern practice.</p>
        </div>
        <div className="ed-grid">
          <div className="reveal">
            {EDUCATION.map((e, i) => (
              <div className="ed-card" key={i}>
                <div className="when">{e.when}</div>
                <h3>{e.title}</h3>
                <div className="school">{e.school}</div>
                <p>{e.notes}</p>
              </div>
            ))}
          </div>
          <div className="reveal">
            <div className="cert-list">
              {CERTS.map((c, i) => (
                <div className="cert" key={i}>
                  <span className="cert-icon"><Icon name="cert" size={20} /></span>
                  <div>
                    <div className="name">{c.name}</div>
                    <div className="iss">{c.iss}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <span className="contact-tag reveal">Get in touch</span>
        <h2 className="reveal" style={{ marginTop: 16 }}>Let's build something real.</h2>
        <p className="contact-sub reveal">
          I'm open to senior full-stack roles, AI-product work, and select freelance engagements. The fastest way to reach me is email — I usually reply within a day.
        </p>
        <div className="contact-links reveal">
          <a className="contact-link primary" href={`mailto:${PROFILE.email}`}>
            <Icon name="mail" size={16} /> {PROFILE.email}
          </a>
          <a className="contact-link" href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>
            <Icon name="phone" size={16} /> {PROFILE.phone}
          </a>
          <a className="contact-link" href={`https://${PROFILE.linkedin}`} target="_blank" rel="noreferrer">
            <Icon name="linkedin" size={16} /> LinkedIn
          </a>
          <a className="contact-link" href={`https://${PROFILE.github}`} target="_blank" rel="noreferrer">
            <Icon name="github" size={16} /> GitHub
          </a>
          <a className="contact-link" href={PROFILE.upwork} target="_blank" rel="noreferrer">
            <Icon name="upwork" size={16} /> Upwork
          </a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</span>
          <span className="made">
            <span>designed &amp; built</span>
            <span style={{ display: "inline-block", width: 4, height: 4, borderRadius: 4, background: "#60a5fa" }} />
            <span>in Monastir, Tunisia</span>
          </span>
        </div>
      </div>
    </section>
  );
}

function App() {
  useReveal();
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
