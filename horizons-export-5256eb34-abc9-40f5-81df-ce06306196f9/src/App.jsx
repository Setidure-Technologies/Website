
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import VisionMission from '@/components/VisionMission';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import Industries from '@/components/Industries';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <Approach />
      <Industries />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
