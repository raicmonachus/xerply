import { Button, Timeline, TeamCarousel } from '../ui';
import type { TimelineItem } from '../ui/Timeline/types';
import type { TeamMember } from '../ui/TeamCarousel/TeamCarousel';
import { ChevronRight, Telescope, Compass, MessageCircleHeart  } from 'lucide-react';

const timelineData: TimelineItem[] = [
  {
    year: '2023',
    title: 'Founding of Xerply ERP Agentic',
    description: 'Initial concept developed to revolutionize enterprise resource planning for SMEs. First prototype created.',
    image: '/assets/images/placeholder/Placeholder_Image.png',
    imageAlt: '2023 - Founding Year'
  },
  {
    year: '2024',
    title: 'AI Integration & Platform Launch',
    description: 'Successfully integrated advanced AI capabilities and launched the full platform to early adopters. Achieved first major enterprise client.',
    image: '/assets/images/placeholder/Placeholder_Image.png',
    imageAlt: '2024 - Platform Launch'
  },
  {
    year: '2025',
    title: 'Global Expansion & Innovation',
    description: 'Expanding to international markets with multilingual support and advanced automation features. Focus on scalability and enterprise-grade security.',
    image: '/assets/images/placeholder/Placeholder_Image.png',
    imageAlt: '2025 - Global Expansion'
  }
];

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Eduardo Toloza',
    role: 'CEO, Founder',
    bio: 'Technology strategist with 15 years of enterprise software development experience',
    image: '/assets/images/placeholder/Placeholder_Image_80x80.svg',
    linkedIn: '/linkedin',
    twitter: '/twitter'
  },
  {
    id: 2,
    name: 'Maria Garcia',
    role: 'CTO, Co-Founder',
    bio: 'AI and machine learning expert specializing in enterprise automation solutions',
    image: '/assets/images/placeholder/Placeholder_Image_80x80.svg',
    linkedIn: '/linkedin',
    twitter: '/twitter'
  },
  {
    id: 3,
    name: 'Carlos Mendez',
    role: 'Head of Product',
    bio: 'Product visionary with a track record of launching successful SaaS platforms',
    image: '/assets/images/placeholder/Placeholder_Image_80x80.svg',
    linkedIn: '/linkedin',
    twitter: '/twitter'
  }
];

