import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, CheckCircle, FileText, Video } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ContentCard from '@/components/ContentCard';
import CallToAction from '@/components/CallToAction';
import BookingCalendar from '@/components/BookingCalendar';

const BookingPage = () => {
  const meetingTypes = [
    {
      id: 'initial-consultation',
      title: 'Initial Consultation',
      duration: '30 minutes',
      icon: Users,
      description: 'A brief introduction to understand your needs and how we can help.',
      color: 'from-cyan-500 to-blue-600',
      calendarUrl: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3vZIzu1bXtYe_P_YcBPQTmjxmOhy9Tdd3z0_j2bvg351Pi9dHq7_vrA3TggW1_71NGQ9GkJ6Q4?gv=true'
    },
    {
      id: 'product-demo',
      title: 'Product Demo',
      duration: '45 minutes',
      icon: Video,
      description: 'See our AI solutions in action with a tailored demonstration.',
      color: 'from-emerald-500 to-teal-600',
      calendarUrl: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3vZIzu1bXtYe_P_YcBPQTmjxmOhy9Tdd3z0_j2bvg351Pi9dHq7_vrA3TggW1_71NGQ9GkJ6Q4?gv=true'
    },
    {
      id: 'technical-discussion',
      title: 'Technical Discussion',
      duration: '60 minutes',
      icon: FileText,
      description: 'Deep dive into technical aspects and implementation planning.',
      color: 'from-purple-500 to-indigo-600',
      calendarUrl: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3vZIzu1bXtYe_P_YcBPQTmjxmOhy9Tdd3z0_j2bvg351Pi9dHq7_vrA3TggW1_71NGQ9GkJ6Q4?gv=true'
    }
  ];

  const benefitsList = [
    'Personalized approach to your specific challenges',
    'Expert guidance from AI implementation specialists',
    'Clear roadmap for integration and deployment',
    'Transparent discussion of costs and timeline',
    'No obligation to proceed after consultation'
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <PageHero 
        title="Schedule a" 
        highlightText="Consultation"
        subtitle="Book time with our team to discuss your AI implementation needs"
      />

      {/* Meeting Types Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Select a Meeting"
            highlightText="Type"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {meetingTypes.map((meeting, index) => (
              <motion.div
                key={meeting.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-glass rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="relative">
                      <meeting.icon className={`w-12 h-12 bg-gradient-to-r ${meeting.color} p-2 rounded-lg text-white`} />
                      <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-30"></div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-cyan-400 mr-1" />
                      <span className="text-slate-300 text-sm">{meeting.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{meeting.title}</h3>
                  <p className="text-slate-300 mb-6">{meeting.description}</p>
                  
                  <BookingCalendar 
                    className="bg-slate-800/30 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 p-0"
                    calendarUrl={meeting.calendarUrl}
                    color="#039BE5"
                    label={`Book ${meeting.title}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Why Book a"
            highlightText="Consultation"
          />

          <ContentCard>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  Benefits of a Personalized Meeting
                </h3>
                <ul className="space-y-4">
                  {benefitsList.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 mr-3 relative">
                        <CheckCircle className="h-5 w-5 text-cyan-400" />
                        <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-30"></div>
                      </div>
                      <span className="text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden border border-cyan-500/20 min-h-[300px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-slate-900/60 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Virtual meeting" 
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="relative z-20 p-8 flex flex-col items-center justify-center h-full">
                  <Calendar className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">Flexible Scheduling</h3>
                  <p className="text-slate-300 text-center">
                    Choose a time that works best for you, with options across different time zones.
                  </p>
                </div>
              </motion.div>
            </div>
          </ContentCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <CallToAction
            title="Not ready to book yet?"
            subtitle="Feel free to contact us directly with any questions"
            buttonText="Email Us"
            buttonLink="mailto:admin@setidure.com"
            secondaryButtonText="Call Now"
            secondaryButtonLink="tel:+919289920323"
          />
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
