"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Live site: https://jillsylvester.com (custom theme "jill-sylvester-2026")
// Images below are pulled from the live theme directory so they always match
// what's actually shipped. If you'd rather host them locally, download them
// into /public/images/jill/ and swap the SITE constant for "/images/jill".
const SITE = "https://jillsylvester.com/wp-content/themes/jill-sylvester-2026/images";

const ACCENT = "#2C6E6B";
const ACCENT_SOFT = "rgba(44,110,107,0.3)";

const bookCovers = [
  { src: `${SITE}/cover-land-of-blue.jpg`, label: "The Land of Blue" },
  { src: `${SITE}/cover-tyi-one.jpg`, label: "Trust Your Intuition" },
  { src: `${SITE}/cover-tyi-two.jpg`, label: "TYI — Children" },
  { src: `${SITE}/cover-awakening.jpg`, label: "Awakening" },
  { src: `${SITE}/cover-pieces.jpg`, label: "Pieces" },
];

const products = [
  { src: `${SITE}/product-positive-energy-cards.jpg`, label: "Positive Energy Cards" },
  { src: `${SITE}/product-affirmations-cards.jpg`, label: "Affirmations Cards" },
  { src: `${SITE}/product-conversation-tools-sq.jpg`, label: "Conversation Tools" },
];

