import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Programs from './components/Programs';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Ensure types are handled for external libs
import AOS from 'aos';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Animations
    AOS.init({
      once: true,
      offset: 50,
      duration: 800,
      easing: 'ease-out-cubic',
    });
    
    // Simulate loading assets
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center">
        <div className="loader mb-4"></div>
        <div className="font-heading font-bold text-xl text-secondary animate-pulse">Uncle's Academy</div>
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-900 selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
