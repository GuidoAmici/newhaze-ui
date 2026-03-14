export interface ThemeColors {
  bgDark: string
  bg: string
  bgLight: string
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

export type ThemeName = 'neon-purple' | 'green-botanical' | 'light-legacy' | 'neon-purple-v2' | 'dark-orange' | 'iamsajid' | 'iamsajid-light'

const themes: Record<ThemeName, Theme> = {
  'neon-purple': {
    label: 'Neón Púrpura',
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
    },
  },
  'light-legacy': {
    label: 'Clásico Claro',
    colors: {
      bgDark:       '#e8eaed',
      bg:           '#f8f9fa',
      bgLight:      '#ffffff',
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
  'neon-purple-v2': {
    label: 'Neón Púrpura v2',
    colors: {
      bgDark:       '#0b0810',
      bg:           '#120d1a',
      bgLight:      '#1a1228',
      text:         '#d4b8f0',
      textMuted:    '#9a7abf',
      textDim:      '#5a4078',
      border:       '#2d1f48',
      borderLight:  '#3d2a60',
      accent:       '#7b4cb8',
      accentBright: '#a678e8',
      accentNeon:   '#4ec9c4',
      cta:          '#e8198a',
      ctaLight:     '#f48fb0',
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
      accentNeon:   '#ccff00',
      cta:          '#ffb300',
      ctaLight:     '#ffd54f',
    },
  },
  'iamsajid': {
    label: 'IamSajid Dark',
    colors: {
      bgDark:       '#0d0d2e',
      bg:           '#141440',
      bgLight:      '#191955',
      text:         '#e0e0ff',
      textMuted:    '#9090e0',
      textDim:      '#5050b0',
      border:       '#3030a0',
      borderLight:  '#202080',
      accent:       '#8080e0',
      accentBright: '#a0a0f0',
      accentNeon:   '#c0c0ff',
      cta:          '#c8b040',
      ctaLight:     '#d8c060',
    },
  },
  'iamsajid-light': {
    label: 'IamSajid Light',
    colors: {
      bgDark:       '#d8d8f0',
      bg:           '#f0f0ff',
      bgLight:      '#f8f8ff',
      text:         '#0a0a50',
      textMuted:    '#3030a0',
      textDim:      '#5050c0',
      border:       '#6060c0',
      borderLight:  '#7878d0',
      accent:       '#3030a0',
      accentBright: '#4040b0',
      accentNeon:   '#6060c0',
      cta:          '#887020',
      ctaLight:     '#a08030',
    },
  },
}

export default themes
