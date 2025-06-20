
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
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
      <Services />
      <Approach />
      <Industries />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;
