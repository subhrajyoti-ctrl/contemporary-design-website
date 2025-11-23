import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contemporary Solutions</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Premium surface solutions with 40+ years of experience in transforming spaces with quality and excellence.
            </p>
            <div className="flex gap-3 pt-2">
              <Link href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Twitter" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-accent transition-colors text-white/80">About Us</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors text-white/80">Our Services</Link></li>
              <li><Link href="/works" className="hover:text-accent transition-colors text-white/80">Our Works</Link></li>
              <li><Link href="/clientele" className="hover:text-accent transition-colors text-white/80">Clientele</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors text-white/80">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/coating" className="hover:text-accent transition-colors text-white/80">Surface Coating</Link></li>
              <li><Link href="/services/painting" className="hover:text-accent transition-colors text-white/80">Wall Painting</Link></li>
              <li><Link href="/services/textures" className="hover:text-accent transition-colors text-white/80">Interior Textures</Link></li>
              <li><Link href="/services/design" className="hover:text-accent transition-colors text-white/80">Interior Design</Link></li>
              <li><Link href="/services/consultancy" className="hover:text-accent transition-colors text-white/80">Design Consultancy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/80">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>123 Business Avenue, Suite 100, City, State 12345</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone className="h-5 w-5 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="h-5 w-5 shrink-0" />
                <span>info@contemporarysolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Contemporary Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
