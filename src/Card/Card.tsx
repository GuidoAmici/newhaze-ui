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
        background: theme.bgLight,
        border: `1px solid ${active ? theme.borderLight : theme.border}`,
        borderRadius: 16,
        padding: '20px 20px',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background 0.15s, border-color 0.15s, box-shadow 0.15s',
        boxShadow: active
          ? `0 0 0 1px ${theme.borderLight}, 0 4px 16px ${theme.bgDark}99`
          : `0 2px 8px ${theme.bgDark}66`,
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
        background: theme.bg,
        borderRadius: 20,
        padding: 16,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
