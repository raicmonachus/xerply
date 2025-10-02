import React from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="self-stretch w-full h-[1040px] relative overflow-hidden">
      <div className="w-[1039.72px] h-[1039.72px] left-[579.26px] top-[22.98px] absolute origin-top-left rotate-[-15deg] bg-primary-50 rounded-[236.46px]" />
      <div className='h-full flex justify-center items-center gap-8 px-16 z-5'>
        <div className="flex-1 flex flex-col justify-end items-start gap-5">
          <div className="w-[614.74px] justify-start">
            <span className="text-neutral-800 text-6xl font-medium font-inter leading-[76px]">The ERP that </span>
            <span className="text-neutral-800 text-6xl font-bold font-inter leading-[76px]">Adapts, Automates, </span>
            <span className="text-neutral-800 text-6xl font-medium font-inter leading-[76px]">and </span>
            <span className="text-neutral-800 text-6xl font-bold font-inter leading-[76px]">Accelerates</span>
            <span className="text-neutral-800 text-6xl font-medium font-inter leading-[76px]"> Your Business.</span>
          </div>
          <div className="w-[581.65px] justify-start">
            <span className="text-neutral-700 text-xl font-medium font-source-sans-pro leading-normal">Transform your business with </span>
            <span className="text-neutral-700 text-xl font-bold font-source-sans-pro leading-normal">Xerply</span>
            <span className="text-neutral-700 text-xl font-medium font-source-sans-pro leading-normal">. Don&apos;t waste another moment—request your free demo today!</span>
          </div>
          <div className="pt-4 flex justify-start items-center gap-4">
            <div className="px-6 py-3 bg-primary-600 rounded-lg flex justify-center items-center">
              <div className="justify-start text-white-alpha-10/95 text-sm font-semibold font-inter leading-tight">Request Free Demo</div>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[670px] relative">
          {/* Sales Card */}
          <div className="w-96 min-w-72 px-6 py-4 -left-4 top-[460px] absolute bg-neutral-50 rounded-2xl shadow-lg flex justify-start items-center gap-6">
            <div className="p-4 bg-primary-50 rounded-lg flex justify-start items-center gap-2.5">
              <ArrowUpRight className="w-12 h-12 text-primary-600" />
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-2">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-start text-neutral-800 text-base font-semibold font-source-sans-pro leading-normal">Sales</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                <div className="self-stretch justify-start text-neutral-800 text-3xl font-bold font-inter leading-9">$2.5M</div>
              </div>
              <div className="self-stretch flex justify-start items-start gap-1">
                <div className="flex flex-col justify-start items-start">
                  <div className="self-stretch justify-start text-cyan-500 text-base font-semibold font-source-sans-pro leading-normal">+10%</div>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <div className="self-stretch justify-start text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">from last period</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pending Invoices Card */}
          <div className="w-[458px] min-w-72 px-6 py-4 -left-4 top-[-43.04px] absolute bg-neutral-50 rounded-2xl shadow-lg flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="justify-start text-neutral-800 text-2xl font-bold font-inter leading-loose">Pending Invoices</div>
              <div className="self-stretch flex justify-start items-start gap-1">
                <div className="flex flex-col justify-start items-start">
                  <div className="self-stretch justify-start text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">Invoices to collect and pay</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch h-4 flex justify-start items-center gap-4">
                <div className="w-20 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-start text-neutral-800 text-xs font-bold font-inter leading-none">To collect</div>
                </div>
                <div className="flex-1 self-stretch bg-neutral-300 flex flex-col justify-start items-start">
                  <div className="w-7 flex-1 bg-primary-100 border-r-2 border-primary-600" />
                </div>
                <div className="w-6 flex flex-col justify-start items-end">
                  <div className="text-right justify-start text-neutral-800 text-xs font-bold font-inter leading-none">5</div>
                </div>
              </div>
              <div className="self-stretch h-4 flex justify-start items-center gap-4">
                <div className="w-20 flex flex-col justify-start items-start">
                  <div className="self-stretch justify-start text-neutral-800 text-xs font-bold font-inter leading-none">To pay</div>
                </div>
                <div className="flex-1 self-stretch bg-neutral-300 flex flex-col justify-start items-start">
                  <div className="w-14 flex-1 bg-cyan-100 border-r-2 border-cyan-500" />
                </div>
                <div className="w-6 flex flex-col justify-start items-end">
                  <div className="text-right justify-start text-neutral-800 text-xs font-bold font-inter leading-none">7</div>
                </div>
              </div>
              <div className="self-stretch h-4 flex justify-start items-center gap-4">
                <div className="w-20 flex flex-col justify-start items-start">
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
          <div className="w-[552.22px] h-72 min-w-[552.22px] px-6 py-4 left-20 top-[190.96px] absolute bg-neutral-200 rounded-xl shadow-[0px_13.346617698669434px_33.36654281616211px_-6.673308849334717px_rgba(88,92,95,0.16)] flex flex-col justify-start items-start gap-3.5 overflow-hidden">
            <div className="self-stretch flex justify-between items-start overflow-hidden">
              <div className="justify-start text-neutral-800 text-xl font-bold font-inter leading-relaxed">Cashflow</div>
              <div className="w-52 px-[3.34px] py-[1.67px] bg-primary-50 rounded outline outline-[0.83px] outline-offset-[-0.42px] outline-black-alpha-1/5 flex justify-start items-start gap-2">
                <div className="flex-1 px-5 py-[1.67px] bg-primary-600 rounded shadow-lg flex justify-center items-center">
                  <div className="justify-start text-white-alpha-10/95 text-[10.01px] font-semibold font-inter leading-3">Actual Data</div>
                </div>
                <div className="flex-1 px-5 py-[1.67px] rounded-md flex justify-center items-center">
                  <div className="justify-start text-neutral-500 text-[10.01px] font-medium font-inter leading-3">Projection</div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-md flex justify-between items-center flex-wrap content-center">
              <div className="flex justify-start items-center">
                <div className="px-3.5 bg-cyan-50 border-b-[0.83px] border-cyan-500 flex flex-col justify-start items-center gap-[3.34px]">
                  <div className="flex flex-col justify-center items-start">
                    <div className="self-stretch justify-start text-cyan-500 text-xs font-bold font-inter leading-none">Income</div>
                  </div>
                </div>
                <div className="px-3.5 flex flex-col justify-start items-center gap-[3.34px]">
                  <div className="rounded-[10.01px] flex flex-col justify-center items-start">
                    <div className="self-stretch justify-start text-neutral-400 text-xs font-normal font-inter leading-none">Expenses</div>
                  </div>
                </div>
                <div className="px-3.5 flex flex-col justify-start items-center gap-[3.34px]">
                  <div className="rounded-[10.01px] flex flex-col justify-center items-start">
                    <div className="self-stretch justify-start text-neutral-400 text-xs font-normal font-inter leading-none">Net Flow</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3.5">
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
            <div className="self-stretch flex-1 flex justify-start items-start gap-3.5">
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
          <div className="w-96 min-w-60 px-6 py-4 left-[200px] top-[580px] absolute bg-neutral-100 rounded-xl shadow-lg flex justify-start items-center gap-5">
            <div className="flex-1 flex flex-col justify-start items-start gap-1.5">
              <div className="self-stretch flex flex-col justify-center items-center gap-1">
                <div className="self-stretch h-1 relative bg-neutral-50 rounded overflow-hidden">
                  <div className="w-56 h-1 left-[-0.39px] top-[0.37px] absolute bg-primary-500" />
                </div>
                <div className="self-stretch justify-start text-neutral-800 text-sm font-semibold font-inter leading-none">Step 2/3</div>
              </div>
              <div className="self-stretch py-1 flex justify-between items-center overflow-hidden">
                <div className="w-16 h-16 p-4 bg-primary-600 rounded-lg shadow-lg flex justify-center items-center gap-5">
                  <div className="flex flex-col justify-center items-center">
                    <Image alt="Xerply" src="/assets/icons/xerply-symbol.svg" width={48} height={48} />
                  </div>
                </div>
                <ArrowRight className="w-6 h-6" color='#5765cd' />
                <div className="w-16 h-16 p-2 bg-primary-100 rounded-md flex flex-col justify-center items-center gap-0.5">
                  <Image alt="SAT" src="/assets/icons/sat.svg" width={20} height={20} />
                  <div className="flex flex-col justify-start items-start overflow-hidden">
                    <div className="self-stretch text-center justify-start text-neutral-800 text-xs font-bold font-inter leading-snug">SAT</div>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6" color='#b4b8ea' />
                <div className="w-16 h-16 p-2 bg-neutral-200 rounded-lg flex justify-center items-center gap-2">
                  <Image alt="Citi" src="/assets/icons/Citi.svg" width={30} height={30} />                      
                </div>
              </div>
              <div className="self-stretch pt-4 flex justify-end items-start gap-[3.44px]">
                <div className="flex flex-col justify-start items-start">
                  <div className="self-stretch justify-start text-neutral-800 text-[10.11px] font-medium font-inter leading-3">Configuring connection...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
