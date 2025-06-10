
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Globe, Users, Linkedin, Github, ExternalLink } from 'lucide-react';

const About = () => {
  // For 3D card effect
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);
  
  // Team members data
  const teamMembers = [
    {
      name: "Aashit Sharma",
      role: "CTO and CFO",
      image: "https://drive.google.com/uc?id=1bLjFODZ0G9VJ5zo1CD3Pox6O5YaTO0_z",
      profileUrl: "https://aashitsharma.bio",
      description: "Aashit Sharma leads our technology and finance departments with innovative strategies and technical acumen. As CTO and CFO, he drives our core technology initiatives while ensuring robust financial planning.",
      socialLinks: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Arindam",
      role: "CEO and Lead Developer, Frontend (Vibecoders)",
      image: "https://drive.google.com/uc?id=1B0thNjLn0AJLKgwj0pTA2YhaB1qzIik6",
      profileUrl: "#",
      description: "Arindam is the visionary CEO and lead developer behind our cutting-edge interfaces. Proudly representing Vibecoders, he spearheads frontend innovations and ensures an exceptional user experience.",
      socialLinks: {
        linkedin: "#",
        github: "#"
      }
    }
  ];
  
  // 3D card effect handlers with enhanced interactivity
  const handleMouseMove = (e, cardRef) => {
    const rect = cardRef.current.getBoundingClientRect();
    setMouseX((e.clientX - rect.left) / width);
    setMouseY((e.clientY - rect.top) / height);
  };

  const handleMouseEnter = (cardRef) => {
    clearTimeout(mouseLeaveDelay);
    setWidth(cardRef.current.offsetWidth);
    setHeight(cardRef.current.offsetHeight);
    
    // Play sound effect - subtle tech beep
    try {
      const audio = new Audio('/sounds/tech-beep.mp3');
      audio.volume = 0.15; // Lower volume for better user experience
      
      // Add a timeout to prevent blocking if file doesn't exist
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Audio played successfully
          })
          .catch(e => {
            // Audio play failed - likely because file doesn't exist or autoplay is blocked
            console.log('Audio play prevented:', e);
          });
      }
    } catch (error) {
      // Fail silently - don't affect user experience if audio fails
      console.log('Audio play error:', error);
    }
  };

  const handleMouseLeave = () => {
    setMouseLeaveDelay(
      setTimeout(() => {
        setMouseX(0);
        setMouseY(0);
      }, 150) // Slightly longer delay for smoother transition
    );
  };

  // Create refs for each team member card
  const cardRefs = useRef(teamMembers.map(() => React.createRef()));
  
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
        
        {/* Meet the Vibecoders Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 relative"
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
                Meet the <span className="gradient-text">Vibecoders</span>
              </h2>
              <div className="absolute -top-6 right-0 animate-pulse">
                <div className="text-xs font-mono text-cyan-400 bg-cyan-900/30 px-2 py-1 rounded-full border border-cyan-500/30 transform rotate-12">
                  Vibecoders
                </div>
              </div>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8"></div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-slate-300 max-w-2xl mx-auto text-lg"
            >
              We're not just developers. We're builders, dreamers, and coders with a vibe. 
              We are the minds behind Setidure's AI-powered innovation.
            </motion.p>
          </div>
          
          {/* Team Cards */}
          <div className="relative">
            {/* Particle Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="particles-container w-full h-full opacity-30"></div>
            </div>
            
            {/* Team Grid */}
            <div className="relative z-10 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto px-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="perspective-1000"
                >
                  {/* Enhanced 3D Interactive Card with more pronounced effects */}
                  <div
                    ref={cardRefs.current[index]}
                    className="team-card relative h-full backdrop-blur-glass rounded-2xl border border-cyan-500/30 overflow-hidden transition-all duration-300 transform-gpu"
                    style={{
                      transform: `rotateY(${(mouseX - 0.5) * 25}deg) rotateX(${(mouseY - 0.5) * -25}deg) scale(${mouseX || mouseY ? 1.02 : 1})`,
                      boxShadow: `0 20px 40px -20px rgba(0, 240, 255, ${0.2 + (mouseX * mouseY * 0.3)}), 
                                 0 0 15px rgba(0, 212, 255, ${0.1 + (mouseX * mouseY * 0.2)})`,
                    }}
                    onMouseMove={(e) => handleMouseMove(e, cardRefs.current[index])}
                    onMouseEnter={() => handleMouseEnter(cardRefs.current[index])}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Card Content */}
                    <div className="p-6 h-full flex flex-col">
                      {/* Profile Image - Circular with enhanced glow effects */}
                      <div className="relative mb-6 transition-transform duration-300"
                        style={{
                          transform: mouseX && mouseY ? 'scale(1.08) translateZ(50px)' : 'scale(1) translateZ(0px)'
                        }}
                      >
                        <div className="relative">
                          {/* Animated border glow effect */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 blur-md opacity-70 animate-pulse-slow"></div>
                          
                          {/* Circular image container */}
                          <div className="relative aspect-square overflow-hidden rounded-full border-2 border-cyan-500/50">
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                            
                            {/* Subtle overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/30 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                        
                        {/* Glowing Profile Link with enhanced effects */}
                        <a 
                          href={member.profileUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all duration-300 hover:scale-110 group"
                          style={{
                            transform: mouseX && mouseY ? 'translateZ(70px)' : 'translateZ(0px)'
                          }}
                        >
                          <ExternalLink className="w-5 h-5 text-white group-hover:animate-pulse" />
                          <div className="absolute inset-0 rounded-full bg-cyan-400 blur-md opacity-40 group-hover:opacity-70 transition-opacity"></div>
                        </a>
                      </div>
                      
                      {/* Member Info with enhanced typography */}
                      <div 
                        className="transition-transform duration-300 text-center"
                        style={{
                          transform: mouseX && mouseY ? 'translateZ(40px)' : 'translateZ(0px)'
                        }}
                      >
                        <h3 className="text-2xl font-bold text-white font-poppins mb-1">{member.name}</h3>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-2"></div>
                        <p className="text-cyan-400 mb-3 font-medium">{member.role}</p>
                      </div>
                      
                      {/* Description - Enhanced slide-up effect on hover */}
                      <div 
                        className="mt-auto overflow-hidden transition-all duration-500 backdrop-blur-sm bg-gradient-to-b from-slate-900/80 to-slate-800/80 rounded-lg p-5 border border-cyan-500/30 shadow-lg"
                        style={{
                          transform: mouseX && mouseY ? 'translateY(0) translateZ(30px)' : 'translateY(30px) translateZ(0px)',
                          opacity: mouseX && mouseY ? 1 : 0,
                          boxShadow: mouseX && mouseY ? '0 10px 30px -10px rgba(0, 212, 255, 0.3)' : 'none'
                        }}
                      >
                        <p className="text-slate-200 text-sm leading-relaxed">{member.description}</p>
                        
                        {/* Social Links with enhanced hover effects */}
                        <div className="mt-4 flex justify-center space-x-4">
                          <a 
                            href={member.socialLinks.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                          >
                            <div className="relative">
                              <Linkedin className="w-5 h-5" />
                              <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-0 hover:opacity-30 transition-opacity"></div>
                            </div>
                          </a>
                          <a 
                            href={member.socialLinks.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                          >
                            <div className="relative">
                              <Github className="w-5 h-5" />
                              <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-0 hover:opacity-30 transition-opacity"></div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced CSS for 3D effects and particles */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1200px;
        }
        
        .team-card {
          transform-style: preserve-3d;
          will-change: transform;
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        }
        
        .team-card::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), 
                      rgba(0, 212, 255, 0.15) 0%, 
                      transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .team-card:hover::before {
          opacity: 1;
        }
        
        .particles-container {
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(0, 240, 255, 0.05) 0%, transparent 25%),
            radial-gradient(circle at 90% 80%, rgba(0, 240, 255, 0.05) 0%, transparent 25%),
            radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 20% 70%, rgba(0, 153, 255, 0.04) 0%, transparent 30%),
            radial-gradient(circle at 80% 30%, rgba(0, 153, 255, 0.04) 0%, transparent 30%);
          animation: particleMove 25s infinite alternate ease-in-out;
          opacity: 0.6;
        }
        
        @keyframes particleMove {
          0% {
            background-position: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
            background-size: 150px 150px, 200px 200px, 300px 300px, 250px 250px, 180px 180px;
          }
          100% {
            background-position: 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%;
            background-size: 200px 200px, 250px 250px, 350px 350px, 300px 300px, 220px 220px;
          }
        }
        
        /* Enhanced hover effects */
        @keyframes pulse-border {
          0%, 100% { border-color: rgba(0, 212, 255, 0.3); }
          50% { border-color: rgba(0, 212, 255, 0.6); }
        }
        
        @keyframes float-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
};

export default About;
