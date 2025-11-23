'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

const categories = ['All', 'Commercial', 'Residential', 'Hospitality']

const projects = [
  {
    id: 'luxury-hotel-lobby',
    title: 'Luxury Hotel Lobby',
    category: 'Hospitality',
    description: 'Stunning marble finish featuring the California marble with intricate wall painting.',
    location: 'Mumbai, India',
    timeline: '8 weeks',
    image: '/luxury-villa-interior-coating.jpg'
  },
  {
    id: 'modern-villa-residence',
    title: 'Modern Villa Residence',
    category: 'Residential',
    description: 'Contemporary surface coating and textured walls for luxury living.',
    location: 'Delhi, India',
    timeline: '6 weeks',
    image: '/modern-interior-design-luxury.jpg'
  },
  {
    id: 'corporate-headquarters',
    title: 'Corporate Headquarters',
    category: 'Commercial',
    description: 'Professional office space with premium surface solutions.',
    location: 'Bangalore, India',
    timeline: '10 weeks',
    image: '/modern-office-wall-finish.jpg'
  },
  {
    id: 'boutique-restaurant',
    title: 'Boutique Restaurant',
    category: 'Hospitality',
    description: 'Elegant textures and custom finishes for fine dining ambiance.',
    location: 'Goa, India',
    timeline: '5 weeks',
    image: '/boutique-hotel-wall-texture.jpg'
  },
  {
    id: 'penthouse-suite',
    title: 'Penthouse Suite',
    category: 'Residential',
    description: 'Ultra-luxury residential surface treatment with gold accents.',
    location: 'Mumbai, India',
    timeline: '7 weeks',
    image: '/professional-wall-painting-texture.jpg'
  },
  {
    id: 'retail-flagship-store',
    title: 'Retail Flagship Store',
    category: 'Commercial',
    description: 'Eye-catching wall treatments for premium brand experience.',
    location: 'Delhi, India',
    timeline: '4 weeks',
    image: '/modern-wall-coating-texture.jpg'
  },
  {
    id: 'spa-wellness-center',
    title: 'Spa & Wellness Center',
    category: 'Hospitality',
    description: 'Calming textures and waterproof finishes for serene spaces.',
    location: 'Kerala, India',
    timeline: '6 weeks',
    image: '/textured-wall-finish.jpg'
  },
  {
    id: 'historic-renovation',
    title: 'Historic Renovation',
    category: 'Residential',
    description: 'Preserving heritage with modern surface protection techniques.',
    location: 'Jaipur, India',
    timeline: '12 weeks',
    image: '/interior-wall-texture-design.jpg'
  }
]

export default function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-sm text-white/80 font-medium tracking-wider uppercase">
                Our Work
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Featured Projects
              </h1>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Explore the pinnacle of design, showcasing breathtaking transformations and magically-detailed works.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-auto sm:min-w-[300px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search our works..."
                  className="w-full pl-10 pr-4 py-2 text-sm bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/works/${project.id}`}
                  className="group"
                >
                  <div className="relative h-80 rounded-lg overflow-hidden watermarked">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Gradient overlay with text at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                        {/* Category badges */}
                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded">
                            {project.category}
                          </span>
                          <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded flex items-center gap-1">
                            <span>{project.location}</span>
                          </span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold text-white group-hover:text-primary-foreground transition-colors">
                          {project.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-sm text-white/90 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                        
                        {/* Timeline */}
                        <p className="text-xs text-white/70">
                          Timeline: {project.timeline}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground">
                Let's create something exceptional together. Get in touch to discuss your vision.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
