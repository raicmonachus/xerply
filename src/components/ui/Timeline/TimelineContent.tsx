
import { TimelineItem } from './types';

interface TimelineContentProps {
  item: TimelineItem;
  index: number;
  isActive: boolean;
  contentPosition: 'left' | 'right';
  animated: boolean;
}

export default function TimelineContent({ 
  item, 
  index, 
  isActive, 
  contentPosition,
  animated 
}: TimelineContentProps) {
  return (
    <div
      id={`timeline-content-${index}`}
      role="tabpanel"
      aria-labelledby={`timeline-tab-${index}`}
      className={`absolute inset-0 transition-all duration-500 ${
        isActive 
          ? 'opacity-100 z-10 translate-y-0' 
          : 'opacity-0 z-0 translate-y-4 pointer-events-none'
      } ${animated ? '' : 'transition-none'}`}
    >
      {/* Desktop & Tablet Layout */}
      <div className="hidden md:flex justify-start items-center gap-12 lg:gap-20">
        {contentPosition === 'left' ? (
          <>
            {/* Content on Left */}
            <div className="flex-1 flex flex-col justify-start items-start gap-6 lg:gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-4 lg:gap-6">
                <div className="self-stretch flex flex-col justify-start items-start gap-3 lg:gap-4">
                  <div className="self-stretch text-neutral-800 text-3xl lg:text-4xl font-medium font-inter leading-tight lg:leading-[48px]">
                    {item.year}
                  </div>
                  <div className="self-stretch text-neutral-800 text-2xl lg:text-3xl font-medium font-inter leading-snug lg:leading-9">
                    {item.title}
                  </div>
                </div>
                <div className="self-stretch text-neutral-800 text-base lg:text-lg font-normal font-source-sans-pro leading-normal lg:leading-7">
                  {item.description}
                </div>
              </div>
            </div>
            
            {/* Image on Right */}
            <div className="flex-1 self-stretch relative min-h-[300px] lg:min-h-[400px]">
              <img className="w-full h-full object-cover rounded-2xl" src={item.image} alt={item.imageAlt || `${item.year} - ${item.title}`} />
            </div>
          </>
        ) : (
          <>
            {/* Image on Left */}
            <div className="flex-1 self-stretch relative min-h-[300px] lg:min-h-[400px]">
              <img className="w-full h-full object-cover rounded-2xl" src={item.image} alt={item.imageAlt || `${item.year} - ${item.title}`} />
            </div>
            
            {/* Content on Right */}
            <div className="flex-1 flex flex-col justify-start items-start gap-6 lg:gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-4 lg:gap-6">
                <div className="self-stretch flex flex-col justify-start items-start gap-3 lg:gap-4">
                  <div className="self-stretch text-neutral-800 text-3xl lg:text-4xl font-medium font-inter leading-tight lg:leading-[48px]">
                    {item.year}
                  </div>
                  <div className="self-stretch text-neutral-800 text-2xl lg:text-3xl font-medium font-inter leading-snug lg:leading-9">
                    {item.title}
                  </div>
                </div>
                <div className="self-stretch text-neutral-800 text-base lg:text-lg font-normal font-source-sans-pro leading-normal lg:leading-7">
                  {item.description}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col justify-start items-start gap-6">
        {/* Image First */}
        <div className="w-full relative min-h-[200px]">
          <img className="w-full h-full object-cover rounded-xl" src={item.image} alt={item.imageAlt || `${item.year} - ${item.title}`} />
        </div>
        
        {/* Content Below */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="self-stretch text-neutral-800 text-2xl font-medium font-inter leading-tight">
              {item.year}
            </div>
            <div className="self-stretch text-neutral-800 text-xl font-medium font-inter leading-snug">
              {item.title}
            </div>
          </div>
          <div className="self-stretch text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">
            {item.description}
          </div>
        </div>
      </div>
    </div>
  );
}
