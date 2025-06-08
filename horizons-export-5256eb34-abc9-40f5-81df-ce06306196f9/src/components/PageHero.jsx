import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ title, subtitle, highlightText, children }) => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 tech-grid"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
            {title} {highlightText && <span className="gradient-text">{highlightText}</span>}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8"></div>
          
          {subtitle && (
            <p className="text-xl text-slate-300 mb-12">
              {subtitle}
            </p>
          )}
          
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;