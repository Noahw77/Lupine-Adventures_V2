import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Mountain, Utensils, Compass, Camera, Leaf, Award } from 'lucide-react';

export function Philosophy() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1558526222-cd9f88ee8a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGd1aWRlJTIwaGlraW5nfGVufDF8fHx8MTc2OTQ2MjQ4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Mountain Guide"
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
              Our Trip Planning Philosophy
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#343843' }}>
              Expertise in every detail, authenticity in every experience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#F6F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
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
              Crafted, Not Polished
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#343843' }}>
              We believe the best trips aren't found in glossy brochures—they're crafted by people who live and breathe this place. Our team isn't just knowledgeable about Jackson Hole and Yellowstone; we're locals who've spent years discovering the hidden trails, the best bistros, the perfect sunset viewpoints, and the moments that make a trip unforgettable.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#343843' }}>
              Our philosophy is simple: bring together diverse expertise, share genuine passion, and create experiences that feel authentic rather than packaged. We're not selling luxury for luxury's sake—we're offering the kind of quality you'd expect from a craft beer: thoughtfully made, deeply satisfying, and worth savoring.
            </p>
          </div>

          {/* Team Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg p-8 border border-[#9F8EC6]/10">
              <div className="w-16 h-16 rounded-full bg-[#9F8EC6]/10 flex items-center justify-center mb-6">
                <Mountain size={32} style={{ color: '#9F8EC6' }} />
              </div>
              <h3 
                className="mb-4"
                style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.5rem',
                  color: '#22242B'
                }}
              >
                Experienced Alpine Guides
              </h3>
              <p className="leading-relaxed" style={{ color: '#343843' }}>
                Our guides have decades of combined experience on these mountains—from technical climbs to family hikes. They know the terrain, weather patterns, and how to safely access the most spectacular views.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-[#9F8EC6]/10">
              <div className="w-16 h-16 rounded-full bg-[#A7B49A]/10 flex items-center justify-center mb-6">
                <Utensils size={32} style={{ color: '#A7B49A' }} />
              </div>
              <h3 
                className="mb-4"
                style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.5rem',
                  color: '#22242B'
                }}
              >
                Food Critics & Sommeliers
              </h3>
              <p className="leading-relaxed" style={{ color: '#343843' }}>
                Dining is an essential part of any great trip. Our team includes certified sommeliers and food critics who know which restaurants are worth your time and which wines pair perfectly with wild game.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-[#9F8EC6]/10">
              <div className="w-16 h-16 rounded-full bg-[#9F8EC6]/10 flex items-center justify-center mb-6">
                <Leaf size={32} style={{ color: '#9F8EC6' }} />
              </div>
              <h3 
                className="mb-4"
                style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.5rem',
                  color: '#22242B'
                }}
              >
                Naturalists & Wildlife Experts
              </h3>
              <p className="leading-relaxed" style={{ color: '#343843' }}>
                Understanding the ecosystem enriches every hike. Our naturalists share insights on flora, fauna, and geology that transform a scenic walk into an educational adventure.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-[#9F8EC6]/10">
              <div className="w-16 h-16 rounded-full bg-[#A7B49A]/10 flex items-center justify-center mb-6">
                <Camera size={32} style={{ color: '#A7B49A' }} />
              </div>
              <h3 
                className="mb-4"
                style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.5rem',
                  color: '#22242B'
                }}
              >
                Amateur Photographers
              </h3>
              <p className="leading-relaxed" style={{ color: '#343843' }}>
                We know where the light hits the Tetons just right, when wildlife is most active, and how to capture those once-in-a-lifetime moments. Let us help you bring home incredible photos.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-[#9F8EC6]/10">
              <div className="w-16 h-16 rounded-full bg-[#9F8EC6]/10 flex items-center justify-center mb-6">
                <Compass size={32} style={{ color: '#9F8EC6' }} />
              </div>
              <h3 
                className="mb-4"
                style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.5rem',
                  color: '#22242B'
                }}
              >
                Outdoor Adrenaline Junkies
              </h3>
              <p className="leading-relaxed" style={{ color: '#343843' }}>
                For those seeking thrills, our team knows the best whitewater runs, backcountry ski lines, and rock climbing routes. We'll match the adventure to your skill level.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-[#9F8EC6]/10">
              <div className="w-16 h-16 rounded-full bg-[#A7B49A]/10 flex items-center justify-center mb-6">
                <Award size={32} style={{ color: '#A7B49A' }} />
              </div>
              <h3 
                className="mb-4"
                style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.5rem',
                  color: '#22242B'
                }}
              >
                Long-Time Locals
              </h3>
              <p className="leading-relaxed" style={{ color: '#343843' }}>
                We've lived here for years, not just visited. We know the owner of the best coffee shop, the secret wildflower meadows, and which trails to avoid during peak season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Gems Section */}
      <section className="py-24 bg-gradient-to-b from-[#F5F2F9] to-[#F6F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
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
              Discovering Hidden Gems
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#343843' }}>
              Being local means knowing what most visitors miss. We know the alpine lake that's perfect for a sunset picnic, the family-run restaurant that serves the best elk chili, and the overlook where you can watch the sunrise without crowds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8">
              <h4 
                className="mb-4"
                style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.25rem',
                  color: '#22242B'
                }}
              >
                Beyond the Tourist Trail
              </h4>
              <p className="leading-relaxed mb-4" style={{ color: '#343843' }}>
                We'll take you to places that aren't in the guidebooks—the swimming holes locals use, the backcountry campsites with million-dollar views, and the historic bars where you can actually talk to a real cowboy.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h4 
                className="mb-4"
                style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.25rem',
                  color: '#22242B'
                }}
              >
                Seasonal Expertise
              </h4>
              <p className="leading-relaxed mb-4" style={{ color: '#343843' }}>
                We know when the wildflowers bloom, when to catch the autumn colors at their peak, and which powder stashes fill in first after a storm. This knowledge is built from years of experience, not a calendar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
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
            Experience the Lupine Difference
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: '#343843' }}>
            Let our diverse team of experts create an authentic Jackson Hole experience tailored to your interests.
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
