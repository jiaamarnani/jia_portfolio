"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HFS() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  const ACCENT = "#2F5D8A";
  const ACCENT_SOFT = "rgba(47,93,138,0.3)";

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
        .nav-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:${ACCENT}; transition:width 0.3s ease; }
        .nav-link:hover { color:#1e1a17; }
        .nav-link:hover::after { width:100%; }

        .fade-up { opacity:0; transform:translateY(20px); transition:opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.visible { opacity:1; transform:translateY(0); }
        .d1{transition-delay:0.05s} .d2{transition-delay:0.15s} .d3{transition-delay:0.25s}

        .section-label {
          font-size:0.72rem; letter-spacing:0.2em; text-transform:uppercase;
          color:${ACCENT}; display:flex; align-items:center; gap:0.75rem; margin-bottom:0.75rem;
        }
        .section-label::before { content:''; display:inline-block; width:1.5rem; height:1px; background:${ACCENT}; }

        .divider { border:none; border-top:1px solid rgba(58,51,48,0.12); margin:4rem 0; }
        .tag { font-size:0.62rem; letter-spacing:0.07em; text-transform:uppercase; color:rgba(58,51,48,0.5); padding:0.2rem 0.65rem; border:1px solid rgba(58,51,48,0.18); border-radius:999px; }

        .status-banner {
          border: 1px solid ${ACCENT_SOFT};
          background: rgba(47,93,138,0.05);
          border-radius: 6px;
          padding: 1rem 1.25rem;
          font-size: 0.85rem;
          color: rgba(58,51,48,0.75);
          line-height: 1.7;
          font-weight: 300;
        }

        .feat-row {
          display:flex; align-items:flex-start; gap:1rem; padding:1rem 1.25rem;
        }
        .feat-num {
          font-family:'DM Serif Display',serif; font-size:1rem; color:${ACCENT}; min-width:1.75rem; padding-top:1px;
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
              {["Next.js", "Supabase", "PostgreSQL", "TypeScript", "Vercel"].map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <h1 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(3rem,7vw,6rem)", fontWeight:400, lineHeight:1, marginBottom:"1rem" }}>
              HFS<span style={{ color:ACCENT, fontStyle:"italic" }}>.</span>
            </h1>
            <p style={{ fontSize:"1.1rem", color:"#3a3330", lineHeight:1.75, maxWidth:"580px", fontWeight:300, marginBottom:"1.5rem" }}>
              The data layer and member portal behind Her Future Sale, a sales training program for college women — schema, dashboards, module tracking, and an admin view into every member's progress.
            </p>

            <div className="status-banner">
              <strong style={{ color:"#1e1a17", fontWeight:500 }}>My role:</strong> I built the data model and member portal — schema, RLS policies, dashboards, module tracking, and admin tooling. The public marketing site (live at{" "}
              <a href="https://her-future-sale.vercel.app" target="_blank" style={{ color:ACCENT, textDecoration:"underline" }}>her-future-sale.vercel.app</a>
              ) was designed and built by a teammate — the homepage isn't my work, the systems behind the member experience are.
            </div>
          </div>

          <hr className="divider" />

          {/* Motivation */}
          <div className={`fade-up ${loaded ? "visible" : ""}`}>
            <p className="section-label">Motivation</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              A club needs a home base.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1rem" }}>
              Her Future Sale was organized around a training curriculum — modules members would work through at their own pace, building confidence in sales skills over a semester. That structure needed a real system behind it: something to track who'd completed what, let members log how confident they felt after each module, and give organizers a single view into how the group was progressing.
            </p>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px" }}>
              I took it on as a full-stack build end to end — database design, auth and permissions, member-facing dashboards, and an admin layer for organizers.
            </p>
          </div>

          <hr className="divider" />

          {/* Feature breakdown */}
          <div className={`fade-up ${loaded ? "visible" : ""}`}>
            <p className="section-label">System</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              Two sides, one schema.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1.75rem" }}>
              Members and organizers use the same data, but need very different views into it. Row-level security policies in Supabase did most of the heavy lifting — members can only ever see and edit their own records, while admins get read access across the whole roster.
            </p>

            <div style={{ border:"1px solid rgba(58,51,48,0.12)", borderRadius:"6px", overflow:"hidden" }}>
              {[
                { label:"Member dashboard", desc:"Personal view of assigned modules, completion state, and a running log of confidence ratings after each one." },
                { label:"Module completion tracking", desc:"Each module a member finishes updates their record via a Supabase policy-gated write — no way to mark someone else's progress." },
                { label:"Confidence logging", desc:"A lightweight self-rating members submit after each module, feeding the admin-side progress view." },
                { label:"Admin dashboard", desc:"Organizer view across all members, with a modal per member showing their full module history and confidence trend." },
                { label:"Invite flow", desc:"Token-based invite links so new members could self-onboard into the right cohort without manual account creation." },
                { label:"File uploads", desc:"Members could attach supporting materials to their module submissions, stored and scoped per user." },
              ].map((f, i) => (
                <div key={f.label} className="feat-row" style={{
                  borderBottom: i < 5 ? "1px solid rgba(58,51,48,0.08)" : "none",
                  background: i % 2 === 0 ? "transparent" : "rgba(58,51,48,0.01)"
                }}>
                  <div className="feat-num">{String(i+1).padStart(2,"0")}</div>
                  <div>
                    <div style={{ fontSize:"0.85rem", color:"#1e1a17", fontWeight:500, marginBottom:"0.25rem" }}>{f.label}</div>
                    <div style={{ fontSize:"0.85rem", color:"rgba(58,51,48,0.6)", lineHeight:1.65, fontWeight:300 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="divider" />

          {/* Design decisions */}
          <div className={`fade-up ${loaded ? "visible" : ""}`}>
            <p className="section-label">Design</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              Backend, not brand.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px" }}>
              The public-facing homepage — the hero copy, the stats, the curriculum sections — was designed and built by a teammate. My work started where that ends: the member dashboard, the admin tooling, and everything underneath that actually tracks a member's progress through the program. Where the marketing site sells the pitch, the portal is what a member and an admin actually use day to day, and that's the piece I owned.
            </p>
          </div>

          <hr className="divider" />

          {/* Challenges */}
          <div className={`fade-up ${loaded ? "visible" : ""}`}>
            <p className="section-label">Challenges</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              Permissions are the hard part.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1rem" }}>
              Getting RLS policies right took more iteration than any other part of the build. It's easy to write a policy that technically works but is either too permissive or accidentally locks out the admin view. I ended up writing a small set of test accounts — a regular member, a second member, and an admin — and manually walking through every read and write path before trusting a policy.
            </p>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px" }}>
              The admin progress modal was the other tricky piece — pulling a member's full module history, completion timestamps, and confidence log into one view meant joining across several tables efficiently rather than firing off a query per module per member.
            </p>
          </div>

          <hr className="divider" />

          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <a href="/#projects" style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1rem", color:"#3a3330", textDecoration:"none" }}>Back to projects</a>
            <div style={{ display:"flex", gap:"1rem" }}>
              <a href="https://her-future-sale.vercel.app" target="_blank"
                style={{ padding:"0.8rem 1.75rem", color:ACCENT, fontSize:"0.8rem", letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", border:`1px solid ${ACCENT}` }}>
                View Live Site
              </a>
              <a href="https://github.com/jiaamarnani" target="_blank"
                style={{ padding:"0.8rem 1.75rem", background:ACCENT, color:"#f0ebe0", fontSize:"0.8rem", letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none" }}>
                View on GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
