
import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layers, Unlock } from 'lucide-react';
import AgentPipelineParallax from './AgentPipelineParallax';

const Approach = () => {
  const approaches = [
    {
      icon: Server,
      title: 'Local-First',
      description: 'All our systems are designed to work fully offline or on-premises',
      details: [
        'Complete data sovereignty',
        'No internet dependency',
        'Maximum security & privacy',
        'Regulatory compliance'
      ]
    },
    {
      icon: Layers,
      title: 'Modular Agentic Design',
      description: 'Each system component behaves like a specialized AI agent',
      details: [
        'Intelligent task coordination',
        'Scalable architecture',
        'Independent components',
        'Flexible integration'
      ]
    },
    {
      icon: Unlock,
      title: 'No Vendor Lock-in',
      description: 'Built on open-source tools and customizable layers',
      details: [
        'Open-source foundation',
        'Customizable components',
        'Standard protocols',
        'Future-proof design'
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 neural-bg opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Our <span className="gradient-text">Approach</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Three core principles that drive everything we build
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="backdrop-blur-glass rounded-2xl p-8 border border-cyan-500/20 h-full card-3d hover:border-cyan-400/40 transition-all duration-300 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 tech-grid opacity-5"></div>
                
                {/* Icon */}
                <div className="relative mb-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                    <approach.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4 font-poppins group-hover:text-cyan-400 transition-colors">
                    {approach.title}
                  </h3>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    {approach.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-3">
                    {approach.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (detailIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-slate-400">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Parallax Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl backdrop-blur-glass">
            <AgentPipelineParallax height="600px" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="backdrop-blur-glass rounded-xl p-6 border border-cyan-500/20 max-w-4xl mx-auto">
            <p className="text-lg text-slate-300">
              <span className="text-cyan-400 font-semibold">Intelligent by design.</span> 
              {' '}Watch our modular agents collaborate seamlessly while maintaining complete autonomy and control over your data.
            </p>
            <div className="mt-4 text-sm text-slate-400 text-center">
              <span className="inline-flex items-center space-x-2">
                <span>💡</span>
                <span>Scroll to see the agents in action</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
