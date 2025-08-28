import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Instagram } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Contact', path: '/contact' },
    { name: 'Facilities', path: '/facilities' },
  ];

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Only add scroll listener on home page
    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true); // Always "scrolled" state on other pages
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  // Determine header classes based on page and scroll state
  const getHeaderClasses = () => {
    if (isHomePage) {
      return isScrolled
        ? 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/90 backdrop-blur-md shadow-lg py-2'
        : 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-4';
    } else {
      return 'fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md shadow-lg py-2';
    }
  };

  return (
    <>
      {/* Header */}
      <header className={getHeaderClasses()}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo - Top Left */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 border border-white/20 flex items-center justify-center mr-2 lg:mr-3">
                <span className="text-white font-bold text-lg lg:text-xl">HF</span>
              </div>
              <div className="text-white">
                <p className="text-md tracking-[0.2em] text-white uppercase">Pool Resorto</p>
              </div>
            </Link>

            {/* Center Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-white hover:text-blue-400 transition-colors duration-300 font-medium text-sm tracking-wide px-4 py-2 ${isActive(item.path) ? 'border-b-2 border-white pb-1' : ''
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Section - Social Icons & Book Button */}
            <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
              {/* Social Icons */}
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* Book Button */}
              <Link
                to="/contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium text-sm tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ml-4"
              >
                Book A Room
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white p-2 focus:outline-none flex-shrink-0 ml-4"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={toggleMobileMenu}></div>

          <div className="fixed top-20 right-0 w-80 h-[calc(100vh-5rem)] bg-white shadow-2xl transform transition-transform duration-300 rounded-tl-lg">
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-800 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">HF</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Resort</p>
                </div>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="p-6 overflow-y-auto">
              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium py-2 block ${isActive(item.path) ? 'text-blue-600 border-l-4 border-blue-600 pl-4' : ''
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-6 mt-8 pt-6 border-t">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>

              {/* Mobile Book Button */}
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-medium tracking-wide transition-all duration-300 text-center block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book A Room
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
