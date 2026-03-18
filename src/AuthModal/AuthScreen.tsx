"use client"

import { useState, useRef, useEffect, useCallback } from 'react'
import { useTheme } from '../ThemeProvider'
import { Logo } from '../Logo/Logo'

// Inline window.google type to avoid needing @types/google-one-tap
declare global {
  interface Window {
    google?: {
      accounts?: {
        id?: {
          initialize: (config: { client_id: string; callback: (response: { credential: string }) => void }) => void
          prompt: () => void
        }
      }
    }
  }
}

export type AuthMode = 'login' | 'register' | 'otp' | 'profile' | 'forgot' | 'forgot_sent'

export interface AuthScreenProps {
  onRegister: (email: string, password: string) => Promise<void>
  onVerifyOtp: (email: string, token: string) => Promise<void>
  onResendOtp: (email: string) => Promise<void>
  onLogin: (email: string, password: string) => Promise<void>
  onLoginWithGoogle?: (token: string) => Promise<void>
  onForgotPassword: (email: string) => Promise<void>
  onSaveUsername: (username: string) => Promise<void>
  onGuest?: () => void
  initialMode?: AuthMode
  compact?: boolean
  googleClientId?: string
  appName?: string
}

// ─── Internal subcomponents ───────────────────────────────────────────────────

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 16px',
    }}>
      {children}
    </div>
  )
}

interface CardProps {
  children: React.ReactNode
  title?: string
  subtitle?: React.ReactNode
}

function Card({ children, title, subtitle }: CardProps) {
  const { theme } = useTheme()
  return (
    <div style={{
      background: theme.s1,
      border: `1px solid ${theme.border}`,
      borderRadius: 20,
      padding: '32px 28px',
      width: '100%',
      maxWidth: 380,
    }}>
      {title && (
        <div style={{ marginBottom: subtitle ? 8 : 20 }}>
          <div style={{ fontSize: 20, fontWeight: 700, color: theme.text }}>{title}</div>
          {subtitle && <div style={{ fontSize: 13, color: theme.textMuted, marginTop: 4 }}>{subtitle}</div>}
        </div>
      )}
      {children}
    </div>
  )
}

