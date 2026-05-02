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

/** HTML classes and color-scheme per theme — used by ThemeProvider and FOUC scripts */
export const THEME_HTML_CONFIG: Record<ThemeName, { classes: string[]; colorScheme: 'dark' | 'light' }> = {
  'new-haze':       { classes: ['dark', 'new-haze'], colorScheme: 'dark'  },
  'new-haze-light': { classes: ['new-haze'],          colorScheme: 'light' },
}

/** Legacy names that may exist in localStorage — all map to one of the 2 themes */
export const LEGACY_THEME_MAP: Record<string, ThemeName> = {
  'neon-purple':     'new-haze',
  'neon-purple-v2':  'new-haze',
  'light-legacy':    'new-haze-light',
  'iamsajid':        'new-haze',
  'iamsajid-light':  'new-haze-light',
  'dark-purple':     'new-haze',
  'green-botanical': 'new-haze',
  'light':           'new-haze-light',
  'dark-orange':     'new-haze',
  'rabbitek':        'new-haze',
  'rabbitek-light':  'new-haze-light',
  'canahoria':       'new-haze-light',
  'canahoria-dark':  'new-haze',
  'techno-violet':   'new-haze',
  'techno-green':    'new-haze',
}

export function resolveThemeName(stored: string | null): ThemeName {
  if (!stored) return 'new-haze'
  if (stored in themes) return stored as ThemeName
  return LEGACY_THEME_MAP[stored] ?? 'new-haze'
}

const themes: Record<ThemeName, Theme> = {

  // ── New Haze — premium dark (#0E0E12 + purple #855CF2 + orange #F18604) ───
  'new-haze': {
    label: 'New Haze — Oscuro',
    colors: {
      s0: '#0E0E12',
      s1: '#131319',
      s2: '#1A1A22',
      s3: '#22222A',
      shadowSm: 'inset 0 1px 1px rgba(133,92,242,0.06), 0 2px 6px rgba(0,0,0,0.60)',
      shadowLg: 'inset 0 2px 8px rgba(133,92,242,0.09), 0 10px 30px rgba(0,0,0,0.80)',
      text:        '#F0F0F2',
      textMuted:   '#68686F',
      textDim:     '#35353C',
      border:      '#22222A',
      borderLight: '#33333B',
      accent:          '#855CF2',
      accentBright:    '#9b6fd4',
      accentNeon:      '#c8a8ff',
      secondary:       '#F18604',
      secondaryBright: '#ffa040',
      error:         'hsl(0, 90%, 65%)',
      errorBg:       'hsla(0, 90%, 65%, 0.10)',
      errorBorder:   'hsla(0, 90%, 65%, 0.25)',
      success:       'hsl(150, 70%, 55%)',
      successBg:     'hsla(150, 70%, 55%, 0.10)',
      successBorder: 'hsla(150, 70%, 55%, 0.25)',
      focus:         '#855CF2',
    },
  },

  // ── New Haze — clean white, same accent palette ────────────────────────────
  'new-haze-light': {
    label: 'New Haze — Claro',
    colors: {
      s0: '#FAFAFA',
      s1: '#F5F5F7',
      s2: '#EFEFEF',
      s3: '#E8E8EC',
      shadowSm: 'inset 0 1px 2px rgba(255,255,255,0.75), 0 2px 4px rgba(0,0,0,0.10)',
      shadowLg: 'inset 0 2px 8px rgba(255,255,255,0.90), 0 8px 24px rgba(0,0,0,0.15)',
      text:        '#0E0E12',
      textMuted:   '#444450',
      textDim:     '#888890',
      border:      '#DDDDE0',
      borderLight: '#EBEBEE',
      accent:          '#855CF2',
      accentBright:    '#9b6fd4',
      accentNeon:      '#c8a8ff',
      secondary:       '#F18604',
      secondaryBright: '#ffa040',
      error:         'hsl(0, 75%, 45%)',
      errorBg:       'hsla(0, 75%, 45%, 0.08)',
      errorBorder:   'hsla(0, 75%, 45%, 0.20)',
      success:       'hsl(150, 65%, 35%)',
      successBg:     'hsla(150, 65%, 35%, 0.08)',
      successBorder: 'hsla(150, 65%, 35%, 0.20)',
      focus:         '#855CF2',
    },
  },

}

export default themes
