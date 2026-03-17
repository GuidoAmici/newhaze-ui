'use client'

import React from 'react'
import styles from './HeroSection.module.css'

export interface HeroSectionProps {
  title: string
  highlight: string
  description: string
  cta?: React.ReactNode
}

export function HeroSection({ title, highlight, description, cta }: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {title}
          <br />
          <span className={styles.highlight}>{highlight}</span>
        </h1>
        <p className={styles.description}>{description}</p>
        {cta && <div className={styles.cta}>{cta}</div>}
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
      </div>
    </section>
  )
}
