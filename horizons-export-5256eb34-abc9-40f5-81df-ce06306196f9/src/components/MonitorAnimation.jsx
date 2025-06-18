import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * MonitorAnimation - Simple animated monitor displaying names
 * Features:
 * - Animated monitor with screen
 * - Typing effect for names
 * - Blinking cursor
 * - Retro computer aesthetic
 */
const MonitorAnimation = ({ 
  width = '100%', 
  height = '400px',
  names = ['Aashit', 'Arindam'],
  typingSpeed = 150,
  pauseDuration = 2000
}) => {
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentName = names[currentNameIndex];
    let timeoutId;

    if (isTyping) {
      if (displayText.length < currentName.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentName.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, typingSpeed / 2);
      } else {
        setCurrentNameIndex((prev) => (prev + 1) % names.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentNameIndex, names, typingSpeed, pauseDuration]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div 
      className="flex items-center justify-center p-8"
      style={{ width, height }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        {/* Monitor Base */}
        <div className="relative">
          {/* Monitor Stand */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gradient-to-b from-slate-600 to-slate-700 rounded-b-lg"></div>
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-32 h-3 bg-gradient-to-b from-slate-700 to-slate-800 rounded-full"></div>
          
          {/* Monitor Body */}
          <div className="relative bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 p-6 rounded-2xl shadow-2xl border-2 border-slate-600">
            {/* Monitor Screen */}
            <div className="relative bg-black rounded-lg p-8 border-2 border-slate-600 shadow-inner">
              {/* Screen Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-green-500/10 rounded-lg"></div>
              
              {/* Screen Content */}
              <div className="relative z-10 h-48 flex items-center justify-center">
                <div className="text-center">
                  {/* Terminal Prompt */}
                  <div className="text-green-400 text-sm font-mono mb-4 text-left">
                    <span className="text-cyan-400">setidure@tech:~$ </span>
                    <span className="text-white">whoami</span>
                  </div>
                  
                  {/* Animated Name Display */}
                  <div className="text-4xl md:text-5xl font-bold font-mono text-center">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      {displayText}
                    </span>
                    <span className={`text-cyan-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
                      |
                    </span>
                  </div>
                  
                  {/* Subtitle */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-green-400 text-sm font-mono mt-4"
                  >
                    Developer @ Setidure Technologies
                  </motion.div>
                </div>
              </div>
              
              {/* Screen Scanlines Effect */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="h-full w-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent bg-repeat-y animate-pulse"></div>
              </div>
            </div>
            
            {/* Monitor Details */}
            <div className="flex justify-between items-center mt-4">
              {/* Power Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-3 h-3 bg-green-500 rounded-full shadow-lg cursor-pointer"
                style={{
                  boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)'
                }}
              ></motion.div>
              
              {/* Brand Label */}
              <div className="text-xs text-slate-400 font-mono">
                SETIDURE TECH
              </div>
              
              {/* Status LEDs */}
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MonitorAnimation;