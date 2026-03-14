"use client"

import { useState } from 'react'
import { useTheme } from '../ThemeProvider'

export interface SettingsUser {
  username: string | null
  email: string
  roles?: string[]
  xp?: number
  level?: number
}

export interface UserSettingsProps {
  user: SettingsUser
  onUpdateUsername: (username: string) => Promise<void>
  onLogout: () => void
}

export function UserSettings({ user, onUpdateUsername, onLogout }: UserSettingsProps) {
  const { theme } = useTheme()
  const [newUsername, setNewUsername] = useState(user.username ?? '')
  const [loading, setLoading]         = useState(false)
  const [error, setError]             = useState<string | null>(null)
  const [saved, setSaved]             = useState(false)
  const [logoutHover, setLogoutHover] = useState(false)

  const handleSaveUsername = async () => {
    if (!newUsername.trim()) { setError('Ingresá un nombre de usuario'); return }
    setError(null)
    setLoading(true)
    setSaved(false)
    try {
      await onUpdateUsername(newUsername.trim())
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const inp: React.CSSProperties = {
    flex: 1,
    background: theme.bgLight,
    border: `1px solid ${theme.border}`,
    borderRadius: 10,
    padding: '10px 14px',
    color: theme.text,
    fontSize: 14,
    outline: 'none',
    fontFamily: 'inherit',
  }

  const btnPrimary: React.CSSProperties = {
    padding: '10px 18px',
    borderRadius: 10,
    background: `linear-gradient(135deg, ${theme.cta}, ${theme.ctaLight})`,
    border: 'none',
    color: '#0a0e1a',
    fontWeight: 700,
    cursor: loading ? 'not-allowed' : 'pointer',
    fontSize: 14,
    opacity: loading ? 0.7 : 1,
    fontFamily: 'inherit',
    whiteSpace: 'nowrap',
  }

  const xpPercent = (user.xp != null && user.level != null)
    ? Math.min(100, ((user.xp % 1000) / 1000) * 100)
    : null

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: '8px 0' }}>

      {/* User info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{
          width: 56, height: 56, borderRadius: '50%',
          background: theme.bgLight,
          border: `2px solid ${theme.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 26, flexShrink: 0,
        }}>
          🧑‍🌾
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 17, fontWeight: 700, color: theme.text, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {user.username ?? 'Sin nombre'}
          </div>
          <div style={{ fontSize: 13, color: theme.textMuted, marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {user.email}
          </div>
          {user.roles && user.roles.length > 0 && (
            <div style={{ display: 'flex', gap: 6, marginTop: 6, flexWrap: 'wrap' }}>
              {user.roles.map(role => (
                <span
                  key={role}
                  style={{
                    fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 20,
                    background: theme.bgLight, border: `1px solid ${theme.borderLight}`,
                    color: theme.accentBright, textTransform: 'uppercase', letterSpacing: '0.05em',
                  }}
                >
                  {role.replace(/_/g, ' ')}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* XP bar */}
      {user.xp != null && user.level != null && xpPercent != null && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: theme.textMuted, marginBottom: 6 }}>
            <span>Nivel {user.level}</span>
            <span>{user.xp} XP</span>
          </div>
          <div style={{ height: 8, background: theme.bgLight, borderRadius: 99, overflow: 'hidden', border: `1px solid ${theme.border}` }}>
            <div style={{
              height: '100%',
              width: `${xpPercent}%`,
              background: `linear-gradient(90deg, ${theme.accent}, ${theme.accentBright})`,
              borderRadius: 99,
              transition: 'width 0.4s ease',
            }} />
          </div>
        </div>
      )}

      <div style={{ height: 1, background: theme.border }} />

      {/* Change username */}
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: theme.textMuted, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Cambiar nombre de usuario
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <input
            value={newUsername}
            onChange={e => { setNewUsername(e.target.value); setError(null); setSaved(false) }}
            placeholder="nuevo_nombre"
            style={inp}
            onFocus={e => { e.target.style.borderColor = theme.accent }}
            onBlur={e => { e.target.style.borderColor = theme.border }}
            onKeyDown={e => e.key === 'Enter' && handleSaveUsername()}
          />
          <button style={btnPrimary} onClick={handleSaveUsername} disabled={loading}>
            {loading ? '...' : saved ? '✓ Guardado' : 'Guardar'}
          </button>
        </div>
        {error && (
          <div style={{ marginTop: 8, fontSize: 12, color: '#f87171' }}>{error}</div>
        )}
      </div>

      <div style={{ height: 1, background: theme.border }} />

      {/* Logout */}
      <div>
        <button
          onClick={onLogout}
          onMouseEnter={() => setLogoutHover(true)}
          onMouseLeave={() => setLogoutHover(false)}
          style={{
            width: '100%',
            padding: '11px',
            borderRadius: 10,
            background: 'transparent',
            border: `1px solid ${logoutHover ? theme.cta : theme.border}`,
            color: logoutHover ? theme.cta : theme.textMuted,
            cursor: 'pointer',
            fontSize: 14,
            fontWeight: 600,
            fontFamily: 'inherit',
            transition: 'border-color 0.15s, color 0.15s',
          }}
        >
          Cerrar sesión
        </button>
      </div>

    </div>
  )
}
