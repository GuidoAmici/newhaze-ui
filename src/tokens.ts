/**
 * tokens.ts — The single source of truth for all CSS variable names in newhaze-ui.
 *
 * AGENTS: Before touching any color, CSS variable, or theme value in any consumer app
 * (newhaze-learn, newhaze-website, etc.), read this file first.
 * All valid token names are listed here. Do NOT invent new --nh-* variable names.
 */

import { THEME_HTML_CONFIG, LEGACY_THEME_MAP, ThemeName } from './themes'

// ── CSS variable names ─────────────────────────────────────────────────────────

/** All CSS variable names set by ThemeProvider. Use these in your CSS/Tailwind instead of hardcoded values. */
export const NH_VARS = {

  // ── Theme-scoped (value changes per active theme) ──────────────────────────

  // Surfaces
  S0:               '--nh-s0',           // page background (darkest)
  S1:               '--nh-s1',           // section / container panels
  S2:               '--nh-s2',           // cards and sub-panel groups
  S3:               '--nh-s3',           // interactive elements inside cards
  // Elevation shadows (theme-aware)
  SHADOW_SM:        '--nh-shadow-sm',
  SHADOW_LG:        '--nh-shadow-lg',
  // Text
  TEXT:             '--nh-text',
  TEXT_MUTED:       '--nh-text-muted',
  TEXT_DIM:         '--nh-text-dim',
  // Borders
  BORDER:           '--nh-border',
  BORDER_LIGHT:     '--nh-border-light',
  // Accent
  ACCENT:           '--nh-accent',
  ACCENT_BRIGHT:    '--nh-accent-bright',
  ACCENT_NEON:      '--nh-accent-neon',
  SECONDARY:        '--nh-secondary',
  SECONDARY_BRIGHT: '--nh-secondary-bright',
  // Semantic states
  ERROR:            '--nh-error',
  ERROR_BG:         '--nh-error-bg',
  ERROR_BORDER:     '--nh-error-border',
  SUCCESS:          '--nh-success',
  SUCCESS_BG:       '--nh-success-bg',
  SUCCESS_BORDER:   '--nh-success-border',
  FOCUS:            '--nh-focus',

  // ── Static (set once, same across all themes) ──────────────────────────────

  // Spacing
  SPACE_0:  '--nh-space-0',
  SPACE_1:  '--nh-space-1',
  SPACE_2:  '--nh-space-2',
  SPACE_3:  '--nh-space-3',
  SPACE_4:  '--nh-space-4',
  SPACE_5:  '--nh-space-5',
  SPACE_6:  '--nh-space-6',
  SPACE_7:  '--nh-space-7',
  SPACE_8:  '--nh-space-8',
  SPACE_10: '--nh-space-10',
  SPACE_12: '--nh-space-12',
  SPACE_14: '--nh-space-14',
  SPACE_16: '--nh-space-16',
  SPACE_20: '--nh-space-20',
  SPACE_24: '--nh-space-24',
  // Typography — font families
  FONT_SANS: '--nh-font-sans',
  FONT_MONO: '--nh-font-mono',
  // Typography — sizes
  TEXT_XS:   '--nh-text-xs',
  TEXT_SM:   '--nh-text-sm',
  TEXT_BASE: '--nh-text-base',
  TEXT_MD:   '--nh-text-md',
  TEXT_LG:   '--nh-text-lg',
  TEXT_XL:   '--nh-text-xl',
  TEXT_2XL:  '--nh-text-2xl',
  TEXT_3XL:  '--nh-text-3xl',
  TEXT_4XL:  '--nh-text-4xl',
  // Typography — weights
  WEIGHT_REGULAR:  '--nh-weight-regular',
  WEIGHT_MEDIUM:   '--nh-weight-medium',
  WEIGHT_SEMIBOLD: '--nh-weight-semibold',
  WEIGHT_BOLD:     '--nh-weight-bold',
  WEIGHT_BLACK:    '--nh-weight-black',
  // Typography — line height
  LEADING_TIGHT:  '--nh-leading-tight',
  LEADING_SNUG:   '--nh-leading-snug',
  LEADING_NORMAL: '--nh-leading-normal',
  LEADING_LOOSE:  '--nh-leading-loose',
  // Typography — letter spacing
  TRACKING_TIGHT:  '--nh-tracking-tight',
  TRACKING_NORMAL: '--nh-tracking-normal',
  TRACKING_WIDE:   '--nh-tracking-wide',
  TRACKING_WIDER:  '--nh-tracking-wider',
  // Border radius
  RADIUS_SM:   '--nh-radius-sm',
  RADIUS_MD:   '--nh-radius-md',
  RADIUS_LG:   '--nh-radius-lg',
  RADIUS_XL:   '--nh-radius-xl',
  RADIUS_2XL:  '--nh-radius-2xl',
  RADIUS_3XL:  '--nh-radius-3xl',
  RADIUS_FULL: '--nh-radius-full',
  // Shadows (static)
  SHADOW_MD:          '--nh-shadow-md',
  SHADOW_XL:          '--nh-shadow-xl',
  SHADOW_GLOW_ACCENT: '--nh-shadow-glow-accent',
  SHADOW_GLOW_NEON:   '--nh-shadow-glow-neon',
  // Z-index
  Z_BASE:    '--nh-z-base',
  Z_RAISED:  '--nh-z-raised',
  Z_STICKY:  '--nh-z-sticky',
  Z_OVERLAY: '--nh-z-overlay',
  Z_MODAL:   '--nh-z-modal',
  Z_TOAST:   '--nh-z-toast',
  Z_TOOLTIP: '--nh-z-tooltip',
  // Motion — durations
  DURATION_INSTANT: '--nh-duration-instant',
  DURATION_FAST:    '--nh-duration-fast',
  DURATION_NORMAL:  '--nh-duration-normal',
  DURATION_SLOW:    '--nh-duration-slow',
  DURATION_XSLOW:   '--nh-duration-xslow',
  // Motion — easings
  EASE_LINEAR: '--nh-ease-linear',
  EASE_IN:     '--nh-ease-in',
  EASE_OUT:    '--nh-ease-out',
  EASE_INOUT:  '--nh-ease-inout',
  EASE_SPRING: '--nh-ease-spring',
  EASE_BOUNCE: '--nh-ease-bounce',

} as const

