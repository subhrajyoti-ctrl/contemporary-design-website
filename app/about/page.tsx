import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Target, Award, Shield, Heart, Lightbulb, TrendingUp } from 'lucide-react'
import { StatsSection } from '@/components/home/stats-section'

const team = [
  {
    name: 'John Anderson',
    role: 'Founder & CEO',
    photo: '/corporate-man-portrait.jpg',
    bio: 'Visionary leader with 40+ years in the surface solutions industry.'
  },
  {
    name: 'Sarah Mitchell',
    role: 'Chief Design Officer',
    photo: '/professional-woman-portrait.png',
    bio: 'Award-winning designer specializing in luxury and residential projects.'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Operations',
    photo: '/professional-man-portrait.png',
    bio: 'Expert in project management and quality assurance.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Lead Interior Designer',
    photo: '/confident-businesswoman.png',
    bio: 'Creative specialist in contemporary interior solutions.'
  },
  {
    name: 'David Park',
    role: 'Technical Director',
    photo: '/corporate-man-portrait.jpg',
    bio: 'Technical expert in coatings and surface engineering.'
  },
  {
    name: 'Lisa Thompson',
    role: 'Client Relations Manager',
    photo: '/professional-woman-portrait.png',
    bio: 'Dedicated to ensuring exceptional client experiences.'
  }
]

const values = [
  {
    icon: Shield,
    title: 'Quality First',
    description: 'Uncompromising commitment to the highest quality standards in every project.'
  },
  {
    icon: Heart,
    title: 'Client Satisfaction',
    description: 'Building lasting relationships through exceptional service and results.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Embracing new technologies and techniques for better solutions.'
  },
  {
    icon: TrendingUp,
    title: 'Excellence',
    description: 'Continuous improvement and pursuit of perfection in our craft.'
  }
]

const journeyMilestones = [
  {
    year: '1985',
    yearLabel: '85',
    title: 'Foundation',
    description: 'Contemporary Solutions was founded with a vision to revolutionize surface design.'
  },
  {
    year: '1995',
    yearLabel: '95',
    title: 'Global Expansion',
    description: 'Expanded operations to serve clients across multiple continents.'
  },
  {
    year: '2005',
    yearLabel: '05',
    title: 'Innovation Leader',
    description: 'Launched proprietary surface treatment technologies and sustainable solutions.'
  },
  {
    year: '2015',
    yearLabel: '15',
    title: 'Digital Transformation',
    description: 'Integrated advanced digital design tools and project management systems.'
  },
  {
    year: '2025',
    yearLabel: '25',
    title: 'Future Ready',
    description: 'Leading the industry with AI-powered design solutions and eco-friendly materials.'
  }
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <section className="relative pt-32 pb-24 min-h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250927-WA0022-N7zBBhnvq181TgYvjKQN0Uj0Nf6bXM.jpg"
              alt="Contemporary Solutions Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
                About <span className="text-primary">Us</span>
              </h1>
              <p className="text-foreground leading-relaxed text-2xl">
                Over a decade of excellence in transforming spaces with innovative surface solutions
              </p>
            </div>
          </div>
        </section>

        <StatsSection />

        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                  Founder's <span className="text-primary">Note</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "When I started Contemporary Solutions over four decades ago, I had a simple dream: 
                  to create spaces that inspire and endure. Today, as I look back at thousands of 
                  transformed spaces and countless satisfied clients, I'm humbled by the journey."
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "Our success has always been rooted in three principles: unwavering quality, 
                  relentless innovation, and deep respect for our clients' visions. These values 
                  have guided us through challenges and opportunities alike, and they continue to 
                  drive us forward."
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "As we step into the future, our commitment remains unchanged. We will continue 
                  to push boundaries, embrace new technologies, and deliver excellence in every 
                  square foot we transform. Thank you for being part of our story."
                </p>
                <div className="pt-4">
                  <p className="text-xl font-bold text-foreground">Ankit Singhi </p>
                  <p className="text-primary">Founder & CEO</p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/founder-portrait.jpg"
                  alt="Founder John Anderson"
                  className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Vision */}
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading provider of innovative surface solutions, recognized globally 
                    for our commitment to quality, sustainability, and design excellence. We envision 
                    a future where every space we touch becomes a testament to superior craftsmanship 
                    and aesthetic brilliance.
                  </p>
                </CardContent>
              </Card>

              {/* Mission */}
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver exceptional surface and design solutions that transform spaces and 
                    exceed client expectations. We are committed to using premium materials, employing 
                    skilled professionals, and maintaining the highest standards of quality and service 
                    in every project we undertake.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* Our Values */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card key={index} className="border-2 hover:border-primary transition-colors text-center">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex justify-center">
                        <div className="p-4 bg-primary/10 rounded-full">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Our Journey</h2>
                <p className="text-lg text-muted-foreground">
                  Milestones that have shaped our evolution over four decades.
                </p>
              </div>

              <div className="space-y-12">
                {journeyMilestones.map((milestone, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                        {milestone.yearLabel}
                      </div>
                      {index < journeyMilestones.length - 1 && (
                        <div className="w-0.5 h-full bg-primary/20 mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-12">
                      <h3 className="text-3xl font-bold text-foreground mb-2">{milestone.year}</h3>
                      <h4 className="text-xl font-semibold text-primary mb-3">{milestone.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="h-8 w-8 text-primary" />
                <h2 className="text-4xl font-bold text-foreground">Our Team</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the experts behind our success
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-xl">
                  <CardContent className="p-6 text-center space-y-4">
                    <img
                      src={member.photo || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
