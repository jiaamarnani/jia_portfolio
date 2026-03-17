module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClearStart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/jia_portfolio-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/jia_portfolio-1/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/jia_portfolio-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function ClearStart() {
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTimeout(()=>setLoaded(true), 100);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            backgroundColor: "#f0ebe0",
            color: "#1e1a17",
            fontFamily: "'DM Sans', sans-serif",
            minHeight: "100vh"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grain",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "1.5rem 3rem",
                            zIndex: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                style: {
                                    fontFamily: "'DM Serif Display',serif",
                                    fontSize: "1.1rem",
                                    color: "#1e1a17",
                                    textDecoration: "none"
                                },
                                children: "Jia."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "2rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/#projects",
                                        className: "nav-link",
                                        children: "All Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://github.com/jiaamarnani",
                                        target: "_blank",
                                        className: "nav-link",
                                        children: "GitHub"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: "860px",
                            margin: "0 auto",
                            padding: "8rem 3rem 6rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `fade-up d1 ${loaded ? "visible" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "0.5rem",
                                            flexWrap: "wrap",
                                            marginBottom: "1.5rem"
                                        },
                                        children: [
                                            "Next.js",
                                            "TypeScript",
                                            "TailwindCSS",
                                            "PostgreSQL",
                                            "React"
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "tag",
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 89
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontFamily: "'DM Serif Display',serif",
                                            fontSize: "clamp(3rem,7vw,6rem)",
                                            fontWeight: 400,
                                            lineHeight: 1,
                                            marginBottom: "1rem"
                                        },
                                        children: [
                                            "ClearStart",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#3A7D5F",
                                                    fontStyle: "italic"
                                                },
                                                children: "."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "1.1rem",
                                            color: "#3a3330",
                                            lineHeight: 1.75,
                                            maxWidth: "580px",
                                            fontWeight: 300,
                                            marginBottom: "1rem"
                                        },
                                        children: "An acne education platform with a personalized skincare quiz. Built as a portfolio piece and a real resource for a skincare community of 64k+ on TikTok."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "0.9rem",
                                            color: "rgba(58,51,48,0.5)",
                                            lineHeight: 1.75,
                                            maxWidth: "580px",
                                            fontWeight: 300
                                        },
                                        children: "Still in progress, REST API endpoints, an AI-powered education section, and full DB integration are upcoming."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "divider"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "section-label",
                                        children: "Motivation"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'DM Serif Display',serif",
                                            fontSize: "clamp(1.6rem,3vw,2.4rem)",
                                            fontWeight: 400,
                                            marginBottom: "1.25rem"
                                        },
                                        children: "Acne is confusing. The internet makes it worse."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "1rem",
                                            color: "#3a3330",
                                            lineHeight: 1.8,
                                            fontWeight: 300,
                                            maxWidth: "640px",
                                            marginBottom: "1rem"
                                        },
                                        children: [
                                            "I spent years trying to figure out my skin. Different dermatologists gave me different routines. Reddit threads contradicted each other. I bought products that did nothing. No one was explaining the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: "why"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 214
                                            }, this),
                                            " behind any of it."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "1rem",
                                            color: "#3a3330",
                                            lineHeight: 1.8,
                                            fontWeight: 300,
                                            maxWidth: "640px"
                                        },
                                        children: [
                                            "I started a TikTok account, ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "@jlovesskincare"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 43
                                            }, this),
                                            ", to normalize acne and actually educate people. It grew to 64k+ followers. ClearStart is the extension of that, a platform that gives people a personalized starting point without the noise."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "divider"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "section-label",
                                        children: "What It Does"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'DM Serif Display',serif",
                                            fontSize: "clamp(1.6rem,3vw,2.4rem)",
                                            fontWeight: 400,
                                            marginBottom: "1.25rem"
                                        },
                                        children: "A 3-minute quiz. A personalized routine."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "1rem",
                                            color: "#3a3330",
                                            lineHeight: 1.8,
                                            fontWeight: 300,
                                            maxWidth: "640px",
                                            marginBottom: "1.5rem"
                                        },
                                        children: "Users answer questions about their skin type, acne concerns, sensitivity, current products, and budget. The quiz logic maps those answers to a personalized AM/PM routine with ingredient explanations — not just product names, but the actual reasoning behind each step."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            borderLeft: "2px solid rgba(58,125,95,0.3)",
                                            paddingLeft: "1.25rem",
                                            margin: "1.5rem 0"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "0.9rem",
                                                color: "#3a3330",
                                                lineHeight: 1.8,
                                                fontWeight: 300,
                                                fontStyle: "italic"
                                            },
                                            children: '"Evidence-based skincare education with zero brand partnerships or conflicts of interest."'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "1rem",
                                            color: "#3a3330",
                                            lineHeight: 1.8,
                                            fontWeight: 300,
                                            maxWidth: "640px"
                                        },
                                        children: [
                                            "The results page is structured with left-border accent rows, AM/PM tabs, and a ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                style: {
                                                    fontSize: "0.85rem",
                                                    background: "rgba(58,51,48,0.06)",
                                                    padding: "0.1rem 0.35rem",
                                                    borderRadius: "3px"
                                                },
                                                children: "recommendedProduct"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 94
                                            }, this),
                                            " slot on each step object, already set up for the API integration that's in progress."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "divider"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "section-label",
                                        children: "Tech Stack"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'DM Serif Display',serif",
                                            fontSize: "clamp(1.6rem,3vw,2.4rem)",
                                            fontWeight: 400,
                                            marginBottom: "1.25rem"
                                        },
                                        children: "Built for real use, designed for portfolios."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "1rem",
                                            color: "#3a3330",
                                            lineHeight: 1.8,
                                            fontWeight: 300,
                                            maxWidth: "640px",
                                            marginBottom: "1.5rem"
                                        },
                                        children: "Four pages in Next.js with TypeScript. Tailwind for layout, custom CSS for the design system. Quiz state is managed in React with typed answer objects. On the backend, a 36-product PostgreSQL database is modeled and seeded with personally tested products — REST endpoints to connect the quiz to the DB are in progress."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "0.5rem",
                                            flexWrap: "wrap",
                                            marginBottom: "0.6rem"
                                        },
                                        children: [
                                            "Next.js 14",
                                            "TypeScript",
                                            "TailwindCSS",
                                            "React",
                                            "Vercel"
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "tech-pill",
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "0.5rem",
                                            flexWrap: "wrap"
                                        },
                                        children: [
                                            "PostgreSQL",
                                            "Prisma",
                                            "Node.js"
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "tech-pill",
                                                style: {
                                                    borderColor: "rgba(58,51,48,0.2)",
                                                    color: "rgba(58,51,48,0.5)",
                                                    background: "transparent"
                                                },
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "divider"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "section-label",
                                        children: "Design Process"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'DM Serif Display',serif",
                                            fontSize: "clamp(1.6rem,3vw,2.4rem)",
                                            fontWeight: 400,
                                            marginBottom: "1.25rem"
                                        },
                                        children: "Three versions before it clicked."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "1rem",
                                            color: "#3a3330",
                                            lineHeight: 1.8,
                                            fontWeight: 300,
                                            maxWidth: "640px",
                                            marginBottom: "2rem"
                                        },
                                        children: "The first version was too personal — it leaned into my story so hard it forgot to explain what the product actually did. The second overcorrected with a dark red theme that felt clinical and off-brand. The third landed on something that felt right: cream background, light forest green, Georgia serif for headlines."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr 1fr",
                                            gap: "1rem",
                                            marginBottom: "2rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "iteration-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "iteration-label",
                                                        children: "V1 — Story-first"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: "1rem",
                                                            fontSize: "0.82rem",
                                                            color: "rgba(58,51,48,0.6)",
                                                            lineHeight: 1.7,
                                                            fontWeight: 300
                                                        },
                                                        children: "Scroll-based personal narrative. Pink accents. Buried the product. Too self-focused for a landing page."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "iteration-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "iteration-label",
                                                        children: "V2 — Dark red"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: "1rem",
                                                            fontSize: "0.82rem",
                                                            color: "rgba(58,51,48,0.6)",
                                                            lineHeight: 1.7,
                                                            fontWeight: 300
                                                        },
                                                        children: [
                                                            "Redesigned around ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                style: {
                                                                    fontSize: "0.78rem",
                                                                    background: "rgba(58,51,48,0.06)",
                                                                    padding: "0.1rem 0.3rem",
                                                                    borderRadius: "2px"
                                                                },
                                                                children: "#8b2635"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 37
                                                            }, this),
                                                            ". Quiz and results matched. Still felt wrong for a skincare product."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "iteration-card",
                                                style: {
                                                    borderColor: "rgba(58,125,95,0.3)",
                                                    background: "rgba(58,125,95,0.03)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "iteration-label",
                                                        style: {
                                                            color: "#3A7D5F",
                                                            borderBottomColor: "rgba(58,125,95,0.15)"
                                                        },
                                                        children: "V3 — Current ✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: "1rem",
                                                            fontSize: "0.82rem",
                                                            color: "rgba(58,51,48,0.6)",
                                                            lineHeight: 1.7,
                                                            fontWeight: 300
                                                        },
                                                        children: "Cream + forest green. Story moved off landing page. Landing focused on the quiz value prop."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "1rem",
                                            color: "#3a3330",
                                            lineHeight: 1.8,
                                            fontWeight: 300,
                                            maxWidth: "640px"
                                        },
                                        children: "A lot of the design decisions came down to one principle: the landing page is about the product, not me. My story is real credibility, but it lives on its own page. Recruiters and users both need to understand what ClearStart does in the first few seconds."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "divider"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "section-label",
                                        children: "Architecture"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'DM Serif Display',serif",
                                            fontSize: "clamp(1.6rem,3vw,2.4rem)",
                                            fontWeight: 400,
                                            marginBottom: "1.25rem"
                                        },
                                        children: "Four pages, one design system."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "1rem",
                                            color: "#3a3330",
                                            lineHeight: 1.8,
                                            fontWeight: 300,
                                            maxWidth: "640px",
                                            marginBottom: "1.75rem"
                                        },
                                        children: "Every page shares the same tokens — cream background, green primary, Georgia for display type, DM Sans for body. The quiz and results pages handle all the logic. The story page holds the personal context that would've cluttered the landing page."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            border: "1px solid rgba(58,51,48,0.12)",
                                            borderRadius: "6px",
                                            overflow: "hidden"
                                        },
                                        children: [
                                            {
                                                file: "page.tsx",
                                                desc: "Landing page. Hero, how-it-works, CTA. No personal story.",
                                                tag: "/"
                                            },
                                            {
                                                file: "quiz/page.tsx",
                                                desc: "6-question flow. Typed answer state. Progress indicator. Smooth transitions between questions.",
                                                tag: "/quiz"
                                            },
                                            {
                                                file: "results/page.tsx",
                                                desc: "AM/PM tab layout. Left-border step rows. Each step has a recommendedProduct slot wired to the DB.",
                                                tag: "/results"
                                            },
                                            {
                                                file: "story/page.tsx",
                                                desc: "Before/after photo placeholders. Personal journey. TikTok credibility.",
                                                tag: "/story"
                                            }
                                        ].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "flex-start",
                                                    gap: "1rem",
                                                    padding: "1rem 1.25rem",
                                                    borderBottom: i < 3 ? "1px solid rgba(58,51,48,0.08)" : "none",
                                                    background: i % 2 === 0 ? "transparent" : "rgba(58,51,48,0.01)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            minWidth: "120px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: "0.72rem",
                                                                    color: "#3A7D5F",
                                                                    fontFamily: "monospace",
                                                                    marginBottom: "0.2rem"
                                                                },
                                                                children: p.tag
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: "0.68rem",
                                                                    color: "rgba(58,51,48,0.35)",
                                                                    fontFamily: "monospace"
                                                                },
                                                                children: p.file
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                                lineNumber: 259,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.85rem",
                                                            color: "rgba(58,51,48,0.65)",
                                                            lineHeight: 1.65,
                                                            fontWeight: 300
                                                        },
                                                        children: p.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, p.file, true, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "divider"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "section-label",
                                        children: "What's Next"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'DM Serif Display',serif",
                                            fontSize: "clamp(1.6rem,3vw,2.4rem)",
                                            fontWeight: 400,
                                            marginBottom: "1.25rem"
                                        },
                                        children: "Still being built."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "1rem",
                                            color: "#3a3330",
                                            lineHeight: 1.8,
                                            fontWeight: 300,
                                            maxWidth: "640px",
                                            marginBottom: "1.75rem"
                                        },
                                        children: "The DB is modeled and seeded. The frontend is live. The gap right now is the API layer — connecting quiz outputs to actual product recommendations from the database. After that, an education section powered by an AI model to explain ingredients and routines in plain language."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            border: "1px solid rgba(58,51,48,0.12)",
                                            borderRadius: "6px",
                                            overflow: "hidden"
                                        },
                                        children: [
                                            {
                                                label: "REST API endpoints",
                                                desc: "Wire quiz inputs to the PostgreSQL DB via API routes. Transform answers into a filtered product routine server-side.",
                                                done: false
                                            },
                                            {
                                                label: "Live product recommendations",
                                                desc: "Replace the static recommendedProduct slot with real DB results — 36 personally tested products filtered by skin type and concern.",
                                                done: false
                                            },
                                            {
                                                label: "AI education section",
                                                desc: "An AI model that explains what each ingredient does and why it's in the routine. Plain language, no jargon.",
                                                done: false
                                            }
                                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "flex-start",
                                                    gap: "1rem",
                                                    padding: "1rem 1.25rem",
                                                    borderBottom: i < 2 ? "1px solid rgba(58,51,48,0.08)" : "none",
                                                    background: i % 2 === 0 ? "transparent" : "rgba(58,51,48,0.01)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "next-dot-muted",
                                                        style: {
                                                            marginTop: "6px"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: "0.82rem",
                                                                    color: "#3a3330",
                                                                    fontWeight: 400,
                                                                    marginBottom: "0.2rem"
                                                                },
                                                                children: item.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                                lineNumber: 292,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: "0.8rem",
                                                                    color: "rgba(58,51,48,0.5)",
                                                                    lineHeight: 1.65,
                                                                    fontWeight: 300
                                                                },
                                                                children: item.desc
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, item.label, true, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                                lineNumber: 285,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "divider"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "section-label",
                                        children: "Challenges"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'DM Serif Display',serif",
                                            fontSize: "clamp(1.6rem,3vw,2.4rem)",
                                            fontWeight: 400,
                                            marginBottom: "1.25rem"
                                        },
                                        children: "What actually took time."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "1rem",
                                            color: "#3a3330",
                                            lineHeight: 1.8,
                                            fontWeight: 300,
                                            maxWidth: "640px",
                                            marginBottom: "1rem"
                                        },
                                        children: "The biggest lesson wasn't technical, it was learning to fully commit to a design before touching code. Early on I kept making small tweaks mid-build: a color here, a layout change there. Every iteration bled into the next and nothing ever felt finished because I hadn't actually decided what I was building."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "1rem",
                                            color: "#3a3330",
                                            lineHeight: 1.8,
                                            fontWeight: 300,
                                            maxWidth: "640px",
                                            marginBottom: "1rem"
                                        },
                                        children: "The dark red version is a good example. I shipped it before really sitting with whether it was right. It wasn't, but by then the quiz and results pages were already built around it. Switching to green meant going back through all four pages. That rework was avoidable."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 311,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "1rem",
                                            color: "#3a3330",
                                            lineHeight: 1.8,
                                            fontWeight: 300,
                                            maxWidth: "640px"
                                        },
                                        children: "Now I don't write a line of component code until the tokens are locked: colors, type scale, spacing. It sounds obvious but it genuinely changed how fast I move. Less time refactoring, more time building things that actually matter."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "divider"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/#projects",
                                        style: {
                                            fontFamily: "'DM Serif Display',serif",
                                            fontSize: "1rem",
                                            color: "#3a3330",
                                            textDecoration: "none"
                                        },
                                        children: "Back to projects"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://github.com/jiaamarnani/clear-start",
                                        target: "_blank",
                                        style: {
                                            padding: "0.8rem 1.75rem",
                                            background: "#3A7D5F",
                                            color: "#f0ebe0",
                                            fontSize: "0.8rem",
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                            textDecoration: "none"
                                        },
                                        children: "View on GitHub"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                        lineNumber: 323,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/clearstart/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8c0fcf96._.js.map