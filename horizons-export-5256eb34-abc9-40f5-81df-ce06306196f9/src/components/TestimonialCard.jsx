import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TestimonialCard = ({ 
  quote, 
  author, 
  organization, 
  avatar, 
  rating = 5, 
  category,
  featured = false,
  delay = 0 
}) => {
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} 
      />
    ));
  };

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="backdrop-blur-glass rounded-2xl p-8 border border-cyan-500/20 card-3d hover:border-cyan-400/40 transition-all duration-300 relative"
      >
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 opacity-20">
          <Quote className="w-10 h-10 text-cyan-400" />
        </div>
        
        {/* Rating */}
        <div className="flex mb-6">
          {renderStars(rating)}
        </div>
        
        {/* Quote */}
        <p className="text-xl text-slate-200 leading-relaxed mb-8 font-poppins italic">
          "{quote}"
        </p>
        
        {/* Author */}
        <div className="flex items-center">
          <div className="relative mr-4">
            <img 
              src={avatar} 
              alt={author}
              className="w-12 h-12 rounded-full border-2 border-cyan-500/30"
            />
          </div>
          <div>
            <h4 className="text-white font-semibold">{author}</h4>
            <p className="text-slate-400 text-sm">{organization}</p>
          </div>
        </div>
        
        {/* Category Tag */}
        {category && (
          <div className="absolute top-8 left-8 bg-cyan-500/20 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="backdrop-blur-glass rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="relative mr-3">
            <img 
              src={avatar} 
              alt={author}
              className="w-10 h-10 rounded-full border-2 border-cyan-500/30"
            />
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm">{author}</h4>
            <p className="text-slate-400 text-xs">{organization}</p>
          </div>
        </div>
        <div className="flex">
          {renderStars(rating)}
        </div>
      </div>
      
      <p className="text-slate-300 leading-relaxed">
        "{quote}"
      </p>
      
      {category && (
        <div className="mt-4">
          <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default TestimonialCard;