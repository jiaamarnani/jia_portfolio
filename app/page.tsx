"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import TextType from "./components/TextType";

const skills = [
  "Next.js", "TypeScript", "React", "PostgreSQL",
  "Python", "Swift", "Node.js", "Tailwind CSS",
  "Figma", "Java", "Git", "Prisma",
];

const projects = [
  {
    slug: "clearstart",
    title: "ClearStart",
    badge: "Live",
    desc: "Full-stack skincare web app that translates acne concerns into personalized AM/PM routines through an interactive quiz.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind", "Figma", "Vercel"],
    date: "Jan 2026 — Present",
    image: "/images/clearstart.png",
    portrait: false,
  },
  {
    slug: "little-fridge",
    title: "little fridge",
    badge: "Hackathon Honorable Mention",
    desc: "Smart shared fridge inventory iOS app that transforms your fridge into a shared digital inventory, simplifying the act of grocery shopping.",
    tags: ["SwiftUI", "Supabase", "Figma", "iOS", "Procreate"],
    date: "Mar 2025",
    image: "/images/littleFridgeCover.jpeg",
    portrait: true,
  },
  {
    slug: "dibs",
    title: "Dibs!",
    badge: "PawHacks Winner",
    desc: "Peer-to-peer campus marketplace enabling students to buy, sell, and donate items, reducing college waste.",
    tags: ["SwiftUI", "Figma", "iOS"],
    date: "Mar 2025",
    image: "/images/dibs.png",
    portrait: true,
  },
  {
    slug: "road-racer",
    title: "Road Racer",
    badge: null,
    desc: "Unity-based 2D racing game built in C# with sprite animation, collision detection, and core gameplay mechanics — developed collaboratively over a semester.",
    tags: ["Unity", "C#", "Game Dev"],
    date: "Feb — May 2024",
    image: "/images/roadracer.png",
    portrait: false,
  },
];

function MagneticButton({ children, className, style, href, download, onMouseEnter, onMouseLeave }: any) {
  const ref = useRef<HTMLAnchorElement>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };
  const handleMouseLeave = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    el.style.transform = `translate(0, 0)`;
    onMouseLeave?.(e);
  };
  return (
    <a ref={ref} href={href} download={download} className={className}
      style={{ ...style, transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1), opacity 0.3s, color 0.3s, border-color 0.3s" }}
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onMouseEnter={onMouseEnter}>
      {children}
    </a>
  );
}

