
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Setidure's AI voice platform helped our students prepare for real interviews. The pronunciation feedback and fluency analysis were incredibly accurate.",
      author: "Dr. Priya Sharma",
      position: "Career Dean",
      organization: "Business School",
      rating: 5,
      image: "Professional woman in business attire smiling confidently"
    },
    {
      quote: "They built a document system that even handled our handwritten memos. The OCR accuracy and search capabilities exceeded our expectations completely.",
      author: "Rajesh Kumar",
      position: "Govt Dept Officer",
      organization: "Ministry of Digital India",
      rating: 5,
      image: "Government official in formal attire reviewing digital documents"
    },
    {
      quote: "The multi-agent AI system transformed our workflow. Tasks that took hours now complete in minutes, and everything runs locally on our servers.",
      author: "Sarah Chen",
      position: "CTO",
      organization: "TechCorp Solutions",
      rating: 5,
      image: "Tech executive presenting AI solutions in modern office"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 neural-bg opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Hear from organizations that have transformed their operations with our AI solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="backdrop-blur-glass rounded-2xl p-8 border border-cyan-500/20 h-full card-3d hover:border-cyan-400/40 transition-all duration-300 relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-12 h-12 text-cyan-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-300 text-lg leading-relaxed mb-8 relative z-10">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img  
                      className="w-16 h-16 rounded-full border-2 border-cyan-500/30"
                      alt={`${testimonial.author} profile photo`}
                     src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                    <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-20 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg font-poppins">
                      {testimonial.author}
                    </div>
                    <div className="text-cyan-400 font-medium">
                      {testimonial.position}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {testimonial.organization}
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="backdrop-blur-glass rounded-xl p-8 border border-cyan-500/20 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text font-poppins mb-2">100%</div>
                <div className="text-slate-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text font-poppins mb-2">24/7</div>
                <div className="text-slate-400">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text font-poppins mb-2">∞</div>
                <div className="text-slate-400">Customization Options</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
            Ready to Join Our Success Stories?
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full neon-glow"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your AI Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
