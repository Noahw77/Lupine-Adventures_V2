import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export function Blog() {
  const blogPosts = [
    {
      slug: 'best-hikes-grand-teton',
      title: 'The 10 Best Hikes in Grand Teton National Park',
      excerpt: 'From easy lakeside strolls to challenging summit climbs, our local guide breaks down the must-do trails in the Tetons.',
      author: 'Sarah Mitchell',
      date: 'January 15, 2026',
      readTime: '8 min read',
      category: 'Hiking',
      image: 'https://images.unsplash.com/photo-1660542787473-bf01cc8a4967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjB0cmFpbCUyMG1vdW50YWluJTIwc2NlbmVyeXxlbnwxfHx8fDE3Njk5MDQyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      slug: 'winter-wildlife-yellowstone',
      title: 'Winter Wildlife Watching in Yellowstone: A Local\'s Guide',
      excerpt: 'Discover the best times and locations to spot wolves, bison, and other wildlife during Yellowstone\'s magical winter season.',
      author: 'Jake Richardson',
      date: 'January 10, 2026',
      readTime: '10 min read',
      category: 'Wildlife',
      image: 'https://images.unsplash.com/photo-1692849719536-3154c714f1ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3dzdG9uZSUyMG5hdGlvbmFsJTIwcGFyayUyMHN1bW1lcnxlbnwxfHx8fDE3NjkzMDExMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      slug: 'jackson-hole-wine-pairings',
      title: 'Perfect Wine Pairings for Wild Game: A Sommelier\'s Perspective',
      excerpt: 'Marcus Chen shares his expert recommendations for pairing wine with elk, bison, and other Rocky Mountain specialties.',
      author: 'Marcus Chen',
      date: 'January 5, 2026',
      readTime: '6 min read',
      category: 'Food & Wine',
      image: 'https://images.unsplash.com/photo-1714836403365-6659229f4d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb21tZWxpZXIlMjB3aW5lJTIwdGFzdGluZ3xlbnwxfHx8fDE3Njk0NjI0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      slug: 'beginners-guide-powder-skiing',
      title: 'A Beginner\'s Guide to Powder Skiing at Jackson Hole Mountain Resort',
      excerpt: 'Never skied powder before? Our expert tips will help you conquer JHMR\'s legendary deep snow with confidence.',
      author: 'Tom Whitaker',
      date: 'December 28, 2025',
      readTime: '7 min read',
      category: 'Skiing',
      image: 'https://images.unsplash.com/photo-1556912161-041e9045d5e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWNrc29uJTIwaG9sZSUyMHdpbnRlciUyMHNraWluZ3xlbnwxfHx8fDE3NjkzMDExMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      slug: 'hidden-swimming-holes',
      title: 'Jackson Hole\'s Best Hidden Swimming Holes',
      excerpt: 'Beat the summer heat at these lesser-known swimming spots that locals love to keep secret.',
      author: 'Emma Rodriguez',
      date: 'December 20, 2025',
      readTime: '5 min read',
      category: 'Summer Activities',
      image: 'https://images.unsplash.com/photo-1730161098531-1cf3c0f81356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMHRldG9uJTIwbW91bnRhaW5zJTIwc3VtbWVyfGVufDF8fHx8MTc2OTMwMTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      slug: 'photography-tips-tetons',
      title: 'Photography Tips for Capturing the Tetons',
      excerpt: 'Learn when and where to shoot for the best light, plus camera settings for landscape and wildlife photography.',
      author: 'Jake Richardson',
      date: 'December 15, 2025',
      readTime: '9 min read',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1763736809788-693e57ffe84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG91dGRvb3IlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzY5NDYyNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1748209252552-30cf9cd32909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwYmxvZyUyMGNvZmZlZSUyMGxhcHRvcHxlbnwxfHx8fDE3Njk5MDQyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#9F8EC6]/40 via-transparent to-[#F5F2F9]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            <p className="text-[#9F8EC6] tracking-wider uppercase mb-4" style={{ fontSize: '0.875rem', letterSpacing: '0.15em', fontWeight: 500 }}>
              Resources
            </p>
            <h1 
              className="mb-6"
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: '1.15',
                color: '#22242B',
                fontWeight: 500
              }}
            >
              Jackson Hole Insights
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#343843' }}>
              Stories, tips, and local knowledge from our team of Jackson Hole experts.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-[#F6F7F5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <p className="text-lg leading-relaxed" style={{ color: '#343843' }}>
            Welcome to our blog, where we share the kind of insider knowledge you'd get over a beer with a local friend. From trail recommendations to restaurant reviews, wildlife watching tips to ski technique, we're here to help you make the most of your Jackson Hole experience.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gradient-to-b from-[#F5F2F9] to-[#F6F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-sm tracking-wider uppercase mb-6" style={{ color: '#9F8EC6', fontWeight: 500 }}>
            Featured Post
          </p>
          
          <Link to={`/blog/${blogPosts[0].slug}`} className="group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-lg overflow-hidden border border-[#9F8EC6]/10 hover:border-[#9F8EC6]/30 transition-all duration-300">
              <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto">
                <ImageWithFallback 
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-[#9F8EC6]/10 text-[#9F8EC6] rounded-full text-xs tracking-wider uppercase mb-4 w-fit" style={{ fontWeight: 500 }}>
                  {blogPosts[0].category}
                </span>
                
                <h2 
                  className="mb-4 group-hover:text-[#9F8EC6] transition-colors"
                  style={{ 
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    lineHeight: '1.2',
                    color: '#22242B',
                    fontWeight: 500
                  }}
                >
                  {blogPosts[0].title}
                </h2>
                
                <p className="leading-relaxed mb-6" style={{ color: '#343843' }}>
                  {blogPosts[0].excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} style={{ color: '#9F8EC6' }} />
                    <span style={{ color: '#343843' }}>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} style={{ color: '#9F8EC6' }} />
                    <span style={{ color: '#343843' }}>{blogPosts[0].readTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#9F8EC6] group-hover:gap-4 transition-all">
                  <span style={{ fontWeight: 500 }}>Read Full Article</span>
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 
            className="mb-12"
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              lineHeight: '1.2',
              color: '#22242B',
              fontWeight: 500
            }}
          >
            Recent Posts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Link key={index} to={`/blog/${post.slug}`} className="group">
                <article className="bg-white rounded-lg overflow-hidden border border-[#9F8EC6]/10 hover:border-[#9F8EC6]/30 transition-all duration-300 h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <ImageWithFallback 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-[#9F8EC6] rounded-full text-xs tracking-wider uppercase" style={{ fontWeight: 500 }}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <h3 
                      className="mb-3 group-hover:text-[#9F8EC6] transition-colors"
                      style={{ 
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: '1.25rem',
                        lineHeight: '1.3',
                        color: '#22242B',
                        fontWeight: 500
                      }}
                    >
                      {post.title}
                    </h3>
                    
                    <p className="leading-relaxed mb-4 text-sm flex-1" style={{ color: '#343843' }}>
                      {post.excerpt}
                    </p>

                    <div className="pt-4 border-t border-[#9F8EC6]/10">
                      <div className="flex items-center justify-between text-xs">
                        <span style={{ color: '#343843' }}>{post.author}</span>
                        <span style={{ color: '#A7B49A' }}>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-b from-[#F5F2F9] to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 
            className="mb-4"
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              lineHeight: '1.2',
              color: '#22242B',
              fontWeight: 500
            }}
          >
            Stay in the Loop
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: '#343843' }}>
            Get our latest tips, trip ideas, and local insights delivered to your inbox monthly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-[#9F8EC6]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9F8EC6] focus:border-transparent"
            />
            <button 
              className="px-8 py-3 bg-[#9F8EC6] text-white rounded-md hover:bg-[#8C7AB3] transition-all duration-300 whitespace-nowrap"
              style={{ fontWeight: 500 }}
            >
              Subscribe
            </button>
          </div>
          
          <p className="text-xs mt-4" style={{ color: '#A7B49A' }}>
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
