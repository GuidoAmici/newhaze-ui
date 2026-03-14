"use client"

import { useTheme } from '../ThemeProvider'
import { AuthScreen } from './AuthScreen'
import type { AuthScreenProps, AuthMode } from './AuthScreen'

export interface AuthModalProps {
  onClose?: () => void
  initialMode?: AuthMode
  authScreenProps: Omit<AuthScreenProps, 'compact' | 'initialMode'>
}

export function AuthModal({ onClose, initialMode, authScreenProps }: AuthModalProps) {
  const { theme } = useTheme()

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: theme.bg,
          border: `1px solid ${theme.border}`,
          borderRadius: 24,
          padding: 32,
          maxWidth: 400,
          width: '100%',
          position: 'relative',
        }}
      >
        {onClose && (
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: theme.textDim,
              fontSize: 18,
              lineHeight: 1,
              padding: '4px 8px',
              borderRadius: 6,
              fontFamily: 'inherit',
            }}
            aria-label="Cerrar"
          >
            ✕
          </button>
        )}
        <AuthScreen
          {...authScreenProps}
          compact
          initialMode={initialMode}
        />
      </div>
    </div>
  )
}
