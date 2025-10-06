import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../../ui';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const totalCards = 4; // Sales, Pending Invoices, Cashflow, Integration Progress

  // Auto-rotate carousel every 3 seconds on mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 1024; // lg breakpoint
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % totalCards);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="self-stretch w-full min-h-screen lg:h-[1040px] relative overflow-hidden py-12 md:py-16 lg:py-0">
      {/* Background decorative element - hidden on mobile */}
      <div className="w-96 h-96 md:w-[620px] md:h-[620px] lg:w-[1039.72px] lg:h-[1039.72px] lg:left-[579.26px] lg:top-[22.98px] md:left-64 md:top-12 absolute origin-top-left rotate-[-15deg] bg-primary-50 lg:rounded-[224px] rounded-[100px]" />
      
      <div className='h-full flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-12 lg:gap-16 px-4 md:px-8 lg:px-16 z-5'>
        {/* Cards section - shown first on mobile, second on desktop */}
        <div className="w-full lg:flex-1 h-[500px] md:h-[600px] lg:h-[670px] relative order-1 lg:order-2">
          {/* Mobile: Carousel container */}
          <div className="lg:hidden absolute inset-0 flex items-center justify-center">
            {/* Sales Card */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeCardIndex === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              <div className="w-72 sm:w-80 md:w-96 px-4 md:px-6 py-3 md:py-4 bg-neutral-50 rounded-2xl shadow-lg flex justify-start items-center gap-4 md:gap-6">
                <div className="p-3 md:p-4 bg-primary-50 rounded-lg flex justify-start items-center gap-2.5">
                  <ArrowUpRight className="w-10 h-10 md:w-12 md:h-12 text-primary-600" />
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-1.5 md:gap-2">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Sales</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                    <div className="self-stretch justify-start text-neutral-800 text-2xl md:text-3xl font-bold font-inter leading-7 md:leading-9">$2.5M</div>
                  </div>
                  <div className="self-stretch flex justify-start items-start gap-1">
                    <div className="flex flex-col justify-start items-start">
                      <div className="self-stretch justify-start text-cyan-500 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">+10%</div>
                    </div>
                    <div className="flex flex-col justify-start items-start">
                      <div className="self-stretch justify-start text-neutral-800 text-sm md:text-base font-normal font-source-sans-pro leading-normal">from last period</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pending Invoices Card */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeCardIndex === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              <div className="w-80 sm:w-96 md:w-[458px] px-4 md:px-6 py-3 md:py-4 bg-neutral-50 rounded-2xl shadow-lg flex flex-col justify-start items-start gap-3 md:gap-4">
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                  <div className="justify-start text-neutral-800 text-xl md:text-2xl font-bold font-inter leading-loose">Pending Invoices</div>
                  <div className="self-stretch flex justify-start items-start gap-1">
                    <div className="flex flex-col justify-start items-start">
                      <div className="self-stretch justify-start text-neutral-800 text-sm md:text-base font-normal font-source-sans-pro leading-normal">Invoices to collect and pay</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
                  <div className="self-stretch h-4 flex justify-start items-center gap-3 md:gap-4">
                    <div className="w-16 md:w-20 flex flex-col justify-start items-start">
                      <div className="self-stretch justify-start text-neutral-800 text-xs font-bold font-inter leading-none">To collect</div>
                    </div>
                    <div className="flex-1 self-stretch bg-neutral-300 flex flex-col justify-start items-start">
                      <div className="w-7 flex-1 bg-primary-100 border-r-2 border-primary-600" />
                    </div>
                    <div className="w-6 flex flex-col justify-start items-end">
                      <div className="text-right justify-start text-neutral-800 text-xs font-bold font-inter leading-none">5</div>
                    </div>
                  </div>
                  <div className="self-stretch h-4 flex justify-start items-center gap-3 md:gap-4">
                    <div className="w-16 md:w-20 flex flex-col justify-start items-start">
                      <div className="self-stretch justify-start text-neutral-800 text-xs font-bold font-inter leading-none">To pay</div>
                    </div>
                    <div className="flex-1 self-stretch bg-neutral-300 flex flex-col justify-start items-start">
                      <div className="w-14 flex-1 bg-cyan-100 border-r-2 border-cyan-500" />
                    </div>
                    <div className="w-6 flex flex-col justify-start items-end">
                      <div className="text-right justify-start text-neutral-800 text-xs font-bold font-inter leading-none">7</div>
                    </div>
                  </div>
                  <div className="self-stretch h-4 flex justify-start items-center gap-3 md:gap-4">
                    <div className="w-16 md:w-20 flex flex-col justify-start items-start">
                      <div className="self-stretch justify-start text-neutral-800 text-xs font-bold font-inter leading-none">Overdue</div>
                    </div>
                    <div className="flex-1 self-stretch bg-neutral-300 flex flex-col justify-start items-start">
                      <div className="w-4 flex-1 bg-volcano-100 border-r-2 border-volcano-500" />
                    </div>
                    <div className="w-6 flex flex-col justify-start items-end">
                      <div className="text-right justify-start text-neutral-800 text-xs font-bold font-inter leading-none">2</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-center items-end gap-2.5">
                  <div className="py-0.5 rounded-lg flex justify-center items-center">
                    <div className="justify-start text-primary-600 text-sm font-semibold font-inter leading-tight">Details</div>
                    <div className="w-6 h-6 relative overflow-hidden">
                      <div className="w-1.5 h-3 left-[8.51px] top-[6.17px] absolute bg-primary-600 border border-primary-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cashflow Chart Card */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeCardIndex === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              <div className="w-72 sm:w-96 md:w-[552.22px] h-60 md:h-72 px-4 md:px-6 py-3 md:py-4 bg-neutral-200 rounded-xl shadow-[0px_13.346617698669434px_33.36654281616211px_-6.673308849334717px_rgba(88,92,95,0.16)] flex flex-col justify-start items-start gap-2.5 md:gap-3.5 overflow-hidden">
                <div className="self-stretch flex flex-col sm:flex-row justify-between items-start gap-2 overflow-hidden">
                  <div className="justify-start text-neutral-800 text-lg md:text-xl font-bold font-inter leading-relaxed">Cashflow</div>
                  <div className="w-full sm:w-52 px-[3.34px] py-[1.67px] bg-primary-50 rounded outline outline-[0.83px] outline-offset-[-0.42px] outline-black-alpha-1/5 flex justify-start items-start gap-2">
                    <div className="flex-1 px-3 sm:px-5 py-[1.67px] bg-primary-600 rounded shadow-lg flex justify-center items-center">
                      <div className="justify-start text-white-alpha-10/95 text-[10.01px] font-semibold font-inter leading-3">Actual Data</div>
                    </div>
                    <div className="flex-1 px-3 sm:px-5 py-[1.67px] rounded-md flex justify-center items-center">
                      <div className="justify-start text-neutral-500 text-[10.01px] font-medium font-inter leading-3">Projection</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 content-center">
                  <div className="flex justify-start items-center">
                    <div className="px-2 sm:px-3.5 bg-cyan-50 border-b-[0.83px] border-cyan-500 flex flex-col justify-start items-center gap-[3.34px]">
                      <div className="flex flex-col justify-center items-start">
                        <div className="self-stretch justify-start text-cyan-500 text-xs font-bold font-inter leading-none">Income</div>
                      </div>
                    </div>
                    <div className="px-2 sm:px-3.5 flex flex-col justify-start items-center gap-[3.34px]">
                      <div className="rounded-[10.01px] flex flex-col justify-center items-start">
                        <div className="self-stretch justify-start text-neutral-400 text-xs font-normal font-inter leading-none">Expenses</div>
                      </div>
                    </div>
                    <div className="px-2 sm:px-3.5 flex flex-col justify-start items-center gap-[3.34px]">
                      <div className="rounded-[10.01px] flex flex-col justify-center items-start">
                        <div className="self-stretch justify-start text-neutral-400 text-xs font-normal font-inter leading-none">Net Flow</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-2 sm:gap-3.5">
                    <div className="pl-[3.34px] pr-1.5 py-[1.67px] rounded-md flex justify-start items-center">
                      <div className="w-3.5 h-3.5 relative">
                        <div className="w-[5px] h-[5px] left-[4.17px] top-[4.17px] absolute bg-neutral-800" />
                      </div>
                      <div className="justify-start text-neutral-800 text-[10.01px] font-normal font-inter leading-3">This year</div>
                    </div>
                    <div className="pl-[3.34px] pr-1.5 py-[1.67px] rounded-md flex justify-start items-center">
                      <div className="w-3.5 h-3.5 relative">
                        <div className="w-[5px] h-[5px] left-[4.17px] top-[4.17px] absolute bg-cyan-500" />
                      </div>
                      <div className="justify-start text-neutral-800 text-[10.01px] font-normal font-inter leading-3">Last year</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex justify-start items-start gap-2 md:gap-3.5">
                  <div className="self-stretch flex flex-col justify-between items-end">
                    <div className="text-right justify-center text-Black-40%/40 text-[10.01px] font-semibold font-inter leading-3">30K</div>
                    <div className="text-right justify-center text-Black-40%/40 text-[10.01px] font-semibold font-inter leading-3">20K</div>
                    <div className="text-right justify-center text-Black-40%/40 text-[10.01px] font-semibold font-inter leading-3">10K</div>
                    <div className="text-right justify-center text-Black-40%/40 text-[10.01px] font-semibold font-inter leading-3">0</div>
                  </div>
                  <div className="flex-1 self-stretch relative flex flex-col justify-start items-start">
                    <Image alt="Cashflow Chart" src="/assets/cashflow-chart.svg" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Progress Card */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeCardIndex === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              <div className="w-60 md:w-96 px-4 md:px-6 py-3 md:py-4 bg-neutral-100 rounded-xl shadow-lg flex justify-start items-center gap-4 md:gap-5">
                <div className="flex-1 flex flex-col justify-start items-start gap-1.5">
                  <div className="self-stretch py-1 flex justify-between items-center overflow-hidden">
                    <div className="w-12 h-12 md:w-16 md:h-16 p-3 md:p-4 bg-primary-600 rounded-lg shadow-lg flex justify-center items-center gap-3 md:gap-5">
                      <div className="flex flex-col justify-center items-center">
                        <Image alt="Xerply" src="/assets/icons/xerply-symbol.svg" width={36} height={36} className="md:w-12 md:h-12" />
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6" color='#5765cd' />
                    <div className="w-12 h-12 md:w-16 md:h-16 p-2 bg-primary-100 rounded-md flex flex-col justify-center items-center gap-0.5">
                      <Image alt="SAT" src="/assets/icons/sat.svg" width={16} height={16} className="md:w-5 md:h-5" />
                      <div className="flex flex-col justify-start items-start overflow-hidden">
                        <div className="self-stretch text-center justify-start text-neutral-800 text-xs font-bold font-inter leading-snug">SAT</div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6" color='#b4b8ea' />
                    <div className="w-12 h-12 md:w-16 md:h-16 p-2 bg-neutral-200 rounded-lg flex justify-center items-center gap-2">
                      <Image alt="Citi" src="/assets/icons/Citi.svg" width={24} height={24} className="md:w-[30px] md:h-[30px]" />                      
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-center items-center gap-1 mt-2 md:mt-4">
                    <div className="self-stretch h-1 relative bg-neutral-50 rounded overflow-hidden">
                      <div className="w-3/4 h-1 left-[-0.39px] top-[0.37px] absolute bg-primary-500" />
                    </div>
                    <div className='flex flex-row justify-between items-center w-full'>
                      <div className="self-stretch justify-start text-neutral-800 text-xs md:text-sm font-semibold font-inter leading-none">Step 2/3</div>
                      <div className="self-stretch justify-start text-neutral-800 text-[9px] md:text-[10.11px] font-medium font-inter leading-3">Configuring connection...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Dots Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setActiveCardIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeCardIndex === index 
                      ? 'bg-primary-600 w-6' 
                      : 'bg-neutral-300'
                  }`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Absolute positioned cards (original layout) */}
                    {/* Desktop: Absolute positioned cards (original layout) */}
          <div className="hidden lg:block">
            {/* Sales Card */}
            <div className="w-72 sm:w-80 md:w-96 px-4 md:px-6 py-3 md:py-4 left-0 md:-left-4 top-[330px] md:top-[420px] lg:top-[460px] absolute bg-neutral-50 rounded-2xl shadow-lg flex justify-start items-center gap-4 md:gap-6">
            <div className="p-3 md:p-4 bg-primary-50 rounded-lg flex justify-start items-center gap-2.5">
              <ArrowUpRight className="w-10 h-10 md:w-12 md:h-12 text-primary-600" />
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-1.5 md:gap-2">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Sales</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                <div className="self-stretch justify-start text-neutral-800 text-2xl md:text-3xl font-bold font-inter leading-7 md:leading-9">$2.5M</div>
              </div>
              <div className="self-stretch flex justify-start items-start gap-1">
                <div className="flex flex-col justify-start items-start">
                  <div className="self-stretch justify-start text-cyan-500 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">+10%</div>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <div className="self-stretch justify-start text-neutral-800 text-sm md:text-base font-normal font-source-sans-pro leading-normal">from last period</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pending Invoices Card */}
          <div className="w-80 sm:w-96 md:w-[458px] px-4 md:px-6 py-3 md:py-4 left-0 md:-left-4 top-0 lg:top-[-43.04px] absolute bg-neutral-50 rounded-2xl shadow-lg flex flex-col justify-start items-start gap-3 md:gap-4">
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="justify-start text-neutral-800 text-xl md:text-2xl font-bold font-inter leading-loose">Pending Invoices</div>
              <div className="self-stretch flex justify-start items-start gap-1">
                <div className="flex flex-col justify-start items-start">
                  <div className="self-stretch justify-start text-neutral-800 text-sm md:text-base font-normal font-source-sans-pro leading-normal">Invoices to collect and pay</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
              <div className="self-stretch h-4 flex justify-start items-center gap-3 md:gap-4">
                <div className="w-16 md:w-20 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-start text-neutral-800 text-xs font-bold font-inter leading-none">To collect</div>
                </div>
                <div className="flex-1 self-stretch bg-neutral-300 flex flex-col justify-start items-start">
                  <div className="w-7 flex-1 bg-primary-100 border-r-2 border-primary-600" />
                </div>
                <div className="w-6 flex flex-col justify-start items-end">
                  <div className="text-right justify-start text-neutral-800 text-xs font-bold font-inter leading-none">5</div>
                </div>
              </div>
              <div className="self-stretch h-4 flex justify-start items-center gap-3 md:gap-4">
                <div className="w-16 md:w-20 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-start text-neutral-800 text-xs font-bold font-inter leading-none">To pay</div>
                </div>
                <div className="flex-1 self-stretch bg-neutral-300 flex flex-col justify-start items-start">
                  <div className="w-14 flex-1 bg-cyan-100 border-r-2 border-cyan-500" />
                </div>
                <div className="w-6 flex flex-col justify-start items-end">
                  <div className="text-right justify-start text-neutral-800 text-xs font-bold font-inter leading-none">7</div>
                </div>
              </div>
              <div className="self-stretch h-4 flex justify-start items-center gap-3 md:gap-4">
                <div className="w-16 md:w-20 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-start text-neutral-800 text-xs font-bold font-inter leading-none">Overdue</div>
                </div>
                <div className="flex-1 self-stretch bg-neutral-300 flex flex-col justify-start items-start">
                  <div className="w-4 flex-1 bg-volcano-100 border-r-2 border-volcano-500" />
                </div>
                <div className="w-6 flex flex-col justify-start items-end">
                  <div className="text-right justify-start text-neutral-800 text-xs font-bold font-inter leading-none">2</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-center items-end gap-2.5">
              <div className="py-0.5 rounded-lg flex justify-center items-center">
                <div className="justify-start text-primary-600 text-sm font-semibold font-inter leading-tight">Details</div>
                <div className="w-6 h-6 relative overflow-hidden">
                  <div className="w-1.5 h-3 left-[8.51px] top-[6.17px] absolute bg-primary-600 border border-primary-600" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Cashflow Chart Card */}
          <div className="w-72 sm:w-96 md:w-[552.22px] h-60 md:h-72 px-4 md:px-6 py-3 md:py-4 left-2 sm:left-8 md:left-20 top-[130px] md:top-[150px] lg:top-[190.96px] absolute bg-neutral-200 rounded-xl shadow-[0px_13.346617698669434px_33.36654281616211px_-6.673308849334717px_rgba(88,92,95,0.16)] flex flex-col justify-start items-start gap-2.5 md:gap-3.5 overflow-hidden">
            <div className="self-stretch flex flex-col sm:flex-row justify-between items-start gap-2 overflow-hidden">
              <div className="justify-start text-neutral-800 text-lg md:text-xl font-bold font-inter leading-relaxed">Cashflow</div>
              <div className="w-full sm:w-52 px-[3.34px] py-[1.67px] bg-primary-50 rounded outline outline-[0.83px] outline-offset-[-0.42px] outline-black-alpha-1/5 flex justify-start items-start gap-2">
                <div className="flex-1 px-3 sm:px-5 py-[1.67px] bg-primary-600 rounded shadow-lg flex justify-center items-center">
                  <div className="justify-start text-white-alpha-10/95 text-[10.01px] font-semibold font-inter leading-3">Actual Data</div>
                </div>
                <div className="flex-1 px-3 sm:px-5 py-[1.67px] rounded-md flex justify-center items-center">
                  <div className="justify-start text-neutral-500 text-[10.01px] font-medium font-inter leading-3">Projection</div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 content-center">
              <div className="flex justify-start items-center">
                <div className="px-2 sm:px-3.5 bg-cyan-50 border-b-[0.83px] border-cyan-500 flex flex-col justify-start items-center gap-[3.34px]">
                  <div className="flex flex-col justify-center items-start">
                    <div className="self-stretch justify-start text-cyan-500 text-xs font-bold font-inter leading-none">Income</div>
                  </div>
                </div>
                <div className="px-2 sm:px-3.5 flex flex-col justify-start items-center gap-[3.34px]">
                  <div className="rounded-[10.01px] flex flex-col justify-center items-start">
                    <div className="self-stretch justify-start text-neutral-400 text-xs font-normal font-inter leading-none">Expenses</div>
                  </div>
                </div>
                <div className="px-2 sm:px-3.5 flex flex-col justify-start items-center gap-[3.34px]">
                  <div className="rounded-[10.01px] flex flex-col justify-center items-start">
                    <div className="self-stretch justify-start text-neutral-400 text-xs font-normal font-inter leading-none">Net Flow</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 sm:gap-3.5">
                <div className="pl-[3.34px] pr-1.5 py-[1.67px] rounded-md flex justify-start items-center">
                  <div className="w-3.5 h-3.5 relative">
                    <div className="w-[5px] h-[5px] left-[4.17px] top-[4.17px] absolute bg-neutral-800" />
                  </div>
                  <div className="justify-start text-neutral-800 text-[10.01px] font-normal font-inter leading-3">This year</div>
                </div>
                <div className="pl-[3.34px] pr-1.5 py-[1.67px] rounded-md flex justify-start items-center">
                  <div className="w-3.5 h-3.5 relative">
                    <div className="w-[5px] h-[5px] left-[4.17px] top-[4.17px] absolute bg-cyan-500" />
                  </div>
                  <div className="justify-start text-neutral-800 text-[10.01px] font-normal font-inter leading-3">Last year</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 flex justify-start items-start gap-2 md:gap-3.5">
              <div className="self-stretch flex flex-col justify-between items-end">
                <div className="text-right justify-center text-Black-40%/40 text-[10.01px] font-semibold font-inter leading-3">30K</div>
                <div className="text-right justify-center text-Black-40%/40 text-[10.01px] font-semibold font-inter leading-3">20K</div>
                <div className="text-right justify-center text-Black-40%/40 text-[10.01px] font-semibold font-inter leading-3">10K</div>
                <div className="text-right justify-center text-Black-40%/40 text-[10.01px] font-semibold font-inter leading-3">0</div>
              </div>
              <div className="flex-1 self-stretch relative flex flex-col justify-start items-start">
                <Image alt="Cashflow Chart" src="/assets/cashflow-chart.svg" fill className="object-cover" />
              </div>
            </div>
          </div>
          
          {/* Integration Progress Card - Hidden on mobile */}
          <div className="hidden sm:flex w-60 md:w-96 px-4 md:px-6 py-3 md:py-4 left-12 sm:left-32 md:left-[200px] top-[420px] md:top-[500px] lg:top-[580px] absolute bg-neutral-100 rounded-xl shadow-lg justify-start items-center gap-4 md:gap-5">
            <div className="flex-1 flex flex-col justify-start items-start gap-1.5">
              <div className="self-stretch py-1 flex justify-between items-center overflow-hidden">
                <div className="w-12 h-12 md:w-16 md:h-16 p-3 md:p-4 bg-primary-600 rounded-lg shadow-lg flex justify-center items-center gap-3 md:gap-5">
                  <div className="flex flex-col justify-center items-center">
                    <Image alt="Xerply" src="/assets/icons/xerply-symbol.svg" width={36} height={36} className="md:w-12 md:h-12" />
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" color='#5765cd' />
                <div className="w-12 h-12 md:w-16 md:h-16 p-2 bg-primary-100 rounded-md flex flex-col justify-center items-center gap-0.5">
                  <Image alt="SAT" src="/assets/icons/sat.svg" width={16} height={16} className="md:w-5 md:h-5" />
                  <div className="flex flex-col justify-start items-start overflow-hidden">
                    <div className="self-stretch text-center justify-start text-neutral-800 text-xs font-bold font-inter leading-snug">SAT</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" color='#b4b8ea' />
                <div className="w-12 h-12 md:w-16 md:h-16 p-2 bg-neutral-200 rounded-lg flex justify-center items-center gap-2">
                  <Image alt="Citi" src="/assets/icons/Citi.svg" width={24} height={24} className="md:w-[30px] md:h-[30px]" />                      
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-center items-center gap-1 mt-2 md:mt-4">
                <div className="self-stretch h-1 relative bg-neutral-50 rounded overflow-hidden">
                  <div className="w-3/4 h-1 left-[-0.39px] top-[0.37px] absolute bg-primary-500" />
                </div>
                <div className='flex flex-row justify-between items-center w-full'>
                  <div className="self-stretch justify-start text-neutral-800 text-xs md:text-sm font-semibold font-inter leading-none">Step 2/3</div>
                  <div className="self-stretch justify-start text-neutral-800 text-[9px] md:text-[10.11px] font-medium font-inter leading-3">Configuring connection...</div>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Desktop: Absolute positioned cards (original layout) */}
          <div className="hidden lg:block">
            {/* Sales Card */}
            <div className="w-72 sm:w-80 md:w-96 px-4 md:px-6 py-3 md:py-4 left-0 md:-left-4 top-[330px] md:top-[420px] lg:top-[460px] absolute bg-neutral-50 rounded-2xl shadow-lg flex justify-start items-center gap-4 md:gap-6">
              <div className="p-3 md:p-4 bg-primary-50 rounded-lg flex justify-start items-center gap-2.5">
                <ArrowUpRight className="w-10 h-10 md:w-12 md:h-12 text-primary-600" />
              </div>
              <div className="flex-1 flex flex-col justify-start items-start gap-1.5 md:gap-2">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Sales</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-neutral-800 text-2xl md:text-3xl font-bold font-inter leading-7 md:leading-9">$2.5M</div>
                </div>
                <div className="self-stretch flex justify-start items-start gap-1">
                  <div className="flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-cyan-500 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">+10%</div>
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-neutral-800 text-sm md:text-base font-normal font-source-sans-pro leading-normal">from last period</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pending Invoices Card */}
            <div className="w-80 sm:w-96 md:w-[458px] px-4 md:px-6 py-3 md:py-4 left-0 md:-left-4 top-0 lg:top-[-43.04px] absolute bg-neutral-50 rounded-2xl shadow-lg flex flex-col justify-start items-start gap-3 md:gap-4">
              <div className="self-stretch flex flex-col justify-start items-start gap-1">
                <div className="justify-start text-neutral-800 text-xl md:text-2xl font-bold font-inter leading-loose">Pending Invoices</div>
                <div className="self-stretch flex justify-start items-start gap-1">
                  <div className="flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-neutral-800 text-sm md:text-base font-normal font-source-sans-pro leading-normal">Invoices to collect and pay</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
                <div className="self-stretch h-4 flex justify-start items-center gap-3 md:gap-4">
                  <div className="w-16 md:w-20 flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-neutral-800 text-xs font-bold font-inter leading-none">To collect</div>
                  </div>
                  <div className="flex-1 self-stretch bg-neutral-300 flex flex-col justify-start items-start">
                    <div className="w-7 flex-1 bg-primary-100 border-r-2 border-primary-600" />
                  </div>
                  <div className="w-6 flex flex-col justify-start items-end">
                    <div className="text-right justify-start text-neutral-800 text-xs font-bold font-inter leading-none">5</div>
                  </div>
                </div>
                <div className="self-stretch h-4 flex justify-start items-center gap-3 md:gap-4">
                  <div className="w-16 md:w-20 flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-neutral-800 text-xs font-bold font-inter leading-none">To pay</div>
                  </div>
                  <div className="flex-1 self-stretch bg-neutral-300 flex flex-col justify-start items-start">
                    <div className="w-14 flex-1 bg-cyan-100 border-r-2 border-cyan-500" />
                  </div>
                  <div className="w-6 flex flex-col justify-start items-end">
                    <div className="text-right justify-start text-neutral-800 text-xs font-bold font-inter leading-none">7</div>
                  </div>
                </div>
                <div className="self-stretch h-4 flex justify-start items-center gap-3 md:gap-4">
                  <div className="w-16 md:w-20 flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-neutral-800 text-xs font-bold font-inter leading-none">Overdue</div>
                  </div>
                  <div className="flex-1 self-stretch bg-neutral-300 flex flex-col justify-start items-start">
                    <div className="w-4 flex-1 bg-volcano-100 border-r-2 border-volcano-500" />
                  </div>
                  <div className="w-6 flex flex-col justify-start items-end">
                    <div className="text-right justify-start text-neutral-800 text-xs font-bold font-inter leading-none">2</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-center items-end gap-2.5">
                <div className="py-0.5 rounded-lg flex justify-center items-center">
                  <div className="justify-start text-primary-600 text-sm font-semibold font-inter leading-tight">Details</div>
                  <div className="w-6 h-6 relative overflow-hidden">
                    <div className="w-1.5 h-3 left-[8.51px] top-[6.17px] absolute bg-primary-600 border border-primary-600" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cashflow Chart Card */}
            <div className="w-72 sm:w-96 md:w-[552.22px] h-60 md:h-72 px-4 md:px-6 py-3 md:py-4 left-2 sm:left-8 md:left-20 top-[130px] md:top-[150px] lg:top-[190.96px] absolute bg-neutral-200 rounded-xl shadow-[0px_13.346617698669434px_33.36654281616211px_-6.673308849334717px_rgba(88,92,95,0.16)] flex flex-col justify-start items-start gap-2.5 md:gap-3.5 overflow-hidden">
              <div className="self-stretch flex flex-col sm:flex-row justify-between items-start gap-2 overflow-hidden">
                <div className="justify-start text-neutral-800 text-lg md:text-xl font-bold font-inter leading-relaxed">Cashflow</div>
                <div className="w-full sm:w-52 px-[3.34px] py-[1.67px] bg-primary-50 rounded outline outline-[0.83px] outline-offset-[-0.42px] outline-black-alpha-1/5 flex justify-start items-start gap-2">
                  <div className="flex-1 px-3 sm:px-5 py-[1.67px] bg-primary-600 rounded shadow-lg flex justify-center items-center">
                    <div className="justify-start text-white-alpha-10/95 text-[10.01px] font-semibold font-inter leading-3">Actual Data</div>
                  </div>
                  <div className="flex-1 px-3 sm:px-5 py-[1.67px] rounded-md flex justify-center items-center">
                    <div className="justify-start text-neutral-500 text-[10.01px] font-medium font-inter leading-3">Projection</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 content-center">
                <div className="flex justify-start items-center">
                  <div className="px-2 sm:px-3.5 bg-cyan-50 border-b-[0.83px] border-cyan-500 flex flex-col justify-start items-center gap-[3.34px]">
                    <div className="flex flex-col justify-center items-start">
                      <div className="self-stretch justify-start text-cyan-500 text-xs font-bold font-inter leading-none">Income</div>
                    </div>
                  </div>
                  <div className="px-2 sm:px-3.5 flex flex-col justify-start items-center gap-[3.34px]">
                    <div className="rounded-[10.01px] flex flex-col justify-center items-start">
                      <div className="self-stretch justify-start text-neutral-400 text-xs font-normal font-inter leading-none">Expenses</div>
                    </div>
                  </div>
                  <div className="px-2 sm:px-3.5 flex flex-col justify-start items-center gap-[3.34px]">
                    <div className="rounded-[10.01px] flex flex-col justify-center items-start">
                      <div className="self-stretch justify-start text-neutral-400 text-xs font-normal font-inter leading-none">Net Flow</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-2 sm:gap-3.5">
                  <div className="pl-[3.34px] pr-1.5 py-[1.67px] rounded-md flex justify-start items-center">
                    <div className="w-3.5 h-3.5 relative">
                      <div className="w-[5px] h-[5px] left-[4.17px] top-[4.17px] absolute bg-neutral-800" />
                    </div>
                    <div className="justify-start text-neutral-800 text-[10.01px] font-normal font-inter leading-3">This year</div>
                  </div>
                  <div className="pl-[3.34px] pr-1.5 py-[1.67px] rounded-md flex justify-start items-center">
                    <div className="w-3.5 h-3.5 relative">
                      <div className="w-[5px] h-[5px] left-[4.17px] top-[4.17px] absolute bg-cyan-500" />
                    </div>
                    <div className="justify-start text-neutral-800 text-[10.01px] font-normal font-inter leading-3">Last year</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex justify-start items-start gap-2 md:gap-3.5">
                <div className="self-stretch flex flex-col justify-between items-end">
                  <div className="text-right justify-center text-Black-40%/40 text-[10.01px] font-semibold font-inter leading-3">30K</div>
                  <div className="text-right justify-center text-Black-40%/40 text-[10.01px] font-semibold font-inter leading-3">20K</div>
                  <div className="text-right justify-center text-Black-40%/40 text-[10.01px] font-semibold font-inter leading-3">10K</div>
                  <div className="text-right justify-center text-Black-40%/40 text-[10.01px] font-semibold font-inter leading-3">0</div>
                </div>
                <div className="flex-1 self-stretch relative flex flex-col justify-start items-start">
                  <Image alt="Cashflow Chart" src="/assets/cashflow-chart.svg" fill className="object-cover" />
                </div>
              </div>
            </div>
            
            {/* Integration Progress Card */}
            <div className="w-60 md:w-96 px-4 md:px-6 py-3 md:py-4 left-12 sm:left-32 md:left-[200px] top-[420px] md:top-[500px] lg:top-[580px] absolute bg-neutral-100 rounded-xl shadow-lg flex justify-start items-center gap-4 md:gap-5">
              <div className="flex-1 flex flex-col justify-start items-start gap-1.5">
                <div className="self-stretch py-1 flex justify-between items-center overflow-hidden">
                  <div className="w-12 h-12 md:w-16 md:h-16 p-3 md:p-4 bg-primary-600 rounded-lg shadow-lg flex justify-center items-center gap-3 md:gap-5">
                    <div className="flex flex-col justify-center items-center">
                      <Image alt="Xerply" src="/assets/icons/xerply-symbol.svg" width={36} height={36} className="md:w-12 md:h-12" />
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" color='#5765cd' />
                  <div className="w-12 h-12 md:w-16 md:h-16 p-2 bg-primary-100 rounded-md flex flex-col justify-center items-center gap-0.5">
                    <Image alt="SAT" src="/assets/icons/sat.svg" width={16} height={16} className="md:w-5 md:h-5" />
                    <div className="flex flex-col justify-start items-start overflow-hidden">
                      <div className="self-stretch text-center justify-start text-neutral-800 text-xs font-bold font-inter leading-snug">SAT</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" color='#b4b8ea' />
                  <div className="w-12 h-12 md:w-16 md:h-16 p-2 bg-neutral-200 rounded-lg flex justify-center items-center gap-2">
                    <Image alt="Citi" src="/assets/icons/Citi.svg" width={24} height={24} className="md:w-[30px] md:h-[30px]" />                      
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-center items-center gap-1 mt-2 md:mt-4">
                  <div className="self-stretch h-1 relative bg-neutral-50 rounded overflow-hidden">
                    <div className="w-3/4 h-1 left-[-0.39px] top-[0.37px] absolute bg-primary-500" />
                  </div>
                  <div className='flex flex-row justify-between items-center w-full'>
                    <div className="self-stretch justify-start text-neutral-800 text-xs md:text-sm font-semibold font-inter leading-none">Step 2/3</div>
                    <div className="self-stretch justify-start text-neutral-800 text-[9px] md:text-[10.11px] font-medium font-inter leading-3">Configuring connection...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Text content - shown second on mobile, first on desktop */}
        <div className="w-full lg:flex-1 flex flex-col justify-center lg:justify-end items-start gap-5 md:gap-6 order-2 lg:order-1">
          <div className="w-full max-w-[614.74px] justify-start">
            <span className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-inter leading-tight sm:leading-snug md:leading-[60px] lg:leading-[76px]">The ERP that </span>
            <span className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter leading-tight sm:leading-snug md:leading-[60px] lg:leading-[76px]">Adapts, Automates, </span>
            <span className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-inter leading-tight sm:leading-snug md:leading-[60px] lg:leading-[76px]">and </span>
            <span className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter leading-tight sm:leading-snug md:leading-[60px] lg:leading-[76px]">Accelerates</span>
            <span className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-inter leading-tight sm:leading-snug md:leading-[60px] lg:leading-[76px]"> Your Business.</span>
          </div>
          <div className="w-full max-w-[581.65px] justify-start">
            <span className="text-neutral-700 text-base sm:text-lg md:text-xl font-medium font-source-sans-pro leading-normal">Transform your business with </span>
            <span className="text-neutral-700 text-base sm:text-lg md:text-xl font-bold font-source-sans-pro leading-normal">Xerply</span>
            <span className="text-neutral-700 text-base sm:text-lg md:text-xl font-medium font-source-sans-pro leading-normal">. Don&apos;t waste another moment—request your free demo today!</span>
          </div>
          <div className="max-sm:w-full pt-2 md:pt-4 flex justify-start items-center gap-4">
            <Button variant="filled" size="lg" className='max-sm:w-full'>
              Request Free Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
