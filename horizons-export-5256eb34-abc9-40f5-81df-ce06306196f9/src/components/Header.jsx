
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Brain, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'About', href: '/#about', type: 'anchor' },
    { name: 'Services', href: '/#services', type: 'anchor' },
    { name: 'Store', href: '/store', type: 'route' },
    { name: 'Contact', href: '/#contact', type: 'anchor' }
  ];

  const handleNavClick = (href, type) => {
    setIsMobileMenuOpen(false);
    if (type === 'anchor') {
      if (location.pathname !== '/') {
        // Navigate to home then scroll
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
            {navItems.map((item) => (
              item.type === 'route' ? (
                <Link key={item.name} to={item.href}>
                  <motion.span
                    className={`text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium ${location.pathname === item.href ? 'text-cyan-400' : ''}`}
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
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href, item.type);}}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                </motion.a>
              )
            ))}
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
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
              {navItems.map((item) => (
                 item.type === 'route' ? (
                  <Link key={item.name} to={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                    <span className={`block py-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium ${location.pathname === item.href ? 'text-cyan-400' : ''}`}>
                      {item.name}
                    </span>
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href, item.type);}}
                    className="block py-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </a>
                )
              ))}
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
  );
};

export default Header;
