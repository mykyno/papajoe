import React, { useEffect } from 'react';
import { Star, PlayCircle, Quote } from 'lucide-react';
import { TESTIMONIALS, VIDEO_TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  useEffect(() => {
    // Initialize Swiper
    new (window as any).Swiper('.video-swiper', {
      slidesPerView: 1.2,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-secondary via-[#142845] to-secondary text-white relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-2">Community</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-black text-white">Das sagen Eltern & Spieler</h3>
        </div>

        {/* Video Carousel */}
        <div className="video-swiper overflow-hidden pb-16" data-aos="fade-up">
           <div className="swiper-wrapper">
              {VIDEO_TESTIMONIALS.map((video) => (
                 <div key={video.id} className="swiper-slide transition-transform duration-300">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border-4 border-white/5 bg-black">
                       <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <PlayCircle size={64} className="text-white/80 group-hover:text-primary group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
                       </div>
                       <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                          <p className="font-bold text-white text-sm">{video.title}</p>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
           <div className="swiper-pagination !bottom-0"></div>
        </div>

        {/* Text Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {TESTIMONIALS.map((t, idx) => (
            <div key={t.id} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2 duration-300 relative group" data-aos="fade-up" data-aos-delay={idx * 100}>
              <Quote className="absolute top-6 right-6 text-white/10 w-12 h-12 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-200 mb-8 italic text-lg leading-relaxed">"{t.text}"</p>
              
              <div className="flex items-center mt-auto border-t border-white/10 pt-6">
                {t.image && (
                   <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary mr-4 object-cover" />
                )}
                <div>
                  <div className="font-bold text-white text-lg">{t.name}</div>
                  <div className="text-sm text-primary font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
