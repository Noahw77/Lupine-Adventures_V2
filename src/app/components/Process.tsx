const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'Start with a complimentary 30-minute call to discuss your interests, timeline, and what you want out of your trip. No commitment required.'
  },
  {
    number: '02',
    title: 'Custom Planning',
    description: 'We create a tailored itinerary based on your conversation—activities, lodging, dining, and local insider recommendations that match your style.'
  },
  {
    number: '03',
    title: 'Seamless Booking',
    description: 'Once you approve the plan, we handle all reservations, guide coordination, and logistics. You receive a detailed trip guide before arrival.'
  },
  {
    number: '04',
    title: 'Enjoy Your Trip',
    description: 'Everything is arranged. We are available if you need anything, but otherwise you simply show up and enjoy Jackson Hole the way it is meant to be experienced.'
  }
];

export function Process() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[#F5F2F9] via-[#F6F7F5] to-[#F5F2F9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-[#9F8EC6] tracking-wider uppercase mb-4" style={{ fontSize: '0.875rem', letterSpacing: '0.15em', fontWeight: 500 }}>
            How It Works
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
            Simple, collaborative, stress-free
          </h2>
          <p className="text-lg leading-relaxed mb-4" style={{ color: '#343843' }}>
            From our first conversation to the moment you leave, we handle the planning and logistics so you can focus on the experience.
          </p>
          <div className="inline-block bg-[#9F8EC6]/10 border border-[#9F8EC6]/20 rounded-lg px-6 py-3 mt-4">
            <p className="text-base" style={{ color: '#9F8EC6', fontWeight: 500 }}>
              ✨ Start with a free 30-minute trip consultation
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex items-start gap-6">
                <div 
                  className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 flex items-center justify-center"
                  style={{ borderColor: index % 2 === 0 ? '#9F8EC6' : '#A7B49A' }}
                >
                  <span 
                    className="text-lg"
                    style={{ 
                      fontFamily: "'Playfair Display', Georgia, serif",
                      color: index % 2 === 0 ? '#9F8EC6' : '#A7B49A',
                      fontWeight: 500
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 
                    className="mb-3"
                    style={{ 
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.5rem',
                      lineHeight: '1.3',
                      color: '#22242B'
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
