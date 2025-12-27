import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PROGRAMS } from '../constants';

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-24 bg-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Ausbildungsweg</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-black text-secondary">Unsere Programme</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Vom ersten Dribbling bis zum Liga-Spiel. Wähle das passende Level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="group h-[500px] perspective-1000 w-full"
              data-aos="fade-up"
              data-aos-delay={program.delay}
            >
              <div className="relative h-full w-full transition-all duration-700 transform-style-3d preserve-3d group-hover:rotate-y-180 shadow-xl rounded-2xl">
                
                {/* Front Side */}
                <div className="absolute inset-0 h-full w-full bg-white rounded-2xl overflow-hidden backface-hidden flex flex-col">
                  <div className="h-1/2 relative overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary/30"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h4 className="text-2xl font-bold text-white">{program.title}</h4>
                      <p className="text-accent font-bold">{program.ageRange}</p>
                    </div>
                  </div>
                  <div className="h-1/2 p-8 flex flex-col justify-between bg-white relative">
                    <div>
                       <p className="text-gray-600 mb-4">{program.description}</p>
                       <div className="text-3xl font-black text-primary">{program.price}</div>
                    </div>
                    <div className="flex justify-center mt-4">
                       <span className="text-secondary text-sm font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                          Details ansehen <ArrowRight size={16} />
                       </span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 h-full w-full bg-secondary rounded-2xl overflow-hidden backface-hidden rotate-y-180 p-8 flex flex-col justify-center items-center text-center border-2 border-primary/50">
                  <div className="bg-white/10 p-4 rounded-full mb-6">
                    <Check size={32} className="text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{program.title}</h4>
                  <p className="text-gray-300 mb-8 text-sm">{program.schedule}</p>
                  
                  <div className="space-y-4 mb-8 text-left w-full pl-4">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-200">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a 
                    href="#contact" 
                    className="bg-primary hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all w-full"
                  >
                    JETZT ANMELDEN
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
