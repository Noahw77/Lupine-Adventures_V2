export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F6F7F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[3/4] rounded-lg overflow-hidden border border-[#A7B49A]/20">
              <img 
                src="https://images.unsplash.com/photo-1532115388277-ec08a192d338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXRvbnMlMjBnb2xkZW4lMjBob3VyfGVufDF8fHx8MTc2OTI5ODg1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tetons at golden hour"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-[#A7B49A] tracking-wider uppercase mb-4" style={{ fontSize: '0.875rem', letterSpacing: '0.15em', fontWeight: 500 }}>
              Who We Are
            </p>
            <h2 
              className="mb-8"
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: '1.2',
                color: '#22242B',
                fontWeight: 500
              }}
            >
              Jackson Hole locals with a passion for this place
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#343843' }}>
              <p>
                Our team is made up of experienced outdoor guides, food critics, sommeliers, adrenaline junkies, naturalists, and amateur photographers—all Jackson Hole locals who share a genuine love for this beautiful part of the world.
              </p>
              <p>
                We've spent years exploring every corner of Jackson Hole and Yellowstone, building relationships with the best guides, chefs, and local operators. We know the hidden trails, the perfect dinner spots, and the moments worth planning a trip around.
              </p>
              <p>
                Whether you want a single exceptional day or a week-long custom adventure, we bring the same level of care and attention to detail. This is our backyard, and we're excited to share it with you.
              </p>
            </div>

            {/* Values */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border-l-2 border-[#9F8EC6] pl-6">
                <h4 
                  style={{ 
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.125rem',
                    color: '#22242B',
                    marginBottom: '0.5rem'
                  }}
                >
                  Local Expertise
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: '#343843' }}>
                  We live here. Every recommendation comes from personal experience and local connections.
                </p>
              </div>
              <div className="border-l-2 border-[#A7B49A] pl-6">
                <h4 
                  style={{ 
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.125rem',
                    color: '#22242B',
                    marginBottom: '0.5rem'
                  }}
                >
                  Crafted with Care
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: '#343843' }}>
                  No two trips are the same. We tailor every detail to match your interests and style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
