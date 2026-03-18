export interface ThemeColors {
  // ── Surface levels (distance = darkness: s0 is always darkest) ────────────
  s0: string   // page background
  s1: string   // section container panels
  s2: string   // cards and sub-panel groups
  s3: string   // interactive elements inside cards (buttons, inputs)
  // ── Elevation shadows (inset top highlight + outer bottom drop) ───────────
  shadowSm: string  // default elevation
  shadowLg: string  // selected / active state
  // ── Text ──────────────────────────────────────────────────────────────────
  text: string
  textMuted: string
  textDim: string
  // ── Borders ───────────────────────────────────────────────────────────────
  border: string
  borderLight: string
  // ── Accent ────────────────────────────────────────────────────────────────
  accent: string
  accentBright: string
  accentNeon: string
  // ── Secondary ─────────────────────────────────────────────────────────────
  secondary: string
  secondaryBright: string
  // ── Semantic states ───────────────────────────────────────────────────────
  error: string
  errorBg: string
  errorBorder: string
  success: string
  successBg: string
  successBorder: string
  // ── Accessibility ─────────────────────────────────────────────────────────
  focus: string
}

export interface Theme {
  label: string
  colors: ThemeColors
}

export type ThemeName =
  | 'new-haze'
  | 'new-haze-light'
  | 'rabbitek'
  | 'rabbitek-light'
  | 'canahoria'
  | 'canahoria-dark'

/** Legacy names that may exist in localStorage */
const LEGACY_THEME_MAP: Record<string, ThemeName> = {
  'neon-purple':     'new-haze',
  'neon-purple-v2':  'new-haze',
  'light-legacy':    'canahoria',
  'iamsajid':        'new-haze',
  'iamsajid-light':  'canahoria',
  'dark-purple':     'new-haze',
  'green-botanical': 'canahoria-dark',
  'light':           'new-haze-light',
  'dark-orange':     'new-haze',
}

export function resolveThemeName(stored: string | null): ThemeName {
  if (!stored) return 'new-haze'
  if (stored in themes) return stored as ThemeName
  return LEGACY_THEME_MAP[stored] ?? 'new-haze'
}

// ── Shared surface values ──────────────────────────────────────────────────
// All themes use the same grayscale surfaces during Phase 1 (structure first,
// color later). Brand colors will replace these in Phase 2.

const DARK_SURFACES = {
  s0: 'hsl(0, 0%,  4%)',
  s1: 'hsl(0, 0%,  8%)',
  s2: 'hsl(0, 0%, 12%)',
  s3: 'hsl(0, 0%, 16%)',
  shadowSm: 'inset 0 1px 1px hsla(0,0%,100%,0.07), 0 2px 6px hsla(0,0%,0%,0.55)',
  shadowLg: 'inset 0 2px 8px hsla(0,0%,100%,0.10), 0 10px 30px hsla(0,0%,0%,0.75)',
  text:        'hsl(0, 0%, 92%)',
  textMuted:   'hsl(0, 0%, 60%)',
  textDim:     'hsl(0, 0%, 32%)',
  border:      'hsl(0, 0%, 18%)',
  borderLight: 'hsl(0, 0%, 24%)',
}

const LIGHT_SURFACES = {
  s0: 'hsl(0, 0%, 80%)',
  s1: 'hsl(0, 0%, 88%)',
  s2: 'hsl(0, 0%, 95%)',
  s3: 'hsl(0, 0%, 100%)',
  shadowSm: 'inset 0 1px 2px hsla(0,0%,100%,0.75), 0 2px 4px hsla(0,0%,0%,0.13)',
  shadowLg: 'inset 0 2px 8px hsla(0,0%,100%,0.90), 0 8px 24px hsla(0,0%,0%,0.20)',
  text:        'hsl(0, 0%, 10%)',
  textMuted:   'hsl(0, 0%, 38%)',
  textDim:     'hsl(0, 0%, 62%)',
  border:      'hsl(0, 0%, 72%)',
  borderLight: 'hsl(0, 0%, 80%)',
}

