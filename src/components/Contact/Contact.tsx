import React from 'react';

export default function Contact() {
  return (
    <div className="w-full h-[1040px] self-stretch px-14 pt-60 pb-28 relative inline-flex flex-col justify-start items-center gap-20 overflow-hidden">
      <div className="w-[801.29px] h-[801.29px] left-[83.30px] top-[-360.29px] absolute origin-top-left rotate-[-15deg] bg-cyan-50 rounded-[236.46px]" />
      <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-20 z-10">
        <div className="flex flex-col justify-start items-center gap-8">
          <div className="flex flex-col justify-start items-center gap-4">
            <div className="self-stretch flex flex-col justify-start items-center gap-6">
              <div className="w-[974.90px] text-center justify-start"><span className="text-neutral-800 text-7xl font-medium font-inter leading-[88px]">Connect with </span><span className="text-neutral-800 text-7xl font-bold font-inter leading-[88px]">Xerply</span></div>
              <div className="self-stretch text-center justify-start text-neutral-800 text-lg font-normal font-source-sans-pro leading-7">Reach out and transform your business with intelligent ERP solutions that drive growth and efficiency</div>
            </div>
          </div>
          <div className="inline-flex justify-start items-start gap-4">
            <div className="flex justify-start items-start gap-4">
              <div className="px-6 py-3 bg-primary-600 rounded-lg flex justify-center items-center">
                <div className="justify-start text-white-alpha-10/95 text-sm font-semibold font-inter leading-tight">Try it free</div>
              </div>
              <div className="px-6 py-3 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-primary-600 flex justify-center items-center">
                <div className="justify-start text-primary-600 text-sm font-semibold font-inter leading-tight">Pricing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
