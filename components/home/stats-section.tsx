'use client'

import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Users, Award, Briefcase } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    value: 50,
    suffix: 'M+',
    label: 'Square Feet Completed',
    color: 'text-blue-500'
  },
  {
    icon: Users,
    value: 14,
    suffix: '+',
    label: 'Years of Experience',
    color: 'text-indigo-500'
  },
  {
    icon: Briefcase,
    value: 1000,
    suffix: '+',
    label: 'Projects Delivered',
    color: 'text-cyan-500'
  },
  {
    icon: Award,
    value: 500,
    suffix: '+',
    label: 'Happy Clients',
    color: 'text-blue-600'
  }
]

function AnimatedCounter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          const startTime = Date.now()
          const endValue = value

          const updateCounter = () => {
            const now = Date.now()
            const progress = Math.min((now - startTime) / duration, 1)
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const currentValue = Math.floor(easeOutQuart * endValue)
            
            setCount(currentValue)

            if (progress < 1) {
              requestAnimationFrame(updateCounter)
            } else {
              setCount(endValue)
            }
          }

          requestAnimationFrame(updateCounter)
        }
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [value, duration, hasAnimated])

  return (
    <div ref={counterRef} className="text-5xl sm:text-6xl font-bold">
      {count}{suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Our Impact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over a decade of excellence delivering quality surface solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-xl p-8 text-center space-y-4 hover:shadow-xl hover:border-primary transition-all duration-300"
              >
                <div className="flex justify-center">
                  <div className={`${stat.color} p-4 bg-primary/10 rounded-full`}>
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-primary">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