export default function JillSylvester() {
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

        .h2 { font-family:'DM Serif Display',serif; font-size:clamp(1.6rem,3vw,2.4rem); font-weight:400; margin-bottom:1.25rem; }
        .body { font-size:1rem; color:#3a3330; line-height:1.8; font-weight:300; max-width:640px; }
        .body + .body { margin-top:1rem; }

        .shot {
          border:1px solid rgba(58,51,48,0.12); border-radius:6px; overflow:hidden;
          background:#FAF6ED; transition:box-shadow 0.35s, transform 0.35s;
        }
        .shot:hover { box-shadow:0 16px 40px rgba(58,51,48,0.14); transform:translateY(-3px); }
        .shot img { display:block; width:100%; height:100%; object-fit:cover; }
        .shot-cap {
          font-size:0.62rem; letter-spacing:0.09em; text-transform:uppercase;
          color:rgba(58,51,48,0.4); padding:0.55rem 0.8rem; border-top:1px solid rgba(58,51,48,0.08);
        }

        .swatch { display:flex; align-items:center; gap:0.7rem; }
        .swatch-chip { width:2.1rem; height:2.1rem; border-radius:4px; border:1px solid rgba(58,51,48,0.14); flex-shrink:0; }
        .swatch-name { font-size:0.8rem; color:#3a3330; font-weight:400; }
        .swatch-hex { font-size:0.7rem; color:rgba(58,51,48,0.42); font-family:monospace; }

        .rowlist { border:1px solid rgba(58,51,48,0.12); border-radius:6px; overflow:hidden; }
        .rowlist-item { display:flex; align-items:flex-start; gap:1rem; padding:1rem 1.25rem; border-bottom:1px solid rgba(58,51,48,0.08); }
        .rowlist-item:last-child { border-bottom:none; }
        .rowlist-item:nth-child(even) { background:rgba(58,51,48,0.015); }
        .mono { font-family:monospace; font-size:0.72rem; color:${ACCENT}; }
        .mono-sub { font-family:monospace; font-size:0.68rem; color:rgba(58,51,48,0.35); }
        .item-title { font-size:0.85rem; color:#3a3330; font-weight:400; margin-bottom:0.2rem; }
        .item-desc { font-size:0.82rem; color:rgba(58,51,48,0.58); line-height:1.65; font-weight:300; }

        .tech-pill {
          font-size:0.65rem; letter-spacing:0.06em; color:${ACCENT};
          padding:0.25rem 0.7rem; border:1px solid ${ACCENT_SOFT};
          border-radius:999px; background:rgba(44,110,107,0.05);
        }

        .pull {
          border-left:2px solid ${ACCENT}; padding:0.4rem 0 0.4rem 1.25rem;
          font-family:'DM Serif Display',serif; font-size:1.15rem; line-height:1.6;
          color:#1e1a17; max-width:600px;
        }

        .stat-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1rem; }
        .stat { border:1px solid rgba(58,51,48,0.12); border-radius:6px; padding:1.1rem 1rem; background:rgba(58,51,48,0.015); }
        .stat-num { font-family:'DM Serif Display',serif; font-size:1.9rem; color:${ACCENT}; line-height:1; margin-bottom:0.35rem; }
        .stat-lab { font-size:0.68rem; letter-spacing:0.08em; text-transform:uppercase; color:rgba(58,51,48,0.45); line-height:1.5; }

        @media (max-width: 720px) {
          .stat-grid { grid-template-columns:1fr 1fr; }
        }
      `}</style>

      <div className="grain">

        <nav style={{ position:"fixed", top:0, left:0, right:0, display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1.5rem 3rem", zIndex:10 }}>
          <Link href="/" style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1.1rem", color:"#1e1a17", textDecoration:"none" }}>Jia.</Link>
          <div style={{ display:"flex", gap:"2rem" }}>
            <a href="/#projects" className="nav-link">All Projects</a>
            <a href="https://jillsylvester.com" target="_blank" className="nav-link">Live Site</a>
          </div>
        </nav>

        <div style={{ maxWidth:"860px", margin:"0 auto", padding:"8rem 3rem 6rem" }}>

          {/* Hero */}
          <div className={`fade-up d1 ${loaded ? "visible" : ""}`}>
            <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap", marginBottom:"1.5rem" }}>
              {["WordPress", "PHP", "Custom Theme", "ACF", "JavaScript", "Figma"].map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <h1 style={{ fontFamily:"'DM Serif Display',serif", fontSize:"clamp(2.6rem,6vw,5rem)", fontWeight:400, lineHeight:1.02, marginBottom:"1rem" }}>
              Jill Sylvester<span style={{ color:ACCENT, fontStyle:"italic" }}>.</span>
            </h1>
            <p style={{ fontSize:"1.1rem", color:"#3a3330", lineHeight:1.75, maxWidth:"600px", fontWeight:300, marginBottom:"1rem" }}>
              A full site rebuild for an award-winning author, licensed mental health counselor, and podcast host — replacing a page-builder theme with a custom WordPress theme she can still edit herself.
            </p>
            <p style={{ fontSize:"0.9rem", color:"rgba(58,51,48,0.5)", lineHeight:1.75, maxWidth:"600px", fontWeight:300 }}>
              My first paid client project. Shipped and live at{" "}
              <a href="https://jillsylvester.com" target="_blank" style={{ color:ACCENT, textDecoration:"none", borderBottom:`1px solid ${ACCENT_SOFT}` }}>jillsylvester.com</a>.
            </p>
          </div>

          <hr className="divider" />

          {/* Snapshot */}
          <div className="stat-grid">
            <div className="stat">
              <div className="stat-num">6</div>
              <div className="stat-lab">Pages rebuilt from scratch</div>
            </div>
            <div className="stat">
              <div className="stat-num">4</div>
              <div className="stat-lab">Custom post types</div>
            </div>
            <div className="stat">
              <div className="stat-num">0</div>
              <div className="stat-lab">Page-builder plugins</div>
            </div>
            <div className="stat">
              <div className="stat-num">1</div>
              <div className="stat-lab">Client, editing on her own</div>
            </div>
          </div>

          <hr className="divider" />

          {/* The client */}
          <div>
            <p className="section-label">The Client</p>
            <h2 className="h2">An author whose site was working against her.</h2>
            <p className="body">
              Jill is a licensed mental health counselor with 20+ years of clinical experience, the author of the Nautilus Award-winning <em>Trust Your Intuition</em> series and the Mom&rsquo;s Choice Award-winning novel <em>The Land of Blue</em>, and the host of the <em>Trust Your Intuition</em> podcast. She also sells a line of card decks for parents and teachers.
            </p>
            <p className="body">
              All of that lived on a site built years earlier on a heavy commercial theme with a drag-and-drop page builder layered on top. The content was good. Everything around it — load time, layout on phones, the contact page, even the search result snippets on Google — was quietly undercutting it.
            </p>

            <div style={{ marginTop:"2rem" }}>
              <div className="rowlist">
                {[
                  { t:"Page-builder bloat", d:"Every page carried the weight of a commercial theme plus a builder plugin — shortcode-wrapped markup, stacked stylesheets, and layout that fell apart at small widths." },
                  { t:"A contact page that barely worked", d:"Contact was a bare mailto: link. No form, no confirmation, nothing that read as a real invitation to reach out — on the site of a working counselor." },
                  { t:"Shortcodes leaking into Google", d:"Stale SEO fields still held raw page-builder shortcodes, so the descriptions shown in search results were partly code." },
                  { t:"Editorial dependency", d:"Routine updates — a new appearance, a new product — meant wrestling the builder or asking a developer. So they mostly didn't happen." },
                ].map(x => (
                  <div className="rowlist-item" key={x.t}>
                    <div style={{ width:"6px", height:"6px", borderRadius:"999px", background:ACCENT_SOFT, marginTop:"8px", flexShrink:0 }} />
                    <div>
                      <div className="item-title">{x.t}</div>
                      <div className="item-desc">{x.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr className="divider" />

          {/* The pivot */}
          <div>
            <p className="section-label">The Decision</p>
            <h2 className="h2">I built it static first. Then I went back to WordPress.</h2>
            <p className="body">
              My first instinct was to get off WordPress entirely. I mocked the whole site up as a single HTML file, then rebuilt it in Eleventy on Netlify. It was fast, clean, and version-controlled — and I was proud of it.
            </p>
            <p className="body">
              It was also the wrong answer for this client. Jill writes a weekly blog. She adds appearances, swaps buy links, updates products. A static build meant every one of those edits routed through me, forever. I&rsquo;d optimized for the metric I cared about and ignored the one she did.
            </p>

            <div className="pull" style={{ margin:"2rem 0" }}>
              The performance problem was never WordPress. It was the page builder sitting on top of it.
            </div>

            <p className="body">
              So I threw the static build away and wrote a standalone WordPress theme instead — no parent theme, no builder, no inherited CSS. Hand-written templates, and the admin experience she already knows how to use. She keeps her workflow; the site loses the weight.
            </p>
          </div>

          <hr className="divider" />

          {/* Design */}
          <div>
            <p className="section-label">Design</p>
            <h2 className="h2">Quiet, warm, and built to be read.</h2>
            <p className="body" style={{ marginBottom:"1.75rem" }}>
              Jill&rsquo;s work is about being seen rather than diagnosed and dismissed. The design had to feel like that — unclinical, unhurried, closer to a good paperback than a wellness landing page. Warm sand ground, a single cerulean accent for actions, and EB Garamond for display type so the books feel like books.
            </p>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1.25rem 2rem", marginBottom:"2rem" }}>
              {[
                { name:"Sand — page ground", hex:"#FAF6ED" },
                { name:"Cerulean — accent & actions", hex:"#3FA1DB" },
                { name:"Ink — body copy", hex:"#3A3330" },
                { name:"Rule — hairlines & borders", hex:"#E4DED0" },
              ].map(s => (
                <div className="swatch" key={s.hex}>
                  <div className="swatch-chip" style={{ background:s.hex }} />
                  <div>
                    <div className="swatch-name">{s.name}</div>
                    <div className="swatch-hex">{s.hex}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap", marginBottom:"2.5rem" }}>
              {["EB Garamond — display", "System sans — UI & body", "Max 68ch measure", "4/3 & 2/3 image ratios"].map(t => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>

            {/* Real assets from the live theme */}
            <div style={{ display:"grid", gridTemplateColumns:"2fr 3fr", gap:"1rem", marginBottom:"1rem" }}>
              <div className="shot">
                <div style={{ aspectRatio:"3/4" }}>
                  <img src={`${SITE}/jill-portrait.jpg`} alt="Jill Sylvester outdoors at sunset, holding a mug on a gravel path beside a marsh" />
                </div>
                <div className="shot-cap">Home — hero portrait</div>
              </div>
              <div className="shot">
                <div style={{ aspectRatio:"1/1" }}>
                  <img src={`${SITE}/podcast-cover.jpg`} alt="Trust Your Intuition: The Podcast cover art" />
                </div>
                <div className="shot-cap">TYI Podcast — cover art</div>
              </div>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:"0.75rem", marginBottom:"1rem" }}>
              {bookCovers.map(b => (
                <div className="shot" key={b.src}>
                  <div style={{ aspectRatio:"2/3" }}>
                    <img src={b.src} alt={b.label} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"0.75rem" }}>
              {products.map(p => (
                <div className="shot" key={p.src}>
                  <div style={{ aspectRatio:"4/3" }}>
                    <img src={p.src} alt={p.label} />
                  </div>
                  <div className="shot-cap">{p.label}</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize:"0.72rem", color:"rgba(58,51,48,0.35)", marginTop:"0.9rem", fontWeight:300 }}>
              Assets served live from jillsylvester.com. Book covers and product photography are Jill&rsquo;s; card illustrations by Michelle Sylvester.
            </p>
          </div>

          <hr className="divider" />

          {/* Architecture */}
          <div>
            <p className="section-label">Architecture</p>
            <h2 className="h2">Six pages, four content types, one theme.</h2>
            <p className="body" style={{ marginBottom:"1.75rem" }}>
              Everything Jill updates regularly is a custom post type with its own fields, so editing a book or an appearance is a form — not a layout puzzle. Templates are hand-written PHP against those fields, which means the markup on the page is the markup I wrote.
            </p>

            <div className="rowlist" style={{ marginBottom:"2rem" }}>
              {[
                { tag:"/", file:"front-page.php", desc:"Hero portrait, intro, newsletter signup, featured book, cover carousel, podcast block." },
                { tag:"/books", file:"page-books.php", desc:"Books CPT — cover, blurb, awards, reader reviews, and per-retailer buy links." },
                { tag:"/store", file:"page-store.php", desc:"Products CPT — boxed sets via PayPal, digital downloads via iSell, companion packets." },
                { tag:"/podcast", file:"page-podcast.php", desc:"Cover art plus platform links: Apple, Spotify, Buzzsprout, iHeartRadio." },
                { tag:"/media", file:"page-media.php", desc:"Appearances and Awards CPTs — press features, talks, and award wins." },
                { tag:"/contact", file:"page-contact.php", desc:"Contact Form 7 form replacing the old mailto: link, with validation and confirmation." },
              ].map(p => (
                <div className="rowlist-item" key={p.file}>
                  <div style={{ minWidth:"130px" }}>
                    <div className="mono">{p.tag}</div>
                    <div className="mono-sub">{p.file}</div>
                  </div>
                  <div className="item-desc">{p.desc}</div>
                </div>
              ))}
            </div>

            <div className="rowlist">
              {[
                { t:"Version-aware seeder", d:"inc/seed.php builds pages, menus, and starter content on first activation — non-destructive, so it never overwrites anything Jill has saved. Later content corrections ship as targeted one-time migrations keyed to a theme version." },
                { t:"ACF on the free tier", d:"All field groups defined in code in inc/fields.php. No paid add-ons, no fields locked behind a license the client would have to keep renewing." },
                { t:"Environment-agnostic store links", d:"iSell product links are stored relative and resolved through a jsy_link_url() helper, so staging and production both work without anyone editing URLs at cutover." },
                { t:"Third-party SMTP relay", d:"The host blocks outbound mail, so form delivery routes through an external SMTP service with domain verification — otherwise the new contact form would fail silently." },
              ].map(x => (
                <div className="rowlist-item" key={x.t}>
                  <div style={{ width:"6px", height:"6px", borderRadius:"999px", background:ACCENT, marginTop:"8px", flexShrink:0 }} />
                  <div>
                    <div className="item-title">{x.t}</div>
                    <div className="item-desc">{x.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="divider" />

          {/* Launch */}
          <div>
            <p className="section-label">Launch</p>
            <h2 className="h2">The part with no undo button.</h2>
            <p className="body">
              Cutover was the only step in this project that could break something Jill depends on. Her email runs on the same domain as her site, and a careless DNS edit takes down her inbox along with everything else.
            </p>
            <p className="body">
              So the cutover was deliberately narrow: change the A record and the www CNAME, leave MX records completely alone, and keep the old host paid and running for about a month afterward in case anything needed to be recovered. Store links were already relative, so nothing had to be rewritten by hand on switch day.
            </p>
          </div>

          <hr className="divider" />

          {/* Lessons */}
          <div>
            <p className="section-label">What I Took From It</p>
            <h2 className="h2">Handing it off is part of the build.</h2>
            <p className="body">
              The strongest technical decision I made on this project was the one that looked like a step backwards. Deleting a working static build to go back to WordPress felt like losing ground, but the goal was never the fastest possible site — it was a site Jill could run without me. Those are different problems, and I&rsquo;d been solving the wrong one.
            </p>
            <p className="body">
              The seeder taught me the other half of that lesson. Because it skips content that already exists, every later fix had to ship as an explicit, versioned migration instead of a re-seed. Slightly more work up front, and the reason no edit of Jill&rsquo;s has ever been overwritten by a theme update.
            </p>
            <p className="body">
              And the thing I didn&rsquo;t expect to matter most: nothing goes on her site that she hasn&rsquo;t confirmed. Anything I couldn&rsquo;t verify — a download figure, an award category, a review attribution — got parked as a comment for her to approve rather than published because it sounded good. It&rsquo;s her name on the page.
            </p>
          </div>

          <hr className="divider" />

          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", gap:"1rem", flexWrap:"wrap" }}>
            <a href="/#projects" style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1rem", color:"#3a3330", textDecoration:"none" }}>Back to projects</a>
            <a href="https://jillsylvester.com" target="_blank"
              style={{ padding:"0.8rem 1.75rem", background:ACCENT, color:"#f0ebe0", fontSize:"0.8rem", letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none" }}>
              Visit the live site
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}
