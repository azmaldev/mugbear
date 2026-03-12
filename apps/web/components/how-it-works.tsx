'use client'

import { Card } from '@/components/ui/card'
import { GlowingEffect } from "@/components/ui/glowing-effect"

const steps = [
  {
    number: '01',
    title: 'Type a name',
    description: 'Enter any name or username',
  },
  {
    number: '02',
    title: 'Pick a style',
    description: 'Choose from 30+ avatar styles across 4 providers',
  },
  {
    number: '03',
    title: 'Copy the code',
    description: 'Copy as HTML, React, Vue or as an AI prompt',
  },
]

export function HowItWorks() {
  return (
    <section className="border-b border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-center">Three Steps. That's It.</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                  variant="white"
                />
                <Card className="relative h-full border-2 border-border bg-card p-8 text-center space-y-4">
                  <div className="text-6xl font-bold text-muted-foreground/30">{step.number}</div>
                  <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
