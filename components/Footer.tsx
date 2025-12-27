import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-white pt-20 pb-10 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-heading font-black text-2xl mb-6 tracking-tighter">UNCLE'S<span className="text-primary">.</span></h4>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm">
              Die führende Basketball-Akademie in Luzern. Wir formen nicht nur Sportler, sondern Persönlichkeiten für die Zukunft.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary hover:-translate-y-1 transition-all duration-300 group">
                  <Icon size={20} className="group-hover:animate-bounce" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6 text-white/90">Navigation</h5>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6 text-white/90">Rechtliches</h5>
            <ul className="space-y-3 text-sm">
              {['Impressum', 'Datenschutz', 'AGB', 'Cookie Policy'].map((item) => (
                <li key={item}><a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6 text-white/90">Newsletter</h5>
            <p className="text-gray-400 mb-4 text-sm">Keine News mehr verpassen.</p>
            <div className="flex relative">
              <input 
                type="email" 
                placeholder="Email Adresse" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-primary w-full pr-12 text-sm transition-colors"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-primary px-4 rounded-md font-bold hover:bg-orange-600 transition-colors text-xs uppercase tracking-wider">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} Uncle's Basketball Academy. Made with passion in Luzern.
          </p>
          
          <button 
            onClick={scrollToTop} 
            className={`fixed bottom-8 right-8 bg-primary p-3 rounded-full shadow-lg z-50 hover:bg-orange-600 transition-all duration-500 transform ${
              showTopBtn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
            }`}
            aria-label="Back to top"
          >
            <ArrowUp size={24} className="animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
