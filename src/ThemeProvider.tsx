"use client"

import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import themes, { ThemeColors, ThemeName, resolveThemeName } from './themes'

const STORAGE_KEY = 'nh_theme'
const DEFAULT_THEME: ThemeName = 'new-haze'

// ── Static tokens (not per-theme) ─────────────────────────────────────────────
// Injected once into <head> on first ThemeProvider mount.

const STATIC_CSS = `
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
`

let staticInjected = false

function injectStaticCSS() {
  if (staticInjected || typeof document === 'undefined') return
  const style = document.createElement('style')
  style.setAttribute('data-nh', 'static')
  style.textContent = STATIC_CSS
  document.head.appendChild(style)
  staticInjected = true
}

// ── Per-theme tokens ──────────────────────────────────────────────────────────

interface ThemeContextValue {
  theme: ThemeColors
  themeName: ThemeName
  setThemeName: (name: ThemeName) => void
  themeOptions: { value: ThemeName; label: string }[]
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const HTML_CLASSES: Record<ThemeName, string[]> = {
  'new-haze':        ['dark', 'new-haze'],
  'rabbitek':        ['dark', 'rabbitek'],
  'canahoria':       ['canahoria'],
  'dark-purple':     ['dark'],
  'green-botanical': ['dark', 'green-botanical'],
  'light':           ['light'],
  'dark-orange':     ['dark', 'dark-orange'],
}

const COLOR_SCHEME: Record<ThemeName, string> = {
  'new-haze':        'dark',
  'rabbitek':        'dark',
  'canahoria':       'light',
  'dark-purple':     'dark',
  'green-botanical': 'dark',
  'light':           'light',
  'dark-orange':     'dark',
}

function applyTheme(name: ThemeName, colors: ThemeColors) {
  const root = document.documentElement

  // Color tokens
  root.style.setProperty('--nh-bg-dark',       colors.bgDark)
  root.style.setProperty('--nh-bg',            colors.bg)
  root.style.setProperty('--nh-bg-light',      colors.bgLight)
  root.style.setProperty('--nh-text',          colors.text)
  root.style.setProperty('--nh-text-muted',    colors.textMuted)
  root.style.setProperty('--nh-text-dim',      colors.textDim)
  root.style.setProperty('--nh-border',        colors.border)
  root.style.setProperty('--nh-border-light',  colors.borderLight)
  root.style.setProperty('--nh-accent',        colors.accent)
  root.style.setProperty('--nh-accent-bright', colors.accentBright)
  root.style.setProperty('--nh-accent-neon',   colors.accentNeon)
  root.style.setProperty('--nh-cta',           colors.cta)
  root.style.setProperty('--nh-cta-light',     colors.ctaLight)
  root.style.setProperty('--nh-cta-text',      colors.ctaText)
  root.style.setProperty('--nh-error',         colors.error)
  root.style.setProperty('--nh-error-bg',      colors.errorBg)
  root.style.setProperty('--nh-error-border',  colors.errorBorder)
  root.style.setProperty('--nh-success',       colors.success)
  root.style.setProperty('--nh-success-bg',    colors.successBg)
  root.style.setProperty('--nh-success-border',colors.successBorder)
  root.style.setProperty('--nh-focus',         colors.focus)

  // CSS classes (for Tailwind dark: variant + website globals.css)
  root.classList.remove('dark', 'new-haze', 'rabbitek', 'canahoria', 'green-botanical', 'dark-orange', 'light')
  HTML_CLASSES[name].forEach(c => root.classList.add(c))
  root.style.colorScheme = COLOR_SCHEME[name]
}

// ── Provider ──────────────────────────────────────────────────────────────────

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always start with DEFAULT_THEME so server and client initial renders match.
  // localStorage is read in a useEffect (client-only) to avoid hydration mismatch.
  const [themeName, setThemeNameState] = useState<ThemeName>(DEFAULT_THEME)

  const theme = useMemo(() => themes[themeName].colors, [themeName])

  useEffect(() => {
    // Read stored preference after mount — safe to access localStorage here.
    try {
      const stored = resolveThemeName(localStorage.getItem(STORAGE_KEY))
      if (stored !== DEFAULT_THEME) setThemeNameState(stored)
    } catch {}
  }, [])

  useEffect(() => {
    injectStaticCSS()
    applyTheme(themeName, theme)
  }, [themeName, theme])

  const setThemeName = (name: ThemeName) => {
    if (!(name in themes)) return
    setThemeNameState(name)
    try { localStorage.setItem(STORAGE_KEY, name) } catch {}
  }

  const themeOptions = useMemo(
    () => (Object.entries(themes) as [ThemeName, { label: string }][]).map(([value, { label }]) => ({ value, label })),
    [],
  )

  return (
    <ThemeContext.Provider value={{ theme, themeName, setThemeName, themeOptions }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
