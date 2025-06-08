import React from 'react';
import { motion } from 'framer-motion';

const ContentCard = ({ title, children, icon: Icon, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={`backdrop-blur-glass rounded-2xl p-8 border border-cyan-500/20 ${className}`}
    >
      {(title || Icon) && (
        <div className="flex items-center mb-6">
          {Icon && (
            <div className="relative mr-4">
              <Icon className="w-10 h-10 text-cyan-400" />
              <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-30"></div>
            </div>
          )}
          {title && (
            <h2 className="text-2xl font-bold text-cyan-400 font-poppins">
              {title}
            </h2>
          )}
        </div>
      )}
      
      <div className="space-y-4 text-slate-300">
        {children}
      </div>
    </motion.div>
  );
};

export default ContentCard;