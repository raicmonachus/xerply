
import { useState, useEffect, useCallback } from 'react';
import { TimelineProps } from './types';
import TimelineNavigator from './TimelineNavigator';
import TimelineContent from './TimelineContent';

export default function Timeline({
  items,
  defaultActive = 0,
  onYearChange,
  className = '',
  contentPosition = 'right',
  animated = true
}: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  // Handle year change with callback
  const handleYearChange = useCallback((index: number) => {
    setActiveIndex(index);
    if (onYearChange) {
      onYearChange(index, items[index].year);
    }
  }, [items, onYearChange]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => Math.min(items.length - 1, prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items.length]);

  // Update callback when activeIndex changes
  useEffect(() => {
    if (onYearChange) {
      onYearChange(activeIndex, items[activeIndex].year);
    }
  }, [activeIndex, items, onYearChange]);

  return (
    <div className={`w-full flex flex-col justify-start items-start gap-12 lg:gap-16 ${className}`}>      
      {/* Timeline Content Container with Relative Positioning */}
      <div className="w-full relative min-h-[400px] md:min-h-[350px] lg:min-h-[450px] mb-32">
        {items.map((item, index) => (
          <TimelineContent
            key={item.year}
            item={item}
            index={index}
            isActive={index === activeIndex}
            contentPosition={contentPosition}
            animated={animated}
          />
        ))}
      </div>
      {/* Timeline Navigator */}
      <TimelineNavigator 
        years={items.map(item => item.year)}
        activeIndex={activeIndex}
        onYearClick={handleYearChange}
      />
    </div>
  );
}
