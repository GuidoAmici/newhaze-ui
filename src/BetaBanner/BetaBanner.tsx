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
        background: 'color-mix(in srgb, var(--nh-secondary) 15%, transparent)',
        borderBottom: '1px solid color-mix(in srgb, var(--nh-secondary) 30%, transparent)',
        fontSize: 13,
        color: 'var(--nh-accent)',
        textDecoration: 'none',
      }}
    >
      {children}
    </a>
  )
}