function ErrorBox({ msg }: { msg: string }) {
  const { theme } = useTheme()
  return (
    <div style={{
      background: theme.errorBg,
      border: `1px solid ${theme.errorBorder}`,
      borderRadius: 8,
      padding: '10px 12px',
      fontSize: 13,
      color: theme.error,
    }}>
      {msg}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export function AuthScreen({
  onRegister,
  onVerifyOtp,
  onResendOtp,
  onLogin,
  onLoginWithGoogle,
  onForgotPassword,
  onSaveUsername,
  onGuest,
  initialMode = 'login',
  compact = false,
  googleClientId,
  appName = 'New Haze',
}: AuthScreenProps) {
  const { theme } = useTheme()
  const [mode,     setMode]     = useState<AuthMode>(initialMode)
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [otp,      setOtp]      = useState(['', '', '', '', '', ''])
  const [username, setUsername] = useState('')
  const [error,    setError]    = useState<string | null>(null)
  const [loading,  setLoading]  = useState(false)
  const [resendCd,      setResendCd]      = useState(0)
  const [showPassword,  setShowPassword]  = useState(false)
  const otpRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (resendCd <= 0) return
    const t = setTimeout(() => setResendCd(s => s - 1), 1000)
    return () => clearTimeout(t)
  }, [resendCd])

  useEffect(() => {
    if (mode === 'otp') setTimeout(() => otpRefs.current[0]?.focus(), 100)
    if (mode === 'profile') setTimeout(() => document.getElementById('username-input')?.focus(), 100)
  }, [mode])

  const go = (m: AuthMode) => { setMode(m); setError(null) }

  const wrap = async (fn: () => Promise<void>) => {
    setError(null)
    setLoading(true)
    try { await fn() }
    catch (e) { setError((e as Error).message) }
    finally { setLoading(false) }
  }

  const handleRegister = () => wrap(async () => {
    if (!email || !password) throw new Error('Completá email y contraseña')
    if (password.length < 6) throw new Error('La contraseña debe tener al menos 6 caracteres')
    await onRegister(email, password)
    setResendCd(60)
    go('otp')
  })

  const handleVerifyOtp = () => wrap(async () => {
    const code = otp.join('')
    if (code.length < 6) throw new Error('Ingresá el código completo de 6 dígitos')
    await onVerifyOtp(email, code)
  })

  const handleResend = () => wrap(async () => {
    await onResendOtp(email)
    setResendCd(60)
    setOtp(['', '', '', '', '', ''])
    setTimeout(() => otpRefs.current[0]?.focus(), 50)
  })

  const handleLogin = () => wrap(async () => {
    if (!email || !password) throw new Error('Completá email y contraseña')
    await onLogin(email, password)
  })

  const handleForgot = () => wrap(async () => {
    if (!email) throw new Error('Ingresá tu email')
    await onForgotPassword(email)
    go('forgot_sent')
  })

  const handleSaveUsername = () => wrap(async () => {
    if (!username.trim()) throw new Error('Ingresá un nombre de usuario')
    await onSaveUsername(username.trim())
  })

  const handleOtpChange = (i: number, val: string) => {
    const clean = val.replace(/\D/g, '').slice(-1)
    const next = [...otp]
    next[i] = clean
    setOtp(next)
    if (clean && i < 5) otpRefs.current[i + 1]?.focus()
  }

  const handleOtpKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[i] && i > 0) otpRefs.current[i - 1]?.focus()
    if (e.key === 'Enter') handleVerifyOtp()
  }

  const handleGoogleCredential = useCallback(async (response: { credential: string }) => {
    if (!response?.credential || !onLoginWithGoogle) return
    await wrap(async () => { await onLoginWithGoogle(response.credential) })
  }, [onLoginWithGoogle])

  useEffect(() => {
    if (!onLoginWithGoogle || !googleClientId) return
    if (window.google?.accounts?.id) {
      window.google.accounts.id.initialize({ client_id: googleClientId, callback: handleGoogleCredential })
      return
    }
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    script.onload = () => {
      window.google?.accounts?.id?.initialize({ client_id: googleClientId, callback: handleGoogleCredential })
    }
    document.head.appendChild(script)
  }, [handleGoogleCredential, onLoginWithGoogle, googleClientId])

  const handleGoogleClick = () => { window.google?.accounts?.id?.prompt() }

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const text = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    if (!text) return
    e.preventDefault()
    const next = text.split('').concat(Array(6).fill('')).slice(0, 6)
    setOtp(next)
    otpRefs.current[Math.min(text.length, 5)]?.focus()
  }

  const inp: React.CSSProperties = {
    width: '100%',
    background: theme.s2,
    border: `1px solid ${theme.border}`,
    borderRadius: 10,
    padding: '12px 14px',
    color: theme.text,
    fontSize: 14,
    outline: 'none',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  }

  const btnPrimary: React.CSSProperties = {
    width: '100%',
    padding: '13px',
    borderRadius: 12,
    background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentBright})`,
    border: 'none',
    color: theme.s0,
    fontWeight: 700,
    cursor: loading ? 'not-allowed' : 'pointer',
    fontSize: 15,
    opacity: loading ? 0.7 : 1,
    fontFamily: 'inherit',
  }

  const btnGhost: React.CSSProperties = {
    ...btnPrimary,
    opacity: 1,
    background: 'transparent',
    border: `1px solid ${theme.border}`,
    color: theme.textMuted,
  }

  const content = (
    <>
      {mode === 'otp' && (
        <Card title="Revisá tu email" subtitle={<>Enviamos un código de 6 dígitos a <strong style={{ color: theme.accentBright }}>{email}</strong></>}>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', margin: '24px 0' }} onPaste={handleOtpPaste}>
            {otp.map((val, i) => (
              <input
                key={i}
                ref={el => { otpRefs.current[i] = el }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={val}
                onChange={e => handleOtpChange(i, e.target.value)}
                onKeyDown={e => handleOtpKeyDown(i, e)}
                style={{
                  width: 44, height: 54, textAlign: 'center', fontSize: 24, fontWeight: 700,
                  background: theme.s2, border: `1.5px solid ${val ? theme.accent : theme.border}`,
                  borderRadius: 10, color: theme.text, outline: 'none', fontFamily: 'inherit',
                  transition: 'border-color 0.15s',
                }}
                onFocus={e => { e.target.style.borderColor = theme.accentBright }}
                onBlur={e => { e.target.style.borderColor = val ? theme.accent : theme.border }}
              />
            ))}
          </div>
          {error && <ErrorBox msg={error} />}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
            <button style={btnPrimary} onClick={handleVerifyOtp} disabled={loading}>
              {loading ? 'Verificando...' : 'Confirmar código'}
            </button>
            <button
              style={{ ...btnGhost, opacity: resendCd > 0 ? 0.45 : 1, cursor: resendCd > 0 ? 'default' : 'pointer' }}
              onClick={resendCd > 0 ? undefined : handleResend}
              disabled={resendCd > 0 || loading}
            >
              {resendCd > 0 ? `Reenviar en ${resendCd}s` : 'Reenviar código'}
            </button>
          </div>
          <div style={{ textAlign: 'center', marginTop: 14 }}>
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: theme.textDim, fontSize: 12, fontFamily: 'inherit' }}
              onClick={() => go('register')}
            >
              Usar otro email
            </button>
          </div>
        </Card>
      )}

      {mode === 'profile' && (
        <Card title="¿Cómo querés que te llamen?" subtitle="Podés cambiarlo después desde tu perfil">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
            <input
              id="username-input"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="ej: cultivador420"
              style={inp}
              onFocus={e => { e.target.style.borderColor = theme.accent }}
              onBlur={e => { e.target.style.borderColor = theme.border }}
              onKeyDown={e => e.key === 'Enter' && handleSaveUsername()}
            />
            {error && <ErrorBox msg={error} />}
            <button style={btnPrimary} onClick={handleSaveUsername} disabled={loading}>
              {loading ? 'Guardando...' : 'Empezar →'}
            </button>
          </div>
        </Card>
      )}

      {mode === 'forgot_sent' && (
        <Card
          title="Revisá tu casilla"
          subtitle={<>Si existe una cuenta con <strong style={{ color: theme.accentBright }}>{email}</strong>, vas a recibir un link para restablecer tu contraseña.</>}
        >
          <button style={{ ...btnPrimary, marginTop: 20 }} onClick={() => go('login')}>
            Volver al inicio de sesión
          </button>
        </Card>
      )}

      {mode === 'forgot' && (
        <Card title="Restablecer contraseña" subtitle="Ingresá tu email y te enviamos un link">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="tu@email.com"
              style={inp}
              onFocus={e => { e.target.style.borderColor = theme.accent }}
              onBlur={e => { e.target.style.borderColor = theme.border }}
              onKeyDown={e => e.key === 'Enter' && handleForgot()}
            />
            {error && <ErrorBox msg={error} />}
            <button style={btnPrimary} onClick={handleForgot} disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar link →'}
            </button>
            <button style={btnGhost} onClick={() => go('login')}>← Volver</button>
          </div>
        </Card>
      )}

      {(mode === 'login' || mode === 'register') && (
        <Card>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
              <Logo variant="icon" size={56} color="#fff" accentColor={theme.accent} />
            </div>
            <div style={{ fontSize: 13, color: theme.textMuted }}>
              {mode === 'login' ? 'Bienvenido de vuelta' : 'Creá tu cuenta para empezar'}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              style={inp}
              onFocus={e => { e.target.style.borderColor = theme.accent }}
              onBlur={e => { e.target.style.borderColor = theme.border }}
            />
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Contraseña"
                style={{ ...inp, paddingRight: 42 }}
                onFocus={e => { e.target.style.borderColor = theme.accent }}
                onBlur={e => { e.target.style.borderColor = theme.border }}
                onKeyDown={e => e.key === 'Enter' && (mode === 'login' ? handleLogin() : handleRegister())}
              />
              <button
                type="button"
                onClick={() => setShowPassword(s => !s)}
                style={{
                  position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                  color: theme.textDim, display: 'flex', alignItems: 'center',
                }}
              >
                {showPassword ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
            {error && <ErrorBox msg={error} />}
            <button style={btnPrimary} onClick={mode === 'login' ? handleLogin : handleRegister} disabled={loading}>
              {loading ? '...' : mode === 'login' ? 'Entrar' : 'Crear cuenta'}
            </button>
            {onLoginWithGoogle && googleClientId && (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '4px 0' }}>
                  <div style={{ flex: 1, height: 1, background: theme.border }} />
                  <span style={{ fontSize: 11, color: theme.textDim, fontFamily: 'inherit' }}>o</span>
                  <div style={{ flex: 1, height: 1, background: theme.border }} />
                </div>
                <button style={btnGhost} onClick={handleGoogleClick} disabled={loading}>
                  Continuar con Google
                </button>
              </>
            )}
            {mode === 'login' && (
              <button
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: theme.textDim, fontSize: 12, fontFamily: 'inherit', textAlign: 'center' }}
                onClick={() => go('forgot')}
              >
                ¿Olvidaste tu contraseña?
              </button>
            )}
          </div>
          <div style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: theme.textMuted, fontFamily: 'inherit' }}>
            {mode === 'login' ? '¿No tenés cuenta?' : '¿Ya tenés cuenta?'}{' '}
            <span
              onClick={() => go(mode === 'login' ? 'register' : 'login')}
              style={{ color: theme.accentBright, cursor: 'pointer', fontWeight: 600 }}
            >
              {mode === 'login' ? 'Registrate' : 'Iniciá sesión'}
            </span>
          </div>
          {onGuest && (
            <div style={{ textAlign: 'center', marginTop: 16 }}>
              <button
                onClick={onGuest}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: theme.textDim, fontSize: 12, fontFamily: 'inherit', padding: '4px 8px', borderRadius: 6, transition: 'color 0.15s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = theme.textMuted }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = theme.textDim }}
              >
                Continuar como invitado
              </button>
              <span style={{ display: 'block', fontSize: 10, color: theme.textDim, fontFamily: 'inherit', marginTop: 2 }}>
                tu progreso no se guardará
              </span>
            </div>
          )}
        </Card>
      )}
    </>
  )

  return compact ? content : <Wrapper>{content}</Wrapper>
}

