import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProcessTimeline } from '@/components/services/process-timeline'
import { ServicesFAQ } from '@/components/services/services-faq'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const processSteps = [
  {
    title: 'Design Consultation',
    description: 'Understanding your vision and recommending suitable texture patterns and finishes.',
    icon: 'Lightbulb'
  },
  {
    title: 'Space Planning',
    description: 'Detailed measurement and planning for optimal texture placement and visual impact.',
    icon: 'Ruler'
  },
  {
    title: 'Material Selection',
    description: 'Choosing the perfect texture materials, colors, and techniques for your project.',
    icon: 'Palette'
  },
  {
    title: 'Expert Application',
    description: 'Skilled application of textures using specialized techniques for stunning results.',
    icon: 'Brush'
  },
  {
    title: 'Quality Assurance',
    description: 'Final inspection ensuring texture consistency and client satisfaction.',
    icon: 'CheckCircle2'
  }
]

export default function TexturesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
                Interior & Exterior <span className="text-primary">Textures</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Stunning textured finishes that add depth and character to any space
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Explore Texture Options</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Transform ordinary walls into extraordinary design elements with our expert texture 
                application services. From subtle elegance to bold statements, we create textures 
                that elevate your interior and exterior spaces.
              </p>
              <p>
                Our extensive portfolio includes classic and contemporary texture styles, all applied 
                with precision and artistry by our skilled craftsmen.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Texture Gallery</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="relative h-64 rounded-xl overflow-hidden watermarked group">
                  <img
                    src="/interior-wall-texture-design.jpg"
                    alt={`Texture ${i}`}
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
            </div>
            <ProcessTimeline steps={processSteps} />
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <ServicesFAQ />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
