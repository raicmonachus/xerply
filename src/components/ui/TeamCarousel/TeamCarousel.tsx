
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedIn?: string;
  twitter?: string;
}

interface TeamCarouselProps {
  members: TeamMember[];
  className?: string;
}

export default function TeamCarousel({ members, className = '' }: TeamCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % members.length);
  };

  const prevMember = () => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  const goToMember = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`self-stretch flex flex-col justify-start items-start gap-16 ${className}`}>
      {/* Mobile/Tablet Carousel */}
      <div className="lg:hidden w-full relative">
        {/* Team Member Card */}
        <div className="flex-1 flex flex-col justify-start items-center gap-6 overflow-hidden px-4 md:px-8">
          <img src={members[currentIndex].image || "/assets/images/placeholder/Placeholder_Image_80x80.svg"} alt={`${members[currentIndex].name} Avatar`} className="rounded-full" />
          <div className="self-stretch flex flex-col justify-start items-center gap-4">
            <div className="self-stretch flex flex-col justify-start items-center">
              <div className="self-stretch text-center justify-start text-neutral-800 text-xl font-semibold font-inter leading-normal">
                {members[currentIndex].name}
              </div>
              <div className="self-stretch text-center justify-start text-neutral-800 text-lg font-normal font-source-sans-pro leading-7">
                {members[currentIndex].role}
              </div>
            </div>
            <div className="self-stretch text-center justify-start text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">
              {members[currentIndex].bio}
            </div>
          </div>
          {/* Social Links */}
          <div className="flex justify-center items-center gap-3.5">
            {members[currentIndex].linkedIn && (
              <img alt="LinkedIn" src="/assets/icons/LinkedIn.svg" />
            )}
            {members[currentIndex].twitter && (
              <img alt="X" src="/assets/icons/X.svg" />
            )}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevMember}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-neutral-50 transition-colors z-10"
          aria-label="Previous team member"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-neutral-800" />
        </button>
        <button
          onClick={nextMember}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-neutral-50 transition-colors z-10"
          aria-label="Next team member"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-neutral-800" />
        </button>

        {/* Dots Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {members.map((_, index) => (
            <button
              key={index}
              onClick={() => goToMember(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-primary-600 w-8' 
                  : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Go to team member ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:flex self-stretch justify-start items-start gap-12">
        {members.map((member) => (
          <div key={member.id} className="flex-1 flex flex-col justify-start items-center gap-6">
            <img src={member.image || "/assets/images/placeholder/Placeholder_Image_80x80.svg"} alt={`${member.name} Avatar`} className="rounded-full" />
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
              <div className="self-stretch flex flex-col justify-start items-center">
                <div className="self-stretch text-center justify-start text-neutral-800 text-xl font-semibold font-inter leading-normal">
                  {member.name}
                </div>
                <div className="self-stretch text-center justify-start text-neutral-800 text-lg font-normal font-source-sans-pro leading-7">
                  {member.role}
                </div>
              </div>
              <div className="self-stretch text-center justify-start text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">
                {member.bio}
              </div>
            </div>
            {/* Social Links */}
            <div className="flex justify-center items-center gap-3.5">
              {member.linkedIn && (
                <img alt="LinkedIn" src="/assets/icons/LinkedIn.svg" />
              )}
              {member.twitter && (
                <img alt="X" src="/assets/icons/X.svg" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
