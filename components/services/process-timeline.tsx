'use client'

import { useEffect, useRef, useState } from 'react'
import { ClipboardCheck, Paintbrush2, ShieldCheck, Sparkles, CheckCircle2, FileSearch, Brush, Droplets, Shield, Lightbulb, Ruler, Palette, type LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  ClipboardCheck,
  Paintbrush2,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  FileSearch,
  Brush,
  Droplets,
  Shield,
  Lightbulb,
  Ruler,
  Palette,
}

interface ProcessStep {
  title: string
  description: string
  icon: string
}

interface ProcessTimelineProps {
  steps: ProcessStep[]
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(new Array(steps.length).fill(false))
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = stepsRef.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setTimeout(() => {
              setVisibleSteps((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 200)
          }
        },
        { threshold: 0.3 }
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [steps.length])

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        {/* Animated vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-muted" />
        <svg
          className="absolute left-8 top-0 bottom-0 w-0.5"
          style={{ overflow: 'visible' }}
        >
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="100%"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
            strokeDasharray="1000"
            strokeDashoffset={visibleSteps.filter(Boolean).length > 0 ? 0 : 1000}
            style={{
              transition: 'stroke-dashoffset 2s ease-out'
            }}
          />
        </svg>

        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon] || CheckCircle2
            return (
              <div
                key={index}
                ref={(el) => {
                  stepsRef.current[index] = el
                }}
                className={`relative pl-20 transition-all duration-700 ${
                  visibleSteps[index]
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8'
                }`}
              >
                {/* Icon Circle */}
                <div
                  className={`absolute left-0 w-16 h-16 rounded-full border-4 border-background flex items-center justify-center transition-all duration-500 ${
                    visibleSteps[index]
                      ? 'bg-primary scale-100'
                      : 'bg-muted scale-75'
                  }`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <div className="bg-card border-2 rounded-lg p-6 hover:border-primary transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-primary">
                          Step {index + 1}
                        </span>
                        <h3 className="text-xl font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