export default function AboutUs() {
  return (
    <div className="self-stretch h-auto min-h-screen relative overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Background decorative element */}
      <div className="w-[801.29px] h-[801.29px] left-[-354.38px] top-[-41.99px] absolute origin-top-left rotate-[-15deg] bg-primary-50 rounded-[236.46px]" />
      <div className='h-full flex flex-col justify-center items-center gap-12 md:gap-16 lg:gap-20 px-4 md:px-8 lg:px-16 z-10 relative'>
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20 py-32">
          <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-6 md:gap-8">
            <div className="self-stretch flex flex-col justify-start items-center gap-3 md:gap-4">
              <div className="flex justify-start items-center">
                <div className="justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Transformative</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-center gap-4 md:gap-6">
                <div className="self-stretch text-center justify-start">
                  <span className="text-neutral-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-inter leading-tight sm:leading-snug md:leading-[72px] lg:leading-[88px]">Empowering </span>
                  <span className="text-neutral-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-inter leading-tight sm:leading-snug md:leading-[72px] lg:leading-[88px]">business intelligence</span>
                  <span className="text-neutral-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-inter leading-tight sm:leading-snug md:leading-[72px] lg:leading-[88px]"> through innovation</span>
                </div>
                <div className="self-stretch text-center justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-6 md:leading-7">
                  Learn about our mission to revolutionize enterprise resource planning with AI-driven solutions that make complex business operations simple, accessible, and remarkably efficient
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-3 md:gap-4 w-full sm:w-auto">
              <Button variant="filled" size="lg" className="w-full sm:w-auto">
                Try it free
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      { /* Section - Vision & Mision */}
      <div className="self-stretch flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20 overflow-hidden">
        <div className="self-stretch flex flex-col lg:flex-row justify-start items-center lg:items-stretch">
          {/* Text Content */}
          <div className="flex-1 self-stretch px-4 md:px-8 lg:pl-16 lg:pr-20 py-12 md:py-20 lg:py-28 flex flex-col justify-center items-center lg:items-end gap-6 md:gap-8">
            <div className="w-full max-w-[560px] py-2 flex flex-col justify-start items-start gap-6 md:gap-8">
              <div className="self-stretch flex justify-start items-start gap-4 md:gap-6">
                <Telescope className="w-10 h-10 md:w-12 md:h-12 text-cyan-500 flex-shrink-0" />
                <div className="flex-1 flex flex-col justify-start items-start gap-3 md:gap-4">
                  <div className="self-stretch justify-start text-neutral-800 text-2xl md:text-3xl font-medium font-inter leading-8 md:leading-10">Our core vision</div>
                  <div className="self-stretch justify-start text-neutral-800 text-sm md:text-base font-normal font-source-sans-pro leading-normal">
                    Enabling digital transformation through intelligent automation and strategic business insights
                  </div>
                </div>
              </div>
              <div className="self-stretch flex justify-start items-start gap-4 md:gap-6">
                <Compass className="w-10 h-10 md:w-12 md:h-12 text-cyan-500 flex-shrink-0" />
                <div className="flex-1 flex flex-col justify-start items-start gap-3 md:gap-4">
                  <div className="self-stretch justify-start text-neutral-800 text-2xl md:text-3xl font-medium font-inter leading-8 md:leading-10">Our mission</div>
                  <div className="self-stretch justify-start text-neutral-800 text-sm md:text-base font-normal font-source-sans-pro leading-normal">
                    Delivering cutting-edge AI technology that simplifies complex business processes
                  </div>
                </div>
              </div>
              <div className="self-stretch flex justify-start items-start gap-4 md:gap-6">
                <MessageCircleHeart className="w-10 h-10 md:w-12 md:h-12 text-cyan-500 flex-shrink-0" />
                <div className="flex-1 flex flex-col justify-start items-start gap-3 md:gap-4">
                  <div className="self-stretch justify-start text-neutral-800 text-2xl md:text-3xl font-medium font-inter leading-8 md:leading-10">Our values</div>
                  <div className="self-stretch justify-start text-neutral-800 text-sm md:text-base font-normal font-source-sans-pro leading-normal">
                    Commitment to innovation, transparency, and empowering businesses through intelligent technological solutions
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image */}
          <img 
            className="flex-1 self-stretch w-full h-64 md:h-80 lg:h-auto object-cover" 
            src="/assets/images/placeholder/Placeholder_Image.png" 
            alt="About Us Vision and Mission" 
          />
        </div>
      </div>
      { /* Section - Our Team */}
      <div className="self-stretch px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-32 bg-Color-Scheme-1-Background flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20 overflow-hidden max-sm:pt-20">
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20">
          <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-4 md:gap-6">
            <div className="flex justify-start items-center">
              <div className="text-center justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Innovators</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-4 md:gap-6">
              <div className="self-stretch text-center justify-start">
                <span className="text-neutral-800 text-3xl md:text-4xl lg:text-5xl font-medium font-inter leading-tight md:leading-[48px] lg:leading-[58px]">Our </span>
                <span className="text-neutral-800 text-3xl md:text-4xl lg:text-5xl font-bold font-inter leading-tight md:leading-[48px] lg:leading-[58px]">team</span>
              </div>
              <div className="self-stretch text-center justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-normal md:leading-7">
                Meet the visionary professionals driving technological innovation
              </div>
            </div>
          </div>
          
          <TeamCarousel members={teamMembers} />
          
          <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-4 md:gap-6">
            <div className="w-full flex flex-col justify-start items-center gap-4">
              <div className="self-stretch text-center justify-start">
                <span className="text-neutral-800 text-2xl md:text-3xl font-bold font-inter leading-tight md:leading-9">Join</span>
                <span className="text-neutral-800 text-2xl md:text-3xl font-medium font-inter leading-tight md:leading-9"> our team</span>
              </div>
              <div className="self-stretch text-center justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-normal md:leading-7">
                Passionate about transforming business technology? Explore our career opportunities
              </div>
            </div>
            <div className="w-full max-w-80 flex flex-col justify-center items-center gap-4">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Open positions
              </Button>
            </div>
          </div>
        </div>
      </div>
      { /* Section - Timeline */}
      <div className="self-stretch px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-28 bg-primary-50 flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20 overflow-hidden max-sm:pt-20">
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-12 md:gap-16 lg:gap-20">
          <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-4 md:gap-6 mx-auto">
            <div className="flex justify-start items-center">
              <div className="text-center justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Journey</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-4 md:gap-6">
              <div className="self-stretch text-center justify-start">
                <span className="text-neutral-800 text-3xl md:text-4xl lg:text-5xl font-medium font-inter leading-tight md:leading-[48px] lg:leading-[58px]">Our </span>
                <span className="text-neutral-800 text-3xl md:text-4xl lg:text-5xl font-bold font-inter leading-tight md:leading-[48px] lg:leading-[58px]">story</span>
              </div>
              <div className="self-stretch text-center justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-normal md:leading-7">
                From concept to innovation: Discover the milestones that shaped Xerply
              </div>
            </div>
          </div>
          
          <Timeline 
            items={timelineData} 
            defaultActive={0}
            animated={true}
            contentPosition="left"
          />
        </div>
      </div>
      { /* Section - Impact */}
      <div className="self-stretch bg-neutral-200 flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20 overflow-hidden max-sm:pt-20">
        <div className="self-stretch flex flex-col-reverse lg:flex-row justify-start items-center lg:items-stretch">
          {/* Image - First on mobile (reverse), first on desktop */}
          <img 
            className="flex-1 self-stretch w-full h-64 md:h-80 lg:h-auto object-cover" 
            src="/assets/images/placeholder/Placeholder_Image.png" 
            alt="Impact and Sustainability" 
          />
          {/* Text Content */}
          <div className="flex-1 self-stretch px-4 md:px-8 lg:pl-20 lg:pr-16 py-12 md:py-20 lg:py-28 flex flex-col justify-center items-center lg:items-start gap-6 md:gap-8">
            <div className="w-full max-w-[560px] flex flex-col justify-start items-start gap-6 md:gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-6 md:gap-8">
                <div className="self-stretch flex flex-col justify-start items-start gap-3 md:gap-4">
                  <div className="flex justify-start items-center">
                    <div className="text-center justify-start text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Impact</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-4 md:gap-6">
                    <div className="self-stretch justify-start">
                      <span className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl font-medium font-inter leading-tight sm:leading-snug md:leading-[58px]">Committed to sustainable </span>
                      <span className="text-neutral-800 text-3xl sm:text-4xl md:text-5xl font-bold font-inter leading-tight sm:leading-snug md:leading-[58px]">business transformation</span>
                    </div>
                    <div className="self-stretch justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-6 md:leading-7">
                      We believe in creating technology that not only drives business success but also contributes positively to society. Our initiatives focus on digital inclusion and technological education.
                    </div>
                  </div>
                </div>
                <div className="self-stretch py-2 flex justify-start items-start gap-6 md:gap-8 flex-wrap content-start">
                  <img className="w-24 h-9 md:w-32 md:h-12" src="/assets/logo/xerply-logo-bl.svg" alt="Client Logo" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-start items-center gap-4 md:gap-6 w-full sm:w-auto">
                <Button variant="filled" size="lg" className="w-full sm:w-auto">
                  Explore
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
