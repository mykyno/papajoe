import React, { useEffect, useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Filter } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'training' | 'games' | 'events' | 'camp'>('all');
  
  useEffect(() => {
    // Initialize GLightbox
    const lightbox = (window as any).GLightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideos: true
    });
    return () => lightbox.destroy();
  }, [filter]); // Re-init on filter change

  const filteredImages = filter === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  const categories = [
    { id: 'all', label: 'Alle' },
    { id: 'training', label: 'Training' },
    { id: 'games', label: 'Turniere' },
    { id: 'events', label: 'Events' },
    { id: 'camp', label: 'Camps' }
  ];

  return (
    <section id="gallery" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12" data-aos="fade-up">
          <div className="mb-6 md:mb-0">
             <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Galerie</h2>
             <h3 className="text-4xl md:text-5xl font-heading font-black text-white">Impressionen</h3>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  filter === cat.id 
                    ? 'bg-primary text-white shadow-[0_0_15px_rgba(255,98,0,0.5)]' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] transition-all duration-500">
          {filteredImages.map((img, idx) => (
            <a 
              href={img.src} 
              className={`glightbox relative overflow-hidden rounded-xl group ${img.span} block cursor-zoom-in`}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              key={img.id}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">{img.category}</span>
                <span className="text-white font-bold text-lg">{img.title}</span>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <button className="text-white border-b-2 border-primary pb-1 hover:text-primary transition-colors font-bold uppercase tracking-widest text-sm">
             Mehr auf Instagram
           </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
