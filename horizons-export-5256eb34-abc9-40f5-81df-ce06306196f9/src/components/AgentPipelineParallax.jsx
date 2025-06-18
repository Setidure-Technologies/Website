import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowDown, 
  ArrowUpRight, 
  ArrowDownRight,
  Brain, 
  Cpu, 
  Database, 
  Network,
  Zap,
  GitBranch,
  CheckCircle,
  AlertTriangle,
  Settings
} from 'lucide-react';

/**
 * AgentPipelineParallax - Interactive parallax animation showing AI agent workflow
 * Features:
 * - Scroll-based parallax effects
 * - Animated workflow pipeline
 * - Decision points with branching paths
 * - Agent nodes with different roles
 * - Smooth transitions and hover effects
 */
const AgentPipelineParallax = ({ height = '800px' }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create smooth spring animations for different elements
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Different parallax speeds for layered effect
  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '50%']);
  const midgroundY = useTransform(smoothProgress, [0, 1], ['0%', '30%']);
  const foregroundY = useTransform(smoothProgress, [0, 1], ['0%', '15%']);
  
  // Progress-based animations
  const pipelineProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const arrowOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const nodeScale = useTransform(scrollYProgress, [0.1, 0.5], [0.8, 1]);

  // Agent workflow data
  const agents = [
    {
      id: 'input',
      name: 'Input Agent',
      icon: Database,
      position: { x: 10, y: 20 },
      color: '#06b6d4',
      description: 'Data ingestion & preprocessing',
      connections: ['analyzer', 'validator']
    },
    {
      id: 'analyzer',
      name: 'Analysis Agent',
      icon: Brain,
      position: { x: 30, y: 15 },
      color: '#8b5cf6',
      description: 'Pattern recognition & insights',
      connections: ['decision']
    },
    {
      id: 'validator',
      name: 'Validation Agent',
      icon: CheckCircle,
      position: { x: 30, y: 25 },
      color: '#10b981',
      description: 'Quality assurance & verification',
      connections: ['decision']
    },
    {
      id: 'decision',
      name: 'Decision Hub',
      icon: GitBranch,
      position: { x: 50, y: 20 },
      color: '#f59e0b',
      description: 'Intelligent routing & decisions',
      connections: ['processor', 'optimizer', 'monitor']
    },
    {
      id: 'processor',
      name: 'Processing Agent',
      icon: Cpu,
      position: { x: 70, y: 10 },
      color: '#ef4444',
      description: 'Complex computations & transformations',
      connections: ['output']
    },
    {
      id: 'optimizer',
      name: 'Optimization Agent',
      icon: Zap,
      position: { x: 70, y: 20 },
      color: '#f97316',
      description: 'Performance tuning & efficiency',
      connections: ['output']
    },
    {
      id: 'monitor',
      name: 'Monitor Agent',
      icon: AlertTriangle,
      position: { x: 70, y: 30 },
      color: '#ec4899',
      description: 'System health & anomaly detection',
      connections: ['output']
    },
    {
      id: 'output',
      name: 'Output Agent',
      icon: Network,
      position: { x: 90, y: 20 },
      color: '#06b6d4',
      description: 'Result aggregation & delivery',
      connections: []
    }
  ];

  // Decision points for branching logic
  const decisionPoints = [
    {
      id: 'quality-check',
      position: { x: 40, y: 20 },
      condition: 'Data Quality > 95%',
      paths: [
        { condition: 'High Quality', target: 'processor', color: '#10b981' },
        { condition: 'Needs Optimization', target: 'optimizer', color: '#f59e0b' },
        { condition: 'Requires Monitoring', target: 'monitor', color: '#ec4899' }
      ]
    }
  ];

  // Connection paths between agents
  const getConnectionPath = (from, to) => {
    const fromAgent = agents.find(a => a.id === from);
    const toAgent = agents.find(a => a.id === to);
    
    if (!fromAgent || !toAgent) return '';
    
    const fromX = fromAgent.position.x;
    const fromY = fromAgent.position.y;
    const toX = toAgent.position.x;
    const toY = toAgent.position.y;
    
    // Create curved path for more organic look
    const midX = (fromX + toX) / 2;
    const midY = (fromY + toY) / 2 + (Math.random() - 0.5) * 5;
    
    return `M ${fromX} ${fromY} Q ${midX} ${midY} ${toX} ${toY}`;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ height }}
    >
      {/* Background Layer - Slowest parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90"></div>
        <div className="absolute inset-0 neural-bg opacity-20"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#06b6d4" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </motion.div>

      {/* Midground Layer - Medium parallax */}
      <motion.div 
        style={{ y: midgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Flowing Data Lines */}
        <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0"/>
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
            </linearGradient>
          </defs>
          
          {/* Animated flow lines */}
          {[0, 1, 2, 3].map((index) => (
            <motion.path
              key={index}
              d={`M 0 ${15 + index * 3} Q 25 ${10 + index * 3} 50 ${15 + index * 3} T 100 ${15 + index * 3}`}
              stroke="url(#flowGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isVisible ? { 
                pathLength: 1, 
                opacity: [0, 1, 0],
              } : {}}
              transition={{
                duration: 4,
                delay: index * 0.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Foreground Layer - Slowest parallax with main content */}
      <motion.div 
        style={{ y: foregroundY }}
        className="relative z-10 h-full flex items-center justify-center p-8"
      >
        <div className="w-full max-w-6xl">
          
          {/* Title */}
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Agent <span className="gradient-text">Pipeline</span>
            </h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Watch how our modular agents collaborate in real-time decision making
            </p>
          </motion.div>

          {/* Main Pipeline Visualization */}
          <div className="relative">
            
            {/* SVG Container for connections */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-0" 
              viewBox="0 0 100 40"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8"/>
                </linearGradient>
                
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Draw connections between agents */}
              {agents.map((agent) => 
                agent.connections.map((targetId, index) => {
                  const targetAgent = agents.find(a => a.id === targetId);
                  if (!targetAgent) return null;
                  
                  return (
                    <motion.path
                      key={`${agent.id}-${targetId}`}
                      d={getConnectionPath(agent.id, targetId)}
                      stroke="url(#connectionGradient)"
                      strokeWidth="2"
                      fill="none"
                      filter="url(#glow)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isVisible ? { 
                        pathLength: 1, 
                        opacity: 1 
                      } : {}}
                      transition={{
                        duration: 1.5,
                        delay: 0.5 + index * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  );
                })
              )}
              
              {/* Animated data flow particles */}
              {agents.map((agent) => 
                agent.connections.map((targetId, index) => (
                  <motion.circle
                    key={`particle-${agent.id}-${targetId}`}
                    r="1.5"
                    fill="#06b6d4"
                    filter="url(#glow)"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? {
                      opacity: [0, 1, 0],
                    } : {}}
                    transition={{
                      duration: 2,
                      delay: 1 + index * 0.3,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut"
                    }}
                  >
                    <animateMotion
                      dur="2s"
                      repeatCount="indefinite"
                      begin={`${1 + index * 0.3}s`}
                    >
                      <mpath href={`#path-${agent.id}-${targetId}`}/>
                    </animateMotion>
                  </motion.circle>
                ))
              )}
            </svg>
            
            {/* Agent Nodes */}
            <div className="relative z-10">
              {agents.map((agent, index) => (
                <motion.div
                  key={agent.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{
                    left: `${agent.position.x}%`,
                    top: `${agent.position.y}%`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isVisible ? { 
                    scale: 1, 
                    opacity: 1 
                  } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Agent Node */}
                  <div 
                    className="relative w-16 h-16 rounded-2xl backdrop-blur-glass border-2 border-opacity-30 flex items-center justify-center transition-all duration-300 group-hover:border-opacity-60"
                    style={{ 
                      borderColor: agent.color,
                      backgroundColor: `${agent.color}20`
                    }}
                  >
                    <agent.icon 
                      className="w-8 h-8 transition-colors duration-300" 
                      style={{ color: agent.color }}
                    />
                    
                    {/* Glow effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                      style={{ backgroundColor: agent.color }}
                    ></div>
                  </div>
                  
                  {/* Agent Info Tooltip */}
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-slate-800 backdrop-blur-sm rounded-lg p-3 border border-slate-600 min-w-48">
                      <h4 className="text-white font-semibold text-sm mb-1">{agent.name}</h4>
                      <p className="text-slate-300 text-xs">{agent.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Decision Points */}
            {decisionPoints.map((point, index) => (
              <motion.div
                key={point.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{
                  left: `${point.position.x}%`,
                  top: `${point.position.y}%`,
                }}
                initial={{ scale: 0, rotate: -180 }}
                animate={isVisible ? { 
                  scale: 1, 
                  rotate: 0 
                } : {}}
                transition={{
                  duration: 0.8,
                  delay: 1 + index * 0.2,
                  type: "spring"
                }}
              >
                {/* Decision Diamond */}
                <div className="relative w-12 h-12 bg-yellow-500/20 border-2 border-yellow-500 transform rotate-45 flex items-center justify-center backdrop-blur-sm">
                  <GitBranch className="w-6 h-6 text-yellow-500 transform -rotate-45" />
                </div>
                
                {/* Decision Paths */}
                <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-slate-800 backdrop-blur-sm rounded-lg p-3 border border-slate-600 min-w-56">
                    <h4 className="text-white font-semibold text-sm mb-2">{point.condition}</h4>
                    {point.paths.map((path, pathIndex) => (
                      <div key={pathIndex} className="flex items-center space-x-2 text-xs mb-1">
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: path.color }}
                        ></div>
                        <span className="text-slate-300">{path.condition}</span>
                        <ArrowRight className="w-3 h-3 text-slate-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Progress Indicator */}
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="inline-flex items-center space-x-2 text-slate-400 text-sm">
              <Settings className="w-4 h-4 animate-spin" />
              <span>Adaptive workflow processing...</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AgentPipelineParallax;