// ── Placeholder accent (orange) — all themes share this in Phase 1 ─────────
const ACCENT = {
  accent:          'hsl(27, 88%, 54%)',
  accentBright:    'hsl(27, 100%, 61%)',
  accentNeon:      'hsl(27, 100%, 70%)',
  secondary:       'hsl(27, 88%, 54%)',
  secondaryBright: 'hsl(27, 100%, 61%)',
}

const themes: Record<ThemeName, Theme> = {

  'new-haze': {
    label: 'New Haze — Oscuro',
    colors: {
      ...DARK_SURFACES,
      ...ACCENT,
      error:         'hsl(0, 90%, 65%)',
      errorBg:       'hsla(0, 90%, 65%, 0.10)',
      errorBorder:   'hsla(0, 90%, 65%, 0.25)',
      success:       'hsl(150, 70%, 55%)',
      successBg:     'hsla(150, 70%, 55%, 0.10)',
      successBorder: 'hsla(150, 70%, 55%, 0.25)',
      focus:         'hsl(27, 100%, 61%)',
    },
  },

  'new-haze-light': {
    label: 'New Haze — Claro',
    colors: {
      ...LIGHT_SURFACES,
      ...ACCENT,
      error:         'hsl(0, 75%, 45%)',
      errorBg:       'hsla(0, 75%, 45%, 0.08)',
      errorBorder:   'hsla(0, 75%, 45%, 0.20)',
      success:       'hsl(150, 65%, 35%)',
      successBg:     'hsla(150, 65%, 35%, 0.08)',
      successBorder: 'hsla(150, 65%, 35%, 0.20)',
      focus:         'hsl(27, 88%, 54%)',
    },
  },

  'rabbitek': {
    label: 'Rabbitek — Oscuro',
    colors: {
      ...DARK_SURFACES,
      ...ACCENT,
      error:         'hsl(0, 90%, 65%)',
      errorBg:       'hsla(0, 90%, 65%, 0.10)',
      errorBorder:   'hsla(0, 90%, 65%, 0.25)',
      success:       'hsl(150, 70%, 55%)',
      successBg:     'hsla(150, 70%, 55%, 0.10)',
      successBorder: 'hsla(150, 70%, 55%, 0.25)',
      focus:         'hsl(27, 100%, 61%)',
    },
  },

  'rabbitek-light': {
    label: 'Rabbitek — Claro',
    colors: {
      ...LIGHT_SURFACES,
      ...ACCENT,
      error:         'hsl(0, 75%, 45%)',
      errorBg:       'hsla(0, 75%, 45%, 0.08)',
      errorBorder:   'hsla(0, 75%, 45%, 0.20)',
      success:       'hsl(150, 65%, 35%)',
      successBg:     'hsla(150, 65%, 35%, 0.08)',
      successBorder: 'hsla(150, 65%, 35%, 0.20)',
      focus:         'hsl(27, 88%, 54%)',
    },
  },

  'canahoria': {
    label: 'Canahoria — Claro',
    colors: {
      ...LIGHT_SURFACES,
      ...ACCENT,
      error:         'hsl(0, 75%, 45%)',
      errorBg:       'hsla(0, 75%, 45%, 0.08)',
      errorBorder:   'hsla(0, 75%, 45%, 0.20)',
      success:       'hsl(150, 65%, 35%)',
      successBg:     'hsla(150, 65%, 35%, 0.08)',
      successBorder: 'hsla(150, 65%, 35%, 0.20)',
      focus:         'hsl(27, 88%, 54%)',
    },
  },

  'canahoria-dark': {
    label: 'Canahoria — Oscuro',
    colors: {
      ...DARK_SURFACES,
      ...ACCENT,
      error:         'hsl(0, 90%, 65%)',
      errorBg:       'hsla(0, 90%, 65%, 0.10)',
      errorBorder:   'hsla(0, 90%, 65%, 0.25)',
      success:       'hsl(150, 70%, 55%)',
      successBg:     'hsla(150, 70%, 55%, 0.10)',
      successBorder: 'hsla(150, 70%, 55%, 0.25)',
      focus:         'hsl(27, 100%, 61%)',
    },
  },

}

export default themes
