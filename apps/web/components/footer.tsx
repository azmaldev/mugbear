'use client'

import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-lg font-bold">
            <img src="/logo.png" alt="MugBear" className="h-8 w-8" />
            MugBear
          </div>

          <p className="text-muted-foreground">
            Free and open source. Built for developers.
          </p>

          <div className="flex gap-2 flex-wrap">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </Link>
            <Link href="https://npmjs.com/package/mugbear" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="gap-2">
                npm
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="gap-2">
                Report Issue
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <Separator />

          <div className="text-sm text-muted-foreground">
            MIT License
          </div>
        </div>
      </div>
    </footer>
  )
}
