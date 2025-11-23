import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar, Users, Palette, CheckCircle2 } from 'lucide-react'

const projectData: Record<string, any> = {
  'luxury-hotel-lobby': {
    title: 'Luxury Hotel Lobby',
    category: 'Hospitality',
    location: 'Mumbai, India',
    timeline: '8 weeks',
    year: '2024',
    client: 'Premium Hospitality Group',
    tagline: 'A stunning transformation showcasing timeless elegance.',
    challenge: 'Creating a luxurious and welcoming atmosphere for a 5-star hotel lobby required careful selection of premium materials and expert craftsmanship. The project presented unique challenges in maintaining the hotel\'s daily operations while executing large-scale surface work, demanding precise coordination and meticulous attention to detail throughout the eight-week timeline.',
    solution: 'We implemented a phased construction approach, allowing the hotel to remain operational during the transformation. Our team carefully selected and applied premium materials that aligned perfectly with the property\'s luxury positioning. By utilizing advanced application techniques and working during off-peak hours, we achieved exceptional results without disrupting guest experiences.',
    materials: [
      'Calacatta Gold Marble',
      'High-Gloss Decorative Paint',
      'Premium Venetian Plaster',
      'Gold-Tint Wall Coating',
      'Sustainable Eco-Friendly Sealers'
    ],
    features: [
      'High-traffic durability finish',
      'Luxury gold accents',
      'Seamless marble textures',
      'Enhanced ambient lighting',
      'Stain-resistant coating',
      'Sustainable eco materials'
    ],
    testimonial: {
      quote: '"Contemporary Solutions transformed our vision into reality. The craftsmanship and attention to detail exceeded our expectations. Our lobby has become a signature feature of our hotel."',
      author: 'Ramesh K. Mehtani',
      position: 'General Manager'
    },
    images: {
      hero: '/luxury-villa-interior-coating.jpg',
      gallery: [
        '/modern-interior-design-luxury.jpg',
        '/professional-wall-painting-texture.jpg',
        '/textured-wall-finish.jpg',
        '/decorative-wall-painting.png'
      ]
    },
    stats: [
      { icon: 'Ruler', label: 'Project Area', value: '5,000 sq ft' },
      { icon: 'Clock', label: 'Duration', value: '8 weeks' },
      { icon: 'Users', label: 'Team Size', value: '12 members' },
      { icon: 'Award', label: 'Client Rating', value: '5/5 stars' }
    ]
  },
  'modern-villa-residence': {
    title: 'Modern Villa Residence',
    category: 'Residential',
    location: 'Delhi, India',
    timeline: '6 weeks',
    year: '2024',
    client: 'Private Residence',
    tagline: 'Contemporary elegance meets functional design.',
    challenge: 'The homeowners desired a modern aesthetic that balanced bold design statements with comfortable living spaces. Achieving uniform textures across large open-plan areas while incorporating unique accent walls required innovative techniques and precise color matching.',
    solution: 'Our design team collaborated closely with the homeowners to develop a cohesive color palette and texture scheme. We utilized advanced coating technologies to ensure consistent finishes throughout the expansive spaces, while creating dramatic focal points through specialized texture applications and complementary paint selections.',
    materials: [
      'Premium Textured Coating',
      'Eco-Friendly Wall Paint',
      'Decorative Stucco Finish',
      'Matte Designer Surfaces'
    ],
    features: [
      'Open-plan flow design',
      'Statement accent walls',
      'Low-VOC materials',
      'Easy maintenance surfaces',
      'Modern color palette',
      'Durable high-traffic finish'
    ],
    testimonial: {
      quote: '"The transformation of our villa exceeded all expectations. The team was professional, efficient, and truly understood our vision."',
      author: 'Priya Sharma',
      position: 'Homeowner'
    },
    images: {
      hero: '/modern-interior-design-luxury.jpg',
      gallery: [
        '/interior-wall-texture-design.jpg',
        '/professional-wall-painting-texture.jpg',
        '/modern-wall-coating-texture.jpg',
        '/textured-wall-finish.jpg'
      ]
    },
    stats: [
      { icon: 'Ruler', label: 'Project Area', value: '8,000 sq ft' },
      { icon: 'Clock', label: 'Duration', value: '6 weeks' },
      { icon: 'Users', label: 'Team Size', value: '8 members' },
      { icon: 'Award', label: 'Client Rating', value: '5/5 stars' }
    ]
  },
  'corporate-headquarters': {
    title: 'Corporate Headquarters',
    category: 'Commercial',
    location: 'Bangalore, India',
    timeline: '10 weeks',
    year: '2024',
    client: 'Tech Innovations Ltd.',
    tagline: 'Modern workspace design that inspires innovation.',
    challenge: 'Creating a professional yet inspiring workspace for a fast-growing tech company while meeting tight deadlines and coordinating with multiple stakeholders presented unique logistical challenges.',
    solution: 'We developed a comprehensive project timeline with clear milestones and implemented a modular approach that allowed different areas to be completed sequentially without disrupting ongoing business operations.',
    materials: [
      'Commercial Grade Paint',
      'Anti-Microbial Coating',
      'Acoustic Wall Panels',
      'High-Performance Sealers'
    ],
    features: [
      'Brand color integration',
      'Acoustic optimization',
      'Easy-clean surfaces',
      'Modern aesthetic',
      'Durable commercial finish',
      'Low maintenance requirements'
    ],
    testimonial: {
      quote: '"The team delivered exceptional quality on time and within budget. Our new office space perfectly reflects our company culture."',
      author: 'Anjali Verma',
      position: 'Operations Director'
    },
    images: {
      hero: '/modern-office-wall-finish.jpg',
      gallery: [
        '/luxury-villa-interior-coating.jpg',
        '/modern-interior-design-luxury.jpg',
        '/professional-wall-painting-texture.jpg',
        '/textured-wall-finish.jpg'
      ]
    },
    stats: [
      { icon: 'Ruler', label: 'Project Area', value: '15,000 sq ft' },
      { icon: 'Clock', label: 'Duration', value: '10 weeks' },
      { icon: 'Users', label: 'Team Size', value: '15 members' },
      { icon: 'Award', label: 'Client Rating', value: '5/5 stars' }
    ]
  },
  'boutique-restaurant': {
    title: 'Boutique Restaurant',
    category: 'Hospitality',
    location: 'Pune, India',
    timeline: '5 weeks',
    year: '2023',
    client: 'Gourmet Dining Co.',
    tagline: 'Creating an unforgettable dining atmosphere.',
    challenge: 'Designing surfaces that could withstand high humidity from kitchen areas while maintaining an upscale aesthetic required specialized materials and application techniques.',
    solution: 'Our team selected moisture-resistant materials and applied specialized coatings designed for hospitality environments, ensuring both durability and visual appeal.',
    materials: [
      'Moisture-Resistant Paint',
      'Decorative Textured Finish',
      'Food-Safe Coatings',
      'Easy-Clean Wall Surfaces'
    ],
    features: [
      'Humidity resistant',
      'Easy maintenance',
      'Warm ambiance',
      'Stain resistant',
      'Food-safe materials',
      'Elegant finish'
    ],
    testimonial: {
      quote: '"The surface solutions have held up beautifully in our demanding restaurant environment while maintaining their elegant appearance."',
      author: 'Chef Vikram Patel',
      position: 'Owner & Head Chef'
    },
    images: {
      hero: '/boutique-hotel-wall-texture.jpg',
      gallery: [
        '/interior-wall-texture-design.jpg',
        '/modern-wall-coating-texture.jpg',
        '/decorative-wall-painting.png',
        '/professional-wall-painting-texture.jpg'
      ]
    },
    stats: [
      { icon: 'Ruler', label: 'Project Area', value: '3,500 sq ft' },
      { icon: 'Clock', label: 'Duration', value: '5 weeks' },
      { icon: 'Users', label: 'Team Size', value: '8 members' },
      { icon: 'Award', label: 'Client Rating', value: '5/5 stars' }
    ]
  },
  'penthouse-suite': {
    title: 'Penthouse Suite',
    category: 'Residential',
    location: 'Gurgaon, India',
    timeline: '7 weeks',
    year: '2023',
    client: 'Private Client',
    tagline: 'Luxury living with breathtaking finishes.',
    challenge: 'Working at height with floor-to-ceiling windows and creating seamless transitions between different surface types while maintaining pristine cleanliness standards.',
    solution: 'We employed specialized equipment for high-altitude work and implemented rigorous cleanliness protocols to protect the client\'s furnishings and flooring.',
    materials: [
      'Luxury Venetian Plaster',
      'Metallic Accent Coatings',
      'High-End Designer Paint',
      'Premium Sealers'
    ],
    features: [
      'Luxury finishes',
      'Seamless transitions',
      'Custom color matching',
      'High-altitude application',
      'Protected adjacent surfaces',
      'Premium materials'
    ],
    testimonial: {
      quote: '"Every detail was executed flawlessly. The team\'s professionalism and attention to detail made the entire process stress-free."',
      author: 'Arjun Malhotra',
      position: 'Homeowner'
    },
    images: {
      hero: '/luxury-villa-interior-coating.jpg',
      gallery: [
        '/modern-interior-design-luxury.jpg',
        '/textured-wall-finish.jpg',
        '/professional-wall-painting-texture.jpg',
        '/interior-wall-texture-design.jpg'
      ]
    },
    stats: [
      { icon: 'Ruler', label: 'Project Area', value: '6,500 sq ft' },
      { icon: 'Clock', label: 'Duration', value: '7 weeks' },
      { icon: 'Users', label: 'Team Size', value: '10 members' },
      { icon: 'Award', label: 'Client Rating', value: '5/5 stars' }
    ]
  },
  'retail-flagship-store': {
    title: 'Retail Flagship Store',
    category: 'Commercial',
    location: 'Chennai, India',
    timeline: '6 weeks',
    year: '2023',
    client: 'Fashion Retail Brand',
    tagline: 'Brand experience through surface design.',
    challenge: 'Creating brand-aligned surfaces that could withstand high foot traffic while maintaining visual appeal required careful material selection and expert application.',
    solution: 'We developed a custom color palette matching brand guidelines and applied commercial-grade materials designed for retail environments.',
    materials: [
      'Commercial Wall Paint',
      'High-Traffic Coating',
      'Brand-Matched Colors',
      'Scratch-Resistant Finish'
    ],
    features: [
      'High-traffic durability',
      'Brand color accuracy',
      'Easy maintenance',
      'Quick turnaround',
      'Minimal disruption',
      'Long-lasting finish'
    ],
    testimonial: {
      quote: '"The store looks incredible and the surfaces have proven extremely durable during our busy seasons."',
      author: 'Neha Kapoor',
      position: 'Store Manager'
    },
    images: {
      hero: '/modern-office-wall-finish.jpg',
      gallery: [
        '/boutique-hotel-wall-texture.jpg',
        '/modern-wall-coating-texture.jpg',
        '/decorative-wall-painting.png',
        '/textured-wall-finish.jpg'
      ]
    },
    stats: [
      { icon: 'Ruler', label: 'Project Area', value: '4,000 sq ft' },
      { icon: 'Clock', label: 'Duration', value: '6 weeks' },
      { icon: 'Users', label: 'Team Size', value: '9 members' },
      { icon: 'Award', label: 'Client Rating', value: '5/5 stars' }
    ]
  },
  'spa-wellness-center': {
    title: 'Spa & Wellness Center',
    category: 'Hospitality',
    location: 'Goa, India',
    timeline: '5 weeks',
    year: '2023',
    client: 'Serenity Wellness',
    tagline: 'Tranquil surfaces for ultimate relaxation.',
    challenge: 'Creating calming, spa-appropriate finishes that could handle moisture and frequent cleaning while maintaining a serene aesthetic.',
    solution: 'We selected moisture-resistant, easy-to-clean materials in soothing colors and applied specialized coatings perfect for wellness environments.',
    materials: [
      'Moisture-Resistant Coating',
      'Calming Neutral Paints',
      'Anti-Microbial Finishes',
      'Easy-Clean Surfaces'
    ],
    features: [
      'Moisture resistant',
      'Calming color palette',
      'Anti-microbial properties',
      'Easy to sanitize',
      'Durable finish',
      'Wellness-appropriate'
    ],
    testimonial: {
      quote: '"The finishes create exactly the tranquil atmosphere we envisioned. Clients consistently comment on the calming environment."',
      author: 'Dr. Meera Joshi',
      position: 'Wellness Director'
    },
    images: {
      hero: '/textured-wall-finish.jpg',
      gallery: [
        '/interior-wall-texture-design.jpg',
        '/professional-wall-painting-texture.jpg',
        '/modern-wall-coating-texture.jpg',
        '/decorative-wall-painting.png'
      ]
    },
    stats: [
      { icon: 'Ruler', label: 'Project Area', value: '3,000 sq ft' },
      { icon: 'Clock', label: 'Duration', value: '5 weeks' },
      { icon: 'Users', label: 'Team Size', value: '7 members' },
      { icon: 'Award', label: 'Client Rating', value: '5/5 stars' }
    ]
  },
  'historic-restoration': {
    title: 'Historic Restoration',
    category: 'Hospitality',
    location: 'Jaipur, India',
    timeline: '12 weeks',
    year: '2023',
    client: 'Heritage Hotel Group',
    tagline: 'Preserving history with modern techniques.',
    challenge: 'Restoring historic surfaces while respecting the building\'s heritage and using period-appropriate techniques required specialized knowledge and materials.',
    solution: 'Our team researched historical finishes and collaborated with conservation experts to develop restoration techniques that honored the building\'s legacy.',
    materials: [
      'Traditional Lime Plaster',
      'Heritage Paint Formulations',
      'Conservation-Grade Sealers',
      'Period-Appropriate Finishes'
    ],
    features: [
      'Heritage preservation',
      'Period-accurate colors',
      'Traditional techniques',
      'Modern durability',
      'Expert restoration',
      'Conservation standards'
    ],
    testimonial: {
      quote: '"Contemporary Solutions brought our historic property back to its former glory while ensuring modern durability standards."',
      author: 'Maharaja Ranjit Singh',
      position: 'Heritage Property Owner'
    },
    images: {
      hero: '/boutique-hotel-wall-texture.jpg',
      gallery: [
        '/luxury-villa-interior-coating.jpg',
        '/interior-wall-texture-design.jpg',
        '/decorative-wall-painting.png',
        '/professional-wall-painting-texture.jpg'
      ]
    },
    stats: [
      { icon: 'Ruler', label: 'Project Area', value: '10,000 sq ft' },
      { icon: 'Clock', label: 'Duration', value: '12 weeks' },
      { icon: 'Users', label: 'Team Size', value: '14 members' },
      { icon: 'Award', label: 'Client Rating', value: '5/5 stars' }
    ]
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params
  const project = projectData[projectId]

  if (!project) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen pt-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16">
              <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
              <Button asChild>
                <Link href="/works">Back to Works</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Image Collage */}
        <section className="pt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/works">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            {/* Large hero image */}
            <div className="relative h-[400px] sm:h-[500px] rounded-lg overflow-hidden watermarked mb-4">
              <img
                src={project.images.hero || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail gallery strip */}
            <div className="grid grid-cols-4 gap-4">
              {project.images.gallery.map((image: string, index: number) => (
                <div
                  key={index}
                  className="relative h-32 rounded-lg overflow-hidden watermarked cursor-pointer group"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-12">
              {/* Title and Basic Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded">
                    {project.category}
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground italic">
                  {project.tagline}
                </p>
              </div>

              {/* Project Info Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-accent/10 rounded-lg border border-border">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Client</p>
                  <p className="font-semibold text-foreground">{project.client}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Timeline</p>
                  <p className="font-semibold text-foreground">{project.timeline}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Year</p>
                  <p className="font-semibold text-foreground flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {project.year}
                  </p>
                </div>
              </div>

              {/* The Challenge */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Our Solution */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Our Solution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Materials Used */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Materials Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.materials.map((material: string, index: number) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-md text-sm"
                    >
                      {material}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Key Features</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-lg space-y-4">
                  <p className="text-lg text-foreground italic leading-relaxed">
                    {project.testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">
                      — {project.testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {project.testimonial.position}
                    </p>
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <div className="pt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">View Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
