import { Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F6F7F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <div className="lg:col-span-2">
            <p className="text-[#A7B49A] tracking-wider uppercase mb-4" style={{ fontSize: '0.875rem', letterSpacing: '0.15em', fontWeight: 500 }}>
              Let's Talk
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
              Book your free consultation
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#343843' }}>
              Not sure where to start? We offer a complimentary 30-minute trip consultation to help you plan the perfect Jackson Hole or Yellowstone adventure.
            </p>
            
            <div className="bg-[#9F8EC6]/10 border border-[#9F8EC6]/20 rounded-lg p-6 mb-12">
              <p className="text-base leading-relaxed" style={{ color: '#343843' }}>
                <strong style={{ color: '#9F8EC6' }}>What to expect:</strong> We'll discuss your travel dates, interests, budget, and what kind of experience you're looking for. No pressure, no sales pitch—just helpful advice from locals who know this area inside and out.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#9F8EC6]/10 flex items-center justify-center">
                  <Mail size={20} style={{ color: '#9F8EC6' }} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider mb-1" style={{ color: '#A7B49A', fontWeight: 500 }}>
                    Email
                  </p>
                  <a href="mailto:hello@lupineadventures.com" className="text-lg hover:text-[#9F8EC6] transition-colors" style={{ color: '#343843' }}>
                    hello@lupineadventures.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#A7B49A]/10 flex items-center justify-center">
                  <MapPin size={20} style={{ color: '#A7B49A' }} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider mb-1" style={{ color: '#A7B49A', fontWeight: 500 }}>
                    Location
                  </p>
                  <p className="text-lg" style={{ color: '#343843' }}>
                    Jackson Hole, Wyoming
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3">
            <form className="bg-white/80 backdrop-blur-sm rounded-lg p-8 lg:p-10 border border-[#9F8EC6]/10">
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-2" style={{ color: '#343843', fontWeight: 500 }}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9F8EC6]/50 transition-all"
                      style={{ borderColor: '#9F8EC6', borderWidth: '1px' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-2" style={{ color: '#343843', fontWeight: 500 }}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9F8EC6]/50 transition-all"
                      style={{ borderColor: '#9F8EC6', borderWidth: '1px' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm uppercase tracking-wider mb-2" style={{ color: '#343843', fontWeight: 500 }}>
                    I'm interested in...
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-3 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9F8EC6]/50 transition-all"
                    style={{ borderColor: '#9F8EC6', borderWidth: '1px', color: '#343843' }}
                  >
                    <option value="">Select an option</option>
                    <option value="consultation">Free 30-minute consultation</option>
                    <option value="single-activity">Booking a single activity</option>
                    <option value="trip-package">Pre-designed trip package</option>
                    <option value="custom">Fully customized trip</option>
                    <option value="not-sure">Not sure yet—just exploring</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-2" style={{ color: '#343843', fontWeight: 500 }}>
                    Tell us more
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Share any details about your ideal trip—timing, interests, group size, or questions you have."
                    className="w-full px-4 py-3 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9F8EC6]/50 transition-all resize-none"
                    style={{ borderColor: '#9F8EC6', borderWidth: '1px' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#9F8EC6] text-white rounded-md hover:bg-[#8C7AB3] transition-all duration-300"
                  style={{ fontWeight: 500 }}
                >
                  Request Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
