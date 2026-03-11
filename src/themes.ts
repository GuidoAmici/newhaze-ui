export interface ThemeColors {
  bg: string
  bgCard: string
  bgCardLight: string
  foreground: string
  text: string
  textMuted: string
  textDim: string
  border: string
  borderLight: string
  accent: string
  accentBright: string
  accentNeon: string
  cta: string
  ctaLight: string
}

export interface Theme {
  label: string
  colors: ThemeColors
}

export type ThemeName = 'neon-purple' | 'green-botanical' | 'light-legacy'

const themes: Record<ThemeName, Theme> = {
  'neon-purple': {
    label: 'Neón Púrpura',
    colors: {
      bg:           '#0b0810',
      bgCard:       '#120d1a',
      bgCardLight:  '#1a1228',
      foreground:   '#e8d4f8',
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
    },
  },
  'green-botanical': {
    label: 'Verde Botánico',
    colors: {
      bg:           '#0a1a0e',
      bgCard:       '#0f2515',
      bgCardLight:  '#15301d',
      foreground:   '#e8f5e9',
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
    },
  },
  'light-legacy': {
    label: 'Clásico Claro',
    colors: {
      bg:           '#ffffff',
      bgCard:       '#f8f9fa',
      bgCardLight:  '#f0f2f5',
      foreground:   '#1a1a2e',
      text:         '#1a1a2e',
      textMuted:    '#6b7280',
      textDim:      '#9ca3af',
      border:       '#e5e7eb',
      borderLight:  '#d1d5db',
      accent:       '#7c3aed',
      accentBright: '#8b5cf6',
      accentNeon:   '#a78bfa',
      cta:          '#f97316',
      ctaLight:     '#fb923c',
    },
  },
}

export default themes
