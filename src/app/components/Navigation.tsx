import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTripsOpen, setIsTripsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#9F8EC6]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl tracking-tight hover:text-[#9F8EC6] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#22242B' }}>
              Lupine Adventures
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {/* Trips Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsTripsOpen(true)}
              onMouseLeave={() => setIsTripsOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-[#343843] hover:text-[#9F8EC6] transition-colors duration-300"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
              >
                Trips
                <ChevronDown size={16} className={`transition-transform duration-200 ${isTripsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isTripsOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white rounded-lg shadow-lg border border-[#9F8EC6]/10 py-2 w-64">
                    <Link 
                      to="/trips/jackson-hole-summer"
                      className="block px-4 py-3 text-[#343843] hover:bg-[#9F8EC6]/5 hover:text-[#9F8EC6] transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                    >
                      Jackson Hole - Summer
                    </Link>
                    <Link 
                      to="/trips/jackson-hole-winter"
                      className="block px-4 py-3 text-[#343843] hover:bg-[#9F8EC6]/5 hover:text-[#9F8EC6] transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                    >
                      Jackson Hole - Winter
                    </Link>
                    <Link 
                      to="/trips/yellowstone-summer"
                      className="block px-4 py-3 text-[#343843] hover:bg-[#9F8EC6]/5 hover:text-[#9F8EC6] transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                    >
                      Jackson Hole & Yellowstone - Summer
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-[#343843] hover:text-[#9F8EC6] transition-colors duration-300"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
              >
                About
                <ChevronDown size={16} className={`transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAboutOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white rounded-lg shadow-lg border border-[#9F8EC6]/10 py-2 w-64">
                    <Link 
                      to="/about/philosophy"
                      className="block px-4 py-3 text-[#343843] hover:bg-[#9F8EC6]/5 hover:text-[#9F8EC6] transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                    >
                      Our Trip Planning Philosophy
                    </Link>
                    <Link 
                      to="/about/history"
                      className="block px-4 py-3 text-[#343843] hover:bg-[#9F8EC6]/5 hover:text-[#9F8EC6] transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                    >
                      Company History
                    </Link>
                    <Link 
                      to="/about/team"
                      className="block px-4 py-3 text-[#343843] hover:bg-[#9F8EC6]/5 hover:text-[#9F8EC6] transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                    >
                      Meet the Team
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-[#343843] hover:text-[#9F8EC6] transition-colors duration-300"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
              >
                Resources
                <ChevronDown size={16} className={`transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isResourcesOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white rounded-lg shadow-lg border border-[#9F8EC6]/10 py-2 w-64">
                    <Link 
                      to="/resources/free-activities"
                      className="block px-4 py-3 text-[#343843] hover:bg-[#9F8EC6]/5 hover:text-[#9F8EC6] transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                    >
                      Free & Low-Cost Activities
                    </Link>
                    <Link 
                      to="/resources/restaurants"
                      className="block px-4 py-3 text-[#343843] hover:bg-[#9F8EC6]/5 hover:text-[#9F8EC6] transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                    >
                      Restaurant Guide
                    </Link>
                    <Link 
                      to="/resources/blog"
                      className="block px-4 py-3 text-[#343843] hover:bg-[#9F8EC6]/5 hover:text-[#9F8EC6] transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                    >
                      Blog & Insights
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/contact" className="px-6 py-2.5 bg-[#9F8EC6] text-white rounded-md hover:bg-[#8C7AB3] transition-all duration-300" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#343843]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-[#9F8EC6]/10">
            <div className="flex flex-col space-y-4">
              {/* Mobile Trips */}
              <div>
                <button
                  onClick={() => setIsTripsOpen(!isTripsOpen)}
                  className="flex items-center justify-between w-full text-[#343843] hover:text-[#9F8EC6] transition-colors duration-300"
                >
                  <span>Trips</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isTripsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isTripsOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link 
                      to="/trips/jackson-hole-summer"
                      className="block py-2 text-[#343843] hover:text-[#9F8EC6] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Jackson Hole - Summer
                    </Link>
                    <Link 
                      to="/trips/jackson-hole-winter"
                      className="block py-2 text-[#343843] hover:text-[#9F8EC6] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Jackson Hole - Winter
                    </Link>
                    <Link 
                      to="/trips/yellowstone-summer"
                      className="block py-2 text-[#343843] hover:text-[#9F8EC6] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Jackson Hole & Yellowstone - Summer
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile About */}
              <div>
                <button
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className="flex items-center justify-between w-full text-[#343843] hover:text-[#9F8EC6] transition-colors duration-300"
                >
                  <span>About</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                {isAboutOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link 
                      to="/about/philosophy"
                      className="block py-2 text-[#343843] hover:text-[#9F8EC6] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Our Trip Planning Philosophy
                    </Link>
                    <Link 
                      to="/about/history"
                      className="block py-2 text-[#343843] hover:text-[#9F8EC6] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Company History
                    </Link>
                    <Link 
                      to="/about/team"
                      className="block py-2 text-[#343843] hover:text-[#9F8EC6] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Meet the Team
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Resources */}
              <div>
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="flex items-center justify-between w-full text-[#343843] hover:text-[#9F8EC6] transition-colors duration-300"
                >
                  <span>Resources</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isResourcesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link 
                      to="/resources/free-activities"
                      className="block py-2 text-[#343843] hover:text-[#9F8EC6] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Free & Low-Cost Activities
                    </Link>
                    <Link 
                      to="/resources/restaurants"
                      className="block py-2 text-[#343843] hover:text-[#9F8EC6] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Restaurant Guide
                    </Link>
                    <Link 
                      to="/resources/blog"
                      className="block py-2 text-[#343843] hover:text-[#9F8EC6] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Blog & Insights
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/contact" 
                className="inline-block px-6 py-2.5 bg-[#9F8EC6] text-white rounded-md hover:bg-[#8C7AB3] transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
