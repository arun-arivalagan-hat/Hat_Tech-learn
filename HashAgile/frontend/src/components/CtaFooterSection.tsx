
import React from 'react';
import { HashAgileLogo } from './HashAgileLogo';

export const CtaFooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative py-12 sm:py-20 lg:py-28 bg-white text-[#13153F] text-center overflow-hidden">
        <div className="relative max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-6 z-10">
          <div className="max-w-[1060px] mx-auto flex flex-col items-center gap-4 sm:gap-6">
            <h2 className="font-bold text-[24px] sm:text-[38px] lg:text-[44px] leading-[30px] sm:leading-[46px] lg:leading-[1.2] text-[#13153F] tracking-tight font-instrument max-w-[343px] sm:max-w-none">
              Ready to Build AI-Powered Enterprise Systems?
            </h2>

            <p className="font-instrument font-normal text-[14px] sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[26px] lg:leading-[28px] text-[#625B67] max-w-[1060px]">
              HashAgile partners with organisations to build secure, scalable, and production-ready AI solutions that deliver measurable business value. Let's explore how applied AI can accelerate your enterprise transformation.
            </p>

            <div className="pt-3 sm:pt-4 w-full sm:w-auto flex justify-center">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center p-[1.5px] rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] w-full max-w-[343px] sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#6B46FE] via-[#9053F6] to-[#E6007A] rounded-full" />

                <span className="relative flex items-center justify-center gap-3.5 w-full px-8 py-3.5 sm:py-4 h-[54px] sm:h-auto rounded-full bg-gradient-to-r from-[#6B46FE] via-[#9053F6] to-[#E6007A] text-white font-semibold text-[16px] sm:text-[17px] leading-none transition-all duration-300">
                  <span>Contact Now</span>

                  <svg
                    className="w-5 h-3.5 text-white transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 20 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 6.5H14.5L18.5 1.5"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative bg-[#313043] text-[#E0DEF0] pt-12 sm:pt-16 lg:pt-[80px] pb-10 sm:pb-12 border-t border-white/10 antialiased font-[300]">
        <div className="max-w-[1245px] mx-auto px-6 sm:px-8 lg:px-6">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <a href="#" className="inline-block shrink-0">
              <HashAgileLogo isDarkBg={true} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#7C65F8] via-[#BA66FF] to-[#EC3F62] text-white shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shrink-0"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          </div>

          <div className="md:hidden flex flex-col gap-6 font-light">
            <div className="flex flex-col gap-2 font-instrument text-[14px] leading-[22px] text-[#E0DEF0]">
              <h4 className="font-[300] text-white text-[16px]">Office</h4>
              <p className="max-w-[300px] font-light text-[#E0DEF0]/90">
                Ground Floor, Rathinam Techzone, Block A1, Pollachi Main Rd, near Gate #3, Coimbatore, Tamil Nadu 641021
              </p>
            </div>

            <div className="flex flex-col gap-3 font-instrument text-[15px] text-[#E0DEF0]/90 font-light pt-2">
              <a href="#" className="hover:text-white transition-colors font-light">Home</a>
              <a href="#expertise" className="hover:text-white transition-colors font-light">Expertise</a>
              <a href="#company" className="hover:text-white transition-colors font-light">Company</a>
              <a href="#insights" className="hover:text-white transition-colors font-light">Insights</a>
              <a href="#careers" className="hover:text-white transition-colors font-light">Careers</a>
              <a href="#portfolio" className="hover:text-white transition-colors font-light">Portfolio</a>
              <a href="#contact" className="hover:text-white transition-colors font-light">Contact Us</a>
            </div>

            <div className="flex flex-col items-center gap-4 pt-10 text-center font-instrument text-[13.5px] text-[#E0DEF0]/80 font-light">
              <p className="font-light">Copyright @ 2026 Hash Agile Technologies</p>

              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-none stroke-current text-white" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="grid grid-cols-12 gap-8 lg:gap-12 pb-12">
              <div className="col-span-4 flex flex-col gap-2 font-instrument text-[14px] leading-[24px] text-[#E0DEF0]">
                <h4 className="font-[300] text-white text-[16px] mb-1">Office</h4>
                <p className="max-w-[280px] font-light">
                  Ground Floor, Rathinam Techzone, Block A1, Pollachi Main Rd, near Gate #3, Coimbatore, Tamil Nadu 641021
                </p>
              </div>

              <div className="col-span-4 flex flex-col gap-2.5 font-instrument text-[14px] leading-[24px] text-[#E0DEF0]">
                <h4 className="font-[300] text-white text-[16px] mb-1">Contact</h4>
                <p className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-white/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.47-5.116-3.762-6.586-6.586l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>+91 93451 11808</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-white/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>info@hashagile.com</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-white/80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>careers@hashagile.com</span>
                </p>
              </div>

              <div className="col-span-4 flex flex-wrap justify-start lg:justify-end items-start gap-x-6 gap-y-3 font-instrument text-[14px] text-[#E0DEF0] pt-1">
                <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
                <a href="#company" className="hover:text-white transition-colors">Company</a>
                <a href="#insights" className="hover:text-white transition-colors">Insights</a>
                <a href="#careers" className="hover:text-white transition-colors">Careers</a>
                <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </div>
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-white/10 font-instrument text-[13.5px] text-[#E0DEF0]">
              <p>Copyright @ 2026 Hash Agile Technologies</p>

              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-none stroke-current text-white" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

