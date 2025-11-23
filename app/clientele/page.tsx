import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Building2, Palette, Home, Briefcase, GraduationCap } from 'lucide-react'

const clientCategories = [
  {
    title: 'Companies',
    icon: Building2,
    description: 'Leading corporations trusting us with their facilities',
    clients: [
      { name: 'Tech Innovations Inc', logo: '/tech-company-logo.jpg', photo: '/corporate-building-logo.jpg' },
      { name: 'Global Solutions Corp', logo: '/corporate-building-logo.jpg', photo: '/tech-company-logo.jpg' },
      { name: 'Digital Dynamics', logo: '/tech-company-logo.jpg', photo: '/corporate-building-logo.jpg' },
      { name: 'Future Systems Ltd', logo: '/corporate-building-logo.jpg', photo: '/tech-company-logo.jpg' }
    ]
  },
  {
    title: 'Designers',
    icon: Palette,
    description: 'Renowned designers and architects we collaborate with',
    clients: [
      { name: 'Elite Design Studio', logo: '/design-studio-logo.png', photo: '/modern-interior-design-luxury.jpg' },
      { name: 'Modern Spaces Architecture', logo: '/design-studio-logo.png', photo: '/architectural-design-consultation.jpg' },
      { name: 'Creative Interiors Group', logo: '/design-studio-logo.png', photo: '/modern-interior-design-luxury.jpg' },
      { name: 'Urban Design Associates', logo: '/design-studio-logo.png', photo: '/architectural-design-consultation.jpg' }
    ]
  },
  {
    title: 'Personal Homes',
    icon: Home,
    description: 'Luxury residences and personal properties',
    clients: [
      { name: 'Beverly Hills Estate', logo: '/luxury-homes-logo.jpg', photo: '/modern-interior-design-luxury.jpg' },
      { name: 'Malibu Beach House', logo: '/luxury-homes-logo.jpg', photo: '/modern-surface-coating-finish-macro.jpg' },
      { name: 'Downtown Penthouse', logo: '/luxury-homes-logo.jpg', photo: '/professional-wall-painting-texture.jpg' },
      { name: 'Lakeside Villa', logo: '/luxury-homes-logo.jpg', photo: '/interior-wall-texture-design.jpg' }
    ]
  },
  {
    title: 'Corporates',
    icon: Briefcase,
    description: 'Corporate headquarters and office spaces',
    clients: [
      { name: 'Financial District Tower', logo: '/corporate-building-logo.jpg', photo: '/modern-interior-design-luxury.jpg' },
      { name: 'Tech Campus Hub', logo: '/tech-company-logo.jpg', photo: '/professional-wall-painting-texture.jpg' },
      { name: 'Business Park Center', logo: '/corporate-building-logo.jpg', photo: '/interior-wall-texture-design.jpg' },
      { name: 'Executive Plaza', logo: '/corporate-building-logo.jpg', photo: '/modern-surface-coating-finish-macro.jpg' }
    ]
  },
  {
    title: 'Universities',
    icon: GraduationCap,
    description: 'Educational institutions and academic facilities',
    clients: [
      { name: 'State University', logo: '/generic-university-logo.png', photo: '/modern-interior-design-luxury.jpg' },
      { name: 'Technical Institute', logo: '/generic-university-logo.png', photo: '/professional-wall-painting-texture.jpg' },
      { name: 'Community College', logo: '/generic-university-logo.png', photo: '/interior-wall-texture-design.jpg' },
      { name: 'Business School', logo: '/generic-university-logo.png', photo: '/architectural-design-consultation.jpg' }
    ]
  }
]

export default function ClientelePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
                Our <span className="text-primary">Clientele</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Proud to serve industry leaders, design professionals, and discerning clients across multiple sectors
              </p>
            </div>
          </div>
        </section>

        {/* Client Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            {clientCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <div key={categoryIndex}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.clients.map((client, clientIndex) => (
                      <Card
                        key={clientIndex}
                        className="border-2 hover:border-primary transition-all hover:shadow-xl group"
                      >
                        <CardContent className="p-0">
                          {/* Photo */}
                          <div className="relative h-48 overflow-hidden watermarked">
                            <img
                              src={client.photo || "/placeholder.svg"}
                              alt={client.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          
                          {/* Logo & Name */}
                          <div className="p-6 space-y-4">
                            <div className="h-16 flex items-center justify-center">
                              <img
                                src={client.logo || "/placeholder.svg"}
                                alt={`${client.name} logo`}
                                className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                              />
                            </div>
                            <h3 className="text-center font-semibold text-foreground group-hover:text-primary transition-colors">
                              {client.name}
                            </h3>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Join Our Growing List of Satisfied Clients
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience the quality and service that has made us the preferred choice for industry leaders
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Start Your Project
                </a>
                <a
                  href="/works"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
