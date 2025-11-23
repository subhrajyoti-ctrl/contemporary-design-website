import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { ServicesCarousel } from '@/components/home/services-carousel'
import { StatsSection } from '@/components/home/stats-section'
import { KidsRoomShowcase } from '@/components/home/kids-room-showcase'
import { FeaturedProducts } from '@/components/home/featured-products'
import { OurWorksSection } from '@/components/home/our-works-section'
import { ContactQuickForm } from '@/components/home/contact-quick-form'
import { TestimonialsSlider } from '@/components/home/testimonials-slider'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <ServicesCarousel />
        <StatsSection />
        <KidsRoomShowcase />
        <FeaturedProducts />
        <OurWorksSection />
        <ContactQuickForm />
        <TestimonialsSlider />
      </main>
      <Footer />
    </>
  )
}
