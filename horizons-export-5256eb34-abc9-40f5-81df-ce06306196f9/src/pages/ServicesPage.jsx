import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, FileText, Mic, Brain, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import ContentCard from '@/components/ContentCard';
import CallToAction from '@/components/CallToAction';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'upadhyai',
      icon: GraduationCap,
      title: 'Upadhyai Platform',
      shortDesc: 'AI-powered student mentorship system',
      description: 'AI-powered student mentorship system with job matching, skill gap analysis, resume maker, and course recommendations.',
      features: [
        'Personalized skill gap analysis',
        'AI-powered resume generation',
        'Job matching algorithms',
        'Course recommendations',
        'Career path visualization'
      ],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'granthik',
      icon: FileText,
      title: 'Granthik',
      shortDesc: 'Document intelligence platform',
      description: 'Document intelligence platform with OCR, RAG, and compliance document search for government and enterprise.',
      features: [
        'Advanced OCR capabilities',
        'Retrieval-Augmented Generation (RAG)',
        'Compliance document search',
        'Automated document classification',
        'Secure, private document processing'
      ],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'vaakshakti',
      icon: Mic,
      title: 'VaakShakti',
      shortDesc: 'Voice and fluency tutor',
      description: 'Voice and fluency tutor using Whisper + LLMs to evaluate pronunciation, clarity, emotion, and grammar.',
      features: [
        'Real-time pronunciation feedback',
        'Clarity and fluency assessment',
        'Emotional tone analysis',
        'Grammar correction',
        'Personalized improvement suggestions'
      ],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'agent-infra',
      icon: Brain,
      title: 'Agent-Based AI Infrastructure',
      shortDesc: 'Customizable, locally deployed multi-agent systems',
      description: 'Customizable, locally deployed multi-agent systems using LangChain, Ollama, Docker, Supabase, n8n, and more.',
      features: [
        'Multi-agent orchestration',
        'Local LLM deployment',
        'Containerized architecture',
        'Workflow automation',
        'Custom agent development'
      ],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'geo-analytics',
      icon: MapPin,
      title: 'Retail & Geospatial Analytics',
      shortDesc: 'Market gap intelligence and retail presence mapping',
      description: 'Market gap intelligence and retail presence mapping using GIS + AI.',
      features: [
        'Retail location optimization',
        'Market gap analysis',
        'Competitor mapping',
        'Customer demographic insights',
        'Expansion planning tools'
      ],
      color: 'from-amber-500 to-orange-600'
    }
  ];

  const integrationFeatures = [
    {
      title: "API-First Design",
      description: "All our systems expose well-documented APIs for easy integration with your existing software"
    },
    {
      title: "Containerized Deployment",
      description: "Docker-based deployment ensures consistent performance across different environments"
    },
    {
      title: "Customizable Workflows",
      description: "Flexible automation workflows that can be tailored to your specific business processes"
    }
  ];

  const handleServiceClick = (serviceId) => {
    setActiveService(serviceId === activeService ? null : serviceId);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <PageHero 
        title="What We" 
        highlightText="Build"
        subtitle="Innovative AI solutions designed for privacy, scalability, and real-world impact"
      />

      {/* Services Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                icon={service.icon}
                title={service.title}
                shortDesc={service.shortDesc}
                description={service.description}
                features={service.features}
                color={service.color}
                isActive={activeService === service.id}
                onClick={() => handleServiceClick(service.id)}
                delay={0.2 + (index * 0.1)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Seamless"
            highlightText="Integration"
            subtitle="Our solutions are designed to work with your existing infrastructure, with minimal disruption to your operations"
          />

          <ContentCard>
            <div className="grid md:grid-cols-3 gap-8">
              {integrationFeatures.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3 font-poppins">
                    {item.title}
                  </h3>
                  <p className="text-slate-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </ContentCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <CallToAction
            title="Ready to transform your operations with AI?"
            subtitle="Let's discuss how our solutions can be tailored to your specific needs and challenges"
            buttonText="Get in Touch"
            buttonLink="/contact"
          />
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;