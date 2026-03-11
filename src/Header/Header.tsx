import React from 'react'
import { useTheme } from '../ThemeProvider'
import { ThemePicker } from './ThemePicker'

export interface NavUser {
  username: string
  roles: string[]
}

// Accept any link-like component: Next.js Link, React Router Link, or plain <a>
type LinkProps = { href: string; children: React.ReactNode; style?: React.CSSProperties; 'aria-label'?: string }

export interface HeaderProps {
  /** Which app this is rendered in — used to highlight the active nav item */
  activeApp?: 'website' | 'learn' | 'inner-panel' | 'outer-panel'
  /** Authenticated user. null/undefined = logged out */
  user?: NavUser | null
  onLogin?: () => void
  onLogout?: () => void
  /** Pass Next.js Link or React Router Link for client-side navigation. Defaults to <a>. */
  LinkComponent?: React.ComponentType<LinkProps>
}

const NAV_LINKS: { label: string; href: string; app: string }[] = [
  { label: 'Aprender', href: 'https://learn.newhaze.ar', app: 'learn' },
  { label: 'Blog',     href: 'https://newhaze.ar/blog',  app: 'blog' },
]

const ROLE_LINKS: { label: string; href: string; roles: string[] }[] = [
  {
    label: 'Dashboard',
    href: 'https://admin.newhaze.ar',
    roles: ['newhaze_employee', 'developer'],
  },
  {
    label: 'Mi Tienda',
    href: 'https://dashboard.newhaze.ar',
    roles: ['growshop_owner', 'growshop_employee', 'distributor_owner', 'distributor_employee'],
  },
]

function hasAnyRole(userRoles: string[], required: string[]): boolean {
  return required.some(r => userRoles.includes(r))
}

function DefaultLink({ href, children, style, 'aria-label': ariaLabel }: LinkProps) {
  return <a href={href} style={style} aria-label={ariaLabel}>{children}</a>
}

export function Header({
  activeApp,
  user,
  onLogin,
  onLogout,
  LinkComponent = DefaultLink,
}: HeaderProps) {
  const { theme } = useTheme()

  const navLinkStyle = (isActive: boolean): React.CSSProperties => ({
    fontSize: 13,
    fontWeight: isActive ? 600 : 400,
    color: isActive ? theme.accentBright : theme.textMuted,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.15s',
  })

  return (
    <header style={{
      borderBottom: `1px solid ${theme.border}`,
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      height: 56,
      background: `${theme.bg}ee`,
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>

      {/* Logo */}
      <LinkComponent href="https://newhaze.ar" aria-label="New Haze" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
        <span style={{ fontSize: 20 }}>🌿</span>
        <span style={{ fontSize: 16, fontWeight: 600, color: theme.accentBright }}>New Haze</span>
      </LinkComponent>

      {/* Nav */}
      <nav style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        {NAV_LINKS.map(link => (
          <LinkComponent key={link.app} href={link.href} style={navLinkStyle(activeApp === link.app)}>
            {link.label}
          </LinkComponent>
        ))}
        {user && ROLE_LINKS.map(link =>
          hasAnyRole(user.roles, link.roles) ? (
            <LinkComponent key={link.label} href={link.href} style={navLinkStyle(false)}>
              {link.label}
            </LinkComponent>
          ) : null
        )}
      </nav>

      {/* Right controls */}
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
        <ThemePicker />
        {user ? (
          <>
            <span style={{ fontSize: 12, color: theme.textMuted }}>{user.username}</span>
            <button
              onClick={onLogout}
              style={{
                background: 'none', border: `1px solid ${theme.border}`, borderRadius: 8,
                padding: '4px 10px', color: theme.textDim, cursor: 'pointer',
                fontSize: 11, fontFamily: 'inherit',
              }}
            >
              Salir
            </button>
          </>
        ) : (
          <button
            onClick={onLogin}
            style={{
              background: 'none', border: `1px solid ${theme.border}`, borderRadius: 8,
              padding: '4px 10px', color: theme.accentBright, cursor: 'pointer',
              fontSize: 11, fontFamily: 'inherit',
            }}
          >
            Iniciar sesión
          </button>
        )}
      </div>
    </header>
  )
}
