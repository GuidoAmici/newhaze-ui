"use client"

import React from 'react'
import { useTheme } from '../ThemeProvider'

export interface CardProps {
  children: React.ReactNode
  active?: boolean
  onClick?: () => void
  style?: React.CSSProperties
  className?: string
}

export function Card({ children, active = false, onClick, style, className }: CardProps) {
  const { theme } = useTheme()

  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        background: theme.s2,
        border: `1px solid ${active ? theme.borderLight : theme.border}`,
        borderRadius: 16,
        padding: '20px 20px',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'box-shadow 0.2s ease',
        boxShadow: active ? theme.shadowLg : theme.shadowSm,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export interface CardSectionProps {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function CardSection({ children, style, className }: CardSectionProps) {
  const { theme } = useTheme()

  return (
    <div
      className={className}
      style={{
        background: theme.s1,
        borderRadius: 20,
        padding: 16,
        boxShadow: theme.shadowSm,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
