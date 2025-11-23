'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    image: '/professional-woman-portrait.png',
    content: 'Contemporary Solutions transformed our home with their exceptional surface finishing. The attention to detail and quality of work exceeded our expectations. Highly recommended!'
  },
  {
    name: 'Michael Chen',
    role: 'Interior Designer',
    image: '/professional-man-portrait.png',
    content: 'As a designer, I demand perfection. Contemporary Solutions consistently delivers outstanding results. Their texture work is unmatched in the industry.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Property Developer',
    image: '/confident-businesswoman.png',
    content: 'We have worked with Contemporary Solutions on multiple projects. Their reliability, expertise, and quality workmanship make them our go-to partner.'
  },
  {
    name: 'David Park',
    role: 'Corporate Facilities Manager',
    image: '/corporate-man-portrait.jpg',
    content: 'The waterproofing and coating work done by Contemporary Solutions has stood the test of time. Professional service from start to finish.'
  }
]

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Real experiences from satisfied customers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-8 sm:p-12">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
              </div>

              <div className="text-center space-y-6">
                <p className="text-xl text-foreground leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex flex-col items-center gap-3 pt-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