function ProjectRow({ p, i }: { p: typeof projects[0], i: number }) {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <Link ref={ref} href={`/projects/${p.slug}`}
      className={`project-row ${vis ? "visible" : ""}`}
      style={{ transitionDelay: `${i * 0.08}s` }}>
      <div className="row-image">
        <div className={`row-img-wrap ${p.portrait ? "portrait" : ""}`}>
          <Image src={p.image} alt={p.title} fill className="object-cover" />
        </div>
      </div>
      <div className="row-content">
        <div className="row-header">
          <h2 className="row-title">{p.title}</h2>
          {p.badge && <span className="proj-badge">{p.badge}</span>}
        </div>
        <p className="row-desc">{p.desc}</p>
        <div className="proj-tags">
          {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
        </div>
        <div className="row-footer">
          <span className="row-date">{p.date}</span>
          <span className="learn-more">Learn more <span className="learn-arrow">→</span></span>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  useEffect(() => {
    const dots: HTMLDivElement[] = [];
    const count = 10;
    for (let i = 0; i < count; i++) {
      const dot = document.createElement("div");
      const size = 5 - i * 0.3;
      dot.style.cssText = `position:fixed;pointer-events:none;z-index:9999;width:${size}px;height:${size}px;border-radius:50%;background:#8b2635;opacity:0;transform:translate(-50%,-50%);transition:opacity 0.3s;`;
      document.body.appendChild(dot);
      dots.push(dot);
    }
    const positions = Array(count).fill({ x: 0, y: 0 });
    const onMove = (e: MouseEvent) => { mousePos.current = { x: e.clientX, y: e.clientY }; };
    let frame: number;
    const animate = () => {
      positions[0] = { ...mousePos.current };
      for (let i = 1; i < count; i++) {
        positions[i] = {
          x: positions[i].x + (positions[i-1].x - positions[i].x) * 0.35,
          y: positions[i].y + (positions[i-1].y - positions[i].y) * 0.35,
        };
      }
      dots.forEach((dot, i) => {
        dot.style.left = positions[i].x + "px";
        dot.style.top = positions[i].y + "px";
        dot.style.opacity = String(0.18 - i * 0.015);
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    window.addEventListener("mousemove", onMove);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(frame); dots.forEach(d => d.remove()); };
  }, []);

  return (
    <main className="relative overflow-x-hidden" style={{ backgroundColor: "#f0ebe0", color: "#1e1a17", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        html { scroll-behavior: smooth; }

        .grain::before {
          content:'';position:fixed;inset:0;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity:0.09;pointer-events:none;z-index:100;
        }
        .grain::after {
          content:'';position:fixed;inset:0;
          background:radial-gradient(ellipse at center,transparent 55%,rgba(180,165,140,0.3) 100%);
          pointer-events:none;z-index:99;
        }

        .eyebrow::before { content:'';display:inline-block;width:1.75rem;height:1px;background:#8b2635;margin-right:0.75rem; }

        .pill { border:1px solid rgba(139,38,53,0.25);color:#3a3330;font-size:0.72rem;letter-spacing:0.1em;text-transform:uppercase;padding:0.45rem 1rem;border-radius:999px;white-space:nowrap;transition:border-color 0.3s,color 0.3s,transform 0.3s;cursor:default; }
        .pill:hover { border-color:#8b2635;color:#8b2635;transform:translateY(-2px); }
        .pills-col { display:flex;flex-direction:column;gap:0.65rem; }

        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes floatC { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        .float-a { animation:floatA 4s ease-in-out infinite; }
        .float-b { animation:floatB 5s ease-in-out 0.5s infinite; }
        .float-c { animation:floatC 6s ease-in-out 1s infinite; }

        .fade-up { opacity:0;transform:translateY(18px);transition:opacity 0.7s ease,transform 0.7s ease; }
        .fade-up.visible { opacity:1;transform:translateY(0); }
        .delay-1{transition-delay:0.1s} .delay-2{transition-delay:0.25s}
        .delay-3{transition-delay:0.4s} .delay-4{transition-delay:0.55s}

        .pills-fade { opacity:0;transition:opacity 0.8s ease; }
        .pills-fade.visible { opacity:1; }
        .pills-delay-1{transition-delay:0.5s} .pills-delay-2{transition-delay:0.7s} .pills-delay-3{transition-delay:0.9s}

        .nav-link { position:relative;text-decoration:none;color:#3a3330;font-size:0.8rem;letter-spacing:0.1em;text-transform:uppercase;transition:color 0.3s; }
        .nav-link::after { content:'';position:absolute;bottom:-2px;left:0;width:0;height:1px;background:#8b2635;transition:width 0.3s ease; }
        .nav-link:hover { color:#1e1a17; }
        .nav-link:hover::after { width:100%; }

        .view-work {
          position: fixed; bottom: 2.5rem; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
          text-decoration: none; z-index: 10;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .view-work.hidden { opacity: 0; pointer-events: none; transform: translateX(-50%) translateY(8px); }
        @keyframes nudge {
          0%,100%{transform:translateX(-50%) translateY(0)}
          50%{transform:translateX(-50%) translateY(6px)}
        }
        .view-work:not(.hidden) { animation: nudge 2s ease-in-out infinite; }

        .project-row {
          display:grid;grid-template-columns:1fr 1fr;
          gap:5rem;align-items:center;
          padding:4rem 0;
          border-top:1px solid rgba(58,51,48,0.12);
          text-decoration:none;color:inherit;
          opacity:0;transform:translateY(20px);
          transition:opacity 0.6s ease,transform 0.6s ease;
        }
        .project-row:last-child { border-bottom:1px solid rgba(58,51,48,0.12); }
        .project-row.visible { opacity:1;transform:translateY(0); }
        .project-row:nth-child(even) .row-image { order:2; }
        .project-row:nth-child(even) .row-content { order:1; }
        .project-row:hover .row-title { color:#8b2635; }
        .project-row:hover .row-img-wrap { box-shadow:0 16px 40px rgba(58,51,48,0.12); }
        .project-row:hover .learn-arrow { transform:translateX(5px); }
        .project-row:hover .learn-more { gap:0.6rem; }

        .row-img-wrap { aspect-ratio:4/3;border-radius:4px;overflow:hidden;background:#ddd8cc;position:relative;transition:box-shadow 0.35s; }
        .row-img-wrap.portrait { aspect-ratio: 3/4; max-width: 280px; margin: 0 auto; }
        .row-content { display:flex;flex-direction:column;gap:1rem; }
        .row-header { display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap; }
        .row-title { font-family:'DM Serif Display',serif;font-size:clamp(1.8rem,3vw,2.6rem);font-weight:400;line-height:1.05;transition:color 0.25s; }
        .proj-badge { font-size:0.62rem;letter-spacing:0.08em;text-transform:uppercase;padding:0.22rem 0.65rem;border-radius:999px;white-space:nowrap;border:1px solid #8b2635;color:#8b2635;flex-shrink:0; }
        .row-desc { font-size:0.95rem;color:#3a3330;line-height:1.75;font-weight:450; }
        .proj-tags { display:flex;gap:0.4rem;flex-wrap:wrap; }
        .proj-tag { font-size:0.62rem;letter-spacing:0.07em;text-transform:uppercase;color:rgba(58,51,48,0.45);padding:0.18rem 0.55rem;border:1px solid rgba(58,51,48,0.18);border-radius:999px; }
        .row-footer { display:flex;justify-content:space-between;align-items:center;padding-top:0.5rem; }
        .row-date { font-size:0.68rem;letter-spacing:0.08em;text-transform:uppercase;color:rgba(58,51,48,0.35); }
        .learn-more { display:inline-flex;align-items:center;gap:0.35rem;font-size:0.72rem;letter-spacing:0.1em;text-transform:uppercase;color:#8b2635;transition:gap 0.25s; }
        .learn-arrow { display:inline-block;transition:transform 0.25s cubic-bezier(0.23,1,0.32,1); }
      `}</style>

      <div className="grain">

        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 flex justify-end items-center z-10" style={{ padding: "1.5rem 3rem" }}>
          <ul className="flex gap-8 list-none">
            {["Projects", "About", "Contact"].map((item) => (
              <li key={item}>
                <a href={item === "Projects" ? "#projects" : `/${item.toLowerCase()}`} className="nav-link">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hero */}
        <section className="grid grid-cols-2 h-screen">
          <div className="flex flex-col justify-center" style={{ padding: "0 2rem 0 10rem" }}>
            <p className={`eyebrow fade-up delay-1 ${loaded ? "visible" : ""} flex items-center uppercase mb-2`}
              style={{ fontSize: "0.78rem", letterSpacing: "0.22em", color: "#8b2635" }}>
              Full-Stack Engineer
            </p>
            <div className={`fade-up delay-2 ${loaded ? "visible" : ""}`}
              style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(6rem, 12vw, 12rem)", lineHeight: 0.88, fontWeight: 400, letterSpacing: "-0.02em", marginBottom: "1.5rem", display: "flex" }}>
              {["J","i","a"].map((letter, i) => (
                <span key={i} onMouseEnter={() => setHoveredLetter(i)} onMouseLeave={() => setHoveredLetter(null)}
                  style={{ display: "inline-block", color: hoveredLetter === i ? "#8b2635" : "#1e1a17",
                    transform: hoveredLetter === i ? i === 0 ? "rotate(-8deg) translateY(-6px)" : i === 1 ? "rotate(6deg) translateY(-10px) scale(1.1)" : "rotate(-4deg) translateY(-6px)" : "none",
                    transition: "transform 0.25s cubic-bezier(0.23,1,0.32,1), color 0.2s", cursor: "default" }}>{letter}</span>
              ))}
              <span onMouseEnter={() => setHoveredLetter(3)} onMouseLeave={() => setHoveredLetter(null)}
                style={{ display: "inline-block", color: "#8b2635", fontStyle: "italic",
                  transform: hoveredLetter === 3 ? "scale(1.4) translateY(-4px)" : "none",
                  transition: "transform 0.25s cubic-bezier(0.23,1,0.32,1)", cursor: "default" }}>.</span>
            </div>
            <div className={`fade-up delay-3 ${loaded ? "visible" : ""}`}
              style={{ fontSize: "1rem", color: "#3a3330", lineHeight: 1.75, maxWidth: "360px", fontWeight: 300, marginBottom: "2.5rem", minHeight: "3.5rem" }}>
              <TextType
                text="I build products focusing on the details that make software welcoming, efficient, and usable!"
                typingSpeed={35} initialDelay={900} showCursor={true}
                cursorCharacter="|" cursorClassName="text-[#8b2635] opacity-70" loop={false}
              />
            </div>
            <div className={`fade-up delay-4 ${loaded ? "visible" : ""} flex items-center gap-6`}>
              <MagneticButton href="#projects" className="no-underline uppercase"
                style={{ display: "inline-block", padding: "0.8rem 1.75rem", background: "#8b2635", color: "#f0ebe0", fontSize: "0.8rem", letterSpacing: "0.1em" }}>
                Projects
              </MagneticButton>
              <MagneticButton href="/resume.pdf" download className="no-underline uppercase"
                style={{ color: "#3a3330", fontSize: "0.8rem", letterSpacing: "0.1em", borderBottom: "1px solid #3a3330", paddingBottom: "2px" }}
                onMouseEnter={(e: any) => { e.currentTarget.style.color = "#1e1a17"; e.currentTarget.style.borderColor = "#1e1a17"; }}
                onMouseLeave={(e: any) => { e.currentTarget.style.color = "#3a3330"; e.currentTarget.style.borderColor = "#3a3330"; }}>
                ↓ Resume
              </MagneticButton>
            </div>
          </div>

          {/* Right — floating pills */}
          <div className="flex items-center justify-center gap-4" style={{ padding: "0 3rem" }}>
            <div className={`pills-col float-a pills-fade pills-delay-1 ${loaded ? "visible" : ""}`}>
              {skills.slice(0, 4).map(s => <div key={s} className="pill">{s}</div>)}
            </div>
            <div className={`pills-col float-b pills-fade pills-delay-2 ${loaded ? "visible" : ""}`} style={{ marginTop: "2rem" }}>
              {skills.slice(4, 8).map(s => <div key={s} className="pill">{s}</div>)}
            </div>
            <div className={`pills-col float-c pills-fade pills-delay-3 ${loaded ? "visible" : ""}`} style={{ marginTop: "-1.5rem" }}>
              {skills.slice(8).map(s => <div key={s} className="pill">{s}</div>)}
            </div>
          </div>
        </section>

        {/* View my work indicator */}
        <a href="#projects" className={`view-work ${scrolled ? "hidden" : ""}`}>
          <span style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#3a3330" }}>
            View my work
          </span>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}>
            {[0.3, 0.6, 1].map((op, i) => (
              <div key={i} style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#8b2635", opacity: op }} />
            ))}
            <div style={{ width: "12px", height: "12px", borderRight: "1.5px solid #8b2635", borderBottom: "1.5px solid #8b2635", transform: "rotate(45deg)", marginTop: "2px" }} />
          </div>
        </a>

        {/* Projects section */}
        <section id="projects" style={{ maxWidth: "1050px", margin: "0 auto", padding: "4rem 3rem 6rem" }}>
          {projects.map((p, i) => <ProjectRow key={p.slug} p={p} i={i} />)}
        </section>

      </div>
    </main>
  );
}