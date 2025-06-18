import React from 'react';
import { motion } from 'framer-motion';
import MonitorAnimation from './MonitorAnimation';
import AgentPipelineParallax from './AgentPipelineParallax';

/**
 * AnimationShowcase - Demonstrates both animation components
 * This component can be used for testing and demonstration purposes
 */
const AnimationShowcase = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Animation <span className="gradient-text">Showcase</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Experience our cutting-edge animations: Monitor Display and Agent Pipeline Parallax
          </p>
        </motion.div>
      </div>

      {/* Monitor Animation Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Monitor Display Animation
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Retro computer monitor displaying team member names with typing effect
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-glass rounded-2xl border border-cyan-500/20 overflow-hidden"
          >
            <MonitorAnimation 
              height="500px"
              names={['Aashit', 'Arindam']}
              typingSpeed={100}
              pauseDuration={2000}
            />
          </motion.div>
        </div>
      </section>

      {/* Agent Pipeline Parallax Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Agent Pipeline Parallax
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Scroll-based parallax animation showing AI agent workflow with decision points
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-glass rounded-2xl border border-cyan-500/20 overflow-hidden"
          >
            <AgentPipelineParallax height="700px" />
          </motion.div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Animation Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* 3D Logo Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-glass rounded-xl p-8 border border-cyan-500/20"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Monitor Display Animation</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Retro computer monitor design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Typing animation effect</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Blinking cursor simulation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Terminal-style interface</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Screen glow & scanlines</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Name cycling animation</span>
                </li>
              </ul>
            </motion.div>

            {/* Parallax Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-glass rounded-xl p-8 border border-purple-500/20"
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Agent Pipeline Parallax</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Scroll-based parallax layers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Interactive agent nodes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Animated data flow</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Decision point branching</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Hover tooltips & info</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Framer Motion powered</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="backdrop-blur-glass rounded-xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to integrate these animations?
            </h3>
            <p className="text-slate-300 mb-6">
              Both animations are fully modular, customizable, and production-ready. 
              Check the documentation for implementation details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors">
                View Monitor Docs
              </button>
              <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-colors">
                View Parallax Docs
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AnimationShowcase;