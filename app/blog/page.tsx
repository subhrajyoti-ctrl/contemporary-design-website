import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Surface Coating Trends for 2024',
    excerpt: 'Discover the latest trends in surface coating and finishing that are transforming modern spaces.',
    image: '/modern-surface-coating-finish-macro.jpg',
    category: 'Trends',
    date: 'March 15, 2024',
    readTime: '5 min read',
    author: 'Sarah Mitchell'
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Waterproofing Your Home',
    excerpt: 'Learn essential waterproofing techniques to protect your property from moisture damage.',
    image: '/professional-wall-painting-texture.jpg',
    category: 'Guides',
    date: 'March 10, 2024',
    readTime: '8 min read',
    author: 'Michael Chen'
  },
  {
    id: 3,
    title: 'Texture Finishes That Transform Spaces',
    excerpt: 'Explore how different texture finishes can dramatically change the look and feel of any room.',
    image: '/interior-wall-texture-design.jpg',
    category: 'Design',
    date: 'March 5, 2024',
    readTime: '6 min read',
    author: 'Emily Rodriguez'
  },
  {
    id: 4,
    title: 'Creating the Perfect Kids Room',
    excerpt: 'Tips and tricks for designing safe, vibrant, and inspiring spaces for children.',
    image: '/colorful-kids-room-interior-design.jpg',
    category: 'Design',
    date: 'February 28, 2024',
    readTime: '7 min read',
    author: 'Sarah Mitchell'
  }
]

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
                Our <span className="text-primary">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Insights, tips, and trends from surface solution experts
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="group">
                  <Card className="h-full overflow-hidden border-2 hover:border-primary transition-all hover:shadow-xl">
                    <div className="relative h-64 overflow-hidden watermarked">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-3 text-sm">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <span className="text-sm text-muted-foreground">By {post.author}</span>
                        <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
