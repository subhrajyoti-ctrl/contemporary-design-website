import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const featuredWorks = [
  {
    id: 1,
    title: 'Luxury Villa Interior',
    category: 'Residential',
    image: '/luxury-villa-interior-coating.jpg',
  },
  {
    id: 2,
    title: 'Corporate Office',
    category: 'Commercial',
    image: '/modern-office-wall-finish.jpg',
  },
  {
    id: 3,
    title: 'Boutique Hotel',
    category: 'Hospitality',
    image: '/boutique-hotel-wall-texture.jpg',
  },
]

export function OurWorksSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Our Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of stunning projects that showcase our commitment to 
            excellence and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredWorks.map((work) => (
            <Link 
              key={work.id} 
              href={`/works/${work.id}`}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] block"
            >
              <Image
                src={work.image || "/placeholder.svg"}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium text-white/80 mb-1">{work.category}</p>
                <h3 className="text-xl font-bold">{work.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="text-base px-8 group">
            <Link href="/works">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
