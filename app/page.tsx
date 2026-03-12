'use client'

import { Suspense } from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Playground } from '@/components/playground'
import { CodeSnippets } from '@/components/code-snippets'
import { Documentation } from '@/components/documentation'
import { NpmSection } from '@/components/npm-section'
import { WorksWith } from '@/components/works-with'
import { HowItWorks } from '@/components/how-it-works'
import { ProviderCredits } from '@/components/provider-credits'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-96" />}>
        <Playground />
      </Suspense>
      <CodeSnippets />
      <Documentation />
      <NpmSection />
      <WorksWith />
      <HowItWorks />
      <ProviderCredits />
      <Footer />
    </main>
  )
}
