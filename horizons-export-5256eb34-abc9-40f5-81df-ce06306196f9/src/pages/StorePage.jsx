
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Zap, Lock, FileText, BrainCircuit, Mic, TestTube2, ArrowRight, ChevronRight, Home } from 'lucide-react';

const StorePage = () => {
  const storeHighlights = [
    {
      icon: Zap,
      title: 'Automation Templates',
      description: 'Get plug-and-play workflows for CRM, job recommendation engines, AI email bots, lead generation, and more.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: BrainCircuit,
      title: 'AI-Powered Tools',
      description: 'Each template is optimized for AI agent orchestration using local models (Ollama), LangChain, or n8n.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lock,
      title: 'Privacy-First Solutions',
      description: 'All our flows can be deployed locally — no cloud dependency, fully customizable.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const featuredTemplates = [
    {
      icon: FileText,
      title: 'Interview Prep Report Generator',
      description: 'Automatically generates personalized PDFs based on student profiles and job descriptions.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: BrainCircuit,
      title: 'Skill Gap Analyzer',
      description: 'Upload job descriptions and resumes to get skill gap reports and course suggestions.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Mic,
      title: 'Voice Fluency Evaluator (VaakShakti)',
      description: 'Real-time audio evaluation flows using Whisper and local LLMs.',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: TestTube2,
      title: 'MBTI & Psychometric Test Flow',
      description: 'Launch MBTI tests with automated report generation and result-based page sharing.',
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  const testimonials = [
    {
      quote: "These flows saved our team hundreds of hours. The efficiency gains are incredible!",
      author: "Project Manager, Innovatech",
    },
    {
      quote: "Finally, a privacy-respecting way to use AI for student engagement. Setidure's templates are game-changers.",
      author: "Dean of Students, Future University",
    }
  ];

  const SectionDivider = () => (
    <motion.div 
      className="h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-16"
      initial={{ width: 0 }}
      whileInView={{ width: '100%' }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
    />
  );

  return (
    <div className="min-h-screen pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 neural-bg hero-pattern"></div>
      <div className="absolute inset-0 tech-grid opacity-20"></div>

      {/* Breadcrumbs */}
      <motion.nav 
        className="container mx-auto px-6 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ol className="flex items-center space-x-2 text-sm text-slate-400">
          <li>
            <a href="/" className="hover:text-cyan-400 transition-colors flex items-center">
              <Home className="w-4 h-4 mr-1.5" /> Home
            </a>
          </li>
          <li><ChevronRight className="w-4 h-4 text-slate-500" /></li>
          <li className="text-cyan-400 font-medium">Store</li>
        </ol>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        className="container mx-auto px-6 text-center mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-4">
          Setidure AI <span className="gradient-text">Template Store</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
          Ready-made automation flows for your business, built with n8n, Ollama, and AI agents.
        </p>
      </motion.section>

      {/* Store Highlights */}
      <motion.section 
        className="container mx-auto px-6 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-3 gap-8">
          {storeHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-glass rounded-2xl p-8 border border-cyan-500/20 card-3d group hover:border-cyan-400/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${highlight.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <highlight.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-poppins group-hover:text-cyan-400 transition-colors">
                {highlight.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <SectionDivider />

      {/* Featured Templates */}
      <motion.section 
        className="container mx-auto px-6 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-12">
          Featured <span className="gradient-text">Templates</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTemplates.map((template, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-glass rounded-2xl p-6 border border-cyan-500/20 card-3d group hover:border-cyan-400/40 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${template.color} p-3 mb-4 self-start group-hover:scale-110 transition-transform duration-300`}>
                <template.icon className="w-full h-full text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 font-poppins group-hover:text-cyan-400 transition-colors">
                {template.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                {template.description}
              </p>
              <Button 
                variant="link" 
                className="mt-4 text-cyan-400 hover:text-cyan-300 p-0 self-start group-hover:underline"
                onClick={() => window.open('https://payhip.com/SetidureN8NTemplates', '_blank')}
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <SectionDivider />
      
      {/* Testimonials Section (Optional) */}
      <motion.section 
        className="container mx-auto px-6 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-12">
          What Our <span className="gradient-text">Users Say</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-glass rounded-xl p-8 border border-cyan-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <p className="text-slate-300 italic text-lg mb-4">"{testimonial.quote}"</p>
              <p className="text-cyan-400 font-semibold text-right">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <SectionDivider />

      {/* Call to Action */}
      <motion.section 
        className="container mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="backdrop-blur-glass rounded-2xl p-10 md:p-16 border border-cyan-500/20 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-6">
            Ready to power your workflows with Setidure templates?
          </h2>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-10 py-4 rounded-full neon-glow text-lg group"
            onClick={() => window.open('https://payhip.com/SetidureN8NTemplates', '_blank')}
          >
            Browse Templates on Payhip
            <ShoppingCart className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
          <p className="text-slate-400 mt-6 text-sm">
            Securely purchase and download templates from our official Payhip store.
          </p>
        </div>
      </motion.section>

      {/* Sticky CTA Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-full neon-glow shadow-2xl group"
          onClick={() => window.open('https://payhip.com/SetidureN8NTemplates', '_blank')}
          aria-label="Browse Templates on Payhip"
        >
          <ShoppingCart className="mr-2 w-5 h-5 group-hover:animate-pulse" />
          Store
        </Button>
      </motion.div>
    </div>
  );
};

export default StorePage;
