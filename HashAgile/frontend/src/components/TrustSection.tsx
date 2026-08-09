import React from 'react';
import isoImg from '../assets/iso.png';
import greatPlaceImg from '../assets/greatplace.png';
import hashagileLogo from '../assets/hashagile_logo.jpeg';
import pexelsTeam from '../assets/pexels-bertellifotografia-13870890 1.png';

export const TrustSection: React.FC = () => {
  return (
    <section className="relative pt-6 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24 overflow-hidden bg-[#F0EBFC]">
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] pointer-events-none opacity-25 sm:opacity-80 z-0">
        <svg viewBox="0 0 280 280" className="w-full h-full">
          <path d="M 260 140 A 120 120 0 0 1 140 260" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
          <text x="264" y="132" fill="white" fontSize="10" opacity="0.6" fontFamily="sans-serif">0°</text>
          <text x="228" y="228" fill="white" fontSize="10" opacity="0.6" fontFamily="sans-serif">45°</text>
          <text x="132" y="272" fill="white" fontSize="10" opacity="0.6" fontFamily="sans-serif">90°</text>

          <circle cx="140" cy="140" r="120" fill="none" stroke="#7C65F8" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.25" />
          <circle cx="140" cy="140" r="92" fill="none" stroke="#BA66FF" strokeWidth="0.8" strokeOpacity="0.2" />
          <circle cx="140" cy="140" r="64" fill="none" stroke="#EC3F62" strokeWidth="0.8" strokeOpacity="0.25" />
          <circle cx="140" cy="140" r="36" fill="none" stroke="#7C65F8" strokeWidth="0.8" strokeOpacity="0.3" />

          <line x1="20" y1="140" x2="260" y2="140" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="140" y1="20" x2="140" y2="260" stroke="#7C65F8" strokeWidth="0.8" strokeOpacity="0.3" />
          <line x1="55" y1="55" x2="225" y2="225" stroke="#BA66FF" strokeWidth="0.6" strokeOpacity="0.2" />

          <path d="M140 140 L260 140 A120 120 0 0 1 140 260 Z" fill="url(#radar-sweep-corner-origin)" opacity="0.2" />

          <circle cx="140" cy="140" r="18" fill="#EC3F62" fillOpacity="0.15" className="animate-ping" />
          <circle cx="140" cy="140" r="12" fill="#BA66FF" fillOpacity="0.3" />
          <circle cx="140" cy="140" r="7" fill="#8B5CF6" fillOpacity="0.7" />
          <circle cx="140" cy="140" r="3.5" fill="#EC3F62" opacity="0.7" />

          <circle cx="190" cy="90" r="4.5" fill="#EC3F62" fillOpacity="0.6" />
          <circle cx="190" cy="90" r="8" stroke="#EC3F62" strokeWidth="0.8" fill="none" opacity="0.35" />

          <circle cx="185" cy="210" r="4" fill="#7C65F8" fillOpacity="0.6" />
          <circle cx="185" cy="210" r="7" stroke="#7C65F8" strokeWidth="0.8" fill="none" opacity="0.3" />

          <circle cx="260" cy="140" r="3" fill="#EC3F62" opacity="0.7" />

          <defs>
            <linearGradient id="radar-sweep-corner-origin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C65F8" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#BA66FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#EC3F62" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#BA66FF]/25 via-[#7C65F8]/15 to-transparent blur-[140px]" />
        <div className="absolute bottom-[5%] left-[5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#EC3F62]/15 via-[#7C65F8]/12 to-transparent blur-[130px]" />
      </div>

      <div className="relative max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-6 z-10">
        <div className="text-center max-w-[720px] mx-auto mb-8 sm:mb-12">
          <h2 className="font-bold text-[24px] sm:text-[36px] lg:text-[44px] leading-[30px] sm:leading-[45px] lg:leading-[55px] text-[#13153F] tracking-tight">
            Powered by Trust &amp; Excellence
          </h2>
          <p className="font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#36304A] mt-2 sm:mt-2.5">
            Security, engineering excellence, and a people-first culture shape how we build, collaborate, and deliver.
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-4.5 items-center">
          <div className="col-span-4 sm:col-span-6 lg:col-span-6 flex flex-col gap-6">
            <div className="bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between border border-[#E5E8F3]">
              <div>
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                      <img src={isoImg} alt="ISO 27001:2022 Certification" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[22px] sm:text-[24px] leading-[28px] sm:leading-[30px] text-[#13153F]">
                        ISO 27001 : 2022
                      </h3>
                      <p className="font-normal text-[15px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#625B67] mt-0.5">
                        Information Security Management
                      </p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-flex items-center px-3.5 py-1 rounded-full text-[12px] font-medium bg-[#F3E8FF] text-[#8B5CF6] border border-[#E9D5FF]/80 whitespace-nowrap shrink-0">
                    Certified | Since 2022
                  </span>
                </div>

                <p className="font-normal text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#625B67] mt-4 sm:mt-5">
                  Internationally recognized standard for establishing, implementing, and maintaining a rigorous information security management system across our entire infrastructure.
                </p>
              </div>

              <div className="mt-5 sm:hidden">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[12px] font-medium bg-[#F3E8FF] text-[#8B5CF6] border border-[#E9D5FF]/80 whitespace-nowrap">
                  Certified | Since 2022
                </span>
              </div>
            </div>

            <div className="bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between border border-[#E5E8F3]">
              <div>
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                      <img src={greatPlaceImg} alt="Great Place to Work Certified" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[22px] sm:text-[24px] leading-[28px] sm:leading-[30px] text-[#13153F]">
                        Great Place to Work
                      </h3>
                      <p className="font-normal text-[15px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-[#625B67] mt-0.5">
                        Workplace Culture &amp; Employee Trust
                      </p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-flex items-center px-3.5 py-1 rounded-full text-[12px] font-medium bg-[#F3E8FF] text-[#8B5CF6] border border-[#E9D5FF]/80 whitespace-nowrap shrink-0">
                    Certified | Since 2024
                  </span>
                </div>

                <p className="font-normal text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#625B67] mt-4 sm:mt-5">
                  Awarded based on confidential employee surveys measuring trust, pride, and camaraderie benchmarked against thousands of organizations worldwide.
                </p>
              </div>

              <div className="mt-5 sm:hidden">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[12px] font-medium bg-[#F3E8FF] text-[#8B5CF6] border border-[#E9D5FF]/80 whitespace-nowrap">
                  Certified | Since 2024
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-4 sm:col-span-6 lg:col-span-6 relative flex items-center justify-center py-6">
            <div className="relative w-full max-w-[540px] aspect-square flex items-center justify-center">
              <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
                <polygon points="200,30 365,150 305,345 95,345 35,150" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.85" />
                <polygon points="200,72 324,162 279,308 121,308 76,162" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.65" />
                <polygon points="200,115 282,175 252,272 148,272 118,175" fill="none" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
                <polygon points="200,158 241,188 226,235 174,235 159,188" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.35" />

                <line x1="200" y1="200" x2="200" y2="30" stroke="white" strokeWidth="1.5" strokeOpacity="0.7" />
                <line x1="200" y1="200" x2="365" y2="150" stroke="white" strokeWidth="1.5" strokeOpacity="0.7" />
                <line x1="200" y1="200" x2="305" y2="345" stroke="white" strokeWidth="1.5" strokeOpacity="0.7" />
                <line x1="200" y1="200" x2="95" y2="345" stroke="white" strokeWidth="1.5" strokeOpacity="0.7" />
                <line x1="200" y1="200" x2="35" y2="150" stroke="white" strokeWidth="1.5" strokeOpacity="0.7" />

                <line x1="200" y1="200" x2="282.5" y2="90" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="200" y1="200" x2="335" y2="247.5" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="200" y1="200" x2="200" y2="345" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="200" y1="200" x2="65" y2="247.5" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="200" y1="200" x2="117.5" y2="90" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
              </svg>

              <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-[#E9D5FF] via-white to-[#F3E8FF] border border-white/90 shadow-[0_8px_25px_rgba(124,101,248,0.18)]">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center p-3.5 shadow-sm border border-[#E9D5FF]/60">
                    <img src={hashagileLogo} alt="HashAgile" className="w-full h-full object-contain rounded-full" />
                  </div>
                </div>
              </div>

              <div className="absolute top-[3%] left-1/2 -translate-x-1/2 flex flex-col items-center z-20 text-center">
                <div className="mb-2">
                  <h4 className="font-bold text-[14px] sm:text-[16px] leading-[22px] sm:leading-[28px] text-[#13153F]">200+ Engineers</h4>
                  <p className="font-normal text-[10px] sm:text-[12px] leading-[14px] sm:leading-[18.4px] text-[#625B67]">AI &amp; Data Specialists</p>
                </div>
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F4F3FD] shadow-[0_10px_30px_rgba(124,101,248,0.18)] border-2 border-white/90 ring-1 ring-[#7C65F8]/20 flex items-center justify-center text-[#7C65F8] transition-transform duration-300 hover:scale-105">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#7C65F8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-[#8B5CF6]" />
                </div>
              </div>

              <div className="absolute bottom-[3%] left-[5%] flex flex-col items-center z-20 text-center">
                <div className="relative mb-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F4F3FD] shadow-[0_10px_30px_rgba(124,101,248,0.18)] border-2 border-white/90 ring-1 ring-[#7C65F8]/20 flex items-center justify-center text-[#7C65F8] transition-transform duration-300 hover:scale-105">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#7C65F8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                    </svg>
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-0 h-0 border-b-[7px] border-b-[#8B5CF6] border-l-[7px] border-l-transparent rotate-[45deg]" />
                </div>
                <div>
                  <h4 className="font-bold text-[14px] sm:text-[16px] leading-[22px] sm:leading-[28px] text-[#13153F]">AI &amp; Data Platform</h4>
                  <p className="font-normal text-[10px] sm:text-[12px] leading-[14px] sm:leading-[18.4px] text-[#625B67]">Built for enterprise-scale</p>
                </div>
              </div>

              <div className="absolute bottom-[3%] right-[5%] flex flex-col items-center z-20 text-center">
                <div className="relative mb-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F4F3FD] shadow-[0_10px_30px_rgba(124,101,248,0.18)] border-2 border-white/90 ring-1 ring-[#7C65F8]/20 flex items-center justify-center text-[#7C65F8] transition-transform duration-300 hover:scale-105">
                    <svg className="w-9 h-9 sm:w-11 sm:h-11 text-[#7C65F8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9.5" />
                      <path d="M 3.2 11.5 C 5.5 8 9.5 8 11.5 11.5 C 13.5 15 17.5 10 20.8 11.5" />
                      <path d="M 3.5 15.5 C 6 15 8.5 17.5 12 21.2" />
                      <path d="M 14.5 12 C 14.5 16 17.5 17.5 20.2 15" />
                    </svg>
                  </div>
                  <div className="absolute -top-0.5 -left-0.5 w-0 h-0 border-b-[7px] border-b-[#8B5CF6] border-r-[7px] border-r-transparent rotate-[-45deg]" />
                </div>
                <div>
                  <h4 className="font-bold text-[14px] sm:text-[16px] leading-[22px] sm:leading-[28px] text-[#13153F]">Global Delivery</h4>
                  <p className="font-normal text-[10px] sm:text-[12px] leading-[14px] sm:leading-[18.4px] text-[#625B67]">Onshore, offshore, hybrid</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 flex justify-start">
          <div className="w-[140px] sm:w-[180px] h-[75px] sm:h-[95px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden shadow-md border-2 border-white transform -rotate-6 transition-transform duration-300 hover:rotate-0">
            <img src={pexelsTeam} alt="Team" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
};
