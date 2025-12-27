import React, { useState } from 'react';
import { Play, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div data-aos="fade-right">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Unsere Philosophie</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-secondary mb-8 leading-tight">
              Mehr als nur Basketball. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Eine Schule fürs Leben.</span>
            </h3>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Seit 2014 prägen wir die Basketball-Landschaft in der Zentralschweiz. 
              Unsere Philosophie verbindet sportliche Exzellenz mit persönlicher Entwicklung. 
              Wir glauben daran, dass Disziplin, Teamwork und Leidenschaft auf dem Court 
              sich direkt auf den Erfolg im Leben übertragen lassen.
            </p>

            <div className="space-y-5 mb-10">
              {[
                "Zertifizierte Swiss Basketball Coaches",
                "Individuelle Förderung in Kleingruppen",
                "Moderne Trainingsmethoden & Video-Analyse",
                "Fokus auf Charakterentwicklung & Fairplay"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center group" data-aos="fade-up" data-aos-delay={idx * 100}>
                   <CheckCircle className="text-primary mr-4 group-hover:scale-125 transition-transform" size={24} />
                   <span className="text-lg font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-block border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:shadow-xl">
              Lerne unser Team kennen
            </a>
          </div>

          {/* Coach Video / Parallax Image */}
          <div className="relative" data-aos="fade-left">
             <div className="absolute -inset-6 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-[2rem] transform rotate-3 blur-2xl"></div>
             
             <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-black aspect-[4/5] md:aspect-square group">
                {!isPlaying ? (
                  <>
                    <img 
                      src="https://images.unsplash.com/photo-1542555674-84617be3a7d4?auto=format&fit=crop&q=80&w=800" 
                      alt="Head Coach" 
                      className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                       <p className="font-heading font-bold text-2xl">Coach Mike</p>
                       <p className="text-primary font-medium">Head Coach & Founder</p>
                    </div>
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300 border border-white/50"
                    >
                       <Play size={32} className="text-white fill-current ml-1" />
                    </button>
                  </>
                ) : (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    title="Coach Intro" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                )}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
