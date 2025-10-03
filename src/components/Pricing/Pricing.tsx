import React from 'react';
import { Button } from '../ui';

export default function Pricing() {
  return (
    <div className="w-full h-[1040px] self-stretch px-14 pt-60 pb-28 relative inline-flex flex-col justify-start items-center gap-20 overflow-hidden">
      <div className="w-[801.29px] h-[801.29px] left-[83.30px] top-[-272.29px] absolute origin-top-left rotate-[-15deg] bg-cyan-50 rounded-[236.46px]" />
      <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-20 z-10">
        <div className="flex flex-col justify-start items-center gap-8">
          <div className="flex flex-col justify-start items-center gap-4">
            <div className="self-stretch flex flex-col justify-start items-center gap-6">
              <div className="w-[974.90px] text-center justify-start"><span className="text-neutral-800 text-7xl font-bold font-inter leading-[88px]">Ready to revolutionize </span><span className="text-neutral-800 text-7xl font-medium font-inter leading-[88px]">your business management?</span></div>
              <div className="self-stretch text-center justify-start text-neutral-800 text-lg font-normal font-source-sans-pro leading-7">Flexible and transparent pricing designed to support your business growth and digital transformation</div>
            </div>
          </div>
          <div className="inline-flex justify-start items-start gap-4">
            <div className="flex justify-start items-start gap-4">
              <Button variant="filled" size="lg">
                Request Free Demo
              </Button>
              <Button variant="outline" size="lg">
                Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
