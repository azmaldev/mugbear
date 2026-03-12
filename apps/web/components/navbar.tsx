'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Github, Package } from 'lucide-react'

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="MugBear"
              className="h-8 w-auto"
            />
            <span className="text-lg font-bold">MugBear</span>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-lg"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <a
              href="https://github.com/azmaldev/mugbear"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="sm" className="rounded-lg">
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline ml-2">GitHub</span>
              </Button>
            </a>

            <a
              href="https://npmjs.com/package/mugbear"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="sm" className="rounded-lg">
                <Package className="h-4 w-4" />
                <span className="hidden sm:inline ml-2">npm</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
