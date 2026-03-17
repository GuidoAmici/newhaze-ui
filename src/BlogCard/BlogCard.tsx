'use client'

import React from 'react'
import { useTheme } from '../ThemeProvider'
import styles from './BlogCard.module.css'

export interface BlogCardProps {
  title: string
  excerpt: string
  coverImage: string
  href: string
  onClick?: () => void
  readMoreLabel?: string
  animationDelay?: number
}

export function BlogCard({
  title,
  excerpt,
  coverImage,
  href,
  onClick,
  readMoreLabel = 'Leer más',
  animationDelay,
}: BlogCardProps) {
  const { theme } = useTheme()
  return (
    <a
      href={href}
      onClick={onClick}
      className={styles.card}
      style={animationDelay !== undefined ? { animationDelay: `${animationDelay}ms` } : undefined}
    >
      <div className={styles.imageWrapper}>
        <img src={coverImage || '/placeholder.svg'} alt={title} className={styles.image} />
        <div className={styles.imageOverlay} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title} style={{ color: theme.text }}>{title}</h3>
        <p className={styles.excerpt} style={{ color: theme.textMuted }}>{excerpt}</p>
        <div className={styles.readMore} style={{ color: theme.accent }}>
          {readMoreLabel}
          <svg
            className={styles.arrow}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </a>
  )
}
