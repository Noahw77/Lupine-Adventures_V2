export function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-b from-[#F5F2F9] to-white border-t border-[#9F8EC6]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 
              className="text-2xl mb-4"
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                color: '#22242B'
              }}
            >
              Lupine Adventures
            </h3>
            <p className="leading-relaxed" style={{ color: '#343843' }}>
              Local experts crafting exceptional adventures in Jackson Hole and Yellowstone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4" style={{ color: '#A7B49A', fontWeight: 500 }}>
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#experiences" className="hover:text-[#9F8EC6] transition-colors" style={{ color: '#343843' }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#9F8EC6] transition-colors" style={{ color: '#343843' }}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#9F8EC6] transition-colors" style={{ color: '#343843' }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4" style={{ color: '#A7B49A', fontWeight: 500 }}>
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@lupineadventures.com" className="hover:text-[#9F8EC6] transition-colors" style={{ color: '#343843' }}>
                  hello@lupineadventures.com
                </a>
              </li>
              <li style={{ color: '#343843' }}>
                Jackson Hole, Wyoming
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#9F8EC6]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: '#343843' }}>
            © {new Date().getFullYear()} Lupine Adventures. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-[#9F8EC6] transition-colors" style={{ color: '#343843' }}>
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#9F8EC6] transition-colors" style={{ color: '#343843' }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
