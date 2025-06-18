import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Globe, Users } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContentCard from '@/components/ContentCard';
import FeatureCard from '@/components/FeatureCard';
import CallToAction from '@/components/CallToAction';
import MonitorAnimation from '@/components/MonitorAnimation';

const AboutUsPage = () => {
  const highlights = [
    {
      icon: Cpu,
      title: 'AI Infrastructure',
      description: 'Building scalable, modular AI systems that work entirely on your infrastructure'
    },
    {
      icon: Shield,
      title: 'Local Deployment',
      description: 'All our solutions can be deployed on-premises with zero cloud dependency'
    },
    {
      icon: Globe,
      title: 'Open-source Foundation',
      description: 'Built on trusted open-source tools like LangChain, Ollama, n8n, and more'
    },
    {
      icon: Users,
      title: 'Multi-Agent Design Philosophy',
      description: 'Specialized AI agents working together to solve complex problems'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <PageHero title="Who" highlightText="We Are">
        {/* 3D Animation Container */}
        <motion.div 
          className="relative h-64 md:h-80 mb-12 neural-bg rounded-2xl border border-cyan-500/20 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <MonitorAnimation 
            height="100%"
            names={['Aashit', 'Arindam']}
            typingSpeed={120}
            pauseDuration={2500}
          />
        </motion.div>
      </PageHero>

      {/* Main Content */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <ContentCard title="Our Story">
                <p className="leading-relaxed">
                  Setidure Technologies is a next-gen AI automation company based in India, transforming how institutions and enterprises adopt AI through modular, private, and self-hosted systems.
                </p>
                <p className="leading-relaxed">
                  Formerly Erudites Solutions, our evolution reflects a shift toward scalable infrastructure for AI agents, automation flows, and intelligent learning systems.
                </p>
              </ContentCard>

              <ContentCard title="Our Philosophy">
                <p className="leading-relaxed">
                  We believe that AI should be accessible, private, and fully controlled by the organizations that use it. Our systems are designed to run entirely on your infrastructure, with no data leaving your premises.
                </p>
                <p className="leading-relaxed">
                  By combining the power of open-source tools with our expertise in AI orchestration, we create solutions that are both powerful and practical for real-world applications.
                </p>
              </ContentCard>
            </motion.div>

            {/* Right Column - Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ContentCard title="Highlights" className="mb-8">
                <div className="grid grid-cols-1 gap-6">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 p-4 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
                    >
                      <div className="relative mt-1">
                        <highlight.icon className="w-8 h-8 text-cyan-400" />
                        <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-30"></div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 font-poppins">
                          {highlight.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ContentCard>

              {/* Team Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden border border-cyan-500/20"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="Setidure Team"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Our Team</h3>
                  <p className="text-slate-300 text-sm">
                    A diverse group of AI engineers, developers, and domain experts
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <CallToAction
            title="Want to learn more about our approach?"
            subtitle="Discover how our philosophy translates into practical solutions for your organization"
            buttonText="Explore Our Approach"
            buttonLink="/approach"
            secondaryButtonText="Contact Us"
            secondaryButtonLink="/contact"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;