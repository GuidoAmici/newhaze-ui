export interface ThemeColors {
  // ── Backgrounds ───────────────────────────────────────────────────────────
  bgDark: string
  bg: string
  bgLight: string
  // ── Text ──────────────────────────────────────────────────────────────────
  text: string
  textMuted: string
  textDim: string       // decorative only — fails WCAG AA for body text
  // ── Borders ───────────────────────────────────────────────────────────────
  border: string
  borderLight: string
  // ── Accent (primary brand color — drives both CTAs and informational highlights) ──
  accent: string
  accentBright: string
  accentNeon: string
  // ── Semantic states ───────────────────────────────────────────────────────
  error: string
  errorBg: string
  errorBorder: string
  success: string
  successBg: string
  successBorder: string
  // ── Accessibility ─────────────────────────────────────────────────────────
  focus: string         // :focus-visible ring color
}

export interface Theme {
  label: string
  colors: ThemeColors
}

export type ThemeName =
  | 'new-haze'
  | 'rabbitek'
  | 'canahoria'
  | 'dark-purple'
  | 'green-botanical'
  | 'light'
  | 'dark-orange'

/** Legacy names that may exist in localStorage */
const LEGACY_THEME_MAP: Record<string, ThemeName> = {
  'neon-purple':    'new-haze',
  'neon-purple-v2': 'new-haze',
  'light-legacy':   'canahoria',
  'iamsajid':       'new-haze',
  'iamsajid-light': 'canahoria',
  'dark-purple':    'new-haze',
}

export function resolveThemeName(stored: string | null): ThemeName {
  if (!stored) return 'new-haze'
  if (stored in themes) return stored as ThemeName
  return LEGACY_THEME_MAP[stored] ?? 'new-haze'
}

