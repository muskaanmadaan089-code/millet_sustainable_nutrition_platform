import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';

export const Layout = ({ children }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Onboarding has a specialized mobile-like centered layout as shown in the Stitch design
  const isOnboarding = location.pathname === '/onboarding';

  if (isOnboarding) {
    return (
      <div className="min-h-screen bg-surface flex flex-col justify-center items-center p-0 sm:p-4">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col">
      <Navbar onOpenMobileMenu={() => setMobileMenuOpen(true)} />
      
      <div className="flex-1 flex w-full">
        <Sidebar isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        
        {/* Main Workspace Canvas */}
        <main className="flex-1 w-full md:pl-72 pt-[68px] pb-24 md:pb-12 min-h-[calc(100vh-68px)] overflow-x-hidden">
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
            {children}
          </div>
        </main>
      </div>

      <MobileNav />
    </div>
  );
};
