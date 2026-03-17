'use client'

import React from 'react'
import { useTheme } from '../ThemeProvider'
import { Card } from '../Card/Card'
import styles from './FeatureCard.module.css'

export interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  iconVariant?: 'accent' | 'accent-bright' | 'success'
}

export function FeatureCard({ icon, title, description, iconVariant = 'accent' }: FeatureCardProps) {
  const { theme } = useTheme()
  const iconBg =
    iconVariant === 'accent-bright'
      ? theme.accentBright
      : iconVariant === 'success'
      ? theme.success
      : theme.accent
  return (
    <Card className={styles.card}>
      <div className={styles.iconCircle} style={{ background: iconBg }}>
        {icon}
      </div>
      <h3 className={styles.title} style={{ color: theme.text }}>{title}</h3>
      <p className={styles.description} style={{ color: theme.textMuted }}>{description}</p>
    </Card>
  )
}
