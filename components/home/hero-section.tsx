'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const typewriterTexts = [
  'Premium Surface Solutions',
  'Expert Wall Finishing',
  'Interior Design Excellence',
  'Trusted for 40+ Years'
]

export function HeroSection() {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const currentText = typewriterTexts[textIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
          setTypingSpeed(100)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1))
          setTypingSpeed(50)
        } else {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % typewriterTexts.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, textIndex, isDeleting, typingSpeed])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Typewriter Effect */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              <span className="text-primary">Contemporary</span> Solutions
            </h1>
            <div className="h-16 sm:h-20 flex items-center justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-accent">
                {displayText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transforming spaces with innovative surface solutions, expert craftsmanship, 
            and unparalleled quality for over four decades.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild size="lg" className="text-base px-8 group">
              <Link href="/works">
                View Our Works
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
