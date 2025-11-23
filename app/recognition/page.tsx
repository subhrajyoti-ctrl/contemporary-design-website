import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Award, Trophy, Medal, Star, Shield, Target } from 'lucide-react'

const awards = [
  {
    year: '2024',
    title: 'Excellence in Surface Solutions',
    organization: 'National Design Association',
    icon: Trophy,
    description: 'Recognized for outstanding innovation in surface coating and finishing techniques.'
  },
  {
    year: '2023',
    title: 'Best Commercial Project',
    organization: 'Industry Excellence Awards',
    icon: Award,
    description: 'Award for exceptional corporate office transformation project.'
  },
  {
    year: '2023',
    title: 'Quality Leadership Award',
    organization: 'Surface Solutions Council',
    icon: Medal,
    description: 'Honored for maintaining highest quality standards across all projects.'
  },
  {
    year: '2022',
    title: 'Sustainable Practices Recognition',
    organization: 'Green Building Federation',
    icon: Star,
    description: 'Acknowledged for commitment to environmentally responsible practices.'
  },
  {
    year: '2022',
    title: 'Customer Satisfaction Excellence',
    organization: 'Service Quality Institute',
    icon: Shield,
    description: 'Awarded for consistently exceeding client expectations.'
  },
  {
    year: '2021',
    title: 'Innovation in Design',
    organization: 'Interior Design Council',
    icon: Target,
    description: 'Recognized for pioneering new techniques in interior texturing.'
  }
]

const certifications = [
  'ISO 9001:2015 Quality Management',
  'LEED Certified Professional',
  'OSHA Safety Compliance',
  'Green Building Certification',
  'Professional Painting Contractor',
  'Waterproofing Specialist Certification'
]

const achievements = [
  {
    metric: '500+',
    label: 'Happy Clients',
    description: 'Satisfied clients across all sectors'
  },
  {
    metric: '1000+',
    label: 'Projects Completed',
    description: 'Successfully delivered projects'
  },
  {
    metric: '50M+',
    label: 'Sq. Ft. Covered',
    description: 'Total area transformed'
  },
  {
    metric: '40+',
    label: 'Years Experience',
    description: 'Decades of industry expertise'
  }
]

export default function RecognitionPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
                Awards & <span className="text-primary">Recognition</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Celebrating four decades of excellence, innovation, and industry leadership
              </p>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Awards</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Industry recognition for our commitment to quality and excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {awards.map((award, index) => {
                const Icon = award.icon
                return (
                  <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-xl">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {award.year}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {award.title}
                        </h3>
                        <p className="text-sm text-primary font-medium mb-3">
                          {award.organization}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {award.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Achievements</h2>
              <p className="text-lg text-muted-foreground">
                Milestones that define our journey
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors text-center">
                  <CardContent className="p-8 space-y-3">
                    <div className="text-5xl font-bold text-primary">
                      {achievement.metric}
                    </div>
                    <div className="font-semibold text-foreground text-lg">
                      {achievement.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Certifications & Accreditations
                </h2>
                <p className="text-lg text-muted-foreground">
                  Maintaining the highest industry standards
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="border-2 hover:border-primary transition-colors">
                    <CardContent className="p-6 flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <p className="font-medium text-foreground text-sm">{cert}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Star className="h-12 w-12 text-primary" />
                </div>
              </div>
              <blockquote className="text-2xl font-medium text-foreground italic leading-relaxed">
                "Contemporary Solutions consistently delivers excellence. Their commitment to quality 
                and innovation has made them our preferred partner for all surface solution projects."
              </blockquote>
              <div className="pt-4">
                <p className="font-semibold text-foreground">Industry Leaders Magazine</p>
                <p className="text-sm text-muted-foreground">2024 Review</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
