"use client"

import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../ThemeProvider'
import { ThemeName } from '../themes'

const THEME_ICONS: Record<ThemeName, string> = {
  'new-haze':        '🐰',
  'rabbitek':        '🥕',
  'canahoria':       '🌿',
  'dark-purple':     '🟣',
  'green-botanical': '🌱',
  'light':           '☀️',
  'dark-orange':     '🟠',
}

export function ThemePicker() {
  const { theme, themeName, setThemeName, themeOptions } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Cambiar tema"
        style={{
          background: 'none',
          border: `1px solid ${theme.border}`,
          borderRadius: 8,
          padding: '4px 8px',
          cursor: 'pointer',
          fontSize: 14,
          lineHeight: 1,
        }}
      >
        {THEME_ICONS[themeName] ?? '🟣'}
      </button>

      {open && (
        <div style={{
          position: 'absolute', right: 0, top: '100%', marginTop: 4,
          background: theme.bgLight, border: `1px solid ${theme.border}`,
          borderRadius: 10, padding: 4, zIndex: 200, minWidth: 170,
          boxShadow: `0 8px 24px ${theme.bgDark}cc`,
        }}>
          {themeOptions.map(t => (
            <button
              key={t.value}
              onClick={() => { setThemeName(t.value); setOpen(false) }}
              style={{
                display: 'flex', alignItems: 'center', gap: 8, width: '100%',
                padding: '6px 10px',
                background: themeName === t.value ? theme.bgLight : 'transparent',
                border: 'none', borderRadius: 6, cursor: 'pointer',
                fontSize: 12, color: theme.text, fontFamily: 'inherit',
              }}
            >
              <span>{THEME_ICONS[t.value]}</span>
              <span style={{ flex: 1, textAlign: 'left' }}>{t.label}</span>
              {themeName === t.value && <span style={{ color: theme.accent }}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
