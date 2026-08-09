import React, { useState } from 'react';
import pexelsTeam from '../assets/pexels-bertellifotografia-13870890 1.png';

interface ServiceItem {
  id: string;
  label: string;
  activeTitle: string;
  activeDescription: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ai-ml',
    label: 'AI & Machine Learning Solutions',
    activeTitle: 'Engineering AI Solutions for Data-Driven Enterprises',
    activeDescription:
      'Enterprise leaders today need production-ready AI systems that integrate seamlessly with existing platforms and deliver real operational and business value.',
  },
  {
    id: 'data-engineering',
    label: 'Data Engineering & Modern Data Platforms',
    activeTitle: 'Architecting Modern Data Platforms & Intelligent Pipelines',
    activeDescription:
      'Unify fragmented enterprise data streams into high-performance, real-time analytics engines engineered for reliability, enterprise governance, and instant query response.',
  },
  {
    id: 'visual-analytics',
    label: 'Visual Analytics & Business Intelligence',
    activeTitle: 'Transforming Complex Enterprise Data into Actionable Insights',
    activeDescription:
      'Empower executive teams and domain experts with intuitive real-time dashboards, predictive visual models, and decision-ready intelligence engines.',
  },
  {
    id: 'mobility-apps',
    label: 'Mobility & Intelligent Applications',
    activeTitle: 'Building High-Performance Mobile & Edge AI Applications',
    activeDescription:
      'Deliver fluid, highly responsive multi-platform digital experiences powered by on-device intelligence, cloud-synchronized microservices, and robust UX architecture.',
  },
];

export const ServicesSection: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>('ai-ml');

  const activeService =
    SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-white text-[#13153F]">
      <div className="relative max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-6">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-semibold text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.2] text-[#13153F] tracking-tight font-instrument">
            Our Services
          </h2>
        </div>

        <div className="max-w-[1245px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[96px] items-center">
          <div className="hidden lg:flex lg:col-span-5 flex-col items-start gap-5 sm:gap-6">
            <div className="relative w-[180px] sm:w-[220px] lg:w-[240px] aspect-[4/3] rounded-[45%_55%_65%_35%/55%_45%_55%_45%] overflow-hidden shadow-sm border border-[#13153F]/10 transition-transform duration-500 hover:scale-[1.03]">
              <img
                src={pexelsTeam}
                alt="Engineering Team"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="font-semibold text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] sm:leading-[38px] text-[#13153F] tracking-tight font-instrument">
                Capabilities Include:
              </h3>

              <p className="font-instrument font-normal text-[16px] sm:text-[18px] leading-[24px] sm:leading-[26px] text-[#525B67] tracking-normal max-w-[385px]">
                Specialized expertise across the technologies shaping modern business.
              </p>
            </div>

            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center p-[1.5px] rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#7C5CFC] via-[#BA66FF] to-[#F52B71] rounded-full" />

              <span className="relative flex items-center gap-3.5 px-7 py-2.5 sm:py-3 rounded-full bg-white text-[#13153F] font-semibold text-[16px] leading-none transition-all duration-300 group-hover:bg-white/95">
                <span>Contact Now</span>

                <svg
                  className="w-5 h-3.5 text-[#13153F] transition-transform duration-300 group-hover:translate-x-1"
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

          <div className="lg:col-span-7 w-full max-w-[358px] lg:max-w-none mx-auto flex flex-col">
            <div className="relative overflow-hidden rounded-[20px] lg:rounded-[32px] border border-[rgba(120,140,180,0.18)] bg-[#7C5CFC] transition-all duration-300">
              <div className="relative overflow-hidden bg-gradient-to-r from-[#6B46FE] via-[#8B5CF6] to-[#E6007A] p-5 sm:p-7 lg:p-9 text-white pb-8 lg:pb-10 transition-all duration-500">
                <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white/20 border border-white/30 backdrop-blur-md flex items-center justify-center mb-3 sm:mb-4">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
                    />
                  </svg>
                </div>

                <h4 className="font-instrument font-semibold text-[16px] sm:text-[20px] lg:text-[24px] leading-[22px] sm:leading-[28px] lg:leading-[32px] tracking-tight mb-1.5 sm:mb-2">
                  {activeService.activeTitle}
                </h4>

                <p className="font-instrument font-normal text-[13px] sm:text-[14px] lg:text-[15px] leading-[18px] sm:leading-[22px] lg:leading-[24px] text-white/90 max-w-[600px]">
                  {activeService.activeDescription}
                </p>
              </div>

              <div className="relative w-full h-6 lg:h-8 -mt-6 lg:-mt-8 pointer-events-none z-10">
                <svg
                  className="w-full h-full text-white fill-current block"
                  viewBox="0 0 672 32"
                  preserveAspectRatio="none"
                >
                  <path d="M 0 32 C 0 14 14 0 32 0 H 640 C 658 0 672 14 672 32 V 32 H 0 Z" />
                </svg>
              </div>

              <div className="flex flex-col bg-white">
                {SERVICES_DATA.map((service, index) => {
                  const isActive = service.id === activeServiceId;
                  return (
                    <React.Fragment key={service.id}>
                      {index > 0 && (
                        <div className="relative w-full h-3 sm:h-4 -my-1.5 sm:-my-2 pointer-events-none z-10 overflow-visible">
                          <svg
                            className="w-full h-full text-[rgba(120,140,180,0.22)] stroke-current overflow-visible"
                            viewBox="0 0 672 16"
                            fill="none"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M 0 16 C 0 7 7 0 16 0 H 656 C 665 0 672 7 672 16"
                              strokeWidth="1.2"
                              vectorEffect="non-scaling-stroke"
                            />
                          </svg>
                        </div>
                      )}

                      <button
                        onClick={() => setActiveServiceId(service.id)}
                        className={`w-full flex items-center gap-3 lg:gap-5 px-4 sm:px-6 lg:px-[36px] py-2.5 sm:py-3.5 lg:py-[20px] text-left transition-all duration-200 cursor-pointer ${
                          isActive
                            ? 'bg-[#F4F2FF]/80 text-[#13153F]'
                            : 'bg-white hover:bg-[#F9FAFC] text-[#13153F]/90'
                        } ${
                          index === SERVICES_DATA.length - 1
                            ? 'rounded-b-[24px] lg:rounded-b-[32px]'
                            : ''
                        }`}
                      >
                        <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 shrink-0 rounded-full bg-gradient-to-r from-[#6B46FE] via-[#8B5CF6] to-[#E6007A] shadow-sm" />

                        <span
                          className={`font-instrument text-[14px] sm:text-[17px] lg:text-[24px] leading-[20px] sm:leading-[26px] lg:leading-[47px] tracking-[0%] transition-colors duration-200 ${
                            isActive
                              ? 'font-semibold text-[#13153F]'
                              : 'font-semibold text-[#13153F]/90 hover:text-[#13153F]'
                          }`}
                        >
                          {service.label}
                        </span>
                      </button>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
