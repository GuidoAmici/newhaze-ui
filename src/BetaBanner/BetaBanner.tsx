'use client'

import React from 'react'

export interface BetaBannerProps {
  href: string
  children: React.ReactNode
}

export function BetaBanner({ href, children }: BetaBannerProps) {
  return (
    <a
      href={href}
      style={{
        display: 'block',
        textAlign: 'center',
        padding: '8px 16px',
        background: 'rgba(155, 111, 212, 0.15)',
        borderBottom: '1px solid rgba(155, 111, 212, 0.30)',
        fontSize: 13,
        color: 'var(--nh-accent)',
        textDecoration: 'none',
      }}
    >
      {children}
    </a>
  )
}
