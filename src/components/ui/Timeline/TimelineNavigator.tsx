'use client';

import React from 'react';

interface TimelineNavigatorProps {
  years: string[];
  activeIndex: number;
  onYearClick: (index: number) => void;
}

export default function TimelineNavigator({ years, activeIndex, onYearClick }: TimelineNavigatorProps) {
  return (
    <div className="timeline w-full flex justify-start items-start" role="tablist" aria-label="Timeline navigation">
      {years.map((year, index) => {
        const isActive = index === activeIndex;
        const isPast = index < activeIndex;
        
        return (
          <button
            key={year}
            onClick={() => onYearClick(index)}
            className="flex-1 py-2 flex flex-col justify-center items-center gap-2 transition-all duration-300 cursor-pointer hover:scale-105 rounded-lg"
            role="tab"
            aria-selected={isActive}
            aria-controls={`timeline-content-${index}`}
            tabIndex={isActive ? 0 : -1}
          >
            {/* Connector Line */}
            <div className="self-stretch flex justify-center items-center gap-2">
              {/* Left line */}
              <div 
                className={`flex-1 h-[3px] transition-colors duration-300 ${
                  isPast || isActive ? 'bg-primary-600' : 'bg-neutral-400'
                }`}
              />
              
              {/* Dot */}
              <div 
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary-600 scale-125 ring-4 ring-primary-100' 
                    : isPast 
                    ? 'bg-primary-600' 
                    : 'bg-neutral-500 hover:bg-neutral-600'
                }`}
              />
              
              {/* Right line */}
              <div 
                className={`flex-1 h-[3px] transition-colors duration-300 ${
                  isPast ? 'bg-primary-600' : 'bg-neutral-400'
                }`}
              />
            </div>
            
            {/* Year Label */}
            <div 
              className={`text-center text-xl sm:text-2xl font-medium font-inter leading-loose transition-colors duration-300 ${
                isActive 
                  ? 'text-primary-600 scale-110' 
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              {year}
            </div>
          </button>
        );
      })}
    </div>
  );
}
