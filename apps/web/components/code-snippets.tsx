'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Copy } from 'lucide-react'
import { toast } from 'sonner'

const snippets = {
  html: `<!-- Simple HTML implementation -->
<img 
  src="https://api.dicebear.com/7.x/initials/svg?seed=John+Doe"
  alt="User Avatar"
  width="64" 
  height="64"
  style="border-radius: 50%;"
/>`,

  react: `// Install: npm install mugbear
// Or use the API directly:

interface AvatarProps {
  name: string;
  size?: number;
  style?: 'initials' | 'avataaars' | 'notionists' | 'thumbs';
}

export function Avatar({ name, size = 64, style = 'initials' }: AvatarProps) {
  const url = \`https://api.dicebear.com/7.x/\${style}/svg?seed=\${encodeURIComponent(name)}\`;
  
  return (
    <img
      src={url}
      alt={\`Avatar for \${name}\`}
      width={size}
      height={size}
      style={{ borderRadius: '50%' }}
    />
  );
}

// Usage:
// <Avatar name="John Doe" size={64} style="initials" />`,

  vue: `<!-- Vue 3 Component -->
<template>
  <img 
    :src="avatarUrl"
    :alt="\`Avatar for \${name}\`"
    :width="size"
    :height="size"
    :style="{ borderRadius: '50%' }"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  name: string
  size?: number
  style?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 64,
  style: 'initials'
})

const avatarUrl = computed(() => {
  return \`https://api.dicebear.com/7.x/\${props.style}/svg?seed=\${encodeURIComponent(props.name)}\`
})
</script>`,

  native: `// React Native
import { Image } from 'react-native'

interface AvatarProps {
  name: string
  size?: number
  style?: string
}

export function Avatar({ name, size = 64, style = 'initials' }: AvatarProps) {
  const url = \`https://api.dicebear.com/7.x/\${style}/svg?seed=\${encodeURIComponent(name)}\`;
  
  return (
    <Image
      source={{ uri: url }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
      }}
    />
  );
}`,
}

function CodeBlock({ code, language }: { code: string; language: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    toast.success('Code copied to clipboard!')
  }

  return (
    <div className="relative">
      <div className="rounded-lg border border-border bg-card p-4 font-mono text-sm text-foreground overflow-x-auto">
        <pre>{code}</pre>
      </div>
      <Button
        size="sm"
        variant="ghost"
        onClick={handleCopy}
        className="absolute right-2 top-2"
      >
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  )
}

function FrameworkIcon({ framework }: { framework: 'html' | 'react' | 'vue' | 'native' }) {
  if (framework === 'html') {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block mr-2">
        <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
      </svg>
    )
  }
  if (framework === 'react' || framework === 'native') {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block mr-2">
        <path fill="#61DAFB" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.81 2.01-1.085 2.964-.484-.15-.944-.317-1.375-.498-1.732-.74-2.852-1.708-2.852-2.476.005-.768 1.125-1.74 2.857-2.475.42-.18.88-.342 1.355-.493z" />
      </svg>
    )
  }
  if (framework === 'vue') {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block mr-2">
        <path fill="#4FC08D" d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" />
      </svg>
    )
  }
  return null
}

export function CodeSnippets() {
  return (
    <section id="implementation" className="border-b border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold">Implementation Code</h2>
            <p className="text-muted-foreground">Ready to paste into your project</p>
          </div>

          <Tabs defaultValue="react" className="w-full">
            <TabsList className="grid w-full grid-cols-4 overflow-x-auto whitespace-nowrap">
              <TabsTrigger value="html" className="whitespace-nowrap">
                <FrameworkIcon framework="html" />
                HTML
              </TabsTrigger>
              <TabsTrigger value="react" className="whitespace-nowrap">
                <FrameworkIcon framework="react" />
                React
              </TabsTrigger>
              <TabsTrigger value="vue" className="whitespace-nowrap">
                <FrameworkIcon framework="vue" />
                Vue
              </TabsTrigger>
              <TabsTrigger value="native" className="whitespace-nowrap">
                <FrameworkIcon framework="native" />
                React Native
              </TabsTrigger>
            </TabsList>

            <TabsContent value="html" className="mt-4">
              <CodeBlock code={snippets.html} language="html" />
            </TabsContent>

            <TabsContent value="react" className="mt-4">
              <CodeBlock code={snippets.react} language="typescript" />
            </TabsContent>

            <TabsContent value="vue" className="mt-4">
              <CodeBlock code={snippets.vue} language="typescript" />
            </TabsContent>

            <TabsContent value="native" className="mt-4">
              <CodeBlock code={snippets.native} language="typescript" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