const themes: Record<ThemeName, Theme> = {
  // ── Brand themes (canonical, image-inspired) ──────────────────────────────

  /**
   * New Haze — DARK
   * Midnight blue backgrounds, gummy hot-pink CTA, aqua-cyan accent.
   * Playful, colourful, candy-neon. Inspired by Sticker 1.
   */
  'new-haze': {
    label: 'New Haze',
    colors: {
      bgDark:       '#080f1c',
      bg:           '#0d1a2e',
      bgLight:      '#152338',
      text:         '#dff0ff',
      textMuted:    '#6ab0d8',
      textDim:      '#2e5878',
      border:       '#183050',
      borderLight:  '#224268',
      accent:       '#00b8d4',
      accentBright: '#20d4f0',
      accentNeon:   '#70eeff',
      error:        '#ff6b8a',
      errorBg:      'rgba(255,60,80,0.10)',
      errorBorder:  'rgba(255,60,80,0.25)',
      success:      '#20d8a0',
      successBg:    'rgba(0,200,140,0.10)',
      successBorder:'rgba(0,200,140,0.25)',
      focus:        '#70eeff',
    },
  },

  /**
   * Rabbitek — DARK
   * Near-black background, golden-carrot orange accent, aqua verde CTA.
   * Serious, authoritative, impactful. Inspired by Sticker 2.
   */
  'rabbitek': {
    label: 'Rabbitek',
    colors: {
      bgDark:       '#040308',
      bg:           '#080610',
      bgLight:      '#0e0c18',
      text:         '#f0e8cc',
      textMuted:    '#9a8258',
      textDim:      '#5a4c30',
      border:       '#1a1408',
      borderLight:  '#261e0c',
      accent:       '#c87800',
      accentBright: '#e89a00',
      accentNeon:   '#ffc830',
      error:        '#ff7060',
      errorBg:      'rgba(220,60,40,0.10)',
      errorBorder:  'rgba(220,60,40,0.25)',
      success:      '#00c89a',
      successBg:    'rgba(0,180,140,0.10)',
      successBorder:'rgba(0,180,140,0.25)',
      focus:        '#ffc830',
    },
  },

  /**
   * Canahoria — LIGHT
   * Warm cream/beige backgrounds, carrot orange CTA, leafy dark green accent.
   * Relaxed, earthy, established. Inspired by Sticker 3.
   */
  'canahoria': {
    label: 'Canahoria',
    colors: {
      bgDark:       '#e0d8c8',
      bg:           '#f5f0e5',
      bgLight:      '#fdfbf7',
      text:         '#2a1e0c',
      textMuted:    '#6a5a3a',
      textDim:      '#7a6848',
      border:       '#d8cdb0',
      borderLight:  '#e5dcc8',
      accent:       '#2a5c1c',
      accentBright: '#3a7828',
      accentNeon:   '#4e9835',
      error:        '#c22c00',
      errorBg:      'rgba(194,44,0,0.07)',
      errorBorder:  'rgba(194,44,0,0.18)',
      success:      '#2a5c1c',
      successBg:    'rgba(42,92,28,0.08)',
      successBorder:'rgba(42,92,28,0.20)',
      focus:        '#2a5c1c',
    },
  },

  // ── Extended themes ───────────────────────────────────────────────────────

  'dark-purple': {
    label: 'Púrpura Oscuro',
    colors: {
      bgDark:       '#0b0810',
      bg:           '#120d1a',
      bgLight:      '#1a1228',
      text:         '#e8d4f8',
      textMuted:    '#9a7abf',
      textDim:      '#5a4078',
      border:       '#2d1f48',
      borderLight:  '#3d2a60',
      accent:       '#6b3fa0',
      accentBright: '#9b6fd4',
      accentNeon:   '#c8a8ff',
      error:        '#f87171',
      errorBg:      'rgba(220,38,38,0.10)',
      errorBorder:  'rgba(220,38,38,0.25)',
      success:      '#4ade80',
      successBg:    'rgba(22,163,74,0.10)',
      successBorder:'rgba(22,163,74,0.25)',
      focus:        '#c8a8ff',
    },
  },

  'green-botanical': {
    label: 'Verde Botánico',
    colors: {
      bgDark:       '#0a1a0e',
      bg:           '#0f2515',
      bgLight:      '#15301d',
      text:         '#e8f5e9',
      textMuted:    '#a5d6a7',
      textDim:      '#6b9a6e',
      border:       '#1e402a',
      borderLight:  '#2a5036',
      accent:       '#2e7d32',
      accentBright: '#4caf50',
      accentNeon:   '#81c784',
      error:        '#f87171',
      errorBg:      'rgba(220,38,38,0.10)',
      errorBorder:  'rgba(220,38,38,0.25)',
      success:      '#4ade80',
      successBg:    'rgba(22,163,74,0.10)',
      successBorder:'rgba(22,163,74,0.25)',
      focus:        '#81c784',
    },
  },

  'light': {
    label: 'Claro',
    colors: {
      bgDark:       '#e8eaed',
      bg:           '#f8f9fa',
      bgLight:      '#ffffff',
      text:         '#1a1a2e',
      textMuted:    '#6b7280',
      textDim:      '#6b7280',   // raised from #9ca3af — passes WCAG AA
      border:       '#e5e7eb',
      borderLight:  '#d1d5db',
      accent:       '#7c3aed',
      accentBright: '#8b5cf6',
      accentNeon:   '#a78bfa',
      error:        '#dc2626',
      errorBg:      'rgba(220,38,38,0.07)',
      errorBorder:  'rgba(220,38,38,0.20)',
      success:      '#16a34a',
      successBg:    'rgba(22,163,74,0.07)',
      successBorder:'rgba(22,163,74,0.20)',
      focus:        '#7c3aed',
    },
  },

  'dark-orange': {
    label: 'Naranja Oscuro',
    colors: {
      bgDark:       '#080810',
      bg:           '#0e0e1c',
      bgLight:      '#161628',
      text:         '#f5f0e0',
      textMuted:    '#b8a888',
      textDim:      '#6a5a40',
      border:       '#1e1e38',
      borderLight:  '#2e2e50',
      accent:       '#ff6b00',
      accentBright: '#ff9a3c',
      accentNeon:   '#ffcc00',   // replaced #ccff00 — less garish, still energetic
      error:        '#f87171',
      errorBg:      'rgba(220,38,38,0.10)',
      errorBorder:  'rgba(220,38,38,0.25)',
      success:      '#4ade80',
      successBg:    'rgba(22,163,74,0.10)',
      successBorder:'rgba(22,163,74,0.25)',
      focus:        '#ffcc00',
    },
  },

}

export default themes
