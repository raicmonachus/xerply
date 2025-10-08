import Hero from './Hero';
import { ChevronRight, CircleCheckBig, DatabaseBackup } from 'lucide-react';
import { Button } from '../ui';

export default function HomeDesktop() {
  return (
    <>
      <Hero />
      <main className='px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-24 w-full flex flex-col gap-12 md:gap-16 lg:gap-20'>
        { /* Value prop section - Autonomous */}
        <div className="self-stretch flex flex-col justify-start items-start gap-8 md:gap-12">
          <div className="self-stretch text-center justify-start"><span className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl font-medium font-inter leading-tight sm:leading-snug md:leading-[68px]">Why Choose </span><span className="text-primary-600 text-3xl sm:text-4xl md:text-5xl font-bold font-inter leading-tight sm:leading-snug md:leading-[68px]">Xerply?</span></div>
          <div className="self-stretch px-0 md:px-4 lg:px-12 py-8 md:py-12 lg:py-24 flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-12 lg:gap-24">
            {/* Imagen y elementos decorativos - Arriba en móvil */}
            <div className="image-wrapper w-full lg:flex-1 min-h-[400px] md:min-h-[500px] lg:h-[630.57px] relative flex justify-center items-center order-1 lg:order-2">
              <img alt="Autonomus" src="/assets/images/automation.png" className="w-full max-w-[300px] md:max-w-md lg:max-w-full h-auto max-sm:-ml-24 rounded-tl-[128px] md:rounded-tl-[256px] rounded-tr-[32px] md:rounded-tr-[64px] rounded-bl-[32px] md:rounded-bl-[64px] rounded-br-[64px] md:rounded-br-[128px] transform scale-x-[-1]" />
              <div className="w-full max-w-xs md:max-w-sm lg:w-96 p-3 md:p-4 absolute max-sm:-mr-16 top-[-20px] md:top-[-32px] lg:left-[222px] lg:-top-8 bg-white-alpha-5 backdrop-blur-lg rounded-xl md:rounded-2xl shadow-lg flex flex-col justify-start items-center gap-4 md:gap-6">
                <div className="self-stretch min-w-0 px-4 md:px-6 py-2 md:py-3 bg-primary-50 rounded-xl md:rounded-2xl flex justify-start items-center gap-3 md:gap-6">
                  <div data-show-track="true" data-step="1" data-thickness="4 dp" data-type="Flat" className="w-8 h-8 md:w-10 md:h-10 relative flex-shrink-0">
                    <img alt="Icon" src="/assets/icons/Circular-indeterminate-progress-indicator.svg" className="w-full h-full" />
                  </div>
                  <div className="flex-1 justify-start text-primary-600 text-xs md:text-sm lg:text-base font-normal font-source-sans-pro leading-snug md:leading-normal">I see you! I&apos;m reviewing your tasks and adjusting the dashboard accordingly. Hang tight while your data is processed...</div>
                </div>
                <div className="self-stretch min-w-0 p-4 md:p-6 bg-neutral-50 rounded-xl md:rounded-2xl flex flex-col justify-center items-start gap-4 md:gap-6">
                  <div className="flex flex-col justify-start items-start gap-3 md:gap-5 overflow-hidden w-full">
                    <div className="flex justify-start items-start gap-2 md:gap-3 overflow-hidden w-full">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-primary-200 rounded-full flex-shrink-0" />
                      <div className="flex flex-col justify-start items-start gap-1 md:gap-[4.82px] overflow-hidden flex-1">
                        <div className="w-10 md:w-12 h-2 md:h-3 bg-primary-200 rounded-full" />
                        <div className="flex justify-start items-start gap-1 md:gap-[3.21px] overflow-hidden flex-wrap">
                          <div className="w-12 md:w-16 h-2 md:h-3 bg-primary-100 rounded-md" />
                          <div className="w-4 md:w-5 h-2 md:h-3 bg-primary-100 rounded-md" />
                          <div className="w-6 md:w-8 h-2 md:h-3 bg-primary-100 rounded-md" />
                          <div className="w-12 md:w-16 h-2 md:h-3 bg-primary-100 rounded-md" />
                          <div className="w-12 md:w-16 h-2 md:h-3 bg-primary-100 rounded-md" />
                        </div>
                        <div className="flex justify-start items-start gap-1 md:gap-[3.21px] overflow-hidden flex-wrap">
                          <div className="w-8 md:w-11 h-2 md:h-3 bg-primary-100 rounded-md" />
                          <div className="w-5 md:w-7 h-2 md:h-3 bg-primary-100 rounded-md" />
                          <div className="w-12 md:w-16 h-2 md:h-3 bg-primary-100 rounded-md" />
                          <div className="w-10 md:w-14 h-2 md:h-3 bg-primary-100 rounded-md" />
                          <div className="w-6 md:w-8 h-2 md:h-3 bg-primary-100 rounded-md" />
                        </div>
                        <div className="flex justify-start items-start gap-1 md:gap-[3.21px] overflow-hidden flex-wrap">
                          <div className="w-10 md:w-14 h-2 md:h-3 bg-primary-100 rounded-md" />
                          <div className="w-8 md:w-12 h-2 md:h-3 bg-primary-100 rounded-md" />
                        </div>
                        <div className="flex justify-start items-start gap-1 md:gap-[3.21px] overflow-hidden flex-wrap">
                          <div className="w-5 md:w-7 h-2 md:h-3 bg-primary-100 rounded-md" />
                          <div className="w-12 md:w-16 h-2 md:h-3 bg-primary-100 rounded-md" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch min-w-0 p-4 md:p-6 opacity-50 bg-neutral-50 rounded-xl md:rounded-2xl flex flex-col justify-center items-start gap-4 md:gap-6">
                  <div className="opacity-50 flex flex-col justify-start items-start gap-3 md:gap-5 overflow-hidden w-full">
                    <div className="flex justify-start items-start gap-2 md:gap-3 overflow-hidden w-full">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-primary-200 rounded-full flex-shrink-0" />
                      <div className="flex flex-col justify-start items-start gap-1 md:gap-[4.82px] overflow-hidden flex-1">
                        <div className="w-10 md:w-12 h-2 md:h-3 bg-primary-200 rounded-full" />
                        <div className="flex justify-start items-start gap-1 md:gap-[3.21px] overflow-hidden flex-wrap">
                          <div className="w-12 md:w-16 h-2 md:h-3 bg-primary-100 rounded-md" />
                          <div className="w-4 md:w-5 h-2 md:h-3 bg-primary-100 rounded-md" />
                          <div className="w-6 md:w-8 h-2 md:h-3 bg-primary-100 rounded-md" />
                          <div className="w-12 md:w-16 h-2 md:h-3 bg-primary-100 rounded-md" />
                          <div className="w-12 md:w-16 h-2 md:h-3 bg-primary-100 rounded-md" />
                        </div>
                        <div className="flex justify-start items-start gap-1 md:gap-[3.21px] overflow-hidden flex-wrap">
                          <div className="w-8 md:w-11 h-2 md:h-3 bg-primary-100 rounded-md" />
                          <div className="w-5 md:w-7 h-2 md:h-3 bg-primary-100 rounded-md" />
                          <div className="w-12 md:w-16 h-2 md:h-3 bg-primary-100 rounded-md" />
                          <div className="w-10 md:w-14 h-2 md:h-3 bg-primary-100 rounded-md" />
                          <div className="w-6 md:w-8 h-2 md:h-3 bg-primary-100 rounded-md" />
                        </div>
                        <div className="flex justify-start items-start gap-1 md:gap-[3.21px] overflow-hidden flex-wrap">
                          <div className="w-10 md:w-14 h-2 md:h-3 bg-primary-100 rounded-md" />
                          <div className="w-8 md:w-12 h-2 md:h-3 bg-primary-100 rounded-md" />
                        </div>
                        <div className="flex justify-start items-start gap-1 md:gap-[3.21px] overflow-hidden flex-wrap">
                          <div className="w-5 md:w-7 h-2 md:h-3 bg-primary-100 rounded-md" />
                          <div className="w-12 md:w-16 h-2 md:h-3 bg-primary-100 rounded-md" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Texto - Abajo en móvil */}
            <div className="w-full lg:flex-1 flex flex-col justify-start items-start gap-6 md:gap-8 order-2 lg:order-1">
              <div className="self-stretch flex flex-col justify-start items-start gap-6 md:gap-8">
                <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-5">
                  <div className="flex justify-start items-center">
                    <div className="justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Autonomous</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-5 md:gap-6">
                    <div className="self-stretch justify-start"><span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-inter leading-tight sm:leading-snug md:leading-[58px]">Intelligent automation that </span><span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-inter leading-tight sm:leading-snug md:leading-[58px]">works while you sleep</span></div>
                    <div className="self-stretch justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-6 md:leading-7">Our AI-powered ERP system continuously learns and adapts, automating complex business processes with minimal human intervention. Experience unprecedented operational efficiency.</div>
                  </div>
                </div>
                <ul className="self-stretch flex flex-col justify-start items-start gap-2 list-disc ml-6 text-sm md:text-base text-neutral-800">
                  <li>Real-time data processing</li>
                  <li>Predictive analytics engine</li>
                  <li>Automated workflow optimization</li>
                </ul>
              </div>
              <div className="flex flex-row justify-start items-center gap-4 md:gap-6 w-full sm:w-auto">
                <Button variant="filled" size="lg" className="w-full sm:w-auto">
                  Try it free
                </Button>
                <Button variant="ghost" size="md" icon={ChevronRight} iconPosition="right" className="w-full sm:w-auto">
                  Watch demo
                </Button>
              </div>
            </div>
          </div>
        </div>
        { /* Value prop section - Flexible */}
        <div className="self-stretch px-0 md:px-4 lg:px-12 py-8 md:py-12 lg:py-24 flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-12 lg:gap-24">
          {/* Imagen y elementos decorativos - Arriba en móvil */}
          <div className="image-wrapper w-full lg:flex-1 min-h-[400px] md:min-h-[500px] lg:h-[600px] relative flex items-center justify-center order-1">
            <div className='w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rotate-[15deg] rounded-tl-[32px] md:rounded-tl-[45.82px] rounded-tr-[64px] md:rounded-tr-[91.64px] rounded-bl-[64px] md:rounded-bl-[91.64px] rounded-br-[32px] md:rounded-br-[45.82px] overflow-hidden'>
              <img alt="Flexible" src="/assets/images/flexible.png" className="scale-125 -rotate-[15deg] object-cover w-full h-full" />
            </div>
            {/* Cash Risk Card */}
            <div className="w-52 md:w-64 min-w-0 p-2.5 md:p-3.5 absolute left-0 top-0 bg-neutral-50 rounded-lg md:rounded-[9.82px] shadow-lg flex flex-col justify-start items-start gap-2 md:gap-[4.91px]">
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
                  <img alt="Icon" src="/assets/images/risk-chart.png" />
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
            {/* AI Prompt Bubble */}
            <div className="w-64 md:w-80 min-w-0 p-4 md:p-5 right-0 bottom-0 lg:left-[283px] lg:top-[499.90px] lg:right-auto lg:bottom-auto absolute bg-primary-50 rounded-lg md:rounded-xl shadow-lg flex justify-start items-start gap-3 md:gap-5">
              <img alt="Icon" src="/assets/icons/Circular-indeterminate-progress-indicator.svg" className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
              <div className="flex-1 justify-start text-primary-600 text-sm md:text-base font-normal font-source-sans-pro leading-normal">Show me cash risk by customer, not by supplier.</div>
            </div>
            {/* Connector - Hidden on mobile */}
            <img alt="Icon" src="/assets/images/Connector.png" className="hidden lg:block left-24 top-[210px] absolute" />
          </div>
          {/* Texto - Abajo en móvil */}
          <div className="w-full lg:flex-1 flex flex-col justify-start items-start gap-6 md:gap-8 order-2 lg:order-1">
            <div className="self-stretch flex flex-col justify-start items-start gap-6 md:gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4">
                <div className="flex justify-start items-center">
                  <div className="justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Flexible</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
                  <div className="self-stretch justify-start"><span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-inter leading-tight sm:leading-snug md:leading-[68px]">Customize</span><span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-inter leading-tight sm:leading-snug md:leading-[68px]"> your ERP experience</span></div>
                  <div className="self-stretch justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-relaxed md:leading-7">Unlike traditional ERPs that offer static reports, Xerply provides tailored conversational responses that adapt to your daily inquiries.</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-stretch sm:items-center gap-4 md:gap-6 w-full sm:w-auto">
              <Button variant="filled" size="lg" className="w-full sm:w-auto">
                Try it free
              </Button>
              <Button variant="ghost" size="md" icon={ChevronRight} iconPosition="right" className="w-full sm:w-auto">
                Watch demo
              </Button>
            </div>
          </div>
        </div>
        { /* Value prop section - Effective */}
        <div className="self-stretch px-0 md:px-4 lg:px-12 py-8 md:py-12 lg:py-24 flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-12 lg:gap-24 max-sm:mt-12">
          {/* Texto - Arriba en móvil */}
          <div className="w-full lg:flex-1 flex flex-col justify-start items-start gap-6 md:gap-8 order-2 lg:order-1">
            <div className="self-stretch flex flex-col justify-start items-start gap-6 md:gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4">
                <div className="flex justify-start items-center">
                  <div className="justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Effective</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
                  <div className="self-stretch justify-start"><span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-inter leading-tight sm:leading-snug md:leading-[68px]">Maximize your </span><span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-inter leading-tight sm:leading-snug md:leading-[68px]">business potential</span></div>
                  <div className="self-stretch justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-relaxed md:leading-7">Drive productivity and efficiency with data-driven insights that transform how you manage resources and make strategic decisions.</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-stretch sm:items-center gap-4 md:gap-6 w-full sm:w-auto">
              <Button variant="filled" size="lg" className="w-full sm:w-auto">
                Try it free
              </Button>
              <Button variant="ghost" size="md" icon={ChevronRight} iconPosition="right" className="w-full sm:w-auto">
                Watch demo
              </Button>
            </div>
          </div>
          {/* Imagen y elementos decorativos - Abajo en móvil */}
          <div className="image-wrapper w-full lg:flex-1 min-h-[500px] md:min-h-[550px] lg:h-[592px] relative flex items-center justify-center order-1 lg:order-2">
            {/* Pattern SVG */}
            <img alt="Icon" src="/assets/images/Patterns_1.svg" className="w-40 h-52 md:w-48 md:h-60 lg:w-56 lg:h-72 absolute top-[-120px] right-0 max-sm:top-16 md:top-[-180px] lg:left-[260px] lg:top-[-278px] lg:right-auto" />
            {/* Main Image */}
            <img alt="Potential" src="/assets/images/business-potential-image.png" className="w-80 h-80 md:w-96 md:h-96 lg:w-[469px] lg:h-[469px] relative lg:absolute lg:left-24 lg:top-0 max-sm:top-16 max-sm:-right-8 rounded-tl-[40px] rounded-tr-[80px] rounded-bl-[160px] rounded-br-[40px] md:rounded-tl-[50.66px] md:rounded-tr-[101.33px] md:rounded-bl-[202.65px] md:rounded-br-[50.66px]" />
            {/* Skeleton Chat Card */}
            <div className="w-full max-w-xs md:max-w-sm lg:w-96 min-w-0 p-4 md:p-6 absolute bottom-0 right-0 lg:left-[216px] lg:top-[423.48px] lg:right-auto lg:bottom-auto bg-neutral-50 rounded-xl md:rounded-2xl shadow-lg hidden lg:flex flex-col justify-center items-start gap-4 md:gap-6">
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
            {/* Chat Notifications Card */}
            <div className="w-full max-w-xs md:max-w-sm lg:w-96 p-3 md:p-4 absolute left-0 top-[-60px] md:top-[-80px] lg:left-[-81.16px] lg:-top-[84px] bg-white-alpha-5 backdrop-blur-lg rounded-xl md:rounded-2xl shadow-lg flex flex-col justify-start items-center gap-4 md:gap-6">
              <div className="self-stretch min-w-0 px-4 md:px-6 py-2 md:py-3 bg-primary-50 rounded-xl md:rounded-2xl flex justify-start items-center gap-3 md:gap-6">
                <img alt="Icon" src="/assets/icons/Circular-indeterminate-progress-indicator.svg" className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
                <div className="flex-1 justify-start text-primary-600 text-sm md:text-base font-normal font-source-sans-pro leading-normal">Your sales grew 12% this month, but the average ticket fell 8%. Launch an upselling promotion this week to recover the margin.</div>
              </div>
              <div className="self-stretch min-w-0 px-4 md:px-6 py-2 md:py-3 bg-primary-50 rounded-xl md:rounded-2xl flex justify-start items-center gap-3 md:gap-6">
                <CircleCheckBig width={40} height={40} className='text-primary-600 w-8 h-8 md:w-10 md:h-10 flex-shrink-0' />
                <div className="flex-1 justify-start text-primary-600 text-sm md:text-base font-normal font-source-sans-pro leading-normal">35% of your invoices are due within the next 10 days. Contact your three customers with the largest debts today to avoid cash flow problems.</div>
              </div>
              <div className="self-stretch min-w-0 px-4 md:px-6 py-2 md:py-3 bg-primary-50 rounded-xl md:rounded-2xl hidden lg:flex justify-start items-center gap-3 md:gap-6">
                <CircleCheckBig width={40} height={40} className='text-primary-600 w-8 h-8 md:w-10 md:h-10 flex-shrink-0' />
                <div className="flex-1 justify-start text-primary-600 text-sm md:text-base font-normal font-source-sans-pro leading-normal">Your cash flow will only cover 25 days of operations. Reduce variable expenses by 10% this month or seek bridge financing.</div>
              </div>
            </div>
            {/* Connector - Hidden on mobile */}
            <img alt="Connector" src="/assets/images/Connector_sm.png" className="hidden lg:block absolute left-24 top-[373.33px]" />
            {/* Database Icon Card */}
            <div className="hidden w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 p-2.5 md:p-3 lg:p-3.5 absolute left-2 bottom-2 md:left-4 md:bottom-4 lg:left-[49.64px] lg:top-[429.49px] lg:bottom-auto bg-violet-200 rounded-full lg:flex justify-center items-center gap-2">
              <DatabaseBackup width={56} height={56} className='text-primary-600' />
            </div>
          </div>
        </div>
        { /* Value prop section - Intelligent */}
        <div className="self-stretch px-0 md:px-4 lg:px-12 py-8 md:py-12 lg:py-24 flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-12 lg:gap-24 relative">
          {/* Imagen y elementos decorativos - Arriba en móvil */}
          <div className="image-wrapper w-full lg:flex-1 min-h-[500px] md:min-h-[550px] lg:h-[592px] relative flex items-center justify-center order-1 lg:order-2">
            <img alt="Patterns" src="/assets/images/ai-business-image.png" className="w-80 h-auto md:w-96 lg:w-96 relative lg:absolute lg:left-0 lg:top-0 max-sm:-left-8 rounded-lg" />
            {/* AI Chat Interface Card */}
            <div className="w-full max-w-xs md:max-w-sm lg:w-96 p-3 md:p-4 absolute right-0 top-8 md:top-12 lg:left-[204.09px] lg:top-[81px] max-sm:left-18 max-sm:top-48 lg:right-auto bg-white-alpha-5 backdrop-blur-lg rounded-xl md:rounded-2xl shadow-lg flex flex-col justify-start items-center gap-4 md:gap-6">
              <div className="self-stretch min-w-0 px-4 md:px-6 py-2 md:py-3 bg-neutral-50 rounded-xl md:rounded-2xl flex justify-start items-start gap-3 md:gap-6">
                <img alt="Avatar" src="/assets/images/Avatar.svg" className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
                <div className="flex-1 flex flex-col justify-center items-start gap-1">
                  <div className="self-stretch justify-start text-primary-600 text-[8px] md:text-[9px] font-bold font-inter leading-[10px]">User</div>
                  <div className="self-stretch justify-start text-primary-600 text-sm md:text-base font-normal font-source-sans-pro leading-normal">Where did this month&apos;s growth come from? </div>
                </div>
              </div>
              <div className="self-stretch min-w-0 px-4 md:px-6 py-2 md:py-3 bg-primary-50 rounded-xl md:rounded-2xl flex justify-start items-start gap-3 md:gap-6">
                <img alt="Icon" src="/assets/icons/Circular-indeterminate-progress-indicator.svg" className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
                <div className="flex-1 justify-start text-primary-600 text-sm md:text-base font-normal font-source-sans-pro leading-normal">I get it! I&apos;m here to help you understand your business better. Your data is currently being processed, and the report will be ready in just a moment...</div>
              </div>
              <div className="self-stretch min-w-0 px-4 md:px-6 py-2 md:py-3 bg-primary-50 rounded-xl md:rounded-2xl flex justify-start items-start gap-3 md:gap-6">
                <img alt="Icon" src="/assets/icons/Circular-indeterminate-progress-indicator.svg" className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
                <div className="flex-1 justify-start text-primary-600 text-sm md:text-base font-normal font-source-sans-pro leading-normal">Product A generated 65%. If you promote cross-selling with product B, you can increase sales by an additional 12%.</div>
              </div>
            </div>
          </div>
          {/* Texto - Abajo en móvil */}
          <div className="w-full lg:flex-1 flex flex-col justify-start items-start gap-6 md:gap-8 order-2 lg:order-1 max-sm:mt-12">
            <div className="self-stretch flex flex-col justify-start items-start gap-6 md:gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4">
                <div className="flex justify-start items-center">
                  <div className="justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Intelligent</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
                  <div className="self-stretch justify-start"><span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-inter leading-tight sm:leading-snug md:leading-[68px]">AI that </span><span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-inter leading-tight sm:leading-snug md:leading-[68px]">understands your business</span></div>
                  <div className="self-stretch justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-relaxed md:leading-7">Leverage advanced machine learning algorithms that provide actionable insights, predict trends, and recommend optimal business strategies.</div>
                </div>
              </div>
            </div>
            <ul className="self-stretch flex flex-col justify-start items-start gap-2 list-disc ml-6 text-sm md:text-base text-neutral-800">
              <li>Smart decision support</li>
              <li>Predictive forecasting</li>
              <li>Intelligent recommendations</li>
            </ul>
            <div className="flex flex-row justify-start items-stretch sm:items-center gap-4 md:gap-6 w-full sm:w-auto">
              <Button variant="filled" size="lg" className="w-full sm:w-auto">
                Try it free
              </Button>
              <Button variant="ghost" size="md" icon={ChevronRight} iconPosition="right" className="w-full sm:w-auto">
                Watch demo
              </Button>
            </div>
          </div>
          <img alt="Patterns" src="/assets/images/Patterns_3.svg" className="-right-8 -bottom-16 absolute" />
        </div>
        { /* Value prop section - Affordable */}
        <div className="self-stretch px-0 md:px-4 lg:px-12 py-8 md:py-12 lg:py-24 relative flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-12 lg:gap-24">
          {/* Texto - Arriba en móvil */}
          <div className="w-full lg:flex-1 flex flex-col justify-start items-start gap-6 md:gap-8 order-2 lg:order-1">
            <div className="self-stretch flex flex-col justify-start items-start gap-6 md:gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4">
                <div className="flex justify-start items-center">
                  <div className="justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Affordable</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
                  <div className="self-stretch justify-start"><span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-inter leading-tight sm:leading-snug md:leading-[68px]">Enterprise-grade </span><span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-inter leading-tight sm:leading-snug md:leading-[68px]">solutions for every budget</span></div>
                  <div className="self-stretch justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-relaxed md:leading-7">Unlock powerful AI-driven ERP capabilities without breaking the bank. Our flexible pricing ensures you get maximum value for your investment.</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-stretch sm:items-center gap-4 md:gap-6 w-full sm:w-auto">
              <Button variant="filled" size="lg" className="w-full sm:w-auto">
                Try it free
              </Button>
              <Button variant="ghost" size="md" icon={ChevronRight} iconPosition="right" className="w-full sm:w-auto">
                Watch demo
              </Button>
            </div>
          </div>
          {/* Imagen y elementos decorativos - Abajo en móvil */}
          <div className="image-wrapper w-full lg:flex-1 min-h-[550px] md:min-h-[600px] lg:h-[656px] relative flex items-center justify-center order-1 lg:order-2">
            {/* Pattern SVG */}
            <img alt="Patterns" src="/assets/images/Patterns_4.svg" className="hidden lg:block absolute left-12 top-[480px]" />
            {/* Main Image */}
            <img alt="Affordable" src="/assets/images/budget-image.png" className="w-64 h-64 md:w-80 md:h-80 lg:w-80 lg:h-80 rounded-2xl md:rounded-[32px] relative lg:absolute lg:left-0 lg:top-[168px] max-sm:-left-16 max-sm:transform max-sm:scale-x-[-1]" />
            
            {/* Mobile/Tablet: Grid Layout */}
            <div className="absolute grid grid-cols-1 gap-4 mt-6 lg:hidden w-full max-w-56 md:max-w-md max-sm:scale-90 max-sm:-right-4">
              {/* Free Plan */}
              <div className="w-full p-5 md:p-6 bg-neutral-200 rounded-md shadow-lg flex flex-col justify-start items-start gap-8 md:gap-11">
                <div className="self-stretch flex flex-col justify-start items-center gap-6">
                  <div className="self-stretch flex flex-col justify-start items-center gap-1.5">
                    <div className="self-stretch text-center justify-start text-primary-600 text-sm font-bold font-inter leading-none">Free</div>
                    <div className="self-stretch text-center justify-start"><span className="text-neutral-800 text-4xl font-medium font-inter leading-[48.84px]">$0</span><span className="text-neutral-800 text-lg font-medium font-inter leading-snug">/mo</span></div>
                    <div className="self-stretch text-center justify-start text-neutral-800 text-xs font-normal font-source-sans-pro leading-none">or $0 yearly</div>
                  </div>
                  <div className="self-stretch px-4 py-2 bg-primary-50 rounded-md flex justify-center items-center">
                    <div className="justify-start text-primary-600 text-[10.06px] font-semibold font-inter leading-none">Get started</div>
                  </div>
                </div>
              </div>
              {/* Business Plan */}
              <div className="w-full p-5 md:p-6 bg-primary-50 rounded-md shadow-lg flex flex-col justify-start items-start gap-8 md:gap-11">
                <div className="self-stretch flex flex-col justify-start items-center gap-6">
                  <div className="self-stretch flex flex-col justify-start items-center gap-1.5">
                    <div className="self-stretch text-center justify-start text-primary-600 text-sm font-bold font-inter leading-none">Business</div>
                    <div className="self-stretch text-center justify-start"><span className="text-neutral-800 text-4xl font-medium font-inter leading-[48.84px]">$29</span><span className="text-neutral-800 text-lg font-medium font-inter leading-snug">/mo</span></div>
                    <div className="self-stretch text-center justify-start text-neutral-800 text-xs font-normal font-source-sans-pro leading-none">or $199 yearly</div>
                  </div>
                  <div className="self-stretch px-4 py-2 bg-primary-600 rounded-md flex justify-center items-center">
                    <div className="justify-start text-white-alpha-10/95 text-[10.06px] font-semibold font-inter leading-none">Get started</div>
                  </div>
                </div>
              </div>
              {/* Enterprise Plan */}
              <div className="w-full p-5 md:p-6 bg-neutral-50 rounded-md shadow-lg flex flex-col justify-start items-start gap-8 md:gap-11">
                <div className="self-stretch flex flex-col justify-start items-center gap-6">
                  <div className="self-stretch flex flex-col justify-start items-center gap-1.5">
                    <div className="self-stretch text-center justify-start text-primary-600 text-sm font-bold font-inter leading-none">Enterprise</div>
                    <div className="self-stretch text-center justify-start"><span className="text-neutral-800 text-4xl font-medium font-inter leading-[48.84px]">$49</span><span className="text-neutral-800 text-lg font-medium font-inter leading-snug">/mo</span></div>
                    <div className="self-stretch text-center justify-start text-neutral-800 text-xs font-normal font-source-sans-pro leading-none">or $199 yearly</div>
                  </div>
                  <div className="self-stretch px-4 py-2 bg-primary-50 rounded-md flex justify-center items-center">
                    <div className="justify-start text-primary-600 text-[10.06px] font-semibold font-inter leading-none">Get started</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Absolute Positioning */}
            <div className="w-52 h-48 p-6 left-[271.30px] top-0 absolute hidden lg:flex bg-neutral-200 rounded-md shadow-[0px_16px_40px_-8px_rgba(88,92,95,0.16)] flex-col justify-start items-start gap-11">
              <div className="self-stretch flex flex-col justify-start items-center gap-6">
                <div className="self-stretch flex flex-col justify-start items-center gap-1.5">
                  <div className="self-stretch text-center justify-start text-primary-600 text-sm font-bold font-inter leading-none">Free</div>
                  <div className="self-stretch text-center justify-start"><span className="text-neutral-800 text-4xl font-medium font-inter leading-[48.84px]">$0</span><span className="text-neutral-800 text-lg font-medium font-inter leading-snug">/mo</span></div>
                  <div className="self-stretch text-center justify-start text-neutral-800 text-xs font-normal font-source-sans-pro leading-none">or $0 yearly</div>
                </div>
                <div className="self-stretch px-4 py-2 bg-primary-50 rounded-md flex justify-center items-center">
                  <div className="justify-start text-primary-600 text-[10.06px] font-semibold font-inter leading-none">Get started</div>
                </div>
              </div>
            </div>
            <div className="w-52 h-48 p-6 left-[378.68px] top-[230.32px] absolute hidden lg:flex bg-primary-50 rounded-md shadow-[0px_16px_40px_-8px_rgba(88,92,95,0.16)] flex-col justify-start items-start gap-11">
              <div className="self-stretch flex flex-col justify-start items-center gap-6">
                <div className="self-stretch flex flex-col justify-start items-center gap-1.5">
                  <div className="self-stretch text-center justify-start text-primary-600 text-sm font-bold font-inter leading-none">Business</div>
                  <div className="self-stretch text-center justify-start"><span className="text-neutral-800 text-4xl font-medium font-inter leading-[48.84px]">$29</span><span className="text-neutral-800 text-lg font-medium font-inter leading-snug">/mo</span></div>
                  <div className="self-stretch text-center justify-start text-neutral-800 text-xs font-normal font-source-sans-pro leading-none">or $199 yearly</div>
                </div>
                <div className="self-stretch px-4 py-2 bg-primary-600 rounded-md flex justify-center items-center">
                  <div className="justify-start text-white-alpha-10/95 text-[10.06px] font-semibold font-inter leading-none">Get started</div>
                </div>
              </div>
            </div>
            <div className="w-52 h-48 p-6 left-[271.30px] top-[460.63px] absolute hidden lg:flex bg-neutral-50 rounded-md shadow-[0px_16px_40px_-8px_rgba(88,92,95,0.16)] flex-col justify-start items-start gap-11">
              <div className="self-stretch flex flex-col justify-start items-center gap-6">
                <div className="self-stretch flex flex-col justify-start items-center gap-1.5">
                  <div className="self-stretch text-center justify-start text-primary-600 text-sm font-bold font-inter leading-none">Enterprise</div>
                  <div className="self-stretch text-center justify-start"><span className="text-neutral-800 text-4xl font-medium font-inter leading-[48.84px]">$49</span><span className="text-neutral-800 text-lg font-medium font-inter leading-snug">/mo</span></div>
                  <div className="self-stretch text-center justify-start text-neutral-800 text-xs font-normal font-source-sans-pro leading-none">or $199 yearly</div>
                </div>
                <div className="self-stretch px-4 py-2 bg-primary-50 rounded-md flex justify-center items-center">
                  <div className="justify-start text-primary-600 text-[10.06px] font-semibold font-inter leading-none">Get started</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        { /* Value prop section - Integrations */}
        <div className="self-stretch px-0 md:px-4 lg:px-12 py-8 md:py-12 lg:py-24 flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-12 lg:gap-24">
          {/* Imagen y elementos decorativos - Arriba en móvil */}
          <div className="image-wrapper w-full lg:flex-1 min-h-[500px] md:min-h-[550px] lg:h-[592px] relative flex items-center justify-center order-1 lg:order-2">
            {/* Main Image */}
            <img alt="Integrations" src="/assets/images/young-woman.png" className="w-64 h-auto md:w-80 lg:w-80 rounded-lg relative lg:absolute lg:left-56 lg:top-0 max-sm:left-16" />
            {/* Integration Flow - Vertical in all screen sizes */}
            <div className="absolute left-0 top-4 md:top-[17.82px] flex flex-col justify-center items-center gap-0.5">
              {/* Xerply Logo Card */}
              <div className="w-64 md:w-72 lg:w-80 min-w-0 p-4 md:p-5 lg:p-6 bg-primary-600 rounded-lg md:rounded-xl shadow-lg flex justify-center items-center gap-3 md:gap-5">
                <div className="flex-1 flex flex-col justify-center items-center gap-1.5">
                  <img alt="Icon" src="/assets/logo/xerply-logo-wh.svg" className="w-32 md:w-40 lg:w-[200px] h-auto" />
                </div>
              </div>
              {/* Connector */}
              <img alt="Connector" src="/assets/images/Connector_vertical.png" className="w-4 md:w-5 lg:w-6 h-auto" />
              {/* SAT Card */}
              <div className="w-64 md:w-72 lg:w-80 min-w-0 p-4 md:p-5 bg-primary-50 rounded-lg md:rounded-xl shadow-lg flex justify-start items-center gap-3 md:gap-5">
                <img alt="Icon" src="/assets/icons/sat.svg" className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex-shrink-0" />
                <div className="flex-1 flex flex-col justify-start items-start gap-1 md:gap-1.5">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-neutral-800 text-[10px] md:text-xs font-semibold font-source-sans-pro leading-tight">Tax administration service</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                    <div className="self-stretch justify-start text-neutral-800 text-xl md:text-2xl font-bold font-inter leading-7">SAT</div>
                  </div>
                  <div className="self-stretch pt-2 md:pt-4 flex justify-end items-start gap-[3.06px]">
                    <div className="flex flex-col justify-start items-start">
                      <div className="self-stretch justify-start text-neutral-800 text-[8px] md:text-[9px] font-medium font-inter leading-[10px]">Configuring connection...</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Connector */}
              <img alt="Connector" src="/assets/images/Connector_vertical.png" className="w-4 md:w-5 lg:w-6 h-auto" />
              {/* Bank Selection Card */}
              <div className="w-64 md:w-72 lg:w-80 min-w-0 p-4 md:p-5 bg-neutral-50 rounded-lg md:rounded-xl shadow-lg flex justify-start items-center gap-3 md:gap-5">
                <div className="flex-1 flex flex-col justify-start items-start gap-1.5">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-neutral-800 text-xs font-semibold font-source-sans-pro leading-tight">Financial</div>
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-primary-600 text-sm font-semibold font-source-sans-pro leading-tight">Choose one entity:</div>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <div className="p-3 bg-primary-50 rounded-md flex justify-start items-center gap-2">
                      <img alt="Icon" src="/assets/icons/HSBC.svg" />
                    </div>
                    <div className="p-3 bg-primary-50 rounded-md flex justify-start items-center gap-2">
                      <img alt="Icon" src="/assets/icons/Citi.svg" />
                    </div>
                    <div className="p-3 bg-primary-50 rounded-md flex justify-start items-center gap-2">
                      <img alt="Icon" src="/assets/icons/BBVA_2019.svg" />
                    </div>
                    <div className="p-3 bg-primary-50 rounded-md flex justify-start items-center gap-2">
                      <img alt="Icon" src="/assets/icons/Citibanamex.svg" />
                    </div>
                  </div>
                  <div className="self-stretch pt-4 flex justify-end items-start gap-[3.06px]">
                    <div className="flex flex-col justify-start items-start">
                      <div className="self-stretch justify-start text-neutral-800 text-[9px] font-medium font-inter leading-[10px]">Configuring connection...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Texto - Abajo en móvil */}
          <div className="w-full lg:flex-1 flex flex-col justify-start items-start gap-6 md:gap-8 order-2 lg:order-1">
            <div className="self-stretch flex flex-col justify-start items-start gap-6 md:gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4">
                <div className="flex justify-start items-center">
                  <div className="justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Integrations</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
                  <div className="self-stretch justify-start"><span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-inter leading-tight sm:leading-snug md:leading-[68px]">Connect</span><span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-inter leading-tight sm:leading-snug md:leading-[68px]"> your entire business ecosystem</span></div>
                  <div className="self-stretch justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-relaxed md:leading-7">Seamlessly integrate with your existing tools and platforms. Our robust API and wide-ranging compatibility ensure smooth data flow across your business.</div>
                </div>
              </div>
            </div>
            <ul className="self-stretch flex flex-col justify-start items-start gap-2 list-disc ml-6 text-sm md:text-base text-neutral-800">
              <li>CRM systems</li>
              <li>Financial platforms</li>
              <li>Productivity tools</li>
            </ul>
            <div className="flex flex-row justify-start items-stretch sm:items-center gap-4 md:gap-6 w-full sm:w-auto">
              <Button variant="filled" size="lg" className="w-full sm:w-auto">
                Try it free
              </Button>
              <Button variant="ghost" size="md" icon={ChevronRight} iconPosition="right" className="w-full sm:w-auto">
                Watch demo
              </Button>
            </div>
          </div>
        </div>
        { /* CTA Section */}
        <div className="self-stretch relative flex flex-col justify-start items-center max-sm:mt-24">
          <div className="w-[910.32px] h-[910.32px] left-[-463px] top-[919.59px] absolute origin-top-left rotate-[-57.78deg] bg-cyan-50 rounded-[236.46px] block max-sm:w-96 max-sm:h-96 max-sm:top-48 max-sm:left-16 max-sm:rounded-[80px] max-sm:-z-5" />
          <div className="self-stretch px-4 md:px-8 lg:px-14 py-16 md:py-20 lg:py-28 flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20 max-sm:order-1 max-sm:z-50">
            <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20">
              <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-6 md:gap-8">
                <div className="self-stretch flex flex-col justify-start items-center gap-4 md:gap-6">
                  <div className="self-stretch text-center justify-start"><span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-inter leading-tight md:leading-[58px]">Ready to </span><span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-inter leading-tight md:leading-[58px]">transform your business?</span></div>
                  <div className="self-stretch text-center justify-start text-base md:text-lg font-normal font-source-sans-pro leading-relaxed md:leading-7">Experience the power of autonomous AI-driven ERP with a personalized demonstration tailored to your business needs.</div>
                </div>
                <div className="flex flex-col sm:flex-row justify-start items-stretch sm:items-start gap-3 md:gap-4 w-full sm:w-auto">
                  <Button variant="filled" size="lg" className="w-full sm:w-auto">
                    Try it free
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Contact sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <img alt="Business" src="/assets/images/owners-image.png" className='z-10 w-full max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-[940px] h-auto' />
        </div>
      </main>
    </>
  );
}
