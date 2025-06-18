
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Globe, Users, Linkedin, Github, ExternalLink } from 'lucide-react';

const About = () => {
  // For 3D card effect and interactive elements
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);
  const [globalMouseX, setGlobalMouseX] = useState(0);
  const [globalMouseY, setGlobalMouseY] = useState(0);
  
  // Team members data
  const teamMembers = [
    {
      name: "Aashit Sharma",
      role: "CTO and CFO",
      image: "/Aashit_image (1).png",
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
      image: "horizons-export-5256eb34-abc9-40f5-81df-ce06306196f9/public/Arindam.jpg",
      profileUrl: "#",
      description: "Arindam is the visionary CEO and lead developer behind our cutting-edge interfaces. Proudly representing Vibecoders, he spearheads frontend innovations and ensures an exceptional user experience.",
      socialLinks: {
        linkedin: "#",
        github: "#"
      }
    }
  ];

  // Track mouse position globally for particle effects
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      setGlobalMouseX(e.clientX / window.innerWidth);
      setGlobalMouseY(e.clientY / window.innerHeight);
    };
    
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);
  
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
  
  // Mobile touch interaction handler
  const [isMobile, setIsMobile] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  
  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Handle touch interactions for mobile
  const handleTouchStart = (index) => {
    if (isMobile) {
      setActiveCardIndex(index);
    }
  };
  
  const handleTouchEnd = () => {
    if (isMobile) {
      setActiveCardIndex(null);
    }
  };
  
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
          {/* Tech Data Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
            <div className="absolute top-0 left-0 w-full h-full tech-data-bg">
              <div className="tech-data-line" style={{ top: '10%', left: '5%' }}>01001010 01100001 01110110 01100001</div>
              <div className="tech-data-line" style={{ top: '20%', right: '8%' }}>01010000 01111001 01110100 01101000</div>
              <div className="tech-data-line" style={{ top: '35%', left: '12%' }}>01010010 01100101 01100001 01100011</div>
              <div className="tech-data-line" style={{ top: '50%', right: '15%' }}>01001110 01101111 01100100 01100101</div>
              <div className="tech-data-line" style={{ top: '65%', left: '7%' }}>01000001 01001001 00100000 01001101</div>
              <div className="tech-data-line" style={{ top: '80%', right: '10%' }}>01000011 01101100 01101111 01110101</div>
            </div>
          </div>
          {/* Interactive Grid Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="tech-grid w-full h-full opacity-20"
              style={{
                backgroundSize: `${50 + globalMouseX * 30}px ${50 + globalMouseY * 30}px`,
                backgroundPosition: `${globalMouseX * 20}px ${globalMouseY * 20}px`
              }}
            ></div>
          </div>
          {/* Enhanced Section Title with Dynamic Animations */}
          <div className="text-center mb-20 relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10">
                <div className="absolute inset-0 rotate-slow">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="rgba(0, 212, 255, 0.5)" d="M45.3,-51.2C58.9,-42.9,70.3,-28.4,74.8,-11.7C79.3,5.1,76.9,24.1,67.1,37.8C57.3,51.5,40.2,59.9,22.7,65.3C5.3,70.7,-12.4,73.1,-27.7,67.9C-43,62.7,-55.9,49.9,-64.1,34.4C-72.3,18.9,-75.9,0.7,-71.5,-14.9C-67.1,-30.5,-54.8,-43.5,-40.8,-51.7C-26.9,-59.9,-11.3,-63.3,2.9,-66.6C17.1,-69.9,31.7,-59.5,45.3,-51.2Z" transform="translate(100 100)" />
                  </svg>
                </div>
                <div className="absolute inset-0 rotate-slow-reverse">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="rgba(0, 102, 255, 0.3)" d="M54.2,-46.1C68.8,-33.2,78.2,-11.5,75.7,8.9C73.2,29.3,58.8,48.3,40.6,58.7C22.4,69.1,0.4,70.9,-20.2,64.5C-40.8,58.1,-59.9,43.6,-68.9,23.8C-77.9,4,-76.7,-21.1,-65.3,-38.2C-53.9,-55.3,-32.3,-64.5,-10.7,-62.8C10.9,-61.1,39.6,-58.9,54.2,-46.1Z" transform="translate(100 100)" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Main title with enhanced animations */}
            <div className="relative inline-block">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold font-poppins mb-6 relative z-10"
              >
                Meet Our <span className="gradient-text">Vibecoders</span>
              </motion.h2>
              
              {/* Floating badge */}
              <motion.div 
                initial={{ opacity: 0, x: 20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -top-8 right-0 animate-float-subtle"
              >
                <div className="text-xs font-mono text-cyan-400 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 px-3 py-1 rounded-full border border-cyan-500/40 transform rotate-12 shadow-lg shadow-cyan-500/20">
                  <span className="animate-pulse inline-block mr-1 w-2 h-2 rounded-full bg-cyan-400"></span>
                  Vibecoders
                </div>
              </motion.div>
            </div>
            
            {/* Animated divider */}
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "6rem", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8"
              style={{ maxWidth: "6rem" }}
            ></motion.div>
            
            {/* Description with character-by-character animation */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-slate-300 max-w-2xl mx-auto text-lg relative z-10"
            >
              A new-age developer who doesn’t just build software — they build experiences powered by clean code, creative energy, and an unstoppable vibe.
            </motion.p>
          </div>
          
          {/* Team Cards with Connection Lines */}
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" style={{ position: 'absolute', zIndex: 1 }}>
                <line 
                  x1="25%" y1="30%" 
                  x2="75%" y2="30%" 
                  stroke="rgba(0, 212, 255, 0.2)" 
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  className="connection-line"
                />
                <line 
                  x1="75%" y1="30%" 
                  x2="75%" y2="70%" 
                  stroke="rgba(0, 212, 255, 0.2)" 
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  className="connection-line"
                />
                <line 
                  x1="75%" y1="70%" 
                  x2="25%" y2="70%" 
                  stroke="rgba(0, 212, 255, 0.2)" 
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  className="connection-line"
                />
                <line 
                  x1="25%" y1="70%" 
                  x2="25%" y2="30%" 
                  stroke="rgba(0, 212, 255, 0.2)" 
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  className="connection-line"
                />
              </svg>
            </div>
            {/* Enhanced Particle Background with Mouse Tracking */}
            <div className="absolute inset-0 overflow-hidden">
              <div 
                className="particles-container w-full h-full opacity-40"
                style={{
                  backgroundPosition: `${globalMouseX * 20}% ${globalMouseY * 20}%`,
                  filter: `hue-rotate(${(globalMouseX * globalMouseY) * 30}deg)`
                }}
              ></div>
              
              {/* Dynamic Glow Orb that follows mouse */}
              <div 
                className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-10 transition-all duration-1000 ease-out pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(0,212,255,1) 0%, rgba(0,102,255,0.3) 50%, transparent 80%)',
                  left: `calc(${globalMouseX * 100}% - 150px)`,
                  top: `calc(${globalMouseY * 100}% - 150px)`,
                  transform: `scale(${0.8 + (globalMouseX * globalMouseY) * 0.5})`,
                }}
              ></div>
            </div>
            
            {/* Team Grid with staggered animation */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto px-6"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={{ y: [0, index % 2 === 0 ? -8 : -5, 0] }}
                  transition={{
                    opacity: { duration: 0.6, delay: index * 0.2 },
                    y: {
                      duration: index % 2 === 0 ? 6 : 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: index * 0.5
                    }
                  }}
                  viewport={{ once: true }}
                  className="perspective-1000"
                >
                  {/* Enhanced 3D Interactive Card with advanced effects */}
                  <div
                    ref={cardRefs.current[index]}
                    className="team-card relative h-full backdrop-blur-glass rounded-2xl border border-cyan-500/30 overflow-hidden transition-all duration-300 transform-gpu"
                    style={{
                      transform: `rotateY(${(mouseX - 0.5) * 25}deg) rotateX(${(mouseY - 0.5) * -25}deg) scale(${mouseX || mouseY ? 1.02 : 1})`,
                      boxShadow: `0 20px 40px -20px rgba(0, 240, 255, ${0.2 + (mouseX * mouseY * 0.3)}), 
                                 0 0 15px rgba(0, 212, 255, ${0.1 + (mouseX * mouseY * 0.2)})`,
                      background: mouseX && mouseY ? 
                        `radial-gradient(circle at ${mouseX * 100}% ${mouseY * 100}%, rgba(0, 212, 255, 0.1) 0%, transparent 60%), 
                         linear-gradient(to bottom, rgba(10, 20, 30, 0.8), rgba(5, 15, 25, 0.9))` : 
                        'linear-gradient(to bottom, rgba(10, 20, 30, 0.8), rgba(5, 15, 25, 0.9))'
                    }}
                    onMouseMove={(e) => handleMouseMove(e, cardRefs.current[index])}
                    onMouseEnter={() => handleMouseEnter(cardRefs.current[index])}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={() => handleTouchStart(index)}
                    onTouchEnd={handleTouchEnd}
                    className={activeCardIndex === index ? "mobile-active" : ""}
                  >
                    {/* Decorative tech elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                      {/* Top right corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20">
                        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-cyan-400 opacity-70"></div>
                        <div className="absolute top-4 right-10 w-10 h-[1px] bg-cyan-500/30 transform rotate-45"></div>
                        <div className="absolute top-10 right-4 h-10 w-[1px] bg-cyan-500/30 transform -rotate-45"></div>
                      </div>
                      
                      {/* Bottom left corner accent */}
                      <div className="absolute bottom-0 left-0 w-16 h-16">
                        <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-70"></div>
                        <div className="absolute bottom-3 left-8 w-8 h-[1px] bg-cyan-500/30"></div>
                        <div className="absolute bottom-8 left-3 h-8 w-[1px] bg-cyan-500/30"></div>
                      </div>
                    </div>
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
                          
                          {/* Circular image container with tech scan effect */}
                          <div className="relative aspect-square overflow-hidden rounded-full border-2 border-cyan-500/50">
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                            
                            {/* Subtle overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/30 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Tech scan animation */}
                            <div className="absolute inset-0 pointer-events-none">
                              {/* Horizontal scan line */}
                              <div className="absolute left-0 w-full h-[2px] bg-cyan-400/40 blur-[1px] tech-scan-horizontal"></div>
                              
                              {/* Vertical scan line */}
                              <div className="absolute top-0 h-full w-[2px] bg-cyan-400/40 blur-[1px] tech-scan-vertical"></div>
                              
                              {/* Corner markers */}
                              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400/60 rounded-tl-sm"></div>
                              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400/60 rounded-tr-sm"></div>
                              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400/60 rounded-bl-sm"></div>
                              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400/60 rounded-br-sm"></div>
                            </div>
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
                        <div className="relative">
                          {/* Tech loading indicator */}
                          <div className="absolute -left-4 top-1 flex items-center space-x-1 opacity-70">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0s' }}></div>
                            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.2s' }}></div>
                            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.4s' }}></div>
                          </div>
                          
                          {/* Description with typewriter effect */}
                          <p className="text-slate-200 text-sm leading-relaxed pl-2 border-l border-cyan-500/30">
                            {member.description}
                          </p>
                        </div>
                        
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
            </motion.div>
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
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-5px) rotate(14deg); }
        }
        
        .rotate-slow {
          animation: rotateSlow 20s linear infinite;
        }
        
        .rotate-slow-reverse {
          animation: rotateSlowReverse 25s linear infinite;
        }
        
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotateSlowReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        /* Tech data background */
        .tech-data-line {
          position: absolute;
          font-family: monospace;
          font-size: 10px;
          color: rgba(0, 212, 255, 0.7);
          white-space: nowrap;
          opacity: 0.7;
        }
        
        .tech-data-bg .tech-data-line:nth-child(1) {
          animation: fadeInOut 8s infinite 0s;
        }
        
        .tech-data-bg .tech-data-line:nth-child(2) {
          animation: fadeInOut 8s infinite 1.3s;
        }
        
        .tech-data-bg .tech-data-line:nth-child(3) {
          animation: fadeInOut 8s infinite 2.6s;
        }
        
        .tech-data-bg .tech-data-line:nth-child(4) {
          animation: fadeInOut 8s infinite 3.9s;
        }
        
        .tech-data-bg .tech-data-line:nth-child(5) {
          animation: fadeInOut 8s infinite 5.2s;
        }
        
        .tech-data-bg .tech-data-line:nth-child(6) {
          animation: fadeInOut 8s infinite 6.5s;
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.7; }
        }
        
        /* Connection lines animation */
        .connection-line {
          stroke-dashoffset: 100;
          animation: dashOffset 30s linear infinite;
        }
        
        @keyframes dashOffset {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
        
        /* Tech scan animations */
        .tech-scan-horizontal {
          animation: scanHorizontal 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          opacity: 0;
        }
        
        .tech-scan-vertical {
          animation: scanVertical 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          animation-delay: 2s;
          opacity: 0;
        }
        
        @keyframes scanHorizontal {
          0%, 100% { 
            top: 0; 
            opacity: 0;
          }
          10% { 
            opacity: 1;
          }
          90% { 
            opacity: 1;
          }
          50% { 
            top: 100%; 
          }
        }
        
        @keyframes scanVertical {
          0%, 100% { 
            left: 0; 
            opacity: 0;
          }
          10% { 
            opacity: 1;
          }
          90% { 
            opacity: 1;
          }
          50% { 
            left: 100%; 
          }
        }
        
        /* Responsive adjustments for mobile */
        @media (max-width: 768px) {
          .team-card {
            transform-style: preserve-3d;
            transition: transform 0.5s ease, box-shadow 0.5s ease;
          }
          
          .team-card.mobile-active {
            transform: rotateY(5deg) rotateX(5deg) scale(0.98) !important;
            box-shadow: 0 20px 40px -15px rgba(0, 212, 255, 0.3), 
                        0 0 15px rgba(0, 212, 255, 0.2) !important;
          }
          
          .team-card.mobile-active .mt-auto {
            transform: translateY(0) translateZ(20px) !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
