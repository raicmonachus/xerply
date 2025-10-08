import { Button } from '../ui';
import { ChevronRight, ReceiptText, Cpu, Cable, ScanSearch, Workflow, ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { useParallax } from '../../hooks/useParallax';

export default function Solutions() {
  // Parallax refs for Business Solutions section
  const smallBusinessRef = useParallax<HTMLDivElement>();
  const mediumBusinessRef = useParallax<HTMLDivElement>();
  
  // Parallax refs for Industries section
  const industriesTextRef = useParallax<HTMLDivElement>();
  const industriesImageRef = useParallax<HTMLDivElement>();
  
  // Parallax refs for Transform section
  const transformImageRef = useParallax<HTMLDivElement>();
  const transformTextRef = useParallax<HTMLDivElement>();
  
  return (
    <div className="self-stretch h-auto min-h-screen relative overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Background decorative element */}
      <div className="w-[801.29px] h-[801.29px] left-[83.30px] top-[-272.29px] absolute origin-top-left rotate-[-15deg] bg-cyan-50 rounded-[236.46px]" />
      <div className='h-full flex flex-col justify-center items-center gap-12 md:gap-16 lg:gap-20 px-4 md:px-8 lg:px-16 z-10 relative'>
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20 py-32">
          <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-6 md:gap-8">
            <div className="self-stretch flex flex-col justify-start items-center gap-3 md:gap-4">
              <div className="flex justify-start items-center">
                <div className="justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Solutions</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-center gap-4 md:gap-6">
                <div className="self-stretch text-center justify-start">
                  <span className="text-neutral-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-inter leading-tight sm:leading-snug md:leading-[72px] lg:leading-[88px]">Intelligent</span>
                  <span className="text-neutral-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-inter leading-tight sm:leading-snug md:leading-[72px] lg:leading-[88px]"> erp for every business</span>
                </div>
                <div className="self-stretch text-center justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-6 md:leading-7">
                  Customize your enterprise resource planning with AI-powered solutions tailored to your business size and unique operational needs
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center gap-3 md:gap-4 w-full sm:w-auto">
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
      { /* Section - Business Solutions */}
      <div className="self-stretch px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-28 flex flex-col justify-start items-center gap-20 overflow-hidden">
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-20">
          <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-3 md:gap-4">
            <div className="flex justify-start items-center">
              <div className="justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Segment</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
              <div className="self-stretch text-center justify-start"><span className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl font-medium font-inter leading-tight sm:leading-snug md:leading-[58px]">Solutions for </span><span className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl font-bold font-inter leading-tight sm:leading-snug md:leading-[58px]">every business scale</span></div>
              <div className="self-stretch text-center justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-6 md:leading-7">Discover precise erp solutions matching your company&apos;s specific requirements</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-8">
            <div className="self-stretch flex flex-col lg:flex-row justify-start items-start gap-8">
              <div ref={smallBusinessRef} className="parallax-from-left w-full lg:flex-1 bg-neutral-100 rounded-lg outline outline-1 outline-black-alpha-1/5 flex flex-col justify-start items-start overflow-hidden">
                <div className="self-stretch p-6 md:p-8 flex flex-col justify-start items-start gap-4 md:gap-6">
                  <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="flex justify-start items-center">
                      <div className="justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Small</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4">
                      <div className="self-stretch justify-start"><span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl font-medium font-inter leading-tight sm:leading-snug md:leading-[48px]">Perfect for </span><span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl font-bold font-inter leading-tight sm:leading-snug md:leading-[48px]">startups and emerging businesses</span></div>
                      <div className="self-stretch justify-start text-neutral-800 text-sm md:text-base font-normal font-source-sans-pro leading-normal">Streamline operations with lightweight, flexible erp tools</div>
                    </div>
                  </div>
                  <div className="self-stretch flex justify-start items-center gap-4 md:gap-6">
                    <Button variant="ghost" size="md" icon={ChevronRight} iconPosition="right" className="w-auto !px-0">
                      Try it free
                    </Button>
                  </div>
                </div>
                <div className="self-stretch h-56 md:h-64 lg:h-72 flex flex-col justify-start items-start">
                  <img alt='Emerging Business' className="self-stretch flex-1 object-cover" src="/assets/images/emerging-business-image.png" />
                </div>
              </div>
              <div ref={mediumBusinessRef} className="parallax-from-right w-full md:w-2/3 self-stretch bg-neutral-100 rounded-lg outline outline-1 outline-black-alpha-1/5 flex flex-col lg:flex-row justify-start items-start overflow-hidden">
                <div className="flex-1 self-stretch p-8 flex flex-col justify-center items-start gap-8">
                  <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="flex justify-start items-center">
                      <div className="justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Medium</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4">
                      <div className="self-stretch justify-start"><span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl font-medium font-inter leading-tight sm:leading-snug md:leading-[48px]">Designed for </span><span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl font-bold font-inter leading-tight sm:leading-snug md:leading-[48px]">growing enterprise</span><span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl font-medium font-inter leading-tight sm:leading-snug md:leading-[48px]"> challenges</span></div>
                      <div className="self-stretch justify-start text-neutral-800 text-sm md:text-base font-normal font-source-sans-pro leading-normal">Advanced features to support complex business management</div>
                    </div>
                  </div>
                  <div className="self-stretch flex justify-start items-center gap-4 md:gap-6">
                    <Button variant="ghost" size="md" icon={ChevronRight} iconPosition="right" className="w-auto !px-0">
                      Try it free
                    </Button>
                  </div>
                </div>
                <div className="flex-1 self-stretch flex flex-col justify-center items-center">
                  <img alt='Growing Enterprise' className="self-stretch flex-1 object-cover h-64 md:h-80 lg:h-auto" src="/assets/images/growing-enterprise-image.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      { /* Section - Industries */ }
      <div className="self-stretch relative flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20 px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
        <div className="w-[640px] h-[640px] left-[820.02px] top-[370px] absolute origin-top-left -rotate-45 bg-primary-50 rounded-[140px] hidden lg:block" />
        <div className="self-stretch flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 lg:gap-0">
          <div ref={industriesTextRef} className="parallax-from-left w-full h-full lg:flex-1 self-stretch flex flex-col justify-center items-start md:items-end gap-6 md:gap-8 order-2 md:order-1 md:pr-8 xl:pr-20">
            <div className="w-full max-w-[560px] flex flex-col justify-start items-start gap-6 md:gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-6 md:gap-8">
                <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4">
                  <div className="flex justify-start items-center">
                    <div className="justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Industries</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
                    <div className="self-stretch justify-start"><span className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl font-medium font-inter leading-tight sm:leading-snug md:leading-[58px]">Tailored solutions across </span><span className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl font-bold font-inter leading-tight sm:leading-snug md:leading-[58px]">multiple business sectors</span></div>
                    <div className="self-stretch justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-6 md:leading-7">Experience comprehensive erp solutions designed to address unique challenges in different industries</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4">
                  <div className="self-stretch py-2 flex flex-row justify-start items-start gap-4 sm:gap-6">
                    <div className="flex-1 flex flex-col justify-start items-start gap-2">
                      <div className="self-stretch justify-start text-primary-600 text-4xl sm:text-5xl md:text-6xl font-medium font-inter leading-tight sm:leading-snug md:leading-[68px]">50%</div>
                      <div className="self-stretch justify-start text-neutral-800 text-sm md:text-base font-normal font-source-sans-pro leading-normal">Reduced time on routine tasks</div>
                    </div>
                    <div className="flex-1 flex flex-col justify-start items-start gap-2">
                      <div className="self-stretch justify-start text-primary-600 text-4xl sm:text-5xl md:text-6xl font-medium font-inter leading-tight sm:leading-snug md:leading-[68px]">40%</div>
                      <div className="self-stretch justify-start text-neutral-800 text-sm md:text-base font-normal font-source-sans-pro leading-normal">Increased decision-making speed</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center gap-4 md:gap-6 w-full sm:w-auto">
                <Button variant="filled" size="lg" className="w-full sm:w-auto">
                  Explore
                </Button>
                <Button variant="ghost" size="lg" icon={ChevronRight} iconPosition="right" className="w-full sm:w-auto">
                  Contact us
                </Button>
              </div>
            </div>
          </div>
          <div ref={industriesImageRef} className="parallax-from-right image-wrapper w-full lg:w-[720px] self-stretch relative flex flex-col items-center justify-center order-1 md:order-2 min-h-[600px] md:min-h-0">
            {/* Image - responsive positioning */}
            <img alt="Affordable" src="/assets/images/budget-image.png" className="w-64 h-64 md:w-80 md:h-80 lg:w-80 lg:h-80 rounded-2xl md:rounded-[32px] relative md:absolute md:left-32 max-sm:-left-16 max-sm:transform max-sm:scale-x-[-1]" />
            
            {/* Industry Cards - Grid on mobile, Absolute on desktop */}
            <div className="absolute grid grid-cols-1 gap-8 mt-6 md:hidden w-full max-w-56 md:max-w-md max-sm:scale-90 max-sm:-right-4 z-10">
              <div className="w-full p-6 bg-neutral-200 rounded-md shadow-[0px_16px_40px_-8px_rgba(88,92,95,0.16)] flex flex-col justify-center items-center gap-4">
                <ReceiptText className="w-12 h-12 md:w-16 md:h-16 text-neutral-800" />
                <div className="self-stretch flex flex-col justify-start items-center gap-6">
                  <div className="self-stretch flex flex-col justify-start items-center gap-1.5">
                    <div className="self-stretch text-center justify-start text-neutral-800 text-sm font-bold font-inter leading-none">Retail</div>
                  </div>
                </div>
              </div>
              <div className="w-full p-6 bg-primary-100 rounded-md shadow-[0px_16px_40px_-8px_rgba(88,92,95,0.16)] flex flex-col justify-center items-center gap-4">
                <Cpu className="w-12 h-12 md:w-16 md:h-16 text-primary-600" />
                <div className="self-stretch flex flex-col justify-start items-center gap-6">
                  <div className="self-stretch flex flex-col justify-start items-center gap-1.5">
                    <div className="self-stretch text-center justify-start text-primary-600 text-sm font-bold font-inter leading-none">Tech</div>
                  </div>
                </div>
              </div>
              <div className="w-full p-6 bg-neutral-50 rounded-md shadow-[0px_16px_40px_-8px_rgba(88,92,95,0.16)] flex flex-col justify-center items-center gap-4">
                <Cable className="w-12 h-12 md:w-16 md:h-16 text-primary-600" />
                <div className="self-stretch flex flex-col justify-start items-center gap-6">
                  <div className="self-stretch flex flex-col justify-start items-center gap-1.5">
                    <div className="self-stretch text-center justify-start text-primary-600 text-sm font-bold font-inter leading-none">Services</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop absolute positioning */}
            <div className="hidden md:flex flex-col items-end justify-center gap-12 w-full h-full relative z-10">
              <div className="w-52 h-48 p-6 md:mr-40 bg-neutral-200 rounded-md shadow-[0px_16px_40px_-8px_rgba(88,92,95,0.16)] flex flex-col justify-center items-center gap-4">
                <ReceiptText className="w-16 h-16 text-neutral-800" />
                <div className="self-stretch flex flex-col justify-start items-center gap-6">
                  <div className="self-stretch flex flex-col justify-start items-center gap-1.5">
                    <div className="self-stretch text-center justify-start text-neutral-800 text-sm font-bold font-inter leading-none">Retail</div>
                  </div>
                </div>
              </div>
              <div className="w-52 h-48 p-6 bg-primary-100 rounded-md shadow-[0px_16px_40px_-8px_rgba(88,92,95,0.16)] flex flex-col justify-center items-center gap-4">
                <Cpu className="w-16 h-16 text-primary-600" />
                <div className="self-stretch flex flex-col justify-start items-center gap-6">
                  <div className="self-stretch flex flex-col justify-start items-center gap-1.5">
                    <div className="self-stretch text-center justify-start text-primary-600 text-sm font-bold font-inter leading-none">Tech</div>
                  </div>
                </div>
              </div>
              <div className="w-52 h-48 p-6 md:mr-40 bg-neutral-50 rounded-md shadow-[0px_16px_40px_-8px_rgba(88,92,95,0.16)] flex flex-col justify-center items-center gap-4">
                <Cable className="w-16 h-16 text-primary-600" />
                <div className="self-stretch flex flex-col justify-start items-center gap-6">
                  <div className="self-stretch flex flex-col justify-start items-center gap-1.5">
                    <div className="self-stretch text-center justify-start text-primary-600 text-sm font-bold font-inter leading-none">Services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      { /* Section - Transform */}
      <div className="self-stretch relative flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20 px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
        <div className="self-stretch flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 lg:gap-0">
          <div ref={transformImageRef} className="parallax-from-left image-wrapper w-full h-full flex items-center justify-center max-sm:min-h-[600px] max-sm:scale-75">
            <div className='w-96 h-96 rotate-[15deg] rounded-tl-[32px] md:rounded-tl-[45.82px] rounded-tr-[64px] md:rounded-tr-[91.64px] rounded-bl-[64px] md:rounded-bl-[91.64px] rounded-br-[32px] md:rounded-br-[45.82px] overflow-hidden'>
              <img alt="Flexible" src="/assets/images/flexible.png" className="scale-125 -rotate-[15deg] object-cover w-full h-full" />
            </div>
            <div className="w-80 min-w-56 p-5 left-[344.78px] max-sm:left-32 top-[533.81px] max-sm:top-[440px] absolute bg-primary-50 rounded-xl shadow-[0px_12.231521606445312px_30.57880401611328px_-6.115760803222656px_rgba(88,92,95,0.16)] flex justify-start items-center gap-5">
              <div className="p-3 bg-primary-100 rounded-md flex justify-start items-center gap-2">
                <ArrowUpRight className="w-8 h-8 text-primary-600 mt-1" />
              </div>
              <div className="flex-1 flex flex-col justify-start items-start gap-1.5">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch justify-start text-neutral-800 text-xs font-semibold font-source-sans-pro leading-tight">Sales</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-neutral-800 text-2xl font-bold font-inter leading-7">$2.5M</div>
                </div>
                <div className="self-stretch flex justify-start items-start gap-[3.06px]">
                  <div className="flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-cyan-500 text-xs font-semibold font-source-sans-pro leading-tight">+10%</div>
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-neutral-800 text-xs font-normal font-source-sans-pro leading-tight">from last period</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-80 min-w-56 p-5 left-[26.99px] max-sm:-left-16 top-[170.95px] max-sm:top-20 absolute bg-volcano-50 rounded-xl shadow-[0px_12.231521606445312px_30.57880401611328px_-6.115760803222656px_rgba(88,92,95,0.16)] flex justify-start items-center gap-5">
              <div className="p-3 bg-volcano-100 rounded-md flex justify-start items-center gap-2">
                  <ArrowDownLeft className="w-8 h-8 text-volcano-500 mt-1" />
              </div>
              <div className="flex-1 flex flex-col justify-start items-start gap-1.5">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch justify-start text-neutral-800 text-xs font-semibold font-source-sans-pro leading-tight">Sales</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-neutral-800 text-2xl font-bold font-inter leading-7">$1M</div>
                </div>
                <div className="self-stretch flex justify-start items-start gap-[3.06px]">
                  <div className="flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-volcano-500 text-xs font-semibold font-source-sans-pro leading-tight">-10%</div>
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-neutral-800 text-xs font-normal font-source-sans-pro leading-tight">from last period</div>
                  </div>
                </div>
              </div>
            </div>
            <img alt="Icon" src="/assets/images/Connector2.png" className="block left-48 max-sm:-left-8 top-[280px] max-sm:top-48 absolute" />
          </div>
          <div ref={transformTextRef} className="parallax-from-right w-full lg:w-[720px] self-stretch relative flex flex-col items-center justify-center order-1 lg:order-2 min-h-[600px] lg:min-h-0">
            <div className="w-full max-w-[560px] flex flex-col justify-start items-start gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-6 md:gap-8">
                <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4">
                  <div className="flex justify-start items-center">
                    <div className="justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Transform</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
                    <div className="self-stretch justify-start"><span className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl font-medium font-inter leading-tight sm:leading-snug md:leading-[58px]">Visualize your business before and after </span><span className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl font-bold font-inter leading-tight sm:leading-snug md:leading-[58px]">Xerply</span></div>
                    <div className="self-stretch justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-6 md:leading-7">See the dramatic impact of implementing our intelligent erp solution across your entire organization</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4">
                  <div className="self-stretch py-2 flex flex-col md:flex-row justify-start items-start gap-4 md:gap-6">
                    <div className="flex-1 flex justify-start items-start gap-3 md:gap-4">
                      <ScanSearch className="w-6 h-6 md:w-8 md:h-8 text-cyan-500 flex-shrink-0" />
                      <div className="flex-1 flex flex-col justify-start items-start gap-2 md:gap-4">
                        <div className="self-stretch justify-start text-neutral-800 text-lg md:text-xl font-medium font-inter leading-relaxed md:leading-loose">Before</div>
                        <div className="self-stretch justify-start text-neutral-800 text-sm md:text-base font-normal font-source-sans-pro leading-normal">Manual processes, fragmented data, and limited insights</div>
                      </div>
                    </div>
                    <div className="flex-1 flex justify-start items-start gap-3 md:gap-4">
                      <Workflow className="w-6 h-6 md:w-8 md:h-8 text-cyan-500 flex-shrink-0" />
                      <div className="flex-1 flex flex-col justify-start items-start gap-2 md:gap-4">
                        <div className="self-stretch justify-start text-neutral-800 text-lg md:text-xl font-medium font-inter leading-relaxed md:leading-loose">After</div>
                        <div className="self-stretch justify-start text-neutral-800 text-sm md:text-base font-normal font-source-sans-pro leading-normal">Automated workflows, unified data, and strategic decision-making</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row max-sm:w-full justify-start items-center gap-6">
                <Button variant="filled" size="lg" className="w-full sm:w-auto">
                  Explore
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
