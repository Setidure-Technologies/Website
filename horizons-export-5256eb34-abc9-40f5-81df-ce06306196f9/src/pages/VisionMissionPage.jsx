import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Eye, Target, Quote } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContentCard from '@/components/ContentCard';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import CallToAction from '@/components/CallToAction';
import VisionMission from '@/components/VisionMission';

const VisionMissionPage = () => {
  const principles = [
    {
      title: "Privacy First",
      description: "We believe that data privacy is a fundamental right, and our systems are designed with this principle at their core."
    },
    {
      title: "Open Collaboration",
      description: "We build on and contribute to open-source projects, fostering a community of innovation and shared knowledge."
    },
    {
      title: "Local Innovation",
      description: "We're committed to building technology that addresses the unique challenges and opportunities of the Indian market."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <PageHero title="Our" highlightText="North Star">
        {/* Compass Animation Container */}
        <div className="relative h-64 md:h-80 mb-12 neural-bg rounded-2xl border border-cyan-500/20 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xl text-cyan-400 mb-4">Interactive Animation</div>
              <div className="text-sm text-slate-400">
                (Floating glowing compass animation or futuristic AI eyes following cursor)
              </div>
            </div>
          </div>
        </div>
      </PageHero>

      {/* Animated Vision & Mission Section with North Star */}
      <VisionMission />

      {/* Additional Vision & Mission Content */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Vision Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-3d"
            >
              <ContentCard icon={Eye} title="Our Vision">
                <div className="space-y-6">
                  <div className="backdrop-blur-glass rounded-xl p-6 border border-cyan-500/20">
                    <p className="text-xl text-slate-200 leading-relaxed font-poppins">
                      "To become India's leading builder of fully private, agent-based AI systems that power secure, intelligent, and scalable automation across industries."
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="leading-relaxed">
                      We envision a future where AI is not just a tool, but an integral part of every organization's infrastructure. A future where AI systems are private, secure, and fully controlled by the organizations that use them.
                    </p>
                    <p className="leading-relaxed">
                      Our vision is to lead this transformation in India, creating AI systems that are built for the unique challenges and opportunities of the Indian market.
                    </p>
                  </div>
                </div>
              </ContentCard>
            </motion.div>

            {/* Mission Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="card-3d"
            >
              <ContentCard icon={Target} title="Our Mission">
                <div className="space-y-6">
                  <div className="backdrop-blur-glass rounded-xl p-6 border border-cyan-500/20">
                    <p className="text-xl text-slate-200 leading-relaxed font-poppins">
                      "To democratize AI-powered infrastructure by making self-hosted, open-source systems accessible to educational institutions, businesses, and governments."
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="leading-relaxed">
                      Our mission is to break down the barriers to AI adoption by creating systems that are easy to deploy, maintain, and customize. We believe that AI should be accessible to all organizations, regardless of their size or technical expertise.
                    </p>
                    <p className="leading-relaxed">
                      By building on open-source foundations and focusing on self-hosted solutions, we ensure that our clients have complete control over their AI systems and the data they process.
                    </p>
                  </div>
                </div>
              </ContentCard>
            </motion.div>
          </div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="backdrop-blur-glass rounded-2xl p-10 border border-cyan-500/20 relative">
              <div className="absolute top-6 left-6">
                <Quote className="w-12 h-12 text-cyan-500/20" />
              </div>
              
              <div className="text-center px-8">
                <p className="text-2xl text-slate-200 leading-relaxed font-poppins italic mb-6">
                  "Privacy is not a feature — it's the foundation of how we build AI."
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                  <p className="mx-4 text-cyan-400 font-semibold">Setidure Founders</p>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* North Star Principles */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Guiding" 
            highlightText="Principles" 
          />

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <FeatureCard
                key={index}
                icon={Compass}
                title={principle.title}
                description={principle.description}
                delay={0.8 + (index * 0.1)}
                className="card-3d"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <CallToAction
            title="Ready to see our vision in action?"
            subtitle="Explore our services and discover how our approach can transform your organization"
            buttonText="View Our Services"
            buttonLink="/services"
            secondaryButtonText="Contact Us"
            secondaryButtonLink="/contact"
          />
        </div>
      </section>
    </div>
  );
};

export default VisionMissionPage;