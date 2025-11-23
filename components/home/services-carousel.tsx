'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Surface Coating & Finishing',
    description: 'Premium protective coatings and finishing solutions for lasting beauty and durability.',
    image: '/modern-surface-coating-finish-macro.jpg',
    href: '/services/coating'
  },
  {
    title: 'Wall Painting & Waterproofing',
    description: 'Expert painting services with advanced waterproofing solutions for all weather conditions.',
    image: '/professional-wall-painting-texture.jpg',
    href: '/services/painting'
  },
  {
    title: 'Interior & Exterior Textures',
    description: 'Stunning textured finishes that add depth and character to any space.',
    image: '/interior-wall-texture-design.jpg',
    href: '/services/textures'
  },
  {
    title: 'Interior Designing',
    description: 'Complete interior design solutions that blend aesthetics with functionality.',
    image: '/modern-interior-design-luxury.jpg',
    href: '/services/design'
  },
  {
    title: 'Design Consultancy',
    description: 'Expert design consultation to bring your vision to life with professional guidance.',
    image: '/architectural-design-consultation.jpg',
    href: '/services/consultancy'
  },
  {
    title: 'PMC & Contract',
    description: 'Comprehensive project management and contracting services for seamless execution.',
    image: '/project-management-construction.jpg',
    href: '/services/pmc'
  }
]

export function ServicesCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollPositionRef = useRef(0)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)

  useEffect(() => {
    if (!scrollRef.current || isPaused) return

    const scrollContainer = scrollRef.current
    const scrollSpeed = 1.5

    const scroll = () => {
      if (isPaused || isDraggingRef.current) return
      
      scrollPositionRef.current += scrollSpeed
      
      const singleSetWidth = scrollContainer.scrollWidth / 3
      if (scrollPositionRef.current >= singleSetWidth) {
        scrollPositionRef.current = 0
      }
      
      scrollContainer.scrollLeft = scrollPositionRef.current
    }

    const intervalId = setInterval(scroll, 30)
    return () => clearInterval(intervalId)
  }, [isPaused])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    isDraggingRef.current = true
    startXRef.current = e.pageX - scrollRef.current.offsetLeft
    scrollLeftRef.current = scrollRef.current.scrollLeft
    scrollRef.current.style.cursor = 'grabbing'
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startXRef.current) * 2
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk
    scrollPositionRef.current = scrollRef.current.scrollLeft
  }

  const handleMouseUp = () => {
    if (!scrollRef.current) return
    isDraggingRef.current = false
    scrollRef.current.style.cursor = 'grab'
  }

  const handleMouseLeave = () => {
    if (isDraggingRef.current && scrollRef.current) {
      isDraggingRef.current = false
      scrollRef.current.style.cursor = 'grab'
    }
    setIsPaused(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return
    isDraggingRef.current = true
    startXRef.current = e.touches[0].pageX - scrollRef.current.offsetLeft
    scrollLeftRef.current = scrollRef.current.scrollLeft
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft
    const walk = (x - startXRef.current) * 2
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk
    scrollPositionRef.current = scrollRef.current.scrollLeft
  }

  const handleTouchEnd = () => {
    isDraggingRef.current = false
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive surface and design solutions tailored to your needs
          </p>
        </div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="flex gap-6 overflow-x-hidden hide-scrollbar cursor-grab active:cursor-grabbing select-none"
        >
          {[...services, ...services, ...services].map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group flex-shrink-0 w-[350px]"
              draggable={false}
            >
              <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl h-full">
                <div className="relative h-48 overflow-hidden watermarked">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    draggable={false}
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm pt-2">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
