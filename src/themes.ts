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
  // ── Accent ladder ─────────────────────────────────────────────────────────
  accent: string
  accentBright: string
  accentNeon: string
  // ── Call-to-action ────────────────────────────────────────────────────────
  cta: string
  ctaLight: string
  ctaText: string       // contrast-safe text color on top of cta gradient
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

export type ThemeName = 'dark-purple' | 'green-botanical' | 'light' | 'dark-orange'

/** Legacy names that may exist in localStorage — all map to 'dark-purple' */
const LEGACY_THEME_MAP: Record<string, ThemeName> = {
  'neon-purple':    'dark-purple',
  'neon-purple-v2': 'dark-purple',
  'light-legacy':   'light',
  'iamsajid':       'dark-purple',
  'iamsajid-light': 'light',
}

export function resolveThemeName(stored: string | null): ThemeName {
  if (!stored) return 'dark-purple'
  if (stored in themes) return stored as ThemeName
  return LEGACY_THEME_MAP[stored] ?? 'dark-purple'
}

const themes: Record<ThemeName, Theme> = {
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
      cta:          '#a855a0',
      ctaLight:     '#e07de0',
      ctaText:      '#0a0e1a',
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
      cta:          '#f97316',
      ctaLight:     '#fb923c',
      ctaText:      '#0a0e1a',
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
      cta:          '#f97316',
      ctaLight:     '#fb923c',
      ctaText:      '#0a0e1a',
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
      cta:          '#ffb300',
      ctaLight:     '#ffd54f',
      ctaText:      '#0a0e1a',
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
