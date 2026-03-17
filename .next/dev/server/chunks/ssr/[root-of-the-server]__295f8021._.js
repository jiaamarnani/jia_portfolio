module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/jia_portfolio-1/app/components/TextType.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/jia_portfolio-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/jia_portfolio-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/jia_portfolio-1/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
const TextType = ({ text, as: Component = 'div', typingSpeed = 50, initialDelay = 0, pauseDuration = 2000, deletingSpeed = 30, loop = true, className = '', showCursor = true, hideCursorWhileTyping = false, cursorCharacter = '|', cursorClassName = '', cursorBlinkDuration = 0.5, textColors = [], variableSpeed, onSentenceComplete, startOnVisible = false, reverseMode = false, ...props })=>{
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentCharIndex, setCurrentCharIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTextIndex, setCurrentTextIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!startOnVisible);
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.isArray(text) ? text : [
            text
        ], [
        text
    ]);
    const getRandomSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!variableSpeed) return typingSpeed;
        const { min, max } = variableSpeed;
        return Math.random() * (max - min) + min;
    }, [
        variableSpeed,
        typingSpeed
    ]);
    const getCurrentTextColor = ()=>{
        if (textColors.length === 0) return 'inherit';
        return textColors[currentTextIndex % textColors.length];
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!startOnVisible || !containerRef.current) return;
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        }, {
            threshold: 0.1
        });
        observer.observe(containerRef.current);
        return ()=>observer.disconnect();
    }, [
        startOnVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (showCursor && cursorRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(cursorRef.current, {
                opacity: 1
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(cursorRef.current, {
                opacity: 0,
                duration: cursorBlinkDuration,
                repeat: -1,
                yoyo: true,
                ease: 'power2.inOut'
            });
        }
    }, [
        showCursor,
        cursorBlinkDuration
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isVisible) return;
        let timeout;
        const currentText = textArray[currentTextIndex];
        const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;
        const executeTypingAnimation = ()=>{
            if (isDeleting) {
                if (displayedText === '') {
                    setIsDeleting(false);
                    if (currentTextIndex === textArray.length - 1 && !loop) {
                        return;
                    }
                    if (onSentenceComplete) {
                        onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
                    }
                    setCurrentTextIndex((prev)=>(prev + 1) % textArray.length);
                    setCurrentCharIndex(0);
                    timeout = setTimeout(()=>{}, pauseDuration);
                } else {
                    timeout = setTimeout(()=>{
                        setDisplayedText((prev)=>prev.slice(0, -1));
                    }, deletingSpeed);
                }
            } else {
                if (currentCharIndex < processedText.length) {
                    timeout = setTimeout(()=>{
                        setDisplayedText((prev)=>prev + processedText[currentCharIndex]);
                        setCurrentCharIndex((prev)=>prev + 1);
                    }, variableSpeed ? getRandomSpeed() : typingSpeed);
                } else if (textArray.length >= 1) {
                    if (!loop && currentTextIndex === textArray.length - 1) return;
                    timeout = setTimeout(()=>{
                        setIsDeleting(true);
                    }, pauseDuration);
                }
            }
        };
        if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
            timeout = setTimeout(executeTypingAnimation, initialDelay);
        } else {
            executeTypingAnimation();
        }
        return ()=>clearTimeout(timeout);
    }, [
        currentCharIndex,
        displayedText,
        isDeleting,
        typingSpeed,
        deletingSpeed,
        pauseDuration,
        textArray,
        currentTextIndex,
        loop,
        initialDelay,
        isVisible,
        reverseMode,
        variableSpeed,
        onSentenceComplete
    ]);
    const shouldHideCursor = hideCursorWhileTyping && (currentCharIndex < textArray[currentTextIndex].length || isDeleting);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(Component, {
        ref: containerRef,
        className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
        ...props
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline",
        style: {
            color: getCurrentTextColor() || 'inherit'
        },
        children: displayedText
    }, void 0, false, {
        fileName: "[project]/Desktop/jia_portfolio-1/app/components/TextType.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)), showCursor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: cursorRef,
        className: `ml-1 inline-block opacity-100 ${shouldHideCursor ? 'hidden' : ''} ${cursorClassName}`,
        children: cursorCharacter
    }, void 0, false, {
        fileName: "[project]/Desktop/jia_portfolio-1/app/components/TextType.tsx",
        lineNumber: 184,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0)));
};
const __TURBOPACK__default__export__ = TextType;
}),
"[project]/Desktop/jia_portfolio-1/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/jia_portfolio-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/jia_portfolio-1/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/jia_portfolio-1/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/jia_portfolio-1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$app$2f$components$2f$TextType$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/jia_portfolio-1/app/components/TextType.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const skills = [
    "Next.js",
    "TypeScript",
    "React",
    "PostgreSQL",
    "Python",
    "Swift",
    "Node.js",
    "Tailwind CSS",
    "Figma",
    "Java",
    "Git",
    "Prisma"
];
const projects = [
    {
        slug: "clearstart",
        title: "ClearStart",
        badge: "Live",
        desc: "Full-stack skincare web app that translates acne concerns into personalized AM/PM routines through an interactive quiz.",
        tags: [
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Tailwind",
            "Figma",
            "Vercel"
        ],
        date: "Jan 2026 — Present",
        image: "/images/clearstart.png",
        portrait: false
    },
    {
        slug: "little-fridge",
        title: "little fridge",
        badge: "Hackathon Honorable Mention",
        desc: "Smart shared fridge inventory iOS app that transforms your fridge into a shared digital inventory, simplifying the act of grocery shopping.",
        tags: [
            "SwiftUI",
            "Supabase",
            "Figma",
            "iOS",
            "Procreate"
        ],
        date: "Mar 2025",
        image: "/images/littleFridgeCover.jpeg",
        portrait: true
    },
    {
        slug: "dibs",
        title: "Dibs!",
        badge: "PawHacks Winner",
        desc: "Peer-to-peer campus marketplace enabling students to buy, sell, and donate items, reducing college waste.",
        tags: [
            "SwiftUI",
            "Figma",
            "iOS"
        ],
        date: "Mar 2025",
        image: "/images/dibs.png",
        portrait: true
    },
    {
        slug: "road-racer",
        title: "Road Racer",
        badge: null,
        desc: "Unity-based 2D racing game built in C# with sprite animation, collision detection, and core gameplay mechanics — developed collaboratively over a semester.",
        tags: [
            "Unity",
            "C#",
            "Game Dev"
        ],
        date: "Feb — May 2024",
        image: "/images/roadracer.png",
        portrait: false
    }
];
function MagneticButton({ children, className, style, href, download, onMouseEnter, onMouseLeave }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMouseMove = (e)=>{
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };
    const handleMouseLeave = (e)=>{
        const el = ref.current;
        if (!el) return;
        el.style.transform = `translate(0, 0)`;
        onMouseLeave?.(e);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        ref: ref,
        href: href,
        download: download,
        className: className,
        style: {
            ...style,
            transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1), opacity 0.3s, color 0.3s, border-color 0.3s"
        },
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        onMouseEnter: onMouseEnter,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
function ProjectRow({ p, i }) {
    const [vis, setVis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const obs = new IntersectionObserver(([e])=>{
            if (e.isIntersecting) setVis(true);
        }, {
            threshold: 0.15
        });
        if (ref.current) obs.observe(ref.current);
        return ()=>obs.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        href: `/projects/${p.slug}`,
        className: `project-row ${vis ? "visible" : ""}`,
        style: {
            transitionDelay: `${i * 0.08}s`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row-image",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `row-img-wrap ${p.portrait ? "portrait" : ""}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: p.image,
                        alt: p.title,
                        fill: true,
                        className: "object-cover"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "row-title",
                                children: p.title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            p.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "proj-badge",
                                children: p.badge
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                lineNumber: 99,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "row-desc",
                        children: p.desc
                    }, void 0, false, {
                        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "proj-tags",
                        children: p.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "proj-tag",
                                children: t
                            }, t, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                lineNumber: 103,
                                columnNumber: 28
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row-footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "row-date",
                                children: p.date
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "learn-more",
                                children: [
                                    "Learn more ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "learn-arrow",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 51
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
function Home() {
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredLetter, setHoveredLetter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const mousePos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTimeout(()=>setLoaded(true), 100);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const dots = [];
        const count = 10;
        for(let i = 0; i < count; i++){
            const dot = document.createElement("div");
            const size = 5 - i * 0.3;
            dot.style.cssText = `position:fixed;pointer-events:none;z-index:9999;width:${size}px;height:${size}px;border-radius:50%;background:#8b2635;opacity:0;transform:translate(-50%,-50%);transition:opacity 0.3s;`;
            document.body.appendChild(dot);
            dots.push(dot);
        }
        const positions = Array(count).fill({
            x: 0,
            y: 0
        });
        const onMove = (e)=>{
            mousePos.current = {
                x: e.clientX,
                y: e.clientY
            };
        };
        let frame;
        const animate = ()=>{
            positions[0] = {
                ...mousePos.current
            };
            for(let i = 1; i < count; i++){
                positions[i] = {
                    x: positions[i].x + (positions[i - 1].x - positions[i].x) * 0.35,
                    y: positions[i].y + (positions[i - 1].y - positions[i].y) * 0.35
                };
            }
            dots.forEach((dot, i)=>{
                dot.style.left = positions[i].x + "px";
                dot.style.top = positions[i].y + "px";
                dot.style.opacity = String(0.18 - i * 0.015);
            });
            frame = requestAnimationFrame(animate);
        };
        animate();
        window.addEventListener("mousemove", onMove);
        return ()=>{
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(frame);
            dots.forEach((d)=>d.remove());
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative overflow-x-hidden",
        style: {
            backgroundColor: "#f0ebe0",
            color: "#1e1a17",
            fontFamily: "'DM Sans', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grain",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "fixed top-0 left-0 right-0 flex justify-end items-center z-10",
                        style: {
                            padding: "1.5rem 3rem"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex gap-8 list-none",
                            children: [
                                "Projects",
                                "About",
                                "Contact"
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: item === "Projects" ? "#projects" : `/${item.toLowerCase()}`,
                                        className: "nav-link",
                                        children: item
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 17
                                    }, this)
                                }, item, false, {
                                    fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "grid grid-cols-2 h-screen",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col justify-center",
                                style: {
                                    padding: "0 2rem 0 10rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `eyebrow fade-up delay-1 ${loaded ? "visible" : ""} flex items-center uppercase mb-2`,
                                        style: {
                                            fontSize: "0.78rem",
                                            letterSpacing: "0.22em",
                                            color: "#8b2635"
                                        },
                                        children: "Full-Stack Engineer"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `fade-up delay-2 ${loaded ? "visible" : ""}`,
                                        style: {
                                            fontFamily: "'DM Serif Display', serif",
                                            fontSize: "clamp(6rem, 12vw, 12rem)",
                                            lineHeight: 0.88,
                                            fontWeight: 400,
                                            letterSpacing: "-0.02em",
                                            marginBottom: "1.5rem",
                                            display: "flex"
                                        },
                                        children: [
                                            [
                                                "J",
                                                "i",
                                                "a"
                                            ].map((letter, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    onMouseEnter: ()=>setHoveredLetter(i),
                                                    onMouseLeave: ()=>setHoveredLetter(null),
                                                    style: {
                                                        display: "inline-block",
                                                        color: hoveredLetter === i ? "#8b2635" : "#1e1a17",
                                                        transform: hoveredLetter === i ? i === 0 ? "rotate(-8deg) translateY(-6px)" : i === 1 ? "rotate(6deg) translateY(-10px) scale(1.1)" : "rotate(-4deg) translateY(-6px)" : "none",
                                                        transition: "transform 0.25s cubic-bezier(0.23,1,0.32,1), color 0.2s",
                                                        cursor: "default"
                                                    },
                                                    children: letter
                                                }, i, false, {
                                                    fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 17
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                onMouseEnter: ()=>setHoveredLetter(3),
                                                onMouseLeave: ()=>setHoveredLetter(null),
                                                style: {
                                                    display: "inline-block",
                                                    color: "#8b2635",
                                                    fontStyle: "italic",
                                                    transform: hoveredLetter === 3 ? "scale(1.4) translateY(-4px)" : "none",
                                                    transition: "transform 0.25s cubic-bezier(0.23,1,0.32,1)",
                                                    cursor: "default"
                                                },
                                                children: "."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                                lineNumber: 281,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `fade-up delay-3 ${loaded ? "visible" : ""}`,
                                        style: {
                                            fontSize: "1rem",
                                            color: "#3a3330",
                                            lineHeight: 1.75,
                                            maxWidth: "360px",
                                            fontWeight: 300,
                                            marginBottom: "2.5rem",
                                            minHeight: "3.5rem"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$app$2f$components$2f$TextType$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            text: "I build products focusing on the details that make software welcoming, efficient, and usable!",
                                            typingSpeed: 35,
                                            initialDelay: 900,
                                            showCursor: true,
                                            cursorCharacter: "|",
                                            cursorClassName: "text-[#8b2635] opacity-70",
                                            loop: false
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                            lineNumber: 288,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                        lineNumber: 286,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `fade-up delay-4 ${loaded ? "visible" : ""} flex items-center gap-6`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MagneticButton, {
                                                href: "#projects",
                                                className: "no-underline uppercase",
                                                style: {
                                                    display: "inline-block",
                                                    padding: "0.8rem 1.75rem",
                                                    background: "#8b2635",
                                                    color: "#f0ebe0",
                                                    fontSize: "0.8rem",
                                                    letterSpacing: "0.1em"
                                                },
                                                children: "Projects"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                                lineNumber: 295,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MagneticButton, {
                                                href: "/resume.pdf",
                                                download: true,
                                                className: "no-underline uppercase",
                                                style: {
                                                    color: "#3a3330",
                                                    fontSize: "0.8rem",
                                                    letterSpacing: "0.1em",
                                                    borderBottom: "1px solid #3a3330",
                                                    paddingBottom: "2px"
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.color = "#1e1a17";
                                                    e.currentTarget.style.borderColor = "#1e1a17";
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.color = "#3a3330";
                                                    e.currentTarget.style.borderColor = "#3a3330";
                                                },
                                                children: "↓ Resume"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                                lineNumber: 299,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-4",
                                style: {
                                    padding: "0 3rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `pills-col float-a pills-fade pills-delay-1 ${loaded ? "visible" : ""}`,
                                        children: skills.slice(0, 4).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pill",
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                                lineNumber: 311,
                                                columnNumber: 44
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `pills-col float-b pills-fade pills-delay-2 ${loaded ? "visible" : ""}`,
                                        style: {
                                            marginTop: "2rem"
                                        },
                                        children: skills.slice(4, 8).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pill",
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                                lineNumber: 314,
                                                columnNumber: 44
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `pills-col float-c pills-fade pills-delay-3 ${loaded ? "visible" : ""}`,
                                        style: {
                                            marginTop: "-1.5rem"
                                        },
                                        children: skills.slice(8).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pill",
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                                lineNumber: 317,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                        lineNumber: 316,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#projects",
                        className: `view-work ${scrolled ? "hidden" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "0.7rem",
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    color: "#3a3330"
                                },
                                children: "View my work"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "3px"
                                },
                                children: [
                                    [
                                        0.3,
                                        0.6,
                                        1
                                    ].map((op, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "3px",
                                                height: "3px",
                                                borderRadius: "50%",
                                                background: "#8b2635",
                                                opacity: op
                                            }
                                        }, i, false, {
                                            fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "12px",
                                            height: "12px",
                                            borderRight: "1.5px solid #8b2635",
                                            borderBottom: "1.5px solid #8b2635",
                                            transform: "rotate(45deg)",
                                            marginTop: "2px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "projects",
                        style: {
                            maxWidth: "1050px",
                            margin: "0 auto",
                            padding: "4rem 3rem 6rem"
                        },
                        children: projects.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jia_portfolio$2d$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectRow, {
                                p: p,
                                i: i
                            }, p.slug, false, {
                                fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                                lineNumber: 337,
                                columnNumber: 35
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/jia_portfolio-1/app/page.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__295f8021._.js.map