import React from 'react';
import Image from 'next/image';
import { Button } from '../ui';

export type PageType = 'home' | 'solutions' | 'features' | 'pricing' | 'about' | 'contact';

interface FooterProps {
  currentPage?: PageType;
  onNavigate: (page: PageType) => void;
}

export default function Footer({ currentPage, onNavigate }: FooterProps) {
  
  const handleNavigation = (page: PageType) => {
    onNavigate(page);
  };

  const getLinkClass = (isActive?: boolean) => {
    const baseClass = "flex-1 justify-start text-sm font-normal font-source-sans-pro leading-tight cursor-pointer transition-colors hover:text-primary-600";
    return isActive 
      ? `${baseClass} text-primary-600 font-medium`
      : `${baseClass} text-neutral-800`;
  };

  return (
    <div className="w-full self-stretch h-[541px] px-16 py-20 bg-neutral-50 inline-flex flex-col justify-start items-center gap-20 overflow-hidden">
      <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-20">
        <div className="self-stretch h-60 inline-flex justify-start items-start gap-32">
          <div className="w-[500px] inline-flex flex-col justify-start items-start gap-6">
            <div data-color-scheme="black" className="w-36 h-8 inline-flex justify-start items-center gap-2 cursor-pointer" onClick={() => handleNavigation('home')}>
              <Image alt="Logo" src="/assets/logo/xerply-logo-bl.svg" width={144} height={32} />
            </div>
            <div className="self-stretch justify-start text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">Stay updated with the latest ERP innovations and insights</div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch inline-flex justify-start items-start gap-4">
                <div className="flex-1 p-2.5 bg-black-alpha-1 rounded-md outline outline-1 outline-black-alpha-2/20 flex justify-start items-center gap-2">
                  <div className="flex-1 justify-start text-black-alpha-6 text-base font-normal font-source-sans-pro leading-normal">Email</div>
                </div>
                <Button variant="outline" size="lg">
                  Subscribe
                </Button>
              </div>
              <div className="self-stretch justify-start text-neutral-800 text-xs font-normal font-source-sans-pro leading-none">By subscribing, you agree to our privacy policy and consent to receive updates.</div>
            </div>
          </div>
          <div className="flex-1 flex justify-start items-start gap-10">
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
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
              <div className="self-stretch justify-start text-neutral-800 text-base font-semibold font-source-sans-pro leading-normal">Follow us</div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch py-2 inline-flex justify-start items-center gap-3 cursor-pointer transition-colors hover:text-primary-600">
                  <Image alt="Icon" src="/assets/icons/Facebook.svg" width={24} height={24} />
                  <div className="justify-start text-neutral-800 text-sm font-normal font-source-sans-pro leading-tight">Facebook</div>
                </div>
                <div className="self-stretch py-2 inline-flex justify-start items-center gap-3 cursor-pointer transition-colors hover:text-primary-600">
                  <Image alt="Icon" src="/assets/icons/Instagram.svg" width={24} height={24} />
                  <div className="justify-start text-neutral-800 text-sm font-normal font-source-sans-pro leading-tight">Instagram</div>
                </div>
                <div className="self-stretch py-2 inline-flex justify-start items-center gap-3 cursor-pointer transition-colors hover:text-primary-600">
                  <Image alt="Icon" src="/assets/icons/X.svg" width={24} height={24} />
                  <div className="justify-start text-neutral-800 text-sm font-normal font-source-sans-pro leading-tight">X</div>
                </div>
                <div className="self-stretch py-2 inline-flex justify-start items-center gap-3 cursor-pointer transition-colors hover:text-primary-600">
                  <Image alt="Icon" src="/assets/icons/LinkedIn.svg" width={24} height={24} />
                  <div className="justify-start text-neutral-800 text-sm font-normal font-source-sans-pro leading-tight">LinkedIn</div>
                </div>
                <div className="self-stretch py-2 inline-flex justify-start items-center gap-3 cursor-pointer transition-colors hover:text-primary-600">
                  <Image alt="Icon" src="/assets/icons/YouTube.svg" width={24} height={24} />
                  <div className="justify-start text-neutral-800 text-sm font-normal font-source-sans-pro leading-tight">YouTube</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-8">
          <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-black-alpha-1/5"></div>
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="justify-start text-neutral-800 text-sm font-normal font-source-sans-pro leading-tight">© 2025 Xerply ERP. All rights reserved.</div>
            <div className="flex justify-start items-start gap-6">
              <div className="justify-start text-neutral-800 text-sm font-normal font-source-sans-pro underline leading-tight cursor-pointer transition-colors hover:text-primary-600">Privacy policy</div>
              <div className="justify-start text-neutral-800 text-sm font-normal font-source-sans-pro underline leading-tight cursor-pointer transition-colors hover:text-primary-600">Terms of service</div>
              <div className="justify-start text-neutral-800 text-sm font-normal font-source-sans-pro underline leading-tight cursor-pointer transition-colors hover:text-primary-600">Cookie settings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}