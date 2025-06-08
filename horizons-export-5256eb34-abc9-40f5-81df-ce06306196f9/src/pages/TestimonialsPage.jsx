import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Building, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import TestimonialCard from '@/components/TestimonialCard';
import ContentCard from '@/components/ContentCard';
import CallToAction from '@/components/CallToAction';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      quote: "VaakShakti is the best voice tutor we've used — completely local, accurate, and personalized.",
      author: "Dean",
      organization: "Business School",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      category: "Education"
    },
    {
      id: 2,
      quote: "Their Upadhyai platform revolutionized how our students prepare for job interviews.",
      author: "Training & Placement Officer",
      organization: "Engineering College",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      category: "Education"
    },
    {
      id: 3,
      quote: "We now find documents in 5 seconds that took 5 days earlier.",
      author: "Ministry Official",
      organization: "Government Department",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5,
      category: "Government"
    },
    {
      id: 4,
      quote: "The agent-based architecture allowed us to customize the system exactly to our needs, something no cloud solution could offer.",
      author: "CTO",
      organization: "Retail Chain",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      category: "Retail"
    },
    {
      id: 5,
      quote: "Their location analytics helped us identify optimal expansion areas that we had completely overlooked.",
      author: "VP of Strategy",
      organization: "FMCG Company",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 4,
      category: "Retail"
    },
    {
      id: 6,
      quote: "The fluency assessment tool has cut our hiring process time in half while improving candidate quality.",
      author: "HR Director",
      organization: "BPO Company",
      avatar: "https://randomuser.me/api/portraits/women/76.jpg",
      rating: 5,
      category: "BPO/HR"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <PageHero 
        title="What Our" 
        highlightText="Clients Say"
        subtitle="Hear from organizations that have transformed their operations with our AI solutions"
      />

      {/* Featured Testimonials */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                organization={testimonial.organization}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
                category={testimonial.category}
                featured={true}
                delay={0.2 + (index * 0.1)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Wall */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Client"
            highlightText="Testimonials"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.slice(3).map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                organization={testimonial.organization}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
                category={testimonial.category}
                delay={0.6 + (index * 0.1)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Animated Speech Bubbles */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Client"
            highlightText="Feedback"
          />

          <ContentCard>
            <div className="relative h-64 md:h-80 neural-bg rounded-xl border border-cyan-500/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xl text-cyan-400 mb-4">Interactive Feedback Animation</div>
                  <div className="text-sm text-slate-400">
                    (Floating speech bubbles with typing effect animation)
                  </div>
                </div>
              </div>
            </div>
          </ContentCard>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Trusted By"
            highlightText="Organizations"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                viewport={{ once: true }}
                className="backdrop-blur-glass rounded-xl p-6 border border-cyan-500/20 flex items-center justify-center h-24"
              >
                <div className="text-center">
                  <Building className="w-10 h-10 text-cyan-400 mx-auto mb-2" />
                  <div className="text-slate-400 text-sm">Client Logo {index + 1}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <CallToAction
            title="Share Your Experience"
            subtitle="We'd love to hear about your experience with our solutions"
            buttonText="Submit Your Testimonial"
            buttonLink="/contact"
          />
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;