
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Rocket } from 'lucide-react';

// North Star Component with advanced animations
const NorthStar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.querySelector('.north-star-container').getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      setMousePosition({
        x: (e.clientX - centerX) * 0.1, // Parallax multiplier
        y: (e.clientY - centerY) * 0.1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate random positions for background stars
  const backgroundStars = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    scale: 0.3 + Math.random() * 0.7
  }));

  return (
    <div className="north-star-container absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Background twinkling stars */}
      {backgroundStars.map(star => (
        <motion.div
          key={star.id}
          className="absolute w-1 h-1 bg-cyan-300 rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [star.scale, star.scale * 1.5, star.scale],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Main North Star */}
      <motion.div
        className="relative pointer-events-auto cursor-pointer"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Star Halo/Glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-400 blur-xl opacity-30"
          style={{ width: '120px', height: '120px', top: '-35px', left: '-35px' }}
          animate={{
            scale: isHovered ? [1, 1.8, 1.4] : [1, 1.2, 1],
            opacity: isHovered ? [0.3, 0.7, 0.5] : [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: isHovered ? 0.8 : 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Main Star Body */}
        <motion.div
          className="relative w-12 h-12 flex items-center justify-center"
          animate={{
            rotate: isHovered ? [0, 45, 0] : 0,
            scale: isHovered ? 1.3 : 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          {/* Star Shape using CSS */}
          <div className="star-shape relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-200 via-white to-cyan-200 star-svg"
              animate={{
                opacity: isHovered ? [0.8, 1, 0.9] : [0.6, 0.8, 0.6],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: isHovered ? 1 : 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Sparkle Effects on Hover */}
          {isHovered && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: Math.cos((i * Math.PI * 2) / 8) * (20 + Math.random() * 20),
                    y: Math.sin((i * Math.PI * 2) / 8) * (20 + Math.random() * 20),
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                />
              ))}
            </>
          )}

          {/* Light Rays on Hover */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0.4] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-gradient-to-r from-transparent via-cyan-200 to-transparent opacity-60"
                  style={{
                    width: '2px',
                    height: '60px',
                    left: '50%',
                    top: '50%',
                    transformOrigin: 'center bottom',
                    transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
                  }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
          style={{ width: '50px', height: '50px', top: '-1px', left: '-1px' }}
          animate={{
            x: [-20, 70, -20],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
    </div>
  );
};

const VisionMission = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      {/* North Star Animation */}
      <NorthStar />
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Vision & <span className="gradient-text">Mission</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="backdrop-blur-glass rounded-2xl p-8 border border-cyan-500/20 h-full glow-border">
              <div className="flex items-center mb-6">
                <div className="relative mr-4">
                  <Eye className="w-12 h-12 text-cyan-400" />
                  <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-30"></div>
                </div>
                <h3 className="text-3xl font-bold text-white font-poppins">Vision</h3>
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                To become India's leading builder of fully private, agent-based AI systems that power 
                secure, intelligent, and scalable automation across industries.
              </p>

              <div className="space-y-4">
                {[
                  'Leading AI innovation in India',
                  'Private & secure by design',
                  'Scalable across all industries',
                  'Agent-based intelligence'
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-400">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="backdrop-blur-glass rounded-2xl p-8 border border-cyan-500/20 h-full glow-border">
              <div className="flex items-center mb-6">
                <div className="relative mr-4">
                  <Target className="w-12 h-12 text-cyan-400" />
                  <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-30"></div>
                </div>
                <h3 className="text-3xl font-bold text-white font-poppins">Mission</h3>
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                To democratize AI-powered infrastructure by making self-hosted, open-source systems 
                accessible for education, enterprises, and government institutions.
              </p>

              <div className="space-y-4">
                {[
                  'Democratize AI technology',
                  'Self-hosted solutions',
                  'Open-source accessibility',
                  'Multi-sector impact'
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-400">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="backdrop-blur-glass rounded-2xl p-8 border border-cyan-500/20 max-w-4xl mx-auto">
            <Rocket className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
              Ready to Transform Your Organization?
            </h3>
            <p className="text-slate-300 text-lg mb-6">
              Join us in building the future of AI infrastructure. Private, secure, and powerful.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full neon-glow"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your AI Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;

// Add this CSS to your global styles or as a styled component
const starStyles = `
  .star-shape {
    width: 50px;
    height: 50px;
    position: relative;
  }
  
  .star-svg {
    width: 100%;
    height: 100%;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    filter: drop-shadow(0 0 10px rgba(103, 232, 249, 0.5));
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = starStyles;
  document.head.appendChild(styleElement);
}
