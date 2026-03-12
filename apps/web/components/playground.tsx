'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Toggle } from '@/components/ui/toggle'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { toast } from 'sonner'
import { Copy, Download, Zap } from 'lucide-react'

const DICEBEAR_STYLES = [
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
]

type Provider = 'dicebear' | 'ui-avatars' | 'robohash'

const AI_PROMPT = `I want to add avatars to my app using MugBear.

Install: npm install mugbear

import { getAvatar } from 'mugbear'
const url = getAvatar('John Doe', { provider: 'dicebear', style: 'initials' })

React:
import { MugBearAvatar } from 'mugbear/react'
<MugBearAvatar name="John Doe" size={64} style="initials" />

Providers: 'dicebear' | 'ui-avatars' | 'robohash'
Styles: initials, avataaars, notionists, thumbs, bottts, micah, pixel-art

Docs: https://github.com/azmaldev/mugbear`

export function Playground() {
  const searchParams = useSearchParams()
  const [name, setName] = useState(searchParams.get('name') || 'John Doe')
  const [provider, setProvider] = useState<Provider>((searchParams.get('provider') as Provider) || 'dicebear')
  const [style, setStyle] = useState(searchParams.get('style') || 'initials')
  const [size, setSize] = useState(256)
  const [isCircle, setIsCircle] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const getAvatarUrl = useCallback(() => {
    if (provider === 'dicebear') {
      return `https://api.dicebear.com/7.x/${style}/svg?seed=${encodeURIComponent(name)}`
    } else if (provider === 'ui-avatars') {
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=${size}`
    } else if (provider === 'robohash') {
      return `https://robohash.org/${encodeURIComponent(name)}?size=${size}x${size}`
    }
    return ''
  }, [provider, style, name, size])

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(getAvatarUrl())
    toast.success('URL copied to clipboard!')
  }

  const handleCopyCode = () => {
    const code = `// React Component
export function Avatar({ name, size = ${size} }: { name: string; size?: number }) {
  const url = \`https://api.dicebear.com/7.x/${style}/svg?seed=\${encodeURIComponent(name)}\`;
  return (
    <img
      src={url}
      alt={\`Avatar for \${name}\`}
      width={size}
      height={size}
      style={{ borderRadius: '${isCircle ? '50%' : '4px'}' }}
    />
  );
}

// Usage:
// <Avatar name="John Doe" size={${size}} />`
    navigator.clipboard.writeText(code)
    toast.success('Code copied to clipboard!')
  }

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(AI_PROMPT)
    toast.success('Prompt copied! Paste into Claude, Cursor, Windsurf or any AI tool')
  }

  const handleDownload = async () => {
    try {
      const response = await fetch(getAvatarUrl())
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `avatar-${name}.svg`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
      toast.success('Avatar downloaded!')
    } catch {
      toast.error('Failed to download avatar')
    }
  }

  const handleRegenerate = () => {
    const randomSeed = Math.random().toString(36).substring(7)
    setName(randomSeed.charAt(0).toUpperCase() + randomSeed.slice(1))
  }

  // Update URL params
  useEffect(() => {
    const params = new URLSearchParams()
    params.set('name', name)
    params.set('provider', provider)
    params.set('style', style)
    window.history.replaceState({}, '', `?${params.toString()}`)
  }, [name, provider, style])

  const avatarUrl = getAvatarUrl()

  return (
    <section id="playground" className="border-b border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-8">
          <div>
            <div className="text-sm font-mono text-muted-foreground">// playground</div>
            <h2 className="text-4xl font-bold">Generate Your Avatar</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left: Controls */}
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium mb-2">Enter a name or username</label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="h-10"
                />
              </div>

              {/* Provider Tabs */}
              <div>
                <label className="block text-sm font-medium mb-3">Provider</label>
                <Tabs value={provider} onValueChange={(v) => setProvider(v as Provider)}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="dicebear">DiceBear</TabsTrigger>
                    <TabsTrigger value="ui-avatars">UI Avatars</TabsTrigger>
                    <TabsTrigger value="robohash">RoboHash</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Style Picker (DiceBear only) */}
              {provider === 'dicebear' && (
                <div>
                  <label className="block text-sm font-medium mb-3">Style</label>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {DICEBEAR_STYLES.map((s) => (
                      <button
                        key={s}
                        onClick={() => setStyle(s)}
                        className={`rounded-lg border px-3 py-2 text-xs font-medium transition-all ${
                          style === s
                            ? 'border-foreground bg-foreground text-background'
                            : 'border-border hover:border-foreground'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Slider */}
              <div>
                <label className="block text-sm font-medium mb-3">Size: {size}px</label>
                <Slider
                  value={[size]}
                  onValueChange={(value) => setSize(value[0])}
                  min={64}
                  max={256}
                  step={8}
                  className="w-full"
                />
              </div>

              {/* Shape Toggle */}
              <div>
                <label className="block text-sm font-medium mb-3">Shape</label>
                <div className="flex gap-2">
                  <Toggle
                    pressed={isCircle}
                    onPressedChange={setIsCircle}
                    className={`px-4 py-2 ${isCircle ? 'bg-foreground text-background' : 'border border-border'}`}
                  >
                    Circle
                  </Toggle>
                  <Toggle
                    pressed={!isCircle}
                    onPressedChange={(v) => setIsCircle(!v)}
                    className={`px-4 py-2 ${!isCircle ? 'bg-foreground text-background' : 'border border-border'}`}
                  >
                    Square
                  </Toggle>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4">
                <Button onClick={handleRegenerate} className="w-full bg-black text-white dark:bg-white dark:text-black rounded-xl py-3 hover:opacity-80 transition">
                  Regenerate
                </Button>
                <Button onClick={handleCopyUrl} variant="outline" className="w-full justify-center">
                  <Copy className="mr-2 h-4 w-4" />
                  Copy URL
                </Button>
                <Button onClick={handleCopyCode} variant="outline" className="w-full justify-center">
                  {'</>'}  Copy Code
                </Button>
                <Button onClick={handleCopyPrompt} variant="outline" className="w-full justify-center">
                  <Zap className="mr-2 h-4 w-4" />
                  Copy AI Prompt
                </Button>
                <Button onClick={handleDownload} variant="outline" className="w-full justify-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download SVG
                </Button>
              </div>
            </div>

            {/* Right: Preview */}
            <div className="flex flex-col items-center justify-center gap-6">
              <Card className="flex min-h-80 w-full max-w-sm items-center justify-center rounded-xl border-2 border-border bg-card">
                {isLoading ? (
                  <Skeleton className="h-64 w-64 rounded-full" />
                ) : (
                  <img
                    src={avatarUrl}
                    alt={`Avatar for ${name}`}
                    width={size}
                    height={size}
                    style={{
                      borderRadius: isCircle ? '50%' : '8px',
                    }}
                    onLoad={() => setIsLoading(false)}
                    onLoadStart={() => setIsLoading(true)}
                  />
                )}
              </Card>
              <div className="text-center space-y-3">
                <div className="text-lg font-medium">{name}</div>
                <div className="flex gap-2 justify-center flex-wrap">
                  <Badge variant="outline">{provider}</Badge>
                  {provider === 'dicebear' && <Badge variant="outline">{style}</Badge>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
