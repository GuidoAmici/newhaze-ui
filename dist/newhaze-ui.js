"use client";
import { jsx as e, jsxs as s, Fragment as F } from "react/jsx-runtime";
import { createContext as Be, useState as m, useMemo as de, useEffect as P, useContext as Me, useRef as ee, useCallback as Pe } from "react";
const Ee = {
  "neon-purple": "new-haze",
  "neon-purple-v2": "new-haze",
  "light-legacy": "canahoria",
  iamsajid: "new-haze",
  "iamsajid-light": "canahoria",
  "dark-purple": "new-haze",
  "green-botanical": "canahoria-dark",
  light: "new-haze-light",
  "dark-orange": "new-haze"
};
function Te(r) {
  return r ? r in U ? r : Ee[r] ?? "new-haze" : "new-haze";
}
const X = {
  s0: "hsl(0, 0%,  4%)",
  s1: "hsl(0, 0%,  8%)",
  s2: "hsl(0, 0%, 12%)",
  s3: "hsl(0, 0%, 16%)",
  shadowSm: "inset 0 1px 1px hsla(0,0%,100%,0.07), 0 2px 6px hsla(0,0%,0%,0.55)",
  shadowLg: "inset 0 2px 8px hsla(0,0%,100%,0.10), 0 10px 30px hsla(0,0%,0%,0.75)",
  text: "hsl(0, 0%, 92%)",
  textMuted: "hsl(0, 0%, 60%)",
  textDim: "hsl(0, 0%, 32%)",
  border: "hsl(0, 0%, 18%)",
  borderLight: "hsl(0, 0%, 24%)"
}, Q = {
  s0: "hsl(0, 0%, 80%)",
  s1: "hsl(0, 0%, 88%)",
  s2: "hsl(0, 0%, 95%)",
  s3: "hsl(0, 0%, 100%)",
  shadowSm: "inset 0 1px 2px hsla(0,0%,100%,0.75), 0 2px 4px hsla(0,0%,0%,0.13)",
  shadowLg: "inset 0 2px 8px hsla(0,0%,100%,0.90), 0 8px 24px hsla(0,0%,0%,0.20)",
  text: "hsl(0, 0%, 10%)",
  textMuted: "hsl(0, 0%, 38%)",
  textDim: "hsl(0, 0%, 62%)",
  border: "hsl(0, 0%, 72%)",
  borderLight: "hsl(0, 0%, 80%)"
}, N = {
  accent: "hsl(27, 88%, 54%)",
  accentBright: "hsl(27, 100%, 61%)",
  accentNeon: "hsl(27, 100%, 70%)",
  secondary: "hsl(27, 88%, 54%)",
  secondaryBright: "hsl(27, 100%, 61%)"
}, U = {
  "new-haze": {
    label: "New Haze — Oscuro",
    colors: {
      ...X,
      ...N,
      error: "hsl(0, 90%, 65%)",
      errorBg: "hsla(0, 90%, 65%, 0.10)",
      errorBorder: "hsla(0, 90%, 65%, 0.25)",
      success: "hsl(150, 70%, 55%)",
      successBg: "hsla(150, 70%, 55%, 0.10)",
      successBorder: "hsla(150, 70%, 55%, 0.25)",
      focus: "hsl(27, 100%, 61%)"
    }
  },
  "new-haze-light": {
    label: "New Haze — Claro",
    colors: {
      ...Q,
      ...N,
      error: "hsl(0, 75%, 45%)",
      errorBg: "hsla(0, 75%, 45%, 0.08)",
      errorBorder: "hsla(0, 75%, 45%, 0.20)",
      success: "hsl(150, 65%, 35%)",
      successBg: "hsla(150, 65%, 35%, 0.08)",
      successBorder: "hsla(150, 65%, 35%, 0.20)",
      focus: "hsl(27, 88%, 54%)"
    }
  },
  rabbitek: {
    label: "Rabbitek — Oscuro",
    colors: {
      ...X,
      ...N,
      error: "hsl(0, 90%, 65%)",
      errorBg: "hsla(0, 90%, 65%, 0.10)",
      errorBorder: "hsla(0, 90%, 65%, 0.25)",
      success: "hsl(150, 70%, 55%)",
      successBg: "hsla(150, 70%, 55%, 0.10)",
      successBorder: "hsla(150, 70%, 55%, 0.25)",
      focus: "hsl(27, 100%, 61%)"
    }
  },
  "rabbitek-light": {
    label: "Rabbitek — Claro",
    colors: {
      ...Q,
      ...N,
      error: "hsl(0, 75%, 45%)",
      errorBg: "hsla(0, 75%, 45%, 0.08)",
      errorBorder: "hsla(0, 75%, 45%, 0.20)",
      success: "hsl(150, 65%, 35%)",
      successBg: "hsla(150, 65%, 35%, 0.08)",
      successBorder: "hsla(150, 65%, 35%, 0.20)",
      focus: "hsl(27, 88%, 54%)"
    }
  },
  canahoria: {
    label: "Canahoria — Claro",
    colors: {
      ...Q,
      ...N,
      error: "hsl(0, 75%, 45%)",
      errorBg: "hsla(0, 75%, 45%, 0.08)",
      errorBorder: "hsla(0, 75%, 45%, 0.20)",
      success: "hsl(150, 65%, 35%)",
      successBg: "hsla(150, 65%, 35%, 0.08)",
      successBorder: "hsla(150, 65%, 35%, 0.20)",
      focus: "hsl(27, 88%, 54%)"
    }
  },
  "canahoria-dark": {
    label: "Canahoria — Oscuro",
    colors: {
      ...X,
      ...N,
      error: "hsl(0, 90%, 65%)",
      errorBg: "hsla(0, 90%, 65%, 0.10)",
      errorBorder: "hsla(0, 90%, 65%, 0.25)",
      success: "hsl(150, 70%, 55%)",
      successBg: "hsla(150, 70%, 55%, 0.10)",
      successBorder: "hsla(150, 70%, 55%, 0.25)",
      focus: "hsl(27, 100%, 61%)"
    }
  }
}, he = "nh_theme", pe = "new-haze", Re = `
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
let ue = !1;
function $e() {
  if (ue || typeof document > "u") return;
  const r = document.createElement("style");
  r.setAttribute("data-nh", "static"), r.textContent = Re, document.head.appendChild(r), ue = !0;
}
const be = Be(null), De = {
  "new-haze": ["dark", "new-haze"],
  "new-haze-light": ["new-haze"],
  rabbitek: ["dark", "rabbitek"],
  "rabbitek-light": ["rabbitek"],
  canahoria: ["canahoria"],
  "canahoria-dark": ["dark", "canahoria"]
}, Ne = {
  "new-haze": "dark",
  "new-haze-light": "light",
  rabbitek: "dark",
  "rabbitek-light": "light",
  canahoria: "light",
  "canahoria-dark": "dark"
};
function Fe(r, t) {
  const n = document.documentElement;
  n.style.setProperty("--nh-s0", t.s0), n.style.setProperty("--nh-s1", t.s1), n.style.setProperty("--nh-s2", t.s2), n.style.setProperty("--nh-s3", t.s3), n.style.setProperty("--nh-shadow-sm", t.shadowSm), n.style.setProperty("--nh-shadow-lg", t.shadowLg), n.style.setProperty("--nh-bg-dark", t.s0), n.style.setProperty("--nh-bg", t.s1), n.style.setProperty("--nh-bg-light", t.s2), n.style.setProperty("--nh-text", t.text), n.style.setProperty("--nh-text-muted", t.textMuted), n.style.setProperty("--nh-text-dim", t.textDim), n.style.setProperty("--nh-border", t.border), n.style.setProperty("--nh-border-light", t.borderLight), n.style.setProperty("--nh-accent", t.accent), n.style.setProperty("--nh-accent-bright", t.accentBright), n.style.setProperty("--nh-accent-neon", t.accentNeon), n.style.setProperty("--nh-secondary", t.secondary), n.style.setProperty("--nh-secondary-bright", t.secondaryBright), n.style.setProperty("--nh-error", t.error), n.style.setProperty("--nh-error-bg", t.errorBg), n.style.setProperty("--nh-error-border", t.errorBorder), n.style.setProperty("--nh-success", t.success), n.style.setProperty("--nh-success-bg", t.successBg), n.style.setProperty("--nh-success-border", t.successBorder), n.style.setProperty("--nh-focus", t.focus), n.style.setProperty("--background", t.s1), n.style.setProperty("--foreground", t.text), n.style.setProperty("--card", t.s2), n.style.setProperty("--card-foreground", t.text), n.style.setProperty("--popover", t.s2), n.style.setProperty("--popover-foreground", t.text), n.style.setProperty("--primary", t.accent), n.style.setProperty("--primary-foreground", "white"), n.style.setProperty("--secondary", t.s3), n.style.setProperty("--secondary-foreground", t.text), n.style.setProperty("--muted", t.s3), n.style.setProperty("--muted-foreground", t.textMuted), n.style.setProperty("--accent", t.s3), n.style.setProperty("--accent-foreground", t.text), n.style.setProperty("--destructive", t.error), n.style.setProperty("--destructive-foreground", "white"), n.style.setProperty("--border", t.border), n.style.setProperty("--input", t.s3), n.style.setProperty("--ring", t.focus), n.classList.remove("dark", "new-haze", "rabbitek", "canahoria", "light"), De[r].forEach((i) => n.classList.add(i)), n.style.colorScheme = Ne[r];
}
function yt({ children: r }) {
  const [t, n] = m(pe), i = de(() => U[t].colors, [t]);
  P(() => {
    try {
      const h = Te(localStorage.getItem(he));
      h !== pe && n(h);
    } catch {
    }
  }, []), P(() => {
    $e(), Fe(t, i);
  }, [t, i]);
  const a = (h) => {
    if (h in U) {
      n(h);
      try {
        localStorage.setItem(he, h);
      } catch {
      }
    }
  }, c = de(
    () => Object.entries(U).map(([h, { label: p }]) => ({ value: h, label: p })),
    []
  );
  return /* @__PURE__ */ e(be.Provider, { value: { theme: i, themeName: t, setThemeName: a, themeOptions: c }, children: r });
}
function v() {
  const r = Me(be);
  if (!r) throw new Error("useTheme must be used within ThemeProvider");
  return r;
}
function ge({ color: r, accentColor: t }) {
  return /* @__PURE__ */ s(F, { children: [
    /* @__PURE__ */ e("circle", { fill: t, cx: "540", cy: "540", r: "500" }),
    /* @__PURE__ */ e("path", { fill: r, d: "M708.29,500.15v142.18c0,98.59-80.59,175.83-178.98,169.66-42.21-2.65-80.2-20.85-108.31-48.96-30.45-30.45-49.29-72.52-49.29-119v-143.88c0-5.52,4.48-10,10-10h100.18c-.58.33-1.16.67-1.72,1.01-.98.59-1.95,1.21-2.88,1.85-.5.33-.98.65-1.45.99-.77.54-1.52,1.09-2.25,1.66-.07.05-.14.1-.2.16-.64.5-1.28,1-1.91,1.52-.03.02-.05.04-.07.06-.26.21-.52.43-.77.66-.33.26-.65.54-.97.82-.02.03-.05.05-.07.06-.05.04-.09.08-.13.11-.09.08-.19.17-.29.26-.52.46-1.03.93-1.54,1.41-.02.02-.04.04-.06.06-.62.58-1.23,1.18-1.83,1.79-.6.59-1.19,1.19-1.77,1.81-.59.64-1.18,1.28-1.76,1.93-.58.66-1.15,1.33-1.72,2-.56.68-1.12,1.37-1.67,2.07h-.01c-4.04,5.13-7.72,10.85-11.13,17.11-3.42,6.27-5.54,14.07-6.81,23.11-.02.2-.05.41-.08.61,0,.03,0,.05-.01.08-.33,3.62,1.34,5.3,4.89,5.07.25-.02.5-.07.76-.16,12.51-4.22,25.29-6.93,38.33-8.91,4.04-.53,5.04,5.27,1.18,6.89-14.46,4.22-28.76,8.97-42.07,16.12-.16.08-.31.19-.45.31-2.73,2.23-4.21,5.77-4.23,10.88v.24c.01,5.28.11,10.78.25,16.45.18,7.25,1.16,14.45,2.34,21.58,1.27,7.69,2.93,15.28,4.99,22.76,1.22,3.97,3.27,6.18,6.08,6.7,23.82,5.65,46.91,13.55,71,18.08,1.75.31,3.16,2.03,3.23,3.96.09,2.55.12,3.83.22,6.36.07,1.93-1.19,3.4-2.86,3.35-22.54-2.36-43.91-8.36-65.83-13.92-2.61-.81-3.21.69-1.73,4.4h0s.01.02.01.02c6.44,15.07,14.52,29.43,24.09,42.75.05.08.11.16.16.23.13.2.27.38.41.56.14.21.28.4.43.59.24.33.48.65.71.96,6.63,9.04,13.95,17.56,21.92,25.51,6.19,6.24,12.17,11.55,18.53,15.08h0c1.59.88,3.21,1.65,4.86,2.3.66.26,1.33.49,1.99.71.68.21,1.36.42,2.04.59,1.02.26,2.06.47,3.12.64,1.61.25,3.26.37,4.95.37s3.32-.12,4.92-.37c1.06-.17,2.09-.38,3.12-.64.34-.09.68-.18,1.02-.28.34-.1.68-.2,1.01-.31.67-.22,1.34-.45,1.99-.71h.01c1-.4,1.96-.82,2.93-1.3h.01c.64-.32,1.28-.65,1.91-1,.65-.35,1.28-.72,1.91-1.11,5.65-3.5,11.05-8.35,16.62-13.97,19.36-19.31,34.99-42.13,46.14-66.99,1.02-2.82.33-3.85-2-3.04-18.54,3.92-37.01,7.6-55.93,8.84-1.59.12-2.73-1.25-2.62-3.14.21-3.39.31-5.09.5-8.51.11-1.89,1.5-3.65,3.2-4.07,21.45-6.66,42.36-14.76,63.92-21.12,2.66-.41,4.58-2.23,5.69-5.52.01-.03.01-.04.01-.07,1.58-6.16,2.88-12.4,3.92-18.69,1.17-7.13,2.16-14.33,2.34-21.58.02-.94.05-1.88.06-2.82-.06-.46-.15-.89-.25-1.3-16.32-.13-32.68-.4-48.96-.89-19.82-.6-39.76-2.32-58.97-7.42-1.85-.5-2.89-1.72-3.26-3.14-1.65-2.19-1.13-6.23,2-7,32.56-8.01,32.06-8.42,102.01-17.75.14,0,2.23.01,2.36,0,2.07-.14,3.49-.65,4.26-1.5-.48-4.89-1.16-9.46-2.1-13.69-1.14-5.13-2.65-9.75-4.67-13.78-.23-.52-.46-1-.69-1.4-.51-.95-1.04-1.89-1.56-2.8-3.94-6.88-8.24-13.05-13.04-18.46-.19-.21-.36-.41-.54-.6-.63-.7-1.27-1.38-1.93-2.06-.31-.33-.61-.64-.92-.95-.3-.3-.6-.59-.89-.87-.28-.29-.57-.56-.86-.83-.28-.28-.56-.53-.83-.78s-.53-.49-.79-.72c-3.95-3.53-8.21-6.63-12.83-9.27h99.95c5.53,0,10,4.48,10,10Z" }),
    /* @__PURE__ */ e("path", { fill: r, d: "M565.01,350.13c0,35.82-13.84,66.59-20.93,80-1.74,3.28-6.43,3.28-8.16,0-7.09-13.41-20.93-44.18-20.93-80s13.84-66.59,20.93-80c1.74-3.28,6.43-3.28,8.16,0,7.09,13.41,20.93,44.18,20.93,80Z" }),
    /* @__PURE__ */ e("path", { fill: r, d: "M604.18,405.39c-18.35,18.35-41.22,27.03-51.72,30.27-2.57.79-4.98-1.61-4.18-4.18,3.24-10.51,11.92-33.37,30.27-51.72,18.35-18.35,41.22-27.03,51.72-30.27,2.57-.79,4.98,1.61,4.18,4.18-3.24,10.51-11.92,33.37-30.27,51.72Z" }),
    /* @__PURE__ */ e("path", { fill: r, d: "M501.45,380.02c18.35,18.35,27.03,41.22,30.27,51.72.79,2.57-1.61,4.98-4.18,4.18-10.51-3.24-33.37-11.92-51.72-30.27-18.35-18.35-27.03-41.22-30.27-51.72-.79-2.57,1.61-4.98,4.18-4.18,10.51,3.24,33.37,11.92,51.72,30.27Z" }),
    /* @__PURE__ */ e("path", { fill: r, d: "M494.16,431.69c16.38,0,30.46,6.33,36.6,9.57,1.5.79,1.5,2.94,0,3.73-6.14,3.24-20.21,9.57-36.6,9.57-16.38,0-30.46-6.33-36.6-9.57-1.5-.79-1.5-2.94,0-3.73,6.14-3.24,20.21-9.57,36.6-9.57Z" }),
    /* @__PURE__ */ e("path", { fill: r, d: "M585.85,454.34c-16.38,0-30.46-6.33-36.6-9.57-1.5-.79-1.5-2.94,0-3.73,6.14-3.24,20.21-9.57,36.6-9.57,16.38,0,30.46,6.33,36.6,9.57,1.5.79,1.5,2.94,0,3.73-6.14,3.24-20.21,9.57-36.6,9.57Z" }),
    /* @__PURE__ */ e("path", { fill: r, d: "M551.57,465.25c-6.32-6.32-9.31-14.2-10.43-17.81-.27-.89.56-1.71,1.44-1.44,3.62,1.12,11.49,4.11,17.81,10.43,6.32,6.32,9.31,14.2,10.43,17.81.27.89-.56,1.71-1.44,1.44-3.62-1.12-11.49-4.11-17.81-10.43Z" }),
    /* @__PURE__ */ e("path", { fill: r, d: "M519.6,456.51c6.32-6.32,14.2-9.31,17.81-10.43.89-.27,1.71.56,1.44,1.44-1.12,3.62-4.11,11.49-10.43,17.81s-14.2,9.31-17.81,10.43c-.89.27-1.71-.56-1.44-1.44,1.12-3.62,4.11-11.49,10.43-17.81Z" })
  ] });
}
function ye({ color: r }) {
  return /* @__PURE__ */ s(F, { children: [
    /* @__PURE__ */ e("path", { fill: r, d: "M48.93,213.77c-3.1-.12-4.64-1.43-4.64-3.93l-4.28-136.04c0-2.5,1.67-3.81,5-3.93h40.35c2.02.36,3.57,2.03,4.64,5l20.35,91.77,3.21-92.84c0-2.5,1.54-3.81,4.64-3.93h40.35c3.33.12,5,1.43,5,3.93l-4.28,136.04c0,2.5-1.55,3.81-4.64,3.93h-41.96c-3.69,0-6.13-1.19-7.32-3.57l-12.5-34.28,2.14,32.85c-.48,3.21-2.38,4.88-5.71,5h-40.35Z" }),
    /* @__PURE__ */ e("path", { fill: r, d: "M194.25,213.77c-9.76.36-15.59-3.21-17.5-10.71l-3.21-102.84c.12-7.26,2.68-14.19,7.68-20.8,5-6.61,11.01-9.79,18.03-9.55h69.27c7.02-.24,13.03,2.95,18.03,9.55s7.56,13.54,7.68,20.8l-1.07,35.71c-.12,2.62-1.55,3.93-4.28,3.93h-42.13c-3.1-.12-4.64-1.43-4.64-3.93l.36-7.14c.36-7.97-1.07-12.59-4.28-13.84s-6.43-1.25-9.64,0-4.64,5.86-4.28,13.84l.54,18.57h32.31c2.5,0,3.93,1.55,4.28,4.64v10.71c0,3.45-1.19,5.24-3.57,5.36h-32.31l.54,20.71c.83,2.86,2.5,4.64,5,5.36h4.64c2.5-.71,4.16-2.5,5-5.36l.36-11.07c0-2.5,1.54-3.81,4.64-3.93h40.71c3.33.12,5,1.43,5,3.93l-.71,25.35c-1.91,7.5-7.74,11.07-17.5,10.71h-78.91Z" }),
    /* @__PURE__ */ e("path", { fill: r, d: "M447.77,213.77h-42.49c-5.24-.12-9.7-1.79-13.39-5-2.5-2.26-6.31-11.6-11.43-28.03-5.12,16.43-8.93,25.77-11.43,28.03-3.69,3.21-8.15,4.88-13.39,5h-42.49c-3.1-.12-4.64-1.43-4.64-3.93l-4.28-136.04c0-2.5,1.67-3.81,5-3.93h40.35c3.09.12,4.64,1.43,4.64,3.93l2.5,76.06,14.28-57.49c2.02-2.97,5.18-4.46,9.46-4.46s7.44,1.49,9.46,4.46l14.28,57.49,2.5-76.06c0-2.5,1.54-3.81,4.64-3.93h40.35c3.33.12,5,1.43,5,3.93l-4.28,136.04c0,2.5-1.55,3.81-4.64,3.93Z" }),
    /* @__PURE__ */ e("path", { fill: r, d: "M642.58,209.85c0,2.5-1.55,3.81-4.64,3.93h-40.35c-3.33-.12-5-1.43-5-3.93l1.07-41.96h-17.14l1.07,41.96c0,2.5-1.67,3.81-5,3.93h-40.35c-3.1-.12-4.64-1.43-4.64-3.93l-4.28-136.04c0-2.5,1.67-3.81,5-3.93h40.35c3.09.12,4.64,1.43,4.64,3.93l2.5,73.56h18.57l2.5-73.56c0-2.5,1.54-3.81,4.64-3.93h40.35c3.33.12,5,1.43,5,3.93l-4.28,136.04Z" }),
    /* @__PURE__ */ e("path", { fill: r, d: "M665.44,213.77c-3.1-.12-4.64-1.43-4.64-3.93l-3.93-109.62c.12-7.26,2.68-14.19,7.68-20.8,5-6.61,11.01-9.79,18.03-9.55h68.91c7.02-.24,13.03,2.95,18.03,9.55s7.56,13.54,7.68,20.8l-3.93,109.62c0,2.5-1.55,3.81-4.64,3.93h-40.35c-3.33-.12-5-1.43-5-3.93l1.07-41.78h-14.64l1.07,41.78c0,2.5-1.67,3.81-5,3.93h-40.35ZM724.71,147.36l1.07-18.57c.36-7.97-1.07-12.59-4.28-13.84s-6.43-1.25-9.64,0c-3.21,1.25-4.64,5.86-4.28,13.84l1.07,18.57h16.07Z" }),
    /* @__PURE__ */ e("path", { fill: r, d: "M796.12,213.77c-2.5,0-3.93-1.54-4.28-4.64v-34.99c1.43-3.93,3.33-6.43,5.71-7.5l63.92-51.42h-69.99c-2.38-.12-3.57-1.9-3.57-5.36v-35.35c.36-3.09,1.79-4.64,4.28-4.64h112.12c2.5,0,3.93,1.55,4.28,4.64v34.99c-1.43,3.93-3.33,6.55-5.71,7.86l-65.34,50.88,63.2.18c2.38.12,3.57,1.91,3.57,5.36v35.35c-.36,3.1-1.79,4.64-4.28,4.64h-103.91Z" }),
    /* @__PURE__ */ e("path", { fill: r, d: "M940.02,213.77c-9.76.36-15.59-3.21-17.5-10.71l-3.21-102.84c.12-7.26,2.68-14.19,7.68-20.8s11.01-9.79,18.03-9.55h69.27c7.02-.24,13.03,2.95,18.03,9.55,5,6.61,7.56,13.54,7.68,20.8l-1.07,35.71c-.12,2.62-1.55,3.93-4.28,3.93h-42.13c-3.1-.12-4.64-1.43-4.64-3.93l.36-7.14c.36-7.97-1.07-12.59-4.28-13.84s-6.43-1.25-9.64,0-4.64,5.86-4.28,13.84l.54,18.57h32.31c2.5,0,3.93,1.55,4.28,4.64v10.71c0,3.45-1.19,5.24-3.57,5.36h-32.31l.54,20.71c.83,2.86,2.5,4.64,5,5.36h4.64c2.5-.71,4.17-2.5,5-5.36l.36-11.07c0-2.5,1.54-3.81,4.64-3.93h40.71c3.33.12,5,1.43,5,3.93l-.71,25.35c-1.9,7.5-7.74,11.07-17.5,10.71h-78.91Z" })
  ] });
}
const Ie = 1, Oe = 1080 / 283.66;
function xe({
  variant: r = "full",
  size: t = 32,
  color: n = "var(--nh-accent-bright)",
  accentColor: i = "var(--nh-accent)",
  className: a,
  style: c,
  "aria-label": h = "New Haze"
}) {
  if (r === "icon")
    return /* @__PURE__ */ e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1080 1080",
        width: t * Ie,
        height: t,
        className: a,
        style: c,
        "aria-label": h,
        role: "img",
        children: /* @__PURE__ */ e(ge, { color: n, accentColor: i })
      }
    );
  if (r === "wordmark")
    return /* @__PURE__ */ e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1080 283.66",
        width: t * Oe,
        height: t,
        className: a,
        style: c,
        "aria-label": h,
        role: "img",
        children: /* @__PURE__ */ e(ye, { color: n })
      }
    );
  const p = 283.66 / 1080, w = 1080 * p + 36, C = w + 1080;
  return /* @__PURE__ */ s(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: `0 0 ${C} 283.66`,
      width: t * (C / 283.66),
      height: t,
      className: a,
      style: c,
      "aria-label": h,
      role: "img",
      children: [
        /* @__PURE__ */ e("g", { transform: `scale(${p})`, children: /* @__PURE__ */ e(ge, { color: n, accentColor: i }) }),
        /* @__PURE__ */ e("g", { transform: `translate(${w}, 0)`, children: /* @__PURE__ */ e(ye, { color: n }) })
      ]
    }
  );
}
const me = {
  "new-haze": "🌙",
  "new-haze-light": "🌸",
  rabbitek: "🌑",
  "rabbitek-light": "✨",
  canahoria: "🌿",
  "canahoria-dark": "🍂"
};
function We() {
  const { theme: r, themeName: t, setThemeName: n, themeOptions: i } = v(), [a, c] = m(!1), h = ee(null);
  return P(() => {
    if (!a) return;
    function p(y) {
      h.current && !h.current.contains(y.target) && c(!1);
    }
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [a]), /* @__PURE__ */ s("div", { ref: h, style: { position: "relative" }, children: [
    /* @__PURE__ */ e(
      "button",
      {
        onClick: () => c((p) => !p),
        "aria-label": "Cambiar tema",
        style: {
          background: "none",
          border: `1px solid ${r.border}`,
          borderRadius: 8,
          padding: "4px 8px",
          cursor: "pointer",
          fontSize: 14,
          lineHeight: 1
        },
        children: me[t] ?? "🟣"
      }
    ),
    a && /* @__PURE__ */ e("div", { style: {
      position: "absolute",
      right: 0,
      top: "100%",
      marginTop: 4,
      background: r.s2,
      border: `1px solid ${r.border}`,
      borderRadius: 10,
      padding: 4,
      zIndex: 200,
      minWidth: 170,
      boxShadow: "0 8px 24px rgba(0,0,0,0.14)"
    }, children: i.map((p) => /* @__PURE__ */ s(
      "button",
      {
        onClick: () => {
          n(p.value), c(!1);
        },
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          width: "100%",
          padding: "6px 10px",
          background: t === p.value ? r.s2 : "transparent",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          fontSize: 12,
          color: r.text,
          fontFamily: "inherit"
        },
        children: [
          /* @__PURE__ */ e("span", { children: me[p.value] }),
          /* @__PURE__ */ e("span", { style: { flex: 1, textAlign: "left" }, children: p.label }),
          t === p.value && /* @__PURE__ */ e("span", { style: { color: r.accent }, children: "✓" })
        ]
      },
      p.value
    )) })
  ] });
}
function Ae(r = 768) {
  const [t, n] = m(!1);
  return P(() => {
    const i = window.matchMedia(`(max-width: ${r - 1}px)`);
    n(i.matches);
    const a = (c) => n(c.matches);
    return i.addEventListener("change", a), () => i.removeEventListener("change", a);
  }, [r]), t;
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
function je(r, t) {
  return t.some((n) => r.includes(n));
}
function Ze({ href: r, children: t, style: n, "aria-label": i }) {
  return /* @__PURE__ */ e("a", { href: r, style: n, "aria-label": i, children: t });
}
function He({ user: r, onLogout: t, profileHref: n, LinkComponent: i }) {
  const { theme: a } = v(), [c, h] = m(!1), p = ee(null);
  return P(() => {
    if (!c) return;
    const y = (b) => {
      p.current && !p.current.contains(b.target) && h(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, [c]), /* @__PURE__ */ s("div", { ref: p, style: { position: "relative" }, children: [
    /* @__PURE__ */ s(
      "button",
      {
        onClick: () => h((y) => !y),
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
          r.username,
          /* @__PURE__ */ e("span", { style: { marginLeft: 4, fontSize: 9, opacity: 0.7 }, children: c ? "▲" : "▼" })
        ]
      }
    ),
    c && /* @__PURE__ */ s("div", { style: {
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
      /* @__PURE__ */ s("div", { style: { padding: "10px 16px 12px", borderBottom: `1px solid ${a.border}` }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 13, fontWeight: 700, color: a.text }, children: r.username }),
        /* @__PURE__ */ e("div", { style: { fontSize: 11, color: a.textDim, marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: r.email })
      ] }),
      n && /* @__PURE__ */ e("div", { style: { padding: "4px 8px 0" }, children: /* @__PURE__ */ e(
        i,
        {
          href: n,
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
          onMouseEnter: (y) => {
            const b = y.currentTarget;
            b.style.background = a.s2, b.style.color = a.text;
          },
          onMouseLeave: (y) => {
            const b = y.currentTarget;
            b.style.background = "none", b.style.color = a.textMuted;
          },
          children: "Cerrar sesión"
        }
      ) })
    ] })
  ] });
}
function mt({
  activeApp: r,
  user: t,
  onLogin: n,
  onLogout: i,
  profileHref: a,
  LinkComponent: c = Ze,
  websiteUrl: h = "https://newhaze.ar",
  learnUrl: p = "https://learn.newhaze.ar",
  extraNavLinks: y
}) {
  const { theme: b } = v(), w = Ae(), C = [
    { label: "Aprender", href: p, app: "learn" },
    { label: "Blog", href: `${h}/blog`, app: "blog" }
  ], l = (d) => ({
    fontSize: 13,
    fontWeight: d ? 600 : 400,
    color: d ? "var(--nh-accent-bright)" : "var(--nh-text-muted)",
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.15s"
  });
  return /* @__PURE__ */ s("header", { style: {
    borderBottom: "1px solid var(--nh-border)",
    padding: w ? "0 16px" : "0 32px",
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
    /* @__PURE__ */ e(c, { href: h, "aria-label": "New Haze", style: { display: "flex", alignItems: "center", textDecoration: "none" }, children: /* @__PURE__ */ e(xe, { variant: "full", size: 28 }) }),
    !w && /* @__PURE__ */ s("nav", { style: { display: "flex", gap: 20, alignItems: "center" }, children: [
      C.map((d) => /* @__PURE__ */ e(c, { href: d.href, style: l(r === d.app), children: d.label }, d.app)),
      y == null ? void 0 : y.map((d) => /* @__PURE__ */ e(c, { href: d.href, style: l(!1), children: d.label }, d.href)),
      t && Le.map(
        (d) => je(t.roles, d.roles) ? /* @__PURE__ */ e(c, { href: d.href, style: l(!1), children: d.label }, d.label) : null
      )
    ] }),
    /* @__PURE__ */ s("div", { style: { marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }, children: [
      /* @__PURE__ */ e(We, {}),
      t ? /* @__PURE__ */ e(He, { user: t, onLogout: i, profileHref: a, LinkComponent: c }) : /* @__PURE__ */ e(
        "button",
        {
          onClick: n,
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
function Ue({ children: r }) {
  return /* @__PURE__ */ e("div", { style: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px 16px"
  }, children: r });
}
function O({ children: r, title: t, subtitle: n }) {
  const { theme: i } = v();
  return /* @__PURE__ */ s("div", { style: {
    background: i.s1,
    border: `1px solid ${i.border}`,
    borderRadius: 20,
    padding: "32px 28px",
    width: "100%",
    maxWidth: 380
  }, children: [
    t && /* @__PURE__ */ s("div", { style: { marginBottom: n ? 8 : 20 }, children: [
      /* @__PURE__ */ e("div", { style: { fontSize: 20, fontWeight: 700, color: i.text }, children: t }),
      n && /* @__PURE__ */ e("div", { style: { fontSize: 13, color: i.textMuted, marginTop: 4 }, children: n })
    ] }),
    r
  ] });
}
function Z({ msg: r }) {
  const { theme: t } = v();
  return /* @__PURE__ */ e("div", { style: {
    background: t.errorBg,
    border: `1px solid ${t.errorBorder}`,
    borderRadius: 8,
    padding: "10px 12px",
    fontSize: 13,
    color: t.error
  }, children: r });
}
function Ke({
  onRegister: r,
  onVerifyOtp: t,
  onResendOtp: n,
  onLogin: i,
  onLoginWithGoogle: a,
  onForgotPassword: c,
  onSaveUsername: h,
  onGuest: p,
  initialMode: y = "login",
  compact: b = !1,
  googleClientId: w,
  appName: C = "New Haze"
}) {
  const { theme: l } = v(), [d, W] = m(y), [x, A] = m(""), [S, f] = m(""), [L, K] = m(["", "", "", "", "", ""]), [G, we] = m(""), [z, Y] = m(null), [k, te] = m(!1), [B, q] = m(0), [re, ve] = m(!1), $ = ee([]);
  P(() => {
    if (B <= 0) return;
    const o = setTimeout(() => q((u) => u - 1), 1e3);
    return () => clearTimeout(o);
  }, [B]), P(() => {
    d === "otp" && setTimeout(() => {
      var o;
      return (o = $.current[0]) == null ? void 0 : o.focus();
    }, 100), d === "profile" && setTimeout(() => {
      var o;
      return (o = document.getElementById("username-input")) == null ? void 0 : o.focus();
    }, 100);
  }, [d]);
  const E = (o) => {
    W(o), Y(null);
  }, T = async (o) => {
    Y(null), te(!0);
    try {
      await o();
    } catch (u) {
      Y(u.message);
    } finally {
      te(!1);
    }
  }, ne = () => T(async () => {
    if (!x || !S) throw new Error("Completá email y contraseña");
    if (S.length < 6) throw new Error("La contraseña debe tener al menos 6 caracteres");
    await r(x, S), q(60), E("otp");
  }), oe = () => T(async () => {
    const o = L.join("");
    if (o.length < 6) throw new Error("Ingresá el código completo de 6 dígitos");
    await t(x, o);
  }), ke = () => T(async () => {
    await n(x), q(60), K(["", "", "", "", "", ""]), setTimeout(() => {
      var o;
      return (o = $.current[0]) == null ? void 0 : o.focus();
    }, 50);
  }), ie = () => T(async () => {
    if (!x || !S) throw new Error("Completá email y contraseña");
    await i(x, S);
  }), ae = () => T(async () => {
    if (!x) throw new Error("Ingresá tu email");
    await c(x), E("forgot_sent");
  }), se = () => T(async () => {
    if (!G.trim()) throw new Error("Ingresá un nombre de usuario");
    await h(G.trim());
  }), Ce = (o, u) => {
    var I;
    const g = u.replace(/\D/g, "").slice(-1), M = [...L];
    M[o] = g, K(M), g && o < 5 && ((I = $.current[o + 1]) == null || I.focus());
  }, Se = (o, u) => {
    var g;
    u.key === "Backspace" && !L[o] && o > 0 && ((g = $.current[o - 1]) == null || g.focus()), u.key === "Enter" && oe();
  }, V = Pe(async (o) => {
    !(o != null && o.credential) || !a || await T(async () => {
      await a(o.credential);
    });
  }, [a]);
  P(() => {
    var u, g;
    if (!a || !w) return;
    if ((g = (u = window.google) == null ? void 0 : u.accounts) != null && g.id) {
      window.google.accounts.id.initialize({ client_id: w, callback: V });
      return;
    }
    const o = document.createElement("script");
    o.src = "https://accounts.google.com/gsi/client", o.async = !0, o.defer = !0, o.onload = () => {
      var M, I, ce;
      (ce = (I = (M = window.google) == null ? void 0 : M.accounts) == null ? void 0 : I.id) == null || ce.initialize({ client_id: w, callback: V });
    }, document.head.appendChild(o);
  }, [V, a, w]);
  const _e = () => {
    var o, u, g;
    (g = (u = (o = window.google) == null ? void 0 : o.accounts) == null ? void 0 : u.id) == null || g.prompt();
  }, ze = (o) => {
    var M;
    const u = o.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!u) return;
    o.preventDefault();
    const g = u.split("").concat(Array(6).fill("")).slice(0, 6);
    K(g), (M = $.current[Math.min(u.length, 5)]) == null || M.focus();
  }, j = {
    width: "100%",
    background: l.s2,
    border: `1px solid ${l.border}`,
    borderRadius: 10,
    padding: "12px 14px",
    color: l.text,
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box"
  }, D = {
    width: "100%",
    padding: "13px",
    borderRadius: 12,
    background: `linear-gradient(135deg, ${l.accent}, ${l.accentBright})`,
    border: "none",
    color: l.s0,
    fontWeight: 700,
    cursor: k ? "not-allowed" : "pointer",
    fontSize: 15,
    opacity: k ? 0.7 : 1,
    fontFamily: "inherit"
  }, J = {
    ...D,
    opacity: 1,
    background: "transparent",
    border: `1px solid ${l.border}`,
    color: l.textMuted
  }, le = /* @__PURE__ */ s(F, { children: [
    d === "otp" && /* @__PURE__ */ s(O, { title: "Revisá tu email", subtitle: /* @__PURE__ */ s(F, { children: [
      "Enviamos un código de 6 dígitos a ",
      /* @__PURE__ */ e("strong", { style: { color: l.accentBright }, children: x })
    ] }), children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", gap: 8, justifyContent: "center", margin: "24px 0" }, onPaste: ze, children: L.map((o, u) => /* @__PURE__ */ e(
        "input",
        {
          ref: (g) => {
            $.current[u] = g;
          },
          type: "text",
          inputMode: "numeric",
          maxLength: 1,
          value: o,
          onChange: (g) => Ce(u, g.target.value),
          onKeyDown: (g) => Se(u, g),
          style: {
            width: 44,
            height: 54,
            textAlign: "center",
            fontSize: 24,
            fontWeight: 700,
            background: l.s2,
            border: `1.5px solid ${o ? l.accent : l.border}`,
            borderRadius: 10,
            color: l.text,
            outline: "none",
            fontFamily: "inherit",
            transition: "border-color 0.15s"
          },
          onFocus: (g) => {
            g.target.style.borderColor = l.accentBright;
          },
          onBlur: (g) => {
            g.target.style.borderColor = o ? l.accent : l.border;
          }
        },
        u
      )) }),
      z && /* @__PURE__ */ e(Z, { msg: z }),
      /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }, children: [
        /* @__PURE__ */ e("button", { style: D, onClick: oe, disabled: k, children: k ? "Verificando..." : "Confirmar código" }),
        /* @__PURE__ */ e(
          "button",
          {
            style: { ...J, opacity: B > 0 ? 0.45 : 1, cursor: B > 0 ? "default" : "pointer" },
            onClick: B > 0 ? void 0 : ke,
            disabled: B > 0 || k,
            children: B > 0 ? `Reenviar en ${B}s` : "Reenviar código"
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { style: { textAlign: "center", marginTop: 14 }, children: /* @__PURE__ */ e(
        "button",
        {
          style: { background: "none", border: "none", cursor: "pointer", color: l.textDim, fontSize: 12, fontFamily: "inherit" },
          onClick: () => E("register"),
          children: "Usar otro email"
        }
      ) })
    ] }),
    d === "profile" && /* @__PURE__ */ e(O, { title: "¿Cómo querés que te llamen?", subtitle: "Podés cambiarlo después desde tu perfil", children: /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }, children: [
      /* @__PURE__ */ e(
        "input",
        {
          id: "username-input",
          value: G,
          onChange: (o) => we(o.target.value),
          placeholder: "ej: cultivador420",
          style: j,
          onFocus: (o) => {
            o.target.style.borderColor = l.accent;
          },
          onBlur: (o) => {
            o.target.style.borderColor = l.border;
          },
          onKeyDown: (o) => o.key === "Enter" && se()
        }
      ),
      z && /* @__PURE__ */ e(Z, { msg: z }),
      /* @__PURE__ */ e("button", { style: D, onClick: se, disabled: k, children: k ? "Guardando..." : "Empezar →" })
    ] }) }),
    d === "forgot_sent" && /* @__PURE__ */ e(
      O,
      {
        title: "Revisá tu casilla",
        subtitle: /* @__PURE__ */ s(F, { children: [
          "Si existe una cuenta con ",
          /* @__PURE__ */ e("strong", { style: { color: l.accentBright }, children: x }),
          ", vas a recibir un link para restablecer tu contraseña."
        ] }),
        children: /* @__PURE__ */ e("button", { style: { ...D, marginTop: 20 }, onClick: () => E("login"), children: "Volver al inicio de sesión" })
      }
    ),
    d === "forgot" && /* @__PURE__ */ e(O, { title: "Restablecer contraseña", subtitle: "Ingresá tu email y te enviamos un link", children: /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }, children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "email",
          value: x,
          onChange: (o) => A(o.target.value),
          placeholder: "tu@email.com",
          style: j,
          onFocus: (o) => {
            o.target.style.borderColor = l.accent;
          },
          onBlur: (o) => {
            o.target.style.borderColor = l.border;
          },
          onKeyDown: (o) => o.key === "Enter" && ae()
        }
      ),
      z && /* @__PURE__ */ e(Z, { msg: z }),
      /* @__PURE__ */ e("button", { style: D, onClick: ae, disabled: k, children: k ? "Enviando..." : "Enviar link →" }),
      /* @__PURE__ */ e("button", { style: J, onClick: () => E("login"), children: "← Volver" })
    ] }) }),
    (d === "login" || d === "register") && /* @__PURE__ */ s(O, { children: [
      /* @__PURE__ */ s("div", { style: { textAlign: "center", marginBottom: 28 }, children: [
        /* @__PURE__ */ e("div", { style: { display: "flex", justifyContent: "center", marginBottom: 14 }, children: /* @__PURE__ */ e(xe, { variant: "icon", size: 56, color: "#fff", accentColor: l.accent }) }),
        /* @__PURE__ */ e("div", { style: { fontSize: 13, color: l.textMuted }, children: d === "login" ? "Bienvenido de vuelta" : "Creá tu cuenta para empezar" })
      ] }),
      /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "email",
            value: x,
            onChange: (o) => A(o.target.value),
            placeholder: "Email",
            style: j,
            onFocus: (o) => {
              o.target.style.borderColor = l.accent;
            },
            onBlur: (o) => {
              o.target.style.borderColor = l.border;
            }
          }
        ),
        /* @__PURE__ */ s("div", { style: { position: "relative" }, children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: re ? "text" : "password",
              value: S,
              onChange: (o) => f(o.target.value),
              placeholder: "Contraseña",
              style: { ...j, paddingRight: 42 },
              onFocus: (o) => {
                o.target.style.borderColor = l.accent;
              },
              onBlur: (o) => {
                o.target.style.borderColor = l.border;
              },
              onKeyDown: (o) => o.key === "Enter" && (d === "login" ? ie() : ne())
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
                color: l.textDim,
                display: "flex",
                alignItems: "center"
              },
              children: re ? /* @__PURE__ */ s("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ e("path", { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" }),
                /* @__PURE__ */ e("path", { d: "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" }),
                /* @__PURE__ */ e("line", { x1: "1", y1: "1", x2: "23", y2: "23" })
              ] }) : /* @__PURE__ */ s("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ e("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
                /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" })
              ] })
            }
          )
        ] }),
        z && /* @__PURE__ */ e(Z, { msg: z }),
        /* @__PURE__ */ e("button", { style: D, onClick: d === "login" ? ie : ne, disabled: k, children: k ? "..." : d === "login" ? "Entrar" : "Crear cuenta" }),
        a && w && /* @__PURE__ */ s(F, { children: [
          /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 12, margin: "4px 0" }, children: [
            /* @__PURE__ */ e("div", { style: { flex: 1, height: 1, background: l.border } }),
            /* @__PURE__ */ e("span", { style: { fontSize: 11, color: l.textDim, fontFamily: "inherit" }, children: "o" }),
            /* @__PURE__ */ e("div", { style: { flex: 1, height: 1, background: l.border } })
          ] }),
          /* @__PURE__ */ e("button", { style: J, onClick: _e, disabled: k, children: "Continuar con Google" })
        ] }),
        d === "login" && /* @__PURE__ */ e(
          "button",
          {
            style: { background: "none", border: "none", cursor: "pointer", color: l.textDim, fontSize: 12, fontFamily: "inherit", textAlign: "center" },
            onClick: () => E("forgot"),
            children: "¿Olvidaste tu contraseña?"
          }
        )
      ] }),
      /* @__PURE__ */ s("div", { style: { textAlign: "center", marginTop: 20, fontSize: 13, color: l.textMuted, fontFamily: "inherit" }, children: [
        d === "login" ? "¿No tenés cuenta?" : "¿Ya tenés cuenta?",
        " ",
        /* @__PURE__ */ e(
          "span",
          {
            onClick: () => E(d === "login" ? "register" : "login"),
            style: { color: l.accentBright, cursor: "pointer", fontWeight: 600 },
            children: d === "login" ? "Registrate" : "Iniciá sesión"
          }
        )
      ] }),
      p && /* @__PURE__ */ s("div", { style: { textAlign: "center", marginTop: 16 }, children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: p,
            style: { background: "none", border: "none", cursor: "pointer", color: l.textDim, fontSize: 12, fontFamily: "inherit", padding: "4px 8px", borderRadius: 6, transition: "color 0.15s" },
            onMouseEnter: (o) => {
              o.currentTarget.style.color = l.textMuted;
            },
            onMouseLeave: (o) => {
              o.currentTarget.style.color = l.textDim;
            },
            children: "Continuar como invitado"
          }
        ),
        /* @__PURE__ */ e("span", { style: { display: "block", fontSize: 10, color: l.textDim, fontFamily: "inherit", marginTop: 2 }, children: "tu progreso no se guardará" })
      ] })
    ] })
  ] });
  return b ? le : /* @__PURE__ */ e(Ue, { children: le });
}
function bt({ onClose: r, initialMode: t, authScreenProps: n }) {
  const { theme: i } = v();
  return /* @__PURE__ */ e(
    "div",
    {
      onClick: r,
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
      children: /* @__PURE__ */ s(
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
            r && /* @__PURE__ */ e(
              "button",
              {
                onClick: r,
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
              Ke,
              {
                ...n,
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
function xt({ user: r, onUpdateUsername: t, onLogout: n }) {
  const { theme: i } = v(), [a, c] = m(r.username ?? ""), [h, p] = m(!1), [y, b] = m(null), [w, C] = m(!1), [l, d] = m(!1), W = async () => {
    if (!a.trim()) {
      b("Ingresá un nombre de usuario");
      return;
    }
    b(null), p(!0), C(!1);
    try {
      await t(a.trim()), C(!0), setTimeout(() => C(!1), 2e3);
    } catch (f) {
      b(f.message);
    } finally {
      p(!1);
    }
  }, x = {
    flex: 1,
    background: i.s2,
    border: `1px solid ${i.border}`,
    borderRadius: 10,
    padding: "10px 14px",
    color: i.text,
    fontSize: 14,
    outline: "none",
    fontFamily: "inherit"
  }, A = {
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
  }, S = r.xp != null && r.level != null ? Math.min(100, r.xp % 1e3 / 1e3 * 100) : null;
  return /* @__PURE__ */ s("div", { style: { display: "flex", flexDirection: "column", gap: 24, padding: "8px 0" }, children: [
    /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center", gap: 16 }, children: [
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
      /* @__PURE__ */ s("div", { style: { minWidth: 0 }, children: [
        /* @__PURE__ */ e("div", { style: { fontSize: 17, fontWeight: 700, color: i.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: r.username ?? "Sin nombre" }),
        /* @__PURE__ */ e("div", { style: { fontSize: 13, color: i.textMuted, marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: r.email }),
        r.roles && r.roles.length > 0 && /* @__PURE__ */ e("div", { style: { display: "flex", gap: 6, marginTop: 6, flexWrap: "wrap" }, children: r.roles.map((f) => /* @__PURE__ */ e(
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
    r.xp != null && r.level != null && S != null && /* @__PURE__ */ s("div", { children: [
      /* @__PURE__ */ s("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12, color: i.textMuted, marginBottom: 6 }, children: [
        /* @__PURE__ */ s("span", { children: [
          "Nivel ",
          r.level
        ] }),
        /* @__PURE__ */ s("span", { children: [
          r.xp,
          " XP"
        ] })
      ] }),
      /* @__PURE__ */ e("div", { style: { height: 8, background: i.s2, borderRadius: 99, overflow: "hidden", border: `1px solid ${i.border}` }, children: /* @__PURE__ */ e("div", { style: {
        height: "100%",
        width: `${S}%`,
        background: `linear-gradient(90deg, ${i.accent}, ${i.accentBright})`,
        borderRadius: 99,
        transition: "width 0.4s ease"
      } }) })
    ] }),
    /* @__PURE__ */ e("div", { style: { height: 1, background: i.border } }),
    /* @__PURE__ */ s("div", { children: [
      /* @__PURE__ */ e("div", { style: { fontSize: 13, fontWeight: 600, color: i.textMuted, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }, children: "Cambiar nombre de usuario" }),
      /* @__PURE__ */ s("div", { style: { display: "flex", gap: 10 }, children: [
        /* @__PURE__ */ e(
          "input",
          {
            value: a,
            onChange: (f) => {
              c(f.target.value), b(null), C(!1);
            },
            placeholder: "nuevo_nombre",
            style: x,
            onFocus: (f) => {
              f.target.style.borderColor = i.accent;
            },
            onBlur: (f) => {
              f.target.style.borderColor = i.border;
            },
            onKeyDown: (f) => f.key === "Enter" && W()
          }
        ),
        /* @__PURE__ */ e("button", { style: A, onClick: W, disabled: h, children: h ? "..." : w ? "✓ Guardado" : "Guardar" })
      ] }),
      y && /* @__PURE__ */ e("div", { style: { marginTop: 8, fontSize: 12, color: i.error }, children: y })
    ] }),
    /* @__PURE__ */ e("div", { style: { height: 1, background: i.border } }),
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      "button",
      {
        onClick: n,
        onMouseEnter: () => d(!0),
        onMouseLeave: () => d(!1),
        style: {
          width: "100%",
          padding: "11px",
          borderRadius: 10,
          background: "transparent",
          border: `1px solid ${l ? i.accent : i.border}`,
          color: l ? i.accent : i.textMuted,
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
function fe({ children: r, active: t = !1, onClick: n, style: i, className: a }) {
  const { theme: c } = v();
  return /* @__PURE__ */ e(
    "div",
    {
      onClick: n,
      className: a,
      style: {
        background: c.s2,
        border: `1px solid ${t ? c.borderLight : c.border}`,
        borderRadius: 16,
        padding: "20px 20px",
        cursor: n ? "pointer" : "default",
        transition: "box-shadow 0.2s ease",
        boxShadow: t ? c.shadowLg : c.shadowSm,
        ...i
      },
      children: r
    }
  );
}
function ft({ children: r, style: t, className: n }) {
  const { theme: i } = v();
  return /* @__PURE__ */ e(
    "div",
    {
      className: n,
      style: {
        background: i.s1,
        borderRadius: 20,
        padding: 16,
        boxShadow: i.shadowSm,
        ...t
      },
      children: r
    }
  );
}
function wt({ href: r, children: t }) {
  return /* @__PURE__ */ e(
    "a",
    {
      href: r,
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
const Ge = "_wrapper_1ej2d_1", Ye = "_imageWrapper_1ej2d_19", qe = "_image_1ej2d_19", Ve = "_body_1ej2d_51", Je = "_title_1ej2d_67", Xe = "_description_1ej2d_77", Qe = "_price_1ej2d_87", R = {
  wrapper: Ge,
  imageWrapper: Ye,
  image: qe,
  body: Ve,
  title: Je,
  description: Xe,
  price: Qe
};
function vt({ image: r, imageAlt: t, title: n, description: i, price: a }) {
  const { theme: c } = v();
  return /* @__PURE__ */ e("div", { className: R.wrapper, children: /* @__PURE__ */ s(fe, { style: { padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ e("div", { className: R.imageWrapper, children: /* @__PURE__ */ e("img", { src: r, alt: t ?? n, className: R.image }) }),
    /* @__PURE__ */ s("div", { className: R.body, children: [
      /* @__PURE__ */ e("h3", { className: R.title, style: { color: c.text }, children: n }),
      /* @__PURE__ */ e("p", { className: R.description, style: { color: c.textMuted }, children: i }),
      /* @__PURE__ */ e("p", { className: R.price, style: { color: c.accentBright }, children: a })
    ] })
  ] }) });
}
const et = "_card_16ig2_1", tt = "_imageWrapper_16ig2_33", rt = "_image_16ig2_33", nt = "_imageOverlay_16ig2_67", ot = "_body_16ig2_81", it = "_title_16ig2_89", at = "_excerpt_16ig2_105", st = "_readMore_16ig2_119", lt = "_arrow_16ig2_135", _ = {
  card: et,
  imageWrapper: tt,
  image: rt,
  imageOverlay: nt,
  body: ot,
  title: it,
  excerpt: at,
  readMore: st,
  arrow: lt
};
function kt({
  title: r,
  excerpt: t,
  coverImage: n,
  href: i,
  onClick: a,
  readMoreLabel: c = "Leer más",
  animationDelay: h
}) {
  const { theme: p } = v();
  return /* @__PURE__ */ s(
    "a",
    {
      href: i,
      onClick: a,
      className: _.card,
      style: h !== void 0 ? { animationDelay: `${h}ms` } : void 0,
      children: [
        /* @__PURE__ */ s("div", { className: _.imageWrapper, children: [
          /* @__PURE__ */ e("img", { src: n || "/placeholder.svg", alt: r, className: _.image }),
          /* @__PURE__ */ e("div", { className: _.imageOverlay })
        ] }),
        /* @__PURE__ */ s("div", { className: _.body, children: [
          /* @__PURE__ */ e("h3", { className: _.title, style: { color: p.text }, children: r }),
          /* @__PURE__ */ e("p", { className: _.excerpt, style: { color: p.textMuted }, children: t }),
          /* @__PURE__ */ s("div", { className: _.readMore, style: { color: p.accent }, children: [
            c,
            /* @__PURE__ */ s(
              "svg",
              {
                className: _.arrow,
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
const ct = "_card_eodbe_1", dt = "_iconCircle_eodbe_21", ht = "_title_eodbe_41", pt = "_description_eodbe_55", H = {
  card: ct,
  iconCircle: dt,
  title: ht,
  description: pt
};
function Ct({ icon: r, title: t, description: n, iconVariant: i = "accent" }) {
  const { theme: a } = v(), c = i === "accent-bright" ? a.accentBright : i === "secondary" ? a.secondary : i === "success" ? a.success : a.accent;
  return /* @__PURE__ */ s(fe, { className: H.card, children: [
    /* @__PURE__ */ e("div", { className: H.iconCircle, style: { background: c }, children: r }),
    /* @__PURE__ */ e("h3", { className: H.title, style: { color: a.text }, children: t }),
    /* @__PURE__ */ e("p", { className: H.description, style: { color: a.textMuted }, children: n })
  ] });
}
export {
  bt as AuthModal,
  Ke as AuthScreen,
  wt as BetaBanner,
  kt as BlogCard,
  fe as Card,
  ft as CardSection,
  Ct as FeatureCard,
  mt as Header,
  xe as Logo,
  vt as ProductCard,
  yt as ThemeProvider,
  xt as UserSettings,
  Te as resolveThemeName,
  U as themes,
  v as useTheme
};
