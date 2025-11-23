import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const clients = [
  { name: 'Tech Corp', logo: '/tech-company-logo.jpg' },
  { name: 'Design Studio', logo: '/design-studio-logo.png' },
  { name: 'Real Estate Group', logo: '/real-estate-logo.png' },
  { name: 'Luxury Homes', logo: '/luxury-homes-logo.jpg' },
  { name: 'University', logo: '/generic-university-logo.png' },
  { name: 'Corporate Plaza', logo: '/corporate-building-logo.jpg' }
]

export function ClientsPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Trusted By Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proud to serve companies, designers, and institutions across multiple sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="max-w-full h-12 object-contain opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="group">
            <Link href="/clientele">
              View All Clients
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
