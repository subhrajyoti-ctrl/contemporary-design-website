import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, ClipboardCheck, FileSearch, Paintbrush, Sparkles, Shield } from 'lucide-react'
import { ServicesFAQ } from '@/components/services/services-faq'

const services = [
  {
    title: 'Custom Surface Design',
    description: 'Transform surfaces with our bespoke design solutions tailored to your unique vision and requirements.',
    image: '/modern-surface-coating-finish-macro.jpg',
    href: '/services/coating',
    whatsIncluded: [
      'Personalized design consultation',
      'CAD and 3D modeling support',
      'Customized texture development',
      'Sample creation and approval'
    ],
    keyBenefits: [
      'Unique and one-of-a-kind designs',
      'Precise match with your vision',
      'Expert craftsmanship solutions'
    ]
  },
  {
    title: 'Premium Materials',
    description: 'We use the finest quality materials from leading global manufacturers for superior durability and aesthetics.',
    image: '/professional-wall-painting-texture.jpg',
    href: '/services/painting',
    whatsIncluded: [
      'Eco-friendly and low-VOC paints',
      'Engineered coatings and finishes',
      'Imported and sustainable options',
      'Specialized weather-resistant materials'
    ],
    keyBenefits: [
      'World-class finish and quality',
      'Extended material lifespan',
      'Health-safe and eco friendly'
    ]
  },
  {
    title: 'Architectural Finishes',
    description: 'Sophisticated finishes that elevate architecture, blending form with lasting functionality and beauty.',
    image: '/interior-wall-texture-design.jpg',
    href: '/services/textures',
    whatsIncluded: [
      'High-quality surface textures',
      'Decorative & textured finishes',
      'Luxury surface solutions',
      'Facade treatments'
    ],
    keyBenefits: [
      'Exceptional visual appeal',
      'Durable long-lasting results',
      'Seamless integration with architecture'
    ]
  },
  {
    title: 'Wall Fashion & Textures',
    description: 'Contemporary wall fashion solutions with designer textures that create stunning focal points.',
    image: '/interior-wall-texture-design.jpg',
    href: '/services/wall-fashion',
    whatsIncluded: [
      'Designer texture patterns',
      'Accent wall treatments',
      'Modern finish techniques',
      'Color consultation'
    ],
    keyBenefits: [
      'Trendy contemporary aesthetics',
      'Enhanced visual depth',
      'Personalized design elements'
    ]
  },
  {
    title: 'Interior Designing',
    description: 'Complete interior design solutions blending aesthetics with functionality from concept to completion.',
    image: '/modern-interior-design-luxury.jpg',
    href: '/services/design',
    whatsIncluded: [
      'Space planning & layout',
      '3D visualization & mockups',
      'Material & color selection',
      'Full turnkey execution'
    ],
    keyBenefits: [
      'Cohesive design vision',
      'Optimized space utilization',
      'End-to-end project management'
    ]
  },
  {
    title: 'Designing Consultancy',
    description: 'Expert design consultation bringing your vision to life with professional guidance and strategy.',
    image: '/architectural-design-consultation.jpg',
    href: '/services/consultancy',
    whatsIncluded: [
      'Design strategy sessions',
      'Material guidance',
      'Color scheme planning',
      'Expert recommendations'
    ],
    keyBenefits: [
      'Professional design direction',
      'Cost-effective solutions',
      'Informed decision making'
    ]
  },
  {
    title: 'Contract Services',
    description: 'Comprehensive contracting for residential and commercial projects with quality assurance and timely delivery.',
    image: '/project-management-construction.jpg',
    href: '/services/contract',
    whatsIncluded: [
      'Full project execution',
      'Quality control measures',
      'Timeline management',
      'Budget oversight'
    ],
    keyBenefits: [
      'Single point of responsibility',
      'Assured quality standards',
      'On-time project completion'
    ]
  },
  {
    title: 'Project Management Consultancy',
    description: 'Professional PMC services ensuring seamless execution, cost control, and quality standards throughout the project lifecycle.',
    image: '/project-management-construction.jpg',
    href: '/services/pmc',
    whatsIncluded: [
      'Project oversight & monitoring',
      'Cost management & control',
      'Quality assurance',
      'Vendor coordination'
    ],
    keyBenefits: [
      'Expert project governance',
      'Risk mitigation',
      'Optimized resource utilization'
    ]
  }
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive surface and design solutions tailored to transform your spaces with quality and excellence
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => {
                const isEven = index % 2 === 0
                return (
                  <div
                    key={index}
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                      isEven ? 'bg-primary/5' : 'bg-background'
                    } p-8 lg:p-12 rounded-2xl`}
                  >
                    {/* Image - Left on even, right on odd */}
                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative h-96 rounded-xl overflow-hidden shadow-xl watermarked">
                        <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content - Right on even, left on odd */}
                    <div className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        Service {index + 1}
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>

                      {/* What's Included */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">What's Included</h4>
                        <ul className="space-y-2">
                          {service.whatsIncluded.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Benefits */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Key Benefits</h4>
                        <ul className="space-y-2">
                          {service.keyBenefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm bg-primary/5 px-3 py-2 rounded-lg">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                              <span className="text-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link href={service.href}>
                        <Button size="lg" className="mt-4">
                          Know More
                        </Button>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                  Our <span className="text-primary">Process</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  A systematic approach ensuring quality and excellence at every step
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: '01',
                    icon: FileSearch,
                    title: 'Consultation & Assessment',
                    description: 'Understanding your requirements, site evaluation, and detailed project scope discussion'
                  },
                  {
                    step: '02',
                    icon: Paintbrush,
                    title: 'Design & Planning',
                    description: 'Creating customized solutions, material selection, and comprehensive project planning'
                  },
                  {
                    step: '03',
                    icon: ClipboardCheck,
                    title: 'Execution & Delivery',
                    description: 'Professional implementation with quality checks and timely project completion'
                  }
                ].map((process, index) => {
                  const Icon = process.icon
                  return (
                    <Card key={index} className="relative overflow-hidden border-2 hover:border-primary transition-colors">
                      <CardContent className="p-8 space-y-4">
                        <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5">
                          {process.step}
                        </div>
                        <div className="relative">
                          <div className="inline-flex p-4 bg-primary/10 rounded-xl">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-primary">Step {process.step}</div>
                          <h3 className="text-xl font-bold text-foreground">
                            {process.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {process.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>


        {/* FAQ Section */}
        <ServicesFAQ />
      </main>
      <Footer />
    </>
  )
}
