'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a comprehensive range of services including surface coating & finishing, wall painting & waterproofing, interior & exterior textures, wall fashion textures, interior designing, design consultancy, contract services, and PMC (Project Management Consultancy).'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on scope and complexity. A typical residential room can take 3-5 days, while larger commercial projects may take several weeks. We provide detailed timelines during consultation.'
  },
  {
    question: 'Do you provide warranties on your work?',
    answer: 'Yes, we provide comprehensive warranties on all our services. The warranty period varies by service type - typically ranging from 1-5 years for different applications. Details are provided in your service agreement.'
  },
  {
    question: 'What materials do you use?',
    answer: 'We use only premium materials from trusted authorized dealers and material partners. Our products meet international quality standards and are selected based on durability, aesthetics, and environmental considerations.'
  },
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes, we offer free initial consultations where we understand your requirements, assess the space, and provide preliminary recommendations and estimates.'
  },
  {
    question: 'Can you work with my existing interior designer?',
    answer: 'We collaborate seamlessly with interior designers, architects, and other professionals to ensure your vision is executed perfectly.'
  }
]

export function ServicesFAQ() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 rounded-lg px-6 data-[state=open]:border-primary"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
