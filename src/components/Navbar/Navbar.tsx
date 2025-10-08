import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui';

export type PageType = 'home' | 'solutions' | 'features' | 'pricing' | 'about' | 'contact';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getNavItemClass = (page: PageType) => {
    const baseClass = "justify-start text-base font-medium font-['Inter'] leading-tight cursor-pointer transition-colors hover:text-primary-700";
    return currentPage === page 
      ? `${baseClass} text-primary-600 font-semibold`
      : `${baseClass} text-neutral-600`;
  };

  const handleNavigation = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black-alpha-6 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div className="navbar w-full max-w-[95%] pt-4 md:pt-6 lg:pt-8 left-0 right-0 top-0 mx-auto fixed flex flex-col justify-center items-center z-50">
        <div className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-5 bg-white-alpha-7 backdrop-blur-lg md:rounded-[20px] rounded-2xl shadow-[0px_2px_4px_0px_rgba(27,28,29,0.04)] flex justify-between items-center overflow-hidden max-w-screen-2xl">
          
          {/* Logo */}
          <div className="flex justify-center items-center gap-1 cursor-pointer" onClick={() => handleNavigation('home')}>
            <img alt="Logo" src="/assets/logo/xerply-logo.svg" className="w-[120px] h-[28px] md:w-[140px] md:h-[32px]" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-start items-start gap-8">
            <div className="flex justify-start items-center gap-1.5" onClick={() => handleNavigation('home')}>
              <div className={getNavItemClass('home')}>Home</div>
            </div>
            <div className="flex justify-start items-center gap-1.5" onClick={() => handleNavigation('solutions')}>
              <div className={getNavItemClass('solutions')}>Solutions</div>
            </div>
            <div className="flex justify-start items-center gap-1.5" onClick={() => handleNavigation('features')}>
              <div className={getNavItemClass('features')}>Features</div>
            </div>
            <div className="flex justify-start items-center gap-1.5" onClick={() => handleNavigation('pricing')}>
              <div className={getNavItemClass('pricing')}>Pricing</div>
            </div>
            <div className="flex justify-start items-center gap-1.5" onClick={() => handleNavigation('about')}>
              <div className={getNavItemClass('about')}>About Us</div>
            </div>
            <div className="flex justify-start items-center gap-1.5" onClick={() => handleNavigation('contact')}>
              <div className={getNavItemClass('contact')}>Contact</div>
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex justify-start items-center gap-3.5">
            <Button variant="outline" size="md">
              Log in
            </Button>
            <Button variant="filled" size="md">
              Try it free
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden p-2 text-neutral-800 hover:text-primary-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`
          lg:hidden max-w-[95%] fixed top-[72px] md:top-[88px] lg:top-[104px] left-0 right-0 mx-auto rounded-2xl bg-neutral-50 shadow-lg
          transition-all duration-300 ease-in-out z-[9999]
          ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
        `}>
          <div className="flex flex-col p-6 md:p-8 gap-6">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-4">
              <div 
                className={`${getNavItemClass('home')} py-2`}
                onClick={() => handleNavigation('home')}
              >
                Home
              </div>
              <div 
                className={`${getNavItemClass('solutions')} py-2`}
                onClick={() => handleNavigation('solutions')}
              >
                Solutions
              </div>
              <div 
                className={`${getNavItemClass('features')} py-2`}
                onClick={() => handleNavigation('features')}
              >
                Features
              </div>
              <div 
                className={`${getNavItemClass('pricing')} py-2`}
                onClick={() => handleNavigation('pricing')}
              >
                Pricing
              </div>
              <div 
                className={`${getNavItemClass('about')} py-2`}
                onClick={() => handleNavigation('about')}
              >
                About Us
              </div>
              <div 
                className={`${getNavItemClass('contact')} py-2`}
                onClick={() => handleNavigation('contact')}
              >
                Contact
              </div>
            </div>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-neutral-200">
              <Button variant="outline" size="md" className="w-full">
                Log in
              </Button>
              <Button variant="filled" size="md" className="w-full">
                Try it free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
