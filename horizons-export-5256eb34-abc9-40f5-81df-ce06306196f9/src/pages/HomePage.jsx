
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import VisionMission from '@/components/VisionMission';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import Industries from '@/components/Industries';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <Approach />
      <Industries />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;
