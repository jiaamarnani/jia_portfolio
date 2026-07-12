"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ADHDClassifier() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  const ACCENT = "#5B4B8A";
  const ACCENT_SOFT = "rgba(91,75,138,0.3)";

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
          background: rgba(91,75,138,0.05);
          border-radius: 6px;
          padding: 1rem 1.25rem;
          font-size: 0.85rem;
          color: rgba(58,51,48,0.75);
          line-height: 1.7;
          font-weight: 300;
        }

        .pipeline-step {
          display:flex; align-items:flex-start; gap:1rem; padding:1rem 1.25rem;
        }
        .step-num {
          font-family:'DM Serif Display',serif; font-size:1rem; color:${ACCENT}; min-width:1.75rem; padding-top:1px;
        }

        .team-pill {
          font-size: 0.72rem;
          color: rgba(58,51,48,0.6);
          padding: 0.35rem 0.85rem;
          border: 1px solid rgba(58,51,48,0.15);
          border-radius: 999px;
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
              {["Python", "PyTorch", "LSTM", "scikit-learn"].map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <h1 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(3rem,7vw,6rem)", fontWeight:400, lineHeight:1, marginBottom:"1rem" }}>
              ADHD Classifier<span style={{ color:ACCENT, fontStyle:"italic" }}>.</span>
            </h1>
            <p style={{ fontSize:"1.1rem", color:"#3a3330", lineHeight:1.75, maxWidth:"580px", fontWeight:300, marginBottom:"1.5rem" }}>
              An LSTM model trained on the ADHD-200 dataset to classify ADHD from behavioral and phenotypic data.
            </p>

            <div className="status-banner">
              <strong style={{ color:"#1e1a17", fontWeight:500 }}>Context:</strong> built for CS4100 (Artificial Intelligence) with a team of four. Included here to show ML work outside the web/mobile stack — sequence modeling, feature engineering, and working with a real, messy clinical dataset.
            </div>
          </div>

          <hr className="divider" />

          {/* Team */}
          <div className={`fade-up ${loaded ? "visible" : ""}`}>
            <p className="section-label">Team</p>
            <div style={{ display:"flex", gap:"0.6rem", flexWrap:"wrap" }}>
              {["Jia Amarnani", "Shreya Nanda", "Komal Jain", "Gregory Mackin"].map(n => (
                <span key={n} className="team-pill">{n}</span>
              ))}
            </div>
          </div>

          <hr className="divider" />

          {/* Motivation */}
          <div className={`fade-up ${loaded ? "visible" : ""}`}>
            <p className="section-label">Motivation</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              ADHD isn't a single signal.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1rem" }}>
              The ADHD-200 dataset combines behavioral scores with phenotypic data — age, sex, handedness, IQ measures — across multiple imaging sites. That mix is what made the problem interesting: no single feature cleanly separates ADHD from non-ADHD cases, and the signal that matters can shift depending on which site collected the data.
            </p>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px" }}>
              We framed it as a sequence problem — treating a subject's combined behavioral and phenotypic features as an input sequence for an LSTM, rather than a single flat feature vector for a standard classifier.
            </p>
          </div>

          <hr className="divider" />

          {/* Pipeline */}
          <div className={`fade-up ${loaded ? "visible" : ""}`}>
            <p className="section-label">Approach</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              From raw scores to a trained model.
            </h2>

            <div style={{ border:"1px solid rgba(58,51,48,0.12)", borderRadius:"6px", overflow:"hidden" }}>
              {[
                { label:"Data cleaning", desc:"Handled missing phenotypic fields and inconsistent site-level formatting across the ADHD-200 subsets before anything else." },
                { label:"Feature engineering", desc:"Combined behavioral scores with phenotypic variables (age, sex, handedness, IQ) into a structured input representation." },
                { label:"LSTM architecture", desc:"Built and tuned a PyTorch LSTM to treat each subject's combined features as a sequence rather than a flat vector." },
                { label:"Evaluation", desc:"Compared against baseline classifiers to check whether the sequence framing actually earned its complexity." },
              ].map((s, i) => (
                <div key={s.label} className="pipeline-step" style={{
                  borderBottom: i < 3 ? "1px solid rgba(58,51,48,0.08)" : "none",
                  background: i % 2 === 0 ? "transparent" : "rgba(58,51,48,0.01)"
                }}>
                  <div className="step-num">{String(i+1).padStart(2,"0")}</div>
                  <div>
                    <div style={{ fontSize:"0.85rem", color:"#1e1a17", fontWeight:500, marginBottom:"0.25rem" }}>{s.label}</div>
                    <div style={{ fontSize:"0.85rem", color:"rgba(58,51,48,0.6)", lineHeight:1.65, fontWeight:300 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="divider" />

          {/* Challenges / Limitations */}
          <div className={`fade-up ${loaded ? "visible" : ""}`}>
            <p className="section-label">Limitations</p>
            <h2 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, marginBottom:"1.25rem" }}>
              What a classroom project can't fix.
            </h2>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px", marginBottom:"1rem" }}>
              The dataset's site-to-site variability was the hardest thing to fully account for in a semester-length project — a model that performs well on one imaging site's data doesn't automatically generalize to another. We treated this as an open limitation rather than something to paper over.
            </p>
            <p style={{ fontSize:"1rem", color:"#3a3330", lineHeight:1.8, fontWeight:300, maxWidth:"640px" }}>
              This was academic coursework, not a clinical tool — the goal was to practice sequence modeling on a genuinely hard, real-world dataset, not to produce something diagnostic.
            </p>
          </div>

          <hr className="divider" />

          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <a href="/#projects" style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1rem", color:"#3a3330", textDecoration:"none" }}>Back to projects</a>
            <a href="https://github.com/jiaamarnani" target="_blank"
              style={{ padding:"0.8rem 1.75rem", background:ACCENT, color:"#f0ebe0", fontSize:"0.8rem", letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none" }}>
              View on GitHub
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}
