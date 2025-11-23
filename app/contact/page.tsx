import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ContactQuickForm } from '@/components/home/contact-quick-form'

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get in touch for a free consultation and quote
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactQuickForm />
      </main>
      <Footer />
    </>
  )
}
