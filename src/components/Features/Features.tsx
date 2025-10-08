import { Button, AutoCarousel } from '../ui';
import { BellDot, ChevronRight, Unplug } from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';

export default function Features() {
  // Parallax refs for sections
  const conversationalImageRef = useParallax<HTMLDivElement>();
  const notificationTextRef = useParallax<HTMLDivElement>();
  const notificationImageRef = useParallax<HTMLDivElement>();
  const integrationTextRef = useParallax<HTMLDivElement>();
  const integrationImageRef = useParallax<HTMLDivElement>();
  
  return (
    <div className="self-stretch h-auto min-h-screen relative overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Background decorative element */}
      <div className="w-[801.29px] h-[801.29px] left-[-354.38px] top-[-129.99px] absolute origin-top-left rotate-[-15deg] bg-primary-50 rounded-[236.46px]" />
      <div className='h-full flex flex-col justify-center items-center gap-12 md:gap-16 lg:gap-20 px-4 md:px-8 lg:px-16 z-10 relative'>
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20 py-32">
          <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-6 md:gap-8">
            <div className="self-stretch flex flex-col justify-start items-center gap-3 md:gap-4">
              <div className="flex justify-start items-center">
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

      { /* Section - Conversational */}
      <div className="w-full self-stretch px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28 flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20 overflow-hidden">
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20">
          {/* Header */}
          <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-3 md:gap-4">
            <div className="flex justify-start items-center">
              <div className="justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Conversational</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-4 md:gap-6">
              <div className="self-stretch text-center justify-start">
                <span className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl font-medium font-inter leading-tight sm:leading-snug md:leading-[58px]">Chat with your </span>
                <span className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl font-bold font-inter leading-tight sm:leading-snug md:leading-[58px]">data</span>
              </div>
              <div className="self-stretch text-center justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-6 md:leading-7">
                Interact with your business data through natural language conversations
              </div>
            </div>
          </div>

          {/* Content Card */}
          <div ref={conversationalImageRef} className="parallax-image self-stretch flex flex-col justify-start items-start gap-6 md:gap-8">
            <div className="self-stretch flex justify-start items-start">
              <div className="flex-1 min-h-[500px] md:min-h-[600px] lg:h-[640px] bg-neutral-100 rounded-lg outline outline-1 outline-black-alpha-1 flex flex-col lg:flex-row justify-center items-center overflow-hidden">
                {/* Chat Visual Section - Responsive: stacked on mobile, side-by-side on desktop */}
                <div className="flex flex-1 self-stretch w-full lg:min-w-[640px] flex-col justify-center items-center p-4 md:p-6">
                  {/* Mobile & Tablet: Simple stacked layout */}
                  <div className="w-full flex flex-col gap-4 lg:hidden">
                    <img
                      alt="Patterns"
                      src="/assets/images/ai-business-image.png"
                      className="w-full h-64 rounded-lg object-cover"
                    />
                    {/* User Message */}
                    <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                      <div className="self-stretch p-4 bg-neutral-50 rounded-2xl flex flex-col justify-center items-start gap-4">
                        <div className="self-stretch flex flex-col justify-start items-start gap-3 overflow-hidden">
                          <div className="self-stretch flex justify-start items-start gap-2 overflow-hidden">
                            <img alt="Icon" src="/assets/images/Avatar.svg" className="w-6 h-6 rounded-full flex-shrink-0" />
                            <div className="flex-1 justify-start text-primary-600 text-sm font-normal font-source-sans-pro leading-tight">
                              Hey, can you check out the latest sales data?
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* AI Response */}
                    <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                      <div className="self-stretch p-4 bg-primary-50 rounded-2xl flex flex-col justify-center items-start gap-4">
                        <div className="self-stretch flex flex-col justify-start items-start gap-3 overflow-hidden">
                          <div className="self-stretch flex justify-start items-start gap-2 overflow-hidden">
                            <div className="w-6 h-6 relative flex-shrink-0">
                              <img alt="Icon" src="/assets/icons/xerply-symbol.svg" className="w-full h-full" />
                            </div>
                            <div className="flex-1 justify-start text-primary-600 text-sm font-normal font-source-sans-pro leading-tight">
                              I get it! I'm here to help you. Your data is currently being processed, and the report will be ready in just a moment...
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Loading State */}
                    <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                      <div className="self-stretch p-4 opacity-50 bg-neutral-50 rounded-2xl flex flex-col justify-center items-start gap-4">
                        <div className="opacity-50 flex flex-col justify-start items-start gap-3 overflow-hidden">
                          <div className="flex justify-start items-start gap-2 overflow-hidden">
                            <div className="w-6 h-6 bg-primary-200 rounded-full flex-shrink-0" />
                            <div className="flex flex-col justify-start items-start gap-1 overflow-hidden">
                              <div className="w-10 h-2.5 bg-primary-200 rounded-full" />
                              <div className="flex justify-start items-start gap-1 overflow-hidden">
                                <div className="w-12 h-2.5 bg-primary-100 rounded-md" />
                                <div className="w-4 h-2.5 bg-primary-100 rounded-md" />
                                <div className="w-6 h-2.5 bg-primary-100 rounded-md" />
                              </div>
                              <div className="flex justify-start items-start gap-1 overflow-hidden">
                                <div className="w-9 h-2.5 bg-primary-100 rounded-md" />
                                <div className="w-5 h-2.5 bg-primary-100 rounded-md" />
                                <div className="w-12 h-2.5 bg-primary-100 rounded-md" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop: Complex positioned layout */}
                  <div className="hidden lg:block w-full max-w-[592px] h-[592px] relative">
                    <img
                      alt="Patterns"
                      src="/assets/images/ai-business-image.png"
                      className="w-96 h-auto absolute left-0 top-0 rounded-lg object-cover"
                    />
                    <div className="w-full max-w-[384px] p-4 absolute left-[204px] top-[70px] bg-white-alpha-5 backdrop-blur-lg rounded-2xl shadow-[8px_8px_24px_0px_rgba(67,67,67,0.05)] flex flex-col justify-start items-center gap-6">
                      {/* User Message */}
                      <div className="self-stretch pl-6 flex flex-col justify-start items-start gap-2.5">
                        <div className="self-stretch p-6 bg-neutral-50 rounded-2xl flex flex-col justify-center items-start gap-6">
                          <div className="self-stretch flex flex-col justify-start items-start gap-5 overflow-hidden">
                            <div className="self-stretch flex justify-start items-start gap-3 overflow-hidden">
                              <img alt="Icon" src="/assets/images/Avatar.svg" className="w-8 h-8 rounded-full flex-shrink-0" />
                              <div className="flex-1 justify-start text-primary-600 text-base font-normal font-source-sans-pro leading-normal">
                                Hey, can you check out the latest sales data?
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* AI Response */}
                      <div className="self-stretch pr-6 flex flex-col justify-start items-start gap-2.5">
                        <div className="self-stretch p-6 bg-primary-50 rounded-2xl flex flex-col justify-center items-start gap-6">
                          <div className="self-stretch flex flex-col justify-start items-start gap-5 overflow-hidden">
                            <div className="self-stretch flex justify-start items-start gap-3 overflow-hidden">
                              <div className="w-8 h-8 relative flex-shrink-0">
                                <img alt="Icon" src="/assets/icons/xerply-symbol.svg" className="w-full h-full" />
                              </div>
                              <div className="flex-1 justify-start text-primary-600 text-base font-normal font-source-sans-pro leading-normal">
                                I get it! I'm here to help you. Your data is currently being processed, and the report will be ready in just a moment...
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Loading State */}
                      <div className="self-stretch pl-6 flex flex-col justify-start items-start gap-2.5">
                        <div className="self-stretch p-6 opacity-50 bg-neutral-50 rounded-2xl flex flex-col justify-center items-start gap-6">
                          <div className="opacity-50 flex flex-col justify-start items-start gap-5 overflow-hidden">
                            <div className="flex justify-start items-start gap-3 overflow-hidden">
                              <div className="w-8 h-8 bg-primary-200 rounded-full flex-shrink-0" />
                              <div className="flex flex-col justify-start items-start gap-1 overflow-hidden">
                                <div className="w-12 h-3 bg-primary-200 rounded-full" />
                                <div className="flex justify-start items-start gap-1 overflow-hidden">
                                  <div className="w-16 h-3 bg-primary-100 rounded-md" />
                                  <div className="w-5 h-3 bg-primary-100 rounded-md" />
                                  <div className="w-8 h-3 bg-primary-100 rounded-md" />
                                </div>
                                <div className="flex justify-start items-start gap-1 overflow-hidden">
                                  <div className="w-11 h-3 bg-primary-100 rounded-md" />
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

                {/* AutoCarousel Section */}
                <AutoCarousel
                  items={[
                    // Slide 1
                    <div key="slide-1" className="flex-1 self-stretch p-6 md:p-8 lg:p-12 relative flex flex-col justify-center items-start gap-6 md:gap-8">
                      <div className="self-stretch flex flex-col justify-start items-start gap-2">
                        <div className="flex justify-start items-center">
                          <div className="justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">AI</div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
                          <div className="self-stretch justify-start">
                            <span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-inter leading-tight sm:leading-snug md:leading-[58px]">Intuitive </span>
                            <span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-inter leading-tight sm:leading-snug md:leading-[58px]">data exploration</span>
                          </div>
                          <div className="self-stretch justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-6 md:leading-7">
                            Ask complex questions and receive instant, context-aware insights directly from your enterprise data.
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-4 md:gap-6 w-full sm:w-auto">
                        <Button variant="filled" size="lg" className="w-full sm:w-auto">
                          Explore
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                          Contact us
                        </Button>
                      </div>
                    </div>,
                    // Slide 2
                    <div key="slide-2" className="flex-1 self-stretch p-6 md:p-8 lg:p-12 relative flex flex-col justify-center items-start gap-6 md:gap-8">
                      <div className="self-stretch flex flex-col justify-start items-start gap-2">
                        <div className="flex justify-start items-center">
                          <div className="justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">AI</div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
                          <div className="self-stretch justify-start">
                            <span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-inter leading-tight sm:leading-snug md:leading-[58px]">AI agent with contextual </span>
                            <span className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-inter leading-tight sm:leading-snug md:leading-[58px]">memory and learning</span>
                          </div>
                          <div className="self-stretch justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-6 md:leading-7">
                            Our AI remembers previous interactions to provide more personalized and accurate business recommendations.
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-4 md:gap-6 w-full sm:w-auto">
                        <Button variant="filled" size="lg" className="w-full sm:w-auto">
                          Explore
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                          Contact us
                        </Button>
                      </div>
                    </div>
                  ]}
                  interval={5000}
                  showDots={true}
                  dotsPosition="custom"
                  className="flex-1 self-stretch"
                  dotsClassName="w-20 md:w-28 right-4 md:right-8 bottom-4 md:bottom-8 lg:top-[607px] absolute flex justify-start items-center gap-2 md:gap-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      { /* Section - Notification */}
      <div className="self-stretch px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28 bg-primary-50 flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20 overflow-hidden">
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-12 md:gap-16 lg:gap-20">
          <div className="self-stretch flex flex-col-reverse lg:flex-row justify-start items-center gap-8 md:gap-12 lg:gap-20">
            {/* Text Content - First on mobile, second on desktop */}
            <div ref={notificationTextRef} className="parallax-from-left flex-1 w-full flex flex-col justify-start items-start gap-6 md:gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
                <div className="flex justify-start items-center">
                  <div className="justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Notification</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
                  <div className="self-stretch justify-start">
                    <span className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl font-bold font-inter leading-tight sm:leading-snug md:leading-[58px]">Real-time</span>
                    <span className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl font-medium font-inter leading-tight sm:leading-snug md:leading-[58px]"> smart notifications and insights</span>
                  </div>
                  <div className="self-stretch justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-6 md:leading-7">
                    Receive instant alerts and actionable insights to make faster, data-driven business decisions.
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center gap-4 md:gap-6 w-full sm:w-auto">
                <Button variant="filled" size="lg" className="w-full sm:w-auto">
                  Explore
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Contact us
                </Button>
              </div>
            </div>
            
            {/* Image Section - Second on mobile, first on desktop */}
            <div ref={notificationImageRef} className="parallax-from-right w-full lg:w-[600px] min-h-[400px] md:min-h-[500px] lg:h-[640px] relative flex justify-center lg:justify-end items-center lg:items-end">
              {/* Main Image */}
              <img 
                alt="Notifications" 
                src="/assets/images/notification.png" 
                className="w-full h-auto md:w-80 lg:w-[480px] lg:h-[520px] relative lg:absolute lg:right-0 lg:bottom-0" 
              />
              
              {/* Notification Cards - Hidden on mobile, visible on desktop */}
              <div className="hidden lg:block w-96 min-w-72 p-6 left-0 top-64 absolute opacity-50 bg-neutral-50 rounded-2xl shadow-[0px_16px_40px_-8px_rgba(88,92,95,0.16)] flex-col justify-center items-start gap-6">
                <div className="flex justify-start items-start gap-3 overflow-hidden">
                  <div className="p-2 bg-primary-200 rounded-[48px] flex justify-start items-center gap-2.5">
                    <BellDot className="w-6 h-6 relative overflow-hidden" />
                  </div>
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
              <div className="hidden lg:block w-96 min-w-72 p-6 left-0 top-24 absolute bg-neutral-50 rounded-2xl shadow-[0px_16px_40px_-8px_rgba(88,92,95,0.16)] flex-col justify-center items-start gap-6">
                <div className="flex justify-start items-start gap-3 overflow-hidden">
                  <div className="p-2 bg-primary-200 rounded-[48px] flex justify-start items-center gap-2.5">
                    <BellDot className="w-6 h-6 relative overflow-hidden" />
                  </div>
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
      { /* Section - Integration */}
      <div className="self-stretch px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28 flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20 overflow-hidden max-sm:mt-24">
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-12 md:gap-16 lg:gap-20">
          <div className="self-stretch flex flex-col lg:flex-row justify-start items-center gap-8 md:gap-12 lg:gap-20">
            {/* Image Section - First on mobile, first on desktop */}
            <div ref={integrationImageRef} className="parallax-from-left image-wrapper w-full lg:flex-1 min-h-[500px] md:min-h-[550px] lg:h-[592px] relative flex items-center justify-center">
              {/* Main Image */}
              <img alt="Integrations" src="/assets/images/young-woman.png" className="w-64 h-auto md:w-80 lg:w-80 rounded-lg relative lg:absolute left-16 lg:left-56 lg:top-0" />
              {/* Integration Flow - Vertical in all screen sizes */}
              <div className="absolute left-0 md:left-4 lg:left-0 top-4 md:top-[17.82px] flex flex-col justify-center items-center gap-0.5">
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
            
            {/* Text Content - Second on mobile and desktop */}
            <div ref={integrationTextRef} className="parallax-from-right flex-1 w-full flex flex-col justify-start items-start gap-6 md:gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
                <Unplug className="hidden sm:block w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-cyan-500" />
                <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
                  <div className="self-stretch justify-start">
                    <span className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl font-medium font-inter leading-tight sm:leading-snug md:leading-[58px]">Seamless software and platform </span>
                    <span className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl font-bold font-inter leading-tight sm:leading-snug md:leading-[58px]">integrations</span>
                  </div>
                  <div className="self-stretch justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-6 md:leading-7">
                    Connect Xerply ERP with your existing tools to create a unified business ecosystem.
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-start items-center gap-4 md:gap-6 w-full sm:w-auto">
                <Button variant="filled" size="lg" className="w-full sm:w-auto">
                  View integrations
                </Button>
                <Button variant="ghost" size="lg" icon={ChevronRight} iconPosition="right" className="w-full sm:w-auto">
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
