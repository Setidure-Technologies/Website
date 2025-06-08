import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ 
  id, 
  icon: Icon, 
  title, 
  shortDesc, 
  description, 
  features, 
  color,
  isActive,
  onClick,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`backdrop-blur-glass rounded-2xl border border-cyan-500/20 overflow-hidden card-3d hover:border-cyan-400/40 transition-all duration-300 ${
        isActive ? 'ring-2 ring-cyan-400' : ''
      }`}
      onClick={onClick}
    >
      {/* Card Header */}
      <div className={`bg-gradient-to-r ${color} p-6`}>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Icon className="w-10 h-10 text-white" />
            <div className="absolute inset-0 bg-white blur-lg opacity-30"></div>
          </div>
          <h3 className="text-2xl font-bold text-white font-poppins">
            {title}
          </h3>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-6">
        <p className="text-slate-300 mb-4">
          {description}
        </p>
        
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isActive ? 'auto' : 0,
            opacity: isActive ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-cyan-500/20 mt-4">
            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h4>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span className="text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        <div className="mt-4 text-center">
          <button 
            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            {isActive ? 'Show Less' : 'Learn More'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;