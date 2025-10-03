import React from 'react';
import Image from 'next/image';

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
  
  return (
    <div className="self-stretch px-14 pt-64 pb-56 flex flex-col justify-start items-center gap-20 overflow-hidden">
      <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-20">
        <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-6">
          <div className="self-stretch text-center justify-start text-neutral-800 text-5xl font-medium font-inter leading-[58px]">
            {title.includes('Customer') ? (
              <>Customer <strong>stories</strong></>
            ) : (
              <span dangerouslySetInnerHTML={{ __html: title }} />
            )}
          </div>
          <div className="self-stretch text-center justify-start text-neutral-800 text-lg font-normal font-source-sans-pro leading-7">
            {subtitle}
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-16">
          <div className="self-stretch flex justify-center items-start gap-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="customer-story flex-1 flex flex-col justify-start items-center gap-6 overflow-hidden">
                <div className="min-h-24 self-stretch text-center justify-start text-neutral-800 text-2xl font-medium font-inter leading-tight">
                  &quot;{testimonial.quote}&quot;
                </div>
                <div className="w-72 flex flex-col justify-start items-center gap-4">
                  <div className="customer-img w-14 h-14 bg-stone-300 rounded-full">
                    {testimonial.customerImage && (
                      <Image 
                        alt={testimonial.customerName} 
                        src={testimonial.customerImage} 
                        width={56} 
                        height={56} 
                        className="w-14 h-14 rounded-full object-cover"
                      />
                    )}
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch text-center justify-start text-neutral-800 text-base font-bold font-source-sans-pro leading-normal">
                      {testimonial.customerName}
                    </div>
                    <div className="self-stretch text-center justify-start text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">
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