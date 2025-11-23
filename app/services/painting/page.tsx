import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProcessTimeline } from '@/components/services/process-timeline'
import { ServicesFAQ } from '@/components/services/services-faq'
import { FileSearch, Brush, Droplets, Shield, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const processSteps = [
  {
    title: 'Color Consultation',
    description: 'Expert color selection and material recommendations tailored to your space and preferences.',
    icon: 'FileSearch'
  },
  {
    title: 'Surface Preparation',
    description: 'Thorough cleaning, repairs, and priming for optimal paint adhesion and finish.',
    icon: 'Brush'
  },
  {
    title: 'Waterproofing Application',
    description: 'Advanced waterproofing systems applied to prevent moisture damage and ensure longevity.',
    icon: 'Droplets'
  },
  {
    title: 'Premium Painting',
    description: 'Professional application of high-quality paints with attention to detail and precision.',
    icon: 'Shield'
  },
  {
    title: 'Final Inspection',
    description: 'Thorough quality check and client approval ensuring complete satisfaction.',
    icon: 'CheckCircle2'
  }
]

export default function WallPaintingPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
                Wall Painting <span className="text-primary">& Waterproofing</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Expert painting services with advanced waterproofing solutions for lasting protection
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Transform your spaces with our professional wall painting and waterproofing services. 
                We combine aesthetic excellence with practical protection, using premium paints and 
                advanced waterproofing systems.
              </p>
              <p>
                Our experienced team ensures flawless application, whether it's a single room refresh 
                or a complete property makeover. We protect your investment with comprehensive waterproofing 
                that stands up to all weather conditions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Project Gallery</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="relative h-64 rounded-xl overflow-hidden watermarked group">
                  <img
                    src="/professional-wall-painting-texture.jpg"
                    alt={`Painting Project ${i}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-bold text-foreground">Our Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional approach from consultation to completion
              </p>
            </div>
            <ProcessTimeline steps={processSteps} />
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">FAQ</h2>
              </div>
              <ServicesFAQ />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
