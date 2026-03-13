"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

function FlowBox({ label, sub, accent }: { label: string, sub?: string, accent?: boolean }) {
  return (
    <div style={{
      border: `1px solid ${accent ? "#8b2635" : "rgba(58,51,48,0.25)"}`,
      background: accent ? "rgba(139,38,53,0.06)" : "#f8f5ef",
      borderRadius: "4px",
      padding: "8px 12px",
      minWidth: "110px",
      maxWidth: "130px",
      textAlign: "center",
      flexShrink: 0,
    }}>
      <div style={{ fontSize: "0.72rem", color: accent ? "#8b2635" : "#1e1a17", lineHeight: 1.35, fontWeight: 400 }}>{label}</div>
      {sub && <div style={{ fontSize: "0.6rem", color: "rgba(58,51,48,0.45)", marginTop: "3px", lineHeight: 1.3 }}>{sub}</div>}
    </div>
  );
}

function Arrow() {
  return (
    <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
      <div style={{ width: "20px", height: "1px", background: "rgba(58,51,48,0.3)" }} />
      <div style={{ width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "5px solid rgba(58,51,48,0.3)" }} />
    </div>
  );
}

function DownArrow() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "4px 0" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: "1px", height: "14px", background: "rgba(58,51,48,0.3)" }} />
        <div style={{ width: 0, height: 0, borderLeft: "4px solid transparent", borderRight: "4px solid transparent", borderTop: "5px solid rgba(58,51,48,0.3)" }} />
      </div>
    </div>
  );
}

