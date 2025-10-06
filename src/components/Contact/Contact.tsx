import React from 'react';
import { Button } from '../ui';

export default function Contact() {
  return (
    <div className="self-stretch h-auto min-h-screen relative overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Background decorative element */}
      <div className="w-[801.29px] h-[801.29px] left-[83.30px] top-[-360.29px] absolute origin-top-left rotate-[-15deg] bg-cyan-50 rounded-[236.46px]" />
      
      <div className='h-full flex flex-col justify-center items-center gap-12 md:gap-16 lg:gap-20 px-4 md:px-8 lg:px-16 z-10 relative'>
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20">
          <div className="w-full max-w-[974.90px] flex flex-col justify-start items-center gap-6 md:gap-8">
            <div className="flex flex-col justify-start items-center gap-4 md:gap-6">
              <div className="w-full text-center justify-start">
                <span className="text-neutral-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-inter leading-tight sm:leading-snug md:leading-[72px] lg:leading-[88px]">Connect with </span>
                <span className="text-neutral-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-inter leading-tight sm:leading-snug md:leading-[72px] lg:leading-[88px]">Xerply</span>
              </div>
              <div className="self-stretch text-center justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-6 md:leading-7">
                Reach out and transform your business with intelligent ERP solutions that drive growth and efficiency
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-3 md:gap-4 w-full sm:w-auto">
              <Button variant="filled" size="lg" className="w-full sm:w-auto">
                Try it free
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
