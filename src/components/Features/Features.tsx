import React from 'react';
import { Button } from '../ui';

export default function Features() {
  return (
    <div className="self-stretch h-auto min-h-screen relative overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Background decorative element */}
      <div className="w-[801.29px] h-[801.29px] left-[-354.38px] top-[-129.99px] absolute origin-top-left rotate-[-15deg] bg-primary-50 rounded-[236.46px]" />
      
      <div className='h-full flex flex-col justify-center items-center gap-12 md:gap-16 lg:gap-20 px-4 md:px-8 lg:px-16 z-10 relative'>
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20">
          <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-6 md:gap-8">
            <div className="self-stretch flex flex-col justify-start items-center gap-3 md:gap-4">
              <div className="inline-flex justify-start items-center">
                <div className="justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Features</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-center gap-4 md:gap-6">
                <div className="self-stretch text-center justify-start">
                  <span className="text-neutral-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-inter leading-tight sm:leading-snug md:leading-[72px] lg:leading-[88px]">From AI-powered </span>
                  <span className="text-neutral-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-inter leading-tight sm:leading-snug md:leading-[72px] lg:leading-[88px]">insights</span>
                  <span className="text-neutral-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-inter leading-tight sm:leading-snug md:leading-[72px] lg:leading-[88px]"> to seamless integrations</span>
                </div>
                <div className="self-stretch text-center justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-6 md:leading-7">
                  Discover a comprehensive suite of cutting-edge features designed to streamline your business operations and drive intelligent growth
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-3 md:gap-4 w-full sm:w-auto">
              <Button variant="filled" size="lg" className="w-full sm:w-auto">
                Try it free
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
