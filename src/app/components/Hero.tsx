export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1757009306428-e3c3a708d961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWNrc29uJTIwaG9sZSUyMHd5b21pbmclMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY5Mjk4ODQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Jackson Hole mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#9F8EC6]/20 via-transparent to-[#F5F2F9]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-[#9F8EC6] tracking-wider uppercase mb-6" style={{ fontSize: '0.875rem', letterSpacing: '0.15em', fontWeight: 500 }}>
            Jackson Hole Locals | Year-Round Adventures
          </p>
          <h1 
            className="mb-8"
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: '1.15',
              color: '#22242B',
              fontWeight: 500
            }}
          >
            Experience Jackson Hole & Yellowstone the way locals do
          </h1>
          <p 
            className="text-xl mb-12 max-w-2xl leading-relaxed"
            style={{ color: '#343843' }}
          >
            We're a team of Jackson Hole guides, food critics, sommeliers, and outdoor enthusiasts who craft exceptional trips across our backyard. From single-day adventures to fully customized journeys, we handle the details so you can focus on the experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact"
              className="inline-block px-8 py-4 bg-[#9F8EC6] text-white rounded-md hover:bg-[#8C7AB3] transition-all duration-300 text-center"
              style={{ fontWeight: 500 }}
            >
              Book Free Consultation
            </a>
            <a 
              href="#experiences"
              className="inline-block px-8 py-4 border-2 border-[#9F8EC6] text-[#9F8EC6] rounded-md hover:bg-[#9F8EC6] hover:text-white transition-all duration-300 text-center"
              style={{ fontWeight: 500 }}
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
