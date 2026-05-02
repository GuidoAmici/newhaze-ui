"use client"

import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from '../ThemeProvider'
import { ThemePicker } from './ThemePicker'
import { Logo } from '../Logo/Logo'

function useIsMobile(breakpoint = 768): boolean {
  // Always false on server so SSR and client initial render agree.
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [breakpoint])
  return isMobile
}

export interface NavUser {
  username: string
  email: string
  roles: string[]
}

// Accept any link-like component: Next.js Link, React Router Link, or plain <a>
type LinkProps = {
  href: string
  children: React.ReactNode
  style?: React.CSSProperties
  'aria-label'?: string
  onMouseEnter?: React.MouseEventHandler<HTMLElement>
  onMouseLeave?: React.MouseEventHandler<HTMLElement>
}

export interface HeaderProps {
  /** Which app this is rendered in — used to highlight the active nav item */
  activeApp?: 'website' | 'learn' | 'inner-panel' | 'outer-panel'
  /** Authenticated user. null/undefined = logged out */
  user?: NavUser | null
  onLogin?: () => void
  onLogout?: () => void
  /** Route for the profile/settings page (e.g. "/perfil"). Adds a link in the UserMenu dropdown. */
  profileHref?: string
  /** Pass Next.js Link or React Router Link for client-side navigation. Defaults to <a>. */
  LinkComponent?: React.ComponentType<LinkProps>
  /** Base URL for the main website. Defaults to https://newhaze.ar */
  websiteUrl?: string
  /** Base URL for the learn app. Defaults to https://learn.newhaze.ar */
  learnUrl?: string
  /** Extra nav links injected after the main nav (e.g. page section anchors) */
  extraNavLinks?: { label: string; href: string }[]
}

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

function DefaultLink({ href, children, style, 'aria-label': ariaLabel, onMouseEnter, onMouseLeave }: LinkProps) {
  return <a href={href} style={style} aria-label={ariaLabel} onMouseEnter={onMouseEnter as React.MouseEventHandler<HTMLAnchorElement>} onMouseLeave={onMouseLeave as React.MouseEventHandler<HTMLAnchorElement>}>{children}</a>
}

interface UserMenuProps {
  user: NavUser
  onLogout?: () => void
  profileHref?: string
  LinkComponent: React.ComponentType<LinkProps>
}

function UserMenu({ user, onLogout, profileHref, LinkComponent }: UserMenuProps) {
  const { theme } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          background: 'none',
          border: `1px solid ${theme.border}`,
          borderRadius: 8,
          padding: '4px 10px',
          color: theme.accentBright,
          cursor: 'pointer',
          fontSize: 12,
          fontFamily: 'inherit',
          fontWeight: 600,
          transition: 'border-color 0.15s',
        }}
      >
        {user.username}
        <span style={{ marginLeft: 4, fontSize: 9, opacity: 0.7 }}>{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 8px)',
          right: 0,
          minWidth: 200,
          background: theme.s2,
          border: `1px solid ${theme.border}`,
          borderRadius: 12,
          padding: '8px 0',
          boxShadow: '0 8px 24px rgba(0,0,0,0.14)',
          zIndex: 200,
        }}>
          {/* User info */}
          <div style={{ padding: '10px 16px 12px', borderBottom: `1px solid ${theme.border}` }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: theme.text }}>{user.username}</div>
            <div style={{ fontSize: 11, color: theme.textDim, marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {user.email}
            </div>
          </div>

          {/* Profile link */}
          {profileHref && (
            <div style={{ padding: '4px 8px 0' }}>
              <LinkComponent
                href={profileHref}
                style={{
                  display: 'block',
                  padding: '8px 10px',
                  borderRadius: 8,
                  fontSize: 13,
                  color: theme.textMuted,
                  textDecoration: 'none',
                  fontFamily: 'inherit',
                  transition: 'background 0.1s, color 0.1s',
                }}
              >
                Mi perfil
              </LinkComponent>
            </div>
          )}

          {/* Logout */}
          <div style={{ padding: '4px 8px 4px' }}>
            <button
              onClick={() => { setOpen(false); onLogout?.() }}
              style={{
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                padding: '8px 10px',
                borderRadius: 8,
                color: theme.textMuted,
                cursor: 'pointer',
                fontSize: 13,
                fontFamily: 'inherit',
                transition: 'background 0.1s, color 0.1s',
              }}
              onMouseEnter={e => {
                const btn = e.currentTarget as HTMLButtonElement
                btn.style.background = theme.s2
                btn.style.color = theme.text
              }}
              onMouseLeave={e => {
                const btn = e.currentTarget as HTMLButtonElement
                btn.style.background = 'none'
                btn.style.color = theme.textMuted
              }}
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export function Header({
  activeApp,
  user,
  onLogin,
  onLogout,
  profileHref,
  LinkComponent = DefaultLink,
  websiteUrl = 'https://newhaze.ar',
  learnUrl = 'https://learn.newhaze.ar',
  extraNavLinks,
}: HeaderProps) {
  const { theme } = useTheme()
  const isMobile = useIsMobile()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Productos', href: `${websiteUrl}/#productos`, app: 'website' },
    { label: 'Learn',     href: learnUrl,                   app: 'learn'   },
    { label: 'Blog',      href: `${websiteUrl}/blog`,       app: 'blog'    },
    { label: 'Nosotros',  href: `${websiteUrl}/vision`,     app: 'vision'  },
  ]

  const navLinkStyle = (isActive: boolean): React.CSSProperties => ({
    fontSize: 14,
    fontWeight: isActive ? 600 : 400,
    color: isActive ? '#F0F0F2' : '#666670',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.15s',
  })

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      height: 64,
      background: scrolled ? 'rgba(14,14,18,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      transition: 'background 0.3s, border-color 0.3s',
    }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 24,
        padding: isMobile ? '0 20px' : '0 40px',
        boxSizing: 'border-box',
      }}>

        {/* Logo */}
        <LinkComponent href={websiteUrl} aria-label="New Haze" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Logo variant="full" size={28} />
        </LinkComponent>

        {/* Nav — hidden on mobile */}
        {!isMobile && (
          <nav style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
            {navLinks.map(link => (
              <LinkComponent
                key={link.app}
                href={link.href}
                style={navLinkStyle(activeApp === link.app)}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { (e.currentTarget as HTMLElement).style.color = '#F0F0F2' }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { (e.currentTarget as HTMLElement).style.color = activeApp === link.app ? '#F0F0F2' : '#666670' }}
              >
                {link.label}
              </LinkComponent>
            ))}
            {extraNavLinks?.map(link => (
              <LinkComponent
                key={link.href}
                href={link.href}
                style={navLinkStyle(false)}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { (e.currentTarget as HTMLElement).style.color = '#F0F0F2' }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { (e.currentTarget as HTMLElement).style.color = '#666670' }}
              >
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
        )}

        {/* Right controls */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          <ThemePicker />
          {user ? (
            <UserMenu user={user} onLogout={onLogout} profileHref={profileHref} LinkComponent={LinkComponent} />
          ) : (
            <button
              onClick={onLogin}
              style={{
                background: '#855CF2',
                border: 'none',
                borderRadius: 8,
                padding: '8px 20px',
                color: '#fff',
                cursor: 'pointer',
                fontSize: 13,
                fontFamily: 'inherit',
                fontWeight: 500,
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#9b6fd4' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#855CF2' }}
            >
              Acceder
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
