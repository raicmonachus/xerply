import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface TestimonialData {
  id: number;
  quote: string;
  customerName: string;
  customerRole: string;
  customerImage?: string; // Opcional por ahora, usando placeholders
}

interface TestimonialProps {
  testimonials?: TestimonialData[];
  title?: string;
  subtitle?: string;
}

// Datos por defecto
const defaultTestimonials: TestimonialData[] = [
  {
    id: 1,
    quote: "Xerply transformed our operational efficiency overnight",
    customerName: "Maria Rodriguez",
    customerRole: "CEO, TechNova Solutions",
  },
  {
    id: 2,
    quote: "Incredible AI insights that drive real growth",
    customerName: "Carlos Mendez",
    customerRole: "Operations Director, GlobalTrade Inc",
  },
  {
    id: 3,
    quote: "The most intuitive ERP system I've ever used",
    customerName: "Ana Santos",
    customerRole: "Founder, Innovative Logistics",
  },
];

export default function Testimonial({ 
  testimonials = defaultTestimonials,
  title = "Customer stories",
  subtitle = "Real results from businesses like yours"
}: TestimonialProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };
  
  return (
    <div className="self-stretch px-4 md:px-8 lg:px-16 py-16 md:py-24 lg:pt-32 lg:pb-32 flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20 overflow-hidden">
      <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-12 md:gap-14 lg:gap-16">
        <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-4 md:gap-5">
          <div className="self-stretch text-center justify-start text-neutral-800 text-3xl sm:text-4xl md:text-5xl font-medium font-inter leading-snug sm:leading-[50px] md:leading-[58px]">
            {title.includes('Customer') ? (
              <>Customer <strong>stories</strong></>
            ) : (
              <span dangerouslySetInnerHTML={{ __html: title }} />
            )}
          </div>
          <div className="self-stretch text-center justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-6 md:leading-7">
            {subtitle}
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-8 md:gap-12 lg:gap-16">
          {/* Mobile Carousel */}
          <div className="lg:hidden w-full relative">
            {/* Testimonial Card */}
            <div className="customer-story flex-1 flex flex-col justify-start items-center gap-4 md:gap-6 overflow-hidden px-4 md:px-8">
              <div className="min-h-32 md:min-h-36 self-stretch text-center justify-start text-neutral-800 text-xl md:text-2xl font-medium font-inter leading-tight">
                &quot;{testimonials[currentIndex].quote}&quot;
              </div>
              <div className="w-full max-w-72 flex flex-col justify-start items-center gap-3 md:gap-4">
                <div className="customer-img w-12 h-12 md:w-14 md:h-14 bg-stone-300 rounded-full">
                  {testimonials[currentIndex].customerImage && (
                    <img alt={testimonials[currentIndex].customerName} src={testimonials[currentIndex].customerImage} className="w-full h-full rounded-full object-cover" />
                  )}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch text-center justify-start text-neutral-800 text-sm md:text-base font-bold font-source-sans-pro leading-normal">
                    {testimonials[currentIndex].customerName}
                  </div>
                  <div className="self-stretch text-center justify-start text-neutral-800 text-sm md:text-base font-normal font-source-sans-pro leading-normal">
                    {testimonials[currentIndex].customerRole}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-neutral-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-neutral-800" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-neutral-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-neutral-800" />
            </button>

            {/* Dots Indicators */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-primary-600 w-8' 
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:flex self-stretch justify-center items-stretch gap-8 md:gap-10 lg:gap-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="customer-story flex-1 flex flex-col justify-start items-center gap-4 md:gap-6 overflow-hidden px-4 md:px-0">
                <div className="min-h-16 md:min-h-20 lg:min-h-24 self-stretch text-center justify-start text-neutral-800 text-xl md:text-2xl font-medium font-inter leading-tight">
                  &quot;{testimonial.quote}&quot;
                </div>
                <div className="w-full max-w-72 flex flex-col justify-start items-center gap-3 md:gap-4">
                  <div className="customer-img w-12 h-12 md:w-14 md:h-14 bg-stone-300 rounded-full">
                    {testimonial.customerImage && (
                      <img alt={testimonial.customerName} src={testimonial.customerImage} className="w-full h-full rounded-full object-cover" />
                    )}
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch text-center justify-start text-neutral-800 text-sm md:text-base font-bold font-source-sans-pro leading-normal">
                      {testimonial.customerName}
                    </div>
                    <div className="self-stretch text-center justify-start text-neutral-800 text-sm md:text-base font-normal font-source-sans-pro leading-normal">
                      {testimonial.customerRole}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}