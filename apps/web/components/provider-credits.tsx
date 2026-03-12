'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import { GlowingEffect } from "@/components/ui/glowing-effect"

const providers = [
  {
    name: 'DiceBear',
    description: '30+ SVG styles. Fully customizable.',
    url: 'https://dicebear.com',
    favicon: 'https://www.google.com/s2/favicons?domain=dicebear.com&sz=64',
  },
  {
    name: 'UI Avatars',
    description: 'Initials-based. Simple and fast.',
    url: 'https://ui-avatars.com',
    favicon: 'https://www.google.com/s2/favicons?domain=ui-avatars.com&sz=64',
  },
  {
    name: 'RoboHash',
    description: 'Robots and monsters from any text.',
    url: 'https://robohash.org',
    favicon: 'https://www.google.com/s2/favicons?domain=robohash.org&sz=64',
  },
]

export function ProviderCredits() {
  return (
    <section className="border-b border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-center">Powered By</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {providers.map((provider) => (
              <div key={provider.name} className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                  variant="white"
                />
                <Card className="relative rounded-xl border border-zinc-800 bg-card p-6 space-y-4 flex flex-col h-full">
                  <div className="flex items-start justify-between">
                    <img
                      src={provider.favicon}
                      alt={provider.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{provider.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {provider.description}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full"
                  >
                    <a href={provider.url} target="_blank" rel="noopener noreferrer">
                      Visit <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
