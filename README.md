<!--
Package: mugbear
Description: Free avatar generation toolkit for developers. 
Wraps DiceBear, UI Avatars and RoboHash into one TypeScript package with React components.
Keywords: avatar, generator, dicebear, ui-avatars, robohash, react, typescript, npm, free-avatar, profile-picture, deterministic-avatar
Author: azmaldev
License: MIT
URL: https://mugbear.vercel.app
npm: https://npmjs.com/package/mugbear
GitHub: https://github.com/azmaldev/mugbear
-->

<div align="center">

<br />

<img src="https://mugbear.vercel.app/logo.png" alt="MugBear Logo" width="100" style="border-radius: 20px; padding: 12px;" />

<br />
<br />

# 🐻 MugBear

### Avatar Playground for Developers

**Generate consistent avatars from any name.**  
One package · Three providers · Zero config · No API key

<br />

[![npm version](https://img.shields.io/npm/v/mugbear?style=flat-square&colorA=000000&colorB=000000)](https://npmjs.com/package/mugbear)
[![npm downloads](https://img.shields.io/npm/dm/mugbear?style=flat-square&colorA=000000&colorB=000000)](https://npmjs.com/package/mugbear)
[![GitHub stars](https://img.shields.io/github/stars/azmaldev/mugbear?style=flat-square&colorA=000000&colorB=000000)](https://github.com/azmaldev/mugbear)
[![MIT License](https://img.shields.io/badge/license-MIT-000000?style=flat-square)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-000000?style=flat-square)](https://npmjs.com/package/mugbear)

<br />

[**🎮 Live Playground**](https://mugbear.vercel.app) &nbsp;·&nbsp; [**📦 npm Package**](https://npmjs.com/package/mugbear) &nbsp;·&nbsp; [**🐛 Report Issue**](https://github.com/azmaldev/mugbear/issues)

<br />

---

### See it in action

**DiceBear styles**

<img src="https://api.dicebear.com/7.x/initials/svg?seed=John&size=48&radius=50" width="48" height="48" title="initials" />
<img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&size=48&radius=50" width="48" height="48" title="avataaars" />
<img src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex&size=48&radius=50" width="48" height="48" title="notionists" />
<img src="https://api.dicebear.com/7.x/thumbs/svg?seed=Priya&size=48&radius=50" width="48" height="48" title="thumbs" />
<img src="https://api.dicebear.com/7.x/bottts/svg?seed=Mike&size=48&radius=50" width="48" height="48" title="bottts" />
<img src="https://api.dicebear.com/7.x/micah/svg?seed=Emma&size=48&radius=50" width="48" height="48" title="micah" />
<img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=James&size=48&radius=50" width="48" height="48" title="pixel-art" />
<img src="https://api.dicebear.com/7.x/lorelei/svg?seed=Nina&size=48&radius=50" width="48" height="48" title="lorelei" />
<img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Omar&size=48&radius=50" width="48" height="48" title="adventurer" />
<img src="https://api.dicebear.com/7.x/croodles/svg?seed=Zara&size=48&radius=50" width="48" height="48" title="croodles" />

**RoboHash**

<img src="https://robohash.org/John?size=48x48" width="48" height="48" title="robohash" />
<img src="https://robohash.org/Sarah?size=48x48" width="48" height="48" title="robohash" />
<img src="https://robohash.org/Alex?size=48x48" width="48" height="48" title="robohash" />
<img src="https://robohash.org/Priya?size=48x48" width="48" height="48" title="robohash" />
<img src="https://robohash.org/Mike?size=48x48" width="48" height="48" title="robohash" />

**UI Avatars**

<img src="https://ui-avatars.com/api/?name=John+Doe&size=48&rounded=true&background=000000&color=ffffff" width="48" height="48" title="ui-avatars" />
<img src="https://ui-avatars.com/api/?name=Sarah+K&size=48&rounded=true&background=27272a&color=ffffff" width="48" height="48" title="ui-avatars" />
<img src="https://ui-avatars.com/api/?name=Alex+M&size=48&rounded=true&background=3f3f46&color=ffffff" width="48" height="48" title="ui-avatars" />
<img src="https://ui-avatars.com/api/?name=Priya+S&size=48&rounded=true&background=52525b&color=ffffff" width="48" height="48" title="ui-avatars" />
<img src="https://ui-avatars.com/api/?name=Mike+R&size=48&rounded=true&background=71717a&color=ffffff" width="48" height="48" title="ui-avatars" />

</div>

---

## Install

<div align="center">

```bash
npm install mugbear
```

```bash
pnpm add mugbear
```

```bash
yarn add mugbear
```

</div>

---

## What is MugBear?

MugBear is a free open source **avatar toolkit for developers.**  
It wraps three of the best free avatar providers — DiceBear, UI Avatars, and RoboHash — into one clean package with TypeScript support, React components, and zero configuration.

> Same name → Same avatar. Always. No image storage needed.

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

### Shorthand Helpers

```ts
import { initialsAvatar, cartoonAvatar, robotAvatar, pixelAvatar, getAllAvatars } from 'mugbear'

initialsAvatar('John Doe')   // → DiceBear initials URL
cartoonAvatar('John Doe')    // → DiceBear avataaars URL
robotAvatar('John Doe')      // → RoboHash URL
pixelAvatar('John Doe')      // → DiceBear pixel-art URL

// Get all providers at once
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

// With automatic fallback (shows initials if API fails)
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
| `rounded` | `boolean` | `false` | Rounded corners (ui-avatars only) |
| `shape` | `'circle' \| 'square'` | `'circle'` | Shape of avatar |

### DiceBear Styles

| Style | Preview |
|-------|---------|
| `initials` | <img src="https://api.dicebear.com/7.x/initials/svg?seed=MB&size=32&radius=50" width="32" /> |
| `avataaars` | <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=MB&size=32&radius=50" width="32" /> |
| `notionists` | <img src="https://api.dicebear.com/7.x/notionists/svg?seed=MB&size=32&radius=50" width="32" /> |
| `thumbs` | <img src="https://api.dicebear.com/7.x/thumbs/svg?seed=MB&size=32&radius=50" width="32" /> |
| `bottts` | <img src="https://api.dicebear.com/7.x/bottts/svg?seed=MB&size=32&radius=50" width="32" /> |
| `micah` | <img src="https://api.dicebear.com/7.x/micah/svg?seed=MB&size=32&radius=50" width="32" /> |
| `pixel-art` | <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=MB&size=32&radius=50" width="32" /> |
| `lorelei` | <img src="https://api.dicebear.com/7.x/lorelei/svg?seed=MB&size=32&radius=50" width="32" /> |
| `adventurer` | <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=MB&size=32&radius=50" width="32" /> |
| `croodles` | <img src="https://api.dicebear.com/7.x/croodles/svg?seed=MB&size=32&radius=50" width="32" /> |
| `fun-emoji` | <img src="https://api.dicebear.com/7.x/fun-emoji/svg?seed=MB&size=32&radius=50" width="32" /> |
| `identicon` | <img src="https://api.dicebear.com/7.x/identicon/svg?seed=MB&size=32&radius=50" width="32" /> |

---

## How It Works

MugBear uses **deterministic seeding** — the same name always returns the same avatar. No image uploads, no storage, no database.

```
'John Doe' → https://api.dicebear.com/7.x/initials/svg?seed=John%20Doe
                                                         ↑
                                              same input = same output
```

---

## Providers

| Provider | Styles | Format | Free | Link |
|----------|--------|--------|------|------|
| DiceBear | 30+ SVG styles | SVG | ✅ | [dicebear.com](https://dicebear.com) |
| UI Avatars | Initials-based | SVG/PNG | ✅ | [ui-avatars.com](https://ui-avatars.com) |
| RoboHash | Robots & monsters | PNG | ✅ | [robohash.org](https://robohash.org) |

---

## Works With

Use the **Copy AI Prompt** button on [mugbear.vercel.app](https://mugbear.vercel.app) to get a ready-to-use prompt for any AI coding tool:

`Claude Code` &nbsp; `Cursor` &nbsp; `Windsurf` &nbsp; `GitHub Copilot` &nbsp; `Bolt` &nbsp; `Lovable` &nbsp; `VS Code` &nbsp; `Antigravity`

---

## Repo Structure

```
mugbear/
├── src/
│   ├── index.ts        ← core getAvatar() + helpers
│   └── react.tsx       ← React components
├── dist/               ← built output (ESM + CJS + types)
├── apps/
│   └── web/            ← mugbear.vercel.app
├── package.json
└── README.md
```

---

## Contributing

PRs are welcome! Please open an issue first to discuss what you'd like to change.

1. Fork the repo
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m 'add: your feature'`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

<div align="center">

<br />

MIT License © [azmaldev](https://github.com/azmaldev)

<br />

**[⭐ Star on GitHub](https://github.com/azmaldev/mugbear)** — if MugBear saved you time!

<br />

</div>