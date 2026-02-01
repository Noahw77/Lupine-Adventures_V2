import { Check } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function YellowstoneSummer() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1692849719536-3154c714f1ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3dzdG9uZSUyMG5hdGlvbmFsJTIwcGFyayUyMHN1bW1lcnxlbnwxfHx8fDE3NjkzMDExMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Yellowstone Summer"
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
              Jackson Hole & Yellowstone Summer
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#343843' }}>
              Explore America's first national park and the Tetons in one unforgettable journey.
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
              Two Icons, One Incredible Trip
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#343843' }}>
              This immersive experience combines the dramatic peaks of the Tetons with the geothermal wonders and wildlife of Yellowstone. From morning wildlife safaris to sunset at Grand Prismatic Spring, we guide you to the best of both parks while avoiding the crowds.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#343843' }}>
              All trips include a personalized consultation to balance park highlights with off-the-beaten-path discoveries, tailored to your interests in geology, wildlife, photography, or hiking.
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
                  Yellowstone & Tetons Experience
                </h3>
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#343843' }}>
                  A comprehensive 6-7 day adventure exploring both parks with experienced naturalist guides and comfortable accommodations.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Comfortable lodging in Jackson and near Yellowstone
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Daily guided tours with expert naturalists and wildlife guides
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Early morning wildlife safaris in both parks
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Visits to iconic sites: Old Faithful, Grand Prismatic, Lamar Valley
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Guided hikes tailored to your fitness level
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Curated dining recommendations and select group meals
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Ground transportation for all park activities
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
                  Elevated Parks Experience
                </h3>
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#343843' }}>
                  An enhanced 7-8 day journey with luxury lodging, private guides, and exclusive access to lesser-known locations.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Luxury accommodations and historic lodges within the parks
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Private wildlife biologist and photography guide
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Exclusive sunrise and sunset access to premier viewpoints
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Off-trail hiking permits and backcountry exploration
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Professional photo editing session and prints included
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Fine dining at historic park lodges and Jackson's best
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Private luxury SUV with dedicated driver
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Customized itinerary based on wildlife activity and weather
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
              Sample 7-Day Itinerary
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#343843' }}>
              Every trip is customized to your interests and the season. Here's an example of what your dual-park adventure might include:
            </p>
          </div>

          <div className="space-y-6">
            {[
              { day: 'Day 1', title: 'Arrival in Jackson Hole', description: 'Settle in, explore Jackson Town Square, welcome dinner with trip overview and naturalist introduction.' },
              { day: 'Day 2', title: 'Grand Teton National Park', description: 'Full day exploring the Tetons—hiking iconic trails, wildlife viewing, and Jenny Lake scenic cruise.' },
              { day: 'Day 3', title: 'Yellowstone - Lower Loop', description: 'Journey to Yellowstone. Visit Old Faithful, Grand Prismatic Spring, and thermal basins at sunset.' },
              { day: 'Day 4', title: 'Lamar Valley Wildlife Safari', description: 'Early morning wildlife safari in the "Serengeti of North America." Afternoon exploring Tower Fall and Roosevelt Lodge area.' },
              { day: 'Day 5', title: 'Yellowstone Lake & Hayden Valley', description: 'Explore the east side: Yellowstone Lake shoreline, Hayden Valley wildlife viewing, and Mud Volcano.' },
              { day: 'Day 6', title: 'Hidden Gems & Custom Exploration', description: 'Tailored day based on your interests: backcountry hike, photography tour, or fly fishing on the Yellowstone River.' },
              { day: 'Day 7', title: 'Return to Jackson & Departure', description: 'Scenic drive back through Grand Teton. Optional morning activity, farewell brunch, departure.' }
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
            Ready to Explore Two Legendary Parks?
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: '#343843' }}>
            Start with a free 30-minute consultation to design your ideal Jackson Hole and Yellowstone adventure.
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
