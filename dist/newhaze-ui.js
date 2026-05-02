"use client";
import { jsx as e, jsxs as l, Fragment as I } from "react/jsx-runtime";
import { createContext as ke, useState as x, useMemo as ce, useEffect as k, useContext as ze, useRef as Q, useCallback as Ae } from "react";
const $ = {
  "new-haze": { classes: ["dark", "new-haze"], colorScheme: "dark" },
  "new-haze-light": { classes: ["new-haze"], colorScheme: "light" }
}, ye = {
  "neon-purple": "new-haze",
  "neon-purple-v2": "new-haze",
  "light-legacy": "new-haze-light",
  iamsajid: "new-haze",
  "iamsajid-light": "new-haze-light",
  "dark-purple": "new-haze",
  "green-botanical": "new-haze",
  light: "new-haze-light",
  "dark-orange": "new-haze",
  rabbitek: "new-haze",
  "rabbitek-light": "new-haze-light",
  canahoria: "new-haze-light",
  "canahoria-dark": "new-haze",
  "techno-violet": "new-haze",
  "techno-green": "new-haze"
};
function Re(n) {
  return n ? n in U ? n : ye[n] ?? "new-haze" : "new-haze";
}
const U = {
  // ── New Haze — premium dark (#0E0E12 + purple #855CF2 + orange #F18604) ───
  "new-haze": {
    label: "New Haze — Oscuro",
    colors: {
      s0: "#0E0E12",
      s1: "#131319",
      s2: "#1A1A22",
      s3: "#22222A",
      shadowSm: "inset 0 1px 1px rgba(133,92,242,0.06), 0 2px 6px rgba(0,0,0,0.60)",
      shadowLg: "inset 0 2px 8px rgba(133,92,242,0.09), 0 10px 30px rgba(0,0,0,0.80)",
      text: "#F0F0F2",
      textMuted: "#68686F",
      textDim: "#35353C",
      border: "#22222A",
      borderLight: "#33333B",
      accent: "#855CF2",
      accentBright: "#9b6fd4",
      accentNeon: "#c8a8ff",
      secondary: "#F18604",
      secondaryBright: "#ffa040",
      error: "hsl(0, 90%, 65%)",
      errorBg: "hsla(0, 90%, 65%, 0.10)",
      errorBorder: "hsla(0, 90%, 65%, 0.25)",
      success: "hsl(150, 70%, 55%)",
      successBg: "hsla(150, 70%, 55%, 0.10)",
      successBorder: "hsla(150, 70%, 55%, 0.25)",
      focus: "#855CF2"
    }
  },
  // ── New Haze — clean white, same accent palette ────────────────────────────
  "new-haze-light": {
    label: "New Haze — Claro",
    colors: {
      s0: "#FAFAFA",
      s1: "#F5F5F7",
      s2: "#EFEFEF",
      s3: "#E8E8EC",
      shadowSm: "inset 0 1px 2px rgba(255,255,255,0.75), 0 2px 4px rgba(0,0,0,0.10)",
      shadowLg: "inset 0 2px 8px rgba(255,255,255,0.90), 0 8px 24px rgba(0,0,0,0.15)",
      text: "#0E0E12",
      textMuted: "#444450",
      textDim: "#888890",
      border: "#DDDDE0",
      borderLight: "#EBEBEE",
      accent: "#855CF2",
      accentBright: "#9b6fd4",
      accentNeon: "#c8a8ff",
      secondary: "#F18604",
      secondaryBright: "#ffa040",
      error: "hsl(0, 75%, 45%)",
      errorBg: "hsla(0, 75%, 45%, 0.08)",
      errorBorder: "hsla(0, 75%, 45%, 0.20)",
      success: "hsl(150, 65%, 35%)",
      successBg: "hsla(150, 65%, 35%, 0.08)",
      successBorder: "hsla(150, 65%, 35%, 0.20)",
      focus: "#855CF2"
    }
  }
}, de = "nh_theme", he = "new-haze", Me = `
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
  --nh-font-sans: 'Rubik', sans-serif;
  --nh-font-mono: 'Roboto Mono', monospace;

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
  --nh-shadow-sm: 0 1px 3px 0 rgba(0,0,0,0.10);
  --nh-shadow-md: 0 4px 12px 0 rgba(0,0,0,0.12);
  --nh-shadow-lg: 0 8px 24px 0 rgba(0,0,0,0.14);
  --nh-shadow-xl: 0 16px 48px 0 rgba(0,0,0,0.18);
  --nh-shadow-glow-accent: 0 0 16px 2px var(--nh-accent);
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
let pe = !1;
function Oe() {
  if (pe || typeof document > "u") return;
  const n = document.createElement("style");
  n.setAttribute("data-nh", "static"), n.textContent = Me, document.head.appendChild(n), pe = !0;
}
const xe = ke(null);
function Ne(n, t) {
  const r = document.documentElement;
  r.style.setProperty("--nh-s0", t.s0), r.style.setProperty("--nh-s1", t.s1), r.style.setProperty("--nh-s2", t.s2), r.style.setProperty("--nh-s3", t.s3), r.style.setProperty("--nh-shadow-sm", t.shadowSm), r.style.setProperty("--nh-shadow-lg", t.shadowLg), r.style.setProperty("--nh-text", t.text), r.style.setProperty("--nh-text-muted", t.textMuted), r.style.setProperty("--nh-text-dim", t.textDim), r.style.setProperty("--nh-border", t.border), r.style.setProperty("--nh-border-light", t.borderLight), r.style.setProperty("--nh-accent", t.accent), r.style.setProperty("--nh-accent-bright", t.accentBright), r.style.setProperty("--nh-accent-neon", t.accentNeon), r.style.setProperty("--nh-secondary", t.secondary), r.style.setProperty("--nh-secondary-bright", t.secondaryBright), r.style.setProperty("--nh-error", t.error), r.style.setProperty("--nh-error-bg", t.errorBg), r.style.setProperty("--nh-error-border", t.errorBorder), r.style.setProperty("--nh-success", t.success), r.style.setProperty("--nh-success-bg", t.successBg), r.style.setProperty("--nh-success-border", t.successBorder), r.style.setProperty("--nh-focus", t.focus), r.style.setProperty("--background", t.s1), r.style.setProperty("--foreground", t.text), r.style.setProperty("--card", t.s2), r.style.setProperty("--card-foreground", t.text), r.style.setProperty("--popover", t.s2), r.style.setProperty("--popover-foreground", t.text), r.style.setProperty("--primary", t.accent), r.style.setProperty("--primary-foreground", "white"), r.style.setProperty("--secondary", t.s3), r.style.setProperty("--secondary-foreground", t.text), r.style.setProperty("--muted", t.s3), r.style.setProperty("--muted-foreground", t.textMuted), r.style.setProperty("--accent", t.s3), r.style.setProperty("--accent-foreground", t.text), r.style.setProperty("--destructive", t.error), r.style.setProperty("--destructive-foreground", "white"), r.style.setProperty("--border", t.border), r.style.setProperty("--input", t.s3), r.style.setProperty("--ring", t.focus);
  const i = $[n];
  r.classList.remove("dark", "new-haze", "rabbitek", "canahoria", "techno-violet", "techno-green", "light"), i.classes.forEach((a) => r.classList.add(a)), r.style.colorScheme = i.colorScheme;
}
function ut({ children: n }) {
  const [t, r] = x(he), i = ce(() => U[t].colors, [t]);
  k(() => {
    try {
      const h = Re(localStorage.getItem(de));
      h !== he && r(h);
    } catch {
    }
  }, []), k(() => {
    Oe(), Ne(t, i);
  }, [t, i]);
  const a = (h) => {
    if (h in U) {
      r(h);
      try {
        localStorage.setItem(de, h);
      } catch {
      }
    }
  }, s = ce(
    () => Object.entries(U).map(([h, { label: p }]) => ({ value: h, label: p })),
    []
  );
  return /* @__PURE__ */ e(xe.Provider, { value: { theme: i, themeName: t, setThemeName: a, themeOptions: s }, children: n });
}
function S() {
  const n = ze(xe);
  if (!n) throw new Error("useTheme must be used within ThemeProvider");
  return n;
}
const gt = {
  // ── Theme-scoped (value changes per active theme) ──────────────────────────
  // Surfaces
  S0: "--nh-s0",
  // page background (darkest)
  S1: "--nh-s1",
  // section / container panels
  S2: "--nh-s2",
  // cards and sub-panel groups
  S3: "--nh-s3",
  // interactive elements inside cards
  // Elevation shadows (theme-aware)
  SHADOW_SM: "--nh-shadow-sm",
  SHADOW_LG: "--nh-shadow-lg",
  // Text
  TEXT: "--nh-text",
  TEXT_MUTED: "--nh-text-muted",
  TEXT_DIM: "--nh-text-dim",
  // Borders
  BORDER: "--nh-border",
  BORDER_LIGHT: "--nh-border-light",
  // Accent
  ACCENT: "--nh-accent",
  ACCENT_BRIGHT: "--nh-accent-bright",
  ACCENT_NEON: "--nh-accent-neon",
  SECONDARY: "--nh-secondary",
  SECONDARY_BRIGHT: "--nh-secondary-bright",
  // Semantic states
  ERROR: "--nh-error",
  ERROR_BG: "--nh-error-bg",
  ERROR_BORDER: "--nh-error-border",
  SUCCESS: "--nh-success",
  SUCCESS_BG: "--nh-success-bg",
  SUCCESS_BORDER: "--nh-success-border",
  FOCUS: "--nh-focus",
  // ── Static (set once, same across all themes) ──────────────────────────────
  // Spacing
  SPACE_0: "--nh-space-0",
  SPACE_1: "--nh-space-1",
  SPACE_2: "--nh-space-2",
  SPACE_3: "--nh-space-3",
  SPACE_4: "--nh-space-4",
  SPACE_5: "--nh-space-5",
  SPACE_6: "--nh-space-6",
  SPACE_7: "--nh-space-7",
  SPACE_8: "--nh-space-8",
  SPACE_10: "--nh-space-10",
  SPACE_12: "--nh-space-12",
  SPACE_14: "--nh-space-14",
  SPACE_16: "--nh-space-16",
  SPACE_20: "--nh-space-20",
  SPACE_24: "--nh-space-24",
  // Typography — font families
  FONT_SANS: "--nh-font-sans",
  FONT_MONO: "--nh-font-mono",
  // Typography — sizes
  TEXT_XS: "--nh-text-xs",
  TEXT_SM: "--nh-text-sm",
  TEXT_BASE: "--nh-text-base",
  TEXT_MD: "--nh-text-md",
  TEXT_LG: "--nh-text-lg",
  TEXT_XL: "--nh-text-xl",
  TEXT_2XL: "--nh-text-2xl",
  TEXT_3XL: "--nh-text-3xl",
  TEXT_4XL: "--nh-text-4xl",
  // Typography — weights
  WEIGHT_REGULAR: "--nh-weight-regular",
  WEIGHT_MEDIUM: "--nh-weight-medium",
  WEIGHT_SEMIBOLD: "--nh-weight-semibold",
  WEIGHT_BOLD: "--nh-weight-bold",
  WEIGHT_BLACK: "--nh-weight-black",
  // Typography — line height
  LEADING_TIGHT: "--nh-leading-tight",
  LEADING_SNUG: "--nh-leading-snug",
  LEADING_NORMAL: "--nh-leading-normal",
  LEADING_LOOSE: "--nh-leading-loose",
  // Typography — letter spacing
  TRACKING_TIGHT: "--nh-tracking-tight",
  TRACKING_NORMAL: "--nh-tracking-normal",
  TRACKING_WIDE: "--nh-tracking-wide",
  TRACKING_WIDER: "--nh-tracking-wider",
  // Border radius
  RADIUS_SM: "--nh-radius-sm",
  RADIUS_MD: "--nh-radius-md",
  RADIUS_LG: "--nh-radius-lg",
  RADIUS_XL: "--nh-radius-xl",
  RADIUS_2XL: "--nh-radius-2xl",
  RADIUS_3XL: "--nh-radius-3xl",
  RADIUS_FULL: "--nh-radius-full",
  // Shadows (static)
  SHADOW_MD: "--nh-shadow-md",
  SHADOW_XL: "--nh-shadow-xl",
  SHADOW_GLOW_ACCENT: "--nh-shadow-glow-accent",
  SHADOW_GLOW_NEON: "--nh-shadow-glow-neon",
  // Z-index
  Z_BASE: "--nh-z-base",
  Z_RAISED: "--nh-z-raised",
  Z_STICKY: "--nh-z-sticky",
  Z_OVERLAY: "--nh-z-overlay",
  Z_MODAL: "--nh-z-modal",
  Z_TOAST: "--nh-z-toast",
  Z_TOOLTIP: "--nh-z-tooltip",
  // Motion — durations
  DURATION_INSTANT: "--nh-duration-instant",
  DURATION_FAST: "--nh-duration-fast",
  DURATION_NORMAL: "--nh-duration-normal",
  DURATION_SLOW: "--nh-duration-slow",
  DURATION_XSLOW: "--nh-duration-xslow",
  // Motion — easings
  EASE_LINEAR: "--nh-ease-linear",
  EASE_IN: "--nh-ease-in",
  EASE_OUT: "--nh-ease-out",
  EASE_INOUT: "--nh-ease-inout",
  EASE_SPRING: "--nh-ease-spring",
  EASE_BOUNCE: "--nh-ease-bounce"
}, q = "new-haze";
function De() {
  const n = [...new Set(
    Object.values($).flatMap((s) => s.classes)
  )], t = JSON.stringify(
    Object.fromEntries(Object.entries(ye))
  ), r = Object.entries($).map(
    ([s, { classes: h, colorScheme: p }]) => `if(t===${JSON.stringify(s)}){el.classList.add(${h.map((m) => JSON.stringify(m)).join(",")});el.style.colorScheme=${JSON.stringify(p)};}`
  ).join("else "), i = $[q].classes.map((s) => JSON.stringify(s)).join(","), a = JSON.stringify($[q].colorScheme);
  return `(function(){try{var l=${t};var s=localStorage.getItem('nh_theme')||${JSON.stringify(q)};var t=l[s]||s;var el=document.documentElement;el.classList.remove(${n.map((s) => JSON.stringify(s)).join(",")});${r}else{el.classList.add(${i});el.style.colorScheme=${a};}}catch(e){}})();`;
}
const mt = De();
function ue({ color: n, accentColor: t }) {
  return /* @__PURE__ */ l(I, { children: [
    /* @__PURE__ */ e("circle", { fill: t, cx: "540", cy: "540", r: "500" }),
    /* @__PURE__ */ e("path", { fill: n, d: "M708.29,500.15v142.18c0,98.59-80.59,175.83-178.98,169.66-42.21-2.65-80.2-20.85-108.31-48.96-30.45-30.45-49.29-72.52-49.29-119v-143.88c0-5.52,4.48-10,10-10h100.18c-.58.33-1.16.67-1.72,1.01-.98.59-1.95,1.21-2.88,1.85-.5.33-.98.65-1.45.99-.77.54-1.52,1.09-2.25,1.66-.07.05-.14.1-.2.16-.64.5-1.28,1-1.91,1.52-.03.02-.05.04-.07.06-.26.21-.52.43-.77.66-.33.26-.65.54-.97.82-.02.03-.05.05-.07.06-.05.04-.09.08-.13.11-.09.08-.19.17-.29.26-.52.46-1.03.93-1.54,1.41-.02.02-.04.04-.06.06-.62.58-1.23,1.18-1.83,1.79-.6.59-1.19,1.19-1.77,1.81-.59.64-1.18,1.28-1.76,1.93-.58.66-1.15,1.33-1.72,2-.56.68-1.12,1.37-1.67,2.07h-.01c-4.04,5.13-7.72,10.85-11.13,17.11-3.42,6.27-5.54,14.07-6.81,23.11-.02.2-.05.41-.08.61,0,.03,0,.05-.01.08-.33,3.62,1.34,5.3,4.89,5.07.25-.02.5-.07.76-.16,12.51-4.22,25.29-6.93,38.33-8.91,4.04-.53,5.04,5.27,1.18,6.89-14.46,4.22-28.76,8.97-42.07,16.12-.16.08-.31.19-.45.31-2.73,2.23-4.21,5.77-4.23,10.88v.24c.01,5.28.11,10.78.25,16.45.18,7.25,1.16,14.45,2.34,21.58,1.27,7.69,2.93,15.28,4.99,22.76,1.22,3.97,3.27,6.18,6.08,6.7,23.82,5.65,46.91,13.55,71,18.08,1.75.31,3.16,2.03,3.23,3.96.09,2.55.12,3.83.22,6.36.07,1.93-1.19,3.4-2.86,3.35-22.54-2.36-43.91-8.36-65.83-13.92-2.61-.81-3.21.69-1.73,4.4h0s.01.02.01.02c6.44,15.07,14.52,29.43,24.09,42.75.05.08.11.16.16.23.13.2.27.38.41.56.14.21.28.4.43.59.24.33.48.65.71.96,6.63,9.04,13.95,17.56,21.92,25.51,6.19,6.24,12.17,11.55,18.53,15.08h0c1.59.88,3.21,1.65,4.86,2.3.66.26,1.33.49,1.99.71.68.21,1.36.42,2.04.59,1.02.26,2.06.47,3.12.64,1.61.25,3.26.37,4.95.37s3.32-.12,4.92-.37c1.06-.17,2.09-.38,3.12-.64.34-.09.68-.18,1.02-.28.34-.1.68-.2,1.01-.31.67-.22,1.34-.45,1.99-.71h.01c1-.4,1.96-.82,2.93-1.3h.01c.64-.32,1.28-.65,1.91-1,.65-.35,1.28-.72,1.91-1.11,5.65-3.5,11.05-8.35,16.62-13.97,19.36-19.31,34.99-42.13,46.14-66.99,1.02-2.82.33-3.85-2-3.04-18.54,3.92-37.01,7.6-55.93,8.84-1.59.12-2.73-1.25-2.62-3.14.21-3.39.31-5.09.5-8.51.11-1.89,1.5-3.65,3.2-4.07,21.45-6.66,42.36-14.76,63.92-21.12,2.66-.41,4.58-2.23,5.69-5.52.01-.03.01-.04.01-.07,1.58-6.16,2.88-12.4,3.92-18.69,1.17-7.13,2.16-14.33,2.34-21.58.02-.94.05-1.88.06-2.82-.06-.46-.15-.89-.25-1.3-16.32-.13-32.68-.4-48.96-.89-19.82-.6-39.76-2.32-58.97-7.42-1.85-.5-2.89-1.72-3.26-3.14-1.65-2.19-1.13-6.23,2-7,32.56-8.01,32.06-8.42,102.01-17.75.14,0,2.23.01,2.36,0,2.07-.14,3.49-.65,4.26-1.5-.48-4.89-1.16-9.46-2.1-13.69-1.14-5.13-2.65-9.75-4.67-13.78-.23-.52-.46-1-.69-1.4-.51-.95-1.04-1.89-1.56-2.8-3.94-6.88-8.24-13.05-13.04-18.46-.19-.21-.36-.41-.54-.6-.63-.7-1.27-1.38-1.93-2.06-.31-.33-.61-.64-.92-.95-.3-.3-.6-.59-.89-.87-.28-.29-.57-.56-.86-.83-.28-.28-.56-.53-.83-.78s-.53-.49-.79-.72c-3.95-3.53-8.21-6.63-12.83-9.27h99.95c5.53,0,10,4.48,10,10Z" }),
    /* @__PURE__ */ e("path", { fill: n, d: "M565.01,350.13c0,35.82-13.84,66.59-20.93,80-1.74,3.28-6.43,3.28-8.16,0-7.09-13.41-20.93-44.18-20.93-80s13.84-66.59,20.93-80c1.74-3.28,6.43-3.28,8.16,0,7.09,13.41,20.93,44.18,20.93,80Z" }),
    /* @__PURE__ */ e("path", { fill: n, d: "M604.18,405.39c-18.35,18.35-41.22,27.03-51.72,30.27-2.57.79-4.98-1.61-4.18-4.18,3.24-10.51,11.92-33.37,30.27-51.72,18.35-18.35,41.22-27.03,51.72-30.27,2.57-.79,4.98,1.61,4.18,4.18-3.24,10.51-11.92,33.37-30.27,51.72Z" }),
    /* @__PURE__ */ e("path", { fill: n, d: "M501.45,380.02c18.35,18.35,27.03,41.22,30.27,51.72.79,2.57-1.61,4.98-4.18,4.18-10.51-3.24-33.37-11.92-51.72-30.27-18.35-18.35-27.03-41.22-30.27-51.72-.79-2.57,1.61-4.98,4.18-4.18,10.51,3.24,33.37,11.92,51.72,30.27Z" }),
    /* @__PURE__ */ e("path", { fill: n, d: "M494.16,431.69c16.38,0,30.46,6.33,36.6,9.57,1.5.79,1.5,2.94,0,3.73-6.14,3.24-20.21,9.57-36.6,9.57-16.38,0-30.46-6.33-36.6-9.57-1.5-.79-1.5-2.94,0-3.73,6.14-3.24,20.21-9.57,36.6-9.57Z" }),
    /* @__PURE__ */ e("path", { fill: n, d: "M585.85,454.34c-16.38,0-30.46-6.33-36.6-9.57-1.5-.79-1.5-2.94,0-3.73,6.14-3.24,20.21-9.57,36.6-9.57,16.38,0,30.46,6.33,36.6,9.57,1.5.79,1.5,2.94,0,3.73-6.14,3.24-20.21,9.57-36.6,9.57Z" }),
    /* @__PURE__ */ e("path", { fill: n, d: "M551.57,465.25c-6.32-6.32-9.31-14.2-10.43-17.81-.27-.89.56-1.71,1.44-1.44,3.62,1.12,11.49,4.11,17.81,10.43,6.32,6.32,9.31,14.2,10.43,17.81.27.89-.56,1.71-1.44,1.44-3.62-1.12-11.49-4.11-17.81-10.43Z" }),
    /* @__PURE__ */ e("path", { fill: n, d: "M519.6,456.51c6.32-6.32,14.2-9.31,17.81-10.43.89-.27,1.71.56,1.44,1.44-1.12,3.62-4.11,11.49-10.43,17.81s-14.2,9.31-17.81,10.43c-.89.27-1.71-.56-1.44-1.44,1.12-3.62,4.11-11.49,10.43-17.81Z" })
  ] });
}
function ge({ color: n }) {
  return /* @__PURE__ */ l(I, { children: [
    /* @__PURE__ */ e("path", { fill: n, d: "M48.93,213.77c-3.1-.12-4.64-1.43-4.64-3.93l-4.28-136.04c0-2.5,1.67-3.81,5-3.93h40.35c2.02.36,3.57,2.03,4.64,5l20.35,91.77,3.21-92.84c0-2.5,1.54-3.81,4.64-3.93h40.35c3.33.12,5,1.43,5,3.93l-4.28,136.04c0,2.5-1.55,3.81-4.64,3.93h-41.96c-3.69,0-6.13-1.19-7.32-3.57l-12.5-34.28,2.14,32.85c-.48,3.21-2.38,4.88-5.71,5h-40.35Z" }),
    /* @__PURE__ */ e("path", { fill: n, d: "M194.25,213.77c-9.76.36-15.59-3.21-17.5-10.71l-3.21-102.84c.12-7.26,2.68-14.19,7.68-20.8,5-6.61,11.01-9.79,18.03-9.55h69.27c7.02-.24,13.03,2.95,18.03,9.55s7.56,13.54,7.68,20.8l-1.07,35.71c-.12,2.62-1.55,3.93-4.28,3.93h-42.13c-3.1-.12-4.64-1.43-4.64-3.93l.36-7.14c.36-7.97-1.07-12.59-4.28-13.84s-6.43-1.25-9.64,0-4.64,5.86-4.28,13.84l.54,18.57h32.31c2.5,0,3.93,1.55,4.28,4.64v10.71c0,3.45-1.19,5.24-3.57,5.36h-32.31l.54,20.71c.83,2.86,2.5,4.64,5,5.36h4.64c2.5-.71,4.16-2.5,5-5.36l.36-11.07c0-2.5,1.54-3.81,4.64-3.93h40.71c3.33.12,5,1.43,5,3.93l-.71,25.35c-1.91,7.5-7.74,11.07-17.5,10.71h-78.91Z" }),
    /* @__PURE__ */ e("path", { fill: n, d: "M447.77,213.77h-42.49c-5.24-.12-9.7-1.79-13.39-5-2.5-2.26-6.31-11.6-11.43-28.03-5.12,16.43-8.93,25.77-11.43,28.03-3.69,3.21-8.15,4.88-13.39,5h-42.49c-3.1-.12-4.64-1.43-4.64-3.93l-4.28-136.04c0-2.5,1.67-3.81,5-3.93h40.35c3.09.12,4.64,1.43,4.64,3.93l2.5,76.06,14.28-57.49c2.02-2.97,5.18-4.46,9.46-4.46s7.44,1.49,9.46,4.46l14.28,57.49,2.5-76.06c0-2.5,1.54-3.81,4.64-3.93h40.35c3.33.12,5,1.43,5,3.93l-4.28,136.04c0,2.5-1.55,3.81-4.64,3.93Z" }),
    /* @__PURE__ */ e("path", { fill: n, d: "M642.58,209.85c0,2.5-1.55,3.81-4.64,3.93h-40.35c-3.33-.12-5-1.43-5-3.93l1.07-41.96h-17.14l1.07,41.96c0,2.5-1.67,3.81-5,3.93h-40.35c-3.1-.12-4.64-1.43-4.64-3.93l-4.28-136.04c0-2.5,1.67-3.81,5-3.93h40.35c3.09.12,4.64,1.43,4.64,3.93l2.5,73.56h18.57l2.5-73.56c0-2.5,1.54-3.81,4.64-3.93h40.35c3.33.12,5,1.43,5,3.93l-4.28,136.04Z" }),
    /* @__PURE__ */ e("path", { fill: n, d: "M665.44,213.77c-3.1-.12-4.64-1.43-4.64-3.93l-3.93-109.62c.12-7.26,2.68-14.19,7.68-20.8,5-6.61,11.01-9.79,18.03-9.55h68.91c7.02-.24,13.03,2.95,18.03,9.55s7.56,13.54,7.68,20.8l-3.93,109.62c0,2.5-1.55,3.81-4.64,3.93h-40.35c-3.33-.12-5-1.43-5-3.93l1.07-41.78h-14.64l1.07,41.78c0,2.5-1.67,3.81-5,3.93h-40.35ZM724.71,147.36l1.07-18.57c.36-7.97-1.07-12.59-4.28-13.84s-6.43-1.25-9.64,0c-3.21,1.25-4.64,5.86-4.28,13.84l1.07,18.57h16.07Z" }),
    /* @__PURE__ */ e("path", { fill: n, d: "M796.12,213.77c-2.5,0-3.93-1.54-4.28-4.64v-34.99c1.43-3.93,3.33-6.43,5.71-7.5l63.92-51.42h-69.99c-2.38-.12-3.57-1.9-3.57-5.36v-35.35c.36-3.09,1.79-4.64,4.28-4.64h112.12c2.5,0,3.93,1.55,4.28,4.64v34.99c-1.43,3.93-3.33,6.55-5.71,7.86l-65.34,50.88,63.2.18c2.38.12,3.57,1.91,3.57,5.36v35.35c-.36,3.1-1.79,4.64-4.28,4.64h-103.91Z" }),
    /* @__PURE__ */ e("path", { fill: n, d: "M940.02,213.77c-9.76.36-15.59-3.21-17.5-10.71l-3.21-102.84c.12-7.26,2.68-14.19,7.68-20.8s11.01-9.79,18.03-9.55h69.27c7.02-.24,13.03,2.95,18.03,9.55,5,6.61,7.56,13.54,7.68,20.8l-1.07,35.71c-.12,2.62-1.55,3.93-4.28,3.93h-42.13c-3.1-.12-4.64-1.43-4.64-3.93l.36-7.14c.36-7.97-1.07-12.59-4.28-13.84s-6.43-1.25-9.64,0-4.64,5.86-4.28,13.84l.54,18.57h32.31c2.5,0,3.93,1.55,4.28,4.64v10.71c0,3.45-1.19,5.24-3.57,5.36h-32.31l.54,20.71c.83,2.86,2.5,4.64,5,5.36h4.64c2.5-.71,4.17-2.5,5-5.36l.36-11.07c0-2.5,1.54-3.81,4.64-3.93h40.71c3.33.12,5,1.43,5,3.93l-.71,25.35c-1.9,7.5-7.74,11.07-17.5,10.71h-78.91Z" })
  ] });
}
const Be = 1, Pe = 1080 / 283.66;
function be({
  variant: n = "full",
  size: t = 32,
  color: r = "var(--nh-accent-bright)",
  accentColor: i = "var(--nh-accent)",
  className: a,
  style: s,
  "aria-label": h = "New Haze"
}) {
  if (n === "icon")
    return /* @__PURE__ */ e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1080 1080",
        width: t * Be,
        height: t,
        className: a,
        style: s,
        "aria-label": h,
        role: "img",
        children: /* @__PURE__ */ e(ue, { color: r, accentColor: i })
      }
    );
  if (n === "wordmark")
    return /* @__PURE__ */ e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1080 283.66",
        width: t * Pe,
        height: t,
        className: a,
        style: s,
        "aria-label": h,
        role: "img",
        children: /* @__PURE__ */ e(ge, { color: r })
      }
    );
  const p = 283.66 / 1080, w = 1080 * p + 36, v = w + 1080;
  return /* @__PURE__ */ l(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: `0 0 ${v} 283.66`,
      width: t * (v / 283.66),
      height: t,
      className: a,
      style: s,
      "aria-label": h,
      role: "img",
      children: [
        /* @__PURE__ */ e("g", { transform: `scale(${p})`, children: /* @__PURE__ */ e(ue, { color: r, accentColor: i }) }),
        /* @__PURE__ */ e("g", { transform: `translate(${w}, 0)`, children: /* @__PURE__ */ e(ge, { color: r }) })
      ]
    }
  );
}
const me = {
  "new-haze": "🌙",
  "new-haze-light": "☀️"
};
function Ie() {
  const { theme: n, themeName: t, setThemeName: r, themeOptions: i } = S(), [a, s] = x(!1), h = Q(null);
  return k(() => {
    if (!a) return;
    function p(m) {
      h.current && !h.current.contains(m.target) && s(!1);
    }
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [a]), /* @__PURE__ */ l("div", { ref: h, style: { position: "relative" }, children: [
    /* @__PURE__ */ e(
      "button",
      {
        onClick: () => s((p) => !p),
        "aria-label": "Cambiar tema",
        style: {
          background: "none",
          border: `1px solid ${n.border}`,
          borderRadius: 8,
          padding: "4px 8px",
          cursor: "pointer",
          fontSize: 14,
          lineHeight: 1
        },
        children: me[t] ?? "🌙"
      }
    ),
    a && /* @__PURE__ */ e("div", { style: {
      position: "absolute",
      right: 0,
      top: "100%",
      marginTop: 4,
      background: n.s2,
      border: `1px solid ${n.border}`,
      borderRadius: 10,
      padding: 4,
      zIndex: 200,
      minWidth: 170,
      boxShadow: "0 8px 24px rgba(0,0,0,0.14)"
    }, children: i.map((p) => /* @__PURE__ */ l(
      "button",
      {
        onClick: () => {
          r(p.value), s(!1);
        },
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          width: "100%",
          padding: "6px 10px",
          background: t === p.value ? n.s2 : "transparent",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          fontSize: 12,
          color: n.text,
          fontFamily: "inherit"
        },
        children: [
          /* @__PURE__ */ e("span", { children: me[p.value] }),
          /* @__PURE__ */ e("span", { style: { flex: 1, textAlign: "left" }, children: p.label }),
          t === p.value && /* @__PURE__ */ e("span", { style: { color: n.accent }, children: "✓" })
        ]
      },
      p.value
    )) })
  ] });
}
function Fe(n = 768) {
  const [t, r] = x(!1);
  return k(() => {
    const i = window.matchMedia(`(max-width: ${n - 1}px)`);
    r(i.matches);
    const a = (s) => r(s.matches);
    return i.addEventListener("change", a), () => i.removeEventListener("change", a);
  }, [n]), t;
}
const Le = [
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
function $e(n, t) {
  return t.some((r) => n.includes(r));
}
function We({ href: n, children: t, style: r, "aria-label": i, onMouseEnter: a, onMouseLeave: s }) {
  return /* @__PURE__ */ e("a", { href: n, style: r, "aria-label": i, onMouseEnter: a, onMouseLeave: s, children: t });
}
function je({ user: n, onLogout: t, profileHref: r, LinkComponent: i }) {
  const { theme: a } = S(), [s, h] = x(!1), p = Q(null);
  return k(() => {
    if (!s) return;
    const m = (b) => {
      p.current && !p.current.contains(b.target) && h(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [s]), /* @__PURE__ */ l("div", { ref: p, style: { position: "relative" }, children: [
    /* @__PURE__ */ l(
      "button",
      {
        onClick: () => h((m) => !m),
        style: {
          background: "none",
          border: `1px solid ${a.border}`,
          borderRadius: 8,
          padding: "4px 10px",
          color: a.accentBright,
          cursor: "pointer",
          fontSize: 12,
          fontFamily: "inherit",
          fontWeight: 600,
          transition: "border-color 0.15s"
        },
        children: [
          n.username,
          /* @__PURE__ */ e("span", { style: { marginLeft: 4, fontSize: 9, opacity: 0.7 }, children: s ? "▲" : "▼" })
        ]
      }
    ),
    s && /* @__PURE__ */ l("div", { style: {
      position: "absolute",
      top: "calc(100% + 8px)",
      right: 0,
      minWidth: 200,
      background: a.s2,
      border: `1px solid ${a.border}`,
      borderRadius: 12,
      padding: "8px 0",
      boxShadow: "0 8px 24px rgba(0,0,0,0.14)",
      zIndex: 200
    }, children: [
      /* @__PURE__ */ l("div", { style: { padding: "10px 16px 12px", borderBottom: `1px solid ${a.border}` }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 13, fontWeight: 700, color: a.text }, children: n.username }),
        /* @__PURE__ */ e("div", { style: { fontSize: 11, color: a.textDim, marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: n.email })
      ] }),
      r && /* @__PURE__ */ e("div", { style: { padding: "4px 8px 0" }, children: /* @__PURE__ */ e(
        i,
        {
          href: r,
          style: {
            display: "block",
            padding: "8px 10px",
            borderRadius: 8,
            fontSize: 13,
            color: a.textMuted,
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
            h(!1), t == null || t();
          },
          style: {
            width: "100%",
            textAlign: "left",
            background: "none",
            border: "none",
            padding: "8px 10px",
            borderRadius: 8,
            color: a.textMuted,
            cursor: "pointer",
            fontSize: 13,
            fontFamily: "inherit",
            transition: "background 0.1s, color 0.1s"
          },
          onMouseEnter: (m) => {
            const b = m.currentTarget;
            b.style.background = a.s2, b.style.color = a.text;
          },
          onMouseLeave: (m) => {
            const b = m.currentTarget;
            b.style.background = "none", b.style.color = a.textMuted;
          },
          children: "Cerrar sesión"
        }
      ) })
    ] })
  ] });
}
function yt({
  activeApp: n,
  user: t,
  onLogin: r,
  onLogout: i,
  profileHref: a,
  LinkComponent: s = We,
  websiteUrl: h = "https://newhaze.ar",
  learnUrl: p = "https://learn.newhaze.ar",
  extraNavLinks: m
}) {
  const { theme: b } = S(), w = Fe(), [v, c] = x(!1);
  k(() => {
    const d = () => c(window.scrollY > 40);
    return window.addEventListener("scroll", d, { passive: !0 }), () => window.removeEventListener("scroll", d);
  }, []);
  const y = [
    { label: "Productos", href: `${h}/#productos`, app: "website" },
    { label: "Learn", href: p, app: "learn" },
    { label: "Blog", href: `${h}/blog`, app: "blog" },
    { label: "Nosotros", href: `${h}/vision`, app: "vision" }
  ], z = (d) => ({
    fontSize: 14,
    fontWeight: d ? 600 : 400,
    color: d ? "#F0F0F2" : "#666670",
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.15s"
  });
  return /* @__PURE__ */ e("header", { style: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    height: 64,
    background: v ? "rgba(14,14,18,0.92)" : "transparent",
    backdropFilter: v ? "blur(16px)" : "none",
    WebkitBackdropFilter: v ? "blur(16px)" : "none",
    borderBottom: v ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
    transition: "background 0.3s, border-color 0.3s"
  }, children: /* @__PURE__ */ l("div", { style: {
    maxWidth: 1280,
    margin: "0 auto",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    gap: 24,
    padding: w ? "0 20px" : "0 40px",
    boxSizing: "border-box"
  }, children: [
    /* @__PURE__ */ e(s, { href: h, "aria-label": "New Haze", style: { display: "flex", alignItems: "center", textDecoration: "none" }, children: /* @__PURE__ */ e(be, { variant: "full", size: 28 }) }),
    !w && /* @__PURE__ */ l("nav", { style: { display: "flex", gap: 36, alignItems: "center" }, children: [
      y.map((d) => /* @__PURE__ */ e(
        s,
        {
          href: d.href,
          style: z(n === d.app),
          onMouseEnter: (_) => {
            _.currentTarget.style.color = "#F0F0F2";
          },
          onMouseLeave: (_) => {
            _.currentTarget.style.color = n === d.app ? "#F0F0F2" : "#666670";
          },
          children: d.label
        },
        d.app
      )),
      m == null ? void 0 : m.map((d) => /* @__PURE__ */ e(
        s,
        {
          href: d.href,
          style: z(!1),
          onMouseEnter: (_) => {
            _.currentTarget.style.color = "#F0F0F2";
          },
          onMouseLeave: (_) => {
            _.currentTarget.style.color = "#666670";
          },
          children: d.label
        },
        d.href
      )),
      t && Le.map(
        (d) => $e(t.roles, d.roles) ? /* @__PURE__ */ e(s, { href: d.href, style: z(!1), children: d.label }, d.label) : null
      )
    ] }),
    /* @__PURE__ */ l("div", { style: { marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ e(Ie, {}),
      t ? /* @__PURE__ */ e(je, { user: t, onLogout: i, profileHref: a, LinkComponent: s }) : /* @__PURE__ */ e(
        "button",
        {
          onClick: r,
          style: {
            background: "#855CF2",
            border: "none",
            borderRadius: 8,
            padding: "8px 20px",
            color: "#fff",
            cursor: "pointer",
            fontSize: 13,
            fontFamily: "inherit",
            fontWeight: 500,
            transition: "background 0.15s"
          },
          onMouseEnter: (d) => {
            d.currentTarget.style.background = "#9b6fd4";
          },
          onMouseLeave: (d) => {
            d.currentTarget.style.background = "#855CF2";
          },
          children: "Acceder"
        }
      )
    ] })
  ] }) });
}
function He({ children: n }) {
  return /* @__PURE__ */ e("div", { style: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px 16px"
  }, children: n });
}
function L({ children: n, title: t, subtitle: r }) {
  const { theme: i } = S();
  return /* @__PURE__ */ l("div", { style: {
    background: i.s1,
    border: `1px solid ${i.border}`,
    borderRadius: 20,
    padding: "32px 28px",
    width: "100%",
    maxWidth: 380
  }, children: [
    t && /* @__PURE__ */ l("div", { style: { marginBottom: r ? 8 : 20 }, children: [
      /* @__PURE__ */ e("div", { style: { fontSize: 20, fontWeight: 700, color: i.text }, children: t }),
      r && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: i.textMuted, marginTop: 4 }, children: r })
    ] }),
    n
  ] });
}
function H({ msg: n }) {
  const { theme: t } = S();
  return /* @__PURE__ */ e("div", { style: {
    background: t.errorBg,
    border: `1px solid ${t.errorBorder}`,
    borderRadius: 8,
    padding: "10px 12px",
    fontSize: 13,
    color: t.error
  }, children: n });
}
function Ge({
  onRegister: n,
  onVerifyOtp: t,
  onResendOtp: r,
  onLogin: i,
  onLoginWithGoogle: a,
  onForgotPassword: s,
  onSaveUsername: h,
  onGuest: p,
  initialMode: m = "login",
  compact: b = !1,
  googleClientId: w,
  appName: v = "New Haze"
}) {
  const { theme: c } = S(), [y, z] = x(m), [d, _] = x(""), [C, f] = x(""), [W, Z] = x(["", "", "", "", "", ""]), [X, we] = x(""), [A, K] = x(null), [E, ee] = x(!1), [R, J] = x(0), [te, ve] = x(!1), B = Q([]);
  k(() => {
    if (R <= 0) return;
    const o = setTimeout(() => J((u) => u - 1), 1e3);
    return () => clearTimeout(o);
  }, [R]), k(() => {
    y === "otp" && setTimeout(() => {
      var o;
      return (o = B.current[0]) == null ? void 0 : o.focus();
    }, 100), y === "profile" && setTimeout(() => {
      var o;
      return (o = document.getElementById("username-input")) == null ? void 0 : o.focus();
    }, 100);
  }, [y]);
  const O = (o) => {
    z(o), K(null);
  }, N = async (o) => {
    K(null), ee(!0);
    try {
      await o();
    } catch (u) {
      K(u.message);
    } finally {
      ee(!1);
    }
  }, ne = () => N(async () => {
    if (!d || !C) throw new Error("Completá email y contraseña");
    if (C.length < 6) throw new Error("La contraseña debe tener al menos 6 caracteres");
    await n(d, C), J(60), O("otp");
  }), re = () => N(async () => {
    const o = W.join("");
    if (o.length < 6) throw new Error("Ingresá el código completo de 6 dígitos");
    await t(d, o);
  }), Se = () => N(async () => {
    await r(d), J(60), Z(["", "", "", "", "", ""]), setTimeout(() => {
      var o;
      return (o = B.current[0]) == null ? void 0 : o.focus();
    }, 50);
  }), oe = () => N(async () => {
    if (!d || !C) throw new Error("Completá email y contraseña");
    await i(d, C);
  }), ie = () => N(async () => {
    if (!d) throw new Error("Ingresá tu email");
    await s(d), O("forgot_sent");
  }), ae = () => N(async () => {
    if (!X.trim()) throw new Error("Ingresá un nombre de usuario");
    await h(X.trim());
  }), _e = (o, u) => {
    var F;
    const g = u.replace(/\D/g, "").slice(-1), M = [...W];
    M[o] = g, Z(M), g && o < 5 && ((F = B.current[o + 1]) == null || F.focus());
  }, Ee = (o, u) => {
    var g;
    u.key === "Backspace" && !W[o] && o > 0 && ((g = B.current[o - 1]) == null || g.focus()), u.key === "Enter" && re();
  }, Y = Ae(async (o) => {
    !(o != null && o.credential) || !a || await N(async () => {
      await a(o.credential);
    });
  }, [a]);
  k(() => {
    var u, g;
    if (!a || !w) return;
    if ((g = (u = window.google) == null ? void 0 : u.accounts) != null && g.id) {
      window.google.accounts.id.initialize({ client_id: w, callback: Y });
      return;
    }
    const o = document.createElement("script");
    o.src = "https://accounts.google.com/gsi/client", o.async = !0, o.defer = !0, o.onload = () => {
      var M, F, le;
      (le = (F = (M = window.google) == null ? void 0 : M.accounts) == null ? void 0 : F.id) == null || le.initialize({ client_id: w, callback: Y });
    }, document.head.appendChild(o);
  }, [Y, a, w]);
  const Ce = () => {
    var o, u, g;
    (g = (u = (o = window.google) == null ? void 0 : o.accounts) == null ? void 0 : u.id) == null || g.prompt();
  }, Te = (o) => {
    var M;
    const u = o.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!u) return;
    o.preventDefault();
    const g = u.split("").concat(Array(6).fill("")).slice(0, 6);
    Z(g), (M = B.current[Math.min(u.length, 5)]) == null || M.focus();
  }, j = {
    width: "100%",
    background: c.s2,
    border: `1px solid ${c.border}`,
    borderRadius: 10,
    padding: "12px 14px",
    color: c.text,
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box"
  }, P = {
    width: "100%",
    padding: "13px",
    borderRadius: 12,
    background: `linear-gradient(135deg, ${c.accent}, ${c.accentBright})`,
    border: "none",
    color: c.s0,
    fontWeight: 700,
    cursor: E ? "not-allowed" : "pointer",
    fontSize: 15,
    opacity: E ? 0.7 : 1,
    fontFamily: "inherit"
  }, V = {
    ...P,
    opacity: 1,
    background: "transparent",
    border: `1px solid ${c.border}`,
    color: c.textMuted
  }, se = /* @__PURE__ */ l(I, { children: [
    y === "otp" && /* @__PURE__ */ l(L, { title: "Revisá tu email", subtitle: /* @__PURE__ */ l(I, { children: [
      "Enviamos un código de 6 dígitos a ",
      /* @__PURE__ */ e("strong", { style: { color: c.accentBright }, children: d })
    ] }), children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", margin: "24px 0" }, onPaste: Te, children: W.map((o, u) => /* @__PURE__ */ e(
        "input",
        {
          ref: (g) => {
            B.current[u] = g;
          },
          type: "text",
          inputMode: "numeric",
          maxLength: 1,
          value: o,
          onChange: (g) => _e(u, g.target.value),
          onKeyDown: (g) => Ee(u, g),
          style: {
            width: 44,
            height: 54,
            textAlign: "center",
            fontSize: 24,
            fontWeight: 700,
            background: c.s2,
            border: `1.5px solid ${o ? c.accent : c.border}`,
            borderRadius: 10,
            color: c.text,
            outline: "none",
            fontFamily: "inherit",
            transition: "border-color 0.15s"
          },
          onFocus: (g) => {
            g.target.style.borderColor = c.accentBright;
          },
          onBlur: (g) => {
            g.target.style.borderColor = o ? c.accent : c.border;
          }
        },
        u
      )) }),
      A && /* @__PURE__ */ e(H, { msg: A }),
      /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }, children: [
        /* @__PURE__ */ e("button", { style: P, onClick: re, disabled: E, children: E ? "Verificando..." : "Confirmar código" }),
        /* @__PURE__ */ e(
          "button",
          {
            style: { ...V, opacity: R > 0 ? 0.45 : 1, cursor: R > 0 ? "default" : "pointer" },
            onClick: R > 0 ? void 0 : Se,
            disabled: R > 0 || E,
            children: R > 0 ? `Reenviar en ${R}s` : "Reenviar código"
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { style: { textAlign: "center", marginTop: 14 }, children: /* @__PURE__ */ e(
        "button",
        {
          style: { background: "none", border: "none", cursor: "pointer", color: c.textDim, fontSize: 12, fontFamily: "inherit" },
          onClick: () => O("register"),
          children: "Usar otro email"
        }
      ) })
    ] }),
    y === "profile" && /* @__PURE__ */ e(L, { title: "¿Cómo querés que te llamen?", subtitle: "Podés cambiarlo después desde tu perfil", children: /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }, children: [
      /* @__PURE__ */ e(
        "input",
        {
          id: "username-input",
          value: X,
          onChange: (o) => we(o.target.value),
          placeholder: "ej: cultivador420",
          style: j,
          onFocus: (o) => {
            o.target.style.borderColor = c.accent;
          },
          onBlur: (o) => {
            o.target.style.borderColor = c.border;
          },
          onKeyDown: (o) => o.key === "Enter" && ae()
        }
      ),
      A && /* @__PURE__ */ e(H, { msg: A }),
      /* @__PURE__ */ e("button", { style: P, onClick: ae, disabled: E, children: E ? "Guardando..." : "Empezar →" })
    ] }) }),
    y === "forgot_sent" && /* @__PURE__ */ e(
      L,
      {
        title: "Revisá tu casilla",
        subtitle: /* @__PURE__ */ l(I, { children: [
          "Si existe una cuenta con ",
          /* @__PURE__ */ e("strong", { style: { color: c.accentBright }, children: d }),
          ", vas a recibir un link para restablecer tu contraseña."
        ] }),
        children: /* @__PURE__ */ e("button", { style: { ...P, marginTop: 20 }, onClick: () => O("login"), children: "Volver al inicio de sesión" })
      }
    ),
    y === "forgot" && /* @__PURE__ */ e(L, { title: "Restablecer contraseña", subtitle: "Ingresá tu email y te enviamos un link", children: /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "email",
          value: d,
          onChange: (o) => _(o.target.value),
          placeholder: "tu@email.com",
          style: j,
          onFocus: (o) => {
            o.target.style.borderColor = c.accent;
          },
          onBlur: (o) => {
            o.target.style.borderColor = c.border;
          },
          onKeyDown: (o) => o.key === "Enter" && ie()
        }
      ),
      A && /* @__PURE__ */ e(H, { msg: A }),
      /* @__PURE__ */ e("button", { style: P, onClick: ie, disabled: E, children: E ? "Enviando..." : "Enviar link →" }),
      /* @__PURE__ */ e("button", { style: V, onClick: () => O("login"), children: "← Volver" })
    ] }) }),
    (y === "login" || y === "register") && /* @__PURE__ */ l(L, { children: [
      /* @__PURE__ */ l("div", { style: { textAlign: "center", marginBottom: 28 }, children: [
        /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "center", marginBottom: 14 }, children: /* @__PURE__ */ e(be, { variant: "icon", size: 56, color: "#fff", accentColor: c.accent }) }),
        /* @__PURE__ */ e("div", { style: { fontSize: 13, color: c.textMuted }, children: y === "login" ? "Bienvenido de vuelta" : "Creá tu cuenta para empezar" })
      ] }),
      /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "email",
            value: d,
            onChange: (o) => _(o.target.value),
            placeholder: "Email",
            style: j,
            onFocus: (o) => {
              o.target.style.borderColor = c.accent;
            },
            onBlur: (o) => {
              o.target.style.borderColor = c.border;
            }
          }
        ),
        /* @__PURE__ */ l("div", { style: { position: "relative" }, children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: te ? "text" : "password",
              value: C,
              onChange: (o) => f(o.target.value),
              placeholder: "Contraseña",
              style: { ...j, paddingRight: 42 },
              onFocus: (o) => {
                o.target.style.borderColor = c.accent;
              },
              onBlur: (o) => {
                o.target.style.borderColor = c.border;
              },
              onKeyDown: (o) => o.key === "Enter" && (y === "login" ? oe() : ne())
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => ve((o) => !o),
              style: {
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                color: c.textDim,
                display: "flex",
                alignItems: "center"
              },
              children: te ? /* @__PURE__ */ l("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
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
        A && /* @__PURE__ */ e(H, { msg: A }),
        /* @__PURE__ */ e("button", { style: P, onClick: y === "login" ? oe : ne, disabled: E, children: E ? "..." : y === "login" ? "Entrar" : "Crear cuenta" }),
        a && w && /* @__PURE__ */ l(I, { children: [
          /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: 12, margin: "4px 0" }, children: [
            /* @__PURE__ */ e("div", { style: { flex: 1, height: 1, background: c.border } }),
            /* @__PURE__ */ e("span", { style: { fontSize: 11, color: c.textDim, fontFamily: "inherit" }, children: "o" }),
            /* @__PURE__ */ e("div", { style: { flex: 1, height: 1, background: c.border } })
          ] }),
          /* @__PURE__ */ e("button", { style: V, onClick: Ce, disabled: E, children: "Continuar con Google" })
        ] }),
        y === "login" && /* @__PURE__ */ e(
          "button",
          {
            style: { background: "none", border: "none", cursor: "pointer", color: c.textDim, fontSize: 12, fontFamily: "inherit", textAlign: "center" },
            onClick: () => O("forgot"),
            children: "¿Olvidaste tu contraseña?"
          }
        )
      ] }),
      /* @__PURE__ */ l("div", { style: { textAlign: "center", marginTop: 20, fontSize: 13, color: c.textMuted, fontFamily: "inherit" }, children: [
        y === "login" ? "¿No tenés cuenta?" : "¿Ya tenés cuenta?",
        " ",
        /* @__PURE__ */ e(
          "span",
          {
            onClick: () => O(y === "login" ? "register" : "login"),
            style: { color: c.accentBright, cursor: "pointer", fontWeight: 600 },
            children: y === "login" ? "Registrate" : "Iniciá sesión"
          }
        )
      ] }),
      p && /* @__PURE__ */ l("div", { style: { textAlign: "center", marginTop: 16 }, children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: p,
            style: { background: "none", border: "none", cursor: "pointer", color: c.textDim, fontSize: 12, fontFamily: "inherit", padding: "4px 8px", borderRadius: 6, transition: "color 0.15s" },
            onMouseEnter: (o) => {
              o.currentTarget.style.color = c.textMuted;
            },
            onMouseLeave: (o) => {
              o.currentTarget.style.color = c.textDim;
            },
            children: "Continuar como invitado"
          }
        ),
        /* @__PURE__ */ e("span", { style: { display: "block", fontSize: 10, color: c.textDim, fontFamily: "inherit", marginTop: 2 }, children: "tu progreso no se guardará" })
      ] })
    ] })
  ] });
  return b ? se : /* @__PURE__ */ e(He, { children: se });
}
function xt({ onClose: n, initialMode: t, authScreenProps: r }) {
  const { theme: i } = S();
  return /* @__PURE__ */ e(
    "div",
    {
      onClick: n,
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
          onClick: (a) => a.stopPropagation(),
          style: {
            background: i.s1,
            border: `1px solid ${i.border}`,
            borderRadius: 24,
            padding: 32,
            maxWidth: 400,
            width: "100%",
            position: "relative"
          },
          children: [
            n && /* @__PURE__ */ e(
              "button",
              {
                onClick: n,
                style: {
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: i.textDim,
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
              Ge,
              {
                ...r,
                compact: !0,
                initialMode: t
              }
            )
          ]
        }
      )
    }
  );
}
function bt({ user: n, onUpdateUsername: t, onLogout: r }) {
  const { theme: i } = S(), [a, s] = x(n.username ?? ""), [h, p] = x(!1), [m, b] = x(null), [w, v] = x(!1), [c, y] = x(!1), z = async () => {
    if (!a.trim()) {
      b("Ingresá un nombre de usuario");
      return;
    }
    b(null), p(!0), v(!1);
    try {
      await t(a.trim()), v(!0), setTimeout(() => v(!1), 2e3);
    } catch (f) {
      b(f.message);
    } finally {
      p(!1);
    }
  }, d = {
    flex: 1,
    background: i.s2,
    border: `1px solid ${i.border}`,
    borderRadius: 10,
    padding: "10px 14px",
    color: i.text,
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit"
  }, _ = {
    padding: "10px 18px",
    borderRadius: 10,
    background: `linear-gradient(135deg, ${i.accent}, ${i.accentBright})`,
    border: "none",
    color: i.s0,
    fontWeight: 700,
    cursor: h ? "not-allowed" : "pointer",
    fontSize: 14,
    opacity: h ? 0.7 : 1,
    fontFamily: "inherit",
    whiteSpace: "nowrap"
  }, C = n.xp != null && n.level != null ? Math.min(100, n.xp % 1e3 / 1e3 * 100) : null;
  return /* @__PURE__ */ l("div", { style: { display: "flex", flexDirection: "column", gap: 24, padding: "8px 0" }, children: [
    /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center", gap: 16 }, children: [
      /* @__PURE__ */ e("div", { style: {
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: i.s2,
        border: `2px solid ${i.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 26,
        flexShrink: 0
      }, children: "🧑‍🌾" }),
      /* @__PURE__ */ l("div", { style: { minWidth: 0 }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: i.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: n.username ?? "Sin nombre" }),
        /* @__PURE__ */ e("div", { style: { fontSize: 13, color: i.textMuted, marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: n.email }),
        n.roles && n.roles.length > 0 && /* @__PURE__ */ e("div", { style: { display: "flex", gap: 6, marginTop: 6, flexWrap: "wrap" }, children: n.roles.map((f) => /* @__PURE__ */ e(
          "span",
          {
            style: {
              fontSize: 10,
              fontWeight: 600,
              padding: "2px 8px",
              borderRadius: 20,
              background: i.s2,
              border: `1px solid ${i.borderLight}`,
              color: i.accentBright,
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            },
            children: f.replace(/_/g, " ")
          },
          f
        )) })
      ] })
    ] }),
    n.xp != null && n.level != null && C != null && /* @__PURE__ */ l("div", { children: [
      /* @__PURE__ */ l("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12, color: i.textMuted, marginBottom: 6 }, children: [
        /* @__PURE__ */ l("span", { children: [
          "Nivel ",
          n.level
        ] }),
        /* @__PURE__ */ l("span", { children: [
          n.xp,
          " XP"
        ] })
      ] }),
      /* @__PURE__ */ e("div", { style: { height: 8, background: i.s2, borderRadius: 99, overflow: "hidden", border: `1px solid ${i.border}` }, children: /* @__PURE__ */ e("div", { style: {
        height: "100%",
        width: `${C}%`,
        background: `linear-gradient(90deg, ${i.accent}, ${i.accentBright})`,
        borderRadius: 99,
        transition: "width 0.4s ease"
      } }) })
    ] }),
    /* @__PURE__ */ e("div", { style: { height: 1, background: i.border } }),
    /* @__PURE__ */ l("div", { children: [
      /* @__PURE__ */ e("div", { style: { fontSize: 13, fontWeight: 600, color: i.textMuted, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }, children: "Cambiar nombre de usuario" }),
      /* @__PURE__ */ l("div", { style: { display: "flex", gap: 10 }, children: [
        /* @__PURE__ */ e(
          "input",
          {
            value: a,
            onChange: (f) => {
              s(f.target.value), b(null), v(!1);
            },
            placeholder: "nuevo_nombre",
            style: d,
            onFocus: (f) => {
              f.target.style.borderColor = i.accent;
            },
            onBlur: (f) => {
              f.target.style.borderColor = i.border;
            },
            onKeyDown: (f) => f.key === "Enter" && z()
          }
        ),
        /* @__PURE__ */ e("button", { style: _, onClick: z, disabled: h, children: h ? "..." : w ? "✓ Guardado" : "Guardar" })
      ] }),
      m && /* @__PURE__ */ e("div", { style: { marginTop: 8, fontSize: 12, color: i.error }, children: m })
    ] }),
    /* @__PURE__ */ e("div", { style: { height: 1, background: i.border } }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      "button",
      {
        onClick: r,
        onMouseEnter: () => y(!0),
        onMouseLeave: () => y(!1),
        style: {
          width: "100%",
          padding: "11px",
          borderRadius: 10,
          background: "transparent",
          border: `1px solid ${c ? i.accent : i.border}`,
          color: c ? i.accent : i.textMuted,
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
function fe({ children: n, active: t = !1, onClick: r, style: i, className: a }) {
  const { theme: s } = S();
  return /* @__PURE__ */ e(
    "div",
    {
      onClick: r,
      className: a,
      style: {
        background: s.s2,
        border: `1px solid ${t ? s.borderLight : s.border}`,
        borderRadius: 16,
        padding: "20px 20px",
        cursor: r ? "pointer" : "default",
        transition: "box-shadow 0.2s ease",
        boxShadow: t ? s.shadowLg : s.shadowSm,
        ...i
      },
      children: n
    }
  );
}
function ft({ children: n, style: t, className: r }) {
  const { theme: i } = S();
  return /* @__PURE__ */ e(
    "div",
    {
      className: r,
      style: {
        background: i.s1,
        borderRadius: 20,
        padding: 16,
        boxShadow: i.shadowSm,
        ...t
      },
      children: n
    }
  );
}
function wt({ href: n, children: t }) {
  return /* @__PURE__ */ e(
    "a",
    {
      href: n,
      style: {
        display: "block",
        textAlign: "center",
        padding: "8px 16px",
        background: "color-mix(in srgb, var(--nh-secondary) 15%, transparent)",
        borderBottom: "1px solid color-mix(in srgb, var(--nh-secondary) 30%, transparent)",
        fontSize: 13,
        color: "var(--nh-accent)",
        textDecoration: "none"
      },
      children: t
    }
  );
}
const Ue = "_wrapper_1sje3_1", Ze = "_imageWrapper_1sje3_10", Xe = "_image_1sje3_10", Ke = "_body_1sje3_26", Je = "_title_1sje3_34", Ye = "_description_1sje3_39", Ve = "_price_1sje3_44", D = {
  wrapper: Ue,
  imageWrapper: Ze,
  image: Xe,
  body: Ke,
  title: Je,
  description: Ye,
  price: Ve
};
function vt({ image: n, imageAlt: t, title: r, description: i, price: a }) {
  const { theme: s } = S();
  return /* @__PURE__ */ e("div", { className: D.wrapper, children: /* @__PURE__ */ l(fe, { style: { padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ e("div", { className: D.imageWrapper, children: /* @__PURE__ */ e("img", { src: n, alt: t ?? r, className: D.image }) }),
    /* @__PURE__ */ l("div", { className: D.body, children: [
      /* @__PURE__ */ e("h3", { className: D.title, style: { color: s.text }, children: r }),
      /* @__PURE__ */ e("p", { className: D.description, style: { color: s.textMuted }, children: i }),
      /* @__PURE__ */ e("p", { className: D.price, style: { color: s.accentBright }, children: a })
    ] })
  ] }) });
}
const qe = "_card_1994u_1", Qe = "_imageWrapper_1994u_17", et = "_image_1994u_17", tt = "_imageOverlay_1994u_34", nt = "_body_1994u_41", rt = "_title_1994u_45", ot = "_excerpt_1994u_53", it = "_readMore_1994u_60", at = "_arrow_1994u_68", T = {
  card: qe,
  imageWrapper: Qe,
  image: et,
  imageOverlay: tt,
  body: nt,
  title: rt,
  excerpt: ot,
  readMore: it,
  arrow: at
};
function St({
  title: n,
  excerpt: t,
  coverImage: r,
  href: i,
  onClick: a,
  readMoreLabel: s = "Leer más",
  animationDelay: h
}) {
  const { theme: p } = S();
  return /* @__PURE__ */ l(
    "a",
    {
      href: i,
      onClick: a,
      className: T.card,
      style: h !== void 0 ? { animationDelay: `${h}ms` } : void 0,
      children: [
        /* @__PURE__ */ l("div", { className: T.imageWrapper, children: [
          /* @__PURE__ */ e("img", { src: r || "/placeholder.svg", alt: n, className: T.image }),
          /* @__PURE__ */ e("div", { className: T.imageOverlay })
        ] }),
        /* @__PURE__ */ l("div", { className: T.body, children: [
          /* @__PURE__ */ e("h3", { className: T.title, style: { color: p.text }, children: n }),
          /* @__PURE__ */ e("p", { className: T.excerpt, style: { color: p.textMuted }, children: t }),
          /* @__PURE__ */ l("div", { className: T.readMore, style: { color: p.accent }, children: [
            s,
            /* @__PURE__ */ l(
              "svg",
              {
                className: T.arrow,
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
const st = "_card_1l0nr_1", lt = "_iconCircle_1l0nr_11", ct = "_title_1l0nr_21", dt = "_description_1l0nr_28", G = {
  card: st,
  iconCircle: lt,
  title: ct,
  description: dt
};
function _t({ icon: n, title: t, description: r, iconVariant: i = "accent" }) {
  const { theme: a } = S(), s = i === "accent-bright" ? a.accentBright : i === "secondary" ? a.secondary : i === "success" ? a.success : a.accent;
  return /* @__PURE__ */ l(fe, { className: G.card, children: [
    /* @__PURE__ */ e("div", { className: G.iconCircle, style: { background: s }, children: n }),
    /* @__PURE__ */ e("h3", { className: G.title, style: { color: a.text }, children: t }),
    /* @__PURE__ */ e("p", { className: G.description, style: { color: a.textMuted }, children: r })
  ] });
}
export {
  xt as AuthModal,
  Ge as AuthScreen,
  wt as BetaBanner,
  St as BlogCard,
  fe as Card,
  ft as CardSection,
  mt as FOUC_SCRIPT,
  _t as FeatureCard,
  yt as Header,
  ye as LEGACY_THEME_MAP,
  be as Logo,
  gt as NH_VARS,
  vt as ProductCard,
  $ as THEME_HTML_CONFIG,
  ut as ThemeProvider,
  bt as UserSettings,
  Re as resolveThemeName,
  U as themes,
  S as useTheme
};
