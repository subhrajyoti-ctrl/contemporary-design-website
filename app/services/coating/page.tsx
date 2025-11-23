import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProcessTimeline } from '@/components/services/process-timeline'
import { ServicesFAQ } from '@/components/services/services-faq'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const processSteps = [
  {
    title: 'Surface Assessment',
    description: 'Thorough inspection and analysis of the surface condition, identifying any repairs or preparation needed.',
    icon: 'ClipboardCheck'
  },
  {
    title: 'Surface Preparation',
    description: 'Professional cleaning, repairs, and priming to ensure optimal adhesion and finish quality.',
    icon: 'Paintbrush2'
  },
  {
    title: 'Coating Application',
    description: 'Expert application of premium coatings using advanced techniques for uniform coverage.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Finishing & Protection',
    description: 'Final protective layers and quality checks to ensure durability and aesthetic perfection.',
    icon: 'Sparkles'
  },
  {
    title: 'Quality Inspection',
    description: 'Comprehensive inspection and client walkthrough to ensure complete satisfaction.',
    icon: 'CheckCircle2'
  }
]

const galleryImages = [
  '/modern-surface-coating-finish-macro.jpg',
  '/professional-wall-painting-texture.jpg',
  '/interior-wall-texture-design.jpg',
  '/modern-surface-coating-finish-macro.jpg',
  '/professional-wall-painting-texture.jpg',
  '/interior-wall-texture-design.jpg'
]

export default function SurfaceCoatingPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
                Surface Coating <span className="text-primary">& Finishing</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Premium protective coatings and finishing solutions for lasting beauty and durability
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Our surface coating and finishing services provide comprehensive protection and enhancement 
                for all types of surfaces. With over 40 years of experience, we use only premium materials 
                and advanced application techniques to ensure exceptional results.
              </p>
              <p>
                From protective industrial coatings to elegant residential finishes, our expert team delivers 
                solutions that combine durability with aesthetic excellence. We work with leading material 
                partners to offer the latest in coating technology.
              </p>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Project Gallery</h2>
              <p className="text-lg text-muted-foreground">Our recent coating and finishing projects</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-xl overflow-hidden watermarked group cursor-pointer"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-bold text-foreground">Our Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A systematic approach ensuring quality at every step
              </p>
            </div>
            <ProcessTimeline steps={processSteps} />
          </div>
        </section>

        {/* Service-specific FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">FAQ</h2>
                <p className="text-lg text-muted-foreground">
                  Common questions about surface coating services
                </p>
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
