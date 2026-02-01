import { Check } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function JacksonHoleWinter() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1556912161-041e9045d5e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWNrc29uJTIwaG9sZSUyMHdpbnRlciUyMHNraWluZ3xlbnwxfHx8fDE3NjkzMDExMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Jackson Hole Winter"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#9F8EC6]/40 via-transparent to-[#F5F2F9]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            <p className="text-white tracking-wider uppercase mb-4" style={{ fontSize: '0.875rem', letterSpacing: '0.15em', fontWeight: 500 }}>
              Winter Experience
            </p>
            <h1 
              className="mb-6"
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: '1.15',
                color: '#ffffff',
                fontWeight: 500
              }}
            >
              Jackson Hole Winter
            </h1>
            <p className="text-xl leading-relaxed text-white">
              World-class skiing, pristine backcountry, and the magic of the Tetons blanketed in snow.
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
              Winter Wonderland Awaits
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#343843' }}>
              Jackson Hole is legendary for its skiing, but winter here offers so much more. From powder days at Jackson Hole Mountain Resort to guided backcountry tours, snowshoeing, and cozy evenings at the best après spots—we craft the perfect winter escape.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#343843' }}>
              All trips include a personalized consultation to match your skill level and interests—whether you're an expert skier, a beginner, or looking for winter adventures beyond the slopes.
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
                  Jackson Hole Winter Experience
                </h3>
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#343843' }}>
                  A 5-6 day winter adventure with comfortable lodging, lift tickets, and expertly guided experiences.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Comfortable slopeside or Teton Village accommodations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Multi-day lift tickets to Jackson Hole Mountain Resort
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Guided backcountry or groomed cross-country ski day
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Group ski lessons available for all levels
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Curated apres-ski and dining recommendations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Ground transportation for off-mountain activities
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#A7B49A' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Personalized consultation to match your skill level
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
                  Elevated Winter Experience
                </h3>
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#343843' }}>
                  An enhanced 6-7 day winter journey with luxury lodging, private guides, and exclusive mountain access.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Luxury ski-in/ski-out accommodations or boutique mountain lodge
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    VIP lift tickets and first tracks access
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Private ski guide and customized terrain selection
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Guided backcountry ski touring with boutique outfitters
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Premium rental equipment or storage for your own gear
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Fine dining reservations and private chef experiences
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Private SUV transportation and on-call driver
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="mt-1 flex-shrink-0" style={{ color: '#9F8EC6' }} />
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    Spa treatments and wellness experiences
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
              Sample 6-Day Itinerary
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#343843' }}>
              Every trip is customized to your skill level and interests. Here's an example of what your winter adventure might include:
            </p>
          </div>

          <div className="space-y-6">
            {[
              { day: 'Day 1', title: 'Arrival & Mountain Orientation', description: 'Check in, gear fitting, resort orientation, and welcome dinner at a cozy mountain bistro.' },
              { day: 'Day 2', title: 'On the Mountain', description: 'Full day skiing or snowboarding with optional guide. Explore terrain suited to your ability level.' },
              { day: 'Day 3', title: 'Backcountry Adventure', description: 'Guided backcountry ski tour or snowshoe excursion. Evening at one of Jackson\'s best apres-ski spots.' },
              { day: 'Day 4', title: 'Choose Your Experience', description: 'Options include: advanced terrain with guide, ski lessons, Nordic skiing, snowmobiling, or spa day.' },
              { day: 'Day 5', title: 'Powder Day & Fine Dining', description: 'Morning on the slopes, afternoon at leisure. Dinner reservation at a Jackson favorite.' },
              { day: 'Day 6', title: 'Departure', description: 'Morning ski or relax, farewell breakfast, departure with unforgettable winter memories.' }
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
            Ready to Plan Your Winter Adventure?
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: '#343843' }}>
            Start with a free 30-minute consultation to discuss your ideal Jackson Hole winter experience.
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
