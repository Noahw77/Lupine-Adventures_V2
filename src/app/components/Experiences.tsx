const experiences = [
  {
    id: 1,
    season: 'Summer',
    title: 'Yellowstone Wilderness Immersion',
    description: 'Guided exploration of Yellowstone\'s hidden corners with expert naturalists. Early morning wildlife watching, sunset at thermal features, and meals at our favorite local spots.',
    image: 'https://images.unsplash.com/photo-1660919140696-ff303cfcb6dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3dzdG9uZSUyMHdpbGRsaWZlJTIwbW9vZHl8ZW58MXx8fHwxNzY5Mjk4ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    duration: '3-5 days'
  },
  {
    id: 2,
    season: 'Summer',
    title: 'Backcountry Hiking & Alpine Lakes',
    description: 'Custom routes through the Tetons with experienced guides. Hidden alpine lakes, wildflower meadows, and ridge walks tailored to your fitness level and interests.',
    image: 'https://images.unsplash.com/photo-1674085679225-59bf97c82185?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3eW9taW5nJTIwaGlraW5nJTIwdHJhaWx8ZW58MXx8fHwxNzY5Mjk4ODUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    duration: '1-4 days'
  },
  {
    id: 3,
    season: 'Winter',
    title: 'Jackson Hole Winter Adventure',
    description: 'Complete winter experience: world-class skiing, backcountry tours, and the best après spots. We coordinate guides, lift tickets, lodging, and dinner reservations.',
    image: 'https://images.unsplash.com/photo-1556912161-041e9045d5e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3eW9taW5nJTIwd2ludGVyJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc2OTI5ODg1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    duration: '4-7 days'
  },
  {
    id: 4,
    season: 'Winter',
    title: 'Yellowstone in Snow',
    description: 'Experience Yellowstone transformed by winter. Snowcoach tours, cross-country skiing, and steaming geysers against a backdrop of snow. Magical and surprisingly accessible.',
    image: 'https://images.unsplash.com/photo-1648347499343-4c620d27ed67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3dzdG9uZSUyMHdpbnRlciUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjkyOTg4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    duration: '2-4 days'
  }
];

export function Experiences() {
  return (
    <section id="experiences" className="py-24 lg:py-32 bg-gradient-to-b from-[#F5F2F9] to-[#F6F7F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <p className="text-[#9F8EC6] tracking-wider uppercase mb-4" style={{ fontSize: '0.875rem', letterSpacing: '0.15em', fontWeight: 500 }}>
            What We Offer
          </p>
          <h2 
            className="mb-6"
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: '1.2',
              color: '#22242B',
              fontWeight: 500
            }}
          >
            From single activities to fully customized trips
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: '#343843' }}>
            Whether you need one incredible day or a complete multi-day adventure, we've got you covered. Our services range from curated one-off bookings to comprehensive trip packages and fully customized itineraries.
          </p>
          
          {/* Service Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-[#9F8EC6]/10">
              <h4 className="mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.125rem', color: '#22242B' }}>
                Single Activities
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: '#343843' }}>
                Book one perfect experience—a guided hike, wine tasting, or backcountry tour.
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-[#9F8EC6]/10">
              <h4 className="mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.125rem', color: '#22242B' }}>
                Trip Packages
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: '#343843' }}>
                Pre-designed multi-day experiences featuring our favorite seasonal highlights.
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-[#9F8EC6]/10">
              <h4 className="mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.125rem', color: '#22242B' }}>
                Custom Journeys
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: '#343843' }}>
                Fully tailored itineraries built around your interests, timeline, and budget.
              </p>
            </div>
          </div>
          
          <p className="text-base leading-relaxed" style={{ color: '#9F8EC6', fontWeight: 500 }}>
            Not sure what you need? Book a free 30-minute consultation and we'll help you plan the perfect trip.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {experiences.map((experience) => (
            <div 
              key={experience.id}
              className="group bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden border border-[#9F8EC6]/10 hover:border-[#9F8EC6]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[#9F8EC6]/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span 
                    className="text-sm tracking-wider uppercase"
                    style={{ color: '#9F8EC6', letterSpacing: '0.12em', fontWeight: 500 }}
                  >
                    {experience.season}
                  </span>
                  <span className="text-sm" style={{ color: '#A7B49A' }}>
                    {experience.duration}
                  </span>
                </div>
                <h3 
                  className="mb-4"
                  style={{ 
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.5rem',
                    lineHeight: '1.3',
                    color: '#22242B'
                  }}
                >
                  {experience.title}
                </h3>
                <p className="leading-relaxed" style={{ color: '#343843' }}>
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
