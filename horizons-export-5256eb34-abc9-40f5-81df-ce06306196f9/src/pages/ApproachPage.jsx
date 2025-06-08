import React from 'react';
import { motion } from 'framer-motion';
import { Server, Users, Cloud, Code, Scale, Map } from 'lucide-react';

const ApproachPage = () => {
  const approaches = [
    {
      id: 'local-first',
      icon: Server,
      title: 'Local-First Infrastructure',
      description: 'All systems work fully offline or on internal networks.',
      details: [
        'Complete data sovereignty with no external dependencies',
        'Works in air-gapped environments',
        'Reduced latency with local processing',
        'Full control over hardware resources'
      ]
    },
    {
      id: 'agentic-design',
      icon: Users,
      title: 'Agentic Design Philosophy',
      description: 'Modular AI agents for specialized tasks—retrieval, analysis, recommendation, etc.',
      details: [
        'Specialized agents for different cognitive tasks',
        'Orchestration layer for agent communication',
        'Customizable agent behaviors',
        'Human-in-the-loop oversight capabilities'
      ]
    },
    {
      id: 'zero-cloud',
      icon: Cloud,
      title: 'Zero Cloud Dependency',
      description: 'No third-party API lock-ins; fully auditable workflows.',
      details: [
        'No recurring API costs',
        'Complete privacy of sensitive data',
        'Immunity to API changes or deprecations',
        'Predictable performance without internet bottlenecks'
      ]
    },
    {
      id: 'open-source',
      icon: Code,
      title: 'Open-Source Stack',
      description: 'Powered by LangChain, ChromaDB, Ollama, Supabase, n8n, Docker.',
      details: [
        'Transparent, auditable codebase',
        'Community-supported components',
        'Flexible integration options',
        'No vendor lock-in'
      ]
    },
    {
      id: 'built-for-scale',
      icon: Scale,
      title: 'Built for Scale',
      description: 'Designed to grow with your organization and handle increasing workloads.',
      details: [
        'Horizontal scaling capabilities',
        'Containerized for easy deployment',
        'Optimized for resource efficiency',
        'Handles large document collections and complex workflows'
      ]
    },
    {
      id: 'built-for-india',
      icon: Map,
      title: 'Built for India',
      description: 'Designed with the unique challenges and opportunities of the Indian market in mind.',
      details: [
        'Support for Indian languages and contexts',
        'Optimized for local infrastructure constraints',
        'Compliance with Indian data regulations',
        'Affordable pricing models for the Indian market'
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 tech-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
              How We <span className="gradient-text">Think</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 mb-12">
              Our approach to building AI systems is guided by principles of privacy, modularity, and scalability
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agent Pipeline Visualization */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-glass rounded-2xl p-8 border border-cyan-500/20 overflow-hidden"
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center font-poppins">
              Agent Pipeline Visualization
            </h2>
            
            <div className="relative h-64 md:h-96 neural-bg rounded-xl border border-cyan-500/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xl text-cyan-400 mb-4">Parallax Animation</div>
                  <div className="text-sm text-slate-400">
                    (Parallax scroll animation of agent pipeline with workflow graph and decision arrows)
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Our <span className="gradient-text">Approach</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We build AI systems differently, with a focus on privacy, control, and real-world applicability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <motion.div
                key={approach.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="backdrop-blur-glass rounded-2xl p-6 border border-cyan-500/20 card-3d hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="relative mr-4">
                    <approach.icon className="w-10 h-10 text-cyan-400" />
                    <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-30"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white font-poppins">
                    {approach.title}
                  </h3>
                </div>
                
                <p className="text-slate-300 mb-6">
                  {approach.description}
                </p>
                
                <ul className="space-y-2 text-sm">
                  {approach.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span className="text-slate-400">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Our <span className="gradient-text">Technology Stack</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We leverage the best open-source tools to build robust, scalable AI systems
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-glass rounded-2xl p-8 border border-cyan-500/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: "LangChain", logo: "🦜" },
                { name: "Ollama", logo: "🦙" },
                { name: "ChromaDB", logo: "🔍" },
                { name: "Supabase", logo: "⚡" },
                { name: "n8n", logo: "🔄" },
                { name: "Docker", logo: "🐳" },
                { name: "React", logo: "⚛️" },
                { name: "FastAPI", logo: "🚀" },
                { name: "PyTorch", logo: "🔥" },
                { name: "Whisper", logo: "🎤" },
                { name: "PostgreSQL", logo: "🐘" },
                { name: "Redis", logo: "🔴" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + (index * 0.05) }}
                  className="flex flex-col items-center justify-center p-4 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-2">{tech.logo}</div>
                  <div className="text-slate-300 font-medium">{tech.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-glass rounded-2xl p-10 border border-cyan-500/20 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 font-poppins">
              Our Approach in Action: Case Study
            </h2>
            
            <div className="space-y-6 text-slate-300">
              <p className="leading-relaxed">
                A government department needed to search through thousands of policy documents quickly. Traditional search methods were slow and often missed contextual connections.
              </p>
              
              <p className="leading-relaxed">
                We deployed a fully local Retrieval-Augmented Generation (RAG) system using our agent-based approach:
              </p>
              
              <ul className="space-y-3 pl-6">
                <li className="list-disc">
                  <span className="text-cyan-400 font-semibold">Document Processing Agents</span>: Handled OCR, text extraction, and chunking
                </li>
                <li className="list-disc">
                  <span className="text-cyan-400 font-semibold">Indexing Agents</span>: Created semantic embeddings and efficient retrieval structures
                </li>
                <li className="list-disc">
                  <span className="text-cyan-400 font-semibold">Query Agents</span>: Reformulated user questions and retrieved relevant context
                </li>
                <li className="list-disc">
                  <span className="text-cyan-400 font-semibold">Response Agents</span>: Generated concise, accurate answers with source citations
                </li>
              </ul>
              
              <p className="leading-relaxed">
                The entire system ran on their internal network, with no data leaving their premises, and reduced document retrieval time from days to seconds.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ApproachPage;