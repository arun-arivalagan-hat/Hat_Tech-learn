import React, { useState } from 'react';
import pexelsTeam from '../assets/pexels-bertellifotografia-13870890 1.png';

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  gradient: string;
}

const FEATURE_CARDS: FeatureCard[] = [
  {
    id: 1,
    title: 'Enterprise-Grade Security & Compliance',
    description:
      'ISO 27001 security standards integrated into engineering and delivery practices.',
    gradient: 'from-[#EC3F62] via-[#9053F6] to-[#6B46FE]',
  },
  {
    id: 2,
    title: 'AI-First Product & Platform Thinking',
    description:
      'AI capabilities are embedded directly into system architecture and product design from the start.',
    gradient: 'from-[#6C4DE6] via-[#8B5CF6] to-[#EF5DA8]',
  },
  {
    id: 3,
    title: 'Scalable Modern Data Architecture',
    description:
      'High-throughput data platforms built for real-time analytics, governance, and enterprise LLM workloads.',
    gradient: 'from-[#7C5CFC] via-[#BA66FF] to-[#F52B71]',
  },
  {
    id: 4,
    title: 'Agile & High-Velocity Execution',
    description:
      'Cross-functional pod delivery model driving 48%+ faster product decisions and production deployments.',
    gradient: 'from-[#6538E6] via-[#9053F6] to-[#E6007A]',
  },
];

export const WhyChooseUsSection: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const activeCard = FEATURE_CARDS[activeCardIndex];

  return (
    <section className="relative py-12 sm:py-20 lg:py-28 overflow-hidden bg-white text-[#13153F]">
      <div className="relative max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-6 z-10">
        
        <div className="text-center max-w-[884px] mx-auto mb-8 sm:mb-14 lg:mb-16">
          <h2 className="font-bold text-[24px] sm:text-[36px] lg:text-[44px] leading-[30px] sm:leading-[44px] lg:leading-[1.18] text-[#13153F] tracking-tight font-instrument mb-2">
            Why Global Enterprises Choose HashAgile
          </h2>
          <p className="font-instrument font-normal text-[14px] sm:text-[17px] lg:text-[18px] leading-[20px] sm:leading-[26px] text-[#625B67]">
            Expertise Across Modern Tech Stacks for Scalable &amp; Efficient Solutions
          </p>
        </div>

        <div className="max-w-[1245px] mx-auto">
          <div
            className={`relative overflow-hidden -mx-4 sm:mx-0 rounded-none sm:rounded-[36px] bg-gradient-to-r ${activeCard.gradient} text-white py-8 px-6 sm:p-10 lg:p-14 min-h-[220px] sm:min-h-[340px] flex items-center transition-all duration-500 shadow-xl`}
          >
            <div className="w-full flex items-center justify-between gap-4">
              
              <div className="hidden sm:flex justify-center lg:justify-start shrink-0">
                <div className="relative w-[180px] sm:w-[240px] lg:w-[260px] aspect-[4/3.2] rounded-[45%_55%_65%_35%/55%_45%_55%_45%] overflow-hidden border-2 border-white/40 shadow-lg transition-transform duration-500 hover:scale-[1.03]">
                  <img
                    src={pexelsTeam}
                    alt="HashAgile Enterprise Team"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-2 sm:gap-3 text-left">
                <h3 className="font-bold text-[20px] sm:text-[30px] lg:text-[36px] leading-[26px] sm:leading-[37px] text-white font-instrument tracking-tight max-w-[520px]">
                  {activeCard.title}
                </h3>
                <p className="font-instrument font-normal text-[13.5px] sm:text-[16px] leading-[20px] sm:leading-[25px] text-white/90 max-w-[500px]">
                  {activeCard.description}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-1.5 shrink-0">
                {FEATURE_CARDS.map((card, idx) => (
                  <button
                    key={card.id}
                    onClick={() => setActiveCardIndex(idx)}
                    className={`transition-all duration-300 cursor-pointer rounded-full ${
                      idx === activeCardIndex
                        ? 'w-1 h-7 sm:w-2.5 sm:h-8 bg-white opacity-100'
                        : 'w-1 h-3 sm:w-2.5 sm:h-2.5 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
