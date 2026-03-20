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
  | 'techno-violet'
  | 'techno-green'

/** HTML classes and color-scheme per theme — used by ThemeProvider and FOUC scripts */
export const THEME_HTML_CONFIG: Record<ThemeName, { classes: string[]; colorScheme: 'dark' | 'light' }> = {
  'new-haze':        { classes: ['dark', 'new-haze'],  colorScheme: 'dark'  },
  'new-haze-light':  { classes: ['new-haze'],           colorScheme: 'light' },
  'rabbitek':        { classes: ['dark', 'rabbitek'],   colorScheme: 'dark'  },
  'rabbitek-light':  { classes: ['rabbitek'],           colorScheme: 'light' },
  'canahoria':       { classes: ['canahoria'],                   colorScheme: 'light' },
  'canahoria-dark':  { classes: ['dark', 'canahoria'],           colorScheme: 'dark'  },
  'techno-violet':   { classes: ['dark', 'techno-violet'],       colorScheme: 'dark'  },
  'techno-green':    { classes: ['dark', 'techno-green'],        colorScheme: 'dark'  },
}

/** Legacy names that may exist in localStorage */
export const LEGACY_THEME_MAP: Record<string, ThemeName> = {
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

// ── Shared surface values (light/dark variants, used by new-haze-light etc.) ──

const DARK_SURFACES_NEUTRAL = {
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

const LIGHT_SURFACES_NEUTRAL = {
  s0: 'hsl(0, 0%, 88%)',
  s1: 'hsl(0, 0%, 92%)',
  s2: 'hsl(0, 0%, 96%)',
  s3: 'hsl(0, 0%, 100%)',
  shadowSm: 'inset 0 1px 2px hsla(0,0%,100%,0.75), 0 2px 4px hsla(0,0%,0%,0.13)',
  shadowLg: 'inset 0 2px 8px hsla(0,0%,100%,0.90), 0 8px 24px hsla(0,0%,0%,0.20)',
  text:        'hsl(0, 0%, 10%)',
  textMuted:   'hsl(0, 0%, 38%)',
  textDim:     'hsl(0, 0%, 62%)',
  border:      'hsl(0, 0%, 72%)',
  borderLight: 'hsl(0, 0%, 80%)',
}

const ACCENT_ORANGE = {
  accent:          'hsl(27, 88%, 54%)',
  accentBright:    'hsl(27, 100%, 61%)',
  accentNeon:      'hsl(27, 100%, 70%)',
  secondary:       'hsl(27, 88%, 54%)',
  secondaryBright: 'hsl(27, 100%, 61%)',
}

const themes: Record<ThemeName, Theme> = {

  // ── New Haze — midnight blue, aqua, gummy pink ─────────────────────────────
  'new-haze': {
    label: 'New Haze — Oscuro',
    colors: {
      s0: 'oklch(0.09 0.04 226)',
      s1: 'oklch(0.11 0.04 225)',
      s2: 'oklch(0.14 0.05 222)',
      s3: 'oklch(0.19 0.05 220)',
      shadowSm: 'inset 0 1px 1px hsla(205,60%,100%,0.06), 0 2px 6px hsla(210,60%,5%,0.60)',
      shadowLg: 'inset 0 2px 8px hsla(205,60%,100%,0.09), 0 10px 30px hsla(210,60%,5%,0.80)',
      text:        'oklch(0.94 0.03 210)',
      textMuted:   'oklch(0.60 0.08 210)',
      textDim:     'oklch(0.38 0.06 215)',
      border:      'oklch(0.22 0.06 220)',
      borderLight: 'oklch(0.28 0.05 220)',
      accent:          '#00b8d4',
      accentBright:    '#20d4f0',
      accentNeon:      '#70eeff',
      secondary:       '#ff4d9e',
      secondaryBright: '#ff80c0',
      error:         'hsl(0, 90%, 65%)',
      errorBg:       'hsla(0, 90%, 65%, 0.10)',
      errorBorder:   'hsla(0, 90%, 65%, 0.25)',
      success:       'hsl(150, 70%, 55%)',
      successBg:     'hsla(150, 70%, 55%, 0.10)',
      successBorder: 'hsla(150, 70%, 55%, 0.25)',
      focus:         '#00b8d4',
    },
  },

  'new-haze-light': {
    label: 'New Haze — Claro',
    colors: {
      ...LIGHT_SURFACES_NEUTRAL,
      ...ACCENT_ORANGE,
      error:         'hsl(0, 75%, 45%)',
      errorBg:       'hsla(0, 75%, 45%, 0.08)',
      errorBorder:   'hsla(0, 75%, 45%, 0.20)',
      success:       'hsl(150, 65%, 35%)',
      successBg:     'hsla(150, 65%, 35%, 0.08)',
      successBorder: 'hsla(150, 65%, 35%, 0.20)',
      focus:         'hsl(27, 88%, 54%)',
    },
  },

  // ── Rabbitek — near-black, golden orange, aqua ─────────────────────────────
  'rabbitek': {
    label: 'Rabbitek — Oscuro',
    colors: {
      s0: 'oklch(0.05 0.02 285)',
      s1: 'oklch(0.07 0.02 285)',
      s2: 'oklch(0.10 0.02 282)',
      s3: 'oklch(0.13 0.02 280)',
      shadowSm: 'inset 0 1px 1px hsla(280,30%,100%,0.05), 0 2px 6px hsla(280,30%,3%,0.65)',
      shadowLg: 'inset 0 2px 8px hsla(280,30%,100%,0.08), 0 10px 30px hsla(280,30%,3%,0.85)',
      text:        'oklch(0.93 0.04 82)',
      textMuted:   'oklch(0.60 0.07 75)',
      textDim:     'oklch(0.38 0.04 78)',
      border:      'oklch(0.16 0.04 68)',
      borderLight: 'oklch(0.21 0.04 68)',
      accent:          '#c87800',
      accentBright:    '#e89a00',
      accentNeon:      '#ffc830',
      secondary:       '#00b090',
      secondaryBright: '#20d0b0',
      error:         'hsl(0, 90%, 65%)',
      errorBg:       'hsla(0, 90%, 65%, 0.10)',
      errorBorder:   'hsla(0, 90%, 65%, 0.25)',
      success:       'hsl(150, 70%, 55%)',
      successBg:     'hsla(150, 70%, 55%, 0.10)',
      successBorder: 'hsla(150, 70%, 55%, 0.25)',
      focus:         '#c87800',
    },
  },

  'rabbitek-light': {
    label: 'Rabbitek — Claro',
    colors: {
      ...LIGHT_SURFACES_NEUTRAL,
      ...ACCENT_ORANGE,
      error:         'hsl(0, 75%, 45%)',
      errorBg:       'hsla(0, 75%, 45%, 0.08)',
      errorBorder:   'hsla(0, 75%, 45%, 0.20)',
      success:       'hsl(150, 65%, 35%)',
      successBg:     'hsla(150, 65%, 35%, 0.08)',
      successBorder: 'hsla(150, 65%, 35%, 0.20)',
      focus:         'hsl(27, 88%, 54%)',
    },
  },

  // ── Canahoria — warm beige, leafy green, carrot orange ─────────────────────
  'canahoria': {
    label: 'Canahoria — Claro',
    colors: {
      s0: 'oklch(0.92 0.03 80)',
      s1: 'oklch(0.94 0.025 81)',
      s2: 'oklch(0.97 0.015 81)',
      s3: 'oklch(0.99 0.01 80)',
      shadowSm: 'inset 0 1px 2px hsla(80,60%,100%,0.80), 0 2px 4px hsla(32,70%,30%,0.12)',
      shadowLg: 'inset 0 2px 8px hsla(80,60%,100%,0.90), 0 8px 24px hsla(32,70%,30%,0.18)',
      text:        'oklch(0.22 0.04 62)',
      textMuted:   'oklch(0.48 0.05 68)',
      textDim:     'oklch(0.65 0.04 70)',
      border:      'oklch(0.86 0.03 78)',
      borderLight: 'oklch(0.90 0.025 79)',
      accent:          '#2a5c1c',
      accentBright:    '#3a7828',
      accentNeon:      '#4e9835',
      secondary:       '#d95808',
      secondaryBright: '#f07030',
      error:         'hsl(0, 75%, 45%)',
      errorBg:       'hsla(0, 75%, 45%, 0.08)',
      errorBorder:   'hsla(0, 75%, 45%, 0.20)',
      success:       'hsl(150, 65%, 35%)',
      successBg:     'hsla(150, 65%, 35%, 0.08)',
      successBorder: 'hsla(150, 65%, 35%, 0.20)',
      focus:         '#2a5c1c',
    },
  },

  'canahoria-dark': {
    label: 'Canahoria — Oscuro',
    colors: {
      ...DARK_SURFACES_NEUTRAL,
      ...ACCENT_ORANGE,
      error:         'hsl(0, 90%, 65%)',
      errorBg:       'hsla(0, 90%, 65%, 0.10)',
      errorBorder:   'hsla(0, 90%, 65%, 0.25)',
      success:       'hsl(150, 70%, 55%)',
      successBg:     'hsla(150, 70%, 55%, 0.10)',
      successBorder: 'hsla(150, 70%, 55%, 0.25)',
      focus:         'hsl(27, 100%, 61%)',
    },
  },

  // ── Techno Violet — deep navy-purple, neon violet, hot pink ────────────────
  'techno-violet': {
    label: 'Techno — Violeta',
    colors: {
      s0: 'oklch(0.07 0.06 280)',
      s1: 'oklch(0.09 0.07 278)',
      s2: 'oklch(0.12 0.08 275)',
      s3: 'oklch(0.17 0.08 272)',
      shadowSm: 'inset 0 1px 1px hsla(270,80%,80%,0.08), 0 2px 8px hsla(270,80%,5%,0.70)',
      shadowLg: 'inset 0 2px 10px hsla(270,80%,80%,0.14), 0 10px 32px hsla(270,60%,5%,0.90), 0 0 24px hsla(270,100%,60%,0.15)',
      text:        'oklch(0.95 0.02 250)',
      textMuted:   'oklch(0.62 0.08 270)',
      textDim:     'oklch(0.38 0.06 272)',
      border:      'oklch(0.22 0.10 275)',
      borderLight: 'oklch(0.30 0.10 272)',
      accent:          '#7b2fff',
      accentBright:    '#9b4fff',
      accentNeon:      '#c07aff',
      secondary:       '#ff0090',
      secondaryBright: '#ff4db8',
      error:         'hsl(0, 90%, 65%)',
      errorBg:       'hsla(0, 90%, 65%, 0.10)',
      errorBorder:   'hsla(0, 90%, 65%, 0.25)',
      success:       'hsl(150, 70%, 55%)',
      successBg:     'hsla(150, 70%, 55%, 0.10)',
      successBorder: 'hsla(150, 70%, 55%, 0.25)',
      focus:         '#9b4fff',
    },
  },

  // ── Techno Green — near-black green, neon lime, warm amber ─────────────────
  'techno-green': {
    label: 'Techno — Verde',
    colors: {
      s0: 'oklch(0.06 0.04 155)',
      s1: 'oklch(0.08 0.05 152)',
      s2: 'oklch(0.11 0.06 150)',
      s3: 'oklch(0.16 0.06 148)',
      shadowSm: 'inset 0 1px 1px hsla(150,80%,80%,0.06), 0 2px 8px hsla(150,80%,3%,0.70)',
      shadowLg: 'inset 0 2px 10px hsla(150,80%,80%,0.10), 0 10px 32px hsla(150,60%,3%,0.90), 0 0 24px hsla(150,100%,50%,0.12)',
      text:        'oklch(0.95 0.02 200)',
      textMuted:   'oklch(0.60 0.07 155)',
      textDim:     'oklch(0.38 0.05 152)',
      border:      'oklch(0.20 0.08 150)',
      borderLight: 'oklch(0.28 0.08 148)',
      accent:          '#00e87a',
      accentBright:    '#20ff90',
      accentNeon:      '#70ffc0',
      secondary:       '#ff8c00',
      secondaryBright: '#ffaa30',
      error:         'hsl(0, 90%, 65%)',
      errorBg:       'hsla(0, 90%, 65%, 0.10)',
      errorBorder:   'hsla(0, 90%, 65%, 0.25)',
      success:       'hsl(150, 70%, 55%)',
      successBg:     'hsla(150, 70%, 55%, 0.10)',
      successBorder: 'hsla(150, 70%, 55%, 0.25)',
      focus:         '#00e87a',
    },
  },

}

export default themes
