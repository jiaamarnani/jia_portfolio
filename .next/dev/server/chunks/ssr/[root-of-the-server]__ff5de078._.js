module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dibs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/jia_portfolio-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/jia_portfolio-1/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/jia_portfolio-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Dibs() {
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
      `
            }, void 0, false, {
                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
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
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 100,
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
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://github.com/jiaamarnani",
                                        target: "_blank",
                                        className: "nav-link",
                                        children: "GitHub"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                        lineNumber: 99,
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
                                            "SwiftUI",
                                            "Xcode",
                                            "Figma",
                                            "iOS",
                                            "PawHacks 2025"
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "tag",
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                lineNumber: 112,
                                                columnNumber: 79
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 111,
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
                                            "Dibs",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#c4698f",
                                                    fontStyle: "italic"
                                                },
                                                children: "!"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "1.1rem",
                                            color: "#3a3330",
                                            lineHeight: 1.75,
                                            maxWidth: "580px",
                                            fontWeight: 300,
                                            marginBottom: "1.25rem"
                                        },
                                        children: "A peer-to-peer campus marketplace iOS app for buying and selling secondhand clothes, furniture, and dorm essentials. Built in 48 hours. Won 1st place at PawHacks 2025."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://news.northeastern.edu/2025/03/26/thrift-store-app-oakland/",
                                        target: "_blank",
                                        className: "press-badge",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "0.6rem",
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase"
                                                },
                                                children: "As seen in"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            "Northeastern Global News"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "divider"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "section-label",
                                        children: "Inspiration"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'DM Serif Display',serif",
                                            fontSize: "clamp(1.6rem,3vw,2.4rem)",
                                            fontWeight: 400,
                                            marginBottom: "1.25rem"
                                        },
                                        children: "End of semester, mountains of stuff, nowhere for it to go."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 131,
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
                                        children: "Every spring, students move out and just leave things behind — fans, vacuums, furniture, clothes. Good stuff that ends up in the trash because there's no easy way to find it or get rid of it. Our campus has a physical Reuse Depot but most students don't even know it exists."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 134,
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
                                        children: "The three of us all had different angles on it. Shreya's into app development, I love thrifting and upcycling, Minesh is into fashion. When PawHacks announced sustainability as the theme, we basically looked at each other and already knew. Dibs! is a digitized version of the Reuse Depot — except students can put prices on things, coordinate pickups, and actually know what's available before they spend money on something they could've gotten for free."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "divider"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "section-label",
                                        children: "What It Does"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'DM Serif Display',serif",
                                            fontSize: "clamp(1.6rem,3vw,2.4rem)",
                                            fontWeight: 400,
                                            marginBottom: "1.25rem"
                                        },
                                        children: "See it, like it, Dibs it."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 147,
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
                                        children: "Sellers upload photos of items they want to get rid of, set a price, and list them. Buyers browse by category, save items to a cart, and coordinate pickup — all within their campus community. It's basically Depop but locked to your university, which means you actually trust the people you're buying from."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 150,
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
                                        children: "We also integrated the Reuse Depot directly so students can see what's available there for free before spending money on something identical at Target."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "divider"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "section-label",
                                        children: "My Role"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'DM Serif Display',serif",
                                            fontSize: "clamp(1.6rem,3vw,2.4rem)",
                                            fontWeight: 400,
                                            marginBottom: "1.25rem"
                                        },
                                        children: "Frontend user flow and Figma prototyping."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 163,
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
                                        children: "I led the frontend user flow planning — mapping out the onboarding and browsing experiences in Figma before we wrote a line of SwiftUI. My background is C, not Swift, so a lot of the first day was Shreya getting Minesh and me up to speed. Once I got comfortable with the syntax things moved a lot faster."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 166,
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
                                        children: "I also drove most of the presentation strategy on Sunday. We went in with a user mindset — not showing features, but showing why someone would actually open the app the week before move-out."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "divider"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "section-label",
                                        children: "User Flow"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'DM Serif Display',serif",
                                            fontSize: "clamp(1.6rem,3vw,2.4rem)",
                                            fontWeight: 400,
                                            marginBottom: "1.25rem"
                                        },
                                        children: "Mapping it before building it."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 179,
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
                                        children: "Before touching Xcode, I mapped the two core flows — buyer and seller — so we knew exactly what screens we needed and could split the work cleanly. In a 48-hour sprint, you can't afford to figure out architecture mid-build."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            border: "1px solid rgba(58,51,48,0.12)",
                                            borderRadius: "8px",
                                            padding: "1.75rem",
                                            background: "rgba(58,51,48,0.01)",
                                            overflowX: "auto"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: "1.5rem"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.6rem",
                                                            letterSpacing: "0.15em",
                                                            textTransform: "uppercase",
                                                            color: "rgba(58,51,48,0.35)",
                                                            marginBottom: "0.75rem"
                                                        },
                                                        children: "Buyer flow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "0",
                                                            flexWrap: "nowrap"
                                                        },
                                                        children: [
                                                            {
                                                                label: "Onboarding",
                                                                accent: false
                                                            },
                                                            {
                                                                label: "Sign Up / Log In",
                                                                accent: false
                                                            },
                                                            {
                                                                label: "Browse Listings",
                                                                accent: true
                                                            },
                                                            {
                                                                label: "Item Detail",
                                                                accent: false
                                                            },
                                                            {
                                                                label: "Add to Cart",
                                                                accent: false
                                                            },
                                                            {
                                                                label: "Checkout",
                                                                accent: true
                                                            },
                                                            {
                                                                label: "Coordinate Pickup",
                                                                accent: false
                                                            }
                                                        ].map((node, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: node.accent ? "flow-node-accent" : "flow-node",
                                                                        children: node.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                                        lineNumber: 201,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    i < 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flow-arrow-h"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                                        lineNumber: 202,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    borderTop: "1px solid rgba(58,51,48,0.08)",
                                                    margin: "1.25rem 0"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: "1.5rem"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.6rem",
                                                            letterSpacing: "0.15em",
                                                            textTransform: "uppercase",
                                                            color: "rgba(58,51,48,0.35)",
                                                            marginBottom: "0.75rem"
                                                        },
                                                        children: "Seller flow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "0",
                                                            flexWrap: "nowrap"
                                                        },
                                                        children: [
                                                            {
                                                                label: "Onboarding",
                                                                accent: false
                                                            },
                                                            {
                                                                label: "Sign Up / Log In",
                                                                accent: false
                                                            },
                                                            {
                                                                label: "Create Listing",
                                                                accent: true
                                                            },
                                                            {
                                                                label: "Upload Photo",
                                                                accent: false
                                                            },
                                                            {
                                                                label: "Set Price + Details",
                                                                accent: false
                                                            },
                                                            {
                                                                label: "Listing Goes Live",
                                                                accent: true
                                                            },
                                                            {
                                                                label: "Buyer Contacts",
                                                                accent: false
                                                            }
                                                        ].map((node, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: node.accent ? "flow-node-accent" : "flow-node",
                                                                        children: node.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                                        lineNumber: 223,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    i < 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flow-arrow-h"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                                        lineNumber: 224,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                lineNumber: 210,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    borderTop: "1px solid rgba(58,51,48,0.08)",
                                                    margin: "1.25rem 0"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "0.6rem",
                                                            letterSpacing: "0.15em",
                                                            textTransform: "uppercase",
                                                            color: "rgba(58,51,48,0.35)",
                                                            marginBottom: "0.75rem"
                                                        },
                                                        children: "Reuse Depot integration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "0",
                                                            flexWrap: "nowrap"
                                                        },
                                                        children: [
                                                            {
                                                                label: "Browse Listings",
                                                                accent: false
                                                            },
                                                            {
                                                                label: "Filter: Free Items",
                                                                accent: false
                                                            },
                                                            {
                                                                label: "Reuse Depot Stock",
                                                                accent: true
                                                            },
                                                            {
                                                                label: "Campus Pickup",
                                                                accent: false
                                                            }
                                                        ].map((node, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: node.accent ? "flow-node-accent" : "flow-node",
                                                                        children: node.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                                        lineNumber: 242,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    i < 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flow-arrow-h"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                                        lineNumber: 243,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                lineNumber: 232,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "divider"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "section-label",
                                        children: "Final App"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'DM Serif Display',serif",
                                            fontSize: "clamp(1.6rem,3vw,2.4rem)",
                                            fontWeight: 400,
                                            marginBottom: "1.25rem"
                                        },
                                        children: "High-fidelity screens."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "screenshot-grid",
                                        children: [
                                            {
                                                url: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/323/790/datas/gallery.jpg",
                                                label: "Poster"
                                            },
                                            {
                                                url: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/323/796/datas/gallery.jpg",
                                                label: "Pages 1"
                                            },
                                            {
                                                url: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/323/797/datas/gallery.jpg",
                                                label: "Pages 2"
                                            }
                                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: s.url,
                                                        alt: s.label,
                                                        style: {
                                                            width: "100%",
                                                            borderRadius: "8px",
                                                            border: "1px solid rgba(58,51,48,0.1)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: "0.68rem",
                                                            color: "rgba(58,51,48,0.4)",
                                                            textAlign: "center",
                                                            marginTop: "0.4rem",
                                                            letterSpacing: "0.08em",
                                                            textTransform: "uppercase"
                                                        },
                                                        children: s.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, s.label, true, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "divider"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "section-label",
                                        children: "Tech Stack"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 277,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'DM Serif Display',serif",
                                            fontSize: "clamp(1.6rem,3vw,2.4rem)",
                                            fontWeight: 400,
                                            marginBottom: "1.25rem"
                                        },
                                        children: "New language, 48 hours, working product."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 278,
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
                                        children: "Shreya had used SwiftUI before in high school so she led that side of things while Minesh and I picked it up as we went. I had a C background which helped with the logic, but the Swift syntax and Xcode environment were new. By Saturday night it had clicked enough to actually be useful."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "0.5rem",
                                            flexWrap: "wrap"
                                        },
                                        children: [
                                            "SwiftUI",
                                            "Xcode",
                                            "GitHub",
                                            "Figma"
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "tech-pill",
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                                lineNumber: 286,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "divider"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "section-label",
                                        children: "Challenges"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'DM Serif Display',serif",
                                            fontSize: "clamp(1.6rem,3vw,2.4rem)",
                                            fontWeight: 400,
                                            marginBottom: "1.25rem"
                                        },
                                        children: "What we ran into."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 296,
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
                                        children: "File management got messy fast. As we added features, the number of SwiftUI views grew and it got hard to track what to modify for a given change. We'd update one file and something would break somewhere else. It made me realize how much actually goes into an app — it's not just the visible stuff, it's every small button and transition you'd never think about until you need it."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 299,
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
                                        children: "Doing this in a language none of us were fully fluent in, under a time crunch, was genuinely hard. We stayed up until 3am Saturday and still had to pull together a full presentation for Sunday. The fact that it worked and looked good at the end felt like a real milestone."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "divider"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "section-label",
                                        children: "Press"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 311,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'DM Serif Display',serif",
                                            fontSize: "clamp(1.6rem,3vw,2.4rem)",
                                            fontWeight: 400,
                                            marginBottom: "1.25rem"
                                        },
                                        children: "Featured in Northeastern Global News."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 312,
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
                                        children: "After winning PawHacks, Northeastern News covered Dibs! as part of their sustainability reporting. They came to the Oakland campus and spoke to all three of us about the problem we were solving and where we wanted to take it."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 315,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://news.northeastern.edu/2025/03/26/thrift-store-app-oakland/",
                                        target: "_blank",
                                        style: {
                                            fontSize: "0.85rem",
                                            color: "#c4698f",
                                            textDecoration: "none",
                                            borderBottom: "1px solid rgba(196,105,143,0.3)",
                                            paddingBottom: "1px"
                                        },
                                        children: "Read the article →"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "divider"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 324,
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
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://devpost.com/software/undecided-kpd8gw",
                                        target: "_blank",
                                        style: {
                                            padding: "0.8rem 1.75rem",
                                            background: "#c4698f",
                                            color: "#f0ebe0",
                                            fontSize: "0.8rem",
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                            textDecoration: "none"
                                        },
                                        children: "View on Devpost"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/jia_portfolio-1/app/projects/dibs/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ff5de078._.js.map