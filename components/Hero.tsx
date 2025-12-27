import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Parallax Background Video */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1920&q=80"
        >
          {/* Using a basketball placeholder video. In production, replace with actual footage */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-playing-basketball-at-an-outdoor-court-2423-large.mp4" type="video/mp4" />
        </video>
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-secondary/80 via-transparent to-primary/30 mix-blend-overlay"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="particle animate-float"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              opacity: 0.4
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto pt-16">
        <div data-aos="fade-down" data-aos-duration="1000">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent font-bold text-xs md:text-sm mb-6 md:mb-8 tracking-[0.2em] uppercase shadow-lg">
            Luzern, Schweiz
          </span>
        </div>
        
        <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 md:mb-8 leading-tight drop-shadow-2xl">
          <span className="block" data-aos="fade-up" data-aos-delay="200">CHAMPIONS</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-accent" data-aos="fade-up" data-aos-delay="400">
            WERDEN HIER
          </span>
          <span className="block" data-aos="fade-up" data-aos-delay="600">GEMACHT</span>
        </h1>
        
        <p className="text-gray-100 text-base md:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md px-2" data-aos="fade-up" data-aos-delay="800">
          Professionelles Basketball-Training für Kinder und Jugendliche. <br className="hidden md:block"/>
          <span className="text-primary font-bold">1000+</span> trainierte Kinder seit 2014.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="1000">
          <a
            href="#contact"
            className="w-full sm:w-auto group relative bg-primary text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,98,0,0.6)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              PROBETRAINING BUCHEN
            </span>
            <div className="absolute inset-0 h-full w-full rounded-full bg-white/30 animate-pulse-slow"></div>
          </a>
          
          <a
            href="#programs"
            className="w-full sm:w-auto px-10 py-4 rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white font-bold hover:bg-white hover:text-secondary transition-all text-lg hover:border-white"
          >
            PROGRAMME
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white/70 hidden md:block">
        <a href="#programs" className="flex flex-col items-center gap-2 group cursor-pointer hover:text-primary transition-colors">
          <span className="text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">Scroll</span>
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;