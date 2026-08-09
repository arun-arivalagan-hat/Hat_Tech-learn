import React, { useState } from 'react';
import pexelsTeam from '../assets/pexels-bertellifotografia-13870890 1.png';

interface DeliveryTab {
  id: 'idea' | 'build' | 'ship';
  label: string;
  description: string;
}

const DELIVERY_TABS: DeliveryTab[] = [
  {
    id: 'idea',
    label: 'Idea',
    description:
      'Every engagement starts with a focused discovery process that aligns business goals, user needs, and technical feasibility.',
  },
  {
    id: 'build',
    label: 'Build',
    description:
      'Agile engineering sprints using battle-tested AI patterns, modular architecture, and continuous integration pipelines.',
  },
  {
    id: 'ship',
    label: 'Ship',
    description:
      'Production deployment with automated testing, observability dashboards, and enterprise SLA performance monitoring.',
  },
];

export const ProductEngineeringSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<'idea' | 'build' | 'ship'>('idea');

  const activeTab = DELIVERY_TABS.find((t) => t.id === activeTabId) || DELIVERY_TABS[0];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-[#EFEBFF] text-[#13153F]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#6C4DE6]/15 via-[#EF5DA8]/10 to-transparent blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#EF5DA8]/15 via-[#6C4DE6]/10 to-transparent blur-[130px]" />
      </div>

      <div className="relative max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-6 z-10">
        <div className="max-w-[1245px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-[60px] items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-10 lg:gap-[48px] max-w-[628px]">
            <div className="flex gap-3 sm:gap-4 items-stretch">
              <div className="w-[4px] sm:w-[5px] rounded-full bg-gradient-to-b from-[#EF5DA8] to-[#6C4DE6] shrink-0" />
              
              <h2 className="font-bold text-[24px] sm:text-[36px] lg:text-[44px] leading-[30px] sm:leading-[44px] lg:leading-[1.18] text-[#13153F] tracking-tight font-instrument max-w-[343px] sm:max-w-none">
                Product Engineering That Moves at the Speed of AI
              </h2>
            </div>

            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <h3 className="font-semibold text-[18px] sm:text-[20px] lg:text-[22px] leading-[24px] sm:leading-[28px] text-[#13153F] font-instrument">
                  What we do
                </h3>
                <p className="font-instrument font-normal text-[14px] sm:text-[16px] lg:text-[17px] leading-[22px] sm:leading-[25px] lg:leading-[26px] text-[#625B67]">
                  We design and build AI-enabled products, platforms, and workflows that help organizations automate decisions, improve operations, and create smarter customer experiences.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2">
                <h3 className="font-semibold text-[18px] sm:text-[20px] lg:text-[22px] leading-[24px] sm:leading-[28px] text-[#13153F] font-instrument">
                  How we do
                </h3>
                <p className="font-instrument font-normal text-[14px] sm:text-[16px] lg:text-[17px] leading-[22px] sm:leading-[25px] lg:leading-[26px] text-[#625B67]">
                  We combine AI strategy, data engineering, automation, and product delivery to turn business goals into practical systems your teams can use and scale.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2">
                <h3 className="font-semibold text-[18px] sm:text-[20px] lg:text-[22px] leading-[24px] sm:leading-[28px] text-[#13153F] font-instrument">
                  Why trust us
                </h3>
                <p className="font-instrument font-normal text-[14px] sm:text-[16px] lg:text-[17px] leading-[22px] sm:leading-[25px] lg:leading-[26px] text-[#625B67]">
                  Our engineering leaders bring deep delivery experience across cloud, data, and AI transformation, helping businesses move from experimentation to measurable impact.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[475px] aspect-[475/554] mx-auto flex items-center justify-center mt-4 lg:mt-0">
            <div className="absolute -left-7 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#23CFA5] shadow-md border border-[#23CFA5]/40 z-30">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="8" />
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="12" y1="18" x2="12" y2="22" />
                <line x1="2" y1="12" x2="6" y2="12" />
                <line x1="18" y1="12" x2="22" y2="12" />
              </svg>
            </div>

            <div className="absolute inset-2 sm:inset-4 rounded-[28px] sm:rounded-[36px] bg-white/40 border border-white/80 backdrop-blur-md shadow-[0_12px_40px_rgba(108,77,230,0.08)] pointer-events-none" />

            <span className="absolute top-4 left-1/2 w-2.5 h-2.5 rounded-full bg-[#6C4DE6] shadow-sm z-20" />
            <span className="absolute top-1/3 -left-2 w-3 h-3 rounded-full bg-[#EF5DA8] shadow-sm z-20" />
            <span className="absolute bottom-1/3 -right-2 w-2.5 h-2.5 rounded-full bg-[#EF5DA8] shadow-sm z-20" />
            <span className="absolute bottom-6 left-1/3 w-2 h-2 rounded-full bg-[#6C4DE6] shadow-sm z-20" />

            <div className="relative z-10 w-[78%] aspect-[4/3.2] rounded-[18px] sm:rounded-[26px] overflow-hidden border-2 border-white shadow-lg bg-white">
              <img
                src={pexelsTeam}
                alt="Product Engineering Team Collaboration"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="absolute top-0 sm:top-2 right-0 sm:right-2 z-20 bg-gradient-to-r from-[#6538E6] via-[#9053F6] to-[#E6007A] text-white p-4 sm:p-5.5 rounded-[22px] sm:rounded-[26px] shadow-xl border border-white/20 max-w-[165px] sm:max-w-[215px] transform hover:scale-[1.03] transition-transform duration-300">
              <p className="font-instrument font-normal text-[11px] sm:text-[12.5px] text-white/90 mb-0.5 sm:mb-1">
                Delivery velocity
              </p>
              <h4 className="font-instrument font-bold text-[22px] sm:text-[28px] leading-none mb-1 sm:mb-1.5 text-white">
                +48%
              </h4>
              <p className="font-instrument font-normal text-[11px] sm:text-[12.5px] text-white/90">
                Faster product decisions
              </p>
            </div>

            <div className="absolute -bottom-2 sm:bottom-2 left-0 sm:left-2 z-20 bg-white rounded-[22px] sm:rounded-[26px] p-4 sm:p-5.5 shadow-2xl border border-white/90 max-w-[260px] sm:max-w-[325px] text-[#13153F] transition-all duration-300">
              <h5 className="font-instrument font-semibold text-[13.5px] sm:text-[15px] text-[#13153F] mb-2.5 sm:mb-3">
                Delivery loop
              </h5>

              <div className="flex items-center gap-2 sm:gap-2.5 mb-2.5 sm:mb-3">
                {DELIVERY_TABS.map((tab) => {
                  const isSelected = tab.id === activeTabId;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full font-instrument text-[12px] sm:text-[13px] font-semibold transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#6538E6] via-[#9053F6] to-[#E6007A] text-white shadow-sm'
                          : 'bg-[#EBEBF8] text-[#13153F] hover:bg-[#E0E0F5]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <p className="font-instrument font-normal text-[11px] sm:text-[12px] leading-[16px] sm:leading-[18px] text-[#625B67]">
                {activeTab.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
