"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dibs() {
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
        .nav-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:#c4698f; transition:width 0.3s ease; }
        .nav-link:hover { color:#1e1a17; }
        .nav-link:hover::after { width:100%; }

        .fade-up { opacity:0; transform:translateY(20px); transition:opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.visible { opacity:1; transform:translateY(0); }
        .d1{transition-delay:0.05s} .d2{transition-delay:0.15s} .d3{transition-delay:0.25s}

        .section-label {
          font-size:0.72rem; letter-spacing:0.2em; text-transform:uppercase;
          color:#c4698f; display:flex; align-items:center; gap:0.75rem; margin-bottom:0.75rem;
        }
        .section-label::before { content:''; display:inline-block; width:1.5rem; height:1px; background:#c4698f; }

        .divider { border:none; border-top:1px solid rgba(58,51,48,0.12); margin:4rem 0; }
        .tag { font-size:0.62rem; letter-spacing:0.07em; text-transform:uppercase; color:rgba(58,51,48,0.5); padding:0.2rem 0.65rem; border:1px solid rgba(58,51,48,0.18); border-radius:999px; }

        .tech-pill {
          font-size: 0.65rem;
          letter-spacing: 0.06em;
          color: #c4698f;
          padding: 0.25rem 0.7rem;
          border: 1px solid rgba(196,105,143,0.35);
          border-radius: 999px;
          background: rgba(196,105,143,0.06);
        }

        .press-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          color: #c4698f;
          padding: 0.35rem 0.85rem;
          border: 1px solid rgba(196,105,143,0.35);
          border-radius: 999px;
          background: rgba(196,105,143,0.06);
          text-decoration: none;
          transition: background 0.2s;
        }
        .press-badge:hover { background: rgba(196,105,143,0.12); }

        .screenshot-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; }

        .flow-node {
          border: 1px solid rgba(58,51,48,0.2);
          background: #f8f5ef;
          border-radius: 4px;
          padding: 7px 12px;
          font-size: 0.7rem;
          color: #1e1a17;
          text-align: center;
          line-height: 1.35;
          white-space: nowrap;
        }
        .flow-node-accent {
          border: 1px solid rgba(196,105,143,0.5);
          background: rgba(196,105,143,0.07);
          border-radius: 4px;
          padding: 7px 12px;
          font-size: 0.7rem;
          color: #7a2f52;
          text-align: center;
          line-height: 1.35;
          white-space: nowrap;
        }
        .flow-arrow-h {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .flow-arrow-h::before { content:''; display:block; width:18px; height:1px; background:rgba(58,51,48,0.25); }
        .flow-arrow-h::after { content:''; display:block; width:0; height:0; border-top:3.5px solid transparent; border-bottom:3.5px solid transparent; border-left:5px solid rgba(58,51,48,0.25); }
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
              {["SwiftUI", "Xcode", "Figma", "iOS", "PawHacks 2025"].map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <h1 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(3rem,7vw,6rem)", fontWeight:400, lineHeight:1, marginBottom:"1rem" }}>
              Dibs<span style={{ color:"#c4698f", fontStyle:"italic" }}>!</span>
            </h1>
            <p style={{ fontSize:"1.1rem", color:"#3a3330", lineHeight:1.75, maxWidth:"580px", fontWeight:300, marginBottom:"1.25rem" }}>
              A peer-to-peer campus marketplace iOS app for buying and selling secondhand clothes, furniture, and dorm essentials. Built in 48 hours. Won 1st place at PawHacks 2025.
            </p>
            <a href="https://news.northeastern.edu/2025/03/26/thrift-store-app-oakland/" target="_blank" className="press-badge">
              <span style={{ fontSize:"0.6rem", letterSpacing:"0.12em", textTransform:"uppercase" }}>As seen in</span>
              Northeastern Global News
            </a>
          </div>

          <hr className="divider" />

          {/* Inspiration */}
          <div>
            <p className="section-label">Inspiration</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              End of semester, mountains of stuff, nowhere for it to go.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1rem" }}>
              Every spring, students move out and just leave things behind — fans, vacuums, furniture, clothes. Good stuff that ends up in the trash because there's no easy way to find it or get rid of it. Our campus has a physical Reuse Depot but most students don't even know it exists.
            </p>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px" }}>
              The three of us all had different angles on it. Shreya's into app development, I love thrifting and upcycling, Minesh is into fashion. When PawHacks announced sustainability as the theme, we basically looked at each other and already knew. Dibs! is a digitized version of the Reuse Depot — except students can put prices on things, coordinate pickups, and actually know what's available before they spend money on something they could've gotten for free.
            </p>
          </div>

          <hr className="divider" />

          {/* What it does */}
          <div>
            <p className="section-label">What It Does</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              See it, like it, Dibs it.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1rem" }}>
              Sellers upload photos of items they want to get rid of, set a price, and list them. Buyers browse by category, save items to a cart, and coordinate pickup — all within their campus community. It's basically Depop but locked to your university, which means you actually trust the people you're buying from.
            </p>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px" }}>
              We also integrated the Reuse Depot directly so students can see what's available there for free before spending money on something identical at Target.
            </p>
          </div>

          <hr className="divider" />

          {/* My Role */}
          <div>
            <p className="section-label">My Role</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              Frontend user flow and Figma prototyping.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1rem" }}>
              I led the frontend user flow planning — mapping out the onboarding and browsing experiences in Figma before we wrote a line of SwiftUI. My background is C, not Swift, so a lot of the first day was Shreya getting Minesh and me up to speed. Once I got comfortable with the syntax things moved a lot faster.
            </p>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px" }}>
              I also drove most of the presentation strategy on Sunday. We went in with a user mindset — not showing features, but showing why someone would actually open the app the week before move-out.
            </p>
          </div>

          <hr className="divider" />

          {/* User Flow */}
          <div>
            <p className="section-label">User Flow</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              Mapping it before building it.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"2rem" }}>
              Before touching Xcode, I mapped the two core flows — buyer and seller — so we knew exactly what screens we needed and could split the work cleanly. In a 48-hour sprint, you can't afford to figure out architecture mid-build.
            </p>

            <div style={{ border:"1px solid rgba(58,51,48,0.12)", borderRadius:"8px", padding:"1.75rem", background:"rgba(58,51,48,0.01)", overflowX:"auto" }}>

              <div style={{ marginBottom:"1.5rem" }}>
                <div style={{ fontSize:"0.6rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"rgba(58,51,48,0.35)", marginBottom:"0.75rem" }}>Buyer flow</div>
                <div style={{ display:"flex", alignItems:"center", gap:"0", flexWrap:"nowrap" }}>
                  {[
                    { label:"Onboarding", accent:false },
                    { label:"Sign Up / Log In", accent:false },
                    { label:"Browse Listings", accent:true },
                    { label:"Item Detail", accent:false },
                    { label:"Add to Cart", accent:false },
                    { label:"Checkout", accent:true },
                    { label:"Coordinate Pickup", accent:false },
                  ].map((node, i) => (
                    <div key={i} style={{ display:"flex", alignItems:"center" }}>
                      <div className={node.accent ? "flow-node-accent" : "flow-node"}>{node.label}</div>
                      {i < 6 && <div className="flow-arrow-h" />}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ borderTop:"1px solid rgba(58,51,48,0.08)", margin:"1.25rem 0" }} />

              <div style={{ marginBottom:"1.5rem" }}>
                <div style={{ fontSize:"0.6rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"rgba(58,51,48,0.35)", marginBottom:"0.75rem" }}>Seller flow</div>
                <div style={{ display:"flex", alignItems:"center", gap:"0", flexWrap:"nowrap" }}>
                  {[
                    { label:"Onboarding", accent:false },
                    { label:"Sign Up / Log In", accent:false },
                    { label:"Create Listing", accent:true },
                    { label:"Upload Photo", accent:false },
                    { label:"Set Price + Details", accent:false },
                    { label:"Listing Goes Live", accent:true },
                    { label:"Buyer Contacts", accent:false },
                  ].map((node, i) => (
                    <div key={i} style={{ display:"flex", alignItems:"center" }}>
                      <div className={node.accent ? "flow-node-accent" : "flow-node"}>{node.label}</div>
                      {i < 6 && <div className="flow-arrow-h" />}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ borderTop:"1px solid rgba(58,51,48,0.08)", margin:"1.25rem 0" }} />

              <div>
                <div style={{ fontSize:"0.6rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"rgba(58,51,48,0.35)", marginBottom:"0.75rem" }}>Reuse Depot integration</div>
                <div style={{ display:"flex", alignItems:"center", gap:"0", flexWrap:"nowrap" }}>
                  {[
                    { label:"Browse Listings", accent:false },
                    { label:"Filter: Free Items", accent:false },
                    { label:"Reuse Depot Stock", accent:true },
                    { label:"Campus Pickup", accent:false },
                  ].map((node, i) => (
                    <div key={i} style={{ display:"flex", alignItems:"center" }}>
                      <div className={node.accent ? "flow-node-accent" : "flow-node"}>{node.label}</div>
                      {i < 3 && <div className="flow-arrow-h" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <hr className="divider" />

          {/* Screens */}
          <div>
            <p className="section-label">Final App</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              High-fidelity screens.
            </h2>
            <div className="screenshot-grid">
              {[
                { url:"https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/323/790/datas/gallery.jpg", label:"Poster" },
                { url:"https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/323/796/datas/gallery.jpg", label:"Pages 1" },
                { url:"https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/323/797/datas/gallery.jpg", label:"Pages 2" },
              ].map(s => (
                <div key={s.label}>
                  <img src={s.url} alt={s.label} style={{ width:"100%", borderRadius:"8px", border:"1px solid rgba(58,51,48,0.1)" }} />
                  <p style={{ fontSize:"0.68rem", color:"rgba(58,51,48,0.4)", textAlign:"center", marginTop:"0.4rem", letterSpacing:"0.08em", textTransform:"uppercase" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <hr className="divider" />

          {/* Tech */}
          <div>
            <p className="section-label">Tech Stack</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              New language, 48 hours, working product.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1.5rem" }}>
              Shreya had used SwiftUI before in high school so she led that side of things while Minesh and I picked it up as we went. I had a C background which helped with the logic, but the Swift syntax and Xcode environment were new. By Saturday night it had clicked enough to actually be useful.
            </p>
            <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap" }}>
              {["SwiftUI", "Xcode", "GitHub", "Figma"].map(t => (
                <span key={t} className="tech-pill">{t}</span>
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
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1rem" }}>
              File management got messy fast. As we added features, the number of SwiftUI views grew and it got hard to track what to modify for a given change. We'd update one file and something would break somewhere else. It made me realize how much actually goes into an app — it's not just the visible stuff, it's every small button and transition you'd never think about until you need it.
            </p>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px" }}>
              Doing this in a language none of us were fully fluent in, under a time crunch, was genuinely hard. We stayed up until 3am Saturday and still had to pull together a full presentation for Sunday. The fact that it worked and looked good at the end felt like a real milestone.
            </p>
          </div>

          <hr className="divider" />

          {/* Press */}
          <div>
            <p className="section-label">Press</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              Featured in Northeastern Global News.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1.5rem" }}>
              After winning PawHacks, Northeastern News covered Dibs! as part of their sustainability reporting. They came to the Oakland campus and spoke to all three of us about the problem we were solving and where we wanted to take it.
            </p>
            <a href="https://news.northeastern.edu/2025/03/26/thrift-store-app-oakland/" target="_blank"
              style={{ fontSize:"0.85rem", color:"#c4698f", textDecoration:"none", borderBottom:"1px solid rgba(196,105,143,0.3)", paddingBottom:"1px" }}>
              Read the article →
            </a>
          </div>

          <hr className="divider" />

          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <a href="/#projects" style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1rem", color:"#3a3330", textDecoration:"none" }}>Back to projects</a>
            <a href="https://devpost.com/software/undecided-kpd8gw" target="_blank"
              style={{ padding:"0.8rem 1.75rem", background:"#c4698f", color:"#f0ebe0", fontSize:"0.8rem", letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none" }}>
              View on Devpost
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}