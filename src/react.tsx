import * as React from 'react'
import { getAvatar, AvatarOptions, DiceBearStyle } from './index'

// ─────────────────────────────────────────
// Types
// ─────────────────────────────────────────

export interface MugBearAvatarProps {
  /** Name or username — same name always gives same avatar */
  name: string
  /** Which provider to use */
  provider?: 'dicebear' | 'ui-avatars' | 'robohash'
  /** DiceBear style (only used when provider is 'dicebear') */
  style?: DiceBearStyle
  /** Size in pixels */
  size?: number
  /** Circle or square */
  shape?: 'circle' | 'square'
  /** Alt text for accessibility */
  alt?: string
  /** Extra CSS class */
  className?: string
  /** Inline styles */
  imgStyle?: React.CSSProperties
  /** Called when avatar fails to load */
  onError?: () => void
}

// ─────────────────────────────────────────
// Avatar Component
// ─────────────────────────────────────────

export function MugBearAvatar({
  name,
  provider = 'dicebear',
  style = 'initials',
  size = 64,
  shape = 'circle',
  alt,
  className,
  imgStyle,
  onError,
}: MugBearAvatarProps) {
  const [error, setError] = React.useState(false)

  const options: AvatarOptions =
    provider === 'dicebear'
      ? { provider: 'dicebear', style, size }
      : provider === 'ui-avatars'
      ? { provider: 'ui-avatars', size, rounded: shape === 'circle' }
      : { provider: 'robohash', size }

  // Fallback to initials if primary fails
  const fallbackUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&size=${size}`
  const src = error ? fallbackUrl : getAvatar(name, options)

  const borderRadius = shape === 'circle' ? '50%' : '8px'

  return (
    <img
      src={src}
      alt={alt ?? `Avatar for ${name}`}
      width={size}
      height={size}
      className={className}
      style={{ borderRadius, display: 'block', ...imgStyle }}
      onError={() => {
        setError(true)
        onError?.()
      }}
    />
  )
}

// ─────────────────────────────────────────
// Avatar with fallback text (when all else fails)
// ─────────────────────────────────────────

export interface AvatarWithFallbackProps extends MugBearAvatarProps {
  fallbackBg?: string
  fallbackColor?: string
}

export function AvatarWithFallback({
  name,
  fallbackBg = '#18181b',
  fallbackColor = '#ffffff',
  size = 64,
  shape = 'circle',
  ...rest
}: AvatarWithFallbackProps) {
  const [failed, setFailed] = React.useState(false)
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  if (failed) {
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: shape === 'circle' ? '50%' : '8px',
          backgroundColor: fallbackBg,
          color: fallbackColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: size * 0.35,
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
          userSelect: 'none',
        }}
        aria-label={`Avatar for ${name}`}
      >
        {initials}
      </div>
    )
  }

  return (
    <MugBearAvatar
      name={name}
      size={size}
      shape={shape}
      onError={() => setFailed(true)}
      {...rest}
    />
  )
}
