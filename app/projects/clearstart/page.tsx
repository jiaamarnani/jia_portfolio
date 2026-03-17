"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ClearStart() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <main style={{ backgroundColor: "#f0ebe0", color: "#1e1a17", fontFamily: "'DM Sans', sans-serif", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        .grain::before {
          content:''; position:fixed; inset:0;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity:0.09; pointer-events:none; z-index:100;
        }

        .nav-link { position:relative; text-decoration:none; color:#3a3330; font-size:0.8rem; letter-spacing:0.1em; text-transform:uppercase; transition:color 0.3s; }
        .nav-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:#3A7D5F; transition:width 0.3s ease; }
        .nav-link:hover { color:#1e1a17; }
        .nav-link:hover::after { width:100%; }

        .fade-up { opacity:0; transform:translateY(20px); transition:opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.visible { opacity:1; transform:translateY(0); }
        .d1{transition-delay:0.05s} .d2{transition-delay:0.15s} .d3{transition-delay:0.25s}

        .section-label {
          font-size:0.72rem; letter-spacing:0.2em; text-transform:uppercase;
          color:#3A7D5F; display:flex; align-items:center; gap:0.75rem; margin-bottom:0.75rem;
        }
        .section-label::before { content:''; display:inline-block; width:1.5rem; height:1px; background:#3A7D5F; }

        .divider { border:none; border-top:1px solid rgba(58,51,48,0.12); margin:4rem 0; }
        .tag { font-size:0.62rem; letter-spacing:0.07em; text-transform:uppercase; color:rgba(58,51,48,0.5); padding:0.2rem 0.65rem; border:1px solid rgba(58,51,48,0.18); border-radius:999px; }

        .iteration-card {
          border: 1px solid rgba(58,51,48,0.12);
          border-radius: 6px;
          overflow: hidden;
          background: rgba(58,51,48,0.02);
        }
        .iteration-label {
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(58,51,48,0.4);
          padding: 0.6rem 0.9rem;
          border-bottom: 1px solid rgba(58,51,48,0.08);
        }

        .tech-pill {
          font-size: 0.65rem;
          letter-spacing: 0.06em;
          color: #3A7D5F;
          padding: 0.25rem 0.7rem;
          border: 1px solid rgba(58,125,95,0.3);
          border-radius: 999px;
          background: rgba(58,125,95,0.05);
        }

        .flow-step {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(58,51,48,0.08);
        }
        .flow-step:last-child { border-bottom: none; }
        .flow-num {
          font-family: 'DM Serif Display', serif;
          font-size: 1rem;
          color: #3A7D5F;
          min-width: 1.5rem;
          padding-top: 1px;
        }

        .next-row {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(58,51,48,0.08);
        }
        .next-row:last-child { border-bottom: none; }
        .next-dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: #3A7D5F;
          margin-top: 7px;
          flex-shrink: 0;
        }
        .next-dot-muted {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: rgba(58,125,95,0.3);
          margin-top: 7px;
          flex-shrink: 0;
        }
      `}</style>

      <div className="grain">

        <nav style={{ position:"fixed", top:0, left:0, right:0, display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1.5rem 3rem", zIndex:10 }}>
          <Link href="/" style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1.1rem", color:"#1e1a17", textDecoration:"none" }}>Jia.</Link>
          <div style={{ display:"flex", gap:"2rem" }}>
            <a href="/#projects" className="nav-link">All Projects</a>
            <a href="https://github.com/jiaamarnani" target="_blank" className="nav-link">GitHub</a>
          </div>
        </nav>

        <div style={{ maxWidth:"860px", margin:"0 auto", padding:"8rem 3rem 6rem" }}>

          {/* Hero */}
          <div className={`fade-up d1 ${loaded ? "visible" : ""}`}>
            <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap", marginBottom:"1.5rem" }}>
              {["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "React"].map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <h1 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(3rem,7vw,6rem)", fontWeight:400, lineHeight:1, marginBottom:"1rem" }}>
              ClearStart<span style={{ color:"#3A7D5F", fontStyle:"italic" }}>.</span>
            </h1>
            <p style={{ fontSize:"1.1rem", color:"#3a3330", lineHeight:1.75, maxWidth:"580px", fontWeight:300, marginBottom:"1rem" }}>
              An acne education platform with a personalized skincare quiz. Built as a portfolio piece and a real resource for a skincare community of 64k+ on TikTok.
            </p>
            <p style={{ fontSize:"0.9rem", color:"rgba(58,51,48,0.5)", lineHeight:1.75, maxWidth:"580px", fontWeight:300 }}>
              Still in progress, REST API endpoints, an AI-powered education section, and full DB integration are upcoming.
            </p>
          </div>

          <hr className="divider" />

          {/* Why */}
          <div>
            <p className="section-label">Motivation</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              Acne is confusing. The internet makes it worse.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1rem" }}>
              I spent years trying to figure out my skin. Different dermatologists gave me different routines. Reddit threads contradicted each other. I bought products that did nothing. No one was explaining the <em>why</em> behind any of it.
            </p>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px" }}>
              I started a TikTok account, <strong>@jlovesskincare</strong>, to normalize acne and actually educate people. It grew to 64k+ followers. ClearStart is the extension of that, a platform that gives people a personalized starting point without the noise.
            </p>
          </div>

          <hr className="divider" />

          {/* What it does */}
          <div>
            <p className="section-label">What It Does</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              A 3-minute quiz. A personalized routine.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1.5rem" }}>
              Users answer questions about their skin type, acne concerns, sensitivity, current products, and budget. The quiz logic maps those answers to a personalized AM/PM routine with ingredient explanations — not just product names, but the actual reasoning behind each step.
            </p>

            <div style={{ borderLeft:"2px solid rgba(58,125,95,0.3)", paddingLeft:"1.25rem", margin:"1.5rem 0" }}>
              <p style={{ fontSize:"0.9rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, fontStyle:"italic" }}>
                "Evidence-based skincare education with zero brand partnerships or conflicts of interest."
              </p>
            </div>

            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px" }}>
              The results page is structured with left-border accent rows, AM/PM tabs, and a <code style={{ fontSize:"0.85rem", background:"rgba(58,51,48,0.06)", padding:"0.1rem 0.35rem", borderRadius:"3px" }}>recommendedProduct</code> slot on each step object, already set up for the API integration that's in progress.
            </p>
          </div>

          <hr className="divider" />

          {/* Tech */}
          <div>
            <p className="section-label">Tech Stack</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              Built for real use, designed for portfolios.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1.5rem" }}>
              Four pages in Next.js with TypeScript. Tailwind for layout, custom CSS for the design system. Quiz state is managed in React with typed answer objects. On the backend, a 36-product PostgreSQL database is modeled and seeded with personally tested products — REST endpoints to connect the quiz to the DB are in progress.
            </p>
            <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap", marginBottom:"0.6rem" }}>
              {["Next.js 14", "TypeScript", "TailwindCSS", "React", "Vercel"].map(t => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
            <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap" }}>
              {["PostgreSQL", "Prisma", "Node.js"].map(t => (
                <span key={t} className="tech-pill" style={{ borderColor:"rgba(58,51,48,0.2)", color:"rgba(58,51,48,0.5)", background:"transparent" }}>{t}</span>
              ))}
            </div>
          </div>

          <hr className="divider" />

          {/* Design Iterations */}
          <div>
            <p className="section-label">Design Process</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              Three versions before it clicked.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"2rem" }}>
              The first version was too personal — it leaned into my story so hard it forgot to explain what the product actually did. The second overcorrected with a dark red theme that felt clinical and off-brand. The third landed on something that felt right: cream background, light forest green, Georgia serif for headlines.
            </p>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"1rem", marginBottom:"2rem" }}>
              <div className="iteration-card">
                <div className="iteration-label">V1 — Story-first</div>
                <div style={{ padding:"1rem", fontSize:"0.82rem", color:"rgba(58,51,48,0.6)", lineHeight:1.7, fontWeight:300 }}>
                  Scroll-based personal narrative. Pink accents. Buried the product. Too self-focused for a landing page.
                </div>
              </div>
              <div className="iteration-card">
                <div className="iteration-label">V2 — Dark red</div>
                <div style={{ padding:"1rem", fontSize:"0.82rem", color:"rgba(58,51,48,0.6)", lineHeight:1.7, fontWeight:300 }}>
                  Redesigned around <code style={{ fontSize:"0.78rem", background:"rgba(58,51,48,0.06)", padding:"0.1rem 0.3rem", borderRadius:"2px" }}>#8b2635</code>. Quiz and results matched. Still felt wrong for a skincare product.
                </div>
              </div>
              <div className="iteration-card" style={{ borderColor:"rgba(58,125,95,0.3)", background:"rgba(58,125,95,0.03)" }}>
                <div className="iteration-label" style={{ color:"#3A7D5F", borderBottomColor:"rgba(58,125,95,0.15)" }}>V3 — Current ✓</div>
                <div style={{ padding:"1rem", fontSize:"0.82rem", color:"rgba(58,51,48,0.6)", lineHeight:1.7, fontWeight:300 }}>
                  Cream + forest green. Story moved off landing page. Landing focused on the quiz value prop.
                </div>
              </div>
            </div>

            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px" }}>
              A lot of the design decisions came down to one principle: the landing page is about the product, not me. My story is real credibility, but it lives on its own page. Recruiters and users both need to understand what ClearStart does in the first few seconds.
            </p>
          </div>

          <hr className="divider" />

          {/* Page breakdown */}
          <div>
            <p className="section-label">Architecture</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              Four pages, one design system.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1.75rem" }}>
              Every page shares the same tokens — cream background, green primary, Georgia for display type, DM Sans for body. The quiz and results pages handle all the logic. The story page holds the personal context that would've cluttered the landing page.
            </p>

            <div style={{ border:"1px solid rgba(58,51,48,0.12)", borderRadius:"6px", overflow:"hidden" }}>
              {[
                { file:"page.tsx", desc:"Landing page. Hero, how-it-works, CTA. No personal story.", tag:"/" },
                { file:"quiz/page.tsx", desc:"6-question flow. Typed answer state. Progress indicator. Smooth transitions between questions.", tag:"/quiz" },
                { file:"results/page.tsx", desc:"AM/PM tab layout. Left-border step rows. Each step has a recommendedProduct slot wired to the DB.", tag:"/results" },
                { file:"story/page.tsx", desc:"Before/after photo placeholders. Personal journey. TikTok credibility.", tag:"/story" },
              ].map((p, i) => (
                <div key={p.file} style={{
                  display:"flex", alignItems:"flex-start", gap:"1rem", padding:"1rem 1.25rem",
                  borderBottom: i < 3 ? "1px solid rgba(58,51,48,0.08)" : "none",
                  background: i % 2 === 0 ? "transparent" : "rgba(58,51,48,0.01)"
                }}>
                  <div style={{ minWidth:"120px" }}>
                    <div style={{ fontSize:"0.72rem", color:"#3A7D5F", fontFamily:"monospace", marginBottom:"0.2rem" }}>{p.tag}</div>
                    <div style={{ fontSize:"0.68rem", color:"rgba(58,51,48,0.35)", fontFamily:"monospace" }}>{p.file}</div>
                  </div>
                  <div style={{ fontSize:"0.85rem", color:"rgba(58,51,48,0.65)", lineHeight:1.65, fontWeight:300 }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <hr className="divider" />

          {/* What's next */}
          <div>
            <p className="section-label">What's Next</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              Still being built.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1.75rem" }}>
              The DB is modeled and seeded. The frontend is live. The gap right now is the API layer — connecting quiz outputs to actual product recommendations from the database. After that, an education section powered by an AI model to explain ingredients and routines in plain language.
            </p>

            <div style={{ border:"1px solid rgba(58,51,48,0.12)", borderRadius:"6px", overflow:"hidden" }}>
              {[
                { label:"REST API endpoints", desc:"Wire quiz inputs to the PostgreSQL DB via API routes. Transform answers into a filtered product routine server-side.", done: false },
                { label:"Live product recommendations", desc:"Replace the static recommendedProduct slot with real DB results — 36 personally tested products filtered by skin type and concern.", done: false },
                { label:"AI education section", desc:"An AI model that explains what each ingredient does and why it's in the routine. Plain language, no jargon.", done: false },
              ].map((item, i) => (
                <div key={item.label} style={{
                  display:"flex", alignItems:"flex-start", gap:"1rem", padding:"1rem 1.25rem",
                  borderBottom: i < 2 ? "1px solid rgba(58,51,48,0.08)" : "none",
                  background: i % 2 === 0 ? "transparent" : "rgba(58,51,48,0.01)"
                }}>
                  <div className="next-dot-muted" style={{ marginTop:"6px" }} />
                  <div>
                    <div style={{ fontSize:"0.82rem", color:"#3a3330", fontWeight:400, marginBottom:"0.2rem" }}>{item.label}</div>
                    <div style={{ fontSize:"0.8rem", color:"rgba(58,51,48,0.5)", lineHeight:1.65, fontWeight:300 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="divider" />

          {/* Challenges */}
          <div>
            <p className="section-label">Challenges</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              What actually took time.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1rem" }}>
              The biggest lesson wasn't technical, it was learning to fully commit to a design before touching code. Early on I kept making small tweaks mid-build: a color here, a layout change there. Every iteration bled into the next and nothing ever felt finished because I hadn't actually decided what I was building.
            </p>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1rem" }}>
              The dark red version is a good example. I shipped it before really sitting with whether it was right. It wasn't, but by then the quiz and results pages were already built around it. Switching to green meant going back through all four pages. That rework was avoidable.
            </p>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px" }}>
              Now I don't write a line of component code until the tokens are locked: colors, type scale, spacing. It sounds obvious but it genuinely changed how fast I move. Less time refactoring, more time building things that actually matter.
            </p>
          </div>

          <hr className="divider" />

          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <a href="/#projects" style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1rem", color:"#3a3330", textDecoration:"none" }}>Back to projects</a>
            <a href="https://github.com/jiaamarnani/clear-start" target="_blank"
              style={{ padding:"0.8rem 1.75rem", background:"#3A7D5F", color:"#f0ebe0", fontSize:"0.8rem", letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none" }}>
              View on GitHub
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}