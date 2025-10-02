'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HomeDesktop from '@/components/Home/HomeDesktop';
import Solutions from '@/components/Solutions';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';

export type PageType = 'home' | 'solutions' | 'features' | 'pricing' | 'about' | 'contact';

export default function MainLayout() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeDesktop />;
      case 'solutions':
        return <Solutions />;
      case 'features':
        return <Features />;
      case 'pricing':
        return <Pricing />;
      case 'about':
        return <AboutUs />;
      case 'contact':
        return <Contact />;
      default:
        return <HomeDesktop />;
    }
  };

  return (
    <div className="w-screen h-screen relative bg-neutral-50">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}
