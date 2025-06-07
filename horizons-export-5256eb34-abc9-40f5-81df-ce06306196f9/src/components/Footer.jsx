
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Industries', href: '#industries' }
    ],
    products: [
      { name: 'Upadhyai Platform', href: '#services' },
      { name: 'Granthik', href: '#services' },
      { name: 'VaakShakti', href: '#services' },
      { name: 'Multi-Agent AI', href: '#services' }
    ],
    resources: [
      { name: 'Case Studies', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Support', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:aashit@erudites.in', label: 'Email' }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-slate-900 to-slate-800 border-t border-cyan-500/20">
      <div className="absolute inset-0 tech-grid opacity-5"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Brain className="w-10 h-10 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-30"></div>
              </div>
              <div>
                <span className="text-2xl font-bold font-poppins gradient-text">
                  Setidure
                </span>
                <div className="text-sm text-cyan-300 font-medium">
                  Technologies
                </div>
              </div>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              AI Infrastructure for a Smarter Tomorrow. Building intelligent automation systems 
              that are private, secure, and fully on-premises.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
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

          {/* Links Sections */}
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
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      {link.name}
                      {link.href.startsWith('http') && (
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
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
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg neon-glow whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-cyan-500/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2025 Setidure Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-50 animate-pulse delay-500"></div>
    </footer>
  );
};

export default Footer;
