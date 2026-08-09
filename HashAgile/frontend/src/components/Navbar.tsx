import React, { useState } from 'react';
import { HashAgileLogo } from './HashAgileLogo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('');

  const navLinks = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Company', href: '#company' },
    { name: 'Insights', href: '#insights' },
    { name: 'Careers', href: '#careers' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  const isContactActive = activeTab === 'Contact Us' || activeTab === 'Contact';

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-gray-200">
        <div className="max-w-[1512px] mx-auto px-6 lg:px-[100px] h-[80px] lg:h-[112px] flex items-center justify-between">
          <a href="#" onClick={() => setActiveTab('')} className="flex items-center shrink-0 group">
            <HashAgileLogo />
          </a>

          <nav className="hidden lg:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = activeTab === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveTab(link.name)}
                  className={`text-[16px] font-normal tracking-tight transition-all duration-300 py-1 ${
                    isActive
                      ? 'text-[#FF548B]'
                      : 'text-[#13153F] hover:text-[#EC3F62] hover:drop-shadow-[0_2px_10px_rgba(236,63,98,0.35)]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center">
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
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-[#13153F] hover:text-[#EC3F62] transition-colors ml-auto focus:outline-none"
            aria-label="Open Navigation Sidebar"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs lg:hidden transition-opacity duration-300"
        />
      )}

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl lg:hidden transform transition-transform duration-300 ease-out flex flex-col ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <img
            src="/hashagile_logo.jpeg"
            alt="HashAgile Icon"
            className="h-10 w-auto object-contain block"
          />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Close Sidebar"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 px-6 py-8 space-y-2 overflow-y-auto">
          <p className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 px-3">
            Menu Navigation
          </p>
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? 'bg-[#FF548B]/10 text-[#FF548B] font-semibold'
                    : 'text-[#13153F] hover:bg-gray-50 hover:text-[#EC3F62]'
                }`}
              >
                <span>{link.name}</span>
                <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            );
          })}
        </nav>

        <div className="p-6 border-t border-gray-100 bg-gray-50/50">
          <a
            href="#contact"
            onClick={() => {
              setActiveTab('Contact Us');
              setMobileMenuOpen(false);
            }}
            className={`group relative w-full inline-flex items-center justify-center p-[1.5px] rounded-full text-sm font-semibold transition-all shadow-md active:scale-95 ${
              isContactActive
                ? 'bg-gradient-to-r from-[#7C65F8] to-[#EC3F62]'
                : 'bg-gradient-to-r from-[#7C65F8] to-[#EC3F62] hover:from-[#7C65F8] hover:to-[#7C65F8]'
            }`}
          >
            <span
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                isContactActive
                  ? 'bg-transparent text-white'
                  : 'bg-white text-[#13153F] group-hover:bg-[#7C65F8] group-hover:text-white'
              }`}
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </a>
        </div>
      </aside>
    </>
  );
};