export type NhVar = typeof NH_VARS[keyof typeof NH_VARS]

// ── FOUC prevention script ─────────────────────────────────────────────────────

const DEFAULT_THEME: ThemeName = 'new-haze'

/**
 * Generates the inline FOUC-prevention script string from the canonical theme config.
 * Always in sync with THEME_HTML_CONFIG and LEGACY_THEME_MAP — never written by hand.
 *
 * Usage in layout.tsx:
 *   import { FOUC_SCRIPT } from 'newhaze-ui'
 *   <script dangerouslySetInnerHTML={{ __html: FOUC_SCRIPT }} />
 */
function buildFoucScript(): string {
  const allClasses = [...new Set(
    Object.values(THEME_HTML_CONFIG).flatMap(cfg => cfg.classes)
  )]

  const legacyJson = JSON.stringify(
    Object.fromEntries(Object.entries(LEGACY_THEME_MAP))
  )

  const themeEntries = (Object.entries(THEME_HTML_CONFIG) as [ThemeName, { classes: string[]; colorScheme: string }][])
    .map(([name, { classes, colorScheme }]) =>
      `if(t===${JSON.stringify(name)}){el.classList.add(${classes.map(c => JSON.stringify(c)).join(',')});el.style.colorScheme=${JSON.stringify(colorScheme)};}`
    )
    .join('else ')

  const fallbackClasses = THEME_HTML_CONFIG[DEFAULT_THEME].classes.map(c => JSON.stringify(c)).join(',')
  const fallbackScheme = JSON.stringify(THEME_HTML_CONFIG[DEFAULT_THEME].colorScheme)

  return `(function(){try{var l=${legacyJson};var s=localStorage.getItem('nh_theme')||${JSON.stringify(DEFAULT_THEME)};var t=l[s]||s;var el=document.documentElement;el.classList.remove(${allClasses.map(c => JSON.stringify(c)).join(',')});${themeEntries}else{el.classList.add(${fallbackClasses});el.style.colorScheme=${fallbackScheme};}}catch(e){}})();`
}

/**
 * Inline script for FOUC prevention. Paste into <head> before any CSS.
 * Generated from THEME_HTML_CONFIG — always up to date with the current theme list.
 *
 * @example
 * // In your Next.js layout.tsx:
 * import { FOUC_SCRIPT } from 'newhaze-ui'
 * // ...
 * <head>
 *   <script dangerouslySetInnerHTML={{ __html: FOUC_SCRIPT }} />
 * </head>
 */
export const FOUC_SCRIPT = buildFoucScript()
