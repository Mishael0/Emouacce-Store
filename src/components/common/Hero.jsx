import React, { useState, useEffect, useRef} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slides } from '../../data/slides';

function Hero() {
   const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
  
       useEffect(() => {
      if (isPaused) return;
  
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
  
      return () => clearInterval(timer);
    }, [isPaused]);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
  
    const goToSlide = (index) => {
      setCurrentSlide(index);
    };
  
    // Touch handlers for mobile swipe
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };
  
    const handleTouchMove = (e) => {
      touchEndX.current = e.touches[0].clientX;
    };
  
    const handleTouchEnd = () => {
      const swipeThreshold = 50;
      const diff = touchStartX.current - touchEndX.current;
  
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
  
      touchStartX.current = 0;
      touchEndX.current = 0;
    };
  
    return (
      <section 
        className="relative w-full h-screen overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Images with key prop for proper rendering */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.subtitle}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>
        ))}
  
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg"
          aria-label="Previous slide"
          type="button"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-black" />
        </button>
  
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg"
          aria-label="Next slide"
          type="button"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black" />
        </button>
  
        {/* Content - Bottom Positioned (Nike Style) - Reduced Text Sizes */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pb-16 md:pb-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex items-end justify-center">
            <div className="text-white" key={currentSlide}>
              <div className="inline-block">
                    <span className="text-sm font-semibold text-gray-100 tracking-wider uppercase">
                      {slides[currentSlide].category}
                    </span>
                  </div>
              <p className="text-lg font-medium tracking-wider mb-1 uppercase animate-fade-in opacity-90">
                {slides[currentSlide].title}
              </p>
              <h1 className="text-sm md:text-sm lg:text-sm mb-2 animate-fade-in leading-tight">
                {slides[currentSlide].subtitle}
              </h1>
              <p className="text-sm md:text-base max-w-md mb-4 md:mb-6 animate-fade-in leading-relaxed opacity-90">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 animate-fade-in">
                <button 
                  className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 text-xs md:text-sm"
                  type="button"
                >
                  Shop Now
                </button>
                <button 
                  className="bg-transparent text-white border-2 border-white px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 text-xs md:text-sm"
                  type="button"
                >
                  Explore deals
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation Dots */}
        <div className="absolute bottom-6 md:bottom-8 left-0 right-0 z-30 flex justify-center gap-2 md:gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-6 md:w-8 h-2 bg-white'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? 'true' : 'false'}
              type="button"
            />
          ))}
        </div>
  
        <style>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
  
          .animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
          }
        `}</style>
      </section>
    );
}

export default Hero;