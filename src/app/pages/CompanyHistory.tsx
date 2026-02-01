import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function CompanyHistory() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1730161098531-1cf3c0f81356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMHRldG9uJTIwbW91bnRhaW5zJTIwc3VtbWVyfGVufDF8fHx8MTc2OTMwMTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Grand Teton Mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#9F8EC6]/40 via-transparent to-[#F5F2F9]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            <p className="text-[#9F8EC6] tracking-wider uppercase mb-4" style={{ fontSize: '0.875rem', letterSpacing: '0.15em', fontWeight: 500 }}>
              About Us
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
              Company History
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#343843' }}>
              Born from a shared love of these mountains and a desire to share them authentically.
            </p>
          </div>
        </div>
      </section>

      {/* The Story Begins */}
      <section className="py-24 bg-[#F6F7F5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 
            className="mb-8"
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              lineHeight: '1.2',
              color: '#22242B',
              fontWeight: 500
            }}
          >
            How It All Started
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#343843' }}>
            <p>
              Lupine Adventures was born around a campfire in 2018, when a group of Jackson Hole locals realized they were all solving the same problem: friends and family visiting from out of town who wanted more than the typical tourist experience.
            </p>
            
            <p>
              We'd each developed our own approach—the alpine guide knew the secret trails, the sommelier had the best restaurant connections, the naturalist could explain why the wolves returned to Yellowstone, and the food critic knew which food truck served the best tacos after a powder day. Separately, we were all creating memorable experiences for our visitors. Together, we realized we could offer something truly special.
            </p>
            
            <p>
              What started as informal trip planning for friends quickly grew by word of mouth. People loved that they could skip the generic tours and experience Jackson Hole through the eyes of locals who genuinely cared about creating authentic, memorable adventures.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-b from-[#F5F2F9] to-[#F6F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 
            className="mb-16 text-center"
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              lineHeight: '1.2',
              color: '#22242B',
              fontWeight: 500
            }}
          >
            Our Journey
          </h2>

          <div className="space-y-12 max-w-4xl mx-auto">
            {[
              {
                year: '2018',
                title: 'The Campfire Conversation',
                description: 'A casual conversation among friends revealed a shared passion for showing people the "real" Jackson Hole. The idea for Lupine Adventures was born.'
              },
              {
                year: '2019',
                title: 'Word-of-Mouth Growth',
                description: 'Our first official season. We planned trips for twelve groups, all referred by satisfied friends and family. Each trip refined our approach and reinforced our philosophy.'
              },
              {
                year: '2020',
                title: 'Pivoting with Purpose',
                description: 'When tourism changed dramatically, we focused on small-group experiences and private trips. This unexpected shift actually strengthened our commitment to personalized service.'
              },
              {
                year: '2021',
                title: 'Expanding the Team',
                description: 'We brought on additional experts—a wildlife photographer, a fly fishing guide, and a backcountry ski specialist. Our team grew, but our local-focused philosophy remained unchanged.'
              },
              {
                year: '2022',
                title: 'Premium Experiences',
                description: 'Guests asked for upgraded options, so we partnered with boutique hotels, private guides, and fine dining establishments to create our Premium package tier.'
              },
              {
                year: '2023',
                title: 'Year-Round Adventures',
                description: 'We expanded from summer-only to year-round trips, developing our winter program with the same dedication to authentic, expertly-guided experiences.'
              },
              {
                year: '2024',
                title: 'Looking Forward',
                description: 'Today, Lupine Adventures continues to grow organically, guided by the same principle that started it all: share what we love with people who appreciate craft over commodity.'
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-[#9F8EC6]/20">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#9F8EC6] border-4 border-[#F5F2F9]"></div>
                <div className="mb-2">
                  <span 
                    className="inline-block px-3 py-1 bg-[#9F8EC6]/10 text-[#9F8EC6] rounded text-sm tracking-wider"
                    style={{ fontWeight: 500 }}
                  >
                    {item.year}
                  </span>
                </div>
                <h3 
                  className="mb-3"
                  style={{ 
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.5rem',
                    color: '#22242B'
                  }}
                >
                  {item.title}
                </h3>
                <p className="leading-relaxed text-lg" style={{ color: '#343843' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Do This */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 
            className="mb-8"
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              lineHeight: '1.2',
              color: '#22242B',
              fontWeight: 500
            }}
          >
            Why We Do This
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed mb-12" style={{ color: '#343843' }}>
            <p>
              We started Lupine Adventures because we were tired of watching visitors miss the magic of Jackson Hole. Too many people would leave without discovering the swimming hole with the perfect rope swing, without tasting the wild huckleberry pie at that tiny cafe, without hearing the bugle of an elk at dawn in Yellowstone.
            </p>
            
            <p>
              This place changed our lives. For some of us, it was the mountains that called us here. For others, it was the community, the wildlife, or the endless adventures. But we all stayed because Jackson Hole and Yellowstone offer something rare: a place where you can still feel truly connected to nature and to authentic experiences.
            </p>
            
            <p>
              Every trip we plan is our chance to share that connection. When guests return home with stories about spotting a grizzly in Lamar Valley, skiing untouched powder, or sharing a campfire meal with new friends, we know we've done our job.
            </p>
          </div>

          <div className="bg-[#F6F7F5] rounded-lg p-8 border border-[#9F8EC6]/10">
            <p className="text-xl leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#22242B' }}>
              "We're not just selling trips. We're sharing a place we love with people who will appreciate it. That's always been our mission, and it always will be."
            </p>
            <p className="mt-4" style={{ color: '#343843', fontWeight: 500 }}>
              — The Lupine Adventures Team
            </p>
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
            Become Part of Our Story
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: '#343843' }}>
            Let us share our love for Jackson Hole and Yellowstone with you.
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
