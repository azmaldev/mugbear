'use client'

import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/card'

interface StatProps {
  number: string
  label: string
}

function StatCard({ number, label }: StatProps) {
  const [displayNumber, setDisplayNumber] = useState('0')
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const numericValue = parseInt(number.replace(/\D/g, ''))
          const duration = 1000
          const steps = 60
          const stepValue = numericValue / steps
          let current = 0

          const interval = setInterval(() => {
            current += stepValue
            if (current >= numericValue) {
              setDisplayNumber(number)
              clearInterval(interval)
            } else {
              setDisplayNumber(Math.floor(current).toString())
            }
          }, duration / steps)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`stat-${label}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [number, label])

  return (
    <Card
      id={`stat-${label}`}
      className="border-border rounded-xl border p-6 text-center animate-fade-in-up"
    >
      <div className="text-4xl font-bold text-foreground">{displayNumber}</div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </Card>
  )
}

export function StatsBar() {
  return (
    <section className="border-b border-border px-4 py-16 sm:px-6 lg:px-8 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-3 gap-4 sm:gap-6">
          <StatCard number="4+" label="Providers" />
          <StatCard number="30+" label="Styles" />
          <StatCard number="100%" label="Free" />
        </div>
      </div>
    </section>
  )
}
