
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building, ShoppingCart, Mic2 } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: 'Higher Education & Career Guidance',
      description: 'AI-powered mentorship platforms, skill assessment tools, and career guidance systems for educational institutions.',
      features: ['Student Mentorship', 'Skill Gap Analysis', 'Career Matching', 'Certificate Management'],
      color: 'from-purple-500 to-pink-500',
      image: 'Students using AI-powered learning platform in modern classroom'
    },
    {
      icon: Building,
      title: 'Government AI & Compliance Automation',
      description: 'Document intelligence systems, procurement automation, and compliance tools for government organizations.',
      features: ['Document Processing', 'RFP Automation', 'Compliance Checking', 'Audit Systems'],
      color: 'from-blue-500 to-cyan-500',
      image: 'Government office with digital document processing and AI automation systems'
    },
    {
      icon: ShoppingCart,
      title: 'Retail & Geospatial Intelligence',
      description: 'Location analytics, market gap analysis, and retail presence optimization using AI and GIS technology.',
      features: ['Market Analysis', 'Location Intelligence', 'Gap Detection', 'Retail Optimization'],
      color: 'from-green-500 to-teal-500',
      image: 'Retail analytics dashboard showing geospatial data and market intelligence'
    },
    {
      icon: Mic2,
      title: 'Voice-based Training & Skill Development',
      description: 'Real-time speech analysis, pronunciation coaching, and language learning platforms for skill enhancement.',
      features: ['Speech Analysis', 'Pronunciation Training', 'Language Learning', 'Skill Assessment'],
      color: 'from-orange-500 to-red-500',
      image: 'Person using voice-based AI training system with real-time feedback'
    }
  ];

  return (
    <section id="industries" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/50"></div>
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
            Industries We <span className="gradient-text">Serve</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Transforming sectors with intelligent AI solutions tailored for real-world impact
          </p>
        </motion.div>

        <div className="space-y-16">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="backdrop-blur-glass rounded-2xl p-8 border border-cyan-500/20 card-3d">
                  {/* Icon and Title */}
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${industry.color} p-4 mr-4`}>
                      <industry.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-poppins">
                      {industry.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    {industry.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {industry.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 bg-slate-800/50 rounded-lg p-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.color}`}></div>
                        <span className="text-slate-300 text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                <div className="relative group">
                  <img  
                    className="rounded-2xl shadow-2xl w-full h-auto border border-cyan-500/20 group-hover:border-cyan-400/40 transition-all duration-300"
                    alt={`${industry.title} visualization`}
                   src="https://images.unsplash.com/photo-1606890761316-360fec457e76" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="backdrop-blur-glass rounded-2xl p-8 border border-cyan-500/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4 font-poppins">
              Don't See Your Industry?
            </h3>
            <p className="text-slate-300 text-lg mb-8">
              We build custom AI solutions for any sector. Our modular approach adapts to your specific industry needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full neon-glow"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Discuss Your Industry
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300"
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              >
                View All Solutions
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
