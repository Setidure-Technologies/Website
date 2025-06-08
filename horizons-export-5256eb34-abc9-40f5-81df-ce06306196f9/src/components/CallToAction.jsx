import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction = ({ 
  title, 
  subtitle, 
  buttonText = 'Get Started', 
  buttonLink = '/contact',
  secondaryButtonText,
  secondaryButtonLink,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="backdrop-blur-glass rounded-2xl p-10 border border-cyan-500/20 text-center max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-white mb-6 font-poppins">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Link 
          to={buttonLink} 
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full neon-glow transition-all duration-300"
        >
          {buttonText}
        </Link>
        
        {secondaryButtonText && secondaryButtonLink && (
          <Link 
            to={secondaryButtonLink} 
            className="inline-block bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            {secondaryButtonText}
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default CallToAction;