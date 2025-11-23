import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function KidsRoomShowcase() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-xl overflow-hidden watermarked">
                <img
                  src="/colorful-kids-room-interior-design.jpg"
                  alt="Kids Room Design 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden watermarked">
                <img
                  src="/playful-children-bedroom-decor.jpg"
                  alt="Kids Room Design 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-48 rounded-xl overflow-hidden watermarked">
                <img
                  src="/modern-kids-room-wall-paint.jpg"
                  alt="Kids Room Design 3"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden watermarked">
                <img
                  src="/creative-childrens-room-texture.jpg"
                  alt="Kids Room Design 4"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                Transform Your <span className="text-primary">Kids Spaces</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Create magical, inspiring environments where imagination thrives. Our specialized 
                kids room solutions combine vibrant colors, playful textures, and durable finishes 
                that stand up to active lifestyles while fostering creativity.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                'Safe, non-toxic finishes',
                'Vibrant, long-lasting colors',
                'Easy-to-clean surfaces',
                'Custom themes and designs'
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="group mt-6">
              <Link href="/works?category=kids-rooms">
                View Kids Room Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
