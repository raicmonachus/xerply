import React from 'react';
import Image from 'next/image';
import Hero from './Hero';
import { ChevronRight, CircleCheckBig, DatabaseBackup } from 'lucide-react';
import { Button } from '../ui';

export default function HomeDesktop() {
  return (
    <>
      <Hero />
      <main className='px-12 py-24 w-full flex flex-col gap-8'>
        { /* Value prop section - Autonomous */}
        <div className="self-stretch flex flex-col justify-start items-start gap-8">
          <div className="self-stretch text-center justify-start"><span className="text-neutral-800 text-5xl font-medium font-inter leading-[68px]">Why Choose </span><span className="text-primary-600 text-5xl font-bold font-inter leading-[68px]">Xerply?</span></div>
          <div className="self-stretch px-12 py-24 flex justify-center items-center gap-24">
            <div className="flex-1 w-1/2 flex flex-col justify-start items-start gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-8">
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <div className="flex justify-start items-center">
                    <div className="justify-start text-neutral-800 text-base font-semibold font-source-sans-pro leading-normal">Autonomous</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-6">
                    <div className="self-stretch justify-start"><span className="text-neutral-800 text-5xl font-medium font-inter leading-[58px]">Intelligent automation that </span><span className="text-neutral-800 text-5xl font-bold font-inter leading-[58px]">works while you sleep</span></div>
                    <div className="self-stretch justify-start text-neutral-800 text-lg font-normal font-source-sans-pro leading-7">Our AI-powered ERP system continuously learns and adapts, automating complex business processes with minimal human intervention. Experience unprecedented operational efficiency.</div>
                  </div>
                </div>
                <ul className="self-stretch flex flex-col justify-start items-start gap-2 list-disc ml-6">
                  <li>Real-time data processing</li>
                  <li>Predictive analytics engine</li>
                  <li>Automated workflow optimization</li>
                </ul>
              </div>
              <div className="flex justify-start items-center gap-6">
                <Button variant="filled" size="lg">
                  Try it free
                </Button>
                <Button variant="ghost" size="md" icon={ChevronRight} iconPosition="right">
                  Watch demo
                </Button>
              </div>
            </div>
            <div className="image-wrapper flex-1 w-1/2 h-[630.57px] relative">
              <Image alt="Autonomus" src="/assets/images/automation.png" width={592} height={592} className="left-0 top-0 absolute transform scale-x-[-1] rounded-tl-[256px] rounded-tr-[64px] rounded-bl-[64px] rounded-br-[128px]" />
              <div className="w-96 p-4 left-[222px] -top-8 absolute bg-white-alpha-5 backdrop-blur-lg rounded-2xl shadow-lg flex flex-col justify-start items-center gap-6">
                <div className="self-stretch min-w-72 px-6 py-3 bg-primary-50 rounded-2xl flex justify-start items-center gap-6">
                  <div data-show-track="true" data-step="1" data-thickness="4 dp" data-type="Flat" className="w-10 h-10 relative">
                    <Image alt="Icon" src="/assets/icons/Circular-indeterminate-progress-indicator.svg" width={40} height={40} />
                  </div>
                  <div className="w-52 justify-start text-primary-600 text-base font-normal font-source-sans-pro leading-normal">I see you! I&apos;m reviewing your tasks and adjusting the dashboard accordingly. Hang tight while your data is processed...</div>
                </div>
                <div className="self-stretch min-w-72 p-6 bg-neutral-50 rounded-2xl flex flex-col justify-center items-start gap-6">
                  <div className="flex flex-col justify-start items-start gap-5 overflow-hidden">
                    <div className="flex justify-start items-start gap-3 overflow-hidden">
                      <div className="w-8 h-8 bg-primary-200 rounded-full" />
                      <div className="flex flex-col justify-start items-start gap-[4.82px] overflow-hidden">
                        <div className="w-12 h-3 bg-primary-200 rounded-[40.18px]" />
                        <div className="flex justify-start items-start gap-[3.21px] overflow-hidden">
                          <div className="w-16 h-3 bg-primary-100 rounded-md" />
                          <div className="w-5 h-3 bg-primary-100 rounded-md" />
                          <div className="w-8 h-3 bg-primary-100 rounded-md" />
                          <div className="w-16 h-3 bg-primary-100 rounded-md" />
                          <div className="w-16 h-3 bg-primary-100 rounded-md" />
                        </div>
                        <div className="flex justify-start items-start gap-[3.21px] overflow-hidden">
                          <div className="w-11 h-3 bg-primary-100 rounded-md" />
                          <div className="w-7 h-3 bg-primary-100 rounded-md" />
                          <div className="w-16 h-3 bg-primary-100 rounded-md" />
                          <div className="w-14 h-3 bg-primary-100 rounded-md" />
                          <div className="w-8 h-3 bg-primary-100 rounded-md" />
                        </div>
                        <div className="flex justify-start items-start gap-[3.21px] overflow-hidden">
                          <div className="w-14 h-3 bg-primary-100 rounded-md" />
                          <div className="w-12 h-3 bg-primary-100 rounded-md" />
                        </div>
                        <div className="flex justify-start items-start gap-[3.21px] overflow-hidden">
                          <div className="w-7 h-3 bg-primary-100 rounded-md" />
                          <div className="w-16 h-3 bg-primary-100 rounded-md" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch min-w-72 p-6 opacity-50 bg-neutral-50 rounded-2xl flex flex-col justify-center items-start gap-6">
                  <div className="opacity-50 flex flex-col justify-start items-start gap-5 overflow-hidden">
                    <div className="flex justify-start items-start gap-3 overflow-hidden">
                      <div className="w-8 h-8 bg-primary-200 rounded-full" />
                      <div className="flex flex-col justify-start items-start gap-[4.82px] overflow-hidden">
                        <div className="w-12 h-3 bg-primary-200 rounded-[40.18px]" />
                        <div className="flex justify-start items-start gap-[3.21px] overflow-hidden">
                          <div className="w-16 h-3 bg-primary-100 rounded-md" />
                          <div className="w-5 h-3 bg-primary-100 rounded-md" />
                          <div className="w-8 h-3 bg-primary-100 rounded-md" />
                          <div className="w-16 h-3 bg-primary-100 rounded-md" />
                          <div className="w-16 h-3 bg-primary-100 rounded-md" />
                        </div>
                        <div className="flex justify-start items-start gap-[3.21px] overflow-hidden">
                          <div className="w-11 h-3 bg-primary-100 rounded-md" />
                          <div className="w-7 h-3 bg-primary-100 rounded-md" />
                          <div className="w-16 h-3 bg-primary-100 rounded-md" />
                          <div className="w-14 h-3 bg-primary-100 rounded-md" />
                          <div className="w-8 h-3 bg-primary-100 rounded-md" />
                        </div>
                        <div className="flex justify-start items-start gap-[3.21px] overflow-hidden">
                          <div className="w-14 h-3 bg-primary-100 rounded-md" />
                          <div className="w-12 h-3 bg-primary-100 rounded-md" />
                        </div>
                        <div className="flex justify-start items-start gap-[3.21px] overflow-hidden">
                          <div className="w-7 h-3 bg-primary-100 rounded-md" />
                          <div className="w-16 h-3 bg-primary-100 rounded-md" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        { /* Value prop section - Flexible */}
        <div className="self-stretch px-12 py-24 flex justify-center items-center gap-24">
          <div className="image-wrapper flex-1 w-1/2 h-[600px] flex items-center justify-center relative">
            <div className='w-96 h-96 rotate-[15deg] rounded-tl-[45.82px] rounded-tr-[91.64px] rounded-bl-[91.64px] rounded-br-[45.82px] overflow-hidden'>
              <Image alt="Flexible" src="/assets/images/flexible.png" width={592} height={592} className="scale-125 -rotate-[15deg] object-cover" />
            </div>
            <div className="w-64 min-w-44 p-3.5 left-0 top-0 absolute bg-neutral-50 rounded-[9.82px] shadow-[0px_9.8230562210083px_24.557640075683594px_-4.91152811050415px_rgba(88,92,95,0.16)] flex flex-col justify-start items-start gap-[4.91px]">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-start text-neutral-800 text-sm font-bold font-inter leading-tight">Cash Risk Assessment</div>
              </div>
              <div className="self-stretch flex justify-start items-start gap-[2.46px]">
                <div className="flex flex-col justify-start items-start">
                  <div className="self-stretch justify-start text-neutral-800 text-[9.82px] font-normal font-source-sans-pro leading-none">Per customer, not per supplier</div>
                </div>
              </div>
              <div className="self-stretch h-40 min-h-28 py-2.5 flex flex-col justify-center items-center gap-2">
                <div className='w-56 h-[90px] overflow-hidden flex items-center justify-center'>
                  <Image alt="Icon" src="/assets/images/risk-chart.png" width={180} height={180} />
                </div>
                <div className="w-20 pl-5 flex justify-between items-start">
                  <div className="flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-neutral-800 text-[8.60px] font-bold font-inter leading-3">A</div>
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-neutral-800 text-[8.60px] font-bold font-inter leading-3">B</div>
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-neutral-800 text-[8.60px] font-bold font-inter leading-3">C</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-80 min-w-72 p-5 left-[283px] top-[499.90px] absolute bg-primary-50 rounded-xl shadow-[0px_12.231521606445312px_30.57880401611328px_-6.115760803222656px_rgba(88,92,95,0.16)] flex justify-start items-start gap-5">
              <Image alt="Icon" src="/assets/icons/Circular-indeterminate-progress-indicator.svg" width={40} height={40} />
              <div className="flex-1 justify-start text-primary-600 text-base font-normal font-source-sans-pro leading-normal">Show me cash risk by customer, not by supplier.</div>
            </div>
            <Image alt="Icon" src="/assets/images/Connector.png" width={200} height={400} className="left-24 top-[210px] absolute" />
          </div>
          <div className="flex-1 w-1/2 flex flex-col justify-start items-start gap-8">
            <div className="self-stretch flex flex-col justify-start items-start gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="flex justify-start items-center">
                  <div className="justify-start text-neutral-800 text-base font-semibold font-source-sans-pro leading-normal">Flexible</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch justify-start"><span className="text-neutral-800 text-5xl font-bold font-inter leading-[58px]">Customize</span><span className="text-neutral-800 text-5xl font-medium font-inter leading-[58px]"> your ERP experience</span></div>
                  <div className="self-stretch justify-start text-neutral-800 text-lg font-normal font-source-sans-pro leading-7">Unlike traditional ERPs that offer static reports, Xerply provides tailored conversational responses that adapt to your daily inquiries.</div>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center gap-6">
              <Button variant="filled" size="lg">
                Try it free
              </Button>
              <Button variant="ghost" size="md" icon={ChevronRight} iconPosition="right">
                Watch demo
              </Button>
            </div>
          </div>
        </div>
        { /* Value prop section - Effective */}
        <div className="self-stretch px-12 py-24 flex justify-center items-center gap-24">
          <div className="flex-1 w-1/2 flex flex-col justify-start items-start gap-8">
            <div className="self-stretch flex flex-col justify-start items-start gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="flex justify-start items-center">
                  <div className="justify-start text-neutral-800 text-base font-semibold font-source-sans-pro leading-normal">Effective</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch justify-start"><span className="text-neutral-800 text-5xl font-medium font-inter leading-[58px]">Maximize your </span><span className="text-neutral-800 text-5xl font-bold font-inter leading-[58px]">business potential</span></div>
                  <div className="self-stretch justify-start text-neutral-800 text-lg font-normal font-source-sans-pro leading-7">Drive productivity and efficiency with data-driven insights that transform how you manage resources and make strategic decisions.</div>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center gap-6">
              <Button variant="filled" size="lg">
                Try it free
              </Button>
              <Button variant="ghost" size="md" icon={ChevronRight} iconPosition="right">
                Watch demo
              </Button>
            </div>
          </div>
          <div className="image-wrapper flex-1 w-1/2 h-[592px] relative">
            <Image alt="Icon" src="/assets/images/Patterns_1.svg" width={224} height={288} className="w-56 h-72 left-[260px] top-[-278px] absolute" />
            <Image alt="Potential" src="/assets/images/business-potential-image.png" width={469} height={469} className="left-24 top-0 absolute rounded-tl-[50.66px] rounded-tr-[101.33px] rounded-bl-[202.65px] rounded-br-[50.66px]" />
            <div className="w-96 min-w-72 p-6 left-[216px] top-[423.48px] absolute bg-neutral-50 rounded-2xl shadow-lg flex flex-col justify-center items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-5 overflow-hidden">
                <div className="flex justify-start items-start gap-3 overflow-hidden">
                  <div className="w-8 h-8 bg-primary-200 rounded-full" />
                  <div className="flex flex-col justify-start items-start gap-[4.82px] overflow-hidden">
                    <div className="w-12 h-3 bg-primary-200 rounded-[40.18px]" />
                    <div className="flex justify-start items-start gap-[3.21px] overflow-hidden">
                      <div className="w-16 h-3 bg-primary-100 rounded-md" />
                      <div className="w-5 h-3 bg-primary-100 rounded-md" />
                      <div className="w-8 h-3 bg-primary-100 rounded-md" />
                      <div className="w-16 h-3 bg-primary-100 rounded-md" />
                      <div className="w-16 h-3 bg-primary-100 rounded-md" />
                    </div>
                    <div className="flex justify-start items-start gap-[3.21px] overflow-hidden">
                      <div className="w-11 h-3 bg-primary-100 rounded-md" />
                      <div className="w-7 h-3 bg-primary-100 rounded-md" />
                      <div className="w-16 h-3 bg-primary-100 rounded-md" />
                      <div className="w-14 h-3 bg-primary-100 rounded-md" />
                      <div className="w-8 h-3 bg-primary-100 rounded-md" />
                    </div>
                    <div className="flex justify-start items-start gap-[3.21px] overflow-hidden">
                      <div className="w-14 h-3 bg-primary-100 rounded-md" />
                      <div className="w-12 h-3 bg-primary-100 rounded-md" />
                    </div>
                    <div className="flex justify-start items-start gap-[3.21px] overflow-hidden">
                      <div className="w-7 h-3 bg-primary-100 rounded-md" />
                      <div className="w-16 h-3 bg-primary-100 rounded-md" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-96 p-4 left-[-81.16px] -top-[84px] absolute bg-white-alpha-5 backdrop-blur-lg rounded-2xl shadow-lg flex flex-col justify-start items-center gap-6">
              <div className="self-stretch min-w-72 px-6 py-3 bg-primary-50 rounded-2xl flex justify-start items-center gap-6">
                <Image alt="Icon" src="/assets/icons/Circular-indeterminate-progress-indicator.svg" width={40} height={40} />
                <div className="flex-1 justify-start text-primary-600 text-base font-normal font-source-sans-pro leading-normal">Your sales grew 12% this month, but the average ticket fell 8%. Launch an upselling promotion this week to recover the margin.</div>
              </div>
              <div className="self-stretch min-w-72 px-6 py-3 bg-primary-50 rounded-2xl flex justify-start items-center gap-6">
                <CircleCheckBig width={40} height={40} className='text-primary-600' />
                <div className="flex-1 justify-start text-primary-600 text-base font-normal font-source-sans-pro leading-normal">35% of your invoices are due within the next 10 days. Contact your three customers with the largest debts today to avoid cash flow problems.</div>
              </div>
              <div className="self-stretch min-w-72 px-6 py-3 bg-primary-50 rounded-2xl flex justify-start items-center gap-6">
                <CircleCheckBig width={40} height={40} className='text-primary-600' />
                <div className="flex-1 justify-start text-primary-600 text-base font-normal font-source-sans-pro leading-normal">Your cash flow will only cover 25 days of operations. Reduce variable expenses by 10% this month or seek bridge financing.</div>
              </div>
            </div>
            <Image alt="Connector" src="/assets/images/Connector_sm.png" width={128} height={112} className="left-24 top-[373.33px] absolute" />
            <div className="w-28 h-28 p-3.5 left-[49.64px] top-[429.49px] absolute bg-violet-200 rounded-[85.27px] flex justify-center items-center gap-2">
              <DatabaseBackup width={56} height={56} className='text-primary-600' />
            </div>
          </div>
        </div>
        { /* Value prop section - Intelligent */}
        <div className="self-stretch px-12 py-24 flex justify-center items-center gap-24">
          <div className="image-wrapper flex-1 w-1/2 h-[592px] relative">
            <Image alt="Patterns" src="/assets/images/ai-business-image.png" width={384} height={592} className="left-0 top-0 absolute rounded-lg" />
            <div className="w-96 p-4 left-[204.09px] top-[81px] absolute bg-white-alpha-5 backdrop-blur-lg rounded-2xl shadow-lg flex flex-col justify-start items-center gap-6">
              <div className="self-stretch min-w-72 px-6 py-3 bg-neutral-50 rounded-2xl flex justify-start items-start gap-6">
                <Image alt="Avatar" src="/assets/images/Avatar.svg" width={40} height={40} />
                <div className="flex-1 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-primary-600 text-[9px] font-bold font-inter leading-[10px]">User</div>
                  <div className="self-stretch justify-start text-primary-600 text-base font-normal font-source-sans-pro leading-normal">Where did this month&apos;s growth come from? </div>
                </div>
              </div>
              <div className="self-stretch min-w-72 px-6 py-3 bg-primary-50 rounded-2xl flex justify-start items-start gap-6">
                <Image alt="Icon" src="/assets/icons/Circular-indeterminate-progress-indicator.svg" width={40} height={40} />
                <div className="flex-1 justify-start text-primary-600 text-base font-normal font-source-sans-pro leading-normal">I get it! I’m here to help you understand your business better. Your data is currently being processed, and the report will be ready in just a moment...</div>
              </div>
              <div className="self-stretch min-w-72 px-6 py-3 bg-primary-50 rounded-2xl flex justify-start items-start gap-6">
                <Image alt="Icon" src="/assets/icons/Circular-indeterminate-progress-indicator.svg" width={40} height={40} />
                <div className="flex-1 justify-start text-primary-600 text-base font-normal font-source-sans-pro leading-normal">Product A generated 65%. If you promote cross-selling with product B, you can increase sales by an additional 12%.</div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-1/2 flex flex-col justify-start items-start gap-8">
            <div className="self-stretch flex flex-col justify-start items-start gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="flex justify-start items-center">
                  <div className="justify-start text-neutral-800 text-base font-semibold font-source-sans-pro leading-normal">Intelligent</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch justify-start"><span className="text-neutral-800 text-5xl font-medium font-inter leading-[58px]">AI that </span><span className="text-neutral-800 text-5xl font-bold font-inter leading-[58px]">understands your business</span></div>
                  <div className="self-stretch justify-start text-neutral-800 text-lg font-normal font-source-sans-pro leading-7">Leverage advanced machine learning algorithms that provide actionable insights, predict trends, and recommend optimal business strategies.</div>
                </div>
              </div>
            </div>
            <ul className="self-stretch flex flex-col justify-start items-start gap-2 list-disc ml-6">
              <li>Smart decision support</li>
              <li>Predictive forecasting</li>
              <li>Intelligent recommendations</li>
            </ul>
            <div className="flex justify-start items-center gap-6">
              <Button variant="filled" size="lg">
                Try it free
              </Button>
              <Button variant="ghost" size="md" icon={ChevronRight} iconPosition="right">
                Watch demo
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
