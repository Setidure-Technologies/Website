import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Brain, ShoppingCart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import '../styles/dropdown.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isAboutDropdownOpen && !event.target.closest('.dropdown-container')) {
        setIsAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, [isAboutDropdownOpen]);

  // Handle dropdown hover with delay
  const dropdownTimeoutRef = React.useRef(null);

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsAboutDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    // Add a small delay to prevent flickering when moving between button and menu
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 150);
  };

  const navItems = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'Services', href: '/services', type: 'route' },
    { name: 'Industries', href: '/industries', type: 'route' },
    { name: 'Store', href: '/store', type: 'route' },
    { name: 'Contact', href: '/contact', type: 'route' }
  ];

  const aboutDropdownItems = [
    { name: 'About Us', href: '/about', type: 'route' },
    { name: 'Vision & Mission', href: '/vision-mission', type: 'route' },
    { name: 'Approach', href: '/approach', type: 'route' },
    { name: 'Testimonials', href: '/testimonials', type: 'route' },
    { name: 'Blog', href: '/blog', type: 'route' }
  ];

  const handleNavClick = (href, type) => {
    setIsMobileMenuOpen(false);
    setIsAboutDropdownOpen(false);
    if (type === 'anchor') {
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        const element = document.getElementById(href.split('#')[1]);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };



  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-glass border-b border-cyan-500/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
              >
                <Brain className="w-8 h-8 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </motion.div>
              <div>
                <span className="text-xl font-bold font-poppins gradient-text">
                  Setidure
                </span>
                <div className="text-xs text-cyan-300 font-medium">
                  Technologies
                </div>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              {/* Home Link */}
              <Link to="/">
                <motion.span
                  className={`text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium ${
                    location.pathname === '/' ? 'text-cyan-400' : ''
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  Home
                </motion.span>
              </Link>

              {/* About Dropdown */}
              <div
                className="relative dropdown-container nav-item"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <motion.button
                  className={`flex items-center space-x-1 text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium ${
                    aboutDropdownItems.some(
                      (item) => location.pathname === item.href
                    )
                      ? 'text-cyan-400'
                      : ''
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                >
                  <span>About</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isAboutDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </motion.button>

                {/* Dropdown Menu */}
                {isAboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="dropdown-menu absolute top-full left-0 mt-2 w-48 backdrop-blur-glass border border-cyan-500/20 rounded-lg shadow-lg overflow-hidden z-50"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    {aboutDropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`block px-4 py-3 text-slate-300 hover:text-slate-900 hover:bg-cyan-400 transition-colors duration-200 font-medium ${
                          location.pathname === item.href
                            ? 'text-cyan-400 bg-cyan-400/10'
                            : ''
                        }`}
                        onClick={() => setIsAboutDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Other Navigation Items */}
              {navItems.slice(1).map((item) =>
                item.type === 'route' ? (
                  <Link key={item.name} to={item.href}>
                    <motion.span
                      className={`text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium ${
                        location.pathname === item.href ? 'text-cyan-400' : ''
                      }`}
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                ) : (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href, item.type);
                      }}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      {item.name}
                    </motion.a>
                )
              )}

              <Button
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-full neon-glow"
                onClick={() => handleNavClick('/#contact', 'anchor')}
              >
                Get Started
              </Button>
            </div>

            <button
              className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 pb-4 backdrop-blur-glass rounded-lg border border-cyan-500/20"
            >
              <div className="flex flex-col space-y-4 px-4 py-4">
                {/* Home Link */}
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span
                    className={`block py-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium ${
                      location.pathname === '/' ? 'text-cyan-400' : ''
                    }`}
                  >
                    Home
                  </span>
                </Link>

                {/* About Section in Mobile */}
                <div className="border-t border-cyan-500/20 pt-4 mt-4">
                  <button
                    onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                    className="flex items-center justify-between w-full py-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                  >
                    <span>About</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isAboutDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isAboutDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 mt-2 space-y-2"
                    >
                      {aboutDropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsAboutDropdownOpen(false);
                          }}
                          className={`block py-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 font-medium ${
                            location.pathname === item.href
                              ? 'text-cyan-400'
                              : ''
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Other Navigation Items */}
                {navItems.slice(1).map((item) =>
                  item.type === 'route' ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span
                        className={`block py-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium ${
                          location.pathname === item.href ? 'text-cyan-400' : ''
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href, item.type);
                      }}
                      className="block py-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                    >
                      {item.name}
                    </a>
                  )
                )}

                <Button
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-full neon-glow mt-4"
                  onClick={() => handleNavClick('/#contact', 'anchor')}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>

      {/* Floating CTA Button */}
      <motion.a
        href="https://payhip.com/SetidureN8NTemplates"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-full neon-glow shadow-lg flex items-center space-x-2"
      >
        <span>Explore Templates</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </motion.a>
    </>
  );
};

export default Header;
