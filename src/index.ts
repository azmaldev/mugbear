// MugBear — Avatar Hub for Developers
// Free forever. No API key needed.
// https://github.com/yourname/mugbear

// ─────────────────────────────────────────
// Types
// ─────────────────────────────────────────

export type Provider = 'dicebear' | 'ui-avatars' | 'robohash'

export type DiceBearStyle =
  | 'initials'
  | 'avataaars'
  | 'notionists'
  | 'thumbs'
  | 'bottts'
  | 'micah'
  | 'pixel-art'
  | 'lorelei'
  | 'adventurer'
  | 'croodles'
  | 'fun-emoji'
  | 'identicon'
  | 'rings'
  | 'shapes'

export interface DiceBearOptions {
  provider: 'dicebear'
  style?: DiceBearStyle
  size?: number
  radius?: number
  backgroundColor?: string
}

export interface UIAvatarsOptions {
  provider: 'ui-avatars'
  size?: number
  rounded?: boolean
  bold?: boolean
  background?: string
  color?: string
  uppercase?: boolean
}

export interface RoboHashOptions {
  provider: 'robohash'
  size?: number
  set?: 'set1' | 'set2' | 'set3' | 'set4' | 'set5'
}

export type AvatarOptions =
  | DiceBearOptions
  | UIAvatarsOptions
  | RoboHashOptions

// ─────────────────────────────────────────
// Core — getAvatar()
// ─────────────────────────────────────────

export function getAvatar(name: string, options: AvatarOptions): string {
  const encoded = encodeURIComponent(name.trim())

  switch (options.provider) {
    case 'dicebear': {
      const style = options.style ?? 'initials'
      const size = options.size ?? 128
      const radius = options.radius ?? 0
      let url = `https://api.dicebear.com/7.x/${style}/svg?seed=${encoded}&size=${size}&radius=${radius}`
      if (options.backgroundColor) {
        url += `&backgroundColor=${options.backgroundColor.replace('#', '')}`
      }
      return url
    }

    case 'ui-avatars': {
      const size = options.size ?? 128
      const rounded = options.rounded ?? false
      const bold = options.bold ?? false
      const bg = (options.background ?? 'random').replace('#', '')
      const color = (options.color ?? 'ffffff').replace('#', '')
      const upper = options.uppercase ?? true
      return `https://ui-avatars.com/api/?name=${encoded}&size=${size}&rounded=${rounded}&bold=${bold}&background=${bg}&color=${color}&uppercase=${upper}&format=svg`
    }

    case 'robohash': {
      const size = options.size ?? 128
      const set = options.set ?? 'set1'
      return `https://robohash.org/${encoded}?size=${size}x${size}&set=${set}`
    }

    default:
      throw new Error(`[MugBear] Unknown provider. Use 'dicebear', 'ui-avatars', or 'robohash'.`)
  }
}

// ─────────────────────────────────────────
// Shorthand helpers
// ─────────────────────────────────────────

/** Quick initials avatar (like Gmail) */
export function initialsAvatar(name: string, size = 128): string {
  return getAvatar(name, { provider: 'dicebear', style: 'initials', size })
}

/** Quick cartoon avatar */
export function cartoonAvatar(name: string, size = 128): string {
  return getAvatar(name, { provider: 'dicebear', style: 'avataaars', size })
}

/** Quick robot avatar */
export function robotAvatar(name: string, size = 128): string {
  return getAvatar(name, { provider: 'robohash', size, set: 'set1' })
}

/** Quick pixel art avatar */
export function pixelAvatar(name: string, size = 128): string {
  return getAvatar(name, { provider: 'dicebear', style: 'pixel-art', size })
}

/** Returns avatars from ALL providers at once for comparison */
export function getAllAvatars(name: string, size = 128) {
  return {
    initials: initialsAvatar(name, size),
    cartoon: cartoonAvatar(name, size),
    robot: robotAvatar(name, size),
    pixel: pixelAvatar(name, size),
    notionists: getAvatar(name, { provider: 'dicebear', style: 'notionists', size }),
    thumbs: getAvatar(name, { provider: 'dicebear', style: 'thumbs', size }),
    uiAvatars: getAvatar(name, { provider: 'ui-avatars', size }),
  }
}

// ─────────────────────────────────────────
// All DiceBear styles list (useful for pickers)
// ─────────────────────────────────────────

export const DICEBEAR_STYLES: DiceBearStyle[] = [
  'initials',
  'avataaars',
  'notionists',
  'thumbs',
  'bottts',
  'micah',
  'pixel-art',
  'lorelei',
  'adventurer',
  'croodles',
  'fun-emoji',
  'identicon',
  'rings',
  'shapes',
]

export const PROVIDERS: Provider[] = ['dicebear', 'ui-avatars', 'robohash']
