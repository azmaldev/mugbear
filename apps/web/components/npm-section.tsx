'use client'

import { Badge } from '@/components/ui/badge'

export function NpmSection() {
  return (
    <section className="border-b border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-8">
          <div>
            <div className="text-sm font-mono text-muted-foreground">// package</div>
            <h2 className="text-4xl font-bold">Use as npm Package</h2>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6 font-mono text-sm">
              <div className="text-foreground">npm install mugbear</div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 font-mono text-sm">
              <pre className="overflow-x-auto text-foreground text-xs">{`import { getAvatar } from 'mugbear'

// DiceBear
const url = getAvatar('John Doe', { 
  provider: 'dicebear', 
  style: 'initials' 
})

// RoboHash
const url = getAvatar('John Doe', { 
  provider: 'robohash'
})

// UI Avatars  
const url = getAvatar('John Doe', { 
  provider: 'ui-avatars',
  rounded: true
})`}</pre>
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <img src="https://img.shields.io/npm/v/mugbear?style=flat-square&colorA=000000&colorB=000000" alt="npm version" />
              <img src="https://img.shields.io/npm/dm/mugbear?style=flat-square&colorA=000000&colorB=000000" alt="npm downloads" />
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge>TypeScript</Badge>
              <Badge>Zero Config</Badge>
              <Badge>Multi-Provider</Badge>
              <Badge>Deterministic</Badge>
              <Badge>Tiny</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
