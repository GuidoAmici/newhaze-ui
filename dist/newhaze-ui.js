"use client";
import { jsx as e, jsxs as l, Fragment as P } from "react/jsx-runtime";
import { createContext as ye, useState as x, useMemo as oe, useEffect as D, useContext as we, useRef as G, useCallback as ve } from "react";
const ke = {
  "neon-purple": "new-haze",
  "neon-purple-v2": "new-haze",
  "light-legacy": "canahoria",
  iamsajid: "new-haze",
  "iamsajid-light": "canahoria",
  "dark-purple": "new-haze"
};
function Ce(t) {
  return t ? t in W ? t : ke[t] ?? "new-haze" : "new-haze";
}
const W = {
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
}, ae = "nh_theme", Be = "new-haze", Se = `
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
let ie = !1;
function ze() {
  if (ie || typeof document > "u") return;
  const t = document.createElement("style");
  t.setAttribute("data-nh", "static"), t.textContent = Se, document.head.appendChild(t), ie = !0;
}
const de = ye(null), Me = {
  "new-haze": ["dark", "new-haze"],
  rabbitek: ["dark", "rabbitek"],
  canahoria: ["canahoria"],
  "dark-purple": ["dark"],
  "green-botanical": ["dark", "green-botanical"],
  light: ["light"],
  "dark-orange": ["dark", "dark-orange"]
}, Le = {
  "new-haze": "dark",
  rabbitek: "dark",
  canahoria: "light",
  "dark-purple": "dark",
  "green-botanical": "dark",
  light: "light",
  "dark-orange": "dark"
};
function Te(t, n) {
  const a = document.documentElement;
  a.style.setProperty("--nh-bg-dark", n.bgDark), a.style.setProperty("--nh-bg", n.bg), a.style.setProperty("--nh-bg-light", n.bgLight), a.style.setProperty("--nh-text", n.text), a.style.setProperty("--nh-text-muted", n.textMuted), a.style.setProperty("--nh-text-dim", n.textDim), a.style.setProperty("--nh-border", n.border), a.style.setProperty("--nh-border-light", n.borderLight), a.style.setProperty("--nh-accent", n.accent), a.style.setProperty("--nh-accent-bright", n.accentBright), a.style.setProperty("--nh-accent-neon", n.accentNeon), a.style.setProperty("--nh-cta", n.cta), a.style.setProperty("--nh-cta-light", n.ctaLight), a.style.setProperty("--nh-cta-text", n.ctaText), a.style.setProperty("--nh-error", n.error), a.style.setProperty("--nh-error-bg", n.errorBg), a.style.setProperty("--nh-error-border", n.errorBorder), a.style.setProperty("--nh-success", n.success), a.style.setProperty("--nh-success-bg", n.successBg), a.style.setProperty("--nh-success-border", n.successBorder), a.style.setProperty("--nh-focus", n.focus), a.classList.remove("dark", "new-haze", "rabbitek", "canahoria", "green-botanical", "dark-orange", "light"), Me[t].forEach((o) => a.classList.add(o)), a.style.colorScheme = Le[t];
}
function je({ children: t }) {
  const [n, a] = x(() => {
    try {
      return Ce(localStorage.getItem(ae));
    } catch {
      return Be;
    }
  }), o = oe(() => W[n].colors, [n]);
  D(() => {
    ze(), Te(n, o);
  }, [n, o]);
  const c = (h) => {
    if (h in W) {
      a(h);
      try {
        localStorage.setItem(ae, h);
      } catch {
      }
    }
  }, s = oe(
    () => Object.entries(W).map(([h, { label: d }]) => ({ value: h, label: d })),
    []
  );
  return /* @__PURE__ */ e(de.Provider, { value: { theme: o, themeName: n, setThemeName: c, themeOptions: s }, children: t });
}
function C() {
  const t = we(de);
  if (!t) throw new Error("useTheme must be used within ThemeProvider");
  return t;
}
function ce({ color: t, accentColor: n }) {
  return /* @__PURE__ */ l(P, { children: [
    /* @__PURE__ */ e("circle", { fill: n, cx: "540", cy: "540", r: "500" }),
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
function le({ color: t }) {
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
const De = 1, Ee = 1080 / 283.66;
function he({
  variant: t = "full",
  size: n = 32,
  color: a = "currentColor",
  accentColor: o = "#925cf5",
  className: c,
  style: s,
  "aria-label": h = "New Haze"
}) {
  if (t === "icon")
    return /* @__PURE__ */ e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1080 1080",
        width: n * De,
        height: n,
        className: c,
        style: s,
        "aria-label": h,
        role: "img",
        children: /* @__PURE__ */ e(ce, { color: a, accentColor: o })
      }
    );
  if (t === "wordmark")
    return /* @__PURE__ */ e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1080 283.66",
        width: n * Ee,
        height: n,
        className: c,
        style: s,
        "aria-label": h,
        role: "img",
        children: /* @__PURE__ */ e(le, { color: a })
      }
    );
  const d = 283.66 / 1080, w = 1080 * d + 36, k = w + 1080;
  return /* @__PURE__ */ l(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: `0 0 ${k} 283.66`,
      width: n * (k / 283.66),
      height: n,
      className: c,
      style: s,
      "aria-label": h,
      role: "img",
      children: [
        /* @__PURE__ */ e("g", { transform: `scale(${d})`, children: /* @__PURE__ */ e(ce, { color: a, accentColor: o }) }),
        /* @__PURE__ */ e("g", { transform: `translate(${w}, 0)`, children: /* @__PURE__ */ e(le, { color: a }) })
      ]
    }
  );
}
const se = {
  "new-haze": "🐰",
  rabbitek: "🥕",
  canahoria: "🌿",
  "dark-purple": "🟣",
  "green-botanical": "🌱",
  light: "☀️",
  "dark-orange": "🟠"
};
function Re() {
  const { theme: t, themeName: n, setThemeName: a, themeOptions: o } = C(), [c, s] = x(!1), h = G(null);
  return D(() => {
    if (!c) return;
    function d(g) {
      h.current && !h.current.contains(g.target) && s(!1);
    }
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, [c]), /* @__PURE__ */ l("div", { ref: h, style: { position: "relative" }, children: [
    /* @__PURE__ */ e(
      "button",
      {
        onClick: () => s((d) => !d),
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
        children: se[n] ?? "🟣"
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
    }, children: o.map((d) => /* @__PURE__ */ l(
      "button",
      {
        onClick: () => {
          a(d.value), s(!1);
        },
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          width: "100%",
          padding: "6px 10px",
          background: n === d.value ? t.bgLight : "transparent",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          fontSize: 12,
          color: t.text,
          fontFamily: "inherit"
        },
        children: [
          /* @__PURE__ */ e("span", { children: se[d.value] }),
          /* @__PURE__ */ e("span", { style: { flex: 1, textAlign: "left" }, children: d.label }),
          n === d.value && /* @__PURE__ */ e("span", { style: { color: t.accent }, children: "✓" })
        ]
      },
      d.value
    )) })
  ] });
}
function Pe(t = 768) {
  const [n, a] = x(
    () => typeof window < "u" ? window.innerWidth < t : !1
  );
  return D(() => {
    const o = window.matchMedia(`(max-width: ${t - 1}px)`);
    a(o.matches);
    const c = (s) => a(s.matches);
    return o.addEventListener("change", c), () => o.removeEventListener("change", c);
  }, [t]), n;
}
const $e = [
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
function Ie(t, n) {
  return n.some((a) => t.includes(a));
}
function Fe({ href: t, children: n, style: a, "aria-label": o }) {
  return /* @__PURE__ */ e("a", { href: t, style: a, "aria-label": o, children: n });
}
function Oe({ user: t, onLogout: n, profileHref: a, LinkComponent: o }) {
  const { theme: c } = C(), [s, h] = x(!1), d = G(null);
  return D(() => {
    if (!s) return;
    const g = (f) => {
      d.current && !d.current.contains(f.target) && h(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [s]), /* @__PURE__ */ l("div", { ref: d, style: { position: "relative" }, children: [
    /* @__PURE__ */ l(
      "button",
      {
        onClick: () => h((g) => !g),
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
            h(!1), n == null || n();
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
          onMouseEnter: (g) => {
            const f = g.currentTarget;
            f.style.background = c.bgLight, f.style.color = c.text;
          },
          onMouseLeave: (g) => {
            const f = g.currentTarget;
            f.style.background = "none", f.style.color = c.textMuted;
          },
          children: "Cerrar sesión"
        }
      ) })
    ] })
  ] });
}
function Ze({
  activeApp: t,
  user: n,
  onLogin: a,
  onLogout: o,
  profileHref: c,
  LinkComponent: s = Fe,
  websiteUrl: h = "https://newhaze.ar",
  learnUrl: d = "https://learn.newhaze.ar"
}) {
  const { theme: g } = C(), f = Pe(), w = [
    { label: "Aprender", href: d, app: "learn" },
    { label: "Blog", href: `${h}/blog`, app: "blog" }
  ], k = (i) => ({
    fontSize: 13,
    fontWeight: i ? 600 : 400,
    color: i ? g.accentBright : g.textMuted,
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.15s"
  });
  return /* @__PURE__ */ l("header", { style: {
    borderBottom: `1px solid ${g.border}`,
    padding: f ? "0 16px" : "0 32px",
    display: "flex",
    alignItems: "center",
    gap: 24,
    height: 56,
    background: `${g.bg}ee`,
    backdropFilter: "blur(10px)",
    position: "sticky",
    top: 0,
    zIndex: 100
  }, children: [
    /* @__PURE__ */ e(s, { href: h, "aria-label": "New Haze", style: { display: "flex", alignItems: "center", textDecoration: "none" }, children: /* @__PURE__ */ e(he, { variant: "full", size: 28, color: g.accentBright, accentColor: g.accent }) }),
    !f && /* @__PURE__ */ l("nav", { style: { display: "flex", gap: 20, alignItems: "center" }, children: [
      w.map((i) => /* @__PURE__ */ e(s, { href: i.href, style: k(t === i.app), children: i.label }, i.app)),
      n && $e.map(
        (i) => Ie(n.roles, i.roles) ? /* @__PURE__ */ e(s, { href: i.href, style: k(!1), children: i.label }, i.label) : null
      )
    ] }),
    /* @__PURE__ */ l("div", { style: { marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ e(Re, {}),
      n ? /* @__PURE__ */ e(Oe, { user: n, onLogout: o, profileHref: c, LinkComponent: s }) : /* @__PURE__ */ e(
        "button",
        {
          onClick: a,
          style: {
            background: "none",
            border: `1px solid ${g.border}`,
            borderRadius: 8,
            padding: "4px 10px",
            color: g.accentBright,
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
function Ae({ children: t }) {
  return /* @__PURE__ */ e("div", { style: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px 16px"
  }, children: t });
}
function I({ children: t, title: n, subtitle: a }) {
  const { theme: o } = C();
  return /* @__PURE__ */ l("div", { style: {
    background: o.bg,
    border: `1px solid ${o.border}`,
    borderRadius: 20,
    padding: "32px 28px",
    width: "100%",
    maxWidth: 380
  }, children: [
    n && /* @__PURE__ */ l("div", { style: { marginBottom: a ? 8 : 20 }, children: [
      /* @__PURE__ */ e("div", { style: { fontSize: 20, fontWeight: 700, color: o.text }, children: n }),
      a && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: o.textMuted, marginTop: 4 }, children: a })
    ] }),
    t
  ] });
}
function _({ msg: t }) {
  const { theme: n } = C();
  return /* @__PURE__ */ e("div", { style: {
    background: n.errorBg,
    border: `1px solid ${n.errorBorder}`,
    borderRadius: 8,
    padding: "10px 12px",
    fontSize: 13,
    color: n.error
  }, children: t });
}
function Ne({
  onRegister: t,
  onVerifyOtp: n,
  onResendOtp: a,
  onLogin: o,
  onLoginWithGoogle: c,
  onForgotPassword: s,
  onSaveUsername: h,
  onGuest: d,
  initialMode: g = "login",
  compact: f = !1,
  googleClientId: w,
  appName: k = "New Haze"
}) {
  const { theme: i } = C(), [b, F] = x(g), [m, O] = x(""), [B, y] = x(""), [A, j] = x(["", "", "", "", "", ""]), [Z, ge] = x(""), [S, H] = x(null), [v, Y] = x(!1), [z, K] = x(0), [q, pe] = x(!1), E = G([]);
  D(() => {
    if (z <= 0) return;
    const r = setTimeout(() => K((p) => p - 1), 1e3);
    return () => clearTimeout(r);
  }, [z]), D(() => {
    b === "otp" && setTimeout(() => {
      var r;
      return (r = E.current[0]) == null ? void 0 : r.focus();
    }, 100), b === "profile" && setTimeout(() => {
      var r;
      return (r = document.getElementById("username-input")) == null ? void 0 : r.focus();
    }, 100);
  }, [b]);
  const L = (r) => {
    F(r), H(null);
  }, T = async (r) => {
    H(null), Y(!0);
    try {
      await r();
    } catch (p) {
      H(p.message);
    } finally {
      Y(!1);
    }
  }, J = () => T(async () => {
    if (!m || !B) throw new Error("Completá email y contraseña");
    if (B.length < 6) throw new Error("La contraseña debe tener al menos 6 caracteres");
    await t(m, B), K(60), L("otp");
  }), X = () => T(async () => {
    const r = A.join("");
    if (r.length < 6) throw new Error("Ingresá el código completo de 6 dígitos");
    await n(m, r);
  }), ue = () => T(async () => {
    await a(m), K(60), j(["", "", "", "", "", ""]), setTimeout(() => {
      var r;
      return (r = E.current[0]) == null ? void 0 : r.focus();
    }, 50);
  }), Q = () => T(async () => {
    if (!m || !B) throw new Error("Completá email y contraseña");
    await o(m, B);
  }), ee = () => T(async () => {
    if (!m) throw new Error("Ingresá tu email");
    await s(m), L("forgot_sent");
  }), te = () => T(async () => {
    if (!Z.trim()) throw new Error("Ingresá un nombre de usuario");
    await h(Z.trim());
  }), be = (r, p) => {
    var $;
    const u = p.replace(/\D/g, "").slice(-1), M = [...A];
    M[r] = u, j(M), u && r < 5 && (($ = E.current[r + 1]) == null || $.focus());
  }, fe = (r, p) => {
    var u;
    p.key === "Backspace" && !A[r] && r > 0 && ((u = E.current[r - 1]) == null || u.focus()), p.key === "Enter" && X();
  }, U = ve(async (r) => {
    !(r != null && r.credential) || !c || await T(async () => {
      await c(r.credential);
    });
  }, [c]);
  D(() => {
    var p, u;
    if (!c || !w) return;
    if ((u = (p = window.google) == null ? void 0 : p.accounts) != null && u.id) {
      window.google.accounts.id.initialize({ client_id: w, callback: U });
      return;
    }
    const r = document.createElement("script");
    r.src = "https://accounts.google.com/gsi/client", r.async = !0, r.defer = !0, r.onload = () => {
      var M, $, ne;
      (ne = ($ = (M = window.google) == null ? void 0 : M.accounts) == null ? void 0 : $.id) == null || ne.initialize({ client_id: w, callback: U });
    }, document.head.appendChild(r);
  }, [U, c, w]);
  const xe = () => {
    var r, p, u;
    (u = (p = (r = window.google) == null ? void 0 : r.accounts) == null ? void 0 : p.id) == null || u.prompt();
  }, me = (r) => {
    var M;
    const p = r.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!p) return;
    r.preventDefault();
    const u = p.split("").concat(Array(6).fill("")).slice(0, 6);
    j(u), (M = E.current[Math.min(p.length, 5)]) == null || M.focus();
  }, N = {
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
  }, R = {
    width: "100%",
    padding: "13px",
    borderRadius: 12,
    background: `linear-gradient(135deg, ${i.cta}, ${i.ctaLight})`,
    border: "none",
    color: i.ctaText,
    fontWeight: 700,
    cursor: v ? "not-allowed" : "pointer",
    fontSize: 15,
    opacity: v ? 0.7 : 1,
    fontFamily: "inherit"
  }, V = {
    ...R,
    opacity: 1,
    background: "transparent",
    border: `1px solid ${i.border}`,
    color: i.textMuted
  }, re = /* @__PURE__ */ l(P, { children: [
    b === "otp" && /* @__PURE__ */ l(I, { title: "Revisá tu email", subtitle: /* @__PURE__ */ l(P, { children: [
      "Enviamos un código de 6 dígitos a ",
      /* @__PURE__ */ e("strong", { style: { color: i.accentBright }, children: m })
    ] }), children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", margin: "24px 0" }, onPaste: me, children: A.map((r, p) => /* @__PURE__ */ e(
        "input",
        {
          ref: (u) => {
            E.current[p] = u;
          },
          type: "text",
          inputMode: "numeric",
          maxLength: 1,
          value: r,
          onChange: (u) => be(p, u.target.value),
          onKeyDown: (u) => fe(p, u),
          style: {
            width: 44,
            height: 54,
            textAlign: "center",
            fontSize: 24,
            fontWeight: 700,
            background: i.bgLight,
            border: `1.5px solid ${r ? i.accent : i.border}`,
            borderRadius: 10,
            color: i.text,
            outline: "none",
            fontFamily: "inherit",
            transition: "border-color 0.15s"
          },
          onFocus: (u) => {
            u.target.style.borderColor = i.accentBright;
          },
          onBlur: (u) => {
            u.target.style.borderColor = r ? i.accent : i.border;
          }
        },
        p
      )) }),
      S && /* @__PURE__ */ e(_, { msg: S }),
      /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }, children: [
        /* @__PURE__ */ e("button", { style: R, onClick: X, disabled: v, children: v ? "Verificando..." : "Confirmar código" }),
        /* @__PURE__ */ e(
          "button",
          {
            style: { ...V, opacity: z > 0 ? 0.45 : 1, cursor: z > 0 ? "default" : "pointer" },
            onClick: z > 0 ? void 0 : ue,
            disabled: z > 0 || v,
            children: z > 0 ? `Reenviar en ${z}s` : "Reenviar código"
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { style: { textAlign: "center", marginTop: 14 }, children: /* @__PURE__ */ e(
        "button",
        {
          style: { background: "none", border: "none", cursor: "pointer", color: i.textDim, fontSize: 12, fontFamily: "inherit" },
          onClick: () => L("register"),
          children: "Usar otro email"
        }
      ) })
    ] }),
    b === "profile" && /* @__PURE__ */ e(I, { title: "¿Cómo querés que te llamen?", subtitle: "Podés cambiarlo después desde tu perfil", children: /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }, children: [
      /* @__PURE__ */ e(
        "input",
        {
          id: "username-input",
          value: Z,
          onChange: (r) => ge(r.target.value),
          placeholder: "ej: cultivador420",
          style: N,
          onFocus: (r) => {
            r.target.style.borderColor = i.accent;
          },
          onBlur: (r) => {
            r.target.style.borderColor = i.border;
          },
          onKeyDown: (r) => r.key === "Enter" && te()
        }
      ),
      S && /* @__PURE__ */ e(_, { msg: S }),
      /* @__PURE__ */ e("button", { style: R, onClick: te, disabled: v, children: v ? "Guardando..." : "Empezar →" })
    ] }) }),
    b === "forgot_sent" && /* @__PURE__ */ e(
      I,
      {
        title: "Revisá tu casilla",
        subtitle: /* @__PURE__ */ l(P, { children: [
          "Si existe una cuenta con ",
          /* @__PURE__ */ e("strong", { style: { color: i.accentBright }, children: m }),
          ", vas a recibir un link para restablecer tu contraseña."
        ] }),
        children: /* @__PURE__ */ e("button", { style: { ...R, marginTop: 20 }, onClick: () => L("login"), children: "Volver al inicio de sesión" })
      }
    ),
    b === "forgot" && /* @__PURE__ */ e(I, { title: "Restablecer contraseña", subtitle: "Ingresá tu email y te enviamos un link", children: /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "email",
          value: m,
          onChange: (r) => O(r.target.value),
          placeholder: "tu@email.com",
          style: N,
          onFocus: (r) => {
            r.target.style.borderColor = i.accent;
          },
          onBlur: (r) => {
            r.target.style.borderColor = i.border;
          },
          onKeyDown: (r) => r.key === "Enter" && ee()
        }
      ),
      S && /* @__PURE__ */ e(_, { msg: S }),
      /* @__PURE__ */ e("button", { style: R, onClick: ee, disabled: v, children: v ? "Enviando..." : "Enviar link →" }),
      /* @__PURE__ */ e("button", { style: V, onClick: () => L("login"), children: "← Volver" })
    ] }) }),
    (b === "login" || b === "register") && /* @__PURE__ */ l(I, { children: [
      /* @__PURE__ */ l("div", { style: { textAlign: "center", marginBottom: 28 }, children: [
        /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "center", marginBottom: 14 }, children: /* @__PURE__ */ e(he, { variant: "icon", size: 56, color: "#fff", accentColor: i.accent }) }),
        /* @__PURE__ */ e("div", { style: { fontSize: 13, color: i.textMuted }, children: b === "login" ? "Bienvenido de vuelta" : "Creá tu cuenta para empezar" })
      ] }),
      /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "email",
            value: m,
            onChange: (r) => O(r.target.value),
            placeholder: "Email",
            style: N,
            onFocus: (r) => {
              r.target.style.borderColor = i.accent;
            },
            onBlur: (r) => {
              r.target.style.borderColor = i.border;
            }
          }
        ),
        /* @__PURE__ */ l("div", { style: { position: "relative" }, children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: q ? "text" : "password",
              value: B,
              onChange: (r) => y(r.target.value),
              placeholder: "Contraseña",
              style: { ...N, paddingRight: 42 },
              onFocus: (r) => {
                r.target.style.borderColor = i.accent;
              },
              onBlur: (r) => {
                r.target.style.borderColor = i.border;
              },
              onKeyDown: (r) => r.key === "Enter" && (b === "login" ? Q() : J())
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => pe((r) => !r),
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
              children: q ? /* @__PURE__ */ l("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
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
        S && /* @__PURE__ */ e(_, { msg: S }),
        /* @__PURE__ */ e("button", { style: R, onClick: b === "login" ? Q : J, disabled: v, children: v ? "..." : b === "login" ? "Entrar" : "Crear cuenta" }),
        c && w && /* @__PURE__ */ l(P, { children: [
          /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: 12, margin: "4px 0" }, children: [
            /* @__PURE__ */ e("div", { style: { flex: 1, height: 1, background: i.border } }),
            /* @__PURE__ */ e("span", { style: { fontSize: 11, color: i.textDim, fontFamily: "inherit" }, children: "o" }),
            /* @__PURE__ */ e("div", { style: { flex: 1, height: 1, background: i.border } })
          ] }),
          /* @__PURE__ */ e("button", { style: V, onClick: xe, disabled: v, children: "Continuar con Google" })
        ] }),
        b === "login" && /* @__PURE__ */ e(
          "button",
          {
            style: { background: "none", border: "none", cursor: "pointer", color: i.textDim, fontSize: 12, fontFamily: "inherit", textAlign: "center" },
            onClick: () => L("forgot"),
            children: "¿Olvidaste tu contraseña?"
          }
        )
      ] }),
      /* @__PURE__ */ l("div", { style: { textAlign: "center", marginTop: 20, fontSize: 13, color: i.textMuted, fontFamily: "inherit" }, children: [
        b === "login" ? "¿No tenés cuenta?" : "¿Ya tenés cuenta?",
        " ",
        /* @__PURE__ */ e(
          "span",
          {
            onClick: () => L(b === "login" ? "register" : "login"),
            style: { color: i.accentBright, cursor: "pointer", fontWeight: 600 },
            children: b === "login" ? "Registrate" : "Iniciá sesión"
          }
        )
      ] }),
      d && /* @__PURE__ */ l("div", { style: { textAlign: "center", marginTop: 16 }, children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: d,
            style: { background: "none", border: "none", cursor: "pointer", color: i.textDim, fontSize: 12, fontFamily: "inherit", padding: "4px 8px", borderRadius: 6, transition: "color 0.15s" },
            onMouseEnter: (r) => {
              r.currentTarget.style.color = i.textMuted;
            },
            onMouseLeave: (r) => {
              r.currentTarget.style.color = i.textDim;
            },
            children: "Continuar como invitado"
          }
        ),
        /* @__PURE__ */ e("span", { style: { display: "block", fontSize: 10, color: i.textDim, fontFamily: "inherit", marginTop: 2 }, children: "tu progreso no se guardará" })
      ] })
    ] })
  ] });
  return f ? re : /* @__PURE__ */ e(Ae, { children: re });
}
function He({ onClose: t, initialMode: n, authScreenProps: a }) {
  const { theme: o } = C();
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
              Ne,
              {
                ...a,
                compact: !0,
                initialMode: n
              }
            )
          ]
        }
      )
    }
  );
}
function Ke({ user: t, onUpdateUsername: n, onLogout: a }) {
  const { theme: o } = C(), [c, s] = x(t.username ?? ""), [h, d] = x(!1), [g, f] = x(null), [w, k] = x(!1), [i, b] = x(!1), F = async () => {
    if (!c.trim()) {
      f("Ingresá un nombre de usuario");
      return;
    }
    f(null), d(!0), k(!1);
    try {
      await n(c.trim()), k(!0), setTimeout(() => k(!1), 2e3);
    } catch (y) {
      f(y.message);
    } finally {
      d(!1);
    }
  }, m = {
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
    cursor: h ? "not-allowed" : "pointer",
    fontSize: 14,
    opacity: h ? 0.7 : 1,
    fontFamily: "inherit",
    whiteSpace: "nowrap"
  }, B = t.xp != null && t.level != null ? Math.min(100, t.xp % 1e3 / 1e3 * 100) : null;
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
    t.xp != null && t.level != null && B != null && /* @__PURE__ */ l("div", { children: [
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
        width: `${B}%`,
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
              s(y.target.value), f(null), k(!1);
            },
            placeholder: "nuevo_nombre",
            style: m,
            onFocus: (y) => {
              y.target.style.borderColor = o.accent;
            },
            onBlur: (y) => {
              y.target.style.borderColor = o.border;
            },
            onKeyDown: (y) => y.key === "Enter" && F()
          }
        ),
        /* @__PURE__ */ e("button", { style: O, onClick: F, disabled: h, children: h ? "..." : w ? "✓ Guardado" : "Guardar" })
      ] }),
      g && /* @__PURE__ */ e("div", { style: { marginTop: 8, fontSize: 12, color: o.error }, children: g })
    ] }),
    /* @__PURE__ */ e("div", { style: { height: 1, background: o.border } }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      "button",
      {
        onClick: a,
        onMouseEnter: () => b(!0),
        onMouseLeave: () => b(!1),
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
function Ue({ children: t, active: n = !1, onClick: a, style: o, className: c }) {
  const { theme: s } = C();
  return /* @__PURE__ */ e(
    "div",
    {
      onClick: a,
      className: c,
      style: {
        background: s.bgLight,
        border: `1px solid ${n ? s.borderLight : s.border}`,
        borderRadius: 16,
        padding: "20px 20px",
        cursor: a ? "pointer" : "default",
        transition: "background 0.15s, border-color 0.15s, box-shadow 0.15s",
        boxShadow: n ? `0 0 0 1px ${s.borderLight}, 0 4px 16px ${s.bgDark}99` : `0 2px 8px ${s.bgDark}66`,
        ...o
      },
      children: t
    }
  );
}
function Ve({ children: t, style: n, className: a }) {
  const { theme: o } = C();
  return /* @__PURE__ */ e(
    "div",
    {
      className: a,
      style: {
        background: o.bg,
        borderRadius: 20,
        padding: 16,
        ...n
      },
      children: t
    }
  );
}
export {
  He as AuthModal,
  Ne as AuthScreen,
  Ue as Card,
  Ve as CardSection,
  Ze as Header,
  he as Logo,
  je as ThemeProvider,
  Ke as UserSettings,
  Ce as resolveThemeName,
  W as themes,
  C as useTheme
};
