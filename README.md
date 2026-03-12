# 🐻 MugBear

> Free avatar API hub for developers — DiceBear, UI Avatars & RoboHash in one package.
> No API key. No setup. Just works.

[![npm version](https://img.shields.io/npm/v/mugbear)](https://npmjs.com/package/mugbear)
[![MIT License](https://img.shields.io/badge/license-MIT-black)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-black)]()

---

## Install

```bash
npm install mugbear
# or
pnpm add mugbear
# or
yarn add mugbear
```

---

## Usage

### Core — `getAvatar()`

```ts
import { getAvatar } from 'mugbear'

// DiceBear — initials (like Gmail)
const url = getAvatar('John Doe', { provider: 'dicebear', style: 'initials' })

// DiceBear — cartoon
const url = getAvatar('John Doe', { provider: 'dicebear', style: 'avataaars' })

// UI Avatars
const url = getAvatar('John Doe', { provider: 'ui-avatars', rounded: true })

// RoboHash — robots
const url = getAvatar('John Doe', { provider: 'robohash' })
```

### Shorthand helpers

```ts
import { initialsAvatar, cartoonAvatar, robotAvatar, pixelAvatar, getAllAvatars } from 'mugbear'

initialsAvatar('John Doe')        // → DiceBear initials URL
cartoonAvatar('John Doe')         // → DiceBear avataaars URL
robotAvatar('John Doe')           // → RoboHash URL
pixelAvatar('John Doe')           // → DiceBear pixel-art URL

// Get all at once
const all = getAllAvatars('John Doe')
// → { initials, cartoon, robot, pixel, notionists, thumbs, uiAvatars }
```

### React Component

```tsx
import { MugBearAvatar, AvatarWithFallback } from 'mugbear/react'

// Basic
<MugBearAvatar name="John Doe" size={64} />

// With provider + style
<MugBearAvatar
  name="John Doe"
  provider="dicebear"
  style="avataaars"
  size={128}
  shape="circle"
/>

// With fallback (shows initials if API fails)
<AvatarWithFallback name="John Doe" size={64} />
```

---

## API Reference

### `getAvatar(name, options)`

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `provider` | `'dicebear' \| 'ui-avatars' \| 'robohash'` | required | Which provider to use |
| `style` | `DiceBearStyle` | `'initials'` | DiceBear style (dicebear only) |
| `size` | `number` | `128` | Avatar size in px |
| `shape` | `'circle' \| 'square'` | `'circle'` | Shape (ui-avatars only) |

### DiceBear Styles

`initials` `avataaars` `notionists` `thumbs` `bottts` `micah` `pixel-art` `lorelei` `adventurer` `croodles` `fun-emoji` `identicon` `rings` `shapes`

---

## How it works

Same name → same avatar. Always. No storage needed.

```
'John Doe' → https://api.dicebear.com/7.x/initials/svg?seed=John%20Doe
```

The `seed` value is deterministic — identical input always returns identical output.

---

## Providers

| Provider | URL | Free |
|----------|-----|------|
| DiceBear | dicebear.com | ✅ |
| UI Avatars | ui-avatars.com | ✅ |
| RoboHash | robohash.org | ✅ |

---

## License

MIT © [MugBear](https://github.com/yourname/mugbear)
