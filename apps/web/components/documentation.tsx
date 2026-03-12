'use client'

import { Copy } from 'lucide-react'
import { toast } from 'sonner'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const apiDocs = [
  {
    badge: 'Core',
    title: 'getAvatar()',
    description: 'Pass any name and provider, get a URL back.',
    code: `getAvatar('John', { 
  provider: 'dicebear', 
  style: 'initials' 
})`,
  },
  {
    badge: 'React',
    title: 'React Component',
    description: 'Drop-in component with built-in fallback.',
    code: `<MugBearAvatar 
  name="John"
  provider="dicebear"
  style="avataaars"
  size={64}
/>`,
  },
  {
    badge: 'Utility',
    title: 'getAllAvatars()',
    description: 'Get URLs from all providers at once.',
    code: `const avatars = getAllAvatars('John')
// Returns:
// { initials, cartoon, robot, 
//   pixel, notionists, thumbs, 
//   uiAvatars }`,
  },
]

function DocCard({ badge, title, description, code }: { badge: string; title: string; description: string; code: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    toast.success('Code copied to clipboard!')
  }

  return (
    <li className="min-h-[16rem] list-none">
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
          variant="white"
        />
        <div className="relative flex h-full flex-col justify-between gap-4 
        overflow-hidden rounded-xl border-[0.75px] bg-background p-6 
        shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
          <div className="flex flex-col gap-3">
            <span className="w-fit rounded-lg border border-border 
            bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
              {badge}
            </span>
            <h3 className="text-xl font-semibold tracking-tight">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="relative">
            <pre className="rounded-lg bg-zinc-950 p-4 text-xs 
            font-mono text-zinc-100 overflow-x-auto">
              {code}
            </pre>
            <button 
              onClick={handleCopy}
              className="absolute top-2 right-2 p-1.5 rounded-md 
            bg-zinc-800 hover:bg-zinc-700 transition">
              <Copy className="h-3 w-3 text-zinc-400" />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export function Documentation() {
  return (
    <section className="border-b border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold">Full API Reference</h2>
            <p className="mt-2 text-muted-foreground">
              Everything you need to implement MugBear
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {apiDocs.map((doc) => (
              <DocCard key={doc.title} {...doc} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
