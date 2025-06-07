
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Globe, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'No Cloud, Full On-Prem',
      description: 'Complete data sovereignty with private AI infrastructure'
    },
    {
      icon: Cpu,
      title: 'Multi-Agent RAG Systems',
      description: 'Human-like reasoning with advanced AI orchestration'
    },
    {
      icon: Globe,
      title: 'India-First Technology',
      description: 'Privacy-focused, locally developed solutions'
    },
    {
      icon: Users,
      title: 'Open Source',
      description: 'Transparent, customizable, and community-driven'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/50"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            About <span className="gradient-text">Setidure</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="backdrop-blur-glass rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-poppins">Who We Are</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                Setidure Technologies (previously Erudites Solutions) is an innovation-driven AI company 
                developing proprietary LLM-based automation platforms, government-grade document intelligence 
                systems, and intelligent voice tutoring agents.
              </p>
            </div>

            <div className="backdrop-blur-glass rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-poppins">Our Commitment</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                We're dedicated to building local, private, open-source AI infrastructure for educational 
                institutions, enterprises, and government bodies. No vendor lock-in, complete control.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-glass rounded-xl p-6 border border-cyan-500/20 card-3d group hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="relative mb-4">
                  <feature.icon className="w-12 h-12 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 font-poppins">
                  {feature.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative inline-block">
            <img  
              className="rounded-2xl shadow-2xl max-w-full h-auto border border-cyan-500/20 neon-glow"
              alt="AI technology and neural networks visualization"
             src="https://images.unsplash.com/photo-1678995635432-d9e89c7a8fc5" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
