import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building, ShoppingBag, Users, Heart, Scale } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import IndustryCard from '@/components/IndustryCard';
import ContentCard from '@/components/ContentCard';
import CallToAction from '@/components/CallToAction';

const IndustriesPage = () => {
  const [activeIndustry, setActiveIndustry] = useState(null);

  const industries = [
    {
      id: 'education',
      icon: GraduationCap,
      title: 'Education',
      description: 'AI tutors, skill gap platforms, resume generators',
      details: {
        challenges: [
          'Personalized learning at scale',
          'Skill gap identification',
          'Career readiness preparation',
          'Administrative workload'
        ],
        solutions: [
          'AI-powered tutoring systems',
          'Automated skill assessment',
          'Resume and interview preparation tools',
          'Document processing automation'
        ],
        caseStudy: 'A leading business school implemented our VaakShakti platform to help students improve their communication skills, resulting in a 40% increase in placement rates.'
      },
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'government',
      icon: Building,
      title: 'Government',
      description: 'Document intelligence, RFP automation, policy search',
      details: {
        challenges: [
          'Massive document repositories',
          'Complex compliance requirements',
          'Information retrieval bottlenecks',
          'Process inefficiencies'
        ],
        solutions: [
          'Intelligent document search and retrieval',
          'Automated RFP response generation',
          'Policy analysis and recommendation',
          'Workflow automation'
        ],
        caseStudy: 'A government department reduced document retrieval time from days to seconds using our Granthik platform, while maintaining complete data privacy.'
      },
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'retail',
      icon: ShoppingBag,
      title: 'Retail/FMCG',
      description: 'Location analytics, market expansion tools',
      details: {
        challenges: [
          'Optimal store location selection',
          'Market gap identification',
          'Competitor analysis',
          'Customer behavior understanding'
        ],
        solutions: [
          'AI-powered location intelligence',
          'Market opportunity mapping',
          'Competitive landscape analysis',
          'Customer segmentation tools'
        ],
        caseStudy: 'A retail chain used our geospatial analytics to identify optimal locations for new stores, resulting in 30% higher foot traffic than their traditional expansion approach.'
      },
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 'bpo-hr',
      icon: Users,
      title: 'BPO/HR',
      description: 'Psychometric/fluency testing flows, onboarding automation',
      details: {
        challenges: [
          'Candidate assessment at scale',
          'Communication skill evaluation',
          'Onboarding process efficiency',
          'Training personalization'
        ],
        solutions: [
          'Automated psychometric testing',
          'AI-powered fluency assessment',
          'Streamlined onboarding workflows',
          'Personalized training recommendations'
        ],
        caseStudy: 'A BPO company reduced their hiring process time by 60% while improving candidate quality using our automated assessment tools.'
      },
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'healthcare',
      icon: Heart,
      title: 'Healthcare (Planned)',
      description: 'Report parsing, agent-based diagnostics',
      details: {
        challenges: [
          'Medical report interpretation',
          'Patient data management',
          'Diagnostic assistance',
          'Administrative overhead'
        ],
        solutions: [
          'Automated report parsing and summarization',
          'Secure patient data management',
          'AI-assisted diagnostic tools',
          'Administrative workflow automation'
        ],
        caseStudy: 'In development: A system to help radiologists quickly extract key findings from reports and correlate with patient history.'
      },
      color: 'from-red-500 to-rose-600'
    },
    {
      id: 'legal',
      icon: Scale,
      title: 'Legal & Compliance',
      description: 'Searchable document repositories with AI Q&A',
      details: {
        challenges: [
          'Contract analysis and review',
          'Legal research efficiency',
          'Compliance monitoring',
          'Document management'
        ],
        solutions: [
          'AI-powered contract analysis',
          'Intelligent legal research assistants',
          'Automated compliance checking',
          'Secure document repositories with advanced search'
        ],
        caseStudy: 'A legal firm reduced contract review time by 70% using our document intelligence platform, allowing attorneys to focus on high-value advisory work.'
      },
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const benefits = [
    {
      title: "Data Privacy",
      description: "All data stays within your infrastructure, ensuring complete privacy and compliance"
    },
    {
      title: "Cost Efficiency",
      description: "No recurring API costs or cloud dependencies, reducing total cost of ownership"
    },
    {
      title: "Customizability",
      description: "Fully adaptable to your specific workflows, processes, and requirements"
    },
    {
      title: "Future-Proof",
      description: "Open-source foundation ensures longevity and independence from vendor changes"
    }
  ];

  const handleIndustryClick = (industryId) => {
    setActiveIndustry(industryId === activeIndustry ? null : industryId);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <PageHero 
        title="Where Our" 
        highlightText="Systems Work"
        subtitle="Our AI solutions are designed to address specific challenges across diverse industries"
      />

      {/* Industries Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard
                key={industry.id}
                id={industry.id}
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
                details={industry.details}
                color={industry.color}
                isActive={activeIndustry === industry.id}
                onClick={() => handleIndustryClick(industry.id)}
                delay={0.2 + (index * 0.1)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Map */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Industry"
            highlightText="Coverage"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-glass rounded-2xl p-8 border border-cyan-500/20 overflow-hidden"
          >
            <div className="relative h-64 md:h-96 neural-bg rounded-xl border border-cyan-500/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xl text-cyan-400 mb-4">Interactive Industry Map</div>
                  <div className="text-sm text-slate-400">
                    (Floating tiles for each sector with animation-in-on-scroll)
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cross-Industry Benefits */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Cross-Industry"
            highlightText="Benefits"
            subtitle="Common advantages our solutions bring across all sectors"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                className="backdrop-blur-glass rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-semibold text-cyan-400 mb-3 font-poppins">
                  {benefit.title}
                </h3>
                <p className="text-slate-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <CallToAction
            title="Let's solve your industry challenges together"
            subtitle="Our team has experience across multiple sectors and can help you identify the right AI solution for your specific needs"
            buttonText="Discuss Your Industry"
            buttonLink="/contact"
          />
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;