import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui';

export type PageType = 'home' | 'solutions' | 'features' | 'pricing' | 'about' | 'contact';

interface FooterProps {
  currentPage?: PageType;
  onNavigate: (page: PageType) => void;
}

export default function Footer({ currentPage, onNavigate }: FooterProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  
  const handleNavigation = (page: PageType) => {
    onNavigate(page);
  };

  const getLinkClass = (isActive?: boolean) => {
    const baseClass = "flex-1 justify-start text-sm font-normal font-source-sans-pro leading-tight cursor-pointer transition-colors hover:text-primary-600";
    return isActive 
      ? `${baseClass} text-primary-600 font-medium`
      : `${baseClass} text-neutral-800`;
  };

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="w-full self-stretch px-4 md:px-8 lg:px-16 py-10 md:py-16 lg:py-20 bg-neutral-50 flex flex-col justify-start items-center gap-10 md:gap-16 lg:gap-20">
      <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-10 md:gap-16 lg:gap-20">
        
        {/* Main Footer Content */}
        <div className="self-stretch flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-32">
          
          {/* Newsletter Section */}
          <div className="w-full lg:w-[500px] flex flex-col justify-start items-start gap-6">
            <div data-color-scheme="black" className="w-36 h-8 inline-flex justify-start items-center gap-2 cursor-pointer" onClick={() => handleNavigation('home')}>
              <Image alt="Logo" src="/assets/logo/xerply-logo-bl.svg" width={144} height={32} />
            </div>
            <div className="self-stretch justify-start text-neutral-800 text-sm md:text-base font-normal font-source-sans-pro leading-normal">
              Stay updated with the latest ERP innovations and insights
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch flex flex-col sm:flex-row justify-start items-start gap-3 sm:gap-4">
                <div className="w-full sm:flex-1 p-2.5 bg-black-alpha-1 rounded-md outline outline-1 outline-black-alpha-2/20 flex justify-start items-center gap-2">
                  <input 
                    type="email"
                    placeholder="Email"
                    className="flex-1 bg-transparent outline-none text-neutral-800 text-sm md:text-base font-normal font-source-sans-pro leading-normal placeholder:text-black-alpha-6"
                  />
                </div>
                <Button variant="outline" size="md" className="w-full sm:w-auto">
                  Subscribe
                </Button>
              </div>
              <div className="self-stretch justify-start text-neutral-800 text-xs font-normal font-source-sans-pro leading-none">
                By subscribing, you agree to our privacy policy and consent to receive updates.
              </div>
            </div>
          </div>

          {/* Links Section - Desktop */}
          <div className="hidden lg:flex flex-1 justify-start items-start gap-10">
            {/* Company Column */}
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="self-stretch justify-start text-neutral-800 text-base font-semibold font-source-sans-pro leading-normal">Company</div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch py-2 inline-flex justify-start items-start" onClick={() => handleNavigation('about')}>
                  <div className={getLinkClass(currentPage === 'about')}>About us</div>
                </div>
                <div className="self-stretch py-2 inline-flex justify-start items-start">
                  <div className="flex-1 justify-start text-neutral-800 text-sm font-normal font-source-sans-pro leading-tight cursor-pointer transition-colors hover:text-primary-600">Careers</div>
                </div>
                <div className="self-stretch py-2 inline-flex justify-start items-start">
                  <div className="flex-1 justify-start text-neutral-800 text-sm font-normal font-source-sans-pro leading-tight cursor-pointer transition-colors hover:text-primary-600">Press</div>
                </div>
                <div className="self-stretch py-2 inline-flex justify-start items-start" onClick={() => handleNavigation('contact')}>
                  <div className={getLinkClass(currentPage === 'contact')}>Contact</div>
                </div>
                <div className="self-stretch py-2 inline-flex justify-start items-start" onClick={() => handleNavigation('solutions')}>
                  <div className={getLinkClass(currentPage === 'solutions')}>Solutions</div>
                </div>
              </div>
            </div>

            {/* Product Column */}
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="self-stretch justify-start text-neutral-800 text-base font-semibold font-source-sans-pro leading-normal">Product</div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch py-2 inline-flex justify-start items-start" onClick={() => handleNavigation('features')}>
                  <div className={getLinkClass(currentPage === 'features')}>Features</div>
                </div>
                <div className="self-stretch py-2 inline-flex justify-start items-start" onClick={() => handleNavigation('pricing')}>
                  <div className={getLinkClass(currentPage === 'pricing')}>Pricing</div>
                </div>
                <div className="self-stretch py-2 inline-flex justify-start items-start">
                  <div className="flex-1 justify-start text-neutral-800 text-sm font-normal font-source-sans-pro leading-tight cursor-pointer transition-colors hover:text-primary-600">Integrations</div>
                </div>
                <div className="self-stretch py-2 inline-flex justify-start items-start">
                  <div className="flex-1 justify-start text-neutral-800 text-sm font-normal font-source-sans-pro leading-tight cursor-pointer transition-colors hover:text-primary-600">Resources</div>
                </div>
                <div className="self-stretch py-2 inline-flex justify-start items-start">
                  <div className="flex-1 justify-start text-neutral-800 text-sm font-normal font-source-sans-pro leading-tight cursor-pointer transition-colors hover:text-primary-600">Blog</div>
                </div>
              </div>
            </div>

            {/* Follow us Column */}
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
              <div className="self-stretch justify-start text-neutral-800 text-base font-semibold font-source-sans-pro leading-normal">Follow us</div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <a href="#" className="self-stretch py-2 inline-flex justify-start items-center gap-3 cursor-pointer transition-colors hover:text-primary-600">
                  <Image alt="Facebook" src="/assets/icons/Facebook.svg" width={24} height={24} />
                  <div className="justify-start text-neutral-800 text-sm font-normal font-source-sans-pro leading-tight">Facebook</div>
                </a>
                <a href="#" className="self-stretch py-2 inline-flex justify-start items-center gap-3 cursor-pointer transition-colors hover:text-primary-600">
                  <Image alt="Instagram" src="/assets/icons/Instagram.svg" width={24} height={24} />
                  <div className="justify-start text-neutral-800 text-sm font-normal font-source-sans-pro leading-tight">Instagram</div>
                </a>
                <a href="#" className="self-stretch py-2 inline-flex justify-start items-center gap-3 cursor-pointer transition-colors hover:text-primary-600">
                  <Image alt="X" src="/assets/icons/X.svg" width={24} height={24} />
                  <div className="justify-start text-neutral-800 text-sm font-normal font-source-sans-pro leading-tight">X</div>
                </a>
                <a href="#" className="self-stretch py-2 inline-flex justify-start items-center gap-3 cursor-pointer transition-colors hover:text-primary-600">
                  <Image alt="LinkedIn" src="/assets/icons/LinkedIn.svg" width={24} height={24} />
                  <div className="justify-start text-neutral-800 text-sm font-normal font-source-sans-pro leading-tight">LinkedIn</div>
                </a>
                <a href="#" className="self-stretch py-2 inline-flex justify-start items-center gap-3 cursor-pointer transition-colors hover:text-primary-600">
                  <Image alt="YouTube" src="/assets/icons/YouTube.svg" width={24} height={24} />
                  <div className="justify-start text-neutral-800 text-sm font-normal font-source-sans-pro leading-tight">YouTube</div>
                </a>
              </div>
            </div>
          </div>

          {/* Links Section - Mobile Accordions */}
          <div className="lg:hidden w-full flex flex-col gap-4">
            {/* Company Accordion */}
            <div className="border-b border-neutral-200">
              <button
                className="w-full py-4 flex justify-between items-center text-left"
                onClick={() => toggleAccordion('company')}
              >
                <span className="text-neutral-800 text-base font-semibold font-source-sans-pro">Company</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openAccordion === 'company' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'company' ? 'max-h-96 mb-4' : 'max-h-0'}`}>
                <div className="flex flex-col gap-3">
                  <div className="py-2 cursor-pointer" onClick={() => handleNavigation('about')}>
                    <div className={getLinkClass(currentPage === 'about')}>About us</div>
                  </div>
                  <div className="py-2">
                    <div className="text-neutral-800 text-sm font-normal font-source-sans-pro">Careers</div>
                  </div>
                  <div className="py-2">
                    <div className="text-neutral-800 text-sm font-normal font-source-sans-pro">Press</div>
                  </div>
                  <div className="py-2 cursor-pointer" onClick={() => handleNavigation('contact')}>
                    <div className={getLinkClass(currentPage === 'contact')}>Contact</div>
                  </div>
                  <div className="py-2 cursor-pointer" onClick={() => handleNavigation('solutions')}>
                    <div className={getLinkClass(currentPage === 'solutions')}>Solutions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Accordion */}
            <div className="border-b border-neutral-200">
              <button
                className="w-full py-4 flex justify-between items-center text-left"
                onClick={() => toggleAccordion('product')}
              >
                <span className="text-neutral-800 text-base font-semibold font-source-sans-pro">Product</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openAccordion === 'product' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'product' ? 'max-h-96 mb-4' : 'max-h-0'}`}>
                <div className="flex flex-col gap-3">
                  <div className="py-2 cursor-pointer" onClick={() => handleNavigation('features')}>
                    <div className={getLinkClass(currentPage === 'features')}>Features</div>
                  </div>
                  <div className="py-2 cursor-pointer" onClick={() => handleNavigation('pricing')}>
                    <div className={getLinkClass(currentPage === 'pricing')}>Pricing</div>
                  </div>
                  <div className="py-2">
                    <div className="text-neutral-800 text-sm font-normal font-source-sans-pro">Integrations</div>
                  </div>
                  <div className="py-2">
                    <div className="text-neutral-800 text-sm font-normal font-source-sans-pro">Resources</div>
                  </div>
                  <div className="py-2">
                    <div className="text-neutral-800 text-sm font-normal font-source-sans-pro">Blog</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow us Accordion */}
            <div className="border-b border-neutral-200">
              <button
                className="w-full py-4 flex justify-between items-center text-left"
                onClick={() => toggleAccordion('follow')}
              >
                <span className="text-neutral-800 text-base font-semibold font-source-sans-pro">Follow us</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openAccordion === 'follow' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'follow' ? 'max-h-96 mb-4' : 'max-h-0'}`}>
                <div className="flex flex-col gap-3">
                  <a href="#" className="py-2 flex items-center gap-3">
                    <Image alt="Facebook" src="/assets/icons/Facebook.svg" width={24} height={24} />
                    <div className="text-neutral-800 text-sm font-normal font-source-sans-pro">Facebook</div>
                  </a>
                  <a href="#" className="py-2 flex items-center gap-3">
                    <Image alt="Instagram" src="/assets/icons/Instagram.svg" width={24} height={24} />
                    <div className="text-neutral-800 text-sm font-normal font-source-sans-pro">Instagram</div>
                  </a>
                  <a href="#" className="py-2 flex items-center gap-3">
                    <Image alt="X" src="/assets/icons/X.svg" width={24} height={24} />
                    <div className="text-neutral-800 text-sm font-normal font-source-sans-pro">X</div>
                  </a>
                  <a href="#" className="py-2 flex items-center gap-3">
                    <Image alt="LinkedIn" src="/assets/icons/LinkedIn.svg" width={24} height={24} />
                    <div className="text-neutral-800 text-sm font-normal font-source-sans-pro">LinkedIn</div>
                  </a>
                  <a href="#" className="py-2 flex items-center gap-3">
                    <Image alt="YouTube" src="/assets/icons/YouTube.svg" width={24} height={24} />
                    <div className="text-neutral-800 text-sm font-normal font-source-sans-pro">YouTube</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="self-stretch flex flex-col justify-start items-start gap-6 md:gap-8">
          <div className="self-stretch h-px bg-neutral-200"></div>
          <div className="self-stretch flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="justify-start text-neutral-800 text-xs md:text-sm font-normal font-source-sans-pro leading-tight">
              © 2025 Xerply ERP. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row justify-start items-start gap-4 md:gap-6">
              <a href="#" className="justify-start text-neutral-800 text-xs md:text-sm font-normal font-source-sans-pro underline leading-tight cursor-pointer transition-colors hover:text-primary-600">
                Privacy policy
              </a>
              <a href="#" className="justify-start text-neutral-800 text-xs md:text-sm font-normal font-source-sans-pro underline leading-tight cursor-pointer transition-colors hover:text-primary-600">
                Terms of service
              </a>
              <a href="#" className="justify-start text-neutral-800 text-xs md:text-sm font-normal font-source-sans-pro underline leading-tight cursor-pointer transition-colors hover:text-primary-600">
                Cookie settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
