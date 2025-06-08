import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, highlightText, center = true, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
        {title} {highlightText && <span className="gradient-text">{highlightText}</span>}
      </h2>
      <div className={`w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 ${center ? 'mx-auto' : ''} mb-6`}></div>
      
      {subtitle && (
        <p className={`text-xl text-slate-300 ${center ? 'max-w-3xl mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;