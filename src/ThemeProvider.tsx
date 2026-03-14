"use client"

import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import themes, { ThemeColors, ThemeName } from './themes'

const STORAGE_KEY = 'nh_theme'
const DEFAULT_THEME: ThemeName = 'neon-purple'

interface ThemeContextValue {
  theme: ThemeColors
  themeName: ThemeName
  setThemeName: (name: ThemeName) => void
  themeOptions: { value: ThemeName; label: string }[]
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

// CSS classes applied to <html> — matches the website's next-themes class mapping
const HTML_CLASSES: Record<ThemeName, string[]> = {
  'neon-purple':    ['dark'],
  'green-botanical': ['dark', 'green-botanical'],
  'light-legacy':   ['light-legacy'],
  'neon-purple-v2': ['dark', 'neon-purple-v2'],
  'dark-orange':    ['dark', 'dark-orange'],
  'iamsajid':       ['iamsajid'],
  'iamsajid-light': ['iamsajid-light'],
}
const COLOR_SCHEME: Record<ThemeName, string> = {
  'neon-purple':    'dark',
  'green-botanical': 'dark',
  'light-legacy':   'light',
  'neon-purple-v2': 'dark',
  'dark-orange':    'dark',
  'iamsajid':       'dark',
  'iamsajid-light': 'light',
}

function applyTheme(name: ThemeName, colors: ThemeColors) {
  const root = document.documentElement
  // CSS variables
  root.style.setProperty('--nh-bg',            colors.bg)
  root.style.setProperty('--nh-bg-card',       colors.bgCard)
  root.style.setProperty('--nh-bg-card-light', colors.bgCardLight)
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
  // CSS classes (for Tailwind dark: variant + website globals.css)
  root.classList.remove('dark', 'green-botanical', 'light-legacy', 'iamsajid', 'iamsajid-light')
  HTML_CLASSES[name].forEach(c => root.classList.add(c))
  root.style.colorScheme = COLOR_SCHEME[name]
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeNameState] = useState<ThemeName>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return (stored && stored in themes ? stored : DEFAULT_THEME) as ThemeName
    } catch {
      return DEFAULT_THEME
    }
  })

  const theme = useMemo(() => themes[themeName].colors, [themeName])

  useEffect(() => {
    applyTheme(themeName, theme)
  }, [themeName, theme])

  const setThemeName = (name: ThemeName) => {
    if (!(name in themes)) return
    setThemeNameState(name)
    try { localStorage.setItem(STORAGE_KEY, name) } catch {}
  }

  const themeOptions = useMemo(
    () => (Object.entries(themes) as [ThemeName, { label: string }][]).map(([value, { label }]) => ({ value, label })),
    []
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
