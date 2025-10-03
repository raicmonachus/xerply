import React from 'react';
import { Button } from '../ui';

export default function Solutions() {
  return (
    <div className="w-full h-[1040px] self-stretch px-14 pt-60 pb-28 relative inline-flex flex-col justify-start items-center gap-20 overflow-hidden">
      <div className="w-[801.29px] h-[801.29px] left-[83.30px] top-[-272.29px] absolute origin-top-left rotate-[-15deg] bg-cyan-50 rounded-[236.46px]" />
      <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-20 z-10">
        <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-8">
          <div className="self-stretch flex flex-col justify-start items-center gap-4">
            <div className="inline-flex justify-start items-center">
              <div className="justify-start text-neutral-800 text-base font-semibold font-source-sans-pro leading-normal">Solutions</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-6">
              <div className="self-stretch text-center justify-start"><span className="text-neutral-800 text-7xl font-bold fontinter leading-[88px]">Intelligent</span><span className="text-neutral-800 text-7xl font-medium fontinter leading-[88px]"> erp for every business</span></div>
              <div className="self-stretch text-center justify-start text-neutral-800 text-lg font-normal font-source-sans-pro leading-7">Customize your enterprise resource planning with AI-powered solutions tailored to your business size and unique operational needs</div>
            </div>
          </div>
          <div className="inline-flex justify-start items-start gap-4">
            <div className="flex justify-start items-start gap-4">
              <Button variant="filled" size="lg">
                Try it free
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
