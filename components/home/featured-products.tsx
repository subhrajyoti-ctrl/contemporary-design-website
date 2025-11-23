import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                Featured Products
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover our premium collection of surface solutions and finishes that bring 
                elegance and durability to every space. From innovative coatings to artistic 
                textures, each product is crafted with precision and care.
              </p>
            </div>
            <Button asChild size="lg" className="text-base px-8 group">
              <Link href="/works">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Right Side - Image Collage */}
          <div className="grid grid-cols-2 gap-4 h-[600px]">
            {/* Large Image - Top Left */}
            <div className="relative rounded-lg overflow-hidden row-span-2">
              <Image
                src="/modern-wall-coating-texture.jpg"
                alt="Premium wall coating"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Top Right */}
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/textured-wall-finish.jpg"
                alt="Textured finish"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Bottom Right */}
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/decorative-wall-painting.png"
                alt="Decorative painting"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
