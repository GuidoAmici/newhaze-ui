'use client'

import React from 'react'
import { Card } from '../Card/Card'
import { useTheme } from '../ThemeProvider'
import styles from './ProductCard.module.css'

export interface ProductCardProps {
  image: string
  imageAlt?: string
  title: string
  description: string
  price: string
}

export function ProductCard({ image, imageAlt, title, description, price }: ProductCardProps) {
  const { theme } = useTheme()
  return (
    <Card style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={imageAlt ?? title} className={styles.image} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title} style={{ color: theme.text }}>{title}</h3>
        <p className={styles.description} style={{ color: theme.textMuted }}>{description}</p>
        <p className={styles.price} style={{ color: theme.accentBright }}>{price}</p>
      </div>
    </Card>
  )
}
