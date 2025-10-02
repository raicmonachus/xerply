import React from 'react';
import Image from 'next/image';

export type PageType = 'home' | 'solutions' | 'features' | 'pricing' | 'about' | 'contact';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const getNavItemClass = (page: PageType) => {
    const baseClass = "justify-start text-base font-medium font-['Inter'] leading-tight cursor-pointer transition-colors hover:text-primary-700";
    return currentPage === page 
      ? `${baseClass} text-primary-600 font-semibold`
      : `${baseClass} text-neutral-600`;
  };

  return (
    <div className="navbar w-full pt-8 left-0 top-0 fixed flex flex-col justify-center items-center z-50">
      <div className="px-6 py-5 bg-white-alpha-7 backdrop-blur-lg rounded-[20px] shadow-[0px_2px_4px_0px_rgba(27,28,29,0.04)] inline-flex justify-start items-center gap-24 overflow-hidden">
        <div className="flex justify-center items-center gap-1 cursor-pointer" onClick={() => onNavigate('home')}>
          <Image alt="Logo" src="/assets/logo/xerply-logo.svg" width={140} height={32} />
        </div>
        <div className="flex justify-start items-start gap-8">
          <div className="flex justify-start items-center gap-1.5" onClick={() => onNavigate('home')}>
            <div className={getNavItemClass('home')}>Home</div>
          </div>
          <div className="flex justify-start items-center gap-1.5" onClick={() => onNavigate('solutions')}>
            <div className={getNavItemClass('solutions')}>Solutions</div>
          </div>
          <div className="flex justify-start items-center gap-1.5" onClick={() => onNavigate('features')}>
            <div className={getNavItemClass('features')}>Features</div>
          </div>
          <div className="flex justify-start items-center gap-1.5" onClick={() => onNavigate('pricing')}>
            <div className={getNavItemClass('pricing')}>Pricing</div>
          </div>
          <div className="flex justify-start items-center gap-1.5" onClick={() => onNavigate('about')}>
            <div className={getNavItemClass('about')}>About Us</div>
          </div>
          <div className="flex justify-start items-center gap-1.5" onClick={() => onNavigate('contact')}>
            <div className={getNavItemClass('contact')}>Contact</div>
          </div>
        </div>
        <div className="flex justify-start items-center gap-3.5">
          <div className="px-6 py-2 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-primary-600 flex justify-center items-center">
            <div className="justify-start text-primary-600 text-sm font-semibold font-['Inter'] leading-tight">Log in</div>
          </div>
          <div className="px-6 py-2 bg-primary-600 rounded-lg flex justify-center items-center">
            <div className="justify-start text-white-alpha-10/95 text-sm font-semibold font-['Inter'] leading-tight">Try it free</div>
          </div>
        </div>
      </div>
    </div>
  );
}
