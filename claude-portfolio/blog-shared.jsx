// ============================================
// Blog — shared shell, cover SVGs, helpers
// ============================================
const { useState: useStateBlog, useEffect: useEffectBlog, useMemo: useMemoBlog } = React;

// ---------- Shared Nav (with Blog active state) ----------
function BlogNav({ active = "blog" }) {
  const [scrolled, setScrolled] = useStateBlog(false);
  useEffectBlog(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="Portfolio.html" className="brand">
          <div className="brand-mark">AB</div>
          <span>Ala Baganne</span>
        </a>
        <div className="nav-links">
          <a href="Portfolio.html#about">About</a>
          <a href="Portfolio.html#experience">Experience</a>
          <a href="Portfolio.html#projects">Projects</a>
          <a href="Portfolio.html#skills">Skills</a>
          <a href="Blog.html" className={active === "blog" ? "active" : ""}>Blog</a>
        </div>
        <a className="nav-cta" href="Portfolio.html#contact">
          Get in touch <Icon name="arrow" size={14} />
        </a>
      </div>
    </nav>
  );
}

// ---------- Shared footer ----------
function BlogFooter() {
  return (
    <section className="contact" style={{ paddingTop: "100px", paddingBottom: "60px" }}>
      <div className="container contact-inner">
        <span className="contact-tag">Get in touch</span>
        <h2 style={{ marginTop: 16 }}>Like what you read?</h2>
        <p className="contact-sub">
          I write about the things I'm shipping — production RAG, full-stack patterns, and the messy parts of building software. New posts every few weeks.
        </p>
        <div className="contact-links">
          <a className="contact-link primary" href="mailto:alabaganne9@gmail.com">
            <Icon name="mail" size={16} /> alabaganne9@gmail.com
          </a>
          <a className="contact-link" href="https://linkedin.com/in/alabaganne" target="_blank" rel="noreferrer">
            <Icon name="linkedin" size={16} /> LinkedIn
          </a>
          <a className="contact-link" href="https://github.com/alabaganne" target="_blank" rel="noreferrer">
            <Icon name="github" size={16} /> GitHub
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Ala Baganne. All rights reserved.</span>
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

// ---------- Cover SVG — themed per post ----------
function BlogCover({ post, variant = "card" }) {
  const accent = post.accent || "#2563eb";
  const id = `c-${post.slug}-${variant}`;

  const renderShape = () => {
    switch (post.cover) {
      case "rag":
        return (
          <>
            {/* document chunks flowing into a brain/db */}
            <g opacity=".9">
              <rect x="60" y="80" width="80" height="100" rx="6" fill="#fff" stroke={accent} strokeWidth="1.5" />
              <line x1="74" y1="100" x2="124" y2="100" stroke={accent} strokeWidth="1.5" opacity=".5" />
              <line x1="74" y1="114" x2="116" y2="114" stroke={accent} strokeWidth="1.5" opacity=".3" />
              <line x1="74" y1="128" x2="124" y2="128" stroke={accent} strokeWidth="1.5" opacity=".3" />
              <line x1="74" y1="142" x2="108" y2="142" stroke={accent} strokeWidth="1.5" opacity=".3" />
              <rect x="74" y="156" width="50" height="10" rx="2" fill={accent} opacity=".6" />
            </g>
            <path d="M150 130 L210 130" stroke={accent} strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M210 125 l8 5 -8 5 z" fill={accent} />
            <g transform="translate(220,80)">
              <rect width="120" height="100" rx="14" fill={accent} fillOpacity=".12" stroke={accent} strokeWidth="1.5" />
              <circle cx="60" cy="50" r="22" fill={accent} fillOpacity=".25" />
              <path d="M48 50 q12 -16 24 0 M48 56 q12 16 24 0" stroke="#fff" strokeWidth="1.5" fill="none" />
            </g>
            <path d="M350 130 L410 130" stroke={accent} strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M410 125 l8 5 -8 5 z" fill={accent} />
            <g transform="translate(420,90)">
              <rect width="80" height="80" rx="10" fill="#fff" stroke={accent} strokeWidth="1.5" />
              <path d="M16 40 q12 -16 24 0 q12 16 24 0" stroke={accent} strokeWidth="1.5" fill="none" />
              <circle cx="40" cy="40" r="6" fill={accent} />
            </g>
          </>
        );
      case "migration":
        return (
          <>
            <g transform="translate(70,80)">
              <rect width="120" height="100" rx="10" fill={accent} fillOpacity=".1" stroke={accent} strokeWidth="1.5" />
              <text x="60" y="58" textAnchor="middle" fill={accent} fontFamily="JetBrains Mono, monospace" fontSize="18" fontWeight="700">AngularJS</text>
            </g>
            <path d="M200 130 q40 -50 100 0" stroke={accent} strokeWidth="2" fill="none" strokeDasharray="6 4" />
            <path d="M300 130 l-8 -6 0 12 z" fill={accent} />
            <g transform="translate(310,80)">
              <rect width="120" height="100" rx="10" fill={accent} fillOpacity=".22" stroke={accent} strokeWidth="1.5" />
              <text x="60" y="58" textAnchor="middle" fill={accent} fontFamily="JetBrains Mono, monospace" fontSize="22" fontWeight="700">React</text>
            </g>
            <circle cx="230" cy="80" r="4" fill={accent} />
            <circle cx="250" cy="60" r="3" fill={accent} opacity=".6" />
            <circle cx="270" cy="80" r="3" fill={accent} opacity=".6" />
          </>
        );
      case "menumate":
        return (
          <>
            <rect x="140" y="60" width="120" height="160" rx="14" fill="#fff" stroke={accent} strokeWidth="1.5" />
            <rect x="156" y="76" width="80" height="6" rx="3" fill={accent} fillOpacity=".7" />
            <rect x="156" y="90" width="50" height="4" rx="2" fill={accent} fillOpacity=".3" />
            <rect x="156" y="110" width="88" height="24" rx="4" fill={accent} fillOpacity=".08" />
            <rect x="156" y="140" width="88" height="24" rx="4" fill={accent} fillOpacity=".08" />
            <rect x="156" y="170" width="88" height="24" rx="4" fill={accent} fillOpacity=".18" />
            <rect x="285" y="120" width="56" height="56" rx="8" fill="#fff" stroke={accent} strokeWidth="1.5" />
            <path d="M293 128 h8 v8 h-8 z M329 128 h8 v8 h-8 z M293 168 h8 v8 h-8 z M308 128 h6 v6 h-6 z M308 144 h6 v6 h-6 z M321 144 h8 v6 h-8 z M308 160 h6 v6 h-6 z M321 160 h6 v8 h-6 z" fill={accent} />
          </>
        );
      case "queue":
        return (
          <>
            <g transform="translate(60,80)">
              <rect width="84" height="100" rx="10" fill="#fff" stroke={accent} strokeWidth="1.5" />
              <text x="42" y="42" textAnchor="middle" fill={accent} fontFamily="JetBrains Mono, monospace" fontSize="12" fontWeight="700">FastAPI</text>
              <rect x="14" y="56" width="56" height="6" rx="3" fill={accent} fillOpacity=".3" />
              <rect x="14" y="68" width="40" height="6" rx="3" fill={accent} fillOpacity=".3" />
              <rect x="14" y="80" width="56" height="6" rx="3" fill={accent} fillOpacity=".3" />
            </g>
            <path d="M154 130 L210 130" stroke={accent} strokeWidth="1.5" strokeDasharray="4 4" />
            <g transform="translate(210,90)">
              <rect width="120" height="80" rx="10" fill={accent} fillOpacity=".18" stroke={accent} strokeWidth="1.5" />
              <text x="60" y="34" textAnchor="middle" fill={accent} fontFamily="JetBrains Mono, monospace" fontSize="12" fontWeight="700">Pub/Sub</text>
              {[0,1,2,3].map(i => (
                <rect key={i} x={16 + i*22} y="48" width="16" height="16" rx="3" fill={accent} fillOpacity={0.3 + i*0.15} />
              ))}
            </g>
            <path d="M340 130 L400 130" stroke={accent} strokeWidth="1.5" strokeDasharray="4 4" />
            <g transform="translate(400,80)">
              <rect width="100" height="100" rx="10" fill="#fff" stroke={accent} strokeWidth="1.5" />
              <text x="50" y="42" textAnchor="middle" fill={accent} fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="700">Worker</text>
              <circle cx="50" cy="64" r="14" fill="none" stroke={accent} strokeWidth="2" strokeDasharray="40 60" />
              <circle cx="50" cy="64" r="3" fill={accent} />
            </g>
          </>
        );
      case "dspy":
        return (
          <>
            <g transform="translate(80,70)">
              <rect width="100" height="40" rx="8" fill={accent} fillOpacity=".12" stroke={accent} strokeWidth="1.5" />
              <text x="50" y="24" textAnchor="middle" fill={accent} fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="600">examples</text>
            </g>
            <g transform="translate(80,130)">
              <rect width="100" height="40" rx="8" fill={accent} fillOpacity=".12" stroke={accent} strokeWidth="1.5" />
              <text x="50" y="24" textAnchor="middle" fill={accent} fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="600">signature</text>
            </g>
            <path d="M180 90 q40 0 40 50" stroke={accent} strokeWidth="1.5" fill="none" />
            <path d="M180 150 q40 0 40 -10" stroke={accent} strokeWidth="1.5" fill="none" />
            <g transform="translate(220,100)">
              <circle cx="40" cy="40" r="36" fill={accent} fillOpacity=".18" stroke={accent} strokeWidth="1.5" />
              <text x="40" y="46" textAnchor="middle" fill={accent} fontFamily="Space Grotesk, sans-serif" fontSize="18" fontWeight="700">DSPy</text>
            </g>
            <path d="M296 140 q40 0 40 -10" stroke={accent} strokeWidth="1.5" fill="none" />
            <g transform="translate(340,110)">
              <rect width="110" height="60" rx="10" fill="#fff" stroke={accent} strokeWidth="1.5" />
              <text x="55" y="36" textAnchor="middle" fill={accent} fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="600">optimized prompt</text>
            </g>
          </>
        );
      case "booking":
        return (
          <>
            <rect x="100" y="60" width="160" height="160" rx="12" fill="#fff" stroke={accent} strokeWidth="1.5" />
            <rect x="100" y="60" width="160" height="26" rx="12" fill={accent} />
            <circle cx="124" cy="56" r="4" fill={accent} />
            <circle cx="236" cy="56" r="4" fill={accent} />
            {Array.from({length: 4}).map((_, i) =>
              Array.from({length: 6}).map((_, j) => (
                <rect key={`${i}-${j}`} x={114 + j*22} y={98 + i*22} width="16" height="16" rx="2"
                  fill={ (i === 1 && j === 3) ? accent : accent }
                  fillOpacity={ (i === 1 && j === 3) ? 1 : 0.08 } />
              ))
            )}
            <g transform="translate(290,90)">
              <rect width="120" height="140" rx="12" fill="#fff" stroke={accent} strokeWidth="1.5" />
              <rect x="14" y="14" width="60" height="6" rx="3" fill={accent} fillOpacity=".6" />
              <rect x="14" y="26" width="40" height="4" rx="2" fill={accent} fillOpacity=".25" />
              <rect x="14" y="46" width="92" height="20" rx="4" fill={accent} fillOpacity=".1" />
              <rect x="14" y="74" width="92" height="20" rx="4" fill={accent} fillOpacity=".1" />
              <rect x="14" y="106" width="92" height="20" rx="6" fill={accent} />
            </g>
          </>
        );
      default:
        return <rect x="100" y="40" width="400" height="200" rx="12" fill={accent} fillOpacity=".12" />;
    }
  };

  return (
    <div className={`blog-cover ${variant}`}>
      <svg viewBox="0 0 600 260" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={id + "-bg"} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={accent} stopOpacity="0.04" />
            <stop offset="1" stopColor={accent} stopOpacity="0.16" />
          </linearGradient>
          <pattern id={id + "-grid"} width="22" height="22" patternUnits="userSpaceOnUse">
            <path d="M 22 0 L 0 0 0 22" fill="none" stroke={accent} strokeWidth="0.5" strokeOpacity="0.1" />
          </pattern>
        </defs>
        <rect width="600" height="260" fill={`url(#${id}-bg)`} />
        <rect width="600" height="260" fill={`url(#${id}-grid)`} />
        {renderShape()}
      </svg>
      <span className="cover-badge" style={{ background: accent }}>{post.category}</span>
    </div>
  );
}

// ---------- Reveal hook (re-use from icons.jsx if present, else inline)  ----------
function useRevealBlog() {
  useEffectBlog(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "-40px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

window.BlogNav = BlogNav;
window.BlogFooter = BlogFooter;
window.BlogCover = BlogCover;
window.useRevealBlog = useRevealBlog;
