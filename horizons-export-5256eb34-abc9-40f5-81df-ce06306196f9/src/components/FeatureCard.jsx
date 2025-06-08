import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`backdrop-blur-glass rounded-xl p-6 border border-cyan-500/20 card-3d group hover:border-cyan-400/40 transition-all duration-300 ${className}`}
    >
      <div className="relative mb-4">
        <Icon className="w-12 h-12 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
        <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
      </div>
      <h4 className="text-lg font-semibold text-white mb-2 font-poppins">
        {title}
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;