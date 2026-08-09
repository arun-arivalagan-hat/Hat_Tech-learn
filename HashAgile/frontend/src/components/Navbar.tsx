import React, { useState, useEffect } from 'react';
import { HashAgileLogo } from './HashAgileLogo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('Home');

  const desktopNavLinks = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Company', href: '#company' },
    { name: 'Insights', href: '#insights' },
    { name: 'Careers', href: '#careers' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  const mobileNavLinks = [
    { name: 'Home', href: '#' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Company', href: '#company' },
    { name: 'Insights', href: '#insights' },
    { name: 'Careers', href: '#careers' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact Us', href: '#contact' },
  ];

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const isContactActive = activeTab === 'Contact Us' || activeTab === 'Contact';

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white transition-all duration-300 border-b border-[#111836]/10">
        <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-6 h-[64px] sm:h-[72px] lg:h-[80px] flex items-center justify-between lg:grid lg:grid-cols-12 lg:gap-4.5">
          <a
            href="#"
            onClick={() => {
              setActiveTab('Home');
              setMobileMenuOpen(false);
            }}
            className="flex items-center shrink-0 group lg:col-span-3"
          >
            <HashAgileLogo />
          </a>

          <nav className="hidden lg:flex lg:col-span-6 items-center justify-center gap-5 lg:gap-7">
            {desktopNavLinks.map((link) => {
              const isActive = activeTab === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveTab(link.name)}
                  className={`text-[16px] font-normal tracking-tight transition-all duration-300 py-1 ${
                    isActive
                      ? 'text-[#EC3F62] font-medium'
                      : 'text-[#13153F] hover:text-[#EC3F62]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex lg:col-span-3 items-center justify-end">
            <a
              href="#contact"
              onClick={() => setActiveTab('Contact Us')}
              className={`group relative inline-flex items-center justify-center p-[1.5px] rounded-full text-[15px] font-medium transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] ${
                isContactActive
                  ? 'bg-gradient-to-r from-[#7C65F8] to-[#EC3F62]'
                  : 'bg-gradient-to-r from-[#7C65F8] to-[#EC3F62] hover:from-[#7C65F8] hover:to-[#7C65F8]'
              }`}
            >
              <span
                className={`flex items-center gap-2.5 px-7 py-3 rounded-full transition-all duration-300 ${
                  isContactActive
                    ? 'bg-transparent text-white'
                    : 'bg-white text-[#13153F] group-hover:bg-[#7C65F8] group-hover:text-white'
                }`}
              >
                Contact Us
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 17h15L12 9" />
                </svg>
              </span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#EC3F62] transition-colors focus:outline-none"
            aria-label="Open Navigation Menu"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-white flex flex-col justify-between overflow-y-auto no-scrollbar lg:hidden transition-transform duration-200 ease-out transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 h-[68px] sm:h-[76px] shadow-sm shrink-0">
          <a
            href="#"
            onClick={() => {
              setActiveTab('Home');
              setMobileMenuOpen(false);
            }}
            className="flex items-center"
          >
            <HashAgileLogo />
          </a>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-gray-600 hover:text-[#EC3F62] transition-colors focus:outline-none"
            aria-label="Close Navigation Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 px-6 sm:px-8 py-6 flex flex-col gap-5 sm:gap-6">
          {mobileNavLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`text-[20px] sm:text-[22px] tracking-tight transition-colors duration-150 ${isActive
                    ? 'text-[#FF548B] font-medium'
                    : 'text-[#13153F] hover:text-[#EC3F62]'
                  }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="p-6 sm:px-10 pb-8 sm:pb-10 shrink-0">
          <a
            href="#contact"
            onClick={() => {
              setActiveTab('Contact Us');
              setMobileMenuOpen(false);
            }}
            className="w-full inline-flex items-center justify-center h-[56px] px-8 rounded-full text-[17px] font-medium text-white shadow-lg active:scale-[0.98] transition-transform duration-150 bg-gradient-to-r from-[#7C65F8] via-[#BA66FF] to-[#EC3F62] hover:opacity-95"
          >
            <span className="flex items-center justify-center gap-2.5">
              Contact Now
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H9M17 7V15" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </>
  );
};