export default function LittleFridge() {
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
        .nav-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:#8b2635; transition:width 0.3s ease; }
        .nav-link:hover { color:#1e1a17; }
        .nav-link:hover::after { width:100%; }

        .fade-up { opacity:0; transform:translateY(20px); transition:opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.visible { opacity:1; transform:translateY(0); }
        .d1{transition-delay:0.05s} .d2{transition-delay:0.15s} .d3{transition-delay:0.25s}

        .section-label {
          font-size:0.72rem; letter-spacing:0.2em; text-transform:uppercase;
          color:#8b2635; display:flex; align-items:center; gap:0.75rem; margin-bottom:0.75rem;
        }
        .section-label::before { content:''; display:inline-block; width:1.5rem; height:1px; background:#8b2635; }

        .divider { border:none; border-top:1px solid rgba(58,51,48,0.12); margin:4rem 0; }
        .tag { font-size:0.62rem; letter-spacing:0.07em; text-transform:uppercase; color:rgba(58,51,48,0.5); padding:0.2rem 0.65rem; border:1px solid rgba(58,51,48,0.18); border-radius:999px; }
        .stat-num { font-family:'DM Serif Display',serif; font-size:2.2rem; color:#8b2635; line-height:1; }
        .stat-label { font-size:0.75rem; color:#3a3330; margin-top:0.2rem; }

        .flow-canvas::-webkit-scrollbar { height:5px; }
        .flow-canvas::-webkit-scrollbar-track { background:transparent; }
        .flow-canvas::-webkit-scrollbar-thumb { background:rgba(58,51,48,0.15); border-radius:2px; }

        .screenshot-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; }

        .plan-note {
          font-size: 0.62rem;
          color: rgba(58,51,48,0.45);
          line-height: 1.5;
          max-width: 110px;
        }
      `}</style>

      <div className="grain">

        <nav style={{ position:"fixed", top:0, left:0, right:0, display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1.5rem 3rem", zIndex:10 }}>
          <Link href="/" style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1.1rem", color:"#1e1a17", textDecoration:"none" }}>Jia.</Link>
          <div style={{ display:"flex", gap:"2rem" }}>
            <a href="/#projects" className="nav-link">All Projects</a>
            <a href="https://github.com/jiaamarnani/little_fridge" target="_blank" className="nav-link">GitHub</a>
          </div>
        </nav>

        <div style={{ maxWidth:"860px", margin:"0 auto", padding:"8rem 3rem 6rem" }}>

          {/* Hero */}
          <div className={`fade-up d1 ${loaded ? "visible" : ""}`}>
            <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap", marginBottom:"1.5rem" }}>
              {["SwiftUI", "Supabase", "Figma", "iOS", "Procreate"].map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <h1 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(3rem,7vw,6rem)", fontWeight:400, lineHeight:1, marginBottom:"1rem" }}>
              little fridge<span style={{ color:"#8b2635", fontStyle:"italic" }}>.</span>
            </h1>
            <p style={{ fontSize:"1.1rem", color:"#3a3330", lineHeight:1.75, maxWidth:"580px", fontWeight:300 }}>
              A shared fridge inventory app. Scan a receipt, and everyone in your household instantly sees what was bought, who it belongs to, and what's running low.
            </p>
          </div>


          <hr className="divider" />

          {/* Inspiration */}
          <div>
            <p className="section-label">Inspiration</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              "Over $1,500 is wasted annually per household due to forgotten food."
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1rem" }}>
              Living with roommates, we kept running into the same problems: someone buys oat milk and it disappears,
              leftovers get eaten, nobody knows what's actually in the fridge until they open it. 
              On a college budget, that waste adds up fast.
            </p>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px" }}>
              What started as a solution for roommates quickly revealed something bigger: 
              this problem isn't just a college problem. It exists in families, couples, and any household where food is shared. 
              Whether it is parents trying to track groceries, siblings sharing space, or roommates splitting costs, the challenge is the same, lack of visibility and coordination.
            </p>
          </div>

          <hr className="divider" />

          {/* What it does */}
          <div>
            <p className="section-label">What It Does</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              Receipt in, fridge tracked.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1rem" }}>
              Upload a receipt and items are instantly added to your shared inventory.
               Everyone in the group gets notified and can see exactly what was bought and who it belongs to.
            </p>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px" }}>
              Items are auto-categorized by food group. Shared items float to the top.
               Personal items stay clearly labeled below, no more "was this yours?" moments.
            </p>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1rem" }}>
             Users can also notify the group when something is out, so everyone knows what's needed on their next grocery run.
             Once the item is bought users can simply swipe out the notification.
            </p>
          </div>

          <hr className="divider" />

          {/* My Role */}
          <div>
            <p className="section-label">My Role</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              Design lead and frontend developer.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px" }}>
              I led the front-end design and logic from userflow diagrams, mockups and procreate protoypes. With the short turnaround time I focused on core user flow rather then hi-fi figma mockups so implementation was quicker.
              I also worked with the backend team to implement group logic on SupaBase.
            </p>
          </div>

          <hr className="divider" />

          {/* Task Diagram */}
          <div>
            <p className="section-label">Task Analysis</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              Mapping the user flow.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"2rem" }}>
              Before building, I mapped the core task a user would complete. Uploading a grocery receipt to a shared & sorted fridge, being able to view which items belong to who, and a notification system.
              Thinking as the user, I wanted the design to be frictionless and complete the core tasks efficiently with no added confusion.
            </p>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1rem" }}>
              When designing the user flow, it was easy to get caught up in edge cases and extra features. 
              Thinking back to the basics and main function was helpful to keep the design focused and make sure we could ship a working product within the 48 hour time frame.
            </p>
          </div>

          <img
            src="/images/lf-userflow.jpg"
            alt="little fridge user flow diagram"
            style={{ width: "100%", borderRadius: "8px", border: "1px solid rgba(58,51,48,0.1)" }}
          />

          <hr className="divider" />

          {/* Wireframes */}
          <div>
            <p className="section-label">Prototyping</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              Paper prototypes.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"2rem" }}>
              We began with paper prototypes to quickly validate the screen structure and navigation before committing to high-fidelity design. The sketches below represent the initial low-fidelity screens I designed for the core user flows.
            </p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
              <div style={{ borderRadius:"8px", overflow:"hidden", border:"1px solid rgba(58,51,48,0.1)" }}>
                <Image src="/images/lf-wireframe-1.jpg" alt="little fridge paper prototype screens" width={600} height={800} style={{ width:"100%", height:"auto", display:"block" }} />
              </div>
              <div style={{ borderRadius:"8px", overflow:"hidden", border:"1px solid rgba(58,51,48,0.1)" }}>
                <Image src="/images/lf-wireframe-2.jpg" alt="little fridge paper prototype group flow" width={600} height={800} style={{ width:"100%", height:"auto", display:"block" }} />
              </div>
            </div>
          </div>

          <hr className="divider" />

          {/* Screenshots */}
          <div>
            <p className="section-label">Final App</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              High-fidelity screens.
            </h2>
            <div className="screenshot-grid">
              {[
                { url:"https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/326/057/datas/gallery.jpg", label:"Login" },
                { url:"https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/326/064/datas/gallery.jpg", label:"Onboarding" },
                { url:"https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/326/079/datas/gallery.jpg", label:"Invite Code" },
                { url:"https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/326/080/datas/gallery.jpg", label:"Dashboard" },
                { url:"https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/326/083/datas/gallery.jpg", label:"Receipt Upload" },
                { url:"https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/326/090/datas/gallery.jpg", label:"Fridge View" },
              ].map(s => (
                <div key={s.label}>
                  <img src={s.url} alt={s.label} style={{ width:"100%", borderRadius:"8px", border:"1px solid rgba(58,51,48,0.1)" }} />
                  <p style={{ fontSize:"0.68rem", color:"rgba(58,51,48,0.4)", textAlign:"center", marginTop:"0.4rem", letterSpacing:"0.08em", textTransform:"uppercase" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <hr className="divider" />

          {/* Challenges */}
          <div>
            <p className="section-label">Challenges</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              What we ran into.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px" }}>
              Getting Supabase and SwiftUI talking to each other cleanly was the hardest part. Managing environment variables, Railway deployment, and real-time subscriptions was something we should have talked through more before working. 
              Figuring out how to implement a grocery input that didn't feel like a chore was also a challenge. We wanted to avoid making users type in every item, so we went with receipt upload and OCR, but that came with its own set of issues around accuracy and speed.
            </p>
          </div>


          <hr className="divider" />

          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <a href="/#projects" style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1rem", color:"#3a3330", textDecoration:"none" }}>Back to projects</a>
            <a href="https://github.com/jiaamarnani/little_fridge" target="_blank"
              style={{ padding:"0.8rem 1.75rem", background:"#8b2635", color:"#f0ebe0", fontSize:"0.8rem", letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none" }}>
              View on GitHub
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}