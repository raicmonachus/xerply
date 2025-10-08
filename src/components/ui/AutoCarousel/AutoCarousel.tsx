
import { useState, useEffect, ReactNode } from 'react';

interface AutoCarouselProps {
  items: ReactNode[];
  interval?: number;
  showDots?: boolean;
  dotsPosition?: 'bottom' | 'custom';
  className?: string;
  dotsClassName?: string;
}

export default function AutoCarousel({ 
  items, 
  interval = 3000, 
  showDots = true,
  dotsPosition = 'bottom',
  className = '',
  dotsClassName = ''
}: AutoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = items.length;

  useEffect(() => {
    const autoRotate = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, interval);

    return () => clearInterval(autoRotate);
  }, [totalItems, interval]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={`relative w-full h-full min-h-[400px] ${className}`}>
      {/* Carousel Items */}
      <div className="relative overflow-hidden w-full h-full min-h-[400px]">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Dots Indicators */}
      {showDots && dotsPosition === 'bottom' && (
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex justify-center items-center gap-4 ${dotsClassName}`}>
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-[80px] ${
                index === activeIndex
                  ? 'flex-1 h-2 max-h-2 bg-primary-600 w-14'
                  : 'flex-1 h-2 max-h-2 bg-primary-50 w-14'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Custom Dots Position (for absolute positioning) */}
      {showDots && dotsPosition === 'custom' && (
        <div className={dotsClassName}>
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-[80px] ${
                index === activeIndex
                  ? 'flex-1 h-2 max-h-2 bg-primary-600'
                  : 'flex-1 h-2 max-h-2 bg-primary-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
