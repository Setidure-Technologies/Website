
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Rocket } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
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
