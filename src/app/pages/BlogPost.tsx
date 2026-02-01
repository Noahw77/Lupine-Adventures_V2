import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

export function BlogPost() {
  const { slug } = useParams();

  // In a real app, you'd fetch post data based on slug
  const post = {
    title: 'The 10 Best Hikes in Grand Teton National Park',
    author: 'Sarah Mitchell',
    date: 'January 15, 2026',
    readTime: '8 min read',
    category: 'Hiking',
    image: 'https://images.unsplash.com/photo-1660542787473-bf01cc8a4967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjB0cmFpbCUyMG1vdW50YWluJTIwc2NlbmVyeXxlbnwxfHx8fDE3Njk5MDQyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#22242B]/40 to-[#22242B]/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 w-full pb-12">
          <Link to="/resources/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>
          
          <span className="inline-block px-3 py-1 bg-[#9F8EC6] text-white rounded-full text-xs tracking-wider uppercase mb-4" style={{ fontWeight: 500 }}>
            {post.category}
          </span>
          
          <h1 
            className="mb-6 text-white"
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: '1.15',
              fontWeight: 500
            }}
          >
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-white/90 text-sm">
            <span style={{ fontWeight: 500 }}>By {post.author}</span>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg" style={{ color: '#343843' }}>
            <p className="text-xl leading-relaxed mb-8" style={{ color: '#343843' }}>
              Grand Teton National Park offers some of the most spectacular hiking in North America. After 15 years of exploring every trail in the park, I've compiled this definitive guide to help you choose the perfect hikes for your adventure level and time constraints.
            </p>

            <h2 
              className="mb-4 mt-12"
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '2rem',
                color: '#22242B',
                fontWeight: 500
              }}
            >
              1. Cascade Canyon Trail
            </h2>
            <p className="leading-relaxed mb-6">
              <strong>Distance:</strong> 9.1 miles roundtrip to Lake Solitude<br />
              <strong>Difficulty:</strong> Moderate to Difficult<br />
              <strong>Why It's Amazing:</strong> This trail takes you deep into the heart of the Tetons with jaw-dropping scenery at every turn.
            </p>
            <p className="leading-relaxed mb-6">
              Starting from Jenny Lake (take the boat shuttle to save 4 miles), you'll climb gradually through Cascade Canyon, surrounded by towering peaks. If you make it all the way to Lake Solitude, you'll be rewarded with one of the most serene alpine lakes in the park.
            </p>
            <p className="leading-relaxed mb-6">
              <strong>Local Tip:</strong> Start early to catch the first boat (7am in summer) and avoid crowds. Bring layers—it can be 20 degrees cooler at Lake Solitude than at the trailhead.
            </p>

            <h2 
              className="mb-4 mt-12"
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '2rem',
                color: '#22242B',
                fontWeight: 500
              }}
            >
              2. Paintbrush Divide Loop
            </h2>
            <p className="leading-relaxed mb-6">
              <strong>Distance:</strong> 19 miles loop<br />
              <strong>Difficulty:</strong> Difficult<br />
              <strong>Why It's Amazing:</strong> This is the park's premier backpacking loop, but strong hikers can tackle it in a long day.
            </p>
            <p className="leading-relaxed mb-6">
              The Paintbrush Divide crosses at 10,700 feet, offering unparalleled 360-degree views. You'll traverse alpine meadows, cascading waterfalls, and pristine mountain lakes. This trail showcases everything that makes the Tetons special.
            </p>
            <p className="leading-relaxed mb-6">
              <strong>Local Tip:</strong> Go counterclockwise (up Paintbrush Canyon, down Cascade) to tackle the steepest section while you're fresh. Snow can linger on the divide through July—check conditions before going.
            </p>

            <h2 
              className="mb-4 mt-12"
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '2rem',
                color: '#22242B',
                fontWeight: 500
              }}
            >
              3. Delta Lake
            </h2>
            <p className="leading-relaxed mb-6">
              <strong>Distance:</strong> 7.4 miles roundtrip<br />
              <strong>Difficulty:</strong> Moderate<br />
              <strong>Why It's Amazing:</strong> Stunning turquoise alpine lake nestled right beneath the Grand Teton.
            </p>
            <p className="leading-relaxed mb-6">
              This trail has become increasingly popular (for good reason), but the payoff is worth any crowds. The lake's vivid blue-green color against the backdrop of the Grand is Instagram-worthy, but even better in person. The climb is steep in sections but manageable for most hikers.
            </p>
            <p className="leading-relaxed mb-6">
              <strong>Local Tip:</strong> Parking at Lupine Meadows fills up by 6am in peak season. Consider parking at the String Lake lot and hiking an extra mile to access the trail.
            </p>

            {/* Placeholder for remaining hikes */}
            <div className="my-12 p-8 bg-[#F6F7F5] rounded-lg border border-[#9F8EC6]/10">
              <p className="leading-relaxed text-center" style={{ color: '#343843' }}>
                <em>This is a sample blog post demonstrating the layout and style. In a full implementation, the remaining 7 hikes would be detailed here with the same format and local insights.</em>
              </p>
            </div>

            <h2 
              className="mb-4 mt-12"
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '2rem',
                color: '#22242B',
                fontWeight: 500
              }}
            >
              Final Thoughts
            </h2>
            <p className="leading-relaxed mb-6">
              The Grand Tetons offer incredible hiking for all levels. Whether you're looking for a gentle lakeside stroll or a challenging alpine adventure, there's a trail here that will take your breath away—sometimes from the exertion, always from the views.
            </p>
            <p className="leading-relaxed mb-6">
              Remember to check weather conditions, bring the ten essentials, and practice Leave No Trace principles. The park is a precious resource, and we all have a responsibility to protect it for future generations.
            </p>
            <p className="leading-relaxed">
              Happy trails!
            </p>
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="py-12 bg-[#F6F7F5]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-[#9F8EC6]/20 flex items-center justify-center">
                <span 
                  className="text-2xl"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#9F8EC6' }}
                >
                  SM
                </span>
              </div>
            </div>
            <div>
              <h3 
                className="mb-2"
                style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.5rem',
                  color: '#22242B'
                }}
              >
                About {post.author}
              </h3>
              <p className="leading-relaxed text-sm mb-4" style={{ color: '#343843' }}>
                Sarah is a certified AMGA mountain guide who has been exploring the Tetons for over 15 years. As Lead Guide and Co-Founder of Lupine Adventures, she's passionate about sharing her love of these mountains with visitors while promoting responsible outdoor recreation.
              </p>
              <Link to="/about/team" className="text-[#9F8EC6] hover:text-[#8C7AB3] transition-colors text-sm" style={{ fontWeight: 500 }}>
                Meet the Full Team →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 
            className="mb-8"
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '2rem',
              color: '#22242B',
              fontWeight: 500
            }}
          >
            More from the Blog
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Wildlife Watching in Yellowstone', category: 'Wildlife' },
              { title: 'Wine Pairings for Wild Game', category: 'Food & Wine' },
              { title: 'Hidden Swimming Holes', category: 'Summer' }
            ].map((related, index) => (
              <Link key={index} to="/resources/blog" className="group">
                <div className="p-6 bg-[#F6F7F5] rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#9F8EC6]/10">
                  <span className="text-xs tracking-wider uppercase mb-3 block" style={{ color: '#9F8EC6', fontWeight: 500 }}>
                    {related.category}
                  </span>
                  <h4 
                    className="group-hover:text-[#9F8EC6] transition-colors"
                    style={{ 
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.25rem',
                      color: '#22242B'
                    }}
                  >
                    {related.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
