import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 'clinic',
    image: '/images/hero/main-hero.png',
    badge: 'उमंग आयुर्वेदिक क्लिनिक',
    title: 'आधुनिक व स्वच्छ क्लिनिक',
    subtitle: 'ठाणे (पश्चिम) स्टेशन के पास | अनुभवी डॉक्टर',
    path: '/about',
    buttonText: 'क्लिनिक के बारे में जानें',
  },
  {
    id: 'sexual-health',
    image: '/images/treatment/sexual.png',
    badge: 'SEXUAL HEALTH',
    title: 'यौन समस्याएं एवं गुप्त रोग',
    subtitle: 'शीघ्रपतन, कमजोरी व तनाव का 100% गोपनीय इलाज',
    path: '/sexual-health',
    buttonText: 'सेक्स समस्या का इलाज देखें',
  },
  {
    id: 'piles',
    image: '/images/piles/laser-ayurvedic-cure.jpg',
    badge: 'PILES (बवासीर)',
    title: 'खूनी व बादी बवासीर का पक्का इलाज',
    subtitle: 'मस्से, दर्द व सूजन से राहत | लेजर सुविधा उपलब्ध',
    path: '/piles-treatment',
    buttonText: 'बवासीर का इलाज देखें',
  },
  {
    id: 'fistula',
    image: '/images/treatment/fistula.png',
    badge: 'FISTULA (भगंदर)',
    title: 'भगंदर का सफल आयुर्वेदिक इलाज',
    subtitle: 'मवाद, जलन व पुराने फिस्टुला से स्थायी छुटकारा',
    path: '/fistula-treatment',
    buttonText: 'भगंदर का इलाज देखें',
  },
  {
    id: 'bones',
    image: '/images/treatment/bones.png',
    badge: 'SCIATICA & BONES',
    title: 'हड्डी में गैप व दबी नस (Sciatica)',
    subtitle: 'कमर, घुटने व नसों के असहनीय दर्द में पक्का आराम',
    path: '/bone-joint-care',
    buttonText: 'साइटिका व हड्डी का इलाज देखें',
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div 
      className="relative w-full rounded-3xl shadow-2xl overflow-hidden group select-none h-[420px] sm:h-[460px] lg:h-[500px] border-2 border-white/50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="मुख्य उपचार सेवाएं"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform scale-110 -z-10 pointer-events-none"></div>

      {/* Slide Images */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              isActive 
                ? 'opacity-100 scale-100 z-10 pointer-events-auto' 
                : 'opacity-0 scale-105 z-0 pointer-events-none'
            }`}
          >
            {/* Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/hero/main-hero.png';
              }}
            />

            {/* Subtle Gradient Overlays for readable text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 pointer-events-none"></div>

            {/* Top Category Badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
              <span className="inline-flex items-center gap-1.5 py-1 px-3 sm:px-3.5 rounded-full bg-primary/80 backdrop-blur-md text-white text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/20 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                {slide.badge}
              </span>
            </div>

            {/* Slide Counter on Top Right */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
              <span className="py-1 px-3 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-xs font-mono font-bold border border-white/10">
                0{index + 1} / 0{slides.length}
              </span>
            </div>

            {/* Bottom Caption & Link */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 z-20 text-white">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-1.5 leading-tight drop-shadow-md">
                {slide.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 mb-4 max-w-md font-medium leading-relaxed drop-shadow">
                {slide.subtitle}
              </p>

              <Link
                to={slide.path}
                className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all group/btn"
              >
                <span>{slide.buttonText}</span>
                <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        );
      })}

      {/* Prev Navigation Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center border border-white/20 transition-all opacity-80 hover:opacity-100 hover:scale-105 focus:outline-none shadow-lg"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next Navigation Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center border border-white/20 transition-all opacity-80 hover:opacity-100 hover:scale-105 focus:outline-none shadow-lg"
        aria-label="Next Slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 right-5 sm:bottom-6 sm:right-7 z-30 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full focus:outline-none ${
              index === currentIndex
                ? 'w-7 sm:w-8 h-2 sm:h-2.5 bg-secondary shadow-md'
                : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
