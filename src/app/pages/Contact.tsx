import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tripType: '',
    dates: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1730161098531-1cf3c0f81356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMHRldG9uJTIwbW91bnRhaW5zJTIwc3VtbWVyfGVufDF8fHx8MTc2OTMwMTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#9F8EC6]/40 via-transparent to-[#F5F2F9]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            <p className="text-[#9F8EC6] tracking-wider uppercase mb-4" style={{ fontSize: '0.875rem', letterSpacing: '0.15em', fontWeight: 500 }}>
              Get In Touch
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
              Contact Us
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#343843' }}>
              Start planning your Jackson Hole adventure with a free 30-minute consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-gradient-to-b from-[#F5F2F9] to-[#F6F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
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
                Let's Plan Your Adventure
              </h2>
              
              <p className="text-lg leading-relaxed mb-12" style={{ color: '#343843' }}>
                We'd love to hear about your ideal Jackson Hole experience. Whether you're dreaming of summer hikes or winter powder days, our team is here to help make it happen.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#9F8EC6]/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} style={{ color: '#9F8EC6' }} />
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ fontWeight: 500, color: '#22242B' }}>Phone</h3>
                    <p style={{ color: '#343843' }}>(307) 555-0123</p>
                    <p className="text-sm mt-1" style={{ color: '#A7B49A' }}>Mon-Fri 9am-6pm MT</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#9F8EC6]/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} style={{ color: '#9F8EC6' }} />
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ fontWeight: 500, color: '#22242B' }}>Email</h3>
                    <p style={{ color: '#343843' }}>hello@lupineadventures.com</p>
                    <p className="text-sm mt-1" style={{ color: '#A7B49A' }}>We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#9F8EC6]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} style={{ color: '#9F8EC6' }} />
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ fontWeight: 500, color: '#22242B' }}>Location</h3>
                    <p style={{ color: '#343843' }}>Jackson Hole, Wyoming</p>
                    <p className="text-sm mt-1" style={{ color: '#A7B49A' }}>By appointment only</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#9F8EC6]/10 flex items-center justify-center flex-shrink-0">
                    <Calendar size={20} style={{ color: '#9F8EC6' }} />
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ fontWeight: 500, color: '#22242B' }}>Free Consultation</h3>
                    <p style={{ color: '#343843' }}>30-minute video or phone call</p>
                    <p className="text-sm mt-1" style={{ color: '#A7B49A' }}>No obligation, just good conversation</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-[#A7B49A]/10 rounded-lg border border-[#A7B49A]/20">
                <p className="text-sm leading-relaxed" style={{ color: '#343843' }}>
                  <strong>Note:</strong> Figma Make is not intended for collecting personally identifiable information (PII) or securing sensitive data. For demonstration purposes only.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 lg:p-10 border border-[#9F8EC6]/10">
              <h3 
                className="mb-6"
                style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.75rem',
                  color: '#22242B'
                }}
              >
                Request Your Free Consultation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2" style={{ fontWeight: 500, color: '#22242B' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#9F8EC6]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9F8EC6] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2" style={{ fontWeight: 500, color: '#22242B' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#9F8EC6]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9F8EC6] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2" style={{ fontWeight: 500, color: '#22242B' }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#9F8EC6]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9F8EC6] focus:border-transparent"
                    placeholder="(307) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="tripType" className="block mb-2" style={{ fontWeight: 500, color: '#22242B' }}>
                    Trip Interest
                  </label>
                  <select
                    id="tripType"
                    name="tripType"
                    value={formData.tripType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#9F8EC6]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9F8EC6] focus:border-transparent"
                  >
                    <option value="">Select a trip type</option>
                    <option value="jackson-summer">Jackson Hole - Summer</option>
                    <option value="jackson-winter">Jackson Hole - Winter</option>
                    <option value="yellowstone">Jackson Hole & Yellowstone</option>
                    <option value="custom">Custom Trip</option>
                    <option value="undecided">Not sure yet</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="dates" className="block mb-2" style={{ fontWeight: 500, color: '#22242B' }}>
                      Preferred Dates
                    </label>
                    <input
                      type="text"
                      id="dates"
                      name="dates"
                      value={formData.dates}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#9F8EC6]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9F8EC6] focus:border-transparent"
                      placeholder="e.g., July 2026"
                    />
                  </div>

                  <div>
                    <label htmlFor="guests" className="block mb-2" style={{ fontWeight: 500, color: '#22242B' }}>
                      Number of Guests
                    </label>
                    <input
                      type="text"
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#9F8EC6]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9F8EC6] focus:border-transparent"
                      placeholder="e.g., 2 adults"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2" style={{ fontWeight: 500, color: '#22242B' }}>
                    Tell Us About Your Ideal Trip
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-[#9F8EC6]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9F8EC6] focus:border-transparent resize-none"
                    placeholder="Share any details about your interests, experience level, or special requests..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#9F8EC6] text-white rounded-md hover:bg-[#8C7AB3] transition-all duration-300"
                  style={{ fontWeight: 500 }}
                >
                  Request Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 
            className="mb-8 text-center"
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              lineHeight: '1.2',
              color: '#22242B',
              fontWeight: 500
            }}
          >
            What to Expect
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#9F8EC6]/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#9F8EC6' }}>1</span>
              </div>
              <h4 className="mb-2" style={{ fontWeight: 500, color: '#22242B' }}>Initial Contact</h4>
              <p className="text-sm leading-relaxed" style={{ color: '#343843' }}>
                We'll reach out within 24 hours to schedule your free 30-minute consultation at a time that works for you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#9F8EC6]/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#9F8EC6' }}>2</span>
              </div>
              <h4 className="mb-2" style={{ fontWeight: 500, color: '#22242B' }}>Discovery Call</h4>
              <p className="text-sm leading-relaxed" style={{ color: '#343843' }}>
                We'll learn about your interests, experience level, and what you hope to get from your Jackson Hole adventure.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#9F8EC6]/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#9F8EC6' }}>3</span>
              </div>
              <h4 className="mb-2" style={{ fontWeight: 500, color: '#22242B' }}>Custom Proposal</h4>
              <p className="text-sm leading-relaxed" style={{ color: '#343843' }}>
                Within a few days, you'll receive a detailed trip proposal tailored to your preferences and budget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
