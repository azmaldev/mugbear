'use client'

import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

const avatarRow1 = [
  'https://api.dicebear.com/7.x/initials/svg?seed=John',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  'https://api.dicebear.com/7.x/notionists/svg?seed=Alex',
  'https://api.dicebear.com/7.x/thumbs/svg?seed=Priya',
  'https://api.dicebear.com/7.x/bottts/svg?seed=Mike',
  'https://api.dicebear.com/7.x/micah/svg?seed=Emma',
  'https://api.dicebear.com/7.x/pixel-art/svg?seed=James',
]

const avatarRow2 = [
  'https://api.dicebear.com/7.x/lorelei/svg?seed=Nina',
  'https://api.dicebear.com/7.x/adventurer/svg?seed=Omar',
  'https://api.dicebear.com/7.x/croodles/svg?seed=Zara',
  'https://robohash.org/Dev1?size=128x128',
  'https://robohash.org/Dev2?size=128x128',
  'https://ui-avatars.com/api/?name=Tom+Clark&background=random',
  'https://ui-avatars.com/api/?name=Anna+Lee&background=random',
]

function CommandCopyBlock() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install mugbear')
    setCopied(true)
    toast.success('Copied to clipboard!')
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mx-auto max-w-md rounded-lg border border-border bg-muted/50 px-4 py-3 font-mono text-sm flex items-center justify-between gap-4">
      <span className="text-foreground">npm install mugbear</span>
      <button
        onClick={handleCopy}
        className="flex-shrink-0 p-1.5 hover:bg-border rounded transition-colors"
        aria-label="Copy command"
      >
        {copied ? (
          <Check className="h-4 w-4 text-foreground" />
        ) : (
          <Copy className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
    </div>
  )
}

function ScrollingAvatarRow({ avatars, direction }: { avatars: string[]; direction: 'left' | 'right' }) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Fade gradient overlays */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Scrolling container */}
      <div
        className={`flex gap-4 ${
          direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
        }`}
      >
        {/* Original avatars + 3 repeats for seamless loop */}
        {[0, 1, 2, 3].map(repeat =>
          avatars.map((avatar, idx) => (
            <div
              key={`${repeat}-${idx}`}
              className="flex-shrink-0 h-16 w-16 rounded-full border-2 border-foreground shadow-sm overflow-hidden"
            >
              <img
                src={avatar}
                alt={`avatar-${repeat}-${idx}`}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export function Hero() {
  const scrollToPlayground = () => {
    document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="border-b border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-12">
          {/* Text */}
          <div className="space-y-6 text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Avatar Playground & API
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Generate consistent avatars from any name. One package, three providers, zero config.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 justify-center sm:flex-row">
              <Button size="lg" onClick={scrollToPlayground} className="bg-foreground text-background hover:bg-foreground/90">
                Open Playground ↓
              </Button>
              <Button size="lg" variant="outline">
                View Docs ↓
              </Button>
            </div>

            {/* Command Copy Block */}
            <CommandCopyBlock />
          </div>

          {/* Scrolling Avatar Rows */}
          <div className="space-y-8">
            <ScrollingAvatarRow avatars={avatarRow1} direction="left" />
            <ScrollingAvatarRow avatars={avatarRow2} direction="right" />
          </div>
        </div>
      </div>
    </section>
  )
}
