"use client";
import { jsx as e, jsxs as l, Fragment as P } from "react/jsx-runtime";
import { createContext as Be, useState as f, useMemo as le, useEffect as T, useContext as Se, useRef as X, useCallback as ze } from "react";
const Me = {
  "neon-purple": "new-haze",
  "neon-purple-v2": "new-haze",
  "light-legacy": "canahoria",
  iamsajid: "new-haze",
  "iamsajid-light": "canahoria",
  "dark-purple": "new-haze"
};
function Le(t) {
  return t ? t in K ? t : Me[t] ?? "new-haze" : "new-haze";
}
const K = {
  // ── Brand themes (canonical, image-inspired) ──────────────────────────────
  /**
   * New Haze — DARK
   * Midnight blue backgrounds, gummy hot-pink CTA, aqua-cyan accent.
   * Playful, colourful, candy-neon. Inspired by Sticker 1.
   */
  "new-haze": {
    label: "New Haze",
    colors: {
      bgDark: "#080f1c",
      bg: "#0d1a2e",
      bgLight: "#152338",
      text: "#dff0ff",
      textMuted: "#6ab0d8",
      textDim: "#2e5878",
      border: "#183050",
      borderLight: "#224268",
      accent: "#00b8d4",
      accentBright: "#20d4f0",
      accentNeon: "#70eeff",
      cta: "#ff4d9e",
      ctaLight: "#ff80c0",
      ctaText: "#080f1c",
      error: "#ff6b8a",
      errorBg: "rgba(255,60,80,0.10)",
      errorBorder: "rgba(255,60,80,0.25)",
      success: "#20d8a0",
      successBg: "rgba(0,200,140,0.10)",
      successBorder: "rgba(0,200,140,0.25)",
      focus: "#70eeff"
    }
  },
  /**
   * Rabbitek — DARK
   * Near-black background, golden-carrot orange accent, aqua verde CTA.
   * Serious, authoritative, impactful. Inspired by Sticker 2.
   */
  rabbitek: {
    label: "Rabbitek",
    colors: {
      bgDark: "#040308",
      bg: "#080610",
      bgLight: "#0e0c18",
      text: "#f0e8cc",
      textMuted: "#9a8258",
      textDim: "#5a4c30",
      border: "#1a1408",
      borderLight: "#261e0c",
      accent: "#c87800",
      accentBright: "#e89a00",
      accentNeon: "#ffc830",
      cta: "#00b090",
      ctaLight: "#20d0b0",
      ctaText: "#040308",
      error: "#ff7060",
      errorBg: "rgba(220,60,40,0.10)",
      errorBorder: "rgba(220,60,40,0.25)",
      success: "#00c89a",
      successBg: "rgba(0,180,140,0.10)",
      successBorder: "rgba(0,180,140,0.25)",
      focus: "#ffc830"
    }
  },
  /**
   * Canahoria — LIGHT
   * Warm cream/beige backgrounds, carrot orange CTA, leafy dark green accent.
   * Relaxed, earthy, established. Inspired by Sticker 3.
   */
  canahoria: {
    label: "Canahoria",
    colors: {
      bgDark: "#e0d8c8",
      bg: "#f5f0e5",
      bgLight: "#fdfbf7",
      text: "#2a1e0c",
      textMuted: "#6a5a3a",
      textDim: "#7a6848",
      border: "#d8cdb0",
      borderLight: "#e5dcc8",
      accent: "#2a5c1c",
      accentBright: "#3a7828",
      accentNeon: "#4e9835",
      cta: "#d95808",
      ctaLight: "#f07030",
      ctaText: "#ffffff",
      error: "#c22c00",
      errorBg: "rgba(194,44,0,0.07)",
      errorBorder: "rgba(194,44,0,0.18)",
      success: "#2a5c1c",
      successBg: "rgba(42,92,28,0.08)",
      successBorder: "rgba(42,92,28,0.20)",
      focus: "#2a5c1c"
    }
  },
  // ── Extended themes ───────────────────────────────────────────────────────
  "dark-purple": {
    label: "Púrpura Oscuro",
    colors: {
      bgDark: "#0b0810",
      bg: "#120d1a",
      bgLight: "#1a1228",
      text: "#e8d4f8",
      textMuted: "#9a7abf",
      textDim: "#5a4078",
      border: "#2d1f48",
      borderLight: "#3d2a60",
      accent: "#6b3fa0",
      accentBright: "#9b6fd4",
      accentNeon: "#c8a8ff",
      cta: "#a855a0",
      ctaLight: "#e07de0",
      ctaText: "#0a0e1a",
      error: "#f87171",
      errorBg: "rgba(220,38,38,0.10)",
      errorBorder: "rgba(220,38,38,0.25)",
      success: "#4ade80",
      successBg: "rgba(22,163,74,0.10)",
      successBorder: "rgba(22,163,74,0.25)",
      focus: "#c8a8ff"
    }
  },
  "green-botanical": {
    label: "Verde Botánico",
    colors: {
      bgDark: "#0a1a0e",
      bg: "#0f2515",
      bgLight: "#15301d",
      text: "#e8f5e9",
      textMuted: "#a5d6a7",
      textDim: "#6b9a6e",
      border: "#1e402a",
      borderLight: "#2a5036",
      accent: "#2e7d32",
      accentBright: "#4caf50",
      accentNeon: "#81c784",
      cta: "#f97316",
      ctaLight: "#fb923c",
      ctaText: "#0a0e1a",
      error: "#f87171",
      errorBg: "rgba(220,38,38,0.10)",
      errorBorder: "rgba(220,38,38,0.25)",
      success: "#4ade80",
      successBg: "rgba(22,163,74,0.10)",
      successBorder: "rgba(22,163,74,0.25)",
      focus: "#81c784"
    }
  },
  light: {
    label: "Claro",
    colors: {
      bgDark: "#e8eaed",
      bg: "#f8f9fa",
      bgLight: "#ffffff",
      text: "#1a1a2e",
      textMuted: "#6b7280",
      textDim: "#6b7280",
      // raised from #9ca3af — passes WCAG AA
      border: "#e5e7eb",
      borderLight: "#d1d5db",
      accent: "#7c3aed",
      accentBright: "#8b5cf6",
      accentNeon: "#a78bfa",
      cta: "#f97316",
      ctaLight: "#fb923c",
      ctaText: "#0a0e1a",
      error: "#dc2626",
      errorBg: "rgba(220,38,38,0.07)",
      errorBorder: "rgba(220,38,38,0.20)",
      success: "#16a34a",
      successBg: "rgba(22,163,74,0.07)",
      successBorder: "rgba(22,163,74,0.20)",
      focus: "#7c3aed"
    }
  },
  "dark-orange": {
    label: "Naranja Oscuro",
    colors: {
      bgDark: "#080810",
      bg: "#0e0e1c",
      bgLight: "#161628",
      text: "#f5f0e0",
      textMuted: "#b8a888",
      textDim: "#6a5a40",
      border: "#1e1e38",
      borderLight: "#2e2e50",
      accent: "#ff6b00",
      accentBright: "#ff9a3c",
      accentNeon: "#ffcc00",
      // replaced #ccff00 — less garish, still energetic
      cta: "#ffb300",
      ctaLight: "#ffd54f",
      ctaText: "#0a0e1a",
      error: "#f87171",
      errorBg: "rgba(220,38,38,0.10)",
      errorBorder: "rgba(220,38,38,0.25)",
      success: "#4ade80",
      successBg: "rgba(22,163,74,0.10)",
      successBorder: "rgba(22,163,74,0.25)",
      focus: "#ffcc00"
    }
  }
}, se = "nh_theme", de = "new-haze", Te = `
/* ── Spacing ─────────────────────────── */
:root {
  --nh-space-0:  0px;
  --nh-space-1:  4px;
  --nh-space-2:  8px;
  --nh-space-3:  12px;
  --nh-space-4:  16px;
  --nh-space-5:  20px;
  --nh-space-6:  24px;
  --nh-space-7:  28px;
  --nh-space-8:  32px;
  --nh-space-10: 40px;
  --nh-space-12: 48px;
  --nh-space-14: 56px;
  --nh-space-16: 64px;
  --nh-space-20: 80px;
  --nh-space-24: 96px;

  /* ── Typography ───────────────────── */
  --nh-font-sans: 'Inter', 'Geist', system-ui, -apple-system, sans-serif;
  --nh-font-mono: 'JetBrains Mono', 'Fira Code', ui-monospace, monospace;

  --nh-text-xs:   10px;
  --nh-text-sm:   12px;
  --nh-text-base: 14px;
  --nh-text-md:   16px;
  --nh-text-lg:   18px;
  --nh-text-xl:   20px;
  --nh-text-2xl:  24px;
  --nh-text-3xl:  30px;
  --nh-text-4xl:  36px;

  --nh-weight-regular:  400;
  --nh-weight-medium:   500;
  --nh-weight-semibold: 600;
  --nh-weight-bold:     700;
  --nh-weight-black:    800;

  --nh-leading-tight:  1.2;
  --nh-leading-snug:   1.35;
  --nh-leading-normal: 1.5;
  --nh-leading-loose:  1.75;

  --nh-tracking-tight:  -0.02em;
  --nh-tracking-normal:  0;
  --nh-tracking-wide:    0.04em;
  --nh-tracking-wider:   0.08em;

  /* ── Border radius ────────────────── */
  --nh-radius-sm:   8px;
  --nh-radius-md:   10px;
  --nh-radius-lg:   12px;
  --nh-radius-xl:   16px;
  --nh-radius-2xl:  20px;
  --nh-radius-3xl:  24px;
  --nh-radius-full: 9999px;

  /* ── Shadows ──────────────────────── */
  --nh-shadow-sm: 0 1px 3px 0 rgba(0,0,0,0.30);
  --nh-shadow-md: 0 4px 12px 0 rgba(0,0,0,0.35);
  --nh-shadow-lg: 0 8px 24px 0 rgba(0,0,0,0.40);
  --nh-shadow-xl: 0 16px 48px 0 rgba(0,0,0,0.50);
  --nh-shadow-glow-accent: 0 0 16px 2px var(--nh-accent);
  --nh-shadow-glow-cta:    0 0 20px 4px var(--nh-cta);
  --nh-shadow-glow-neon:   0 0 12px 2px var(--nh-accent-neon);

  /* ── Z-index ──────────────────────── */
  --nh-z-base:    0;
  --nh-z-raised:  10;
  --nh-z-sticky:  100;
  --nh-z-overlay: 200;
  --nh-z-modal:   1000;
  --nh-z-toast:   1100;
  --nh-z-tooltip: 1200;

  /* ── Motion ───────────────────────── */
  --nh-duration-instant: 0ms;
  --nh-duration-fast:    120ms;
  --nh-duration-normal:  220ms;
  --nh-duration-slow:    350ms;
  --nh-duration-xslow:   500ms;

  --nh-ease-linear: linear;
  --nh-ease-in:     cubic-bezier(0.4, 0, 1, 1);
  --nh-ease-out:    cubic-bezier(0, 0, 0.2, 1);
  --nh-ease-inout:  cubic-bezier(0.4, 0, 0.2, 1);
  --nh-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --nh-ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* ── Accessibility ────────────────────── */
:focus-visible {
  outline: 2px solid var(--nh-focus);
  outline-offset: 2px;
}

/* ── Reduced motion ───────────────────── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;
let he = !1;
function De() {
  if (he || typeof document > "u") return;
  const t = document.createElement("style");
  t.setAttribute("data-nh", "static"), t.textContent = Te, document.head.appendChild(t), he = !0;
}
const be = Be(null), Ne = {
  "new-haze": ["dark", "new-haze"],
  rabbitek: ["dark", "rabbitek"],
  canahoria: ["canahoria"],
  "dark-purple": ["dark"],
  "green-botanical": ["dark", "green-botanical"],
  light: ["light"],
  "dark-orange": ["dark", "dark-orange"]
}, Ee = {
  "new-haze": "dark",
  rabbitek: "dark",
  canahoria: "light",
  "dark-purple": "dark",
  "green-botanical": "dark",
  light: "light",
  "dark-orange": "dark"
};
function $e(t, r) {
  const a = document.documentElement;
  a.style.setProperty("--nh-bg-dark", r.bgDark), a.style.setProperty("--nh-bg", r.bg), a.style.setProperty("--nh-bg-light", r.bgLight), a.style.setProperty("--nh-text", r.text), a.style.setProperty("--nh-text-muted", r.textMuted), a.style.setProperty("--nh-text-dim", r.textDim), a.style.setProperty("--nh-border", r.border), a.style.setProperty("--nh-border-light", r.borderLight), a.style.setProperty("--nh-accent", r.accent), a.style.setProperty("--nh-accent-bright", r.accentBright), a.style.setProperty("--nh-accent-neon", r.accentNeon), a.style.setProperty("--nh-cta", r.cta), a.style.setProperty("--nh-cta-light", r.ctaLight), a.style.setProperty("--nh-cta-text", r.ctaText), a.style.setProperty("--nh-error", r.error), a.style.setProperty("--nh-error-bg", r.errorBg), a.style.setProperty("--nh-error-border", r.errorBorder), a.style.setProperty("--nh-success", r.success), a.style.setProperty("--nh-success-bg", r.successBg), a.style.setProperty("--nh-success-border", r.successBorder), a.style.setProperty("--nh-focus", r.focus), a.classList.remove("dark", "new-haze", "rabbitek", "canahoria", "green-botanical", "dark-orange", "light"), Ne[t].forEach((o) => a.classList.add(o)), a.style.colorScheme = Ee[t];
}
function wt({ children: t }) {
  const [r, a] = f(de), o = le(() => K[r].colors, [r]);
  T(() => {
    try {
      const d = Le(localStorage.getItem(se));
      d !== de && a(d);
    } catch {
    }
  }, []), T(() => {
    De(), $e(r, o);
  }, [r, o]);
  const c = (d) => {
    if (d in K) {
      a(d);
      try {
        localStorage.setItem(se, d);
      } catch {
      }
    }
  }, s = le(
    () => Object.entries(K).map(([d, { label: h }]) => ({ value: d, label: h })),
    []
  );
  return /* @__PURE__ */ e(be.Provider, { value: { theme: o, themeName: r, setThemeName: c, themeOptions: s }, children: t });
}
function v() {
  const t = Se(be);
  if (!t) throw new Error("useTheme must be used within ThemeProvider");
  return t;
}
function ge({ color: t, accentColor: r }) {
  return /* @__PURE__ */ l(P, { children: [
    /* @__PURE__ */ e("circle", { fill: r, cx: "540", cy: "540", r: "500" }),
    /* @__PURE__ */ e("path", { fill: t, d: "M708.29,500.15v142.18c0,98.59-80.59,175.83-178.98,169.66-42.21-2.65-80.2-20.85-108.31-48.96-30.45-30.45-49.29-72.52-49.29-119v-143.88c0-5.52,4.48-10,10-10h100.18c-.58.33-1.16.67-1.72,1.01-.98.59-1.95,1.21-2.88,1.85-.5.33-.98.65-1.45.99-.77.54-1.52,1.09-2.25,1.66-.07.05-.14.1-.2.16-.64.5-1.28,1-1.91,1.52-.03.02-.05.04-.07.06-.26.21-.52.43-.77.66-.33.26-.65.54-.97.82-.02.03-.05.05-.07.06-.05.04-.09.08-.13.11-.09.08-.19.17-.29.26-.52.46-1.03.93-1.54,1.41-.02.02-.04.04-.06.06-.62.58-1.23,1.18-1.83,1.79-.6.59-1.19,1.19-1.77,1.81-.59.64-1.18,1.28-1.76,1.93-.58.66-1.15,1.33-1.72,2-.56.68-1.12,1.37-1.67,2.07h-.01c-4.04,5.13-7.72,10.85-11.13,17.11-3.42,6.27-5.54,14.07-6.81,23.11-.02.2-.05.41-.08.61,0,.03,0,.05-.01.08-.33,3.62,1.34,5.3,4.89,5.07.25-.02.5-.07.76-.16,12.51-4.22,25.29-6.93,38.33-8.91,4.04-.53,5.04,5.27,1.18,6.89-14.46,4.22-28.76,8.97-42.07,16.12-.16.08-.31.19-.45.31-2.73,2.23-4.21,5.77-4.23,10.88v.24c.01,5.28.11,10.78.25,16.45.18,7.25,1.16,14.45,2.34,21.58,1.27,7.69,2.93,15.28,4.99,22.76,1.22,3.97,3.27,6.18,6.08,6.7,23.82,5.65,46.91,13.55,71,18.08,1.75.31,3.16,2.03,3.23,3.96.09,2.55.12,3.83.22,6.36.07,1.93-1.19,3.4-2.86,3.35-22.54-2.36-43.91-8.36-65.83-13.92-2.61-.81-3.21.69-1.73,4.4h0s.01.02.01.02c6.44,15.07,14.52,29.43,24.09,42.75.05.08.11.16.16.23.13.2.27.38.41.56.14.21.28.4.43.59.24.33.48.65.71.96,6.63,9.04,13.95,17.56,21.92,25.51,6.19,6.24,12.17,11.55,18.53,15.08h0c1.59.88,3.21,1.65,4.86,2.3.66.26,1.33.49,1.99.71.68.21,1.36.42,2.04.59,1.02.26,2.06.47,3.12.64,1.61.25,3.26.37,4.95.37s3.32-.12,4.92-.37c1.06-.17,2.09-.38,3.12-.64.34-.09.68-.18,1.02-.28.34-.1.68-.2,1.01-.31.67-.22,1.34-.45,1.99-.71h.01c1-.4,1.96-.82,2.93-1.3h.01c.64-.32,1.28-.65,1.91-1,.65-.35,1.28-.72,1.91-1.11,5.65-3.5,11.05-8.35,16.62-13.97,19.36-19.31,34.99-42.13,46.14-66.99,1.02-2.82.33-3.85-2-3.04-18.54,3.92-37.01,7.6-55.93,8.84-1.59.12-2.73-1.25-2.62-3.14.21-3.39.31-5.09.5-8.51.11-1.89,1.5-3.65,3.2-4.07,21.45-6.66,42.36-14.76,63.92-21.12,2.66-.41,4.58-2.23,5.69-5.52.01-.03.01-.04.01-.07,1.58-6.16,2.88-12.4,3.92-18.69,1.17-7.13,2.16-14.33,2.34-21.58.02-.94.05-1.88.06-2.82-.06-.46-.15-.89-.25-1.3-16.32-.13-32.68-.4-48.96-.89-19.82-.6-39.76-2.32-58.97-7.42-1.85-.5-2.89-1.72-3.26-3.14-1.65-2.19-1.13-6.23,2-7,32.56-8.01,32.06-8.42,102.01-17.75.14,0,2.23.01,2.36,0,2.07-.14,3.49-.65,4.26-1.5-.48-4.89-1.16-9.46-2.1-13.69-1.14-5.13-2.65-9.75-4.67-13.78-.23-.52-.46-1-.69-1.4-.51-.95-1.04-1.89-1.56-2.8-3.94-6.88-8.24-13.05-13.04-18.46-.19-.21-.36-.41-.54-.6-.63-.7-1.27-1.38-1.93-2.06-.31-.33-.61-.64-.92-.95-.3-.3-.6-.59-.89-.87-.28-.29-.57-.56-.86-.83-.28-.28-.56-.53-.83-.78s-.53-.49-.79-.72c-3.95-3.53-8.21-6.63-12.83-9.27h99.95c5.53,0,10,4.48,10,10Z" }),
    /* @__PURE__ */ e("path", { fill: t, d: "M565.01,350.13c0,35.82-13.84,66.59-20.93,80-1.74,3.28-6.43,3.28-8.16,0-7.09-13.41-20.93-44.18-20.93-80s13.84-66.59,20.93-80c1.74-3.28,6.43-3.28,8.16,0,7.09,13.41,20.93,44.18,20.93,80Z" }),
    /* @__PURE__ */ e("path", { fill: t, d: "M604.18,405.39c-18.35,18.35-41.22,27.03-51.72,30.27-2.57.79-4.98-1.61-4.18-4.18,3.24-10.51,11.92-33.37,30.27-51.72,18.35-18.35,41.22-27.03,51.72-30.27,2.57-.79,4.98,1.61,4.18,4.18-3.24,10.51-11.92,33.37-30.27,51.72Z" }),
    /* @__PURE__ */ e("path", { fill: t, d: "M501.45,380.02c18.35,18.35,27.03,41.22,30.27,51.72.79,2.57-1.61,4.98-4.18,4.18-10.51-3.24-33.37-11.92-51.72-30.27-18.35-18.35-27.03-41.22-30.27-51.72-.79-2.57,1.61-4.98,4.18-4.18,10.51,3.24,33.37,11.92,51.72,30.27Z" }),
    /* @__PURE__ */ e("path", { fill: t, d: "M494.16,431.69c16.38,0,30.46,6.33,36.6,9.57,1.5.79,1.5,2.94,0,3.73-6.14,3.24-20.21,9.57-36.6,9.57-16.38,0-30.46-6.33-36.6-9.57-1.5-.79-1.5-2.94,0-3.73,6.14-3.24,20.21-9.57,36.6-9.57Z" }),
    /* @__PURE__ */ e("path", { fill: t, d: "M585.85,454.34c-16.38,0-30.46-6.33-36.6-9.57-1.5-.79-1.5-2.94,0-3.73,6.14-3.24,20.21-9.57,36.6-9.57,16.38,0,30.46,6.33,36.6,9.57,1.5.79,1.5,2.94,0,3.73-6.14,3.24-20.21,9.57-36.6,9.57Z" }),
    /* @__PURE__ */ e("path", { fill: t, d: "M551.57,465.25c-6.32-6.32-9.31-14.2-10.43-17.81-.27-.89.56-1.71,1.44-1.44,3.62,1.12,11.49,4.11,17.81,10.43,6.32,6.32,9.31,14.2,10.43,17.81.27.89-.56,1.71-1.44,1.44-3.62-1.12-11.49-4.11-17.81-10.43Z" }),
    /* @__PURE__ */ e("path", { fill: t, d: "M519.6,456.51c6.32-6.32,14.2-9.31,17.81-10.43.89-.27,1.71.56,1.44,1.44-1.12,3.62-4.11,11.49-10.43,17.81s-14.2,9.31-17.81,10.43c-.89.27-1.71-.56-1.44-1.44,1.12-3.62,4.11-11.49,10.43-17.81Z" })
  ] });
}
function pe({ color: t }) {
  return /* @__PURE__ */ l(P, { children: [
    /* @__PURE__ */ e("path", { fill: t, d: "M48.93,213.77c-3.1-.12-4.64-1.43-4.64-3.93l-4.28-136.04c0-2.5,1.67-3.81,5-3.93h40.35c2.02.36,3.57,2.03,4.64,5l20.35,91.77,3.21-92.84c0-2.5,1.54-3.81,4.64-3.93h40.35c3.33.12,5,1.43,5,3.93l-4.28,136.04c0,2.5-1.55,3.81-4.64,3.93h-41.96c-3.69,0-6.13-1.19-7.32-3.57l-12.5-34.28,2.14,32.85c-.48,3.21-2.38,4.88-5.71,5h-40.35Z" }),
    /* @__PURE__ */ e("path", { fill: t, d: "M194.25,213.77c-9.76.36-15.59-3.21-17.5-10.71l-3.21-102.84c.12-7.26,2.68-14.19,7.68-20.8,5-6.61,11.01-9.79,18.03-9.55h69.27c7.02-.24,13.03,2.95,18.03,9.55s7.56,13.54,7.68,20.8l-1.07,35.71c-.12,2.62-1.55,3.93-4.28,3.93h-42.13c-3.1-.12-4.64-1.43-4.64-3.93l.36-7.14c.36-7.97-1.07-12.59-4.28-13.84s-6.43-1.25-9.64,0-4.64,5.86-4.28,13.84l.54,18.57h32.31c2.5,0,3.93,1.55,4.28,4.64v10.71c0,3.45-1.19,5.24-3.57,5.36h-32.31l.54,20.71c.83,2.86,2.5,4.64,5,5.36h4.64c2.5-.71,4.16-2.5,5-5.36l.36-11.07c0-2.5,1.54-3.81,4.64-3.93h40.71c3.33.12,5,1.43,5,3.93l-.71,25.35c-1.91,7.5-7.74,11.07-17.5,10.71h-78.91Z" }),
    /* @__PURE__ */ e("path", { fill: t, d: "M447.77,213.77h-42.49c-5.24-.12-9.7-1.79-13.39-5-2.5-2.26-6.31-11.6-11.43-28.03-5.12,16.43-8.93,25.77-11.43,28.03-3.69,3.21-8.15,4.88-13.39,5h-42.49c-3.1-.12-4.64-1.43-4.64-3.93l-4.28-136.04c0-2.5,1.67-3.81,5-3.93h40.35c3.09.12,4.64,1.43,4.64,3.93l2.5,76.06,14.28-57.49c2.02-2.97,5.18-4.46,9.46-4.46s7.44,1.49,9.46,4.46l14.28,57.49,2.5-76.06c0-2.5,1.54-3.81,4.64-3.93h40.35c3.33.12,5,1.43,5,3.93l-4.28,136.04c0,2.5-1.55,3.81-4.64,3.93Z" }),
    /* @__PURE__ */ e("path", { fill: t, d: "M642.58,209.85c0,2.5-1.55,3.81-4.64,3.93h-40.35c-3.33-.12-5-1.43-5-3.93l1.07-41.96h-17.14l1.07,41.96c0,2.5-1.67,3.81-5,3.93h-40.35c-3.1-.12-4.64-1.43-4.64-3.93l-4.28-136.04c0-2.5,1.67-3.81,5-3.93h40.35c3.09.12,4.64,1.43,4.64,3.93l2.5,73.56h18.57l2.5-73.56c0-2.5,1.54-3.81,4.64-3.93h40.35c3.33.12,5,1.43,5,3.93l-4.28,136.04Z" }),
    /* @__PURE__ */ e("path", { fill: t, d: "M665.44,213.77c-3.1-.12-4.64-1.43-4.64-3.93l-3.93-109.62c.12-7.26,2.68-14.19,7.68-20.8,5-6.61,11.01-9.79,18.03-9.55h68.91c7.02-.24,13.03,2.95,18.03,9.55s7.56,13.54,7.68,20.8l-3.93,109.62c0,2.5-1.55,3.81-4.64,3.93h-40.35c-3.33-.12-5-1.43-5-3.93l1.07-41.78h-14.64l1.07,41.78c0,2.5-1.67,3.81-5,3.93h-40.35ZM724.71,147.36l1.07-18.57c.36-7.97-1.07-12.59-4.28-13.84s-6.43-1.25-9.64,0c-3.21,1.25-4.64,5.86-4.28,13.84l1.07,18.57h16.07Z" }),
    /* @__PURE__ */ e("path", { fill: t, d: "M796.12,213.77c-2.5,0-3.93-1.54-4.28-4.64v-34.99c1.43-3.93,3.33-6.43,5.71-7.5l63.92-51.42h-69.99c-2.38-.12-3.57-1.9-3.57-5.36v-35.35c.36-3.09,1.79-4.64,4.28-4.64h112.12c2.5,0,3.93,1.55,4.28,4.64v34.99c-1.43,3.93-3.33,6.55-5.71,7.86l-65.34,50.88,63.2.18c2.38.12,3.57,1.91,3.57,5.36v35.35c-.36,3.1-1.79,4.64-4.28,4.64h-103.91Z" }),
    /* @__PURE__ */ e("path", { fill: t, d: "M940.02,213.77c-9.76.36-15.59-3.21-17.5-10.71l-3.21-102.84c.12-7.26,2.68-14.19,7.68-20.8s11.01-9.79,18.03-9.55h69.27c7.02-.24,13.03,2.95,18.03,9.55,5,6.61,7.56,13.54,7.68,20.8l-1.07,35.71c-.12,2.62-1.55,3.93-4.28,3.93h-42.13c-3.1-.12-4.64-1.43-4.64-3.93l.36-7.14c.36-7.97-1.07-12.59-4.28-13.84s-6.43-1.25-9.64,0-4.64,5.86-4.28,13.84l.54,18.57h32.31c2.5,0,3.93,1.55,4.28,4.64v10.71c0,3.45-1.19,5.24-3.57,5.36h-32.31l.54,20.71c.83,2.86,2.5,4.64,5,5.36h4.64c2.5-.71,4.17-2.5,5-5.36l.36-11.07c0-2.5,1.54-3.81,4.64-3.93h40.71c3.33.12,5,1.43,5,3.93l-.71,25.35c-1.9,7.5-7.74,11.07-17.5,10.71h-78.91Z" })
  ] });
}
const Re = 1, Pe = 1080 / 283.66;
function fe({
  variant: t = "full",
  size: r = 32,
  color: a = "var(--nh-accent-bright)",
  accentColor: o = "var(--nh-accent)",
  className: c,
  style: s,
  "aria-label": d = "New Haze"
}) {
  if (t === "icon")
    return /* @__PURE__ */ e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1080 1080",
        width: r * Re,
        height: r,
        className: c,
        style: s,
        "aria-label": d,
        role: "img",
        children: /* @__PURE__ */ e(ge, { color: a, accentColor: o })
      }
    );
  if (t === "wordmark")
    return /* @__PURE__ */ e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1080 283.66",
        width: r * Pe,
        height: r,
        className: c,
        style: s,
        "aria-label": d,
        role: "img",
        children: /* @__PURE__ */ e(pe, { color: a })
      }
    );
  const h = 283.66 / 1080, w = 1080 * h + 36, _ = w + 1080;
  return /* @__PURE__ */ l(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: `0 0 ${_} 283.66`,
      width: r * (_ / 283.66),
      height: r,
      className: c,
      style: s,
      "aria-label": d,
      role: "img",
      children: [
        /* @__PURE__ */ e("g", { transform: `scale(${h})`, children: /* @__PURE__ */ e(ge, { color: a, accentColor: o }) }),
        /* @__PURE__ */ e("g", { transform: `translate(${w}, 0)`, children: /* @__PURE__ */ e(pe, { color: a }) })
      ]
    }
  );
}
const ue = {
  "new-haze": "🐰",
  rabbitek: "🥕",
  canahoria: "🌿",
  "dark-purple": "🟣",
  "green-botanical": "🌱",
  light: "☀️",
  "dark-orange": "🟠"
};
function Ie() {
  const { theme: t, themeName: r, setThemeName: a, themeOptions: o } = v(), [c, s] = f(!1), d = X(null);
  return T(() => {
    if (!c) return;
    function h(m) {
      d.current && !d.current.contains(m.target) && s(!1);
    }
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [c]), /* @__PURE__ */ l("div", { ref: d, style: { position: "relative" }, children: [
    /* @__PURE__ */ e(
      "button",
      {
        onClick: () => s((h) => !h),
        "aria-label": "Cambiar tema",
        style: {
          background: "none",
          border: `1px solid ${t.border}`,
          borderRadius: 8,
          padding: "4px 8px",
          cursor: "pointer",
          fontSize: 14,
          lineHeight: 1
        },
        children: ue[r] ?? "🟣"
      }
    ),
    c && /* @__PURE__ */ e("div", { style: {
      position: "absolute",
      right: 0,
      top: "100%",
      marginTop: 4,
      background: t.bgLight,
      border: `1px solid ${t.border}`,
      borderRadius: 10,
      padding: 4,
      zIndex: 200,
      minWidth: 170,
      boxShadow: `0 8px 24px ${t.bgDark}cc`
    }, children: o.map((h) => /* @__PURE__ */ l(
      "button",
      {
        onClick: () => {
          a(h.value), s(!1);
        },
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          width: "100%",
          padding: "6px 10px",
          background: r === h.value ? t.bgLight : "transparent",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          fontSize: 12,
          color: t.text,
          fontFamily: "inherit"
        },
        children: [
          /* @__PURE__ */ e("span", { children: ue[h.value] }),
          /* @__PURE__ */ e("span", { style: { flex: 1, textAlign: "left" }, children: h.label }),
          r === h.value && /* @__PURE__ */ e("span", { style: { color: t.accent }, children: "✓" })
        ]
      },
      h.value
    )) })
  ] });
}
function Fe(t = 768) {
  const [r, a] = f(!1);
  return T(() => {
    const o = window.matchMedia(`(max-width: ${t - 1}px)`);
    a(o.matches);
    const c = (s) => a(s.matches);
    return o.addEventListener("change", c), () => o.removeEventListener("change", c);
  }, [t]), r;
}
const We = [
  {
    label: "Dashboard",
    href: "https://admin.newhaze.ar",
    roles: ["newhaze_employee", "developer"]
  },
  {
    label: "Mi Tienda",
    href: "https://dashboard.newhaze.ar",
    roles: ["growshop_owner", "growshop_employee", "distributor_owner", "distributor_employee"]
  }
];
function Oe(t, r) {
  return r.some((a) => t.includes(a));
}
function Ae({ href: t, children: r, style: a, "aria-label": o }) {
  return /* @__PURE__ */ e("a", { href: t, style: a, "aria-label": o, children: r });
}
function je({ user: t, onLogout: r, profileHref: a, LinkComponent: o }) {
  const { theme: c } = v(), [s, d] = f(!1), h = X(null);
  return T(() => {
    if (!s) return;
    const m = (b) => {
      h.current && !h.current.contains(b.target) && d(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [s]), /* @__PURE__ */ l("div", { ref: h, style: { position: "relative" }, children: [
    /* @__PURE__ */ l(
      "button",
      {
        onClick: () => d((m) => !m),
        style: {
          background: "none",
          border: `1px solid ${c.border}`,
          borderRadius: 8,
          padding: "4px 10px",
          color: c.accentBright,
          cursor: "pointer",
          fontSize: 12,
          fontFamily: "inherit",
          fontWeight: 600,
          transition: "border-color 0.15s"
        },
        children: [
          t.username,
          /* @__PURE__ */ e("span", { style: { marginLeft: 4, fontSize: 9, opacity: 0.7 }, children: s ? "▲" : "▼" })
        ]
      }
    ),
    s && /* @__PURE__ */ l("div", { style: {
      position: "absolute",
      top: "calc(100% + 8px)",
      right: 0,
      minWidth: 200,
      background: c.bgLight,
      border: `1px solid ${c.border}`,
      borderRadius: 12,
      padding: "8px 0",
      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      zIndex: 200
    }, children: [
      /* @__PURE__ */ l("div", { style: { padding: "10px 16px 12px", borderBottom: `1px solid ${c.border}` }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 13, fontWeight: 700, color: c.text }, children: t.username }),
        /* @__PURE__ */ e("div", { style: { fontSize: 11, color: c.textDim, marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: t.email })
      ] }),
      a && /* @__PURE__ */ e("div", { style: { padding: "4px 8px 0" }, children: /* @__PURE__ */ e(
        o,
        {
          href: a,
          style: {
            display: "block",
            padding: "8px 10px",
            borderRadius: 8,
            fontSize: 13,
            color: c.textMuted,
            textDecoration: "none",
            fontFamily: "inherit",
            transition: "background 0.1s, color 0.1s"
          },
          children: "Mi perfil"
        }
      ) }),
      /* @__PURE__ */ e("div", { style: { padding: "4px 8px 4px" }, children: /* @__PURE__ */ e(
        "button",
        {
          onClick: () => {
            d(!1), r == null || r();
          },
          style: {
            width: "100%",
            textAlign: "left",
            background: "none",
            border: "none",
            padding: "8px 10px",
            borderRadius: 8,
            color: c.textMuted,
            cursor: "pointer",
            fontSize: 13,
            fontFamily: "inherit",
            transition: "background 0.1s, color 0.1s"
          },
          onMouseEnter: (m) => {
            const b = m.currentTarget;
            b.style.background = c.bgLight, b.style.color = c.text;
          },
          onMouseLeave: (m) => {
            const b = m.currentTarget;
            b.style.background = "none", b.style.color = c.textMuted;
          },
          children: "Cerrar sesión"
        }
      ) })
    ] })
  ] });
}
function kt({
  activeApp: t,
  user: r,
  onLogin: a,
  onLogout: o,
  profileHref: c,
  LinkComponent: s = Ae,
  websiteUrl: d = "https://newhaze.ar",
  learnUrl: h = "https://learn.newhaze.ar"
}) {
  const { theme: m } = v(), b = Fe(), w = [
    { label: "Aprender", href: h, app: "learn" },
    { label: "Blog", href: `${d}/blog`, app: "blog" }
  ], _ = (i) => ({
    fontSize: 13,
    fontWeight: i ? 600 : 400,
    color: i ? "var(--nh-accent-bright)" : "var(--nh-text-muted)",
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.15s"
  });
  return /* @__PURE__ */ l("header", { style: {
    borderBottom: "1px solid var(--nh-border)",
    padding: b ? "0 16px" : "0 32px",
    display: "flex",
    alignItems: "center",
    gap: 24,
    height: 56,
    background: "color-mix(in srgb, var(--nh-bg) 93%, transparent)",
    backdropFilter: "blur(10px)",
    position: "sticky",
    top: 0,
    zIndex: 100
  }, children: [
    /* @__PURE__ */ e(s, { href: d, "aria-label": "New Haze", style: { display: "flex", alignItems: "center", textDecoration: "none" }, children: /* @__PURE__ */ e(fe, { variant: "full", size: 28 }) }),
    !b && /* @__PURE__ */ l("nav", { style: { display: "flex", gap: 20, alignItems: "center" }, children: [
      w.map((i) => /* @__PURE__ */ e(s, { href: i.href, style: _(t === i.app), children: i.label }, i.app)),
      r && We.map(
        (i) => Oe(r.roles, i.roles) ? /* @__PURE__ */ e(s, { href: i.href, style: _(!1), children: i.label }, i.label) : null
      )
    ] }),
    /* @__PURE__ */ l("div", { style: { marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ e(Ie, {}),
      r ? /* @__PURE__ */ e(je, { user: r, onLogout: o, profileHref: c, LinkComponent: s }) : /* @__PURE__ */ e(
        "button",
        {
          onClick: a,
          style: {
            background: "none",
            border: "1px solid var(--nh-border)",
            borderRadius: 8,
            padding: "4px 10px",
            color: "var(--nh-accent-bright)",
            cursor: "pointer",
            fontSize: 11,
            fontFamily: "inherit"
          },
          children: "Iniciar sesión"
        }
      )
    ] })
  ] });
}
function Ze({ children: t }) {
  return /* @__PURE__ */ e("div", { style: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px 16px"
  }, children: t });
}
function F({ children: t, title: r, subtitle: a }) {
  const { theme: o } = v();
  return /* @__PURE__ */ l("div", { style: {
    background: o.bg,
    border: `1px solid ${o.border}`,
    borderRadius: 20,
    padding: "32px 28px",
    width: "100%",
    maxWidth: 380
  }, children: [
    r && /* @__PURE__ */ l("div", { style: { marginBottom: a ? 8 : 20 }, children: [
      /* @__PURE__ */ e("div", { style: { fontSize: 20, fontWeight: 700, color: o.text }, children: r }),
      a && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: o.textMuted, marginTop: 4 }, children: a })
    ] }),
    t
  ] });
}
function Z({ msg: t }) {
  const { theme: r } = v();
  return /* @__PURE__ */ e("div", { style: {
    background: r.errorBg,
    border: `1px solid ${r.errorBorder}`,
    borderRadius: 8,
    padding: "10px 12px",
    fontSize: 13,
    color: r.error
  }, children: t });
}
function He({
  onRegister: t,
  onVerifyOtp: r,
  onResendOtp: a,
  onLogin: o,
  onLoginWithGoogle: c,
  onForgotPassword: s,
  onSaveUsername: d,
  onGuest: h,
  initialMode: m = "login",
  compact: b = !1,
  googleClientId: w,
  appName: _ = "New Haze"
}) {
  const { theme: i } = v(), [u, W] = f(m), [x, O] = f(""), [C, y] = f(""), [A, U] = f(["", "", "", "", "", ""]), [G, xe] = f(""), [z, V] = f(null), [k, Q] = f(!1), [M, Y] = f(0), [ee, ye] = f(!1), E = X([]);
  T(() => {
    if (M <= 0) return;
    const n = setTimeout(() => Y((g) => g - 1), 1e3);
    return () => clearTimeout(n);
  }, [M]), T(() => {
    u === "otp" && setTimeout(() => {
      var n;
      return (n = E.current[0]) == null ? void 0 : n.focus();
    }, 100), u === "profile" && setTimeout(() => {
      var n;
      return (n = document.getElementById("username-input")) == null ? void 0 : n.focus();
    }, 100);
  }, [u]);
  const D = (n) => {
    W(n), V(null);
  }, N = async (n) => {
    V(null), Q(!0);
    try {
      await n();
    } catch (g) {
      V(g.message);
    } finally {
      Q(!1);
    }
  }, te = () => N(async () => {
    if (!x || !C) throw new Error("Completá email y contraseña");
    if (C.length < 6) throw new Error("La contraseña debe tener al menos 6 caracteres");
    await t(x, C), Y(60), D("otp");
  }), re = () => N(async () => {
    const n = A.join("");
    if (n.length < 6) throw new Error("Ingresá el código completo de 6 dígitos");
    await r(x, n);
  }), ve = () => N(async () => {
    await a(x), Y(60), U(["", "", "", "", "", ""]), setTimeout(() => {
      var n;
      return (n = E.current[0]) == null ? void 0 : n.focus();
    }, 50);
  }), ne = () => N(async () => {
    if (!x || !C) throw new Error("Completá email y contraseña");
    await o(x, C);
  }), oe = () => N(async () => {
    if (!x) throw new Error("Ingresá tu email");
    await s(x), D("forgot_sent");
  }), ae = () => N(async () => {
    if (!G.trim()) throw new Error("Ingresá un nombre de usuario");
    await d(G.trim());
  }), we = (n, g) => {
    var I;
    const p = g.replace(/\D/g, "").slice(-1), L = [...A];
    L[n] = p, U(L), p && n < 5 && ((I = E.current[n + 1]) == null || I.focus());
  }, ke = (n, g) => {
    var p;
    g.key === "Backspace" && !A[n] && n > 0 && ((p = E.current[n - 1]) == null || p.focus()), g.key === "Enter" && re();
  }, q = ze(async (n) => {
    !(n != null && n.credential) || !c || await N(async () => {
      await c(n.credential);
    });
  }, [c]);
  T(() => {
    var g, p;
    if (!c || !w) return;
    if ((p = (g = window.google) == null ? void 0 : g.accounts) != null && p.id) {
      window.google.accounts.id.initialize({ client_id: w, callback: q });
      return;
    }
    const n = document.createElement("script");
    n.src = "https://accounts.google.com/gsi/client", n.async = !0, n.defer = !0, n.onload = () => {
      var L, I, ce;
      (ce = (I = (L = window.google) == null ? void 0 : L.accounts) == null ? void 0 : I.id) == null || ce.initialize({ client_id: w, callback: q });
    }, document.head.appendChild(n);
  }, [q, c, w]);
  const _e = () => {
    var n, g, p;
    (p = (g = (n = window.google) == null ? void 0 : n.accounts) == null ? void 0 : g.id) == null || p.prompt();
  }, Ce = (n) => {
    var L;
    const g = n.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!g) return;
    n.preventDefault();
    const p = g.split("").concat(Array(6).fill("")).slice(0, 6);
    U(p), (L = E.current[Math.min(g.length, 5)]) == null || L.focus();
  }, j = {
    width: "100%",
    background: i.bgLight,
    border: `1px solid ${i.border}`,
    borderRadius: 10,
    padding: "12px 14px",
    color: i.text,
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box"
  }, $ = {
    width: "100%",
    padding: "13px",
    borderRadius: 12,
    background: `linear-gradient(135deg, ${i.cta}, ${i.ctaLight})`,
    border: "none",
    color: i.ctaText,
    fontWeight: 700,
    cursor: k ? "not-allowed" : "pointer",
    fontSize: 15,
    opacity: k ? 0.7 : 1,
    fontFamily: "inherit"
  }, J = {
    ...$,
    opacity: 1,
    background: "transparent",
    border: `1px solid ${i.border}`,
    color: i.textMuted
  }, ie = /* @__PURE__ */ l(P, { children: [
    u === "otp" && /* @__PURE__ */ l(F, { title: "Revisá tu email", subtitle: /* @__PURE__ */ l(P, { children: [
      "Enviamos un código de 6 dígitos a ",
      /* @__PURE__ */ e("strong", { style: { color: i.accentBright }, children: x })
    ] }), children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", margin: "24px 0" }, onPaste: Ce, children: A.map((n, g) => /* @__PURE__ */ e(
        "input",
        {
          ref: (p) => {
            E.current[g] = p;
          },
          type: "text",
          inputMode: "numeric",
          maxLength: 1,
          value: n,
          onChange: (p) => we(g, p.target.value),
          onKeyDown: (p) => ke(g, p),
          style: {
            width: 44,
            height: 54,
            textAlign: "center",
            fontSize: 24,
            fontWeight: 700,
            background: i.bgLight,
            border: `1.5px solid ${n ? i.accent : i.border}`,
            borderRadius: 10,
            color: i.text,
            outline: "none",
            fontFamily: "inherit",
            transition: "border-color 0.15s"
          },
          onFocus: (p) => {
            p.target.style.borderColor = i.accentBright;
          },
          onBlur: (p) => {
            p.target.style.borderColor = n ? i.accent : i.border;
          }
        },
        g
      )) }),
      z && /* @__PURE__ */ e(Z, { msg: z }),
      /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }, children: [
        /* @__PURE__ */ e("button", { style: $, onClick: re, disabled: k, children: k ? "Verificando..." : "Confirmar código" }),
        /* @__PURE__ */ e(
          "button",
          {
            style: { ...J, opacity: M > 0 ? 0.45 : 1, cursor: M > 0 ? "default" : "pointer" },
            onClick: M > 0 ? void 0 : ve,
            disabled: M > 0 || k,
            children: M > 0 ? `Reenviar en ${M}s` : "Reenviar código"
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { style: { textAlign: "center", marginTop: 14 }, children: /* @__PURE__ */ e(
        "button",
        {
          style: { background: "none", border: "none", cursor: "pointer", color: i.textDim, fontSize: 12, fontFamily: "inherit" },
          onClick: () => D("register"),
          children: "Usar otro email"
        }
      ) })
    ] }),
    u === "profile" && /* @__PURE__ */ e(F, { title: "¿Cómo querés que te llamen?", subtitle: "Podés cambiarlo después desde tu perfil", children: /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }, children: [
      /* @__PURE__ */ e(
        "input",
        {
          id: "username-input",
          value: G,
          onChange: (n) => xe(n.target.value),
          placeholder: "ej: cultivador420",
          style: j,
          onFocus: (n) => {
            n.target.style.borderColor = i.accent;
          },
          onBlur: (n) => {
            n.target.style.borderColor = i.border;
          },
          onKeyDown: (n) => n.key === "Enter" && ae()
        }
      ),
      z && /* @__PURE__ */ e(Z, { msg: z }),
      /* @__PURE__ */ e("button", { style: $, onClick: ae, disabled: k, children: k ? "Guardando..." : "Empezar →" })
    ] }) }),
    u === "forgot_sent" && /* @__PURE__ */ e(
      F,
      {
        title: "Revisá tu casilla",
        subtitle: /* @__PURE__ */ l(P, { children: [
          "Si existe una cuenta con ",
          /* @__PURE__ */ e("strong", { style: { color: i.accentBright }, children: x }),
          ", vas a recibir un link para restablecer tu contraseña."
        ] }),
        children: /* @__PURE__ */ e("button", { style: { ...$, marginTop: 20 }, onClick: () => D("login"), children: "Volver al inicio de sesión" })
      }
    ),
    u === "forgot" && /* @__PURE__ */ e(F, { title: "Restablecer contraseña", subtitle: "Ingresá tu email y te enviamos un link", children: /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "email",
          value: x,
          onChange: (n) => O(n.target.value),
          placeholder: "tu@email.com",
          style: j,
          onFocus: (n) => {
            n.target.style.borderColor = i.accent;
          },
          onBlur: (n) => {
            n.target.style.borderColor = i.border;
          },
          onKeyDown: (n) => n.key === "Enter" && oe()
        }
      ),
      z && /* @__PURE__ */ e(Z, { msg: z }),
      /* @__PURE__ */ e("button", { style: $, onClick: oe, disabled: k, children: k ? "Enviando..." : "Enviar link →" }),
      /* @__PURE__ */ e("button", { style: J, onClick: () => D("login"), children: "← Volver" })
    ] }) }),
    (u === "login" || u === "register") && /* @__PURE__ */ l(F, { children: [
      /* @__PURE__ */ l("div", { style: { textAlign: "center", marginBottom: 28 }, children: [
        /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "center", marginBottom: 14 }, children: /* @__PURE__ */ e(fe, { variant: "icon", size: 56, color: "#fff", accentColor: i.accent }) }),
        /* @__PURE__ */ e("div", { style: { fontSize: 13, color: i.textMuted }, children: u === "login" ? "Bienvenido de vuelta" : "Creá tu cuenta para empezar" })
      ] }),
      /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "email",
            value: x,
            onChange: (n) => O(n.target.value),
            placeholder: "Email",
            style: j,
            onFocus: (n) => {
              n.target.style.borderColor = i.accent;
            },
            onBlur: (n) => {
              n.target.style.borderColor = i.border;
            }
          }
        ),
        /* @__PURE__ */ l("div", { style: { position: "relative" }, children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: ee ? "text" : "password",
              value: C,
              onChange: (n) => y(n.target.value),
              placeholder: "Contraseña",
              style: { ...j, paddingRight: 42 },
              onFocus: (n) => {
                n.target.style.borderColor = i.accent;
              },
              onBlur: (n) => {
                n.target.style.borderColor = i.border;
              },
              onKeyDown: (n) => n.key === "Enter" && (u === "login" ? ne() : te())
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => ye((n) => !n),
              style: {
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                color: i.textDim,
                display: "flex",
                alignItems: "center"
              },
              children: ee ? /* @__PURE__ */ l("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ e("path", { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" }),
                /* @__PURE__ */ e("path", { d: "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" }),
                /* @__PURE__ */ e("line", { x1: "1", y1: "1", x2: "23", y2: "23" })
              ] }) : /* @__PURE__ */ l("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ e("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
                /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" })
              ] })
            }
          )
        ] }),
        z && /* @__PURE__ */ e(Z, { msg: z }),
        /* @__PURE__ */ e("button", { style: $, onClick: u === "login" ? ne : te, disabled: k, children: k ? "..." : u === "login" ? "Entrar" : "Crear cuenta" }),
        c && w && /* @__PURE__ */ l(P, { children: [
          /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: 12, margin: "4px 0" }, children: [
            /* @__PURE__ */ e("div", { style: { flex: 1, height: 1, background: i.border } }),
            /* @__PURE__ */ e("span", { style: { fontSize: 11, color: i.textDim, fontFamily: "inherit" }, children: "o" }),
            /* @__PURE__ */ e("div", { style: { flex: 1, height: 1, background: i.border } })
          ] }),
          /* @__PURE__ */ e("button", { style: J, onClick: _e, disabled: k, children: "Continuar con Google" })
        ] }),
        u === "login" && /* @__PURE__ */ e(
          "button",
          {
            style: { background: "none", border: "none", cursor: "pointer", color: i.textDim, fontSize: 12, fontFamily: "inherit", textAlign: "center" },
            onClick: () => D("forgot"),
            children: "¿Olvidaste tu contraseña?"
          }
        )
      ] }),
      /* @__PURE__ */ l("div", { style: { textAlign: "center", marginTop: 20, fontSize: 13, color: i.textMuted, fontFamily: "inherit" }, children: [
        u === "login" ? "¿No tenés cuenta?" : "¿Ya tenés cuenta?",
        " ",
        /* @__PURE__ */ e(
          "span",
          {
            onClick: () => D(u === "login" ? "register" : "login"),
            style: { color: i.accentBright, cursor: "pointer", fontWeight: 600 },
            children: u === "login" ? "Registrate" : "Iniciá sesión"
          }
        )
      ] }),
      h && /* @__PURE__ */ l("div", { style: { textAlign: "center", marginTop: 16 }, children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: h,
            style: { background: "none", border: "none", cursor: "pointer", color: i.textDim, fontSize: 12, fontFamily: "inherit", padding: "4px 8px", borderRadius: 6, transition: "color 0.15s" },
            onMouseEnter: (n) => {
              n.currentTarget.style.color = i.textMuted;
            },
            onMouseLeave: (n) => {
              n.currentTarget.style.color = i.textDim;
            },
            children: "Continuar como invitado"
          }
        ),
        /* @__PURE__ */ e("span", { style: { display: "block", fontSize: 10, color: i.textDim, fontFamily: "inherit", marginTop: 2 }, children: "tu progreso no se guardará" })
      ] })
    ] })
  ] });
  return b ? ie : /* @__PURE__ */ e(Ze, { children: ie });
}
function _t({ onClose: t, initialMode: r, authScreenProps: a }) {
  const { theme: o } = v();
  return /* @__PURE__ */ e(
    "div",
    {
      onClick: t,
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 1e3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        background: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(8px)"
      },
      children: /* @__PURE__ */ l(
        "div",
        {
          onClick: (c) => c.stopPropagation(),
          style: {
            background: o.bg,
            border: `1px solid ${o.border}`,
            borderRadius: 24,
            padding: 32,
            maxWidth: 400,
            width: "100%",
            position: "relative"
          },
          children: [
            t && /* @__PURE__ */ e(
              "button",
              {
                onClick: t,
                style: {
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: o.textDim,
                  fontSize: 18,
                  lineHeight: 1,
                  padding: "4px 8px",
                  borderRadius: 6,
                  fontFamily: "inherit"
                },
                "aria-label": "Cerrar",
                children: "✕"
              }
            ),
            /* @__PURE__ */ e(
              He,
              {
                ...a,
                compact: !0,
                initialMode: r
              }
            )
          ]
        }
      )
    }
  );
}
function Ct({ user: t, onUpdateUsername: r, onLogout: a }) {
  const { theme: o } = v(), [c, s] = f(t.username ?? ""), [d, h] = f(!1), [m, b] = f(null), [w, _] = f(!1), [i, u] = f(!1), W = async () => {
    if (!c.trim()) {
      b("Ingresá un nombre de usuario");
      return;
    }
    b(null), h(!0), _(!1);
    try {
      await r(c.trim()), _(!0), setTimeout(() => _(!1), 2e3);
    } catch (y) {
      b(y.message);
    } finally {
      h(!1);
    }
  }, x = {
    flex: 1,
    background: o.bgLight,
    border: `1px solid ${o.border}`,
    borderRadius: 10,
    padding: "10px 14px",
    color: o.text,
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit"
  }, O = {
    padding: "10px 18px",
    borderRadius: 10,
    background: `linear-gradient(135deg, ${o.cta}, ${o.ctaLight})`,
    border: "none",
    color: o.ctaText,
    fontWeight: 700,
    cursor: d ? "not-allowed" : "pointer",
    fontSize: 14,
    opacity: d ? 0.7 : 1,
    fontFamily: "inherit",
    whiteSpace: "nowrap"
  }, C = t.xp != null && t.level != null ? Math.min(100, t.xp % 1e3 / 1e3 * 100) : null;
  return /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 24, padding: "8px 0" }, children: [
    /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: 16 }, children: [
      /* @__PURE__ */ e("div", { style: {
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: o.bgLight,
        border: `2px solid ${o.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 26,
        flexShrink: 0
      }, children: "🧑‍🌾" }),
      /* @__PURE__ */ l("div", { style: { minWidth: 0 }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: o.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: t.username ?? "Sin nombre" }),
        /* @__PURE__ */ e("div", { style: { fontSize: 13, color: o.textMuted, marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: t.email }),
        t.roles && t.roles.length > 0 && /* @__PURE__ */ e("div", { style: { display: "flex", gap: 6, marginTop: 6, flexWrap: "wrap" }, children: t.roles.map((y) => /* @__PURE__ */ e(
          "span",
          {
            style: {
              fontSize: 10,
              fontWeight: 600,
              padding: "2px 8px",
              borderRadius: 20,
              background: o.bgLight,
              border: `1px solid ${o.borderLight}`,
              color: o.accentBright,
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            },
            children: y.replace(/_/g, " ")
          },
          y
        )) })
      ] })
    ] }),
    t.xp != null && t.level != null && C != null && /* @__PURE__ */ l("div", { children: [
      /* @__PURE__ */ l("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12, color: o.textMuted, marginBottom: 6 }, children: [
        /* @__PURE__ */ l("span", { children: [
          "Nivel ",
          t.level
        ] }),
        /* @__PURE__ */ l("span", { children: [
          t.xp,
          " XP"
        ] })
      ] }),
      /* @__PURE__ */ e("div", { style: { height: 8, background: o.bgLight, borderRadius: 99, overflow: "hidden", border: `1px solid ${o.border}` }, children: /* @__PURE__ */ e("div", { style: {
        height: "100%",
        width: `${C}%`,
        background: `linear-gradient(90deg, ${o.accent}, ${o.accentBright})`,
        borderRadius: 99,
        transition: "width 0.4s ease"
      } }) })
    ] }),
    /* @__PURE__ */ e("div", { style: { height: 1, background: o.border } }),
    /* @__PURE__ */ l("div", { children: [
      /* @__PURE__ */ e("div", { style: { fontSize: 13, fontWeight: 600, color: o.textMuted, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }, children: "Cambiar nombre de usuario" }),
      /* @__PURE__ */ l("div", { style: { display: "flex", gap: 10 }, children: [
        /* @__PURE__ */ e(
          "input",
          {
            value: c,
            onChange: (y) => {
              s(y.target.value), b(null), _(!1);
            },
            placeholder: "nuevo_nombre",
            style: x,
            onFocus: (y) => {
              y.target.style.borderColor = o.accent;
            },
            onBlur: (y) => {
              y.target.style.borderColor = o.border;
            },
            onKeyDown: (y) => y.key === "Enter" && W()
          }
        ),
        /* @__PURE__ */ e("button", { style: O, onClick: W, disabled: d, children: d ? "..." : w ? "✓ Guardado" : "Guardar" })
      ] }),
      m && /* @__PURE__ */ e("div", { style: { marginTop: 8, fontSize: 12, color: o.error }, children: m })
    ] }),
    /* @__PURE__ */ e("div", { style: { height: 1, background: o.border } }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      "button",
      {
        onClick: a,
        onMouseEnter: () => u(!0),
        onMouseLeave: () => u(!1),
        style: {
          width: "100%",
          padding: "11px",
          borderRadius: 10,
          background: "transparent",
          border: `1px solid ${i ? o.cta : o.border}`,
          color: i ? o.cta : o.textMuted,
          cursor: "pointer",
          fontSize: 14,
          fontWeight: 600,
          fontFamily: "inherit",
          transition: "border-color 0.15s, color 0.15s"
        },
        children: "Cerrar sesión"
      }
    ) })
  ] });
}
function me({ children: t, active: r = !1, onClick: a, style: o, className: c }) {
  const { theme: s } = v();
  return /* @__PURE__ */ e(
    "div",
    {
      onClick: a,
      className: c,
      style: {
        background: s.bgLight,
        border: `1px solid ${r ? s.borderLight : s.border}`,
        borderRadius: 16,
        padding: "20px 20px",
        cursor: a ? "pointer" : "default",
        transition: "background 0.15s, border-color 0.15s, box-shadow 0.15s",
        boxShadow: r ? `0 0 0 1px ${s.borderLight}, 0 4px 16px ${s.bgDark}99` : `0 2px 8px ${s.bgDark}66`,
        ...o
      },
      children: t
    }
  );
}
function Bt({ children: t, style: r, className: a }) {
  const { theme: o } = v();
  return /* @__PURE__ */ e(
    "div",
    {
      className: a,
      style: {
        background: o.bg,
        borderRadius: 20,
        padding: 16,
        ...r
      },
      children: t
    }
  );
}
function St({ href: t, children: r }) {
  return /* @__PURE__ */ e(
    "a",
    {
      href: t,
      style: {
        display: "block",
        textAlign: "center",
        padding: "8px 16px",
        background: "rgba(155, 111, 212, 0.15)",
        borderBottom: "1px solid rgba(155, 111, 212, 0.30)",
        fontSize: 13,
        color: "var(--nh-accent)",
        textDecoration: "none"
      },
      children: r
    }
  );
}
const Ke = "_hero_1kctl_1", Ue = "_content_1kctl_45", Ge = "_title_1kctl_63", Ve = "_highlight_1kctl_93", Ye = "_description_1kctl_107", qe = "_cta_1kctl_137", Je = "_scrollIndicator_1kctl_147", Xe = "_mouse_1kctl_163", Qe = "_wheel_1kctl_181", B = {
  hero: Ke,
  content: Ue,
  title: Ge,
  highlight: Ve,
  description: Ye,
  cta: qe,
  scrollIndicator: Je,
  mouse: Xe,
  wheel: Qe
};
function zt({ title: t, highlight: r, description: a, cta: o }) {
  return /* @__PURE__ */ l("section", { className: B.hero, children: [
    /* @__PURE__ */ l("div", { className: B.content, children: [
      /* @__PURE__ */ l("h1", { className: B.title, children: [
        t,
        /* @__PURE__ */ e("br", {}),
        /* @__PURE__ */ e("span", { className: B.highlight, children: r })
      ] }),
      /* @__PURE__ */ e("p", { className: B.description, children: a }),
      o && /* @__PURE__ */ e("div", { className: B.cta, children: o })
    ] }),
    /* @__PURE__ */ e("div", { className: B.scrollIndicator, children: /* @__PURE__ */ e("div", { className: B.mouse, children: /* @__PURE__ */ e("div", { className: B.wheel }) }) })
  ] });
}
const et = "_imageWrapper_1ydcp_1", tt = "_image_1ydcp_1", rt = "_body_1ydcp_23", nt = "_title_1ydcp_39", ot = "_description_1ydcp_49", at = "_price_1ydcp_59", R = {
  imageWrapper: et,
  image: tt,
  body: rt,
  title: nt,
  description: ot,
  price: at
};
function Mt({ image: t, imageAlt: r, title: a, description: o, price: c }) {
  const { theme: s } = v();
  return /* @__PURE__ */ l(me, { style: { padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ e("div", { className: R.imageWrapper, children: /* @__PURE__ */ e("img", { src: t, alt: r ?? a, className: R.image }) }),
    /* @__PURE__ */ l("div", { className: R.body, children: [
      /* @__PURE__ */ e("h3", { className: R.title, style: { color: s.text }, children: a }),
      /* @__PURE__ */ e("p", { className: R.description, style: { color: s.textMuted }, children: o }),
      /* @__PURE__ */ e("p", { className: R.price, style: { color: s.accentBright }, children: c })
    ] })
  ] });
}
const it = "_card_16ig2_1", ct = "_imageWrapper_16ig2_33", lt = "_image_16ig2_33", st = "_imageOverlay_16ig2_67", dt = "_body_16ig2_81", ht = "_title_16ig2_89", gt = "_excerpt_16ig2_105", pt = "_readMore_16ig2_119", ut = "_arrow_16ig2_135", S = {
  card: it,
  imageWrapper: ct,
  image: lt,
  imageOverlay: st,
  body: dt,
  title: ht,
  excerpt: gt,
  readMore: pt,
  arrow: ut
};
function Lt({
  title: t,
  excerpt: r,
  coverImage: a,
  href: o,
  onClick: c,
  readMoreLabel: s = "Leer más",
  animationDelay: d
}) {
  const { theme: h } = v();
  return /* @__PURE__ */ l(
    "a",
    {
      href: o,
      onClick: c,
      className: S.card,
      style: d !== void 0 ? { animationDelay: `${d}ms` } : void 0,
      children: [
        /* @__PURE__ */ l("div", { className: S.imageWrapper, children: [
          /* @__PURE__ */ e("img", { src: a || "/placeholder.svg", alt: t, className: S.image }),
          /* @__PURE__ */ e("div", { className: S.imageOverlay })
        ] }),
        /* @__PURE__ */ l("div", { className: S.body, children: [
          /* @__PURE__ */ e("h3", { className: S.title, style: { color: h.text }, children: t }),
          /* @__PURE__ */ e("p", { className: S.excerpt, style: { color: h.textMuted }, children: r }),
          /* @__PURE__ */ l("div", { className: S.readMore, style: { color: h.accent }, children: [
            s,
            /* @__PURE__ */ l(
              "svg",
              {
                className: S.arrow,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: [
                  /* @__PURE__ */ e("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
                  /* @__PURE__ */ e("polyline", { points: "12 5 19 12 12 19" })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const bt = "_card_eodbe_1", ft = "_iconCircle_eodbe_21", mt = "_title_eodbe_41", xt = "_description_eodbe_55", H = {
  card: bt,
  iconCircle: ft,
  title: mt,
  description: xt
};
function Tt({ icon: t, title: r, description: a, iconVariant: o = "accent" }) {
  const { theme: c } = v(), s = o === "cta" ? c.cta : o === "success" ? c.success : c.accent;
  return /* @__PURE__ */ l(me, { className: H.card, children: [
    /* @__PURE__ */ e("div", { className: H.iconCircle, style: { background: s }, children: t }),
    /* @__PURE__ */ e("h3", { className: H.title, style: { color: c.text }, children: r }),
    /* @__PURE__ */ e("p", { className: H.description, style: { color: c.textMuted }, children: a })
  ] });
}
export {
  _t as AuthModal,
  He as AuthScreen,
  St as BetaBanner,
  Lt as BlogCard,
  me as Card,
  Bt as CardSection,
  Tt as FeatureCard,
  kt as Header,
  zt as HeroSection,
  fe as Logo,
  Mt as ProductCard,
  wt as ThemeProvider,
  Ct as UserSettings,
  Le as resolveThemeName,
  K as themes,
  v as useTheme
};
