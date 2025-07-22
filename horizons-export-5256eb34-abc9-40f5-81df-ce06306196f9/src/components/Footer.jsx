
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Github, Linkedin, Mail, ExternalLink, ChevronRight, Home } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const isStorePage = location.pathname === '/store';

  const footerLinks = {
    company: [
      { name: 'Home', href: '/', type: 'route' },
      { name: 'About', href: '/#about', type: 'anchor' },
      { name: 'Services', href: '/#services', type: 'anchor' },
      { name: 'Store', href: '/store', type: 'route' },
      { name: 'Privacy Policy', href: '/privacy-policy', type: 'route' },
      { name: 'Refund Policy', href: '/refund-policy', type: 'route' },
      { name: 'Terms & Conditions', href: '/terms', type: 'route' },
      { name: 'Company Info', href: '/company-info', type: 'route' }
    ],
    products: [
      { name: 'Upadhyai Platform', href: '/#services', type: 'anchor' },
      { name: 'Granthik', href: '/#services', type: 'anchor' },
      { name: 'VaakShakti', href: '/#services', type: 'anchor' },
      { name: 'Multi-Agent AI', href: '/#services', type: 'anchor' }
    ],
    resources: [
      { name: 'Case Studies', href: '#', type: 'external' },
      { name: 'Documentation', href: '#', type: 'external' },
      { name: 'API Reference', href: '#', type: 'external' },
      { name: 'Support', href: '/#contact', type: 'anchor' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:aashit@erudites.in', label: 'Email' }
  ];

  const handleFooterLinkClick = (href, type) => {
    if (type === 'anchor') {
      if (location.pathname !== '/') {
        window.location.href = href; 
      } else {
        const elementId = href.split('#')[1];
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };


  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-slate-900 to-slate-800 border-t border-cyan-500/20">
      <div className="absolute inset-0 tech-grid opacity-5"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Breadcrumbs for Store Page */}
        {isStorePage && (
          <motion.nav 
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ol className="flex items-center space-x-2 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors flex items-center">
                  <Home className="w-4 h-4 mr-1.5" /> Home
                </Link>
              </li>
              <li><ChevronRight className="w-4 h-4 text-slate-500" /></li>
              <li className="text-cyan-400 font-medium">Store</li>
            </ol>
          </motion.nav>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <Brain className="w-10 h-10 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div>
                <span className="text-2xl font-bold font-poppins gradient-text">
                  Setidure
                </span>
                <div className="text-sm text-cyan-300 font-medium">
                  Technologies
                </div>
              </div>
            </Link>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              AI Infrastructure for a Smarter Tomorrow. Building intelligent automation systems 
              that are private, secure, and fully on-premises.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-slate-800/50 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (categoryIndex + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-lg font-semibold text-white mb-6 block font-poppins capitalize">
                {category}
              </span>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    {link.type === 'route' ? (
                      <Link to={link.href}>
                        <motion.span
                          whileHover={{ x: 5 }}
                          className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                        >
                          {link.name}
                        </motion.span>
                      </Link>
                    ) : link.type === 'anchor' ? (
                       <a href={link.href} onClick={(e) => { e.preventDefault(); handleFooterLinkClick(link.href, link.type);}}>
                        <motion.span
                          whileHover={{ x: 5 }}
                          className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group cursor-pointer"
                        >
                          {link.name}
                        </motion.span>
                      </a>
                    ) : (
                      <motion.a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                      >
                        {link.name}
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="backdrop-blur-glass rounded-2xl p-8 border border-cyan-500/20 mb-12"
        >
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-2xl font-bold text-white mb-4 block font-poppins">
              Stay Updated with AI Innovations
            </span>
            <p className="text-slate-300 mb-6">
              Get the latest insights on AI technology, product updates, and industry trends.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors"
                aria-label="Email for newsletter"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg neon-glow whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-cyan-500/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2025 Setidure Technologies Pvt Ltd | CIN: U62099DL2025PTC449506
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/refund-policy" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Refund Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/company-info" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Company Info
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-50 animate-pulse delay-500"></div>
    </footer>
  );
};

export default Footer;
