import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveLink(`#${current}`);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 border-b border-transparent ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <span className="text-primary mr-2 transform group-hover:rotate-12 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2.1 13.4h19.8"/><path d="M5.9 3.1A12 12 0 0 1 12 22"/><path d="M18.1 3.1A12 12 0 0 0 12 22"/></svg>
            </span>
            <span className="font-heading font-black text-2xl tracking-tighter text-white">
              UNCLE'S <span className="text-primary">ACADEMY</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeLink === link.href ? 'text-primary' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${activeLink === link.href ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </a>
            ))}
            <a
              href="#contact"
              className="relative overflow-hidden bg-primary text-white px-6 py-2.5 rounded-full font-bold uppercase text-sm tracking-wide shadow-[0_0_15px_rgba(255,98,0,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(255,98,0,0.7)] group"
            >
              <span className="relative z-10 group-hover:text-white transition-colors">Probetraining</span>
              <div className="absolute inset-0 h-full w-full bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors p-2"
              aria-label="Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-secondary/95 backdrop-blur-xl border-t border-gray-700 shadow-2xl transition-all duration-500 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-primary text-xl font-bold py-2 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-center text-white py-4 rounded-xl font-bold uppercase tracking-widest mt-4"
          >
            Kostenloses Probetraining
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
