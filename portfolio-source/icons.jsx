// ============================================
// Icon set — small inline SVGs
// ============================================
const { useState, useEffect, useRef, useMemo } = React;

const Icon = ({ name, size = 18, stroke = 1.6, color = "currentColor" }) => {
  const common = {
    width: size, height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "mail":
      return <svg {...common}><rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></svg>;
    case "phone":
      return <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>;
    case "pin":
      return <svg {...common}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
    case "github":
      return <svg {...common}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 7.77 5.07 5.07 0 0 0 19.91 4S18.73 3.65 16 5.5a13.4 13.4 0 0 0-7 0C6.27 3.65 5.09 4 5.09 4A5.07 5.07 0 0 0 5 7.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 21.13V25" /></svg>;
    case "linkedin":
      return <svg {...common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
    case "upwork":
      return <svg {...common} viewBox="0 0 24 24"><path d="M18.5 8.5a4 4 0 0 0-3.94 3.33A14 14 0 0 1 13 9h-2v3.5a2 2 0 1 1-4 0V9H5v3.5a4 4 0 0 0 7.34 2.21 16 16 0 0 0 2.04 2.36A4 4 0 1 0 18.5 8.5Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill={color} stroke="none" /></svg>;
    case "world":
      return <svg {...common}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" /></svg>;
    case "arrow":
      return <svg {...common}><path d="M5 12h14M13 5l7 7-7 7" /></svg>;
    case "ext":
      return <svg {...common}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6M10 14 21 3" /></svg>;
    case "download":
      return <svg {...common}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>;
    case "spark":
      return <svg {...common}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /></svg>;
    case "code":
      return <svg {...common}><path d="m16 18 6-6-6-6M8 6l-6 6 6 6M14.5 4l-5 16" /></svg>;
    case "layers":
      return <svg {...common}><path d="m12 2 10 6-10 6L2 8l10-6Z" /><path d="m2 16 10 6 10-6M2 12l10 6 10-6" /></svg>;
    case "server":
      return <svg {...common}><rect x="2" y="3" width="20" height="8" rx="2" /><rect x="2" y="13" width="20" height="8" rx="2" /><path d="M6 7h.01M6 17h.01" /></svg>;
    case "cloud":
      return <svg {...common}><path d="M17.5 19a4.5 4.5 0 1 0-1-8.9A6 6 0 0 0 5 12.5 4 4 0 0 0 7 20h10.5Z" /></svg>;
    case "test":
      return <svg {...common}><path d="M9 2v6L4 18a3 3 0 0 0 3 4h10a3 3 0 0 0 3-4L15 8V2M9 2h6M7 14h10" /></svg>;
    case "cert":
      return <svg {...common}><circle cx="12" cy="9" r="6" /><path d="M9 14.5V22l3-2 3 2v-7.5" /></svg>;
    case "calendar":
      return <svg {...common}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>;
    case "menu":
      return <svg {...common}><path d="M3 6h18M3 12h18M3 18h12" /></svg>;
    case "brain":
      return <svg {...common}><path d="M12 5a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0 1 2.3A3 3 0 0 0 4 13a3 3 0 0 0 2 2.8 3 3 0 0 0 3 3.2 3 3 0 0 0 3-3V5ZM12 5a3 3 0 0 1 3-3 3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1-1 2.3A3 3 0 0 1 20 13a3 3 0 0 1-2 2.8 3 3 0 0 1-3 3.2 3 3 0 0 1-3-3V5Z" /></svg>;
    case "doc":
      return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h8M8 9h2" /></svg>;
    case "globe":
      return <svg {...common}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg>;
    case "cart":
      return <svg {...common}><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.7 13a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" /></svg>;
    case "students":
      return <svg {...common}><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" /></svg>;
    case "ai":
      return <svg {...common}><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M9 9h.01M15 9h.01M9 15c1 1 5 1 6 0" /></svg>;
    case "video":
      return <svg {...common}><rect x="2" y="6" width="14" height="12" rx="2" /><path d="m22 8-6 4 6 4V8Z" /></svg>;
    case "users":
      return <svg {...common}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
    default: return null;
  }
};

window.Icon = Icon;

// ============================================
// Project thumbnail — abstract SVG placeholder
// ============================================
const ProjectThumb = ({ project }) => {
  const accent = project.accent || "#2563eb";
  // Different shapes by icon type
  const renderShape = () => {
    switch (project.icon) {
      case "ai":
        return (
          <>
            <circle cx="200" cy="120" r="60" fill={accent} fillOpacity="0.12" />
            <circle cx="200" cy="120" r="40" fill={accent} fillOpacity="0.22" />
            <rect x="170" y="100" width="60" height="40" rx="8" fill="#fff" stroke={accent} strokeWidth="1.5" />
            <circle cx="188" cy="118" r="3" fill={accent} />
            <circle cx="212" cy="118" r="3" fill={accent} />
            <path d="M188 130 q12 6 24 0" stroke={accent} strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M120 60 L120 50 M140 50 L140 60 M260 180 L260 190 M280 190 L280 180" stroke={accent} strokeOpacity=".4" strokeWidth="1.5" strokeLinecap="round" />
          </>
        );
      case "brain":
        return (
          <>
            <path d="M150 80 Q120 80 120 110 Q100 110 100 130 Q100 155 130 160 Q140 175 165 175 L165 80 Z" fill={accent} fillOpacity="0.18" stroke={accent} strokeWidth="1.5" />
            <path d="M250 80 Q280 80 280 110 Q300 110 300 130 Q300 155 270 160 Q260 175 235 175 L235 80 Z" fill={accent} fillOpacity="0.12" stroke={accent} strokeWidth="1.5" />
            <path d="M165 100 Q175 105 165 115 M165 125 Q175 130 165 140 M235 100 Q225 105 235 115 M235 125 Q225 130 235 140" stroke={accent} strokeWidth="1.5" fill="none" />
          </>
        );
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
            {[0,1,2,3].map(i =>
              [0,1,2,3,4].map(j => (
                <rect key={`${i}-${j}`} x={146 + j*22} y={94 + i*20} width="14" height="14" rx="2"
                  fill={ (i*5+j === 7) ? accent : accent }
                  fillOpacity={ (i*5+j === 7) ? 1 : 0.08 } />
              ))
            )}
          </>
        );
      case "doc":
        return (
          <>
            <rect x="150" y="50" width="100" height="140" rx="6" fill="#fff" stroke={accent} strokeWidth="1.5" />
            <path d="M226 50 L250 74 L226 74 Z" fill={accent} fillOpacity=".25" />
            <rect x="162" y="84" width="50" height="4" rx="2" fill={accent} fillOpacity=".7" />
            {[0,1,2,3,4,5].map(i => (
              <rect key={i} x="162" y={100 + i*12} width={i % 2 === 0 ? 76 : 60} height="4" rx="2" fill={accent} fillOpacity=".18" />
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
    <div className="project-thumb">
      <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id={`grid-${project.name.replace(/\W/g,'')}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke={accent} strokeWidth="0.5" strokeOpacity="0.08" />
          </pattern>
          <linearGradient id={`bg-${project.name.replace(/\W/g,'')}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={accent} stopOpacity="0.04" />
            <stop offset="1" stopColor={accent} stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill={`url(#bg-${project.name.replace(/\W/g,'')})`} />
        <rect width="400" height="240" fill={`url(#grid-${project.name.replace(/\W/g,'')})`} />
        {renderShape()}
      </svg>
      <span className="ph-badge" style={{ background: accent }}>{project.badge}</span>
      <span className="ph-label">drop image →</span>
    </div>
  );
};

window.ProjectThumb = ProjectThumb;

// ============================================
// Reveal-on-scroll hook
// ============================================
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "-60px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
window.useReveal = useReveal;
