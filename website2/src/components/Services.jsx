
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, FileText, Mic, Bot, MapPin, FileCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: 'Upadhyai Platform',
      description: 'An AI-powered student mentorship ecosystem with skill gap analysis, resume generator, job matching, and certificate suggestions — built with Langchain, Supabase, and n8n.',
      features: ['Skill Gap Analysis', 'Resume Generator', 'Job Matching', 'Certificate Suggestions'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FileText,
      title: 'Granthik',
      description: 'Document intelligence and search system with OCR + LangChain RAG, used for institutional document handling, auditing, and retrieval across formats.',
      features: ['OCR Processing', 'LangChain RAG', 'Document Search', 'Format Support'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Mic,
      title: 'VaakShakti',
      description: 'Real-time AI speech tutor using Whisper, prosody analysis, and LLMs — provides fluency, grammar, and pronunciation feedback with live audio.',
      features: ['Speech Analysis', 'Real-time Feedback', 'Pronunciation Guide', 'Grammar Check'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Bot,
      title: 'Multi-Agent LLM Infrastructure',
      description: 'LLM-powered agents that coordinate tasks across platforms (Canva, Ubuntu, Moodle, APIs) with local deployment using Ollama + Chroma + Docker.',
      features: ['Multi-Platform', 'Local Deployment', 'Task Coordination', 'Docker Support'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Geospatial Retail Intelligence',
      description: 'AI tools to analyze retail presence and gaps using GIS APIs like MapMyIndia, integrated with government mapping data for FMCG and automotive sectors.',
      features: ['GIS Integration', 'Retail Analysis', 'Gap Detection', 'Government Data'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FileCheck,
      title: 'AI for Government Procurement',
      description: 'RFP/tender parsing and intelligent response generation for SMEs bidding in e-procure platforms, with automated document generation and compliance matching.',
      features: ['RFP Parsing', 'Response Generation', 'Compliance Check', 'Document Automation'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900/50"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            What We <span className="gradient-text">Build</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Cutting-edge AI solutions designed for real-world impact across industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="backdrop-blur-glass rounded-2xl p-8 border border-cyan-500/20 h-full card-3d hover:border-cyan-400/40 transition-all duration-300">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <div className={`absolute inset-0 w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 font-poppins group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span className="text-slate-400 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="backdrop-blur-glass rounded-2xl p-8 border border-cyan-500/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
              Need a Custom AI Solution?
            </h3>
            <p className="text-slate-300 mb-6">
              We build tailored AI systems for your specific requirements. Let's discuss your project.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full neon-glow"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Discuss Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
