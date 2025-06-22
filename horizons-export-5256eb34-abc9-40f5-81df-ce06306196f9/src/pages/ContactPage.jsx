import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Globe, Phone, ExternalLink, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ContentCard from '@/components/ContentCard';
import CallToAction from '@/components/CallToAction';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        interest: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const faqs = [
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary based on the complexity of the solution, but most projects can be deployed within 4-8 weeks from initial consultation."
    },
    {
      question: "Do your solutions require internet connectivity?",
      answer: "No, our solutions are designed to work entirely offline in air-gapped environments if needed, with no external API dependencies."
    },
    {
      question: "What kind of hardware is required?",
      answer: "Requirements vary by solution, but we optimize our systems to run efficiently on standard enterprise hardware, with options for both CPU and GPU acceleration."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide comprehensive support packages including maintenance, updates, and training to ensure your team can effectively use and maintain the systems."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <PageHero 
        title="Let's" 
        highlightText="Build Together"
        subtitle="Reach out to discuss how we can help you implement AI solutions for your organization"
      />

      {/* Contact Information and Form */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <ContentCard title="Contact Information">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="relative mt-1 mr-4">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                      <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-30"></div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Location</h3>
                      <p className="text-slate-300">Delhi NCR, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="relative mt-1 mr-4">
                      <Mail className="w-6 h-6 text-cyan-400" />
                      <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-30"></div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a href="mailto:aashit@erudites.in" className="text-slate-300 hover:text-cyan-400 transition-colors">
                        admin@setidure.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="relative mt-1 mr-4">
                      <Globe className="w-6 h-6 text-cyan-400" />
                      <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-30"></div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Website</h3>
                      <a href="https://www.erudites.in" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors">
                        https://setidure.erudites.in/
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="relative mt-1 mr-4">
                      <Phone className="w-6 h-6 text-cyan-400" />
                      <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-30"></div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <a href="tel:+919289920323" className="text-slate-300 hover:text-cyan-400 transition-colors">
                        +91 9289920323
                      </a>
                    </div>
                  </div>
                </div>
              </ContentCard>
              
              {/* Store Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <ContentCard title="Explore Our Templates">
                  <p className="text-slate-300 mb-6">
                    Check out our ready-to-use automation templates and AI workflows on our Payhip store.
                  </p>
                  <a 
                    href="https://payhip.com/SetidureN8NTemplates" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Visit our Payhip Store</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </ContentCard>
              </motion.div>
              
              {/* Map Visualization */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden border border-cyan-500/20 h-64"
              >
                <div className="absolute inset-0 neural-bg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl text-cyan-400 mb-4">Interactive Map</div>
                    <div className="text-sm text-slate-400">
                      (3D world map with contact pins or glowing mesh globe)
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ContentCard title="Get in Touch">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center"
                  >
                    <h3 className="text-green-400 font-semibold text-lg mb-2">Message Sent!</h3>
                    <p className="text-slate-300">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-slate-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-slate-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        placeholder="Your email address"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="interest" className="block text-slate-300 mb-2">
                        I'm interested in
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select an option</option>
                        <option value="Collaboration">Collaboration</option>
                        <option value="Product Demo">Product Demo</option>
                        <option value="Licensing">Licensing</option>
                        <option value="Custom Build">Custom Build</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-slate-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        placeholder="Tell us about your project or inquiry"
                      ></textarea>
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg neon-glow transition-all duration-300 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </ContentCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Frequently Asked"
            highlightText="Questions"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                className="backdrop-blur-glass rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3 font-poppins">
                  {faq.question}
                </h3>
                <p className="text-slate-300">
                  {faq.answer}
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
            title="Ready to transform your organization with AI?"
            subtitle="Let's discuss how our solutions can address your specific challenges and opportunities"
            buttonText="Email Us"
            buttonLink="mailto:aashit@erudites.in"
            secondaryButtonText="Call Now"
            secondaryButtonLink="tel:+919289920323"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;