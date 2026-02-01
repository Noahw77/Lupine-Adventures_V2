import { Check } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function JacksonHoleSummer() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1730161098531-1cf3c0f81356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMHRldG9uJTIwbW91bnRhaW5zJTIwc3VtbWVyfGVufDF8fHx8MTc2OTMwMTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Jackson Hole Summer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#9F8EC6]/40 via-transparent to-[#F5F2F9]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            <p className="text-[#9F8EC6] tracking-wider uppercase mb-4" style={{ fontSize: '0.875rem', letterSpacing: '0.15em', fontWeight: 500 }}>
              Summer Experience
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
              Jackson Hole Summer
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#343843' }}>
              Experience the Tetons in full bloom with hiking, wildlife viewing, and outdoor adventures tailored to your pace.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-[#F6F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 
              className="mb-6"
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                lineHeight: '1.2',
                color: '#22242B',
                fontWeight: 500
              }}
            >
              Your Summer Adventure Awaits
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#343843' }}>
              Summer in Jackson Hole offers endless possibilities—from alpine hikes through wildflower meadows to serene river floats and wildlife encounters. Our standard and premium packages provide flexibility while ensuring every detail is expertly curated.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#343843' }}>
              All trips include a personalized consultation to tailor activities to your preferences—whether you prefer challenging summit hikes or leisurely nature walks, whitewater rafting or gentle floats.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-gradient-to-b from-[#F5F2F9] to-[#F6F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#9F8EC6] tracking-wider uppercase mb-4" style={{ fontSize: '0.875rem', letterSpacing: '0.15em', fontWeight: 500 }}>
              Choose Your Experience
            </p>
            <h2 
              className="mb-4"
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: '1.2',
                color: '#22242B',
                fontWeight: 500
              }}
            >
              Standard & Premium Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Standard Package */}
            <div className="bg-white rounded-lg p-8 lg:p-10 border border-[#9F8EC6]/20">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-[#A7B49A]/10 text-[#A7B49A] rounded-md text-sm tracking-wider uppercase mb-4" style={{ fontWeight: 500 }}>
                  Standard
                </span>
                <h3 
                  className="mb-4"
                  style={{ 
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '2rem',
                    lineHeight: '1.2',
                    color: '#22242B',
                    fontWeight: 500
                  }}
                >
                  Jackson Hole Summer Experience
                </h3>
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#343843' }}>
                  A well-crafted 4-5 day adventure featuring quality accommodations, experienced guides, and authentic local experiences.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Comfortable 3-star accommodations in Jackson or Teton Village
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Daily guided activities: hiking, wildlife viewing, scenic floats
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Experienced local guides and naturalists
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Curated restaurant recommendations and select group dinners
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Personalized consultation to customize activity intensity
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Ground transportation for scheduled activities
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Comprehensive trip guide with local insights
                  </p>
                </div>
              </div>

              <a 
                href="#contact"
                className="block w-full px-8 py-4 border-2 border-[#9F8EC6] text-[#9F8EC6] rounded-md hover:bg-[#9F8EC6] hover:text-white transition-all duration-300 text-center"
                style={{ fontWeight: 500 }}
              >
                Inquire About Standard
              </a>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-lg p-8 lg:p-10 border-2 border-[#9F8EC6] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="inline-block px-6 py-2 bg-[#9F8EC6] text-white rounded-full text-sm tracking-wider uppercase" style={{ fontWeight: 500 }}>
                  Most Popular
                </span>
              </div>
              
              <div className="mb-8 mt-4">
                <span className="inline-block px-4 py-2 bg-[#9F8EC6]/10 text-[#9F8EC6] rounded-md text-sm tracking-wider uppercase mb-4" style={{ fontWeight: 500 }}>
                  Premium
                </span>
                <h3 
                  className="mb-4"
                  style={{ 
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '2rem',
                    lineHeight: '1.2',
                    color: '#22242B',
                    fontWeight: 500
                  }}
                >
                  Elevated Summer Experience
                </h3>
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#343843' }}>
                  An enhanced 5-7 day journey with upscale accommodations, boutique outfitters, and exclusive experiences.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Upscale boutique hotels or luxury lodge accommodations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Private guides and access to exclusive trails and locations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Boutique adventure outfitters with premium equipment
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Curated dining experiences at Jackson's finest restaurants
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Wine pairings and sommelier-selected tastings
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Private transportation in luxury vehicles
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Extended consultation and fully customizable itinerary
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Concierge support throughout your stay
                  </p>
                </div>
              </div>

              <a 
                href="#contact"
                className="block w-full px-8 py-4 bg-[#9F8EC6] text-white rounded-md hover:bg-[#8C7AB3] transition-all duration-300 text-center"
                style={{ fontWeight: 500 }}
              >
                Inquire About Premium
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Itinerary */}
      <section className="py-24 bg-[#F6F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <h2 
              className="mb-6"
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                lineHeight: '1.2',
                color: '#22242B',
                fontWeight: 500
              }}
            >
              Sample 5-Day Itinerary
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#343843' }}>
              Every trip is customized to your interests and pace. Here's an example of what your summer adventure might include:
            </p>
          </div>

          <div className="space-y-6">
            {[
              { day: 'Day 1', title: 'Arrival & Town Square', description: 'Settle into your accommodations, explore downtown Jackson, evening welcome dinner at a local favorite.' },
              { day: 'Day 2', title: 'Grand Teton Hiking', description: 'Full-day guided hike through iconic trails—choose from moderate to challenging routes based on your preference.' },
              { day: 'Day 3', title: 'Wildlife & Scenic Float', description: 'Morning wildlife safari in Grand Teton National Park, afternoon Snake River float with stunning mountain views.' },
              { day: 'Day 4', title: 'Choose Your Adventure', description: 'Options include: summit hikes, rock climbing, mountain biking, fly fishing, or a relaxing day at Jackson Lake.' },
              { day: 'Day 5', title: 'Departure', description: 'Morning at leisure, farewell breakfast, departure with memories and photos to treasure.' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-[#9F8EC6]/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#9F8EC6]/10 flex items-center justify-center">
                    <span 
                      className="text-sm tracking-wider"
                      style={{ color: '#9F8EC6', fontWeight: 500 }}
                    >
                      {item.day}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="mb-2"
                      style={{ 
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: '1.25rem',
                        color: '#22242B'
                      }}
                    >
                      {item.title}
                    </h4>
                    <p className="leading-relaxed" style={{ color: '#343843' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-[#F5F2F9] to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 
            className="mb-6"
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              lineHeight: '1.2',
              color: '#22242B',
              fontWeight: 500
            }}
          >
            Ready to Plan Your Summer Adventure?
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: '#343843' }}>
            Start with a free 30-minute consultation to discuss your ideal Jackson Hole summer experience.
          </p>
          <a 
            href="#contact"
            className="inline-block px-10 py-4 bg-[#9F8EC6] text-white rounded-md hover:bg-[#8C7AB3] transition-all duration-300"
            style={{ fontWeight: 500 }}
          >
            Book Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
