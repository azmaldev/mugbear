'use client'

import { toast } from 'sonner'

const toolsRow1 = [
  { name: 'Claude Code', url: 'https://www.google.com/s2/favicons?domain=claude.ai&sz=64' },
  { name: 'Cursor', url: 'https://www.google.com/s2/favicons?domain=cursor.sh&sz=64' },
  { name: 'Windsurf', url: 'https://www.google.com/s2/favicons?domain=codeium.com&sz=64' },
  { name: 'GitHub', url: 'https://www.google.com/s2/favicons?domain=github.com&sz=64' },
  { name: 'Bolt', url: 'https://www.google.com/s2/favicons?domain=bolt.new&sz=64' },
  { name: 'Lovable', url: 'https://www.google.com/s2/favicons?domain=lovable.dev&sz=64' },
  { name: 'VS Code', url: 'https://www.google.com/s2/favicons?domain=code.visualstudio.com&sz=64' },
  { name: 'Antigravity', url: 'https://www.google.com/s2/favicons?domain=antigravity.google&sz=64' },
]

const toolsRow2 = [
  { name: 'Antigravity', url: 'https://www.google.com/s2/favicons?domain=antigravity.google&sz=64' },
  { name: 'VS Code', url: 'https://www.google.com/s2/favicons?domain=code.visualstudio.com&sz=64' },
  { name: 'Lovable', url: 'https://www.google.com/s2/favicons?domain=lovable.dev&sz=64' },
  { name: 'Bolt', url: 'https://www.google.com/s2/favicons?domain=bolt.new&sz=64' },
  { name: 'GitHub', url: 'https://www.google.com/s2/favicons?domain=github.com&sz=64' },
  { name: 'Windsurf', url: 'https://www.google.com/s2/favicons?domain=codeium.com&sz=64' },
  { name: 'Cursor', url: 'https://www.google.com/s2/favicons?domain=cursor.sh&sz=64' },
  { name: 'Claude Code', url: 'https://www.google.com/s2/favicons?domain=claude.ai&sz=64' },
]

const AI_PROMPT = `I want to add avatars to my app using MugBear.

Install:
npm install mugbear

Usage:
import { getAvatar } from 'mugbear'
const url = getAvatar('John Doe', { provider: 'dicebear', style: 'initials' })

React component:
import { MugBearAvatar } from 'mugbear/react'
<MugBearAvatar name="John Doe" size={64} style="initials" />

Providers: 'dicebear' | 'ui-avatars' | 'robohash'
Styles: initials, avataaars, notionists, thumbs, bottts, micah, pixel-art, lorelei, adventurer, croodles

Docs: https://github.com/azmaldev/mugbear
npm: https://npmjs.com/package/mugbear`

function ScrollingToolsRow({ tools, direction }: { tools: typeof toolsRow1; direction: 'left' | 'right' }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-black to-transparent z-10" />

      <div
        className={`flex gap-4 ${
          direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
        }`}
        style={{ animationDuration: '25s' }}
      >
        {[0, 1, 2, 3].map(repeat =>
          tools.map((tool, idx) => (
            <div
              key={`${repeat}-${idx}`}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-5 py-3 flex items-center gap-3 flex-shrink-0 whitespace-nowrap shadow-sm"
            >
              <div className="rounded-lg bg-zinc-100 dark:bg-zinc-900 p-1.5 flex-shrink-0">
                <img
                  src={tool.url}
                  alt={tool.name}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <span className="text-zinc-900 dark:text-zinc-100 font-medium text-sm">{tool.name}</span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export function WorksWith() {
  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(AI_PROMPT)
    toast.success('Prompt copied! Paste into Claude, Cursor, Windsurf or any AI tool')
  }

  return (
    <section className="border-b border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Works With Your Favorite Tools</h2>
            <p className="mt-4 text-muted-foreground">
              Copy the AI Prompt and paste into any AI coding tool
            </p>
          </div>

          <div className="space-y-8">
            <ScrollingToolsRow tools={toolsRow1} direction="left" />
            <ScrollingToolsRow tools={toolsRow2} direction="right" />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleCopyPrompt}
              className="w-full max-w-sm mx-auto flex items-center justify-center gap-2 bg-black text-white dark:bg-white dark:text-black rounded-xl px-8 py-4 font-semibold text-base hover:opacity-80 transition mt-8 tracking-tight"
            >
              Copy AI Prompt for any tool
            </button>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <div>Ready-to-use prompts for Claude, Cursor, Windsurf, or any AI tool</div>
          </div>
        </div>
      </div>
    </section>
  )
}
